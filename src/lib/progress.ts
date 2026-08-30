import { create } from "zustand";
import { persist } from "zustand/middleware";
import { gates } from "@/data/content";
import { weeks } from "@/data/weeks";

export type WeekChecks = {
  learned: boolean;
  applied: boolean;
  delivered: boolean;
  interview: boolean;
};

const emptyChecks = (): WeekChecks => ({
  learned: false,
  applied: false,
  delivered: false,
  interview: false,
});

function initialWeeks(): Record<number, WeekChecks> {
  const out: Record<number, WeekChecks> = {};
  for (const w of weeks) out[w.id] = emptyChecks();
  return out;
}

function initialGates(): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  for (const g of gates) out[g.id] = false;
  return out;
}

type ProgressState = {
  weeks: Record<number, WeekChecks>;
  gates: Record<string, boolean>;
  notes: Record<number, string>;
  toggleWeek: (id: number, key: keyof WeekChecks) => void;
  setNote: (id: number, note: string) => void;
  toggleGate: (id: string) => void;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      weeks: initialWeeks(),
      gates: initialGates(),
      notes: {},
      toggleWeek: (id, key) =>
        set((s) => {
          const current = s.weeks[id] ?? emptyChecks();
          return {
            weeks: {
              ...s.weeks,
              [id]: { ...current, [key]: !current[key] },
            },
          };
        }),
      setNote: (id, note) =>
        set((s) => ({
          notes: { ...s.notes, [id]: note },
        })),
      toggleGate: (id) =>
        set((s) => ({
          gates: { ...s.gates, [id]: !s.gates[id] },
        })),
      reset: () =>
        set({
          weeks: initialWeeks(),
          gates: initialGates(),
          notes: {},
        }),
    }),
    {
      name: "shopx-fullstack-progress",
      skipHydration: true,
    },
  ),
);

export function weekScore(c?: WeekChecks) {
  if (!c) return 0;
  return (
    Number(c.learned) +
    Number(c.applied) +
    Number(c.delivered) +
    Number(c.interview)
  );
}

export function isWeekDone(c?: WeekChecks) {
  return weekScore(c) === 4;
}

export function useProgressStats() {
  const weekMap = useProgress((s) => s.weeks);
  const gateMap = useProgress((s) => s.gates);

  let checks = 0;
  let doneWeeks = 0;
  for (const w of weeks) {
    const c = weekMap[w.id];
    const score = weekScore(c);
    checks += score;
    if (score === 4) doneWeeks += 1;
  }
  const gateDone = gates.filter((g) => gateMap[g.id]).length;
  const totalChecks = weeks.length * 4;
  const current =
    weeks.find((w) => weekScore(weekMap[w.id]) < 4) ?? weeks[weeks.length - 1];

  return {
    checks,
    totalChecks,
    doneWeeks,
    totalWeeks: weeks.length,
    gateDone,
    totalGates: gates.length,
    percent: Math.round((checks / totalChecks) * 100),
    current,
  };
}

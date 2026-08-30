import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { months } from "@/data/content";
import { weeks } from "@/data/weeks";
import { useProgress, weekScore } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { WeekCard } from "@/components/week/week-card";

type Search = { month?: number };

export const Route = createFileRoute("/weeks/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const raw = s.month;
    const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : NaN;
    return { month: n >= 1 && n <= 6 ? n : undefined };
  },
  component: WeeksPage,
});

function WeeksPage() {
  const { month } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");
  const weekMap = useProgress((s) => s.weeks);

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return weeks.filter((w) => {
      if (month && w.month !== month) return false;
      const score = weekScore(weekMap[w.id]);
      if (filter === "done" && score !== 4) return false;
      if (filter === "open" && score === 4) return false;
      if (!query) return true;
      const blob = [
        w.title,
        w.goal,
        w.deliverable,
        ...w.backend.learn,
        ...w.frontend.learn,
        ...w.interview,
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(query);
    });
  }, [month, q, filter, weekMap]);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">24 أسبوع</p>
        <h1 className="mt-1 text-2xl font-semibold">الخطة الأسبوعية</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          كل أسبوع وحدة مستقلة: هدف، Backend، Frontend، تسليم، سؤال إنترفيو.
          الأسبوع يُقفل لما التسليم يبقى في Git مش لما الفيديو يخلص.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <FilterChip
          active={!month}
          onClick={() => navigate({ search: { month: undefined } })}
        >
          كل الشهور
        </FilterChip>
        {months.map((m) => (
          <FilterChip
            key={m.id}
            active={month === m.id}
            onClick={() => navigate({ search: { month: m.id } })}
          >
            شهر {m.id}
          </FilterChip>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ابحث: JWT، Redis، سلة، Playwright…"
          className="sm:flex-1"
        />
        <div className="flex gap-2">
          {(
            [
              ["all", "الكل"],
              ["open", "مفتوح"],
              ["done", "تم"],
            ] as const
          ).map(([k, label]) => (
            <FilterChip key={k} active={filter === k} onClick={() => setFilter(k)}>
              {label}
            </FilterChip>
          ))}
        </div>
      </div>

      <p className="text-xs text-faint">{list.length} أسبوع</p>

      <div className="grid gap-3">
        {list.map((w) => (
          <WeekCard key={w.id} week={w} />
        ))}
        {list.length === 0 && (
          <p className="rounded-xl bg-surface px-4 py-10 text-center text-sm text-muted">
            مفيش أسبوع مطابق. غيّر البحث أو الفلتر.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 rounded-full px-3 text-sm transition-colors",
        active ? "bg-forest text-primary-foreground" : "bg-surface text-ink-soft hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

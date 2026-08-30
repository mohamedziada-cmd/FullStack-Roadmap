import { Checkbox } from "@/components/ui/checkbox";
import type { WeekChecks } from "@/lib/progress";
import { useProgress } from "@/lib/progress";

const items: { key: keyof WeekChecks; label: string; hint: string }[] = [
  { key: "learned", label: "اتعلم", hint: "المفاهيم اتقرأت واتفهمت" },
  { key: "applied", label: "اتطبق في المشروع", hint: "ظهر في الكود — API أو واجهة" },
  { key: "delivered", label: "التسليم موجود في Git", hint: "Commit ظاهر، مش فيديو خلصان" },
  { key: "interview", label: "أقدر أجاوب سؤال الأسبوع بصوت عالي", hint: "من غير ما تقرأ من الشاشة" },
];

export function CheckRow({ weekId }: { weekId: number }) {
  const checks = useProgress((s) => s.weeks[weekId]);
  const toggle = useProgress((s) => s.toggleWeek);

  return (
    <ul className="divide-y divide-line rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
      {items.map((item) => (
        <li key={item.key}>
          <label className="flex cursor-pointer items-start gap-3 px-4 py-3.5">
            <Checkbox
              checked={!!checks?.[item.key]}
              onCheckedChange={() => toggle(weekId, item.key)}
              className="mt-0.5"
            />
            <span className="min-w-0">
              <span className="block text-sm font-medium text-ink">{item.label}</span>
              <span className="block text-xs text-muted">{item.hint}</span>
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

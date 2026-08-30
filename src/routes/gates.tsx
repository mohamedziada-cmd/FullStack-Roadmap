import { createFileRoute } from "@tanstack/react-router";
import { gates } from "@/data/content";
import { useProgress } from "@/lib/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/gates")({ component: GatesPage });

function GatesPage() {
  const map = useProgress((s) => s.gates);
  const toggle = useProgress((s) => s.toggleGate);
  const done = gates.filter((g) => map[g.id]).length;
  const percent = Math.round((done / gates.length) * 100);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">ما تتخطاش</p>
        <h1 className="mt-1 text-2xl font-semibold">بوابات النسخة المعدّلة</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          لو أسبوع 10 خلص من غير سباق المخزون، متبدأش أسبوع 11. الحاجات دي هي
          الفرق بين مشروع كورس ومشروع تقدر تدافع عنه في إنترفيو FullStack.
        </p>
      </header>

      <div className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]">
        <div className="mb-2 flex justify-between text-xs text-muted">
          <span>
            {done} من {gates.length}
          </span>
          <span className="tabular-nums">{percent}%</span>
        </div>
        <Progress value={percent} />
      </div>

      <ul className="divide-y divide-line overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
        {gates.map((g) => (
          <li key={g.id}>
            <label className="flex cursor-pointer items-start gap-3 px-4 py-4">
              <Checkbox
                checked={!!map[g.id]}
                onCheckedChange={() => toggle(g.id)}
                className="mt-0.5"
              />
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-medium">{g.title}</span>
                  <span className="text-[11px] text-sage">أسبوع {g.week}</span>
                </span>
                <span className="mt-1 block text-sm text-muted">{g.why}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

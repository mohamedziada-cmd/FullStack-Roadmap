import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { Week } from "@/data/types";
import { useProgress, weekScore } from "@/lib/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const labels = ["اتعلم", "اتطبق", "التسليم", "الإنترفيو"] as const;
const keys = ["learned", "applied", "delivered", "interview"] as const;

export function WeekCard({ week }: { week: Week }) {
  const checks = useProgress((s) => s.weeks[week.id]);
  const score = weekScore(checks);

  return (
    <Link
      to="/weeks/$weekId"
      params={{ weekId: String(week.id) }}
      className="group block rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-[var(--ease-out-soft)] hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-wide text-sage">
            الأسبوع {String(week.id).padStart(2, "0")} · {week.kicker}
          </p>
          <h3 className="mt-1 text-base font-semibold text-ink group-hover:text-forest">
            {week.title}
          </h3>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-surface text-muted transition-colors group-hover:bg-moss group-hover:text-forest">
          <ArrowLeft className="size-4" />
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-muted">{week.goal}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge variant={score === 4 ? "ok" : "faint"}>
          {score}/4
        </Badge>
        <Badge variant="sage">Backend</Badge>
        <Badge variant="outline">Frontend</Badge>
        <span className="text-[11px] text-faint">{week.hours}</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1">
        {keys.map((k, i) => (
          <div
            key={k}
            className={cn(
              "h-1 rounded-full",
              checks?.[k] ? "bg-forest" : "bg-surface",
            )}
            title={labels[i]}
          />
        ))}
      </div>
    </Link>
  );
}

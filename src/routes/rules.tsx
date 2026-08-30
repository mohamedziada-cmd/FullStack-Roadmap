import { createFileRoute } from "@tanstack/react-router";
import { rules } from "@/data/content";

export const Route = createFileRoute("/rules")({ component: RulesPage });

function RulesPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">غير قابلة للتفاوض</p>
        <h1 className="mt-1 text-2xl font-semibold">قواعد التنفيذ</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          التسليم الأسبوعي في Git هو الحقيقة الوحيدة. القراءة مش تقدّم.
        </p>
      </header>
      <ol className="space-y-3">
        {rules.map((r) => (
          <li
            key={r.n}
            className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]"
          >
            <p className="text-xs tabular-nums text-sage">قاعدة {r.n}</p>
            <h2 className="mt-1 font-semibold">{r.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
          </li>
        ))}
      </ol>
      <blockquote className="rounded-xl bg-forest px-5 py-5 text-primary-foreground">
        <p className="text-sm leading-relaxed">
          كل عنوان فرعي يترصد لوحده. لو مش عارف عنوان، ده معناه لسه ماخدتوش —
          مش إنه مش موجود. ولو خدته ومفيش تسليم: برضه لسه ماخدتوش.
        </p>
      </blockquote>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { changes } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/changes")({ component: ChangesPage });

function ChangesPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">من Backend إلى FullStack</p>
        <h1 className="mt-1 text-2xl font-semibold">ماذا تغيّر</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          الملف الأصلي كان Backend فقط. النسخة دي ما بتشيلش Concurrency ولا
          Idempotency ولا Outbox — بتضيف مسار واجهة بنفس كثافة التسليم.
        </p>
      </header>
      <div className="space-y-3">
        {changes.map((row) => (
          <article
            key={row.topic}
            className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] sm:p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="sage">{row.kind}</Badge>
              <h2 className="font-semibold">{row.topic}</h2>
            </div>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs text-faint">في Backend فقط</dt>
                <dd className="mt-1 text-ink-soft">{row.backendOnly}</dd>
              </div>
              <div>
                <dt className="text-xs text-faint">في FullStack</dt>
                <dd className="mt-1 text-ink-soft">{row.fullstack}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-muted">ليه: {row.why}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

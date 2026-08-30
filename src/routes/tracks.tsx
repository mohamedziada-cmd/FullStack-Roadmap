import { createFileRoute } from "@tanstack/react-router";
import { parallel } from "@/data/content";

export const Route = createFileRoute("/tracks")({ component: TracksPage });

function TracksPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">جنب الشهور مش جواها</p>
        <h1 className="mt-1 text-2xl font-semibold">المسار الموازي</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          دول ما بيتربطوش بجزء محدد من المتجر. ساعة إلى ساعتين في الأسبوع، مش
          بدل التسليم. لو سبتهم لآخر 6 شهور هتحتاج وقت إضافي.
        </p>
      </header>
      <div className="grid gap-3">
        {parallel.map((p) => (
          <section
            key={p.title}
            className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-xs text-sage">{p.hours}</p>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
              {p.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { architecture, modules, stackDecisions } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/project")({ component: ProjectPage });

function ProjectPage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">ShopX</p>
        <h1 className="mt-1 text-2xl font-semibold">نطاق مشروع الـ E-commerce</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          مشروع واحد من أول أسبوع لآخر أسبوع. الاسم اختياري. لو هتقص، قص
          الـ Wishlist مش البيزنس — والواجهة المطلوبة حد أدنى: متجر عميل + أدمن منتجات.
        </p>
      </header>

      <section>
        <h2 className="mb-3 text-lg font-semibold">الوحدات</h2>
        <div className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
          <div className="hidden grid-cols-[8rem_1fr_auto] gap-3 border-b border-line px-4 py-2 text-xs text-muted sm:grid">
            <span>الوحدة</span>
            <span>الحد الأدنى</span>
            <span>قص؟</span>
          </div>
          {modules.map((m) => (
            <div
              key={m.name}
              className="grid gap-1 border-b border-line px-4 py-3 last:border-0 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{m.name}</span>
                <Badge variant="faint" className="sm:hidden">
                  {m.sides}
                </Badge>
              </div>
              <p className="text-sm text-ink-soft">
                {m.min}
                <span className="mt-1 hidden text-xs text-faint sm:block">{m.sides}</span>
              </p>
              <span className="text-xs">
                {m.cuttable ? (
                  <Badge variant="warn">آخر حاجة تتشال</Badge>
                ) : (
                  <Badge variant="ok">لا</Badge>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">قرارات تقنية ثابتة</h2>
        <p className="mb-4 text-sm text-muted">متتغيرهاش كل أسبوع.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {stackDecisions.map((d) => (
            <div
              key={d.title}
              className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]"
            >
              <h3 className="text-sm font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">هيكل الحل من أسبوع 5 (يتوسّع 17)</h2>
        <ol className="space-y-2">
          {architecture.map((line, i) => (
            <li
              key={line}
              className="flex gap-3 rounded-lg bg-bg-elevated px-4 py-3 text-sm shadow-[var(--shadow-border)]"
            >
              <span className="tabular-nums text-sage">{String(i + 1).padStart(2, "0")}</span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted">
          قبل أسبوع 5: مشروع API واحد + مجلد client مقبول بشرط فولدرات واضحة.
          متبنيش 6 مشاريع يوم 1.
        </p>
      </section>
    </div>
  );
}

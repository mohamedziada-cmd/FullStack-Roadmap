import { createFileRoute } from "@tanstack/react-router";
import { skipped } from "@/data/content";

export const Route = createFileRoute("/skip")({ component: SkipPage });

function SkipPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">حدود عشان متتحولش لمتحف تقنيات</p>
        <h1 className="mt-1 text-2xl font-semibold">ما لن ندرسه عمدًا</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          النواقص دي مش جهل. بعد التوظيف أو بعد الأسبوع 24 تقدر تختار مسار.
        </p>
      </header>
      <div className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
        {skipped.map((s) => (
          <article key={s.topic} className="border-b border-line px-4 py-4 last:border-0 sm:px-5">
            <h2 className="font-semibold">{s.topic}</h2>
            <p className="mt-1 text-sm text-muted">{s.why}</p>
            <p className="mt-2 text-xs text-sage">امتى تلمسه: {s.when}</p>
          </article>
        ))}
      </div>
      <section className="rounded-xl bg-surface px-5 py-5">
        <h2 className="font-semibold">Azure — الحد المسموح في الأسبوع 24</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          مش شهادة. ثلاث أفكار تقدر تشرحها: App Service أو Container Apps للنشر،
          Key Vault للأسرار، Blob Storage للصور بدل wwwroot. لو طبّقت واحدة
          (حتى على حساب مجاني) امتياز. لو شرحتها من غير تطبيق: مقبول في حدود
          الـ 6 شهور.
        </p>
      </section>
    </div>
  );
}

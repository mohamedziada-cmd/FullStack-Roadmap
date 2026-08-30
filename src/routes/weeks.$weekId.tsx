import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Printer } from "lucide-react";
import { getWeek, weeks } from "@/data/weeks";
import { useProgress } from "@/lib/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckRow } from "@/components/week/check-row";

export const Route = createFileRoute("/weeks/$weekId")({
  loader: ({ params }) => {
    const id = Number(params.weekId);
    const week = getWeek(id);
    if (!week) throw notFound();
    return week;
  },
  component: WeekDetail,
});

function WeekDetail() {
  const week = Route.useLoaderData();
  const id = week.id;
  const note = useProgress((s) => s.notes[id] ?? "");
  const setNote = useProgress((s) => s.setNote);
  const prev = weeks.find((w) => w.id === id - 1);
  const next = weeks.find((w) => w.id === id + 1);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-sage">{week.kicker}</p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="max-w-2xl text-2xl font-semibold sm:text-3xl">
            الأسبوع {String(week.id).padStart(2, "0")} — {week.title}
          </h1>
          <Button
            variant="outline"
            size="sm"
            className="no-print"
            onClick={() => window.print()}
          >
            <Printer className="size-4" />
            طباعة
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="sage">شهر {week.month}</Badge>
          <Badge variant="outline">{week.hours}</Badge>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {week.goal}
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        <Track
          kicker="Backend · .NET 10"
          learn={week.backend.learn}
          apply={week.backend.apply}
        />
        <Track
          kicker="Frontend · React + TS"
          learn={week.frontend.learn}
          apply={week.frontend.apply}
        />
      </section>

      <section className="rounded-xl bg-forest px-5 py-5 text-primary-foreground">
        <p className="text-xs font-medium tracking-wide text-moss">
          التسليم — من غيره الأسبوع مش خلصان
        </p>
        <p className="mt-2 text-sm leading-relaxed sm:text-base">{week.deliverable}</p>
        {week.cutHint && (
          <p className="mt-3 border-t border-moss/30 pt-3 text-sm text-moss">
            قصّ النطاق: {week.cutHint}
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">سؤال إنترفيو الأسبوع</h2>
        <ul className="space-y-2">
          {week.interview.map((q) => (
            <li
              key={q}
              className="rounded-lg bg-bg-elevated px-4 py-3 text-sm shadow-[var(--shadow-border)]"
            >
              {q}
            </li>
          ))}
        </ul>
      </section>

      <section className="no-print space-y-3">
        <h2 className="text-lg font-semibold">التتبع</h2>
        <CheckRow weekId={week.id} />
        <label className="block">
          <span className="mb-1.5 block text-xs text-muted">ملاحظات / قصّ نطاق</span>
          <textarea
            value={note}
            onChange={(e) => setNote(week.id, e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-line bg-bg-elevated px-3 py-2 text-sm shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            placeholder="لو قصّيت حاجة، اكتبها هنا. القصّ الموثّق أفضل من عنوان متعلم نص نص."
          />
        </label>
      </section>

      <nav className="no-print flex items-center justify-between gap-3 border-t border-line pt-4">
        {prev ? (
          <Button asChild variant="outline">
            <Link to="/weeks/$weekId" params={{ weekId: String(prev.id) }}>
              <ArrowRight className="size-4" />
              {String(prev.id).padStart(2, "0")}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild>
            <Link to="/weeks/$weekId" params={{ weekId: String(next.id) }}>
              {String(next.id).padStart(2, "0")}
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

function Track({
  kicker,
  learn,
  apply,
}: {
  kicker: string;
  learn: string[];
  apply: string[];
}) {
  return (
    <section className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]">
      <p className="text-xs font-medium tracking-wide text-sage">{kicker}</p>
      <h3 className="mt-3 text-sm font-semibold">تعلّم</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
        {learn.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-sage" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-5 text-sm font-semibold">طبّق في المشروع</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
        {apply.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-forest" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

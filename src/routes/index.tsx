import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, GitBranch, Layers, Target } from "lucide-react";
import { months, timeTable, verdict } from "@/data/content";
import { weeks } from "@/data/weeks";
import { useProgress, useProgressStats, weekScore } from "@/lib/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const stats = useProgressStats();
  const weekMap = useProgress((s) => s.weeks);
  const current = stats.current;

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-xl bg-forest px-5 py-8 text-primary-foreground sm:px-8 sm:py-10">
        <p className="text-xs font-medium tracking-[0.18em] text-moss">
          BACKEND · FRONTEND · 24 أسبوع
        </p>
        <h1 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
          خطة FullStack متكاملة على مشروع متجر واحد
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-moss sm:text-base">
          نفس الرودماب الأصلية لـ .NET 10 — من غير ما نضحّي بعمق الـ Backend.
          الواجهة React حقيقية من الأسبوع 4، والأدمن React، والدفع والمخزون
          زي ما كانوا: بوابات ما تتخطاش.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link to="/weeks/$weekId" params={{ weekId: String(current.id) }}>
              الأسبوع الحالي
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-moss/40 bg-transparent text-primary-foreground hover:bg-forest-deep"
          >
            <Link to="/changes">ماذا تغيّر عن Backend فقط</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Stat
          icon={Target}
          label="التقدّم"
          value={`${stats.percent}%`}
          hint={`${stats.checks} من ${stats.totalChecks} خانة`}
        />
        <Stat
          icon={Clock}
          label="أسابيع مغلقة"
          value={`${stats.doneWeeks}/${stats.totalWeeks}`}
          hint="الأربعة صناديق في Git"
        />
        <Stat
          icon={GitBranch}
          label="بوابات إنتاج"
          value={`${stats.gateDone}/${stats.totalGates}`}
          hint="ما تتخطاش حتى لو الأسبوع خلص"
        />
      </section>

      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">خريطة 24 أسبوع</h2>
          <span className="text-xs text-faint">اضغط أسبوعًا</span>
        </div>
        <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-12">
          {weeks.map((w) => {
            const score = weekScore(weekMap[w.id]);
            return (
              <Link
                key={w.id}
                to="/weeks/$weekId"
                params={{ weekId: String(w.id) }}
                title={w.title}
                className={cn(
                  "flex h-9 items-center justify-center rounded-sm text-xs tabular-nums transition-colors",
                  score === 4
                    ? "bg-forest text-primary-foreground"
                    : score > 0
                      ? "bg-moss text-forest-deep"
                      : "bg-surface text-muted hover:bg-line",
                )}
              >
                {w.id}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-sage">الأسبوع الحالي</p>
            <h2 className="mt-1 text-xl font-semibold">
              {String(current.id).padStart(2, "0")} — {current.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">{current.goal}</p>
          </div>
          <Button asChild>
            <Link to="/weeks/$weekId" params={{ weekId: String(current.id) }}>
              افتح الأسبوع
            </Link>
          </Button>
        </div>
        <div className="mt-5">
          <Progress value={(weekScore(weekMap[current.id]) / 4) * 100} />
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">ستة شهور</h2>
          <Link to="/weeks" className="text-sm text-forest hover:underline">
            كل الأسابيع
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {months.map((m) => {
            const monthWeeks = weeks.filter((w) => w.month === m.id);
            const done = monthWeeks.filter((w) => weekScore(weekMap[w.id]) === 4).length;
            return (
              <Link
                key={m.id}
                to="/weeks"
                search={{ month: m.id }}
                className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="sage">شهر {m.id}</Badge>
                  <span className="text-xs tabular-nums text-muted">
                    {done}/{monthWeeks.length} أسابيع
                  </span>
                </div>
                <h3 className="mt-3 font-semibold">{m.title}</h3>
                <p className="mt-1 text-xs text-faint">أسابيع {m.weeks}</p>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <Row k="Backend" v={m.backendFocus} />
                  <Row k="Frontend" v={m.frontendFocus} />
                  <Row k="التسليم" v={m.joint} />
                </dl>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">الوقت والمستوى</h2>
        <div className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
          <div className="grid grid-cols-[1fr_auto] gap-x-3 border-b border-line px-4 py-2 text-xs text-muted sm:grid-cols-4">
            <span>الوضع</span>
            <span>ساعات/أسبوع</span>
            <span className="hidden sm:block">ناتج 6 شهور</span>
            <span className="hidden sm:block">ملاحظة</span>
          </div>
          {timeTable.map((row) => (
            <div
              key={row.mode}
              className="grid grid-cols-[1fr_auto] gap-x-3 border-b border-line px-4 py-3 last:border-0 sm:grid-cols-4"
            >
              <span className="text-sm font-medium">{row.mode}</span>
              <span className="text-sm tabular-nums text-forest">{row.hours}</span>
              <span className="col-span-2 mt-1 text-sm text-muted sm:col-span-1 sm:mt-0">
                {row.result}
              </span>
              <span className="col-span-2 hidden text-sm text-faint sm:col-span-1 sm:block">
                {row.note}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-dashed border-line-strong bg-surface/60 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Layers className="mt-0.5 size-5 shrink-0 text-forest" />
          <div>
            <h2 className="font-semibold">الحكم المختصر</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{verdict}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Target;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]">
      <div className="flex items-center gap-2 text-sage">
        <Icon className="size-4" />
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-faint">{hint}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-16 shrink-0 text-xs text-faint">{k}</dt>
      <dd className="text-xs text-ink-soft">{v}</dd>
    </div>
  );
}

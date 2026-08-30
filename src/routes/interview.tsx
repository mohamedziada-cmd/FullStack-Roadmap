import { createFileRoute } from "@tanstack/react-router";
import { interviewBank } from "@/data/content";

export const Route = createFileRoute("/interview")({ component: InterviewPage });

function InterviewPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-medium tracking-wide text-sage">من الخطة نفسها</p>
        <h1 className="mt-1 text-2xl font-semibold">بنك أسئلة الإنترفيو</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          متستناش أسبوع 24 عشان تبدأ الكتابة — اكتب إجابة الأسبوع في نفس يوم
          التسليم. التدريب بصوت عالي. الكتابة لوحدها مش كفاية.
        </p>
      </header>
      {interviewBank.map((phase) => (
        <section key={phase.after}>
          <h2 className="mb-3 text-lg font-semibold">{phase.after}</h2>
          <ol className="space-y-2">
            {phase.questions.map((q, i) => (
              <li
                key={q}
                className="flex gap-3 rounded-lg bg-bg-elevated px-4 py-3 text-sm shadow-[var(--shadow-border)]"
              >
                <span className="w-6 shrink-0 tabular-nums text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

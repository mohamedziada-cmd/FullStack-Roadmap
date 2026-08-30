import { useEffect, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/data/content";
import { useProgress, useProgressStats } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mobilePrimary, navItems } from "./nav";

function isActive(pathname: string, to: string, end?: boolean) {
  if (end) return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

function NavLink({
  to,
  label,
  icon: Icon,
  end,
  onClick,
  compact,
}: {
  to: string;
  label: string;
  icon: typeof Menu;
  end?: boolean;
  onClick?: () => void;
  compact?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = isActive(pathname, to, end);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 text-sm transition-colors duration-150",
        compact ? "h-12 flex-col justify-center gap-1 px-1 text-[11px]" : "h-10",
        active
          ? "bg-forest text-primary-foreground"
          : "text-ink-soft hover:bg-surface hover:text-ink",
      )}
    >
      <Icon className="size-4 shrink-0" strokeWidth={1.75} />
      <span className={cn(compact && "leading-none")}>{label}</span>
    </Link>
  );
}

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3">
      <span className="flex size-9 items-center justify-center rounded-md bg-forest text-primary-foreground">
        <svg viewBox="0 0 32 32" className="size-5" aria-hidden>
          <path
            d="M8 22 L16 9 L24 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="22.5" r="1.8" fill="currentColor" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink">{APP_NAME}</span>
        <span className="block truncate text-[11px] text-muted">{APP_TAGLINE}</span>
      </span>
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const stats = useProgressStats();
  const reset = useProgress((s) => s.reset);
  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-5 pb-4">
        <Brand onClick={onNavigate} />
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3">
        {navItems.map((item) => (
          <NavLink key={item.to} {...item} onClick={onNavigate} />
        ))}
      </nav>
      <div className="mt-auto border-t border-line p-4">
        <div className="mb-2 flex items-baseline justify-between text-xs text-muted">
          <span>التقدّم</span>
          <span className="tabular-nums text-ink">{stats.percent}%</span>
        </div>
        <Progress value={stats.percent} />
        <p className="mt-2 text-[11px] text-faint">
          أسبوع {stats.doneWeeks}/{stats.totalWeeks} · بوابة {stats.gateDone}/
          {stats.totalGates}
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              type="button"
              className="mt-3 text-[11px] text-faint underline-offset-2 hover:text-danger hover:underline"
            >
              تصفير التقدّم
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>تصفير كل التقدّم؟</AlertDialogTitle>
              <AlertDialogDescription>
                هتتمسح علامات الأسابيع والبوابات والملاحظات من هذا المتصفح.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>إلغاء</AlertDialogCancel>
              <AlertDialogAction onClick={() => reset()}>صفّر</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export function AppShell() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const moreActive = ["/project", "/rules", "/tracks", "/changes", "/skip"].some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  useEffect(() => {
    void useProgress.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-50 focus:rounded-md focus:bg-forest focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        تخطّي إلى المحتوى
      </a>
      <aside className="no-print fixed inset-y-0 right-0 z-30 hidden w-64 border-l border-line bg-bg-elevated lg:block">
        <SidebarNav />
      </aside>

      <header className="no-print sticky top-0 z-20 flex h-14 items-center justify-between border-b border-line bg-bg/90 px-4 backdrop-blur-sm lg:hidden">
        <Brand />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="القائمة">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>القائمة</SheetTitle>
            </SheetHeader>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </header>

      <div className="lg:pr-64">
        <main
          id="main"
          className="mx-auto w-full max-w-5xl px-4 pt-6 pb-28 lg:px-8 lg:pt-10 lg:pb-16"
        >
          <Outlet />
        </main>
      </div>

      <nav className="no-print fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-line bg-bg-elevated/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden">
        {mobilePrimary.map((item) => (
          <NavLink key={item.to} {...item} compact />
        ))}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "flex h-12 flex-col items-center justify-center gap-1 px-1 text-[11px]",
            moreActive ? "text-forest" : "text-ink-soft",
          )}
        >
          <Menu className="size-4" strokeWidth={1.75} />
          المزيد
        </button>
      </nav>
    </div>
  );
}

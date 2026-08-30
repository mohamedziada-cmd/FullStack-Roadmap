import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/layout/app-shell";
import { APP_NAME, APP_TAGLINE } from "@/data/content";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} · ${APP_TAGLINE}` },
      {
        name: "description",
        content:
          "خطة FullStack متكاملة 24 أسبوع: .NET 10 LTS وReact على مشروع E-commerce واحد حتى النشر.",
      },
      { name: "theme-color", content: "#2f4a3c" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <html lang="ar" dir="rtl" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <AppShell />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-sm text-sage">404</p>
      <h1 className="mt-2 text-2xl font-semibold">الصفحة مش موجودة</h1>
      <p className="mt-2 text-muted">ارجع للرئيسية أو قائمة الأسابيع.</p>
    </div>
  );
}

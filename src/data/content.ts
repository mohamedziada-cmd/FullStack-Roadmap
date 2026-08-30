import type { ChangeRow, Gate, InterviewPhase, Module, Month } from "./types";

export const APP_NAME = "مسار ShopX";
export const APP_TAGLINE = "FullStack .NET 10 + React · 24 أسبوع";

export const months: Month[] = [
  {
    id: 1,
    title: "الأساس المضغوط صح",
    weeks: "1–4",
    backendFocus: "C# + OOP + SQL + EF + أول CRUD async",
    frontendFocus: "HTML/CSS/JS + React + TypeScript + أول صفحة حية",
    joint: "الريبو، الـ Domain، ERD، كتالوج حي من الـ API",
  },
  {
    id: 2,
    title: "Identity + كتالوج + هيكل SPA",
    weeks: "5–8",
    backendFocus: "Pipeline، DI، طبقات، Identity، بحث EF",
    frontendFocus: "Router، Layout، Auth UI، فلاتر URL، أدمن React",
    joint: "طبقات، هوية، كتالوج بحث، بروفايل، واجهة عميل",
  },
  {
    id: 3,
    title: "السلة والأوردر والدفع + اختبار",
    weeks: "9–12",
    backendFocus: "سلة، State machine، Concurrency، Webhook، xUnit",
    frontendFocus: "سلة، Checkout، دفع، Wishlist، Vitest",
    joint: "سباق آخر قطعة ظاهر في الواجهة + أول tests",
  },
  {
    id: 4,
    title: "API احترافي + JWT + فلو العميل",
    weeks: "13–16",
    backendFocus: "ProblemDetails، JWT، Correlation، Rate، Resilience",
    frontendFocus: "RHF+Zod، AuthContext، حالات UX، التدفق الكامل",
    joint: "عقد API + تسجيل JWT من Postman ومن المتجر",
  },
  {
    id: 5,
    title: "معمارية + كاش + أنماط + خلفية",
    weeks: "17–20",
    backendFocus: "Clean Architecture، Strategy، Redis، Outbox",
    frontendFocus: "Feature folders، شحن/كوبون، Query cache، حالة الأوردر",
    joint: "ترقية من غير إعادة كتابة + كاش متسق",
  },
  {
    id: 6,
    title: "Production-Ready للطرفين",
    weeks: "21–24",
    backendFocus: "OWASP، Integration، Serilog، Docker، CI",
    frontendFocus: "XSS/IDOR في الواجهة، Playwright، صورة Docker، CI للـ SPA",
    joint: "compose كامل + Actions خضراء + System Design",
  },
];

export const gates: Gate[] = [
  {
    id: "async",
    week: "من 4",
    title: "async على كل I/O",
    why: "كل قراءة/كتابة DB أو ملف من الأسبوع 4 فصاعدًا Task. مفيش .Result.",
  },
  {
    id: "cancel",
    week: "من 5",
    title: "CancellationToken في الـ actions",
    why: "طلب اتلغى ما يكملش شغل على السيرفر.",
  },
  {
    id: "dto",
    week: "من 5",
    title: "DTO بدل Entity",
    why: "Over-posting وLeak للعلاقات ثغرة مش تفصيلة.",
  },
  {
    id: "live-ui",
    week: "4",
    title: "صفحة كتالوج حية من الـ API",
    why: "من غير اتصال حقيقي ده لسه Backend بخدعة HTML.",
  },
  {
    id: "nplus1",
    week: "7",
    title: "N+1 مش موجود في الكتالوج",
    why: "تثبته بـ log أو Profiler، مش بالإحساس.",
  },
  {
    id: "race",
    week: "10",
    title: "سباق آخر قطعة",
    why: "طلبين / قطعة واحدة = واحد ينجح وواحد يفشل بوضوح في الـ API والواجهة.",
  },
  {
    id: "idem",
    week: "11",
    title: "جدول IdempotencyKeys + إعادة webhook",
    why: "المفهوم من غير جدول = كلام.",
  },
  {
    id: "tests",
    week: "12",
    title: "أول tests خضراء على الطرفين",
    why: "3 unit على الخدمات + اختبارين واجهة على الأقل.",
  },
  {
    id: "jwt",
    week: "14",
    title: "JWT + Refresh من Postman ومن الـ SPA",
    why: "التوكن في Postman بس معناه الـ Auth لسه نص نص.",
  },
  {
    id: "corr",
    week: "15",
    title: "Correlation ID في الـ logs",
    why: "من غير تتبع الـ request التصحيح عمى.",
  },
  {
    id: "retry",
    week: "16",
    title: "Retry على FakePayment",
    why: "أي بوابة دفع من غيره هشة.",
  },
  {
    id: "spa-flow",
    week: "16",
    title: "فلو العميل كامل من الواجهة",
    why: "تصفح → سلة → دفع → طلب من غير ما تلمس Swagger.",
  },
  {
    id: "domain",
    week: "17",
    title: "Domain من غير مرجع EF",
    why: "الـ rewrite ممنوع. النقل والـ tests خضراء.",
  },
  {
    id: "redis",
    week: "19",
    title: "Redis + invalidation بعد تعديل منتج",
    why: "كاش فاسد يكسّر سعر.",
  },
  {
    id: "outbox",
    week: "20",
    title: "Outbox: الـ checkout ما يستناش الإيميل",
    why: "الـ request ما يستناش SMTP.",
  },
  {
    id: "idor",
    week: "21–22",
    title: "IDOR: يوزر A مش شايف أوردر B",
    why: "في الـ API وفي المتصفح (E2E).",
  },
  {
    id: "e2e",
    week: "22",
    title: "Playwright للمسار السعيد",
    why: "Integration من غير E2E يسيب الواجهة بلا شاهد.",
  },
  {
    id: "compose",
    week: "23",
    title: "docker compose up من ريبو فاضي يشتغل",
    why: "API + SQL + Redis + الواجهة.",
  },
  {
    id: "ci",
    week: "24",
    title: "GitHub Actions أخضر + README",
    why: "Push يبني ويختبر الطرفين.",
  },
];

export const rules = [
  {
    n: "1",
    title: "كل عنوان مش متطبق في المتجر = مش اتعلم",
    body: "القراءة واليوتيوب من غير Commit مش تقدّم. العنوان يترصد «تم» بعد ما يظهر في المشروع أو في تست — Backend أو Frontend.",
  },
  {
    n: "2",
    title: "كل I/O من أسبوع 4 فصاعدًا async Task",
    body: "مفيش .Result ولا .Wait ولا Action متزامن بيضرب DB. CancellationToken يدخل الـ action.",
  },
  {
    n: "3",
    title: "الـ Entity ما تخرجش من الـ API",
    body: "DTO فقط. الواجهة تستهلك عقدًا، مش شكل الجدول. Over-posting ثغرة.",
  },
  {
    n: "4",
    title: "الـ Controller رفيع. البيزنس في الـ Service. الواجهة ما تحسبش سعر",
    body: "من أسبوع 5: Controllers من غير LINQ مركّب. React يعرض الإجمالي اللي السيرفر حسبه.",
  },
  {
    n: "5",
    title: "مفيش أسرار في Git",
    body: "Connection strings, JWT key, payment secrets من User Secrets أو Environment. متغيرات VITE_ عامة — متتحطش فيها أسرار.",
  },
  {
    n: "6",
    title: "الاختبار جزء من التسليم من أسبوع 12",
    body: "أي منطق مخزون/دفع/حالة من غير تست = مش مكتمل. من الأسبوع 22: E2E على المسار الحرج.",
  },
  {
    n: "7",
    title: "شهر 5 ترقية مش مشروع تاني",
    body: "ممنوع توقف الـ features عشان تنقل فولدرات. النقل يتم والـ tests خضراء — API وSPA.",
  },
  {
    n: "8",
    title: "لو أسبوع اتأخر: متتخطاش. قص النطاق",
    body: "دمج سلة الزائر يتأجل. خصم المخزون، الـ Idempotency، والصفحة الحية لا تتأجل.",
  },
];

export const modules: Module[] = [
  {
    name: "Catalog",
    min: "تصنيف، منتج، صور، سعر، مخزون، بحث+فلتر+صفحة — API وواجهة",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Identity",
    min: "Register/Login/Lockout/Roles (Customer, Admin) + صفحات Auth",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Profile",
    min: "تعديل بيانات + صورة",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Cart",
    min: "DB-backed للمستخدم المسجّل + صفحة سلة",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Wishlist",
    min: "إضافة/حذف/قائمة + قلب على البطاقة",
    cuttable: true,
    sides: "API + UI",
  },
  {
    name: "Orders",
    min: "State machine + خصم مخزون داخل Transaction + طلباتي",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Payment",
    min: "Fake gateway + Webhook + Idempotency + شاشات رجوع",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Admin",
    min: "إدارة منتجات من React (مش Razor)",
    cuttable: false,
    sides: "UI على API محمي",
  },
  {
    name: "API",
    min: "JWT + Refresh + ProblemDetails + Versioning",
    cuttable: false,
    sides: "Backend",
  },
  {
    name: "Cache",
    min: "Redis على الكتالوج + Invalidation + React Query",
    cuttable: false,
    sides: "API + UI",
  },
  {
    name: "Jobs",
    min: "Outbox إيميل بعد الدفع + تنظيف سلات",
    cuttable: false,
    sides: "Backend + حالة في UI",
  },
  {
    name: "Ops",
    min: "Docker Compose (API+DB+Redis+Web) + GitHub Actions + Serilog + /health",
    cuttable: false,
    sides: "Full stack",
  },
];

export const stackDecisions = [
  {
    title: "Backend",
    body: ".NET 10 LTS + ASP.NET Core Web API (Controllers أساسًا، Minimal API للتجربة).",
  },
  {
    title: "Frontend",
    body: "React 19 + TypeScript + Vite + Tailwind. React Router. TanStack Query من الأسبوع 7. React Hook Form + Zod من الأسبوع 13.",
  },
  {
    title: "قاعدة البيانات",
    body: "SQL Server + EF Core. PostgreSQL مقبول لو ثبّته من أول أسبوع والتزمت.",
  },
  {
    title: "Auth",
    body: "Cookie للفهم في الأسبوع 6. JWT + Refresh هو الأساسي من الأسبوع 14 للـ API والـ SPA.",
  },
  {
    title: "الصور",
    body: "wwwroot مقبول في البداية، الهدف مسار قابل للاستبدال (IFileStorage).",
  },
  {
    title: "الدفع",
    body: "FakePaymentAdapter بوسيط IPaymentGateway عشان Strategy تبقى سهلة الأسبوع 18.",
  },
  {
    title: "Mapping",
    body: "يدوي في البداية. Mapperly مسموح. AutoMapper مش مطلوب.",
  },
  {
    title: "الاختبار",
    body: "xUnit + Moq + WebApplicationFactory. Vitest + Testing Library. Playwright للـ E2E.",
  },
  {
    title: "Razor / MVC",
    body: "اتشال كعمود. الأدمن React. فهم الـ pipeline يكفي — مش مسار واجهة.",
  },
];

export const architecture = [
  "ShopX.Domain — كيانات، استثناءات، Enums. صفر مرجع لـ EF.",
  "ShopX.Application — واجهات، خدمات/حالات استخدام، DTOs، Validation.",
  "ShopX.Infrastructure — EF, Identity, Redis, Payment, FileStorage, Email.",
  "ShopX.Api — Controllers, Middleware, JWT, Swagger.",
  "ShopX.Web — React + TypeScript (مستودع client/ أو مشروع منفصل في نفس الريبو).",
  "ShopX.Tests.Unit و ShopX.Tests.Integration و e2e/ Playwright.",
];

export const changes: ChangeRow[] = [
  {
    kind: "اتضاف مسار",
    topic: "React + TypeScript كعمود",
    backendOnly: "صفحة HTML بـ fetch في الأسبوع 8 و16",
    fullstack: "SPA من الأسبوع 2، حية من الأسبوع 4، فلو كامل أسبوع 16",
    why: "FullStack من غير واجهة حقيقية = Backend باسم تاني",
  },
  {
    kind: "اتضاف مسار",
    topic: "Vite + Tailwind + Router",
    backendOnly: "غير موجود",
    fullstack: "أسبوع 2–5 هيكل الواجهة",
    why: "من غير layout ومسارات الواجهة تفضل سكربت",
  },
  {
    kind: "اتضاف",
    topic: "TanStack Query",
    backendOnly: "غير موجود",
    fullstack: "أسبوع 7 مع فلاتر الكتالوج، تعميق أسبوع 19",
    why: "كاش الواجهة جزء من صحة السعر",
  },
  {
    kind: "اتضاف",
    topic: "React Hook Form + Zod",
    backendOnly: "غير موجود",
    fullstack: "أسبوع 13 يطابق FluentValidation",
    why: "العقد واحد: السيرفر والواجهة",
  },
  {
    kind: "اتضاف",
    topic: "AuthContext + تخزين JWT",
    backendOnly: "Postman في الأسبوع 14",
    fullstack: "نفس الأسبوع: ذاكرة + refresh + حراسة مسارات",
    why: "سرقة Access من localStorage سؤال إنترفيو",
  },
  {
    kind: "اتضاف",
    topic: "Playwright E2E",
    backendOnly: "Integration على الـ API فقط",
    fullstack: "أسبوع 22 مسار سعيد + IDOR من المتصفح",
    why: "الواجهة من غير شاهد تكذب في الديمو",
  },
  {
    kind: "اتغيّر",
    topic: "لوحة الأدمن",
    backendOnly: "صفحة Razor واحدة أو Swagger",
    fullstack: "مسارات /admin في React من الأسبوع 8",
    why: "السوق FullStack ما بيوظفش على Razor لوحده في 2026",
  },
  {
    kind: "اتغيّر",
    topic: "Docker Compose",
    backendOnly: "api + sql + redis",
    fullstack: "نفسه + حاوية الواجهة",
    why: "شخص تاني يفتح المتجر مش Swagger بس",
  },
  {
    kind: "اتغيّر",
    topic: "ساعات الأسبوع",
    backendOnly: "20–25 ساعة حد أدنى",
    fullstack: "25–32 ساعة حد أدنى (الواجهة +5–8)",
    why: "نفس 24 أسبوع من غير ساعات = عناوين مش تسليم",
  },
  {
    kind: "اتحفظ",
    topic: "عمق الـ Backend الإنتاجي",
    backendOnly: "Concurrency, Idempotency, Outbox, Resilience",
    fullstack: "نفس البوابات — ما اتشالتش عشان الواجهة",
    why: "FullStack ضعيف الـ Backend بيتفضح في أول إنترفيو",
  },
  {
    kind: "اتأجل أكتر",
    topic: "MVC Razor العميق",
    backendOnly: "صفحة أدمن واحدة",
    fullstack: "فهم pipeline فقط — الأدمن React",
    why: "مسارين واجهة في 6 شهور = الاتنين نص نص",
  },
];

export const skipped = [
  {
    topic: "Microservices / Dapr / Kubernetes",
    why: "هيكسر التركيز قبل ما تتقن مونوليث نظيف بواجهة",
    when: "بعد أول شغل أو مشروع ثاني",
  },
  {
    topic: "Kafka / Event-driven كامل",
    why: "Outbox يكفي لإثبات الفكرة",
    when: "لو المنتج احتاج تكامل أنظمة",
  },
  {
    topic: "gRPC / GraphQL",
    why: "REST متقن أهم للتوظيف الأول",
    when: "حسب الشركة",
  },
  {
    topic: "CQRS + MediatR كامل",
    why: "مفيد وسهل يتحوّل لـ boilerplate",
    when: "بعد ما الـ use-cases تكتر",
  },
  {
    topic: "DDD كامل (Aggregates, Bounded Contexts)",
    why: "الكيانات النظيفة كافية للمتجر",
    when: "أنظمة أعقد من E-commerce بسيط",
  },
  {
    topic: "Blazor / Angular / Vue عميق",
    why: "مسار الواجهة واحد: React",
    when: "لو الوظيفة تطلبه صراحة",
  },
  {
    topic: "Next.js App Router / SSR عميق",
    why: "Vite SPA يعلّمك CORS وJWT والنشر بوضوح",
    when: "بعد الأسبوع 24 أو حسب الشركة",
  },
  {
    topic: "React Native / موبايل",
    why: "أنت FullStack ويب في الـ 6 شهور",
    when: "مسار لاحق",
  },
  {
    topic: "WCF / SOAP / .NET Framework",
    why: "إرث. اتعلمه لو الشركة طلبته",
    when: "وظيفة حكومة/بنك قديمة",
  },
];

export const parallel = [
  {
    title: "DSA — للإنترفيوهات",
    hours: "1–2 ساعة/أسبوع",
    items: [
      "Time/Space Complexity وBig O",
      "Arrays, Strings, Dictionary/HashSet",
      "Recursion الأساسي",
      "Easy/Medium كلاسيك: two sum, sliding window, stack",
      "لو عندك مسار LeetCode كمّل عليه — متبنّيش مسار تالت",
    ],
  },
  {
    title: ".NET Runtime",
    hours: "راجعه حوالي الأسبوع 16–20",
    items: [
      "Garbage Collection: الأجيال Gen 0/1/2",
      "Managed vs Unmanaged Memory",
      "JIT وAOT كمفهوم — Native AOT موجود في .NET 10 وامتى مش مناسب لـ Web API",
    ],
  },
  {
    title: "المتصفح وJS Runtime",
    hours: "جنب الأسابيع 3–8",
    items: [
      "Event loop، micro/macrotasks بجملة تقدر تشرحها",
      "Critical rendering path مبسّط",
      "CORS كسلوك متصفح مش إعداد سحري",
    ],
  },
  {
    title: "SQL للإنترفيو",
    hours: "وسّعها في الشهر 6",
    items: [
      "Stored Procedures, Views, Triggers: اعرف إيه هم وامتى تتجنّب Triggers",
      "Isolation Levels بالتفصيل مربوط بسيناريو المخزون",
      "Execution Plan: Clustered vs Non-Clustered بثقة",
    ],
  },
  {
    title: "English + قراءة الكود",
    hours: "ثابت",
    items: [
      "اقرأ توثيق Microsoft وReact قبل أي فيديو عربي شارح",
      "مرة كل أسبوعين: اقرأ جزء صغير من eShopOnWeb أو متجر React مفتوح واكتب 5 أسطر",
      "أسئلة الإنترفيو اتدرّب عليها بصوت عالي",
    ],
  },
];

export const interviewBank: InterviewPhase[] = [
  {
    after: "بعد الشهر 1",
    questions: [
      "Value type vs Reference type، وفين كل واحد بيتخزن",
      "ليه string immutable، وامتى StringBuilder",
      "class vs struct vs record",
      "IEnumerable vs IQueryable — مثال يكسر الأداء",
      "إيه اللي بتعمله Migration فعليًا",
      "1NF / 2NF / 3NF بمثال Product وCategory",
      "async/await: إيه اللي يحصل لو نسيت await؟ إيه CancellationToken؟",
      "ليه CORS؟ إيه الفرق بين Flex وGrid؟",
      "ليه key في قوائم React؟",
    ],
  },
  {
    after: "بعد الشهر 2",
    questions: [
      "Transient vs Scoped vs Singleton بمثال DbContext",
      "ترتيب Middleware وليه UseAuthentication قبل UseAuthorization",
      "Cookie Authentication خطوة بخطوة — وليه الـ SPA بتتعب معها",
      "Roles vs Claims vs Policies",
      "N+1: شكل الاستعلام، والحل بـ Include أو Projection",
      "AsNoTracking امتى واجب",
      "IDOR على تحديث البروفايل",
      "ليه فلاتر الكتالوج في الـ URL؟",
    ],
  },
  {
    after: "بعد الشهر 3",
    questions: [
      "ACID بمثال خصم المخزون وإنشاء الأوردر",
      "Optimistic vs Pessimistic concurrency",
      "State machine: مين المسموح يحوّل Pending لـ Paid",
      "Idempotency في الـ webhook",
      "ليه السلة في الـ Session مش كفاية",
      "إيه اللي تختبره في OrderService وإيه اللي تسيبه",
      "OutOfStockException: تمسكها فين؟ الواجهة تعرضها إزاي؟",
      "إيه Optimistic UI؟ امتى ترجّع الحالة؟",
    ],
  },
  {
    after: "بعد الشهر 4",
    questions: [
      "PUT vs PATCH vs POST",
      "بنية JWT وإزاي التوقيع بيتتحقق",
      "Access vs Refresh: مدة، تخزين، تدوير",
      "ليه Access في localStorage خطر",
      "ليه Entity في الـ response غلط",
      "ProblemDetails وليه شكل الخطأ الموحّد مهم",
      "CORS إيه المشكلة اللي بيحلها",
      "Circuit Breaker vs Retry",
      "Correlation ID يفيد مين في الإنتاج",
    ],
  },
  {
    after: "بعد الشهر 5",
    questions: [
      "Dependency Rule في Clean Architecture",
      "امتى Repository تكرار على EF Core",
      "Strategy بمثال الشحن",
      "Cache-Aside وCache Invalidation — وquery keys في React Query",
      "ليه SMTP جوه الـ request غلط",
      "Outbox Pattern بجملتين",
      "AsSplitQuery امتى",
    ],
  },
  {
    after: "بعد الشهر 6 / إنترفيو نهائي",
    questions: [
      "SQL Injection مع EF: إمتى لسه ممكن؟",
      "XSS Stored في مراجعة منتج — في الـ API وفي React",
      "CSRF ضد Cookie Auth",
      "IDOR على GET /orders/{id}",
      "OWASP بند بند على مشروعك",
      "فرّق Unit وIntegration وE2E بمثال من الريبو",
      "Dockerfile multi-stage ليه — للـ API وللـ SPA",
      "صمّم checkout لـ 100 طلب في الثانية على آخر قطعة — إيه أول حاجة تكسر، وإيه اللي عملته في مشروعك",
    ],
  },
];

export const timeTable = [
  {
    mode: "شغل + دراسة خفيفة",
    hours: "12–16",
    result: "هتخلّص شهر 2–3 بجودة، والواجهة هتتأخر",
    note: "متقلش إنك خلّصت الرودماب",
  },
  {
    mode: "الحد الأدنى الجاد",
    hours: "25–32",
    result: "الخطة كاملة + متجر شغال + جاهز Junior FullStack",
    note: "ده الافتراض اللي الملف مبني عليه",
  },
  {
    mode: "تسريع قوي",
    hours: "38–45",
    result: "Junior قوي جدًا / Mid في شركات صغيرة",
    note: "كأن حد هيستخدم المتجر",
  },
  {
    mode: "تعدية عناوين",
    hours: "أي عدد",
    result: "صفر",
    note: "checklist من غير تسليم",
  },
];

export const verdict =
  "الرودماب الأصلية كانت Backend بوصلة صح. النسخة دي نفس العمود الفقري الإنتاجي (مخزون، Idempotency، Outbox، JWT) مع واجهة React حقيقية من الأسبوع 4، وأدمن React، وE2E، وCompose يشمل المتجر. الهدف: Junior FullStack قوي يقدر يشرح الـ checkout من قاعدة البيانات لزر التأكيد.";

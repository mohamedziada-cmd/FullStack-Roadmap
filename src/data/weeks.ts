import type { Week } from "./types";

export const weeks: Week[] = [
  {
    id: 1,
    month: 1,
    title: "أساسات C# + Git + أساسات الويب",
    kicker: "الشهر 1 · الأساس المضغوط",
    goal: "تسد فجوات اللغة، تبني عادة Git، وتقدر تركّب صفحة HTML/CSS من غير إطار. من غير ASP.NET ومن غير React لسه.",
    hours: "25–30 ساعة",
    backend: {
      learn: [
        "Value Types vs Reference Types — Stack vs Heap وليه يهم",
        "Boxing / Unboxing — Nullable (?)، ??، ??=",
        "String vs StringBuilder — Arrays, List, Dictionary, HashSet",
        "DateTime / DateOnly / TimeOnly — Enums — Structs vs Classes — Records",
        "Git: init, clone, add, commit, push, pull, branch, .gitignore, README",
      ],
      apply: [
        "مستودع GitHub باسم واضح (ShopX) مع README و.gitignore لـ .NET وللـ client",
        "Console App صغير يتمرّن فيه على Records وDictionary وnullable — مش جزء من المنتج",
      ],
    },
    frontend: {
      learn: [
        "HTML دلالي: header, main, nav, article, form — مش div لكل حاجة",
        "CSS: Box model, Flex, Grid, وحدات نسبية، mobile-first",
        "JavaScript: let/const, functions, arrays, objects, DOM, fetch كمفهوم",
        "إتاحة أساسية: تباين، تسميات، حجم لمس 44px",
      ],
      apply: [
        "مجلد client/static: صفحة هبوط للمتجر (هيدر، بطاقة منتج، فوتر) بـ HTML/CSS فقط",
        "الصفحة Responsive على 390px وDesktop",
      ],
    },
    deliverable:
      "ريبو عام + أول commit + README يشرح هدف الـ E-commerce في 10 أسطر + صفحة HTML ثابتة لواجهة المتجر.",
    interview: [
      "إيه الفرق بين class وrecord؟",
      "امتى boxing بيحصل؟",
      "ليه string immutable؟",
      "فرّق Flex وGrid بجملة.",
    ],
  },
  {
    id: 2,
    month: 1,
    title: "OOP بعمق + مكوّنات React",
    kicker: "الشهر 1 · الأساس المضغوط",
    goal: "OOP مش تعريفات — تطبقه على كيانات المتجر. React مش مكتبة سحرية — تركيب مكوّنات.",
    hours: "25–32 ساعة",
    backend: {
      learn: [
        "Classes, Constructors, Properties, Encapsulation, Abstraction",
        "Inheritance vs Composition — Polymorphism (overloading vs overriding)",
        "Interfaces vs Abstract Classes — الفرق العملي",
        "Association / Aggregation / Composition / Dependency",
        "SOLID الخمسة بمثال Backend — DRY, KISS, YAGNI — Coupling & Cohesion",
      ],
      apply: [
        "صمم كيانات Domain على ورق/Mermaid: Product, Category, Customer, CartItem, Order — من غير DbContext",
        "اكتب Interfaces مبدئية (IPriceCalculator) توضح SRP وDIP",
      ],
    },
    frontend: {
      learn: [
        "React: Function components, JSX, props, composition",
        "State محلي، رفع الحالة، قوائم وkeys",
        "ليه المكوّن يعيد الرسم، وامتى تقلق",
      ],
      apply: [
        "Vite + React (من غير TypeScript إجباري الأسبوع ده لو ضغط — TS الأسبوع 3)",
        "ProductCard وCategoryChip وHeader كمكوّنات على بيانات JSON وهمية",
      ],
    },
    deliverable:
      "مجلد Domain فيه الكيانات + ARCHITECTURE.md يشرح العلاقات بـ Composition مش Inheritance + قائمة منتجات تترندر من مكوّنات React.",
    interview: [
      "فرّق Composition وInheritance بمثال Order وPayment.",
      "اشرح DIP بجملة واحدة.",
      "ليه key في القوائم؟ إيه اللي يحصل لو استخدمت الـ index؟",
    ],
  },
  {
    id: 3,
    month: 1,
    title: "C# متقدم + async + SQL + TypeScript",
    kicker: "الشهر 1 · الأساس المضغوط",
    goal: "LINQ وGenerics وExceptions وasync/await قبل أي Controller. TypeScript قبل ما الـ SPA تكبر. SQL بالتوازي.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "Generics + Constraints — Delegates, Lambda, Events, Extension Methods",
        "LINQ Method + Query Syntax — IEnumerable vs IQueryable (الفرق الجوهري)",
        "Pattern Matching, Tuples, Local Functions, yield return",
        "Exception Handling + Custom Exceptions — async/await وTask وCancellationToken",
        "SQL: SELECT, WHERE, ORDER BY, GROUP BY, HAVING, JOIN, Subquery, CTE",
      ],
      apply: [
        "تمرين LINQ على قائمة منتجات (Filter/Sort/Group) في Memory",
        "method async تتأخر بـ Task.Delay وتلغي بـ CancellationToken",
        "نفّذ نفس استعلامات الكتالوج يدويًا في SQL Server قبل EF",
      ],
    },
    frontend: {
      learn: [
        "TypeScript: types, interfaces, unions, generics, narrowing",
        "الفرق type vs interface عمليًا",
        "Controlled inputs في React، أحداث النماذج",
      ],
      apply: [
        "حوّل مشروع الـ client لـ TypeScript",
        "ملف types.ts فيه Product وCategory وCartItem مطابق للدومين",
      ],
    },
    deliverable:
      "ملف SQL فيه 8 استعلامات حقيقية على جداول تجريبية + ملاحظة مكتوبة: متى IQueryable لازم يفضل IQueryable + ملف أنواع TS للكتالوج والسلة.",
    interview: [
      "ليه IEnumerable.Where بعد ToList خطر؟",
      "إيه اللي بيحصل لو نسيت await؟",
      "إيه CTE؟",
      "interface ولا type في TypeScript — امتى كل واحدة؟",
    ],
  },
  {
    id: 4,
    month: 1,
    title: "تصميم قاعدة + EF + أول CRUD + أول صفحة حية",
    kicker: "الشهر 1 · الأساس المضغوط",
    goal: "ترسم ERD، تعمل DbContext، أول Migration، CRUD منتجات async، وصفحة React تضرب الـ API.",
    hours: "28–35 ساعة",
    backend: {
      learn: [
        "PK / FK / Unique / Check / Default — 1-1, 1-N, M-N",
        "ERD قبل الكود — Normalization 1NF/2NF/3NF — Denormalization امتى مقبولة",
        "DbContext & DbSet — Fluent API vs Data Annotations",
        "Migrations: Add / Update / Remove — Seed — Indexes مفهوم عام",
        ".NET CLI، هيكل Solution، appsettings، Environment — Options Pattern مقدمة",
      ],
      apply: [
        "ارسم ERD للكتالوج: Product, Category, ProductImage, Inventory",
        "ASP.NET Core Web API + EF Core + SQL Server + أول Migration",
        "CRUD منتجات async بالكامل مع ILogger — مفيش .Result",
      ],
    },
    frontend: {
      learn: [
        "Vite env: VITE_API_URL — إيه اللي يتشاف في المتصفح",
        "fetch مكتوب بأنواع — حالات loading / error / empty",
        "CORS: ليه المتصفح بيمنع، وإيه اللي السيرفر لازم يفتحه",
      ],
      apply: [
        "صفحة Products تجيب GET /api/products من الـ DB بعد الـ Seed",
        "بطاقة منتج من الداتا الحقيقية مش JSON وهمي",
      ],
    },
    deliverable:
      "Solution يشتغل: GET /api/products يرجع من DB بعد Seed. كل الـ actions من نوع async Task. صفحة React تعرض المنتجات. CORS مضبوط للـ client.",
    interview: [
      "ليه مش بنحط [Required] على كل حاجة وFluent API على الباقي؟",
      "إيه اللي بتعمله Migration فعليًا؟",
      "إيه CORS وليه الـ SPA محتاجه؟",
    ],
    cutHint: "لو الوقت ضغط: Update/Delete يتأجلوا ليوم، الـ GET الحي + صفحة الكتالوج لا.",
  },
  {
    id: 5,
    month: 2,
    title: "Pipeline + DI + طبقات + Router + Layout",
    kicker: "الشهر 2 · Identity والكتالوج والـ SPA",
    goal: "تفهم الرحلة من Request لـ Response، وتفصل Controller عن Service، وتبني هيكل الـ SPA.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "Middleware Pipeline وترتيب الـ Middleware وليه الترتيب يفرق",
        "Routing: Attribute Routing (الأساسي للـ API)",
        "Model Binding + Data Annotations Validation",
        "DI: Constructor Injection — Transient vs Scoped vs Singleton",
        "ILogger من أول يوم — DTOs vs Domain (الكيان مش يخرج برة)",
      ],
      apply: [
        "ثلاث طبقات داخل نفس المشروع: Api / Application / Infrastructure",
        "ProductService فيه المنطق، Controller رفيع، DTO للـ response",
        "Middleware يسجّل زمن الطلب — Razor مش مطلوب (Swagger واجهة مؤقتة للأدمن)",
      ],
    },
    frontend: {
      learn: [
        "React Router: layout، nested routes، 404",
        "Tailwind كأساس للواجهة — توكنز بسيطة (لون، مسافة، خط)",
        "هيكل مجلدات: pages / components / lib",
      ],
      apply: [
        "Layout ثابت: هيدر، فوتر، Outlet",
        "مسارات: الرئيسية، الكتالوج، تفاصيل منتج من الـ API",
      ],
    },
    deliverable:
      "طلب GET للمنتجات يعدّي على Middleware زمن + Service + DTO. مفيش Entity راجعة من الـ API. الـ SPA فيه layout و3 مسارات.",
    interview: [
      "لو سجّلت DbContext كـ Singleton إيه اللي يحصل؟",
      "فرّق Scoped وTransient بمثال.",
      "إيه layout route؟ ليه UseAuthentication قبل UseAuthorization؟",
    ],
  },
  {
    id: 6,
    month: 2,
    title: "Identity + تسجيل دخول حقيقي + واجهة Auth",
    kicker: "الشهر 2 · Identity والكتالوج والـ SPA",
    goal: "تسجيل دخول حقيقي مش Tutorial منسوخ. افهم الجداول والـ flow، وابنِ صفحات التسجيل والدخول.",
    hours: "28–35 ساعة",
    backend: {
      learn: [
        "بنية جداول Identity (Users / Roles / Claims / UserRoles)",
        "UserManager & SignInManager — Password Hashing كمفهوم",
        "Cookie Authentication خطوة بخطوة (تفهمه قبل JWT في الأسبوع 14)",
        "Email Confirmation مبسّط — Password Reset — Account Lockout",
        "[Authorize] — Roles vs Claims (السياسات الأسبوع 8)",
      ],
      apply: [
        "Register / Login / Logout للعميل — Role: Customer و Admin",
        "Lockout بعد 5 محاولات — Confirmation حتى لو اللينك بيتطبع في الـ log",
        "CORS + credentials لو هتستخدم الكوكي من الـ SPA مؤقتًا",
      ],
    },
    frontend: {
      learn: [
        "نماذج Auth: تحقق من الطرفين، رسائل خطأ واضحة، حالة التحميل",
        "credentials: 'include' مع الكوكي — وليه localStorage مش مكان الباسورد",
        "Protected route مبدئي (يتبدّل JWT الأسبوع 14)",
      ],
      apply: [
        "صفحات Register وLogin وLogout",
        "بعد الدخول: تحويل للكتالوج — الأدمن يشوف رابط إدارة",
      ],
    },
    deliverable:
      "تقدر تسجّل عميل من الواجهة، تتقفل بعد محاولات غلط، وأدمن يدخل على endpoint محمي بـ [Authorize(Roles=\"Admin\")].",
    interview: [
      "الباسورد بيتخزن إزاي؟",
      "Cookie Auth مش مناسبة للـ API/SPA ليه؟",
      "إيه الفرق بين Authentication وAuthorization؟",
    ],
  },
  {
    id: 7,
    month: 2,
    title: "EF متقدم + بحث الكتالوج + فلاتر في الواجهة",
    kicker: "الشهر 2 · Identity والكتالوج والـ SPA",
    goal: "الكتالوج يبقى سريع وصح: من غير N+1، مع Pagination وFiltering، وواجهة فلاتر مرتبطة بالـ URL.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "Eager vs Explicit vs Lazy Loading",
        "Include / ThenInclude — Projection لـ DTO مباشرة",
        "Change Tracker و AsNoTracking",
        "مشكلة N+1: السبب والحل",
        "Global Query Filters (IsDeleted) — Composite/Covering Index — LIKE vs FTS مقدمة",
      ],
      apply: [
        "GET /api/products?category=&minPrice=&maxPrice=&q=&sort=&page=&pageSize=",
        "كل الفلترز تتجمّع في IQueryable واحد، وToListAsync في الآخر",
        "Index على (CategoryId, IsDeleted) و(Name) حسب Execution Plan",
      ],
    },
    frontend: {
      learn: [
        "Search params كمصدر حقيقة — لينك قابل للمشاركة",
        "Debounce لحقل البحث",
        "TanStack Query: cache مبدئي، isLoading, isError",
      ],
      apply: [
        "صفحة كتالوج: فلاتر + ترتيب + صفحات تكتب في الـ URL",
        "هيكلات تحميل (skeleton) بدل شاشة فاضية",
      ],
    },
    deliverable:
      "بحث+فلترة+ترتيب+Pagination سيرفر سايد. تثبت بـ log أو Profiler إن مفيش N+1. الواجهة تعكس الـ URL.",
    interview: [
      "إيه AsNoTracking؟ امتى Include وحش؟",
      "فرّق Composite وCovering Index.",
      "ليه الفلاتر في الـ URL مش في الـ state بس؟",
    ],
  },
  {
    id: 8,
    month: 2,
    title: "سياسات صلاحيات + بروفايل + أدمن منتجات",
    kicker: "الشهر 2 · Identity والكتالوج والـ SPA",
    goal: "تقفل الصلاحيات بسياسة، البروفايل جزء من المنتج، والأدمن يدير المنتجات من React مش Razor.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "Policy-Based Authorization — Roles vs Claims vs Policies",
        "رفع صورة: Validation للنوع والحجم — الصورة مش في Git",
        "Minimal APIs vs Controllers: endpoint واحد Minimal جنب الـ Controllers",
      ],
      apply: [
        "سياسة CanManageCatalog للأدمن",
        "تحديث البروفايل + صورة — IFileStorage واجهة حتى لو التنفيذ wwwroot",
        "Endpoints العميل للكتالوج هي الواجهة الأساسية",
      ],
    },
    frontend: {
      learn: [
        "رفع ملف مع معاينة، حدود الحجم/النوع في الواجهة كمان",
        "حراسة مسار الأدمن — IDOR: متبعتش UserId من البودي",
        "نموذج إنشاء منتج للأدمن مربوط بالـ API",
      ],
      apply: [
        "العميل يعدّل بروفايله ويرفع صورة",
        "أدمن فقط يضيف منتج من /admin/products",
        "واجهة المتجر تستدعي الـ API (مش صفحة fetch يتيمة)",
      ],
    },
    deliverable:
      "عميل يعدّل بروفايله ويرفع صورة. أدمن بس يقدر يضيف منتج. المتجر والأدمن من نفس الـ SPA.",
    interview: [
      "امتى Policy أحسن من Role؟",
      "إيه IDOR لو حد عدّل UserId في طلب تحديث البروفايل؟",
      "ليه التحقق في الواجهة مش كفاية؟",
    ],
  },
  {
    id: 9,
    month: 3,
    title: "طبقة الخدمات + السلة + واجهة السلة",
    kicker: "الشهر 3 · السلة والأوردر والدفع",
    goal: "السلة منطق بيزنس، مش كود في الـ Controller ولا حساب سعر في React.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "الفصل العملي Controller vs Service",
        "Session vs TempData vs Cookies — امتى كل واحدة",
        "استراتيجية السلة: DB-backed للمستخدم المسجّل (أساسي) vs Session/Cookie للزائر",
      ],
      apply: [
        "Cart و CartItem في الـ DB مربوطين باليوزر",
        "Add / UpdateQty / Remove / GetCart — كل الحسابات في CartService",
        "الزائر: سلة Cookie تندمج بعد اللوجين (لو الوقت ضغط، وثّقها TODO)",
      ],
    },
    frontend: {
      learn: [
        "Optimistic UI: تحديث فوري مع رجوع لو فشل",
        "شارة السلة، أزرار كمية، حالة فارغة",
        "مصدر السعر: السيرفر. الواجهة تعرض.",
      ],
      apply: [
        "صفحة سلة + درج سريع من الهيدر",
        "إضافة من صفحة المنتج وتحديث الشارة",
      ],
    },
    deliverable:
      "مستخدم مسجّل يضيف منتجين، يعدّل الكمية، يشوف الإجمالي. مفيش منطق سعر في الـ Controller ولا في React.",
    interview: [
      "ليه السلة في الـ Session مشكلة لو عندك أكتر من سيرفر؟",
      "إيه اللي يتحسب في الـ Service مش الـ Controller؟",
      "إيه rollback في التحديث المتفائل؟",
    ],
    cutHint: "دمج سلة الزائر بعد اللوجين يتأجل. خصم السعر من السيرفر لا يتأجل.",
  },
  {
    id: 10,
    month: 3,
    title: "الأوردر + State Machine + سباق المخزون + Checkout",
    kicker: "الشهر 3 · السلة والأوردر والدفع",
    goal: "الأوردر مش Insert صف. حالة + مخزون + سباق على آخر قطعة. الواجهة تتعامل مع 409.",
    hours: "30–35 ساعة",
    backend: {
      learn: [
        "Order State Machine: Pending → Confirmed → Paid → Shipped → Delivered / Cancelled",
        "التعامل مع Stock وقت إنشاء الأوردر",
        "Optimistic Concurrency: RowVersion — شرط WHERE Quantity >= @qty",
        "ACID بالتفصيل — Transactions في EF",
        "Isolation Levels: Read Committed كافتراضي، والباقي كمفهوم مرتبط بالمخزون",
      ],
      apply: [
        "Checkout يحوّل السلة لأوردر Pending ويخصم المخزون في Transaction واحدة",
        "لو الكمية لا تكفي: OutOfStockException",
        "RowVersion على Inventory — اختبار يدوي: طلبين لنفس آخر قطعة",
      ],
    },
    frontend: {
      learn: [
        "معالج دفع متعدد الخطوات: عنوان، ملخص، تأكيد",
        "عرض 409/نفاد المخزون بشكل مفهوم — مش toast أحمر وخلاص",
        "تعطيل زر التأكيد أثناء الإرسال (منع الدبل كليك)",
      ],
      apply: [
        "Wizard Checkout مربوط بالـ API",
        "رسالة واضحة لما الطلب المتزامن يفشل",
      ],
    },
    deliverable:
      "سيناريو مكتوب+شغال: قطعة واحدة في المخزون + طلبين متزامنين = واحد ينجح وواحد يفشل بوضوح في الـ API وفي الواجهة.",
    interview: [
      "إيه Race Condition على المخزون؟",
      "فرّق Optimistic وPessimistic locking.",
      "إيه Atomicity هنا؟ الواجهة تعرض 409 إزاي؟",
    ],
    cutHint: "لو الأسبوع خلص من غير سباق المخزون، متبدأش الأسبوع 11.",
  },
  {
    id: 11,
    month: 3,
    title: "الدفع + Idempotency + Wishlist + شاشات الدفع",
    kicker: "الشهر 3 · السلة والأوردر والدفع",
    goal: "محاكاة Payment Gateway محترم: مش زرار يخلّي الأوردر Paid.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "فكرة أي بوابة دفع: Redirect / Callback / Webhook",
        "Idempotency: منع تكرار نفس العملية — جدول IdempotencyKeys",
        "Wishlist تصميم بسيط (User + Product unique)",
      ],
      apply: [
        "FakePayment: endpoint webhook يحوّل الأوردر لـ Paid",
        "نفس Webhook لو اتبعت مرتين بنفس Idempotency-Key لا يخصم ولا يغيّر الحالة مرتين",
        "Wishlist: إضافة/حذف/قائمة",
        "مفيش Secret في الكود",
      ],
    },
    frontend: {
      learn: [
        "شاشة انتظار الدفع، صفحة الرجوع، فشل/نجاح",
        "Wishlist: قلب على البطاقة، قائمة منفصلة",
        "Polling بسيط لحالة الأوردر أو صفحة return",
      ],
      apply: [
        "تدفق دفع وهمي من الـ checkout لصفحة النتيجة",
        "Wishlist شغال من الكتالوج",
      ],
    },
    deliverable:
      "Webhook + Idempotency Key شغال. Wishlist شغال. مفيش Secret في الكود. صفحة رجوع دفع في الـ SPA.",
    interview: [
      "إيه Idempotency؟",
      "لو الـ webhook اتنادى مرتين من غير مفتاح إيه اللي يحصل لمحفظة العميل؟",
    ],
    cutHint: "لو الأسبوع خلص من غير جدول Idempotency، متبدأش الأسبوع 12. الـ Wishlist آخر حاجة تتشال.",
  },
  {
    id: 12,
    month: 3,
    title: "الأخطاء + أول Unit Tests على الطرفين",
    kicker: "الشهر 3 · السلة والأوردر والدفع",
    goal: "الاستثناءات تبقى Domain، والاختبار يبدأ هنا مش في الشهر 6 — Backend وFrontend.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "Custom Domain Exceptions: OutOfStock, PaymentFailed, ForbiddenResource",
        "Try/Catch: امتى تمسك وامتى تسيبها تطلع",
        "xUnit: [Fact] و [Theory] — Arrange-Act-Assert",
        "Moq: Mock للـ abstraction — اختبر البيزنس مش الإطار",
      ],
      apply: [
        "3–5 اختبارات على OrderService / CartService (نجاح، نفاد، انتقال حالة غير مسموح)",
        "Global Exception Middleware يحوّل الاستثناء لـ ProblemDetails",
      ],
    },
    frontend: {
      learn: [
        "Vitest + Testing Library — اختبر السلوك الظاهر مش تفاصيل التنفيذ",
        "إيه اللي تستحق تختبره: تنسيق سعر، تعطيل Checkout، رسائل الخطأ",
      ],
      apply: [
        "اختبار تنسيق العملة، اختبار شارة السلة، اختبار زر Checkout وهو فاضي",
      ],
    },
    deliverable:
      "dotnet test يعدّي. اختبار واحد على الأقل بيكسر لو شلت شرط المخزون. npm test يعدّي على اختبارين واجهة على الأقل.",
    interview: [
      "إيه AAA؟",
      "ليه مش بنعمل Mock لـ HttpContext في كل تست؟",
      "إيه فلسفة Testing Library؟ إيه اللي مش لازم يتختبر؟",
    ],
  },
  {
    id: 13,
    month: 4,
    title: "REST احترافي + Validation + نماذج الواجهة",
    kicker: "الشهر 4 · API احترافي وJWT",
    goal: "الـ API يبقى عقد مش مجموعة endpoints عشوائية. النماذج في الواجهة تطابق العقد.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "HTTP: GET/POST/PUT/PATCH/DELETE — Status Codes بما فيها 409 و422",
        "Headers, JSON, REST وStatelessness — CORS مكتمل",
        "FluentValidation بدل الاعتماد على Data Annotations لوحدها",
        "ProblemDetails شكل موحّد — Response Wrapper: data / error / meta",
        "Mapping: يدوي أو Mapperly — AutoMapper مش مطلوب",
      ],
      apply: [
        "وحّد شكل الرد مع pagination في meta",
        "FluentValidation لـ CreateProduct وCheckout",
        "Swagger/OpenAPI كامل مع أمثلة 401/404/409",
      ],
    },
    frontend: {
      learn: [
        "React Hook Form + Zod يطابق قواعد FluentValidation",
        "ربط أخطاء 422 بالحقول",
        "نماذج متاحة: label مرتبط، رسالة خطأ مقروءة للشاشة",
      ],
      apply: [
        "نماذج المنتج والدفع تعرض أخطاء السيرفر على الحقل",
        "مفيش Entity شكلها باين في أي response بتستهلكه الواجهة",
      ],
    },
    deliverable:
      "كل خطأ بيرجع ProblemDetails. Swagger يوثّق 401/404/409. النماذج تربط أخطاء الحقول. مفيش Entity في أي response.",
    interview: [
      "فرّق PUT وPATCH.",
      "إيه 409 في checkout؟",
      "ليه Entity في الـ API ثغرة؟",
    ],
  },
  {
    id: 14,
    month: 4,
    title: "JWT + Refresh Token + AuthContext",
    kicker: "الشهر 4 · API احترافي وJWT",
    goal: "Auth للـ API صح: Access قصير + Refresh يتخزن بأمان. الـ SPA تهاجر من الكوكي للأدوات.",
    hours: "30–35 ساعة",
    backend: {
      learn: [
        "ليه Cookie مش مناسبة لـ SPA/Mobile — بنية JWT (Header.Payload.Signature)",
        "Access vs Refresh: دورة الحياة، مكان التخزين، التدوير",
        "Claims جوه التوكن — JWT Validation Middleware",
        "Revocation فكرة (blacklist / version على اليوزر)",
      ],
      apply: [
        "Login يرجع access + refresh",
        "Refresh endpoint يدور التوكن",
        "[Authorize] على الـ API بـ JWT — الأدمن والعميل بنفس الآلية",
        "السر من Configuration مش من الكود",
      ],
    },
    frontend: {
      learn: [
        "Access في الذاكرة (متغير) — Refresh في httpOnly cookie لو قدرت، أو وثّق المقايضة",
        "AuthContext: user, login, logout, bootstrap",
        "Interceptor: 401 → refresh مرة واحدة → إعادة الطلب — منع حلقة لا نهائية",
      ],
      apply: [
        "الـ SPA: login → طلب محمي → refresh بعد انتهاء الـ access",
        "حراسة مسارات الأدمن من الـ claims",
      ],
    },
    deliverable:
      "Postman: login → protected → refresh. نفس التدفق من الـ SPA. السر من الإعدادات.",
    interview: [
      "إيه اللي في الـ Payload؟",
      "لو سرقوا Access Token إيه الضرر؟",
      "Refresh يتخزن فين في المتصفح؟ ليه Access في localStorage خطر؟",
    ],
  },
  {
    id: 15,
    month: 4,
    title: "Versioning + Correlation + Rate Limit + حالات الواجهة",
    kicker: "الشهر 4 · API احترافي وJWT",
    goal: "تفاصيل بتخلي الـ API والواجهة شكل شغل شركة مش كورس.",
    hours: "25–30 ساعة",
    backend: {
      learn: [
        "Pagination/Filter/Sort كـ Query Parameters بشكل ثابت",
        "API Versioning (URL /api/v1) — Rate Limiting المدمج في ASP.NET Core",
        "Health Checks حقيقية: SQL (Redis لاحقًا)",
        "Correlation ID: توليد/قراءة X-Correlation-ID وتمريره في الـ log",
      ],
      apply: [
        "Versioning على الكتالوج",
        "Rate limit على Login ضد Brute Force",
        "Middleware للـ Correlation ID",
        "/health يرجع Healthy/Unhealthy حسب DB",
      ],
    },
    frontend: {
      learn: [
        "Skeleton، empty، error+retry كحالات تصميم مش لاحقة",
        "عرض Correlation ID في رسالة 500 للمستخدم (أو نسخه للدعم)",
        "رسالة 429 على تسجيل الدخول بعد المحاولات",
      ],
      apply: [
        "الكتالوج فيه الهيكل الثلاثي للحالات",
        "Login يحترم الـ rate limit",
      ],
    },
    deliverable:
      "طلب فاشل في الـ log يتتتبع بنفس Correlation ID. /health يكسر لو DB واقفة. الواجهة تعرض 429 و500 بشكل مفهوم.",
    interview: [
      "إيه فايدة Correlation ID؟",
      "Rate limit على Login بيحمي من إيه؟",
      "Versioning ليه؟",
    ],
  },
  {
    id: 16,
    month: 4,
    title: "Resilience + HttpClient + تدفق العميل الكامل",
    kicker: "الشهر 4 · API احترافي وJWT",
    goal: "أي استدعاء خارجي يتحمل فشل مؤقت. العميل يكمّل الرحلة كاملة من الواجهة.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "IHttpClientFactory — Retry / Timeout / Circuit Breaker (Polly أو Microsoft.Extensions.Http.Resilience)",
        "Idempotency على مستوى العميل كمان (إعادة المحاولة)",
      ],
      apply: [
        "FakePayment يتندّى عبر HttpClient مع Retry مرتين وTimeout",
      ],
    },
    frontend: {
      learn: [
        "صقل التدفق: رئيسية → كتالوج → منتج → سلة → دفع → رجوع → طلباتي",
        "حالات الشبكة البطيئة، تعطيل مزدوج، رسائل واضحة",
      ],
      apply: [
        "الـ SPA تكمّل فلو العميل الأساسي من غير ما تلمس Swagger",
      ],
    },
    deliverable:
      "لو FakePayment وقع أول مرة، الـ Retry ينجح. الواجهة تكمّل فلو العميل الأساسي: تصفح، سلة، دفع، طلب.",
    interview: [
      "إيه Circuit Breaker؟",
      "ليه HttpClient جديد في كل طلب غلط؟",
      "إيه Timeout المناسب لبوابة دفع؟",
    ],
  },
  {
    id: 17,
    month: 5,
    title: "ترقية Clean Architecture + مجلدات خصائص الواجهة",
    kicker: "الشهر 5 · معمارية وكاش وخلفية",
    goal: "تنقل الحدود اللي اتعملت من شهر 2 لشكل Clean من غير كسر الـ features. الواجهة تتنظم بنفس الجدية.",
    hours: "30–35 ساعة",
    backend: {
      learn: [
        "Layered vs Clean — Dependency Rule",
        "مشاريع: Domain / Application / Infrastructure / Api",
        "Repository: مميزاته وعيوبه — EF أصلًا Unit of Work. متعملش Repository فاضي",
      ],
      apply: [
        "انقل الكيانات والاستثناءات لـ Domain",
        "Application: interfaces + services/use-cases",
        "Infrastructure: EF, Identity, Payment adapter",
        "كل الـ features القديمة تعدّي بعد النقل",
      ],
    },
    frontend: {
      learn: [
        "Feature folders: catalog / cart / orders / auth / admin",
        "UI kit مشترك — منع الاستيراد الدائري",
        "حدود: الصفحة ما تعرفش شكل الـ DTO الخام لو في mapper للعرض",
      ],
      apply: [
        "إعادة تنظيم الـ client من غير ما تكسر المسارات",
      ],
    },
    deliverable:
      "Solution بعدة مشاريع، الـ Domain من غير مرجع لـ EF. الـ tests لسه بتعدّي. مفيش feature اتشالت. الواجهة متقسمة خصائص.",
    interview: [
      "ليه Domain معرفش EF؟",
      "امتى Repository تكرار؟",
      "إيه Dependency Rule؟",
    ],
    cutHint: "شهر 5 ترقية مش مشروع تاني. النقل يتم والـ tests خضراء.",
  },
  {
    id: 18,
    month: 5,
    title: "أنماط تصميم على المتجر + شحن وكوبون",
    kicker: "الشهر 5 · معمارية وكاش وخلفية",
    goal: "Pattern يتحل به تعدد حقيقي، مش class اسمه Factory من غير حاجة.",
    hours: "25–30 ساعة",
    backend: {
      learn: [
        "Strategy: شحن (Standard/Express/Pickup) أو دفع (Card/COD/Wallet)",
        "Factory: إنشاء استراتيجية حسب اختيار العميل",
        "Decorator: تسعير + خصم كوبون كطبقة",
        "Mediator مقدمة (من غير التزام بـ MediatR/CQRS كامل)",
      ],
      apply: [
        "IShippingStrategy + اختيار وقت الـ checkout",
        "كوبون خصم كـ Decorator أو Strategy على السعر النهائي",
      ],
    },
    frontend: {
      learn: [
        "اختيار الشحن يحدّث الملخص فورًا من حساب السيرفر",
        "حقل كوبون: نجاح/فشل/انتهاء",
        "تفصيل السعر: سلع، شحن، خصم، إجمالي",
      ],
      apply: [
        "واجهة الشحن والكوبون في الـ checkout",
        "تست واحد على حساب الشحن (Backend) وواحد على عرض التفصيل (Frontend لو لزم)",
      ],
    },
    deliverable:
      "تغيير نوع الشحن ما يلمسش OrderService (Open/Closed). تست على حساب الشحن. الواجهة تحدّث الإجمالي.",
    interview: [
      "إيه Strategy vs if/else؟",
      "اشرح OCP بمثال الشحن.",
      "Decorator في .NET نفسه فين (middleware)؟",
    ],
  },
  {
    id: 19,
    month: 5,
    title: "Caching + Redis + أداء EF + كاش React Query",
    kicker: "الشهر 5 · معمارية وكاش وخلفية",
    goal: "الكتالوج يتسرّع من غير بيانات فاسدة — لا في Redis ولا في كاش الواجهة.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "IMemoryCache — Distributed Cache — Redis: Get/Set/Expiry",
        "Cache-Aside — Invalidation بعد تعديل منتج/سعر",
        "EF: AsSplitQuery, Projection, تجنّب Client Evaluation",
        "async صح: تجنّب .Result / .Wait",
      ],
      apply: [
        "Redis للكتالوج (الفئات + صفحة منتج)",
        "Invalidation عند UpdateProduct",
        "Health check لـ Redis",
      ],
    },
    frontend: {
      learn: [
        "TanStack Query: query keys, staleTime, invalidateQueries",
        "بعد تعديل الأدمن: إبطال كاش الكتالوج",
        "ما تعرضش سعر قديم بعد حفظ المنتج",
      ],
      apply: [
        "مفاتيح استعلام واضحة للكتالوج والمنتج",
        "invalidate بعد نجاح UpdateProduct",
      ],
    },
    deliverable:
      "أول طلب للكتالوج من DB، التاني من Redis (زمن أو log). تعديل منتج يمسح الكاش. الواجهة ما تفضلش سعر فاسد.",
    interview: [
      "إيه Cache Stampede؟",
      "Cache-Aside vs Write-Through.",
      "امتى كاش فاسد يكسّر سعر؟",
    ],
  },
  {
    id: 20,
    month: 5,
    title: "Background Jobs + Outbox + حالة الأوردر في الواجهة",
    kicker: "الشهر 5 · معمارية وكاش وخلفية",
    goal: "الـ request ما يستناش SMTP. بداية messaging من غير Microservices.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "IHostedService / BackgroundService",
        "قناة داخلية أو جدول Outbox: OrderPaid → Email/Invoice",
        "مقدمة Hangfire أو Quartz لمهمة مجدولة (تنظيف Refresh Tokens / سلات متروكة)",
        "مش Kafka. مش Microservices.",
      ],
      apply: [
        "بعد Paid: صف في Outbox، Worker يبعت إيميل (أو يكتبه في log)",
        "مهمة يومية: احذف السلات الأقدم من 30 يوم",
      ],
    },
    frontend: {
      learn: [
        "صفحة تفاصيل أوردر: خط زمني للحالة",
        "مؤشر «تم إرسال التأكيد» من غير ما الـ checkout يستنى",
        "تحديث الحالة بإعادة جلب — مش WebSocket إجباري",
      ],
      apply: [
        "طلباتي + تفاصيل الأوردر بعد الدفع",
      ],
    },
    deliverable:
      "الـ checkout يرجع 201 بسرعة. الإيميل يطلع بعد ثواني من الـ worker. فشل الإيميل ما يرجّعش الأوردر. الواجهة تعرض Paid ثم تأكيد.",
    interview: [
      "ليه مش نبعت SMTP جوه الـ Controller؟",
      "إيه Outbox Pattern؟",
      "إيه اللي يحصل لو الـ worker وقع؟",
    ],
  },
  {
    id: 21,
    month: 6,
    title: "أمن تطبيقي OWASP على مشروعك — الطرفين",
    kicker: "الشهر 6 · Production-Ready",
    goal: "كل ثغرة تتشاف في كودك، مش في سلايد — API وواجهة.",
    hours: "25–30 ساعة",
    backend: {
      learn: [
        "SQL Injection: EF Parameterized — امتى Raw SQL خطر",
        "XSS: Encoding المخرجات",
        "CSRF: لو فيه Cookie — Anti-Forgery",
        "IDOR: الأوردر ملك اليوزر قبل ما ترجّعه",
        "Secrets: User Secrets / Env — HTTPS Enforcement",
        "OWASP Top 10 مربوط بصفحة/endpoint في مشروعك",
      ],
      apply: [
        "GET /api/orders/{id} يفشل لو الأوردر مش بتاع اليوزر (403 أو 404 موثّق)",
        "منع Over-posting على UpdateProfile",
        "مفيش connection string في Git — راجع git history",
      ],
    },
    frontend: {
      learn: [
        "DOM XSS — ممنوع dangerouslySetInnerHTML على مدخل مستخدم",
        "تخزين التوكن، اعتمادية VITE_ للمتغيرات العامة",
        "محتوى المستخدم (مراجعة، اسم) يتعرض escaped",
      ],
      apply: [
        "مراجعة منتج (لو موجودة) من غير XSS",
        "قائمة OWASP للواجهة جنب قائمة الـ API",
      ],
    },
    deliverable:
      "قائمة OWASP من 10 بنود: كل بند → مكان في المشروع (API و/أو UI) → حالة (محمي / متبقي).",
    interview: [
      "إيه IDOR بمثال أوردر؟",
      "ليه 404 بدل 403 أحيانًا؟",
      "إيه Stored XSS في مراجعة منتج؟",
    ],
  },
  {
    id: 22,
    month: 6,
    title: "Integration Tests + E2E Playwright",
    kicker: "الشهر 6 · Production-Ready",
    goal: "تست يضرب الـ API ضد DB تجريبي، وE2E يضرب الواجهة.",
    hours: "30–35 ساعة",
    backend: {
      learn: [
        "WebApplicationFactory — Testcontainers أو DB محلي منفصل",
        "تغطية: مؤشر مش هدف — ركّز على Checkout, webhook, Auth",
        "اختبارات IDOR وIdempotency كـ integration",
      ],
      apply: [
        "Integration: register → login → add cart → checkout → webhook → Paid",
        "Webhook مرتين بنفس المفتاح = Paid مرة واحدة",
        "يوزر A ما يشوفش أوردر يوزر B",
      ],
    },
    frontend: {
      learn: [
        "Playwright: اختيار مستقر (roles, labels) مش CSS هش",
        "E2E للمسار السعيد + IDOR من المتصفح",
      ],
      apply: [
        "سيناريو Playwright: تسجيل → دخول → سلة → دفع → أوردر Paid",
        "يوزر A يفتح /orders/{id} ليوزر B ويشوف رفض",
      ],
    },
    deliverable:
      "dotnet test يشمل Unit+Integration. Playwright للمسار الحرج. أمر محلي واحد يشغّل الاثنين (أو سكربت موثّق).",
    interview: [
      "فرّق Unit وIntegration وE2E.",
      "إيه WebApplicationFactory؟",
      "ليه تست الـ webhook أهم من تست الـ Controller الفاضي؟",
    ],
  },
  {
    id: 23,
    month: 6,
    title: "Logging جدّي + Docker Compose للستاك كامل",
    kicker: "الشهر 6 · Production-Ready",
    goal: "المشروع يشتغل بأمر واحد: API + SQL + Redis + الواجهة.",
    hours: "28–32 ساعة",
    backend: {
      learn: [
        "Structured Logging بـ Serilog — Levels: Trace→Critical",
        "Correlation ID ظاهر في كل log",
        "Image vs Container — Dockerfile multi-stage لـ ASP.NET Core",
      ],
      apply: [
        "Serilog يكتب JSON (Console + ملف)",
        "Dockerfile multi-stage للـ API",
      ],
    },
    frontend: {
      learn: [
        "Dockerfile للـ SPA (nginx أو vite preview مُنتَج)",
        "API URL من Env جوه الحاوية — source maps مقفولة في الإنتاج",
      ],
      apply: [
        "compose: api + sqlserver + redis + web",
        "شخص تاني يكلّن ويعمل up ويشوف /health وSwagger والمتجر",
      ],
    },
    deliverable:
      "docker compose up --build يشغّل النظام. المتجر و/health وSwagger من غير شرح شفهي.",
    interview: [
      "فرّق Image وContainer.",
      "ليه multi-stage؟",
      "إيه Structured Logging؟",
    ],
  },
  {
    id: 24,
    month: 6,
    title: "CI/CD + نشر + System Design + مراجعة إنترفيو",
    kicker: "الشهر 6 · Production-Ready",
    goal: "Push يبني ويختبر الطرفين. تعرف تشرح الـ checkout كأنك في إنترفيو Mid FullStack.",
    hours: "28–35 ساعة",
    backend: {
      learn: [
        "GitHub Actions: restore → build → test على كل Push",
        "Publish — IIS أساسي أو نشر Container",
        "appsettings.Production.json — Migrations على بيئة منفصلة",
        "Azure خفيف: App Service + Key Vault + Blob للصور",
        "System Design: checkout تحت ضغط — مخزون، idempotency، outbox، كاش",
      ],
      apply: [
        "Workflow أخضر على GitHub يشمل الـ API",
        "README نهائي: تشغيل، معمارية، قرارات، ثغرات محمية",
        "مستند إنترفيو: أسئلة الأسابيع + إجاباتك",
      ],
    },
    frontend: {
      learn: [
        "Job للواجهة في نفس الـ workflow: lint + unit + Playwright على الـ PR",
        "مفهوم معاينة النشر (preview deploy) حتى لو مطبّقش كامل",
      ],
      apply: [
        "الـ README فيه تشغيل الـ SPA وصور شاشة للتدفق",
        "فقرة System Design عن الـ checkout من منظور FullStack (صفحة واحدة)",
      ],
    },
    deliverable:
      "ريبو عام + Actions خضراء + README احترافي + فقرة System Design عن الـ checkout + مستند إجابات الإنترفيو.",
    interview: [
      "صمّم checkout لمتجر 100 طلب/ثانية على نفس المنتج. إيه أول حاجة تكسر؟",
      "إيه اللي عملته في مشروعك عشان تقرّب من الحل؟",
    ],
  },
];

export function getWeek(id: number) {
  return weeks.find((w) => w.id === id);
}

export function weeksByMonth(month: number) {
  return weeks.filter((w) => w.month === month);
}

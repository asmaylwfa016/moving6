# 🚚 منصة أسعار نقل العفش في جدة - Jeddah Moving Cost Calculator

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.x-FF3E00?style=flat-square&logo=svelte)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## 📋 نظرة عامة

منصة متخصصة لحساب ومقارنة أسعار نقل العفش في جدة، توفر حاسبة تفاعلية متطورة مع معلومات شاملة عن الأسعار والخدمات في جميع أحياء جدة.

### 🎯 الميزات الرئيسية

- **حاسبة تكلفة تفاعلية**: حساب دقيق للتكلفة بناءً على عوامل متعددة
- **مقارنة شاملة**: مقارنة بين 4 فئات سعرية مختلفة
- **تغطية جغرافية**: معلومات مفصلة عن 26 حي في جدة
- **مدونة متخصصة**: 15+ مقال تحليلي ونصائح توفير
- **دعم ثنائي اللغة**: العربية والإنجليزية (قريباً)
- **تصميم متجاوب**: يعمل على جميع الأجهزة

## 🛠️ البنية التقنية

### التقنيات المستخدمة

```
- Framework: SvelteKit 2.x
- Language: TypeScript
- Styling: TailwindCSS + PostCSS
- Charts: Chart.js & D3.js
- Forms: svelte-forms-lib
- i18n: svelte-i18n
- Animation: @motionone/svelte
- Date Utils: date-fns
- Markdown: marked
```

### 📁 هيكل المشروع

```
/
├── src/
│   ├── app.html              # HTML الرئيسي
│   ├── app.css               # Tailwind imports
│   ├── lib/
│   │   ├── components/
│   │   │   ├── blog/         # مكونات المدونة
│   │   │   └── layout/       # Header/Footer
│   │   └── styles/           # ملفات CSS إضافية
│   └── routes/
│       ├── +page.svelte      # الصفحة الرئيسية
│       ├── +layout.svelte    # Layout الرئيسي
│       ├── about/            # صفحة من نحن
│       ├── blog/             # المدونة
│       ├── calculator/       # الحاسبة التفصيلية
│       ├── companies/        # صفحات الشركات
│       ├── compare/          # أداة المقارنة
│       ├── contact/          # صفحة الاتصال
│       ├── districts/        # صفحات الأحياء (26 حي)
│       ├── map/              # خريطة تفاعلية
│       └── pricing/          # فئات الأسعار
├── static/
│   ├── data/
│   │   └── blog/             # محتوى المدونة (Markdown)
│   ├── images/
│   │   └── author/           # صور الكتّاب
│   └── favicon.png
├── package.json
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
```

## 🚀 البدء السريع

### المتطلبات

- Node.js 18+ 
- npm أو yarn أو pnpm

### التثبيت

```bash
# Clone the repository
git clone https://github.com/yourusername/jeddah-moving-cost.git

# Navigate to project directory
cd jeddah-moving-cost

# Install dependencies
npm install

# Start development server
npm run dev
```

سيعمل الموقع على http://localhost:3000

### البناء للإنتاج

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 الصفحات والمحتوى

### 🏠 الصفحة الرئيسية
- حاسبة سريعة مبسطة
- مقارنة فئات الأسعار
- آخر المقالات
- شهادات العملاء
- الأسئلة الشائعة
- إحصائيات الخدمة

### 🧮 حاسبة التكلفة التفصيلية
- اختيار الحي المصدر والوجهة
- تحديد نوع السكن وعدد الغرف
- قائمة تفصيلية بالأثاث
- خدمات إضافية (فك/تركيب، تغليف، تخزين)
- نتائج مقسمة حسب فئة الخدمة

### 🗺️ صفحات الأحياء (26 حي)
كل صفحة حي تحتوي على:
- معلومات جغرافية
- متوسط أسعار النقل
- العوامل المؤثرة على السعر
- الشركات النشطة في المنطقة
- نصائح خاصة بالحي

### 💰 فئات الأسعار (5 فئات)

1. **اقتصادي** (500-1000 ريال)
2. **قياسي** (1000-2000 ريال)
3. **مميز** (2000-3500 ريال)
4. **VIP** (3500+ ريال)
5. **خدمات متخصصة** (تسعير مخصص)

### 📝 المدونة (15+ مقال)
- تحليلات السوق
- نصائح توفير التكاليف
- دراسات حالة
- مقالات توعوية
- أدلة متخصصة

## 🎨 التصميم والهوية البصرية

### الألوان
- **أخضر**: #4CAF50 (المال والتوفير)
- **أزرق رمادي**: #607D8B (العناصر الثانوية)
- **رمادي فاتح**: #F5F5F5 (الخلفيات)
- **أصفر**: #FFD700 (العروض الخاصة)

### الخطوط
- **العناوين**: IBM Plex Sans Arabic Bold
- **النصوص**: IBM Plex Sans Arabic
- **الأرقام**: Roboto Mono

## 🔧 المكونات الرئيسية

### Header.svelte
- شريط التنقل
- القوائم المنسدلة
- زر CTA

### Footer.svelte
- روابط سريعة
- معلومات الاتصال
- الشبكات الاجتماعية

### PostCard.svelte
- بطاقة مقال المدونة
- التاريخ والكاتب
- الوسوم

## 📈 SEO والأداء

### تحسينات SEO
- بيانات منظمة (Schema Markup)
- Meta tags ديناميكية
- Sitemap تلقائي
- عناوين URL صديقة للـ SEO

### الأداء
- Static Site Generation
- Lazy Loading للصور
- Code Splitting
- مؤشرات Web Vitals محسّنة

## 🌐 الميزات المستقبلية

- [ ] دعم اللغة الإنجليزية
- [ ] تطبيق جوال
- [ ] API للمطورين
- [ ] نظام حجز مباشر
- [ ] مراجعات العملاء
- [ ] نظام إشعارات للعروض

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 🤝 المساهمة

نرحب بالمساهمات! الرجاء قراءة [CONTRIBUTING.md](CONTRIBUTING.md) للتفاصيل.

## 📞 الدعم والاتصال

- **البريد الإلكتروني**: support@jeddah-moving.com
- **الهاتف**: +966 XX XXX XXXX
- **العنوان**: جدة، المملكة العربية السعودية

---

صُنع بـ ❤️ في جدة 

## 🔄 التحديثات الأخيرة

### تحديث قسم المقالات ذات الصلة (2025)
- ✅ إضافة صور لجميع المقالات في قاعدة البيانات
- ✅ تحسين عرض المقالات ذات الصلة مع الصور والروابط
- ✅ خوارزمية ذكية لعرض المقالات الأكثر صلة بناءً على الوسوم المشتركة
- ✅ تحسين تصميم بطاقات المقالات في جميع الصفحات
- ✅ إضافة تأثيرات حركية سلسة عند التفاعل مع المقالات

### البنية المحدثة للمقالات
```typescript
interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  image: string; // مسار الصورة المميزة للمقال
}
```

### ملاحظات للمطورين
- يتم تحديد الصور في ملف `src/routes/blog/_posts.ts`
- الصور محفوظة في مجلد `static/images/`
- يتم عرض المقالات ذات الصلة بناءً على الوسوم المشتركة
- في حالة عدم وجود مقالات ذات صلة، يتم عرض أحدث 3 مقالات 
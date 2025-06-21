# دليل النشر 🚀

## المتطلبات الأساسية

- Node.js (18.0.0+)
- npm أو yarn
- Git

## التحضير للنشر

### 1. إعداد المتغيرات البيئية

قم بإنشاء ملف `.env`:

```env
# Google Analytics (اختياري)
VITE_GA_ID=GA_MEASUREMENT_ID

# الموقع الأساسي
VITE_BASE_URL=https://your-domain.com

# رقم الواتساب
VITE_WHATSAPP_NUMBER=966501234567

# معرفات التحقق من محركات البحث
VITE_GOOGLE_VERIFICATION=your-google-verification-code
VITE_BING_VERIFICATION=your-bing-verification-code
```

### 2. بناء المشروع

```bash
# تثبيت التبعيات
npm install

# فحص الأخطاء
npm run check

# بناء المشروع
npm run build
```

### 3. اختبار البناء

```bash
# معاينة البناء محلياً
npm run preview
```

## خيارات النشر

### 🌟 Vercel (موصى به)

**المزايا:**
- نشر سريع وسهل
- CDN عالمي
- HTTPS تلقائي
- دعم SvelteKit الأصلي

**خطوات النشر:**

1. **الإعداد الأولي:**
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login
```

2. **النشر:**
```bash
# النشر لأول مرة
vercel

# النشر للإنتاج
vercel --prod
```

3. **الإعدادات في Vercel Dashboard:**
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

### 📄 GitHub Pages

**خطوات النشر:**

1. **إعداد svelte.config.js:**
```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/repository-name'
    }
  }
};
```

2. **إنشاء GitHub Action:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 🌊 Netlify

**خطوات النشر:**

1. **ربط المستودع:**
   - اذهب إلى [Netlify](https://netlify.com)
   - اختر "New site from Git"
   - اربط مستودع GitHub

2. **إعدادات البناء:**
   - Build command: `npm run build`
   - Publish directory: `build`

3. **الإعدادات المتقدمة:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### ☁️ Google Cloud Platform

**خطوات النشر:**

1. **إعداد Cloud Storage:**
```bash
# إنشاء bucket
gsutil mb gs://your-bucket-name

# تحويل البناء
gsutil -m cp -r build/* gs://your-bucket-name
```

2. **إعداد CDN:**
```bash
# إعداد Load Balancer مع CDN
gcloud compute backend-buckets create your-backend \
    --gcs-bucket-name=your-bucket-name
```

## تحسينات ما بعد النشر

### 🔍 إعداد محركات البحث

1. **Google Search Console:**
   - أضف موقعك
   - ارفع sitemap: `https://your-domain.com/sitemap.xml`
   - تحقق من الفهرسة

2. **Bing Webmaster Tools:**
   - أضف موقعك
   - ارفع sitemap
   - راقب الأداء

### 📊 تحليلات الموقع

1. **Google Analytics:**
   - أنشئ حساب جديد
   - أضف كود التتبع
   - فعّل الأهداف

2. **Google Tag Manager:**
   - إعداد حاوي جديد
   - إضافة علامات التتبع
   - تتبع التحويلات

### 🚀 تحسين الأداء

1. **CDN إضافي:**
```bash
# استخدام Cloudflare
# أضف موقعك إلى Cloudflare
# فعّل التحسينات التلقائية
```

2. **ضغط الصور:**
```bash
# تحسين الصور تلقائياً
npm install -g imagemin-cli
imagemin static/images/* --out-dir=static/images/optimized
```

### 🔒 الأمان

1. **HTTPS:**
   - تأكد من تفعيل HTTPS
   - إعداد إعادة توجيه HTTP→HTTPS

2. **CSP Headers:**
```html
<!-- في app.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
               style-src 'self' 'unsafe-inline';">
```

## استكشاف الأخطاء

### مشاكل البناء الشائعة

1. **خطأ TypeScript:**
```bash
# فحص الأنواع
npm run check
```

2. **مشاكل المسارات:**
```javascript
// تأكد من المسارات النسبية
import { component } from '$lib/component';
```

3. **مشاكل الصور:**
```bash
# تأكد من وجود الصور
ls static/images/
```

### مشاكل النشر

1. **Build Size كبير:**
```bash
# تحليل حجم البناء
npm run build -- --analyze
```

2. **مشاكل الروابط:**
```bash
# فحص الروابط المكسورة
npm install -g broken-link-checker
blc https://your-domain.com -ro
```

## قائمة فحص ما قبل النشر ✅

- [ ] فحص جميع الروابط
- [ ] اختبار جميع النماذج
- [ ] التأكد من سرعة التحميل
- [ ] فحص على الهاتف المحمول
- [ ] اختبار SEO
- [ ] التأكد من sitemap.xml
- [ ] فحص robots.txt
- [ ] اختبار الوصولية (a11y)
- [ ] التأكد من الصور المحسنة
- [ ] اختبار المتصفحات المختلفة

## مراقبة ما بعد النشر

### الأدوات المفيدة

1. **Google PageSpeed Insights**
2. **GTmetrix**
3. **Lighthouse**
4. **Google Search Console**
5. **Uptime monitoring**

### المقاييس المهمة

- **Core Web Vitals**
- **Page Load Time**
- **SEO Score**
- **Mobile Usability**
- **Security Issues**

---

## الدعم

في حالة مواجهة مشاكل:

1. راجع [وثائق SvelteKit](https://kit.svelte.dev/docs)
2. تحقق من [GitHub Issues](https://github.com/sveltejs/kit/issues)
3. ابحث في [Stack Overflow](https://stackoverflow.com/questions/tagged/sveltekit)

---

**تم تحضير هذا الدليل بعناية لضمان نشر ناجح 🎯** 
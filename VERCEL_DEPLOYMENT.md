# دليل النشر على Vercel 🚀

## لماذا Vercel؟ 🌟

- **أداء فائق**: CDN عالمي وسرعة تحميل ممتازة
- **نشر تلقائي**: يتم النشر تلقائياً عند كل push إلى GitHub
- **SSL مجاني**: HTTPS تلقائي
- **دعم SvelteKit المدمج**: تكامل مثالي مع SvelteKit
- **مجاني للمشاريع الشخصية**

---

## المتطلبات الأساسية 📋

- ✅ حساب GitHub مع الكود المرفوع
- ✅ حساب Vercel مجاني
- ✅ المشروع جاهز للنشر

---

## طرق النشر 🛠️

### الطريقة الأولى: من خلال موقع Vercel (الأسهل)

#### 1. إنشاء حساب Vercel
- اذهب إلى [vercel.com](https://vercel.com)
- اضغط "Sign Up" وسجل بحساب GitHub

#### 2. ربط المستودع
- اضغط "New Project"
- اختر مستودع `moving6` من GitHub
- اضغط "Import"

#### 3. إعدادات المشروع
```
Framework Preset: SvelteKit
Build Command: npm run build
Output Directory: (اتركه فارغ - تلقائي)
Install Command: npm install
```

#### 4. متغيرات البيئة (اختيارية)
```bash
# إضافة في Environment Variables
VITE_BASE_URL=https://your-project.vercel.app
VITE_WHATSAPP_NUMBER=966501234567
VITE_GA_ID=your-google-analytics-id
```

#### 5. النشر
- اضغط "Deploy"
- انتظر 2-3 دقائق
- ستحصل على رابط مثل: `https://moving6-xxx.vercel.app`

---

### الطريقة الثانية: من خلال Vercel CLI

#### 1. تثبيت Vercel CLI
```bash
npm i -g vercel
```

#### 2. تسجيل الدخول
```bash
vercel login
```

#### 3. النشر لأول مرة
```bash
# في مجلد المشروع
vercel

# اتبع التعليمات:
# - Set up and deploy? Y
# - Which scope? (اختر حسابك)
# - Link to existing project? N
# - What's your project's name? jeddah-moving-prices
# - In which directory is your code located? ./
```

#### 4. النشر للإنتاج
```bash
vercel --prod
```

---

## إعدادات متقدمة ⚙️

### 1. دومين مخصص
- في Vercel Dashboard
- اذهب إلى Settings > Domains
- أضف الدومين الخاص بك
- اتبع تعليمات DNS

### 2. متغيرات البيئة
```bash
# عبر CLI
vercel env add VITE_BASE_URL production
vercel env add VITE_WHATSAPP_NUMBER production

# أو من Dashboard > Settings > Environment Variables
```

### 3. إعادة كتابة الروابط (Redirects)
```json
// في vercel.json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

---

## الأتمتة والتحديثات 🔄

### النشر التلقائي
- **كل push إلى `main`** → نشر تلقائي للإنتاج
- **كل push إلى فرع آخر** → معاينة مؤقتة
- **كل Pull Request** → معاينة للمراجعة

### التحديث
```bash
# فقط ادفع الكود إلى GitHub
git add .
git commit -m "Update website"
git push origin main

# Vercel سيبني وينشر تلقائياً!
```

---

## مراقبة الأداء 📊

### Analytics (إضافي مدفوع)
```bash
# تفعيل Analytics
vercel --enable-analytics
```

### معاينة Logs
```bash
# عرض logs التطبيق
vercel logs your-deployment-url
```

---

## استكشاف الأخطاء 🔧

### مشاكل شائعة:

#### 1. خطأ في البناء
```bash
# تحقق من البناء محلياً
npm run build

# إذا نجح محلياً، تحقق من:
# - Node.js version في vercel.json
# - متغيرات البيئة
```

#### 2. مشكلة في الروابط
```javascript
// تأكد من استخدام relative paths
import { goto } from '$app/navigation';
goto('/path'); // ✅ صحيح
goto('https://domain.com/path'); // ❌ تجنب
```

#### 3. ملفات static لا تظهر
```javascript
// تأكد من المسار
// ✅ صحيح
'/favicon.ico'
'/images/logo.png'

// ❌ خطأ
'./favicon.ico'
'images/logo.png'
```

---

## تحسين الأداء 🚀

### 1. ضغط الصور
```bash
# تثبيت أدوات ضغط الصور
npm install --save-dev @squoosh/lib
```

### 2. Code Splitting
```javascript
// استخدام dynamic imports
const HeavyComponent = () => import('./HeavyComponent.svelte');
```

### 3. Preloading
```html
<!-- في app.html -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
```

---

## الأمان 🔒

### Headers (مدمجة في vercel.json)
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY`
- ✅ `X-XSS-Protection: 1; mode=block`

### البيانات الحساسة
```bash
# استخدم Environment Variables فقط
# لا تضع مفاتيح API في الكود مباشرة
```

---

## المميزات المجانية 🎁

| الميزة | الحد المجاني |
|--------|-------------|
| **Bandwidth** | 100 GB/شهر |
| **Builds** | 6000 دقيقة/شهر |
| **Projects** | غير محدود |
| **Domains** | غير محدود |
| **SSL** | مجاني |
| **Analytics** | أساسي مجاني |

---

## روابط مفيدة 🔗

- [Vercel Documentation](https://vercel.com/docs)
- [SvelteKit + Vercel Guide](https://kit.svelte.dev/docs/adapter-vercel)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Vercel Status](https://vercel-status.com/)

---

## الملفات المُنشأة تلقائياً ✅

- ✅ `vercel.json` - إعدادات Vercel
- ✅ `svelte.config.js` - مُحدث لاستخدام auto adapter
- ✅ المتغيرات البيئية جاهزة

---

## خلاصة سريعة 📝

```bash
# 1. تسجيل في vercel.com بحساب GitHub
# 2. اختيار مستودع moving6
# 3. اضغط Deploy
# 4. انتظر 2-3 دقائق
# 5. احصل على رابط مجاني!
```

**🎉 موقعك سيكون متاحاً على: `https://your-project.vercel.app`**

---

**💡 نصيحة:** احفظ رابط Vercel Dashboard في المفضلة لسهولة المتابعة والإدارة! 
# دليل النشر على Netlify 🚀

## المتطلبات الأساسية

- حساب Netlify مجاني
- مستودع GitHub يحتوي على الكود
- Node.js 18+ للتطوير المحلي

## خطوات النشر

### 1. الطريقة الأولى: النشر عبر Git (موصى بها)

#### أ) ربط مستودع GitHub:
1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط "New site from Git"
3. اختر GitHub واربط الحساب
4. اختر المستودع `moving6`

#### ب) إعدادات البناء:
```
Build command: npm run build
Publish directory: build
```

#### ج) متغيرات البيئة (اختيارية):
```
VITE_BASE_URL=https://your-site-name.netlify.app
VITE_WHATSAPP_NUMBER=966501234567
VITE_GA_ID=your-google-analytics-id
```

### 2. الطريقة الثانية: النشر المباشر

#### أ) بناء المشروع محلياً:
```bash
npm run build
```

#### ب) رفع المجلد:
1. اذهب إلى [netlify.com](https://netlify.com)
2. اسحب مجلد `build` إلى المنطقة المخصصة
3. انتظر انتهاء الرفع

### 3. الطريقة الثالثة: Netlify CLI

#### أ) تثبيت CLI:
```bash
npm install -g netlify-cli
```

#### ب) تسجيل الدخول:
```bash
netlify login
```

#### ج) النشر:
```bash
# نشر تجريبي
netlify deploy --dir=build

# نشر للإنتاج
netlify deploy --prod --dir=build
```

## إعدادات متقدمة

### 1. Domain مخصص:
1. اذهب إلى Site settings > Domain management
2. اضغط "Add custom domain"
3. أدخل domain الخاص بك
4. اتبع تعليمات DNS

### 2. HTTPS:
- يتم تفعيله تلقائياً لجميع المواقع
- شهادة SSL مجانية من Let's Encrypt

### 3. التحديث التلقائي:
- يتم النشر تلقائياً عند push إلى master/main
- يمكن تعطيل/تفعيل من Site settings

## استكشاف الأخطاء

### مشاكل شائعة:

#### 1. خطأ في Build:
```bash
# تحقق من logs في Netlify dashboard
# تأكد من وجود جميع dependencies في package.json
```

#### 2. مشكلة في Routing:
- تأكد من وجود ملف `_redirects` في مجلد `static`
- أو تأكد من إعدادات redirects في `netlify.toml`

#### 3. مشكلة في البيئة:
```bash
# تحقق من Node version في Build settings
# تأكد من NODE_VERSION=18 في netlify.toml
```

#### 4. مشكلة في Assets:
```bash
# تأكد من أن مسارات الملفات صحيحة
# تحقق من إعدادات base path في vite.config.js
```

## تحسين الأداء

### 1. Build Optimization:
```toml
[build.environment]
  NODE_ENV = "production"
  NODE_VERSION = "18"
  NPM_FLAGS = "--production"
```

### 2. Headers Optimization:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### 3. Caching:
```toml
[[headers]]
  for = "/build/*"
  [headers.values]
    Cache-Control = "public, immutable, max-age=31536000"
```

## Forms (إضافية)

### إضافة Netlify Forms:
```html
<form netlify>
  <input type="text" name="name" />
  <textarea name="message"></textarea>
  <button type="submit">إرسال</button>
</form>
```

## Analytics

### تفعيل Netlify Analytics:
1. اذهب إلى Site settings > Analytics
2. اضغط "Enable analytics"
3. اختر الخطة المناسبة

## الملفات المطلوبة (تم إنشاؤها):

- ✅ `netlify.toml` - إعدادات Netlify
- ✅ `static/_redirects` - إعدادات التوجيه
- ✅ `svelte.config.js` - مُحدث لـ Static adapter
- ✅ `package.json` - مُحدث للـ dependencies

## روابط مفيدة:

- [Netlify Docs](https://docs.netlify.com/)
- [SvelteKit Static Adapter](https://kit.svelte.dev/docs/adapter-static)
- [Netlify CLI](https://cli.netlify.com/)

---

**ملاحظة:** تأكد من رفع جميع التغييرات إلى GitHub قبل النشر التلقائي! 
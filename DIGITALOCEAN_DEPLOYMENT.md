# دليل النشر على DigitalOcean App Platform 🌊

## المتطلبات الأساسية

- حساب DigitalOcean
- مستودع GitHub مُحدث
- الكود جاهز للإنتاج

## طريقة النشر

### الطريقة الأولى: من واجهة DigitalOcean (موصى بها)

#### 1. تسجيل الدخول إلى DigitalOcean

- اذهب إلى [cloud.digitalocean.com](https://cloud.digitalocean.com)
- سجل الدخول لحسابك

#### 2. إنشاء تطبيق جديد

1. **اختر "Apps" من القائمة الجانبية**
2. **اضغط "Create App"**
3. **اختر "GitHub" كمصدر**
4. **اختر المستودع:** `asmaylwfa016/moving6`
5. **اختر البرانش:** `master`

#### 3. إعدادات التطبيق

**في صفحة Configure your app:**

| الحقل | القيمة |
|-------|---------|
| **App Name** | `jeddah-moving-prices` |
| **Service Name** | `web` |
| **Source Directory** | `/` (الجذر) |
| **Build Command** | `npm run build` |
| **Run Command** | `npm start` |
| **Environment** | `Node.js` |
| **Plan** | `Basic ($5/month)` |

#### 4. متغيرات البيئة (Environment Variables)

**المتغيرات الإجبارية:**
```bash
NODE_ENV=production
PORT=8080  # DO يضعها تلقائياً
```

**المتغيرات الاختيارية:**
```bash
# إذا كنت تريد إضافة Google Analytics
VITE_GA_ID=your-google-analytics-id

# رقم الواتساب للتواصل
VITE_WHATSAPP_NUMBER=966501234567

# عنوان الموقع الأساسي (سيتم تحديده تلقائياً)
VITE_BASE_URL=https://your-app-name.ondigitalocean.app
```

#### 5. إعدادات الموارد

- **CPU & Memory:** Basic (0.5 vCPU, 1GB RAM)
- **Instance Count:** 1
- **HTTP Routes:** Enabled

#### 6. المراجعة والنشر

1. **راجع جميع الإعدادات**
2. **اضغط "Create Resources"**
3. **انتظر اكتمال البناء (5-10 دقائق)**

---

### الطريقة الثانية: باستخدام App Spec (متقدم)

استخدم ملف `.do/app.yaml` الموجود في المشروع:

```yaml
name: jeddah-moving-prices
services:
- name: web
  source_dir: /
  github:
    repo: asmaylwfa016/moving6
    branch: master
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  routes:
  - path: /
  health_check:
    http_path: /
  envs:
  - key: NODE_ENV
    value: production
  - key: PORT
    value: "8080"
```

---

### الطريقة الثالثة: باستخدام DigitalOcean CLI

```bash
# تثبيت doctl CLI
# Windows: choco install doctl
# Mac: brew install doctl

# تسجيل الدخول
doctl auth init

# نشر التطبيق
doctl apps create .do/app.yaml

# متابعة حالة النشر
doctl apps list
```

---

## إعدادات الدومين المخصص (اختياري)

### إضافة دومين خاص:

1. **في إعدادات التطبيق اذهب إلى "Settings"**
2. **اختر "Domains"**
3. **اضغط "Add Domain"**
4. **أدخل الدومين:** `your-domain.com`
5. **اتبع تعليمات DNS**

### إعدادات DNS:

```
Type: CNAME
Name: @
Value: your-app-name.ondigitalocean.app
TTL: 3600
```

---

## المراقبة والصيانة

### عرض Logs:

```bash
# عبر واجهة الويب
Apps > Your App > Runtime Logs

# عبر CLI
doctl apps logs your-app-id
```

### إعادة النشر:

- **تلقائي:** عند push جديد إلى GitHub
- **يدوي:** من لوحة التحكم أو CLI

### تحديث الإعدادات:

```bash
# تحديث App Spec
doctl apps update your-app-id --spec .do/app.yaml

# إعادة تشغيل
doctl apps restart your-app-id
```

---

## استكشاف الأخطاء

### مشاكل شائعة:

#### 1. خطأ في البناء:
```bash
# تحقق من Build Logs
- تأكد من صحة package.json
- تحقق من أن npm run build يعمل محلياً
```

#### 2. التطبيق لا يبدأ:
```bash
# تحقق من Runtime Logs
- تأكد من وجود npm start في scripts
- تحقق من أن PORT متغير صحيح
```

#### 3. 404 errors:
```bash
# تحقق من routing
- تأكد من أن SvelteKit يدعم client-side routing
- تحقق من إعدادات trailing slashes
```

---

## التكلفة المتوقعة

| الخطة | المواصفات | التكلفة الشهرية |
|-------|------------|------------------|
| **Basic** | 0.5 vCPU, 1GB RAM | $5 |
| **Professional** | 1 vCPU, 2GB RAM | $12 |
| **Pro** | 2 vCPU, 4GB RAM | $24 |

**ملاحظة:** Basic خطة كافية لمعظم المواقع الصغيرة والمتوسطة.

---

## الأمان والأداء

### تفعيل HTTPS:
- **تلقائي** لجميع التطبيقات
- **شهادة SSL مجانية** من Let's Encrypt

### تفعيل CDN:
- **متوفر تلقائياً** لجميع الملفات الثابتة
- **Cache عالمي** لتحسين الأداء

### النسخ الاحتياطي:
- **تلقائي** لـ App Spec وإعدادات التطبيق
- **مرتبط بـ Git** للكود

---

## الملفات المهمة (تم إنشاؤها):

- ✅ `.do/app.yaml` - إعدادات DigitalOcean
- ✅ `package.json` - scripts صحيحة
- ✅ `Procfile` - للتوافق مع منصات أخرى
- ✅ `build/` - مجلد البناء

---

## خطوات ما بعد النشر

### 1. تحديث DNS (إذا كان لديك دومين):
```
CNAME: @ -> your-app-name.ondigitalocean.app
```

### 2. إعداد Google Analytics (اختياري):
```bash
doctl apps update your-app-id --env VITE_GA_ID=your-ga-id
```

### 3. إعداد مراقبة الموقع:
- **Uptime monitoring** من DO
- **Performance insights** من لوحة التحكم

---

## روابط مفيدة:

- [DigitalOcean App Platform Docs](https://docs.digitalocean.com/products/app-platform/)
- [SvelteKit Deployment Guide](https://kit.svelte.dev/docs/adapters)
- [DO CLI Documentation](https://docs.digitalocean.com/reference/doctl/)

---

**🎉 مبروك! موقعك أصبح متاحاً على الإنترنت!** 
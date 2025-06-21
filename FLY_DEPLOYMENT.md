# دليل النشر على Fly.io 🚀

## المتطلبات الأساسية

- حساب Fly.io مجاني
- Fly CLI مثبت على الجهاز
- Docker مثبت (للبناء المحلي اختياري)
- Git مُكوّن ومُحدث

## خطوات النشر

### 1. تثبيت Fly CLI

```bash
# Windows (PowerShell)
iwr https://fly.io/install.ps1 -useb | iex

# macOS/Linux
curl -L https://fly.io/install.sh | sh

# أو باستخدام Homebrew (macOS)
brew install flyctl
```

### 2. تسجيل الدخول إلى Fly.io

```bash
# تسجيل الدخول
fly auth login

# التحقق من تسجيل الدخول
fly auth whoami
```

### 3. إنشاء تطبيق Fly.io

```bash
# إنشاء تطبيق جديد (سيسأل عن الاسم والمنطقة)
fly launch

# أو تحديد اسم مخصص
fly launch --name jeddah-moving-prices --region fra
```

**ملاحظة:** اختر `fra` (فرانكفورت) كمنطقة لأفضل أداء في الشرق الأوسط.

### 4. إعداد متغيرات البيئة (اختياري)

```bash
# إعداد الموقع الأساسي
fly secrets set VITE_BASE_URL=https://jeddah-moving-prices.fly.dev

# إعداد رقم الواتساب
fly secrets set VITE_WHATSAPP_NUMBER=966501234567

# إعداد Google Analytics (إذا كان لديك معرف)
fly secrets set VITE_GA_ID=your-ga-measurement-id

# عرض جميع المتغيرات المُعيّنة
fly secrets list
```

### 5. النشر

```bash
# النشر لأول مرة
fly deploy

# النشر مع إجبار البناء الجديد
fly deploy --build-only

# النشر مع مراقبة logs
fly deploy --verbose
```

### 6. فتح التطبيق ومراقبته

```bash
# فتح التطبيق في المتصفح
fly open

# عرض logs المباشرة
fly logs

# عرض حالة التطبيق
fly status

# عرض معلومات مفصلة
fly info
```

## استكشاف الأخطاء

### مشاكل شائعة وحلولها:

#### 1. **خطأ في البناء:**
```bash
# عرض logs البناء المفصلة
fly logs --app your-app-name

# إعادة بناء من الصفر
fly deploy --no-cache
```

#### 2. **مشكلة في الذاكرة:**
```bash
# زيادة الذاكرة المخصصة
fly scale memory 512

# عرض استخدام الموارد
fly status --all
```

#### 3. **مشكلة الاتصال:**
```bash
# التحقق من حالة الشبكة
fly status

# إعادة تشغيل التطبيق
fly restart
```

#### 4. **مشكلة في المنطقة:**
```bash
# تغيير المنطقة إلى فرانكفورت
fly regions set fra

# عرض المناطق المتاحة
fly platform regions
```

## تحسين الأداء

### إعدادات إضافية:

```bash
# تمكين auto-stop لتوفير التكلفة
fly scale count 1 --max-per-region 1

# تعيين CPU أعلى إذا لزم الأمر
fly scale vm shared-cpu-2x

# إعداد النطاق المخصص
fly certs create yourdomain.com
fly certs create www.yourdomain.com
```

## المراقبة والصيانة

```bash
# عرض الإحصائيات
fly status

# عرض استخدام الموارد
fly vm status

# إعادة تشغيل التطبيق
fly restart

# تحديث التطبيق
fly deploy

# إيقاف التطبيق مؤقتاً
fly suspend

# تشغيل التطبيق بعد الإيقاف
fly resume
```

## النسخ الاحتياطي والتراجع

```bash
# عرض تاريخ النشر
fly releases

# التراجع إلى إصدار سابق
fly rollback

# إنشاء نسخة احتياطية من البيانات
fly volumes list
```

## التكلفة والموارد

- **المستوى المجاني:** 3 shared-cpu-1x, 256MB RAM
- **التطبيق سيتوقف عند عدم الاستخدام** (auto-stop)
- **التشغيل يبدأ تلقائياً** عند الطلب الأول

## الملفات المطلوبة (تم إنشاؤها):

- ✅ `fly.toml` - إعدادات Fly.io
- ✅ `Dockerfile` - بناء الحاوية
- ✅ `.dockerignore` - استثناء الملفات غير المرغوبة
- ✅ `package.json` - إعدادات Node.js

## أوامر مفيدة سريعة:

```bash
# نشر سريع
fly deploy

# عرض logs
fly logs

# فتح التطبيق
fly open

# حالة التطبيق
fly status

# إعادة تشغيل
fly restart
```

## روابط مفيدة:

- [Fly.io Documentation](https://fly.io/docs/)
- [SvelteKit Deployment Guide](https://kit.svelte.dev/docs/adapters)
- [Docker Best Practices](https://docs.docker.com/develop/best-practices/)

---

**ملاحظة:** تأكد من أن Docker يعمل على جهازك قبل النشر!

## دعم إضافي:

إذا واجهت مشاكل:
1. تحقق من `fly logs`
2. راجع `fly status`
3. جرب `fly restart`
4. أعد النشر مع `fly deploy --no-cache` 
# دليل النشر على Heroku 🚀

## المتطلبات الأساسية

- حساب Heroku مجاني
- Heroku CLI مثبت على الجهاز
- Git مُكوّن ومُحدث

## خطوات النشر

### 1. تثبيت Heroku CLI

```bash
# Windows (باستخدام chocolatey)
choco install heroku-cli

# أو تحميل من الموقع الرسمي
# https://devcenter.heroku.com/articles/heroku-cli
```

### 2. تسجيل الدخول إلى Heroku

```bash
# تسجيل الدخول
heroku login

# التحقق من تسجيل الدخول
heroku auth:whoami
```

### 3. إنشاء تطبيق Heroku

```bash
# إنشاء تطبيق جديد (استبدل APP_NAME باسم فريد)
heroku create your-app-name

# أو إنشاء تطبيق في منطقة أوروبا للأداء الأفضل
heroku create your-app-name --region eu

# ربط مستودع موجود بتطبيق Heroku
heroku git:remote -a your-app-name
```

### 4. إعداد متغيرات البيئة (اختياري)

```bash
# إعداد الموقع الأساسي
heroku config:set VITE_BASE_URL=https://your-app-name.herokuapp.com

# إعداد رقم الواتساب
heroku config:set VITE_WHATSAPP_NUMBER=966501234567

# إعداد Google Analytics (إذا كان لديك معرف)
heroku config:set VITE_GA_ID=your-ga-measurement-id

# إعداد بيئة الإنتاج
heroku config:set NODE_ENV=production
```

### 5. النشر

```bash
# رفع الكود إلى Heroku
git add .
git commit -m "Deploy to Heroku"
git push heroku master

# أو إذا كنت تستخدم main branch
git push heroku main
```

### 6. فتح التطبيق

```bash
# فتح التطبيق في المتصفح
heroku open

# عرض logs للتحقق من حالة التطبيق
heroku logs --tail
```

## استكشاف الأخطاء

### مشاكل شائعة وحلولها:

1. **خطأ في البناء:**
```bash
# التحقق من logs البناء
heroku logs --tail

# إعادة بناء التطبيق
heroku restart
```

2. **مشكلة في حجم التطبيق:**
```bash
# التحقق من حجم slug
heroku apps:info

# تنظيف node_modules قبل النشر
rm -rf node_modules
npm install --production
```

3. **مشكلة في الدومين:**
```bash
# إضافة دومين مخصص
heroku domains:add www.yourdomain.com
heroku domains:add yourdomain.com
```

## تحسين الأداء

### إعدادات إضافية:

```bash
# تفعيل الضغط
heroku config:set NODE_OPTIONS="--max-old-space-size=512"

# تفعيل كاش الـ build
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_MODULES_CACHE=false
```

## المراقبة والصيانة

```bash
# عرض إحصائيات التطبيق
heroku ps

# عرض معلومات التطبيق
heroku apps:info

# إعادة تشغيل التطبيق
heroku restart

# تحديث التطبيق
git add .
git commit -m "Update app"
git push heroku master
```

## النسخ الاحتياطي

```bash
# إنشاء نسخة احتياطية من الكود
heroku releases

# التراجع إلى إصدار سابق
heroku rollback v123
```

## الملفات المطلوبة (تم إنشاؤها تلقائياً):

- ✅ `Procfile` - يحدد كيفية تشغيل التطبيق
- ✅ `package.json` - يحتوي على dependencies و scripts
- ✅ `app.json` - إعدادات Heroku
- ✅ `svelte.config.js` - مُحدث لاستخدام Node adapter

## روابط مفيدة:

- [Heroku Dev Center](https://devcenter.heroku.com/)
- [SvelteKit Deployment Guide](https://kit.svelte.dev/docs/adapters)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)

---

**ملاحظة:** تأكد من أن جميع التغييرات محفوظة في Git قبل النشر! 
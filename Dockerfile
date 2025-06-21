# استخدام Node.js 18 Alpine
FROM node:18-alpine AS builder

# تعيين مجلد العمل
WORKDIR /app

# نسخ ملفات package
COPY package*.json ./

# تثبيت جميع التبعيات (للبناء)
RUN npm ci

# نسخ باقي الملفات
COPY . .

# بناء التطبيق
RUN npm run build

# مرحلة الإنتاج
FROM node:18-alpine AS runtime

# تثبيت dumb-init للتعامل مع signals
RUN apk add --no-cache dumb-init

# إنشاء مستخدم غير root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# تعيين مجلد العمل
WORKDIR /app

# نسخ ملفات package
COPY --from=builder /app/package*.json ./

# تثبيت dependencies الإنتاج فقط
RUN npm ci --only=production && npm cache clean --force

# نسخ ملفات البناء
COPY --from=builder --chown=nextjs:nodejs /app/build ./build
COPY --from=builder --chown=nextjs:nodejs /app/static ./static

# تغيير المستخدم
USER nextjs

# تعرض المنفذ
EXPOSE 3000

# متغير البيئة للمنفذ
ENV PORT=3000
ENV NODE_ENV=production

# تشغيل التطبيق
CMD ["dumb-init", "node", "build"] 
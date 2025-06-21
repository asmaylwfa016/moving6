<script lang="ts">
  const pageTitle = 'خطط وأسعار خدمات نقل العفش | جدة يونيو 2025';
  const pageDescription =
    'قارن فئات الأسعار الاقتصادية والقياسية والمميزة والفاخرة لخدمات نقل الأثاث في جدة مع تفاصيل ما تشمل كل فئة ومتوسط التكاليف لشهر 6-2025.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords"
    content="اسعار نقل عفش جدة, فئات الخدمة الاقتصادية, خدمة نقل عفش قياسية, نقل عفش VIP, مقارنة اسعار نقل الأثاث" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-12">خطط الأسعار</h1>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <!-- Economy -->
      <article class="bg-white rounded-xl shadow p-6 flex flex-col">
        <img src="/images/jeddah_furniture_moving_specialists.jpg" alt="خدمة نقل اقتصادية" class="rounded-md mb-4">
        <h2 class="text-xl font-bold mb-2 text-green-700">اقتصادية</h2>
        <p class="mb-4 text-sm text-gray-600">أسعار من 500 – 1000 ر.س</p>
        <ul class="list-disc pr-5 space-y-2 flex-1">
          <li>شاحنة صغيرة</li>
          <li>عمالة محدودة</li>
          <li>لا يشمل تغليف احترافي</li>
        </ul>
        <a href="/calculator" class="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">احسب الآن</a>
      </article>

      <!-- Standard -->
      <article class="bg-white rounded-xl shadow p-6 flex flex-col">
        <img src="/images/furniture_transportation_services_jeddah_saudi.jpg" alt="خدمة نقل قياسية" class="rounded-md mb-4">
        <h2 class="text-xl font-bold mb-2 text-blue-700">قياسية</h2>
        <p class="mb-4 text-sm text-gray-600">أسعار من 1000 – 2000 ر.س</p>
        <ul class="list-disc pr-5 space-y-2 flex-1">
          <li>شاحنة متوسطة</li>
          <li>تغليف أساسي</li>
          <li>ضمان على الخدمة</li>
        </ul>
        <a href="/calculator" class="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">احسب الآن</a>
      </article>

      <!-- Premium -->
      <article class="bg-white rounded-xl shadow p-6 flex flex-col">
        <img src="/images/jeddah_furniture_movers_professional.jpg" alt="خدمة نقل مميزة" class="rounded-md mb-4">
        <h2 class="text-xl font-bold mb-2 text-purple-700">مميزة</h2>
        <p class="mb-4 text-sm text-gray-600">أسعار من 2000 – 3500 ر.س</p>
        <ul class="list-disc pr-5 space-y-2 flex-1">
          <li>شاحنة كبيرة مجهزة</li>
          <li>تغليف احترافي كامل</li>
          <li>تأمين ضد التلفيات</li>
        </ul>
        <a href="/calculator" class="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">احسب الآن</a>
      </article>

      <!-- VIP -->
      <article class="bg-white rounded-xl shadow p-6 flex flex-col">
        <img src="/images/furniture_removal_services_jeddah.jpg" alt="خدمة نقل فاخرة" class="rounded-md mb-4">
        <h2 class="text-xl font-bold mb-2 text-yellow-600">VIP فاخرة</h2>
        <p class="mb-4 text-sm text-gray-600">3500+ ر.س</p>
        <ul class="list-disc pr-5 space-y-2 flex-1">
          <li>فريق متخصص للأثاث الثمين</li>
          <li>تغليف مخصص</li>
          <li>خدمة عملاء 24/7</li>
        </ul>
        <a href="/calculator" class="mt-6 inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400">احسب الآن</a>
      </article>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
<script lang="ts">
  const pageTitle = 'أفضل شركات نقل العفش في جدة 2025 | مقارنة الأسعار والخدمات';
  const pageDescription =
    'استعرض قائمة أشهر شركات نقل الأثاث في جدة، قارن الأسعار والخدمات والتقييمات واختر الأنسب لاحتياجاتك لنقل العفش في يونيو 2025.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta
    name="keywords"
    content="شركات نقل عفش جدة, مقارنة شركات نقل الأثاث, تقييم شركات النقل, افضل شركة نقل عفش 2025" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-12">شركات نقل العفش الموصى بها</h1>

    <!-- Filter & Sorting Controls -->
    <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="flex items-center gap-3">
        <label class="font-medium">ترتيب حسب:</label>
        <select class="rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
          <option>التقييم الأعلى</option>
          <option>السعر الأقل</option>
          <option>الأكثر حجزاً</option>
        </select>
      </div>

      <div class="flex items-center gap-3">
        <label class="font-medium">فئة السعر:</label>
        <select class="rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
          <option>جميع الفئات</option>
          <option>اقتصادية</option>
          <option>قياسية</option>
          <option>مميزة</option>
          <option>VIP</option>
        </select>
      </div>
    </div>

    <!-- Companies Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200 text-center">
        <thead class="bg-green-600 text-white">
          <tr>
            <th class="px-4 py-3">الشركة</th>
            <th class="px-4 py-3">الفئة السعرية</th>
            <th class="px-4 py-3">متوسط السعر (ر.س)</th>
            <th class="px-4 py-3">التقييم ⭐</th>
            <th class="px-4 py-3">ضمانات</th>
            <th class="px-4 py-3">أطلب عرض سعر</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="/images/jeddah_moving_company_logo_1.png" alt="Company 1" class="w-10 h-10" />
              الروضة السريعة
            </td>
            <td class="px-4 py-3">اقتصادية</td>
            <td class="px-4 py-3">800</td>
            <td class="px-4 py-3">4.6</td>
            <td class="px-4 py-3">لا</td>
            <td class="px-4 py-3">
              <a href="/contact" class="text-green-700 underline">طلب</a>
            </td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="/images/jeddah_moving_company_logo_2.png" alt="Company 2" class="w-10 h-10" />
              الأمان لنقل العفش
            </td>
            <td class="px-4 py-3">مميزة</td>
            <td class="px-4 py-3">2 200</td>
            <td class="px-4 py-3">4.7</td>
            <td class="px-4 py-3">تأمين</td>
            <td class="px-4 py-3">
              <a href="/contact" class="text-green-700 underline">طلب</a>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="/images/jeddah_moving_company_logo_3.png" alt="Company 3" class="w-10 h-10" />
              جدة المثالي
            </td>
            <td class="px-4 py-3">قياسية</td>
            <td class="px-4 py-3">1 400</td>
            <td class="px-4 py-3">4.4</td>
            <td class="px-4 py-3">ضمان 30 يوم</td>
            <td class="px-4 py-3">
              <a href="/contact" class="text-green-700 underline">طلب</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
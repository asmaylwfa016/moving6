<script lang="ts">
  const districtName = 'حي المروة';
  const pageTitle = `أسعار نقل العفش في ${districtName} جدة | يونيو 2025`;
  const pageDescription =
    `كل ما تحتاجه معرفته عن أسعار نقل الأثاث في حي المروة بجدة. اكتشف متوسط التكاليف، العوامل المؤثرة، وأفضل الشركات الموصى بها في يونيو 2025.`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="نقل عفش حي المروة, اسعار نقل الاثاث حي المروة, شركات نقل في المروة جدة" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <!-- Hero -->
  <section class="relative h-72 md:h-96">
    <img
      src="/images/jeddah_storage_companies.jpg"
      alt="منظر عام لحي المروة"
      class="absolute inset-0 w-full h-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white space-y-4 px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold">أسعار نقل العفش في {districtName}</h1>
        <p class="max-w-2xl mx-auto text-lg">
          تحليل شامل لتكاليف النقل والعوامل الخاصة بالبنية التحتية في {districtName} لعام 2025.
        </p>
      </div>
    </div>
  </section>

  <!-- Pricing Factors -->
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-10">العوامل المؤثرة على السعر في المروة</h2>
    <div class="grid gap-8 md:grid-cols-3">
      <article class="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 class="font-semibold">القرب من المطار</h3>
        <p>يتميز الحي بقربه من مطار الملك عبد العزيز، مما يجعله نقطة انطلاق مثالية للنقل خارج جدة.</p>
      </article>
      <article class="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 class="font-semibold">الشوارع الواسعة</h3>
        <p>تتميز معظم شوارع الحي بالاتساع، مما يسهل حركة شاحنات النقل الكبيرة ويقلل من وقت العمل.</p>
      </article>
      <article class="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 class="font-semibold">المباني الحديثة</h3>
        <p>أغلب المباني في حي المروة حديثة ومزودة بمصاعد واسعة، مما يقلل من تكلفة نقل الأثاث.</p>
      </article>
    </div>
  </section>

  <!-- Average Costs Table -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">متوسط التكاليف - يونيو 2025</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200 text-center">
          <thead class="bg-green-600 text-white">
            <tr>
              <th class="px-4 py-3">نوع المسكن</th>
              <th class="px-4 py-3">السعر الأدنى (ر.س)</th>
              <th class="px-4 py-3">السعر الأعلى (ر.س)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3">شقة استوديو</td>
              <td class="px-4 py-3">450</td>
              <td class="px-4 py-3">800</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">شقة غرفتين</td>
              <td class="px-4 py-3">1,100</td>
              <td class="px-4 py-3">1,800</td>
            </tr>
            <tr>
              <td class="px-4 py-3">فيلا صغيرة</td>
              <td class="px-4 py-3">2,400</td>
              <td class="px-4 py-3">3,800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-green-600 text-white py-14">
    <div class="container mx-auto px-4 text-center space-y-6">
      <h2 class="text-2xl font-bold">هل تخطط للنقل في حي المروة؟</h2>
      <p>استخدم حاسبتنا الدقيقة للحصول على تقدير فوري للتكلفة.</p>
      <a
        href="/calculator"
        class="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
        اذهب إلى الحاسبة
      </a>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>

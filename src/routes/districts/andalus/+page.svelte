<script lang="ts">
  const districtName = 'حي الأندلس';
  const pageTitle = `أسعار نقل العفش في ${districtName} جدة | يونيو 2025`;
  const pageDescription =
    `دليلك الشامل لأسعار نقل الأثاث في حي الأندلس بجدة. اكتشف متوسط التكاليف، العوامل المؤثرة، وأفضل الشركات الموصى بها في يونيو 2025.`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="نقل عفش حي الأندلس, اسعار نقل الاثاث حي الأندلس, شركات نقل في الأندلس جدة" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <!-- Hero -->
  <section class="relative h-72 md:h-96">
    <img
      src="/images/jeddah_next_big_move.jpg"
      alt="منظر عام لحي الأندلس"
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
    <h2 class="text-3xl font-bold text-center mb-10">العوامل المؤثرة على السعر في الأندلس</h2>
    <div class="grid gap-8 md:grid-cols-3">
      <article class="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 class="font-semibold">حي تاريخي وراقي</h3>
        <p>يجمع حي الأندلس بين العراقة والرقي، مما يتطلب عناية خاصة في نقل الأثاث للحفاظ على الممتلكات التاريخية والحديثة.</p>
      </article>
      <article class="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 class="font-semibold">شوارع هادئة</h3>
        <p>تتميز شوارع الحي بالهدوء والتنظيم، مما يسهل عمليات النقل ويقلل من التحديات اللوجستية.</p>
      </article>
      <article class="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 class="font-semibold">قرب من البحر</h3>
        <p>يقع الحي بالقرب من الكورنيش، مما يضيف تحدي الرطوبة ويتطلب استخدام مواد تغليف خاصة لحماية الأثاث.</p>
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
              <td class="px-4 py-3">شقة فاخرة</td>
              <td class="px-4 py-3">2,200</td>
              <td class="px-4 py-3">3,800</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">فيلا</td>
              <td class="px-4 py-3">4,500</td>
              <td class="px-4 py-3">8,000</td>
            </tr>
            <tr>
              <td class="px-4 py-3">فيلا كبيرة</td>
              <td class="px-4 py-3">9,000</td>
              <td class="px-4 py-3">18,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-green-600 text-white py-14">
    <div class="container mx-auto px-4 text-center space-y-6">
      <h2 class="text-2xl font-bold">هل تخطط للنقل في حي الأندلس؟</h2>
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


<script lang="ts">
  const districtName = 'حي النزهة';
  const pageTitle = `أسعار نقل العفش في ${districtName} جدة | تكاليف 2025 ونصائح`;
  const pageDescription =
    'تعرّف على متوسط أسعار نقل الأثاث في حي النزهة، العوامل المؤثرة (المصاعد، أبعاد السلالم)، ونصائح لتقليل التكلفة لشهر يونيو 2025.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="تكلفة نقل عفش حي النزهة, اسعار نقل اثاث النزهة جدة, نقل عفش النزهة 2025" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <!-- Hero -->
  <section class="relative h-72 md:h-96">
    <img
      src="/images/furniture_transport_solutions_jeddah.jpg"
      alt="منظر عام لحي النزهة"
      class="absolute inset-0 w-full h-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white space-y-4 px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold">أسعار نقل العفش في {districtName}</h1>
        <p class="max-w-2xl mx-auto text-lg">
          دليلك لتكاليف النقل والعوامل الهندسية الخاصة بالمباني في {districtName} لعام 2025.
        </p>
      </div>
    </div>
  </section>

  <!-- Intro Section -->
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">نبذة عن حي النزهة</h2>
      <p class="text-lg text-gray-700">
        يُعد حي النزهة من الأحياء الحيوية في جدة، ويتميز بقربه من مطار الملك عبد العزيز الدولي وطريق المدينة المنورة، مما يجعله نقطة انطلاق مثالية للمسافرين. يضم الحي مزيجًا من المباني السكنية الحديثة والقديمة، بالإضافة إلى العديد من المحلات التجارية والخدمات.
      </p>
    </div>
  </section>

  <!-- Building Characteristics -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">خصائص المباني وتأثيرها</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <article class="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <img src="/images/jeddah_furniture_moving_specialists.jpg" alt="المصعد" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">المصاعد</h3>
          <p>معظم الأبراج الحديثة مزودة بمصاعد متوسطة الحجم (عمق 1.4م) مما يسهل النقل ويقلّل التكلفة.</p>
        </article>
        <article class="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <img src="/images/furniture_transportation_services_jeddah_saudi.jpg" alt="السلالم" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">السلالم الضيقة</h3>
          <p>المباني القديمة تمتلك سلالم بعرض أقل من 1م، وقد يستلزم ذلك تفكيك القطع الكبيرة.</p>
        </article>
        <article class="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <img src="/images/jeddah_furniture_movers_professional.jpg" alt="المواقف" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">المواقف</h3>
          <p>مواقف واسعة ومتعددة الطوابق تسمح بوقوف الشاحنات الكبيرة بسهولة.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Cost Comparison -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">مقارنة التكاليف حسب عدد الغرف</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-lg divide-y divide-gray-200 text-center">
          <thead class="bg-purple-700 text-white">
            <tr>
              <th class="px-4 py-3">عدد الغرف</th>
              <th class="px-4 py-3">متوسط السعر (ر.س)</th>
              <th class="px-4 py-3">مع مصعد</th>
              <th class="px-4 py-3">بدون مصعد</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3">1</td>
              <td class="px-4 py-3">1,050</td>
              <td class="px-4 py-3">950</td>
              <td class="px-4 py-3">1,150</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">2</td>
              <td class="px-4 py-3">1,700</td>
              <td class="px-4 py-3">1,550</td>
              <td class="px-4 py-3">1,900</td>
            </tr>
            <tr>
              <td class="px-4 py-3">3+</td>
              <td class="px-4 py-3">2,500</td>
              <td class="px-4 py-3">2,300</td>
              <td class="px-4 py-3">2,800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Tips -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">نصائح لتقليل التكلفة في {districtName}</h2>
      <ul class="list-disc pr-6 max-w-3xl mx-auto space-y-3 text-lg">
        <li>تأكد من قياس عرض المصعد لتحديد إمكانية إدخال القطع الكبيرة بدون تفكيك.</li>
        <li>احجز الشاحنة خارج أوقات الذروة لتتجنب ازدحام الشوارع الفرعية.</li>
        <li>تفاوض على خصم إذا كانت الشقة في الطابق الأرضي أو الأول.</li>
      </ul>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-purple-700 text-white py-14">
    <div class="container mx-auto px-4 text-center space-y-6">
      <h2 class="text-2xl font-bold">احسب تكلفة نقلك في {districtName} الآن</h2>
      <a
        href="/calculator"
        class="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-transform transform hover:scale-105">
        حاسبة التكلفة
      </a>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>


<script lang="ts">
  const districtName = 'حي الشاطئ';
  const pageTitle = `أسعار نقل العفش في ${districtName} جدة | تحديات وتكاليف 2025`;
  const pageDescription =
    'اعرف متوسط أسعار نقل الأثاث من وإلى حي الشاطئ، التحديات الخاصة بالموقع الساحلي، وأفضل النصائح لتقليل التكلفة في يونيو 2025.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="تكلفة نقل عفش حي الشاطئ, نقل اثاث جدة الشاطئ, اسعار نقل العفش الشاطئ 2025" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <!-- Hero with coastal image -->
  <section class="relative h-72 md:h-96">
    <img
      src="/images/jeddah_furniture_moving_specialists.jpg"
      alt="منظر عام لحي الشاطئ"
      class="absolute inset-0 w-full h-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white space-y-4 px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold">أسعار نقل العفش في {districtName}</h1>
        <p class="max-w-2xl mx-auto text-lg">
          تعرّف على التكاليف والتحديات الخاصة بالمناطق الساحلية مثل {districtName} لعام 2025.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Intro Section -->
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">نبذة عن حي الشاطئ</h2>
      <p class="text-lg text-gray-700">
        يُعد حي الشاطئ أحد أرقى وأجمل أحياء جدة، حيث يطل مباشرة على البحر الأحمر ويضم مجموعة من أفخم الفنادق والمطاعم والمراكز التجارية. يتميز الحي بأبراجه السكنية الشاهقة وفلله الفاخرة، مما يجعله وجهة مفضلة للنخبة.
      </p>
    </div>
  </section>

  <!-- Challenges -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">تحديات النقل في {districtName}</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <article class="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <img src="/images/jeddah_furniture_moving_specialists.jpg" alt="ازدحام الشوارع" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">ازدحام الكورنيش</h3>
          <p>الطرق الساحلية تشهد ازدحاماً شديداً في عطلة نهاية الأسبوع مما يبطئ عملية النقل.</p>
        </article>
        <article class="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <img src="/images/furniture_transportation_services_jeddah_saudi.jpg" alt="صعوبة المواقف" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">صعوبة المواقف</h3>
          <p>محدودية المواقف قرب الأبراج السكنية تتطلب أحياناً تصاريح خاصة أو رسوم إضافية للمواقف المدفوعة.</p>
        </article>
        <article class="bg-white p-6 rounded-lg shadow-lg space-y-2">
          <img src="/images/jeddah_furniture_movers_professional.jpg" alt="رطوبة الساحل" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">الرطوبة العالية</h3>
          <p>الرطوبة قد تؤثر على سلامة الأثاث الخشبي؛ التغليف المحكم ضروري لتجنب التلف.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Average Costs -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">متوسط التكاليف - يونيو 2025</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-lg divide-y divide-gray-200 text-center">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-4 py-3">نوع المسكن</th>
              <th class="px-4 py-3">السعر الأدنى (ر.س)</th>
              <th class="px-4 py-3">السعر الأعلى (ر.س)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3">استوديو</td>
              <td class="px-4 py-3">650</td>
              <td class="px-4 py-3">1,050</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">شقة 1 غرفة</td>
              <td class="px-4 py-3">950</td>
              <td class="px-4 py-3">1,600</td>
            </tr>
            <tr>
              <td class="px-4 py-3">شقة 2 غرفة</td>
              <td class="px-4 py-3">1,500</td>
              <td class="px-4 py-3">2,400</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">فيلا متوسطة</td>
              <td class="px-4 py-3">3,200</td>
              <td class="px-4 py-3">5,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Price Comparison Chart -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">مقارنة أسعار حي الشاطئ مع أحياء أخرى</h2>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="h-64 bg-gray-200 flex items-center justify-center rounded-md">
          <p class="text-gray-500">مخطط بياني للمقارنة (قيد الإنشاء)</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Tips -->
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-8">نصائح لتقليل التكلفة في {districtName}</h2>
    <ul class="list-disc pr-6 max-w-3xl mx-auto space-y-3 text-lg">
      <li>اختر موعد النقل في الصباح الباكر لتجنب ازدحام الكورنيش.</li>
      <li>تأكد من حجز مواقف الزوار مسبقاً أو الحصول على تصريح للوقوف أمام البناية.</li>
      <li>استخدم أغلفة مضادة للرطوبة لحماية الأثاث الخشبي والمعادن.</li>
    </ul>
  </section>

  <!-- CTA -->
  <section class="bg-blue-600 text-white py-14">
    <div class="container mx-auto px-4 text-center space-y-6">
      <h2 class="text-2xl font-bold">احسب تكلفة نقلك من وإلى {districtName} الآن</h2>
      <a
        href="/calculator"
        class="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-transform transform hover:scale-105">
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



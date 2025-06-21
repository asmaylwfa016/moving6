<script lang="ts">
  const districtName = 'حي الروضة';
  const pageTitle = `أسعار نقل العفش في ${districtName} جدة | تكاليف وعوامل 2025`;
  const pageDescription =
    'اكتشف متوسط تكلفة نقل الأثاث من وإلى حي الروضة، العوامل المؤثرة في السعر، الشركات النشطة، ونصائح لتوفير التكاليف لشهر يونيو 2025.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta
    name="keywords"
    content="اسعار نقل عفش حي الروضة, تكلفة نقل اثاث الروضة جدة, شركات نقل عفش الروضة" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <!-- Hero -->
  <section class="relative h-72 md:h-96">
    <img
      src="/images/furniture_transportation_jeddah_specialists_saudi.jpg"
      alt="منظر عام لحي الروضة"
      class="absolute inset-0 w-full h-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white space-y-4 px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold">أسعار نقل العفش في {districtName}</h1>
        <p class="max-w-2xl mx-auto text-lg">
          دليل شامل لتكاليف النقل والعوامل المؤثرة على الأسعار في {districtName} لعام 2025.
        </p>
      </div>
    </div>
  </section>

  <!-- Intro Section -->
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">نبذة عن حي الروضة</h2>
      <p class="text-lg text-gray-700">
        يعتبر حي الروضة من أرقى أحياء شمال جدة، ويتميز بموقعه الاستراتيجي بالقرب من شارع الأمير سلطان وشارع الكيال. يشتهر الحي بوجود العديد من المراكز التجارية الفاخرة، المطاعم، والمقاهي، مما يجعله وجهة سكنية مرغوبة للعائلات والأفراد الباحثين عن جودة الحياة.
      </p>
    </div>
  </section>

  <!-- Average Prices -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">متوسط الأسعار في حي الروضة</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-lg divide-y divide-gray-200 text-center">
          <thead class="bg-green-600 text-white">
            <tr>
              <th class="px-4 py-3">نوع المسكن</th>
              <th class="px-4 py-3">السعر الأدنى (ر.س)</th>
              <th class="px-4 py-3">السعر الأعلى (ر.س)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3">استوديو</td>
              <td class="px-4 py-3">600</td>
              <td class="px-4 py-3">950</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">شقة 1 غرفة</td>
              <td class="px-4 py-3">900</td>
              <td class="px-4 py-3">1,500</td>
            </tr>
            <tr>
              <td class="px-4 py-3">شقة 2 غرفة</td>
              <td class="px-4 py-3">1,400</td>
              <td class="px-4 py-3">2,200</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3">فيلا متوسطة</td>
              <td class="px-4 py-3">3,000</td>
              <td class="px-4 py-3">4,700</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Factors -->
  <section class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-8 text-center">العوامل المؤثرة في السعر</h2>
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
          <img src="/images/furniture_removal_services_jeddah.jpg" alt="المواقف" class="rounded-md mb-3 h-40 w-full object-cover" />
          <h3 class="font-semibold text-lg">المواقف</h3>
          <p>مواقف واسعة ومتعددة الطوابق تسمح بوقوف الشاحنات الكبيرة بسهولة.</p>
        </article>
      </div>
  </section>

  <!-- Price Comparison Chart -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">مقارنة أسعار حي الروضة مع أحياء أخرى</h2>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="h-64 bg-gray-200 flex items-center justify-center rounded-md">
          <p class="text-gray-500">مخطط بياني للمقارنة (قيد الإنشاء)</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Active Companies -->
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold mb-8 text-center">شركات النقل النشطة في الحي</h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white p-6 shadow-lg rounded-lg space-y-3 text-center">
        <h3 class="font-semibold text-xl text-green-700">شركة الروضة السريعة</h3>
        <p class="text-lg">تصنيف 4.6 ⭐ <span class="text-sm text-gray-600">(250 مراجعة)</span></p>
        <p>خدمة 24/7 وتغليف احترافي.</p>
      </div>
      <div class="bg-white p-6 shadow-lg rounded-lg space-y-3 text-center">
        <h3 class="font-semibold text-xl text-green-700">نقل جدة المثالي</h3>
        <p class="text-lg">تصنيف 4.4 ⭐ <span class="text-sm text-gray-600">(190 مراجعة)</span></p>
        <p>عروض خاصة للشقق المتوسطة.</p>
      </div>
      <div class="bg-white p-6 shadow-lg rounded-lg space-y-3 text-center">
        <h3 class="font-semibold text-xl text-green-700">الأمان لنقل العفش</h3>
        <p class="text-lg">تصنيف 4.7 ⭐ <span class="text-sm text-gray-600">(310 مراجعة)</span></p>
        <p>تأمين شامل وضمان على الخدمة.</p>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">تجارب سكان الحي</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <blockquote class="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div class="w-16 h-16 rounded-full mx-auto mb-4 bg-blue-200 flex items-center justify-center">
            <span class="text-blue-600 font-bold text-xl">ل</span>
          </div>
          <p class="text-center">"تم نقل أثاثي من الروضة إلى الشاطئ بسلاسة وبسعر معقول جداً!"</p>
          <footer class="text-sm text-center text-gray-500">— لمياء أحمد</footer>
        </blockquote>
        <blockquote class="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div class="w-16 h-16 rounded-full mx-auto mb-4 bg-green-200 flex items-center justify-center">
            <span class="text-green-600 font-bold text-xl">خ</span>
          </div>
          <p class="text-center">"الشركة وفرت لي تغليف احترافي وحافظت على كل القطع الثمينة."</p>
          <footer class="text-sm text-center text-gray-500">— خالد صالح</footer>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-green-600 text-white py-14">
    <div class="container mx-auto px-4 text-center space-y-6">
      <h2 class="text-2xl font-bold">احسب تكلفة نقلك من وإلى الروضة الآن</h2>
      <a
        href="/calculator"
        class="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-transform transform hover:scale-105">
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

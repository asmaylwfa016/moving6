<script lang="ts">
  const pageTitle = 'خدمة النقل المميزة في جدة | جودة عالية وراحة بال';
  const pageDescription = 'كل ما تريد معرفته عن خدمة نقل العفش المميزة في جدة. تغليف احترافي، ضمان شامل، وفريق عمل متخصص لضمان نقل آمن ومريح لأثاثك.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="نقل عفش مميز جدة, خدمة نقل VIP, تغليف احترافي, نقل اثاث مع ضمان" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center mb-6 text-purple-700">خدمة النقل المميزة</h1>
      <p class="text-lg text-center text-gray-600 mb-12">
        للعملاء الذين يبحثون عن راحة البال الكاملة وأعلى مستويات الجودة في خدمة نقل الأثاث.
      </p>

      <div class="bg-white p-8 rounded-lg shadow-lg space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">ماذا تشمل الخدمة؟</h2>
          <ul class="list-disc pr-5 space-y-2 text-gray-700">
            <li>فريق عمل كبير ومدرب باحترافية، مع مشرف متخصص.</li>
            <li>خدمات فك وتركيب جميع أنواع الأثاث، بما في ذلك القطع المعقدة.</li>
            <li>تغليف احترافي متعدد الطبقات لجميع القطع باستخدام أفضل المواد.</li>
            <li>تأمين شامل يغطي جميع الأضرار المحتملة أثناء النقل.</li>
            <li>سيارات نقل حديثة ومجهزة بالكامل.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">متوسط الأسعار</h2>
          <p class="text-3xl font-bold text-purple-600">2,000 - 3,500 ريال سعودي</p>
          <p class="text-sm text-gray-500 mt-2">السعر يعكس الجودة العالية والضمانات الشاملة المقدمة.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-xl font-semibold mb-3 text-green-800">المميزات</h3>
            <ul class="list-disc pr-5 space-y-2 text-gray-700">
              <li>راحة بال تامة، حيث يتولى الفريق كل شيء.</li>
              <li>أعلى مستوى من الحماية للأثاث.</li>
              <li>ضمان وتأمين شامل يغطي أي طارئ.</li>
              <li>مثالية لنقل الفلل والأثاث الثمين.</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3 text-red-700">العيوب</h3>
            <ul class="list-disc pr-5 space-y-2 text-gray-700">
              <li>تكلفة أعلى بشكل ملحوظ من الفئات الأخرى.</li>
              <li>قد تستغرق وقتاً أطول بسبب دقة العمل.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">لمن تناسب هذه الفئة؟</h2>
          <p class="text-gray-700">
            هذه الفئة مصممة لأصحاب الفلل، أو من يمتلكون أثاثًا ثمينًا أو قطعًا فنية. إذا كنت ترغب في تجربة نقل خالية من أي قلق وتضمن سلامة ممتلكاتك بشكل كامل، فهذه هي فئتك.
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="/companies" class="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
          عرض الشركات المميزة
        </a>
      </div>
    </div>
  </section>
</main>
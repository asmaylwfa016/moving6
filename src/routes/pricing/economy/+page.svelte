<script lang="ts">
  const pageTitle = 'خدمة النقل الاقتصادي في جدة | أسعار وتفاصيل';
  const pageDescription = 'تعرف على تفاصيل خدمة نقل العفش الاقتصادية في جدة، ما تشمله من خدمات، متوسط الأسعار، ومميزاتها وعيوبها. مناسبة للميزانيات المحدودة.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="نقل عفش اقتصادي جدة, ارخص نقل عفش, خدمة نقل رخيصة, اسعار نقل اقتصادية" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center mb-6 text-green-700">خدمة النقل الاقتصادي</h1>
      <p class="text-lg text-center text-gray-600 mb-12">
        الحل الأمثل لأصحاب الميزانيات المحدودة والذين يحتاجون إلى خدمة نقل أساسية وفعالة.
      </p>

      <div class="bg-white p-8 rounded-lg shadow-lg space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">ماذا تشمل الخدمة؟</h2>
          <ul class="list-disc pr-5 space-y-2 text-gray-700">
            <li>سيارة نقل (دينا) بحجم مناسب.</li>
            <li>فريق عمل أساسي مكون من 2-3 عمال.</li>
            <li>عملية النقل والتحميل والتنزيل.</li>
            <li>لا تشمل عادةً خدمات التغليف أو الفك والتركيب.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">متوسط الأسعار</h2>
          <p class="text-3xl font-bold text-green-600">500 - 1,000 ريال سعودي</p>
          <p class="text-sm text-gray-500 mt-2">قد يختلف السعر بناءً على حجم الأثاث والمسافة.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-xl font-semibold mb-3 text-green-800">المميزات</h3>
            <ul class="list-disc pr-5 space-y-2 text-gray-700">
              <li>تكلفة منخفضة جداً.</li>
              <li>مناسبة لنقل القطع القليلة أو الشقق الصغيرة.</li>
              <li>سرعة في التنفيذ للمهام البسيطة.</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3 text-red-700">العيوب</h3>
            <ul class="list-disc pr-5 space-y-2 text-gray-700">
              <li>لا يوجد ضمان على الأثاث.</li>
              <li>جودة الخدمة قد تكون متغيرة.</li>
              <li>قد تضطر للقيام بالتغليف بنفسك.</li>
              <li>غير مناسبة للأثاث الثمين أو القابل للكسر.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">لمن تناسب هذه الفئة؟</h2>
          <p class="text-gray-700">
            هذه الفئة مثالية للطلاب، العزاب، أو أي شخص ينتقل من سكن صغير بأثاث محدود لا يحتوي على قطع ثمينة أو معقدة. إذا كانت ميزانيتك هي الأولوية القصوى، فهذا هو خيارك.
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="/companies" class="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
          عرض الشركات الاقتصادية
        </a>
      </div>
    </div>
  </section>
</main>
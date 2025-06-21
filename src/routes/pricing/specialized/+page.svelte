<script lang="ts">
  const pageTitle = 'خدمات النقل المتخصصة في جدة | مكاتب، قطع فنية، وشحن دولي';
  const pageDescription = 'تعرف على خدمات نقل العفش المتخصصة في جدة، بما في ذلك نقل المكاتب، القطع الفنية، الأثاث ذي الأحجام الخاصة، والنقل الدولي.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="نقل مكاتب جدة, نقل قطع فنية, شحن دولي للاثاث, نقل اثاث خاص" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center mb-6 text-gray-800">خدمات النقل المتخصصة</h1>
      <p class="text-lg text-center text-gray-600 mb-12">
        حلول مصممة خصيصًا لتلبية احتياجات النقل غير التقليدية للشركات والأفراد.
      </p>

      <div class="space-y-10">
        <!-- Office Moving -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">نقل المكاتب والشركات</h2>
          <p class="mb-4 text-gray-700">
            نقل المكاتب يتطلب تخطيطًا دقيقًا لتقليل وقت التوقف عن العمل. تشمل خدماتنا فك وتركيب الأثاث المكتبي، نقل المعدات الإلكترونية بأمان، وتأمين المستندات الهامة.
          </p>
          <ul class="list-disc pr-5 space-y-2">
            <li>تخطيط زمني مفصل لعملية النقل.</li>
            <li>تغليف خاص للأجهزة الإلكترونية والخوادم.</li>
            <li>ترقيم وتنظيم الأرشيف والمستندات.</li>
          </ul>
          <p class="mt-4 font-semibold">التسعير: يعتمد على حجم المكتب وعدد الموظفين.</p>
        </div>

        <!-- Art & Antiques -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">نقل القطع الفنية والأثرية</h2>
          <p class="mb-4 text-gray-700">
            التعامل مع القطع الفنية والأثرية يتطلب خبرة فائقة. نستخدم مواد تغليف خاصة وتقنيات رفع آمنة لضمان وصول مقتنياتك الثمينة بدون أي خدش.
          </p>
          <ul class="list-disc pr-5 space-y-2">
            <li>صناديق خشبية مبطنة ومصممة خصيصًا.</li>
            <li>تحكم في درجة الحرارة والرطوبة.</li>
            <li>فريق متخصص في التعامل مع التحف.</li>
          </ul>
          <p class="mt-4 font-semibold">التسعير: يتم بالقطعة بعد المعاينة والتقييم.</p>
        </div>

        <!-- Special Sizes -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">الأثاث ذو الأحجام الخاصة</h2>
          <p class="mb-4 text-gray-700">
            هل لديك بيانو، خزانة كبيرة، أو قطعة أثاث لا تمر عبر الأبواب؟ نوفر حلولاً مبتكرة مثل استخدام الرافعات الخارجية والفك والتركيب المعقد.
          </p>
          <ul class="list-disc pr-5 space-y-2">
            <li>استخدام ونش رفع الأثاث للطوابق العليا.</li>
            <li>نجارون متخصصون لفك وتركيب القطع المعقدة.</li>
            <li>تخطيط هندسي لعملية الإدخال والإخراج.</li>
          </ul>
          <p class="mt-4 font-semibold">التسعير: متغير ويعتمد على مدى تعقيد المهمة.</p>
        </div>

        <!-- International Moving -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">النقل الدولي والشحن</h2>
          <p class="mb-4 text-gray-700">
            نقدم خدمات شحن متكاملة من جدة إلى جميع أنحاء العالم، معจัดการ جميع الإجراءات الجمركية والتصاريح اللازمة لضمان وصول أثاثك بأمان.
          </p>
          <ul class="list-disc pr-5 space-y-2">
            <li>شحن بحري وجوي.</li>
            <li>تخليص جمركي متكامل.</li>
            <li>تغليف مخصص للشحن الطويل.</li>
          </ul>
          <p class="mt-4 font-semibold">التسعير: يعتمد على الوجهة، الوزن، ونوع الشحن.</p>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="/contact" class="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors">
          اطلب عرض سعر لخدمة متخصصة
        </a>
      </div>
    </div>
  </section>
</main>
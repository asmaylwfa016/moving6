<script lang="ts">
  const pageTitle = 'خدمة النقل القياسية في جدة | توازن بين السعر والجودة';
  const pageDescription = 'اكتشف تفاصيل خدمة نقل العفش القياسية في جدة. الخيار الأكثر شيوعًا الذي يوازن بين التكلفة المعقولة والخدمات الأساسية مثل التغليف والضمان.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="نقل عفش قياسي جدة, خدمة نقل مع تغليف, اسعار نقل متوسطة, شركات نقل موثوقة" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 font-sans">
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center mb-6 text-blue-700">خدمة النقل القياسية</h1>
      <p class="text-lg text-center text-gray-600 mb-12">
        الخيار الأكثر شعبية للعائلات، حيث يقدم توازنًا مثاليًا بين التكلفة المعقولة وجودة الخدمة.
      </p>

      <div class="bg-white p-8 rounded-lg shadow-lg space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">ماذا تشمل الخدمة؟</h2>
          <ul class="list-disc pr-5 space-y-2 text-gray-700">
            <li>سيارة نقل مجهزة وفريق عمل متكامل (3-5 عمال).</li>
            <li>خدمات الفك والتركيب للأثاث الأساسي (غرف نوم، ستائر).</li>
            <li>تغليف أساسي للمواد القابلة للكسر والأجهزة.</li>
            <li>ضمان محدود ضد الخدوش والأضرار البسيطة.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">متوسط الأسعار</h2>
          <p class="text-3xl font-bold text-blue-600">1,000 - 2,000 ريال سعودي</p>
          <p class="text-sm text-gray-500 mt-2">يعتمد السعر على عدد الغرف والخدمات الإضافية المطلوبة.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-xl font-semibold mb-3 text-green-800">المميزات</h3>
            <ul class="list-disc pr-5 space-y-2 text-gray-700">
              <li>قيمة ممتازة مقابل السعر.</li>
              <li>تشمل الخدمات الأساسية التي تحتاجها معظم الأسر.</li>
              <li>توفر ضمانًا محدودًا يمنح راحة البال.</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3 text-red-700">العيوب</h3>
            <ul class="list-disc pr-5 space-y-2 text-gray-700">
              <li>التغليف قد لا يكون احترافيًا 100%.</li>
              <li>الضمان لا يغطي كل أنواع الأضرار.</li>
              <li>قد تكون هناك تكاليف إضافية للخدمات غير المشمولة.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-4">لمن تناسب هذه الفئة؟</h2>
          <p class="text-gray-700">
            هذه الفئة هي الخيار الأمثل لمعظم العائلات التي تنتقل بين الشقق. إذا كنت تبحث عن خدمة موثوقة بسعر معقول وتغطي معظم احتياجاتك، فهذه هي الفئة المناسبة لك.
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="/companies" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
          عرض الشركات القياسية
        </a>
      </div>
    </div>
  </section>
</main>
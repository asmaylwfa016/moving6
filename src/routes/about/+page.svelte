<script lang="ts">
  const pageTitle = 'من نحن | منصة مقارنة أسعار نقل العفش في جدة';
  const pageDescription =
    'تعرّف على رسالتنا ورؤيتنا كمصدر مستقل يوفّر معلومات دقيقة ومحايدة حول تكلفة نقل الأثاث في جدة لعام 2025.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
  <meta name="keywords"
    content="منصة نقل عفش جدة, من نحن, مقارنة أسعار النقل, خدمة محايدة, توفير تكاليف النقل" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-10">من نحن</h1>

    <div class="bg-white p-8 rounded-xl shadow-md grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-6 leading-relaxed text-lg">
        <p>
          نعمل كمنصة محايدة مستقلة تهدف إلى منح سكان جدة رؤية واضحة حول
          <strong class="text-green-700">أسعار نقل العفش والتكاليف الحقيقية</strong>
          استناداً إلى بيانات دقيقة وحديثة.
        </p>
        <p>
          مهمتنا هي تمكينك من اتخاذ قرارات مستنيرة عند اختيار شركة نقل العفش، مما يضمن لك الحصول على أفضل قيمة مقابل أموالك.
        </p>
      </div>
      <div>
        <img src="/images/jeddah_moving_company_1.jpg" alt="فريق نقل عفش محترف في جدة" class="rounded-lg shadow-lg">
      </div>

      <h2 class="text-2xl font-bold mt-8 mb-3">رسالتنا</h2>
      <p>
        تزويد العملاء بالمعلومات والخيارات الكافية لاتخاذ
        <span class="font-semibold">قرار مبني على المعرفة</span>
        عند اختيار شركة نقل العفش الأنسب من حيث الجودة والسعر.
      </p>

      <h2 class="text-2xl font-bold mt-8 mb-3">رؤيتنا</h2>
      <p>
        أن نصبح الوجهة الأولى في المملكة العربية السعودية
        لكل من يبحث عن
        <em>شفافية الأسعار، أدوات تقدير دقيقة، ومقارنات موضوعية</em> في قطاع خدمات نقل الأثاث.
      </p>

      <h2 class="text-2xl font-bold mt-8 mb-3">قيمنا الأساسية</h2>
      <ul class="list-disc pr-6 space-y-2">
        <li><strong>الحياد التام:</strong> لا ننحاز لأي شركة، بل نعرض البيانات كما هي.</li>
        <li><strong>الدقة:</strong> نحدّث الأسعار والبيانات بشكل منتظم.</li>
        <li><strong>الشفافية:</strong> نشرح العوامل المؤثرة في التكلفة ونكشف التكاليف الخفية.</li>
        <li><strong>التوفير:</strong> نوجّه المستخدمين إلى أفضل الطرق لتقليل تكاليفهم.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-3">لماذا أنشأنا هذه المنصة؟</h2>
      <p>
        كشف الدراسات أن تفاوت الأسعار لخدمة نقل عفش في جدة يمكن أن يصل إلى
        <span class="font-semibold text-green-700">40٪</span>
        لنفس الخدمة! لذا أردنا إتاحة أداة تساعدك على
        <strong>مقارنة الأسعار بوضوح</strong> واتخاذ قرار يُجنّبك الدفع الزائد.
      </p>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
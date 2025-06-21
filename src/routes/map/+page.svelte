<script lang="ts">
  const pageTitle = 'خريطة أسعار نقل العفش التفاعلية في جدة | 2025';
  const pageDescription = 'اكتشف متوسط أسعار نقل الأثاث في مختلف أحياء جدة عبر خريطتنا التفاعلية. قارن التكاليف وتعرّف على العوامل المؤثرة في كل منطقة.';

  // Dummy data for price levels. In a real app, this would come from a database.
  const districtPriceLevels = {
    'الروضة': 'high', 'الشاطئ': 'high', 'الحمراء': 'high', 'الأندلس': 'high', 'الخالدية': 'high',
    'النعيم': 'medium', 'السلامة': 'medium', 'المروة': 'medium', 'الزهراء': 'medium', 'الفيصلية': 'medium',
    'الصفا': 'low', 'البوادي': 'low', 'الربوة': 'low', 'النزهة': 'low', 'السامر': 'low',
    'البلد': 'low', 'الكندرة': 'low', 'الهنداوية': 'low', 'البغدادية الغربية': 'low', 'البغدادية الشرقية': 'low',
    'قويزة': 'low', 'الجامعة': 'low', 'الروابي': 'low', 'المرجان': 'high', 'أبحر الشمالية': 'high', 'الأمير فواز': 'medium'
  };

  const colorMap = {
    high: 'fill-red-500',
    medium: 'fill-yellow-400',
    low: 'fill-green-500'
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="خريطة اسعار نقل العفش, اسعار النقل في احياء جدة, مقارنة اسعار النقل جدة" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-100 font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-4">خريطة أسعار النقل في جدة</h1>
    <p class="text-lg text-center text-gray-600 mb-12">
      مرر الماوس فوق الأحياء لاستكشاف متوسط مستوى الأسعار.
    </p>

    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div class="text-center font-semibold mb-4">
        <!-- Placeholder for an actual interactive SVG map -->
        <div class="w-full h-96 bg-gray-200 flex items-center justify-center rounded-md">
          <p class="text-gray-500">خريطة جدة التفاعلية (قيد الإنشاء)</p>
        </div>
      </div>
      <div class="flex justify-center gap-6 mt-4">
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-green-500"></span>
          <span>منخفض</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-yellow-400"></span>
          <span>متوسط</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-red-500"></span>
          <span>مرتفع</span>
        </div>
      </div>
    </div>
  </section>
</main>
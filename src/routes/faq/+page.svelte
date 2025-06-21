<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import type { MetaData } from '$lib/seo/meta.js';

  const pageTitle = 'الأسئلة الشائعة حول نقل العفش في جدة | إجابات شاملة لجميع استفساراتك';
  const pageDescription = 'إجابات شاملة وموثوقة لأهم الأسئلة حول نقل العفش في جدة. كل ما تحتاج معرفته عن الأسعار، الخدمات، والنصائح من خبراء النقل.';

  const meta: MetaData = {
    title: pageTitle,
    description: pageDescription,
    keywords: 'أسئلة نقل العفش, استفسارات نقل الأثاث, نصائح نقل العفش جدة, خدمات النقل',
    type: 'website',
    url: 'https://jeddah-moving.com/faq'
  };

  const breadcrumbs = [
    { name: 'الرئيسية', url: 'https://jeddah-moving.com' },
    { name: 'الأسئلة الشائعة', url: 'https://jeddah-moving.com/faq' }
  ];

  const faqs = [
    {
      question: 'كم تكلفة نقل العفش في جدة؟',
      answer: `
        <p>تختلف تكلفة نقل العفش في جدة حسب عدة عوامل:</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>حجم المنزل:</strong> من 800-5000 ريال للشقق من غرفة إلى 4 غرف</li>
          <li><strong>المسافة:</strong> داخل نفس الحي أو بين أحياء مختلفة</li>
          <li><strong>نوع الخدمة:</strong> اقتصادية، قياسية، مميزة، أو VIP</li>
          <li><strong>الخدمات الإضافية:</strong> التغليف، فك وتركيب الأثاث، التأمين</li>
        </ul>
        <p class="mt-3">استخدم <a href="/calculator" class="text-green-600 font-semibold">حاسبة التكلفة</a> للحصول على تقدير دقيق.</p>
      `
    },
    {
      question: 'ما هي أفضل أوقات نقل العفش في جدة؟',
      answer: `
        <p>أفضل أوقات نقل العفش في جدة:</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>الأشهر:</strong> سبتمبر إلى نوفمبر، ومارس إلى مايو</li>
          <li><strong>تجنب:</strong> يوليو وأغسطس (حر شديد)، وموسم الحج</li>
          <li><strong>أيام الأسبوع:</strong> الثلاثاء إلى الخميس أرخص من عطلة نهاية الأسبوع</li>
          <li><strong>التوقيت:</strong> صباحاً (6-10 ص) أو مساءً (5-8 م)</li>
        </ul>
      `
    },
    {
      question: 'كيف أختار أفضل شركة نقل عفش في جدة؟',
      answer: `
        <p>معايير اختيار شركة نقل العفش الموثوقة:</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>التراخيص:</strong> تأكد من وجود ترخيص تجاري ساري</li>
          <li><strong>التأمين:</strong> تغطية شاملة ضد الأضرار</li>
          <li><strong>التقييمات:</strong> آراء العملاء السابقين</li>
          <li><strong>الخبرة:</strong> سنوات العمل في المجال</li>
          <li><strong>الأسعار:</strong> مقارنة العروض من عدة شركات</li>
          <li><strong>الشفافية:</strong> وضوح في التسعير وبنود العقد</li>
        </ul>
        <p class="mt-3">قارن بين الشركات في <a href="/companies" class="text-green-600 font-semibold">دليل الشركات</a>.</p>
      `
    },
    {
      question: 'هل يشمل السعر التغليف وفك وتركيب الأثاث؟',
      answer: `
        <p>يختلف الأمر حسب نوع الخدمة المختارة:</p>
        <div class="space-y-3 mt-3">
          <div class="bg-yellow-50 p-3 rounded border border-yellow-200">
            <strong class="text-yellow-800">الخدمة الاقتصادية:</strong>
            <p class="text-sm mt-1">النقل فقط - بدون تغليف أو فك وتركيب</p>
          </div>
          <div class="bg-blue-50 p-3 rounded border border-blue-200">
            <strong class="text-blue-800">الخدمة القياسية:</strong>
            <p class="text-sm mt-1">تشمل التغليف الأساسي وفك وتركيب الأثاث البسيط</p>
          </div>
          <div class="bg-green-50 p-3 rounded border border-green-200">
            <strong class="text-green-800">الخدمة المميزة والVIP:</strong>
            <p class="text-sm mt-1">تشمل كل شيء: تغليف احترافي، فك وتركيب كامل، تأمين شامل</p>
          </div>
        </div>
      `
    },
    {
      question: 'كم يستغرق نقل العفش في جدة؟',
      answer: `
        <p>مدة نقل العفش تعتمد على عدة عوامل:</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>غرفة واحدة:</strong> 2-4 ساعات</li>
          <li><strong>شقة غرفتين:</strong> 4-6 ساعات</li>
          <li><strong>شقة 3 غرف:</strong> 6-8 ساعات</li>
          <li><strong>فيلا كبيرة:</strong> يوم كامل أو أكثر</li>
        </ul>
        <p class="mt-3"><strong>عوامل إضافية:</strong> المسافة، المصعد، درج، صعوبة الوصول</p>
      `
    },
    {
      question: 'ماذا أفعل إذا تضرر أثاثي أثناء النقل؟',
      answer: `
        <p>في حالة تضرر الأثاث اتبع هذه الخطوات:</p>
        <ol class="list-decimal list-inside mt-2 space-y-2">
          <li><strong>التوثيق الفوري:</strong> التقط صور واضحة للضرر</li>
          <li><strong>الإبلاغ:</strong> أبلغ الشركة فوراً قبل مغادرة الفريق</li>
          <li><strong>التقرير:</strong> املأ تقرير الضرر مع مندوب الشركة</li>
          <li><strong>المطالبة:</strong> قدم مطالبة التأمين مع الوثائق</li>
          <li><strong>المتابعة:</strong> تابع مع الشركة حتى الحصول على التعويض</li>
        </ol>
        <p class="mt-3 text-sm text-gray-600">لهذا من المهم اختيار شركة مؤمنة وموثوقة.</p>
      `
    },
    {
      question: 'هل يمكنني نقل الأشياء الثمينة مع شركة النقل؟',
      answer: `
        <p>بالنسبة للأشياء الثمينة:</p>
        <div class="space-y-3 mt-3">
          <div class="bg-green-50 p-3 rounded border border-green-200">
            <strong class="text-green-800">يُنصح بنقلها:</strong>
            <ul class="list-disc list-inside text-sm mt-1">
              <li>الأثاث الثمين والتحف</li>
              <li>الأجهزة الإلكترونية الكبيرة</li>
              <li>اللوحات والمرايا الكبيرة</li>
            </ul>
          </div>
          <div class="bg-red-50 p-3 rounded border border-red-200">
            <strong class="text-red-800">احتفظ بها معك:</strong>
            <ul class="list-disc list-inside text-sm mt-1">
              <li>المجوهرات والذهب</li>
              <li>الوثائق المهمة</li>
              <li>الأموال النقدية</li>
              <li>الأدوية الحساسة</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      question: 'كيف أحضر للنقل لضمان سير العملية بسلاسة؟',
      answer: `
        <p>نصائح للتحضير الأمثل:</p>
        <div class="space-y-2 mt-3">
          <h4 class="font-semibold">قبل أسبوعين:</h4>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>احجز شركة النقل</li>
            <li>تخلص من الأشياء غير المرغوب بها</li>
            <li>اطلب الكراتين وأدوات التغليف</li>
          </ul>
          
          <h4 class="font-semibold mt-4">قبل أسبوع:</h4>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>ابدأ تعبئة الأشياء غير الأساسية</li>
            <li>أبلغ الجيران عن موعد النقل</li>
            <li>احجز المصعد إن أمكن</li>
          </ul>
          
          <h4 class="font-semibold mt-4">يوم النقل:</h4>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>كن موجوداً طوال عملية النقل</li>
            <li>تحقق من جرد الأثاث</li>
            <li>لا تدفع كامل المبلغ قبل انتهاء النقل</li>
          </ul>
        </div>
      `
    }
  ];
</script>

<SEO {meta} {breadcrumbs} {faqs} />

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <!-- Header Section -->
  <section class="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl font-extrabold mb-4">الأسئلة الشائعة</h1>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        إجابات شاملة وموثوقة لأهم أسئلتك حول نقل العفش في جدة
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/calculator" 
          class="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          احسب تكلفة النقل
        </a>
        <a 
          href="/companies" 
          class="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
        >
          قارن الشركات
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ Component -->
  <FAQ {faqs} />

  <!-- Additional Help Section -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">
          مصادر إضافية مفيدة
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="text-green-600 mb-4">
              <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">نصائح الخبراء</h3>
            <p class="text-gray-600 mb-4">
              اكتشف أحدث النصائح والأدلة من خبراء نقل العفش
            </p>
            <a href="/blog" class="text-green-600 font-semibold hover:text-green-700">
              قراءة المقالات ←
            </a>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="text-green-600 mb-4">
              <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">أسعار الأحياء</h3>
            <p class="text-gray-600 mb-4">
              اكتشف أسعار النقل في جميع أحياء جدة
            </p>
            <a href="/districts" class="text-green-600 font-semibold hover:text-green-700">
              تصفح الأحياء ←
            </a>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="text-green-600 mb-4">
              <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">تواصل معنا</h3>
            <p class="text-gray-600 mb-4">
              احصل على استشارة مجانية من خبراء النقل
            </p>
            <a href="/contact" class="text-green-600 font-semibold hover:text-green-700">
              اتصل بنا ←
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main> 
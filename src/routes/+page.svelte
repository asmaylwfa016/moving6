<script lang="ts">
  import { onMount } from 'svelte';
  import { posts } from './blog/_posts';

  const pageTitle = 'أسعار نقل العفش في جدة 2025 | حاسبة التكلفة الدقيقة';
  const pageDescription =
    'احسب تكلفة نقل أثاثك في جدة بدقة مع حاسبتنا المتطورة، وتعرّف على أحدث تحديثات الأسعار، العروض، والعوامل المؤثرة في التسعير لشهر يونيو 2025.';

  // Get latest blog posts
  const latestPosts = posts.slice(0, 6);

  // FAQ data
  const faqs = [
    {
      question: 'كم تكلفة نقل العفش في جدة؟',
      answer: 'تتراوح تكلفة نقل العفش في جدة من 500 إلى 3500 ريال سعودي حسب حجم العفش والمسافة والخدمات المطلوبة. استخدم حاسبتنا للحصول على تقدير دقيق.'
    },
    {
      question: 'هل تشمل الأسعار التغليف والتأمين؟',
      answer: 'تختلف الخدمات المشمولة حسب الباقة المختارة. الباقة الاقتصادية تشمل النقل الأساسي، بينما الباقات المتقدمة تشمل التغليف والتأمين والتركيب.'
    },
    {
      question: 'كم يستغرق نقل العفش؟',
      answer: 'عادة ما يستغرق نقل العفش من 4 إلى 8 ساعات للشقق العادية، و8 إلى 12 ساعة للفلل الكبيرة، حسب كمية العفش والمسافة.'
    },
    {
      question: 'هل يمكنني الحصول على خصم؟',
      answer: 'نعم، نوفر خصومات للحجز المبكر، والعملاء الجدد، وفي المواسم الهادئة. تحقق من العروض الحالية في صفحة العروض.'
    }
  ];

  let openFAQ = -1;

  onMount(() => {
    console.log('Homepage mounted');
  });

  /** dummy submit handler (replace with real calc later) */
  function calc(e: Event) {
    e.preventDefault();
    window.location.href = '/calculator';
  }

  function toggleFAQ(index: number) {
    openFAQ = openFAQ === index ? -1 : index;
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords"
    content="اسعار نقل عفش جدة, تكلفة نقل اثاث في جدة, حاسبة نقل العفش, عروض شركات نقل العفش, نقل عفش يونيو 2025" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="font-sans bg-gray-50 text-gray-800">
  <!-- Hero + Quick Calculator -->
  <section
    class="relative isolate overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 lg:py-24">
    <div
      class="absolute inset-0 -z-10 bg-[url('/images/jeddah_furniture_moving_specialists.jpg')] bg-cover bg-center opacity-10"></div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

    <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      <div class="w-full lg:w-1/2 text-center lg:text-right space-y-6">
        <h1 class="text-4xl lg:text-5xl font-extrabold leading-tight">
          أدق حاسبة لأسعار نقل العفش بجدة
        </h1>
        <p class="text-lg text-gray-700">
          احصل على تقدير فوري وموثوق لتكلفة نقل أثاثك بناءً على أحدث بيانات السوق لشهر
          يونيو&nbsp;2025.
        </p>
        <a
          href="/calculator"
          class="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg text-white font-bold hover:bg-green-700 transition-transform transform hover:scale-105">
          جرب الحاسبة التفصيلية
        </a>
      </div>

      <!-- mini form -->
      <form
        id="calc"
        class="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-8 space-y-5"
        on:submit|preventDefault={calc}>
        <h2 class="text-2xl font-bold mb-4 text-center">تقدير سريع ومبدئي</h2>

        <div class="space-y-2">
          <label class="block text-sm font-medium">من حي:</label>
          <input
            required
            type="text"
            placeholder="مثال: الروضة"
            class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium">إلى حي:</label>
          <input
            required
            type="text"
            placeholder="مثال: الشاطئ"
            class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium">حجم العفش</label>
          <select
            class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
            <option value="small">صغير (استوديو)</option>
            <option value="medium" selected>متوسط (شقة ١-٢ غرفة)</option>
            <option value="large">كبير (شقة ٣-٤ غرف)</option>
            <option value="xlarge">ضخم (فيلا)</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full rounded-md bg-yellow-500 px-4 py-3 text-gray-900 font-semibold hover:bg-yellow-600 transition-transform transform hover:scale-105">
          اذهب للحاسبة التفصيلية
        </button>
      </form>
    </div>
  </section>

  <!-- Price Tiers -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">مقارنة سريعة بين فئات الأسعار</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Economy -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
          <h3 class="text-xl font-bold mb-2">اقتصادي</h3>
          <p class="text-3xl font-bold text-green-600 mb-4">500-1000 <span class="text-sm">ر.س</span></p>
          <p class="text-gray-600">نقل أساسي للقطع القليلة والميزانيات المحدودة.</p>
          <a href="/pricing/economy" class="text-green-600 font-semibold mt-4 inline-block">اعرف المزيد</a>
        </div>
        <!-- Standard -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-500">
          <h3 class="text-xl font-bold mb-2">قياسي</h3>
          <p class="text-3xl font-bold text-blue-600 mb-4">1000-2000 <span class="text-sm">ر.س</span></p>
          <p class="text-gray-600">توازن مثالي بين السعر والخدمة، يشمل تغليف أساسي.</p>
          <a href="/pricing/standard" class="text-blue-600 font-semibold mt-4 inline-block">اعرف المزيد</a>
        </div>
        <!-- Premium -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-500">
          <h3 class="text-xl font-bold mb-2">مميز</h3>
          <p class="text-3xl font-bold text-purple-600 mb-4">2000-3500 <span class="text-sm">ر.س</span></p>
          <p class="text-gray-600">جودة عالية، تغليف احترافي، وضمان لراحة البال.</p>
          <a href="/pricing/premium" class="text-purple-600 font-semibold mt-4 inline-block">اعرف المزيد</a>
        </div>
        <!-- VIP -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-yellow-500">
          <h3 class="text-xl font-bold mb-2">VIP</h3>
          <p class="text-3xl font-bold text-yellow-600 mb-4">3500+ <span class="text-sm">ر.س</span></p>
          <p class="text-gray-600">خدمة حصرية للقصور والمقتنيات الثمينة.</p>
          <a href="/pricing/vip" class="text-yellow-600 font-semibold mt-4 inline-block">اعرف المزيد</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-10">ماذا يقول عملاؤنا؟</h2>
    <div class="grid gap-8 md:grid-cols-3">
      <blockquote class="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <img src="/images/author/omar_alharbi.png" alt="Omar Al-Harbi" class="w-16 h-16 rounded-full mx-auto mb-4">
        <p class="text-center">"وفرت 30% من التكلفة بفضل الحاسبة! خدمة رائعة ومصداقية عالية."</p>
        <footer class="text-sm text-center text-gray-500">— عمر الحربي، حي الروضة</footer>
      </blockquote>
      <blockquote class="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <img src="/images/author/sara_almutairi.png" alt="Sara Al-Mutairi" class="w-16 h-16 rounded-full mx-auto mb-4">
        <p class="text-center">"دقة في الأسعار وسهولة في الاستخدام. أوصي به بشدة لكل من يبحث عن شفافية."</p>
        <footer class="text-sm text-center text-gray-500">— سارة المطيري، حي الشاطئ</footer>
      </blockquote>
      <blockquote class="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <img src="/images/author/ahmed_alsaeed.png" alt="Ahmed Al-Saeed" class="w-16 h-16 rounded-full mx-auto mb-4">
        <p class="text-center">"أفضل مقارنة أسعار نقل وجدتها على الإنترنت. ساعدني في اتخاذ القرار الصحيح."</p>
        <footer class="text-sm text-center text-gray-500">— أحمد السعيد، حي النزهة</footer>
      </blockquote>
    </div>
  </section>

  <!-- Latest Blog Posts -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">أحدث المقالات والنصائح</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          اكتشف أحدث النصائح والإرشادات لنقل العفش، وتعرف على أفضل الممارسات لتوفير المال والوقت
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {#each latestPosts as post}
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <!-- صورة المقال -->
            <a href="/blog/{post.slug}" class="block h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-3">
                {#each post.tags.slice(0, 2) as tag}
                  <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{tag}</span>
                {/each}
              </div>
              <h3 class="text-xl font-bold mb-3 line-clamp-2">
                <a href="/blog/{post.slug}" class="hover:text-green-600 transition-colors">
                  {post.title}
                </a>
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{post.summary}</p>
              <div class="flex items-center justify-between">
                <time class="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('ar-EG')}</time>
                <a href="/blog/{post.slug}" class="text-green-600 font-semibold hover:text-green-700 group">
                  <span class="group-hover:translate-x-1 inline-block transition-transform duration-200">
                    اقرأ المزيد ←
                  </span>
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
      
      <div class="text-center">
        <a href="/blog" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          عرض جميع المقالات
        </a>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">خدماتنا الشاملة</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">تغليف احترافي</h3>
          <p class="text-gray-600">تغليف آمن لجميع أنواع الأثاث والأجهزة الكهربائية</p>
        </div>
        
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">ضمان شامل</h3>
          <p class="text-gray-600">تأمين كامل على جميع القطع ضد التلف أو الكسر</p>
        </div>
        
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">مواعيد مرنة</h3>
          <p class="text-gray-600">خدمة 24/7 مع إمكانية الحجز في نفس اليوم</p>
        </div>
        
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">أسعار شفافة</h3>
          <p class="text-gray-600">لا توجد رسوم خفية، كل شيء واضح ومحدد مسبقاً</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="py-16 bg-green-700 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">أرقام تتحدث عن نفسها</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">15,000+</div>
          <div class="text-green-200">عملية نقل ناجحة</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">98%</div>
          <div class="text-green-200">معدل رضا العملاء</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">24/7</div>
          <div class="text-green-200">خدمة عملاء متواصلة</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold mb-2">5</div>
          <div class="text-green-200">سنوات من الخبرة</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
        <div class="space-y-4">
          {#each faqs as faq, index}
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                class="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                on:click={() => toggleFAQ(index)}>
                <span class="font-semibold">{faq.question}</span>
                <svg
                  class="w-5 h-5 transform transition-transform {openFAQ === index ? 'rotate-180' : ''}"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {#if openFAQ === index}
                <div class="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              {/if}
            </div>
          {/each}
        </div>
        <div class="text-center mt-8">
          <a href="/faq" class="text-green-600 font-semibold hover:text-green-700">
            عرض جميع الأسئلة الشائعة ←
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-green-700 text-white py-20">
    <div class="container mx-auto px-4 text-center space-y-6">
      <h2 class="text-4xl font-bold">هل أنت جاهز لنقلة سهلة ومريحة؟</h2>
      <p class="text-xl max-w-2xl mx-auto">
        استخدم حاسبتنا التفصيلية الآن واحصل على تقدير دقيق ومفصل لعروض أسعار متعددة تناسب احتياجاتك وميزانيتك.
      </p>
      <a
        href="/calculator"
        class="inline-block bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 text-lg">
        اذهب إلى الحاسبة التفصيلية
      </a>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Smooth animations for FAQ */
  .faq-content {
    transition: all 0.3s ease-in-out;
  }
  
  /* Hover effects for cards */
  .hover-lift:hover {
    transform: translateY(-2px);
  }
  
  /* Custom gradient backgrounds */
  .gradient-green {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
  }
  
  .gradient-blue {
    background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
  }
</style>
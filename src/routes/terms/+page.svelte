<script lang="ts">
  import { onMount } from 'svelte';
  
  let activeSection = '';
  
  onMount(() => {
    // Update URL hash when scrolling to sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.6 });
    
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  });
  
  const sections = [
    { id: 'introduction', title: '1. مقدمة' },
    { id: 'definitions', title: '2. التعريفات' },
    { id: 'service-description', title: '3. وصف الخدمة' },
    { id: 'user-obligations', title: '4. التزامات المستخدم' },
    { id: 'platform-obligations', title: '5. التزامات المنصة' },
    { id: 'pricing-booking', title: '6. الأسعار والحجز' },
    { id: 'liability', title: '7. المسؤولية' },
    { id: 'intellectual-property', title: '8. الملكية الفكرية' },
    { id: 'privacy', title: '9. الخصوصية' },
    { id: 'modifications', title: '10. التعديلات' },
    { id: 'termination', title: '11. إنهاء الخدمة' },
    { id: 'governing-law', title: '12. القانون الحاكم' },
    { id: 'contact', title: '13. الاتصال' }
  ];
  
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  const lastUpdated = "2025-01-15";
</script>

<svelte:head>
  <title>شروط الاستخدام - منصة نقل العفش جدة</title>
  <meta name="description" content="شروط الاستخدام لمنصة نقل العفش جدة - القواعد والأحكام التي تحكم استخدام خدماتنا لمقارنة أسعار شركات نقل الأثاث في جدة" />
  <meta name="keywords" content="شروط الاستخدام, نقل العفش جدة, أحكام الخدمة, قوانين المنصة" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="شروط الاستخدام - منصة نقل العفش جدة" />
  <meta property="og:description" content="اطلع على شروط الاستخدام والأحكام التي تحكم استخدام منصتنا لمقارنة أسعار نقل الأثاث في جدة" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/images/furniture_transportation_jeddah_specialists_saudi.jpg" />
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "شروط الاستخدام - منصة نقل العفش جدة",
    "description": "شروط الاستخدام والأحكام لمنصة مقارنة أسعار نقل الأثاث في جدة",
    "publisher": {
      "@type": "Organization",
      "name": "منصة نقل العفش جدة"
    },
    "dateModified": "2025-01-15"
  }
  </script>
</svelte:head>

<main class="min-h-screen bg-gray-50" dir="rtl">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
    <div class="absolute inset-0 bg-black/20"></div>
    
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-400/30 mb-6">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">
          شروط الاستخدام
        </h1>
        
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          القواعد والأحكام التي تحكم استخدام منصة نقل العفش جدة لمقارنة الأسعار والخدمات
        </p>
        
        <div class="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3">
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span class="text-blue-200">آخر تحديث: {lastUpdated}</span>
        </div>
      </div>
    </div>
  </section>

  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Table of Contents - Sidebar -->
      <div class="lg:col-span-1">
        <div class="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <svg class="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
            فهرس المحتويات
          </h3>
          
          <nav class="space-y-2">
            {#each sections as section}
              <button
                on:click={() => scrollToSection(section.id)}
                class="block w-full text-right px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1"
                class:bg-blue-50={activeSection === section.id}
                class:text-blue-600={activeSection === section.id}
                class:border-r-2={activeSection === section.id}
                class:border-blue-600={activeSection === section.id}
                class:text-gray-600={activeSection !== section.id}
              >
                {section.title}
              </button>
            {/each}
          </nav>
        </div>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-3">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div class="p-8 lg:p-12">
            
            <!-- Introduction -->
            <section id="introduction" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">1</span>
                مقدمة
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">
                  مرحباً بكم في منصة نقل العفش جدة، منصة مقارنة أسعار خدمات نقل الأثاث في مدينة جدة والمملكة العربية السعودية. تحكم هذه الشروط والأحكام ("الشروط") استخدامكم لموقعنا الإلكتروني وخدماتنا.
                </p>
                <p class="mb-4">
                  من خلال الوصول إلى موقعنا أو استخدامه، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. إذا كنتم لا توافقون على أي جزء من هذه الشروط، فلا يجوز لكم استخدام خدماتنا.
                </p>
                <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-amber-600 mt-1 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    <div>
                      <p class="text-amber-800 font-medium">تنبيه مهم</p>
                      <p class="text-amber-700 mt-1 text-sm">يُرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا. استخدامكم للموقع يعني موافقتكم على جميع الشروط المذكورة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Definitions -->
            <section id="definitions" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">2</span>
                التعريفات
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gray-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-800 mb-2">المنصة</h4>
                    <p class="text-sm">موقع نقل العفش جدة الإلكتروني وجميع خدماته ومحتوياته</p>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-800 mb-2">المستخدم</h4>
                    <p class="text-sm">أي شخص يصل إلى الموقع أو يستخدم خدماتنا</p>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-800 mb-2">مقدم الخدمة</h4>
                    <p class="text-sm">شركات نقل الأثاث المدرجة في منصتنا</p>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-800 mb-2">الخدمات</h4>
                    <p class="text-sm">خدمات مقارنة الأسعار والمعلومات المقدمة عبر المنصة</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Service Description -->
            <section id="service-description" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">3</span>
                وصف الخدمة
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">
                  تقدم منصة نقل العفش جدة الخدمات التالية:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div class="flex items-start bg-blue-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-blue-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-blue-800">حاسبة التكلفة</h4>
                      <p class="text-blue-700 text-sm mt-1">تقدير تكلفة نقل الأثاث بناءً على البيانات المدخلة</p>
                    </div>
                  </div>
                  <div class="flex items-start bg-green-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-green-800">مقارنة الأسعار</h4>
                      <p class="text-green-700 text-sm mt-1">عرض ومقارنة أسعار مختلف شركات النقل</p>
                    </div>
                  </div>
                  <div class="flex items-start bg-purple-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-purple-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-purple-800">معلومات الشركات</h4>
                      <p class="text-purple-700 text-sm mt-1">تفاصيل وتقييمات شركات نقل الأثاث</p>
                    </div>
                  </div>
                  <div class="flex items-start bg-orange-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-orange-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-orange-800">دليل ونصائح</h4>
                      <p class="text-orange-700 text-sm mt-1">مقالات ونصائح حول نقل الأثاث</p>
                    </div>
                  </div>
                </div>
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
                  <p class="text-blue-800 font-medium mb-2">📌 ملاحظة مهمة:</p>
                  <p class="text-blue-700 text-sm">نحن منصة مقارنة ومعلومات فقط. لا نقدم خدمات النقل مباشرة، بل نساعدكم في العثور على أفضل شركات النقل والمقارنة بينها.</p>
                </div>
              </div>
            </section>

            <!-- User Obligations -->
            <section id="user-obligations" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">4</span>
                التزامات المستخدم
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">يلتزم المستخدم عند استخدام منصتنا بما يلي:</p>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p>تقديم معلومات صحيحة ودقيقة عند استخدام حاسبة التكلفة</p>
                  </div>
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p>عدم استخدام الموقع لأي أغراض غير قانونية أو ضارة</p>
                  </div>
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p>احترام حقوق الملكية الفكرية للمحتوى المنشور</p>
                  </div>
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p>عدم محاولة إيذاء أو إعاقة عمل المنصة بأي شكل</p>
                  </div>
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p>التواصل المباشر مع شركات النقل لتأكيد الأسعار والخدمات</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Platform Obligations -->
            <section id="platform-obligations" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">5</span>
                التزامات المنصة
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">نلتزم في منصة نقل العفش جدة بتقديم:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h4 class="font-semibold text-blue-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      معلومات موثوقة
                    </h4>
                    <p class="text-blue-700 text-sm">تقديم معلومات دقيقة ومحدثة عن شركات النقل</p>
                  </div>
                  <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <h4 class="font-semibold text-green-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                      حماية البيانات
                    </h4>
                    <p class="text-green-700 text-sm">الحفاظ على خصوصية وأمان معلومات المستخدمين</p>
                  </div>
                  <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-200">
                    <h4 class="font-semibold text-purple-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 12h.01M12 12h.01"></path>
                      </svg>
                      خدمة مستمرة
                    </h4>
                    <p class="text-purple-700 text-sm">توفير الخدمة بأفضل جودة ممكنة</p>
                  </div>
                  <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                    <h4 class="font-semibold text-orange-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364L18.364 5.636"></path>
                      </svg>
                      دعم المستخدمين
                    </h4>
                    <p class="text-orange-700 text-sm">تقديم المساعدة والدعم عند الحاجة</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Continue with other sections... -->
            <section id="liability" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">7</span>
                المسؤولية
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                  <div class="flex items-start">
                    <svg class="w-6 h-6 text-amber-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    <div>
                      <h4 class="font-bold text-amber-800 mb-2">إخلاء مسؤولية مهم</h4>
                      <p class="text-amber-700 text-sm leading-relaxed">
                        منصة نقل العفش جدة هي منصة مقارنة ومعلومات فقط. نحن لا نقدم خدمات النقل مباشرة ولا نتحمل المسؤولية عن:
                      </p>
                    </div>
                  </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>جودة خدمات شركات النقل المدرجة في المنصة</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>أي أضرار أو خسائر تنتج عن استخدام خدمات شركات النقل</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>دقة الأسعار النهائية (يجب التأكد مع الشركة مباشرة)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>النزاعات التي قد تنشأ بين المستخدم وشركات النقل</span>
                  </li>
                </ul>
              </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="mb-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">13</span>
                الاتصال
              </h2>
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <p class="text-gray-700 mb-4">
                  إذا كان لديكم أي استفسارات حول هذه الشروط والأحكام، يُرجى التواصل معنا:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-gray-700">info@jeddah-moving.sa</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span class="text-gray-700" dir="ltr">+966 50 123 4567</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  /* Prose styling */
  .prose p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }
  
  .prose h4 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
</style> 
<script lang="ts">
  import { onMount } from 'svelte';
  
  let activeSection = '';
  
  onMount(() => {
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
    { id: 'data-collection', title: '2. جمع البيانات' },
    { id: 'data-usage', title: '3. استخدام البيانات' },
    { id: 'data-sharing', title: '4. مشاركة البيانات' },
    { id: 'data-security', title: '5. أمان البيانات' },
    { id: 'cookies', title: '6. ملفات تعريف الارتباط' },
    { id: 'user-rights', title: '7. حقوق المستخدم' },
    { id: 'data-retention', title: '8. الاحتفاظ بالبيانات' },
    { id: 'third-parties', title: '9. الأطراف الثالثة' },
    { id: 'children-privacy', title: '10. خصوصية الأطفال' },
    { id: 'policy-updates', title: '11. تحديث السياسة' },
    { id: 'contact', title: '12. الاتصال' }
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
  <title>سياسة الخصوصية - منصة نقل العفش جدة</title>
  <meta name="description" content="سياسة الخصوصية لمنصة نقل العفش جدة - كيف نحمي بياناتكم الشخصية ونحافظ على خصوصيتكم عند استخدام خدماتنا" />
  <meta name="keywords" content="سياسة الخصوصية, حماية البيانات, نقل العفش جدة, أمان المعلومات" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="سياسة الخصوصية - منصة نقل العفش جدة" />
  <meta property="og:description" content="تعرف على كيفية حماية بياناتكم الشخصية وضمان خصوصيتكم في منصة نقل العفش جدة" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/images/furniture_transportation_jeddah_specialists_saudi.jpg" />
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "سياسة الخصوصية - منصة نقل العفش جدة",
    "description": "سياسة الخصوصية وحماية البيانات لمنصة مقارنة أسعار نقل الأثاث في جدة",
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
  <section class="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20">
    <div class="absolute inset-0 bg-black/20"></div>
    
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-emerald-600/20 rounded-full backdrop-blur-sm border border-emerald-400/30 mb-6">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">
          سياسة الخصوصية
        </h1>
        
        <p class="text-xl text-emerald-100 mb-8 leading-relaxed">
          التزامنا بحماية خصوصيتكم وأمان بياناتكم الشخصية في منصة نقل العفش جدة
        </p>
        
        <div class="inline-flex items-center bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3">
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span class="text-emerald-200">آخر تحديث: {lastUpdated}</span>
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
            <svg class="w-5 h-5 ml-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
            فهرس المحتويات
          </h3>
          
          <nav class="space-y-2">
            {#each sections as section}
              <button
                on:click={() => scrollToSection(section.id)}
                class="block w-full text-right px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 hover:translate-x-1"
                class:bg-emerald-50={activeSection === section.id}
                class:text-emerald-600={activeSection === section.id}
                class:border-r-2={activeSection === section.id}
                class:border-emerald-600={activeSection === section.id}
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
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">1</span>
                مقدمة
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">
                  في منصة نقل العفش جدة، نحن نقدر ثقتكم ونلتزم بحماية خصوصيتكم وأمان معلوماتكم الشخصية. تشرح هذه السياسة كيف نجمع ونستخدم ونحمي البيانات التي تقدمونها عند استخدام خدماتنا.
                </p>
                <p class="mb-4">
                  نحن نتبع أفضل الممارسات العالمية في حماية البيانات ونلتزم بالقوانين واللوائح المعمول بها في المملكة العربية السعودية.
                </p>
                <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-emerald-600 mt-1 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p class="text-emerald-800 font-medium">التزامنا بالخصوصية</p>
                      <p class="text-emerald-700 mt-1 text-sm">خصوصيتكم أولوية قصوى بالنسبة لنا، ونحن نطبق أعلى معايير الأمان لحماية بياناتكم.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Data Collection -->
            <section id="data-collection" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">2</span>
                جمع البيانات
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">نقوم بجمع أنواع مختلفة من المعلومات لتقديم خدماتنا وتحسينها:</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 class="font-semibold text-blue-800 mb-3 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      البيانات الشخصية
                    </h4>
                    <ul class="text-sm text-blue-700 space-y-1">
                      <li>• الاسم الكامل</li>
                      <li>• رقم الهاتف</li>
                      <li>• البريد الإلكتروني</li>
                      <li>• العنوان (الحي والمدينة)</li>
                    </ul>
                  </div>
                  
                  <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 class="font-semibold text-purple-800 mb-3 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                      بيانات الاستخدام
                    </h4>
                    <ul class="text-sm text-purple-700 space-y-1">
                      <li>• حاسبة التكلفة</li>
                      <li>• الصفحات المزارة</li>
                      <li>• وقت التصفح</li>
                      <li>• الجهاز المستخدم</li>
                    </ul>
                  </div>
                  
                  <div class="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 class="font-semibold text-orange-800 mb-3 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      البيانات التقنية
                    </h4>
                    <ul class="text-sm text-orange-700 space-y-1">
                      <li>• عنوان IP</li>
                      <li>• نوع المتصفح</li>
                      <li>• نظام التشغيل</li>
                      <li>• الموقع الجغرافي</li>
                    </ul>
                  </div>
                  
                  <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 class="font-semibold text-green-800 mb-3 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                      بيانات التواصل
                    </h4>
                    <ul class="text-sm text-green-700 space-y-1">
                      <li>• رسائل الدعم</li>
                      <li>• الاستفسارات</li>
                      <li>• التعليقات</li>
                      <li>• التقييمات</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Data Usage -->
            <section id="data-usage" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">3</span>
                استخدام البيانات
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">نستخدم البيانات المجمعة للأغراض التالية:</p>
                
                <div class="space-y-4">
                  <div class="flex items-start bg-emerald-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-emerald-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-emerald-800">تقديم الخدمات</h4>
                      <p class="text-emerald-700 text-sm mt-1">تشغيل حاسبة التكلفة وتقديم مقارنات الأسعار المخصصة لكم</p>
                    </div>
                  </div>

                  <div class="flex items-start bg-blue-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-blue-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-blue-800">تحسين الخدمة</h4>
                      <p class="text-blue-700 text-sm mt-1">تطوير المنصة وتحسين تجربة المستخدم بناءً على البيانات</p>
                    </div>
                  </div>

                  <div class="flex items-start bg-purple-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-purple-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-purple-800">التواصل</h4>
                      <p class="text-purple-700 text-sm mt-1">الرد على استفساراتكم وتقديم الدعم اللازم</p>
                    </div>
                  </div>

                  <div class="flex items-start bg-orange-50 rounded-lg p-4">
                    <svg class="w-6 h-6 text-orange-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-orange-800">التحليل والإحصائيات</h4>
                      <p class="text-orange-700 text-sm mt-1">فهم أنماط الاستخدام لتحسين الخدمات المقدمة</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Data Security -->
            <section id="data-security" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">5</span>
                أمان البيانات
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200 mb-6">
                  <div class="flex items-start">
                    <svg class="w-8 h-8 text-emerald-600 mt-1 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <div>
                      <h4 class="font-bold text-emerald-800 mb-2">حماية متقدمة</h4>
                      <p class="text-emerald-700 text-sm leading-relaxed">
                        نطبق أحدث تقنيات الأمان لحماية بياناتكم من الوصول غير المصرح به أو الاختراق أو التسريب.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 class="font-semibold text-blue-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      التشفير
                    </h4>
                    <p class="text-blue-700 text-sm">تشفير جميع البيانات الحساسة أثناء النقل والتخزين</p>
                  </div>

                  <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 class="font-semibold text-green-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                      </svg>
                      التحكم في الوصول
                    </h4>
                    <p class="text-green-700 text-sm">إدارة صارمة لصلاحيات الوصول للبيانات</p>
                  </div>

                  <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 class="font-semibold text-purple-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      النسخ الاحتياطي
                    </h4>
                    <p class="text-purple-700 text-sm">نسخ احتياطية منتظمة وآمنة لضمان استمرارية الخدمة</p>
                  </div>

                  <div class="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 class="font-semibold text-orange-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      المراقبة المستمرة
                    </h4>
                    <p class="text-orange-700 text-sm">مراقبة النظام 24/7 لرصد أي أنشطة مشبوهة</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- User Rights -->
            <section id="user-rights" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">7</span>
                حقوق المستخدم
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">لكم الحق في:</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h4 class="font-semibold text-blue-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      الاطلاع
                    </h4>
                    <p class="text-blue-700 text-sm">طلب نسخة من بياناتكم الشخصية المحفوظة لدينا</p>
                  </div>

                  <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <h4 class="font-semibold text-green-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                      التصحيح
                    </h4>
                    <p class="text-green-700 text-sm">طلب تصحيح أي معلومات غير صحيحة أو غير دقيقة</p>
                  </div>

                  <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-200">
                    <h4 class="font-semibold text-red-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                      الحذف
                    </h4>
                    <p class="text-red-700 text-sm">طلب حذف بياناتكم الشخصية من أنظمتنا</p>
                  </div>

                  <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-200">
                    <h4 class="font-semibold text-purple-800 mb-2 flex items-center">
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364L18.364 5.636"></path>
                      </svg>
                      الاعتراض
                    </h4>
                    <p class="text-purple-700 text-sm">الاعتراض على معالجة بياناتكم لأغراض معينة</p>
                  </div>
                </div>

                <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-amber-600 mt-1 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p class="text-amber-800 font-medium">كيفية ممارسة حقوقكم</p>
                      <p class="text-amber-700 mt-1 text-sm">لممارسة أي من هذه الحقوق، يُرجى التواصل معنا عبر البريد الإلكتروني أو الهاتف المذكورين في نهاية هذه السياسة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Cookies -->
            <section id="cookies" class="mb-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">6</span>
                ملفات تعريف الارتباط (Cookies)
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="mb-4">نستخدم ملفات تعريف الارتباط لتحسين تجربتكم على موقعنا:</p>
                
                <div class="space-y-4">
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 class="font-semibold text-blue-800 mb-2">ملفات تعريف الارتباط الضرورية</h4>
                    <p class="text-blue-700 text-sm">مطلوبة لتشغيل الموقع بشكل صحيح وتوفير الخدمات الأساسية</p>
                  </div>
                  
                  <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 class="font-semibold text-green-800 mb-2">ملفات تعريف الارتباط التحليلية</h4>
                    <p class="text-green-700 text-sm">تساعدنا في فهم كيفية استخدام الموقع وتحسين أدائه</p>
                  </div>
                  
                  <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 class="font-semibold text-purple-800 mb-2">ملفات تعريف الارتباط الوظيفية</h4>
                    <p class="text-purple-700 text-sm">تحفظ تفضيلاتكم وتخصص تجربة التصفح</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-4 mt-6">
                  <p class="text-gray-700 text-sm">
                    <strong>إدارة ملفات تعريف الارتباط:</strong> يمكنكم التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحكم، لكن تعطيلها قد يؤثر على بعض وظائف الموقع.
                  </p>
                </div>
              </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="mb-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">12</span>
                الاتصال
              </h2>
              <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
                <p class="text-gray-700 mb-4">
                  إذا كان لديكم أي استفسارات حول سياسة الخصوصية أو ترغبون في ممارسة حقوقكم، يُرجى التواصل معنا:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-gray-700 text-sm">privacy@jeddah-moving.sa</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span class="text-gray-700 text-sm" dir="ltr">+966 50 123 4567</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-gray-700 text-sm">استجابة خلال 48 ساعة</span>
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
<script lang="ts">
  import { onMount } from 'svelte';
  
  let email = '';
  let isSubscribing = false;
  let subscriptionMessage = '';
  
  async function handleSubscribe(e: Event) {
    e.preventDefault();
    if (!email || isSubscribing) return;
    
    isSubscribing = true;
    
    // Simulate subscription
    setTimeout(() => {
      subscriptionMessage = 'تم الاشتراك بنجاح! سنرسل لك أحدث النصائح والعروض.';
      email = '';
      isSubscribing = false;
      
      setTimeout(() => {
        subscriptionMessage = '';
      }, 5000);
    }, 1000);
  }
  
  const footerLinks = {
    services: [
      { title: 'حاسبة التكلفة', href: '/calculator', icon: '🧮' },
      { title: 'أسعار النقل', href: '/pricing', icon: '💰' },
      { title: 'أحياء جدة', href: '/districts', icon: '🏘️' },
      { title: 'دليل الشركات', href: '/companies', icon: '🚛' }
    ],
    resources: [
      { title: 'دليل النقل الشامل', href: '/blog/complete-moving-guide', icon: '📖' },
      { title: 'نصائح التوفير', href: '/blog/money-saving-tips', icon: '💡' },
      { title: 'التأمين والحماية', href: '/blog/insurance-guide', icon: '🛡️' },
      { title: 'الأسئلة الشائعة', href: '/faq', icon: '❓' }
    ],
    company: [
      { title: 'من نحن', href: '/about', icon: 'ℹ️' },
      { title: 'تواصل معنا', href: '/contact', icon: '📞' },
      { title: 'سياسة الخصوصية', href: '/privacy', icon: '🔒' },
      { title: 'شروط الاستخدام', href: '/terms', icon: '📋' }
    ]
  };
  
  const stats = [
    { value: '15,000+', label: 'عملية نقل ناجحة', icon: '✅' },
    { value: '98%', label: 'معدل رضا العملاء', icon: '😊' },
    { value: '50+', label: 'شركة نقل شريكة', icon: '🤝' },
    { value: '24/7', label: 'دعم عملاء', icon: '🕒' }
  ];
  
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/jeddah.moving.services',
      icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/jeddah_moving',
      icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/966501234567',
      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386',
      color: 'hover:text-green-400'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/jeddah_moving',
      icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.354-1.057-2.354-2.354s1.057-2.354 2.354-2.354 2.354 1.057 2.354 2.354-1.057 2.354-2.354 2.354zm7.718 0c-1.297 0-2.354-1.057-2.354-2.354s1.057-2.354 2.354-2.354 2.354 1.057 2.354 2.354-1.057 2.354-2.354 2.354z',
      color: 'hover:text-pink-400'
    }
  ];

  let currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden" dir="rtl">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute inset-0 background-pattern"></div>
  </div>

  <div class="relative z-10">
    <!-- Stats Section -->
    <section class="border-b border-gray-700/50 py-12">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            إحصائيات تتحدث عن نفسها
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            أرقام حقيقية تعكس ثقة عملائنا وجودة خدماتنا على مدار السنوات الماضية
          </p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {#each stats as stat}
            <div class="text-center group">
              <div class="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10">
                <div class="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div class="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div class="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Main Footer Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <div class="relative">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div class="mr-4">
                <h3 class="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  نقل العفش جدة
                </h3>
                <p class="text-sm text-gray-400">منصة مقارنة الأسعار الرائدة</p>
              </div>
            </div>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              منصة مستقلة ومحايدة لمقارنة أسعار نقل العفش في جدة. نساعدك في العثور على أفضل الشركات وأنسب الأسعار لضمان تجربة نقل مريحة وآمنة.
            </p>
            
            <!-- Trust Indicators -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="flex items-center bg-green-600/20 px-3 py-1 rounded-full border border-green-500/30">
                <span class="text-green-400 text-sm mr-2">🛡️</span>
                <span class="text-sm text-green-300">محمي وآمن</span>
              </div>
              <div class="flex items-center bg-blue-600/20 px-3 py-1 rounded-full border border-blue-500/30">
                <span class="text-blue-400 text-sm mr-2">⭐</span>
                <span class="text-sm text-blue-300">تقييم 4.9/5</span>
              </div>
              <div class="flex items-center bg-purple-600/20 px-3 py-1 rounded-full border border-purple-500/30">
                <span class="text-purple-400 text-sm mr-2">🏆</span>
                <span class="text-sm text-purple-300">موثوق بواسطة الآلاف</span>
              </div>
            </div>
            
            <!-- Contact Info -->
            <div class="space-y-3">
              <a 
                href="tel:+966501234567" 
                class="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div class="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600/30 transition-colors">
                  <span class="text-green-400">📞</span>
                </div>
                <div>
                  <div class="text-sm text-gray-400">اتصل بنا</div>
                  <div class="font-semibold">+966 50 123 4567</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@jeddah-moving.sa" 
                class="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div class="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600/30 transition-colors">
                  <span class="text-blue-400">📧</span>
                </div>
                <div>
                  <div class="text-sm text-gray-400">راسلنا</div>
                  <div class="font-semibold">info@jeddah-moving.sa</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Services Links -->
          <div>
            <h4 class="text-lg font-bold mb-6 flex items-center">
              <span class="text-green-400 ml-2">🛠️</span>
              خدماتنا
            </h4>
            <ul class="space-y-3">
              {#each footerLinks.services as link}
                <li>
                  <a 
                    href={link.href} 
                    class="flex items-center text-gray-400 hover:text-green-400 transition-all duration-200 group hover:translate-x-1"
                  >
                    <span class="text-sm ml-2 group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {link.title}
                  </a>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Resources Links -->
          <div>
            <h4 class="text-lg font-bold mb-6 flex items-center">
              <span class="text-blue-400 ml-2">📚</span>
              الموارد
            </h4>
            <ul class="space-y-3">
              {#each footerLinks.resources as link}
                <li>
                  <a 
                    href={link.href} 
                    class="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200 group hover:translate-x-1"
                  >
                    <span class="text-sm ml-2 group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {link.title}
                  </a>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h4 class="text-lg font-bold mb-6 flex items-center">
              <span class="text-purple-400 ml-2">🏢</span>
              الشركة
            </h4>
            <ul class="space-y-3">
              {#each footerLinks.company as link}
                <li>
                  <a 
                    href={link.href} 
                    class="flex items-center text-gray-400 hover:text-purple-400 transition-all duration-200 group hover:translate-x-1"
                  >
                    <span class="text-sm ml-2 group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {link.title}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="border-t border-gray-700/50 py-12">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 backdrop-blur-sm border border-green-500/20">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div class="text-center lg:text-right">
              <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                🔔 ابق على اطلاع بأحدث العروض
              </h3>
              <p class="text-gray-400">
                اشترك في نشرتنا البريدية واحصل على أفضل النصائح وأحدث العروض
              </p>
            </div>
            
            <form on:submit={handleSubscribe} class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:min-w-96">
              <div class="flex-1">
                <input 
                  type="email" 
                  bind:value={email}
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  disabled={isSubscribing}
                  class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 disabled:opacity-50"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubscribing || !email}
                class="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {#if isSubscribing}
                  <svg class="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  جارٍ الاشتراك...
                {:else}
                  <span>📧</span>
                  اشترك الآن
                {/if}
              </button>
            </form>
          </div>
          
          {#if subscriptionMessage}
            <div class="mt-4 p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-green-300 text-center animate-fade-in">
              ✅ {subscriptionMessage}
            </div>
          {/if}
        </div>
      </div>
    </section>

    <!-- Bottom Section -->
    <section class="border-t border-gray-700/50 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <!-- Copyright -->
          <div class="text-center lg:text-right">
            <p class="text-gray-400">
              &copy; {currentYear} نقل العفش جدة. جميع الحقوق محفوظة.
            </p>
            <p class="text-sm text-gray-500 mt-1">
              صُنع بـ ❤️ في المملكة العربية السعودية
            </p>
          </div>

          <!-- Social Media -->
          <div class="flex items-center gap-4">
            <span class="text-gray-400 text-sm ml-4">تابعنا على:</span>
            {#each socialLinks as social}
              <a 
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 {social.color} transition-all duration-200 hover:scale-110 hover:bg-gray-700/50"
                aria-label={social.name}
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            {/each}
          </div>

          <!-- Back to Top -->
          <button 
            on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            class="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
            aria-label="العودة للأعلى"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</footer>

<style>
  .background-pattern {
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
  
  /* Custom gradient text */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Smooth hover transitions */
  footer a {
    transition: all 0.2s ease;
  }
  
  /* Custom scrollbar for newsletter section */
  input:focus {
    outline: none;
  }
  
  /* Responsive text sizes */
  @media (max-width: 640px) {
    .text-3xl {
      font-size: 1.5rem;
    }
    .text-4xl {
      font-size: 2rem;
    }
  }
</style>
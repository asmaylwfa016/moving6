<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let isScrolled = false;
  let isServicesDropdownOpen = false;
  let servicesDropdownTimeout: ReturnType<typeof setTimeout>;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }
  
  function closeMenu() {
    isMenuOpen = false;
    document.body.style.overflow = '';
  }
  
  function handleServicesMouseEnter() {
    clearTimeout(servicesDropdownTimeout);
    isServicesDropdownOpen = true;
  }
  
  function handleServicesMouseLeave() {
    servicesDropdownTimeout = setTimeout(() => {
      isServicesDropdownOpen = false;
    }, 200);
  }
  
  // Close mobile menu when route changes
  $: if ($page.url.pathname) {
    closeMenu();
  }
  
  const services = [
    { href: '/pricing', title: 'أسعار النقل', icon: '💰', description: 'اعرف التكلفة بدقة' },
    { href: '/districts', title: 'الأحياء', icon: '🏠', description: 'خدمات حسب الحي' },
    { href: '/companies', title: 'الشركات', icon: '🚛', description: 'أفضل شركات النقل' },
    { href: '/calculator', title: 'حاسبة التكلفة', icon: '🧮', description: 'احسب التكلفة فوراً' }
  ];
</script>

<header 
  class="fixed w-full top-0 z-50 transition-all duration-300 ease-out"
  class:header-scrolled={isScrolled}
  class:header-default={!isScrolled}
>
  <nav class="container mx-auto px-4 lg:px-6" dir="rtl">
    <div class="flex justify-between items-center h-16 lg:h-20">
      
      <!-- Logo -->
      <a 
        href="/" 
        class="flex items-center space-x-3 space-x-reverse group"
      >
        <div class="relative">
          <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center transform group-hover:scale-105">
            <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            </svg>
          </div>
          <div class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <div class="flex flex-col">
          <span class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            نقل العفش جدة
          </span>
          <span class="text-xs text-gray-500 font-medium hidden lg:block">
            خدمة احترافية موثوقة
          </span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8 space-x-reverse">
        
        <!-- Navigation Links -->
        <div class="flex items-center space-x-6 space-x-reverse">
          <a 
            href="/" 
            class="nav-link group"
            class:active={$page.url.pathname === '/'}
          >
            <span class="nav-link-text">الرئيسية</span>
            <span class="nav-link-icon">🏠</span>
          </a>
          
          <a 
            href="/about" 
            class="nav-link group"
            class:active={$page.url.pathname === '/about'}
          >
            <span class="nav-link-text">من نحن</span>
            <span class="nav-link-icon">ℹ️</span>
          </a>
          
          <!-- Services Dropdown -->
          <div 
            class="relative"
            on:mouseenter={handleServicesMouseEnter}
            on:mouseleave={handleServicesMouseLeave}
          >
            <button 
              class="nav-link group flex items-center"
              class:active={$page.url.pathname.startsWith('/pricing') || $page.url.pathname.startsWith('/districts') || $page.url.pathname.startsWith('/companies')}
            >
              <span class="nav-link-text">خدماتنا</span>
              <span class="nav-link-icon">🛠️</span>
              <svg 
                class="w-4 h-4 mr-1 transition-transform duration-200"
                class:rotate-180={isServicesDropdownOpen}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            {#if isServicesDropdownOpen}
              <div 
                class="dropdown-menu animate-fade-in"
                on:mouseenter={handleServicesMouseEnter}
                on:mouseleave={handleServicesMouseLeave}
              >
                {#each services as service}
                  <a 
                    href={service.href}
                    class="dropdown-item group"
                  >
                    <span class="text-2xl ml-3 group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </span>
                    <div class="flex-1">
                      <div class="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </div>
                      <div class="text-sm text-gray-500">
                        {service.description}
                      </div>
                    </div>
                    <svg class="w-4 h-4 text-gray-400 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                {/each}
              </div>
            {/if}
          </div>
          
          <a 
            href="/blog" 
            class="nav-link group"
            class:active={$page.url.pathname.startsWith('/blog')}
          >
            <span class="nav-link-text">المدونة</span>
            <span class="nav-link-icon">📝</span>
          </a>
          
          <a 
            href="/contact" 
            class="nav-link group"
            class:active={$page.url.pathname === '/contact'}
          >
            <span class="nav-link-text">تواصل معنا</span>
            <span class="nav-link-icon">📞</span>
          </a>
        </div>

        <!-- CTA Button -->
        <a 
          href="/calculator" 
          class="cta-button group"
        >
          <span class="relative z-10 flex items-center">
            <span class="ml-2">🧮</span>
            حاسبة التكلفة
            <svg class="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center group"
        on:click={toggleMenu}
        aria-label="تبديل القائمة"
      >
        <div class="flex flex-col justify-center items-center w-6 h-6">
          <span 
            class="hamburger-line"
            class:hamburger-open-1={isMenuOpen}
          ></span>
          <span 
            class="hamburger-line mt-1"
            class:hamburger-open-2={isMenuOpen}
          ></span>
          <span 
            class="hamburger-line mt-1"
            class:hamburger-open-3={isMenuOpen}
          ></span>
        </div>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  {#if isMenuOpen}
    <div 
      class="mobile-overlay animate-fade-in"
      on:click={closeMenu}
    ></div>
  {/if}

  <!-- Mobile Menu -->
  <div 
    class="mobile-menu"
    class:mobile-menu-open={isMenuOpen}
    class:mobile-menu-closed={!isMenuOpen}
  >
    <div class="flex flex-col h-full">
      
      <!-- Mobile Navigation -->
      <div class="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        
        <!-- User Welcome -->
        <div class="welcome-card">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span class="text-white text-xl">👋</span>
            </div>
            <div class="mr-3">
              <h3 class="font-semibold text-gray-800">أهلاً وسهلاً</h3>
              <p class="text-sm text-gray-600">اختر الخدمة المناسبة لك</p>
            </div>
          </div>
        </div>
        
        <a href="/" class="mobile-nav-item" class:active={$page.url.pathname === '/'}>
          <span class="text-xl">🏠</span>
          <span>الرئيسية</span>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
        
        <a href="/about" class="mobile-nav-item" class:active={$page.url.pathname === '/about'}>
          <span class="text-xl">ℹ️</span>
          <span>من نحن</span>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
        
        <!-- Services Section -->
        <div class="py-2">
          <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">خدماتنا</h4>
          {#each services as service}
            <a href={service.href} class="mobile-nav-item">
              <span class="text-xl">{service.icon}</span>
              <div class="flex-1">
                <div class="font-medium">{service.title}</div>
                <div class="text-sm text-gray-500">{service.description}</div>
              </div>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          {/each}
        </div>
        
        <a href="/blog" class="mobile-nav-item" class:active={$page.url.pathname.startsWith('/blog')}>
          <span class="text-xl">📝</span>
          <span>المدونة</span>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
        
        <a href="/contact" class="mobile-nav-item" class:active={$page.url.pathname === '/contact'}>
          <span class="text-xl">📞</span>
          <span>تواصل معنا</span>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <!-- Mobile CTA -->
      <div class="p-4 border-t border-gray-100">
        <a 
          href="/calculator" 
          class="mobile-cta-button"
        >
          <span class="ml-2">🧮</span>
          احسب التكلفة الآن
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        
        <!-- Contact Info -->
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">اتصل بنا الآن</p>
          <a href="tel:+966500000000" class="text-green-600 font-semibold hover:text-green-700">
            966-50-000-0000+
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- Spacer to prevent content from hiding under fixed header -->
<div class="h-16 lg:h-20"></div>

<style>
  /* Header States */
  .header-scrolled {
    @apply bg-white shadow-lg;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
  }
  
  .header-default {
    @apply bg-white shadow-sm;
  }
  
  /* Navigation Links */
  .nav-link {
    @apply relative py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 flex items-center;
  }
  
  .nav-link:hover {
    background-color: rgba(34, 197, 94, 0.1);
  }
  
  .nav-link.active {
    @apply text-green-600;
    background-color: rgba(34, 197, 94, 0.1);
  }
  
  .nav-link-text {
    @apply transition-transform duration-200 group-hover:translate-x-1;
  }
  
  .nav-link-icon {
    @apply opacity-0 -translate-x-2 ml-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0;
  }
  
  .nav-link.active .nav-link-icon {
    @apply opacity-100 translate-x-0;
  }
  
  /* Dropdown Menu */
  .dropdown-menu {
    @apply absolute top-full right-0 mt-2 w-80 rounded-2xl shadow-2xl border border-gray-100 py-2;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
  }
  
  .dropdown-item {
    @apply flex items-center px-4 py-3 transition-colors duration-200;
  }
  
  .dropdown-item:hover {
    background-color: rgba(34, 197, 94, 0.1);
  }
  
  /* CTA Button */
  .cta-button {
    @apply relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden;
  }
  
  /* Mobile Elements */
  .hamburger-line {
    @apply block w-6 h-0.5 bg-gray-600 transition-all duration-300 group-hover:bg-green-600;
  }
  
  .hamburger-open-1 {
    @apply rotate-45 translate-y-1;
  }
  
  .hamburger-open-2 {
    @apply opacity-0;
  }
  
  .hamburger-open-3 {
    @apply -rotate-45 -translate-y-1;
  }
  
  .mobile-overlay {
    @apply fixed inset-0 z-40 lg:hidden;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }
  
  .mobile-menu {
    @apply fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 shadow-2xl z-50 lg:hidden transition-transform duration-300 ease-out border-l border-gray-100;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
  }
  
  .mobile-menu-open {
    @apply translate-x-0;
  }
  
  .mobile-menu-closed {
    @apply translate-x-full;
  }
  
  .welcome-card {
    @apply bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border border-green-100;
  }
  
  .mobile-nav-item {
    @apply flex items-center px-4 py-3 rounded-xl text-gray-700 transition-all duration-200;
  }
  
  .mobile-nav-item:hover {
    @apply text-green-600;
    background-color: rgba(34, 197, 94, 0.1);
  }
  
  .mobile-nav-item.active {
    @apply text-green-600;
    background-color: rgba(34, 197, 94, 0.1);
  }
  
  .mobile-nav-item > span:first-child {
    @apply w-8 flex-shrink-0;
  }
  
  .mobile-nav-item > span:nth-child(2),
  .mobile-nav-item > div {
    @apply flex-1 mr-3;
  }
  
  .mobile-cta-button {
    @apply w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold text-center flex items-center justify-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105;
  }
  
  /* Animations */
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
  
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
  }
  
  /* Custom scrollbar for mobile menu */
  .mobile-menu::-webkit-scrollbar {
    width: 4px;
  }
  
  .mobile-menu::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .mobile-menu::-webkit-scrollbar-thumb {
    background: rgba(34, 197, 94, 0.3);
    border-radius: 2px;
  }
  
  .mobile-menu::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 197, 94, 0.5);
  }
</style>
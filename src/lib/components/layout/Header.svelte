<script lang="ts">
  import { page } from '$app/stores';
</script>

<header class="bg-white shadow-md">
  <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-green-600">نقل العفش</a>
    <div class="hidden md:flex space-x-6 items-center">
      <a href="/" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname === '/'}>الرئيسية</a>
      <a href="/about" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname === '/about'}>من نحن</a>
      <a href="/pricing" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname === '/pricing'}>الأسعار</a>
      <a href="/districts" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname.startsWith('/districts')}>الأحياء</a>
      <a href="/companies" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname === '/companies'}>الشركات</a>
      <a href="/blog" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname.startsWith('/blog')}>المدونة</a>
      <a href="/contact" class="text-gray-600 hover:text-green-600" class:text-green-600={$page.url.pathname === '/contact'}>تواصل معنا</a>
      <a href="/calculator" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">حاسبة التكلفة</a>
    </div>
    <div class="md:hidden">
      <button class="text-gray-600 hover:text-green-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>
</header>
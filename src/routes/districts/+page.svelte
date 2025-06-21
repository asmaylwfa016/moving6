<script lang="ts">
  import { districts, getDistrictsByLocation, type District } from '$lib/data/districts.js';
  import { onMount } from 'svelte';

  let searchQuery = '';
  let selectedLocation = 'all';
  let filteredDistricts: District[] = districts;

  const locations = [
    { id: 'all', name: 'جميع المناطق' },
    { id: 'north', name: 'شمال جدة' },
    { id: 'center', name: 'وسط جدة' },
    { id: 'west', name: 'غرب جدة' },
    { id: 'east', name: 'شرق جدة' }
  ];

  function filterDistricts() {
    let result = districts;

    // Filter by location
    if (selectedLocation !== 'all') {
      result = getDistrictsByLocation(selectedLocation);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(district =>
        district.name.includes(searchQuery.trim()) ||
        district.description.toLowerCase().includes(query) ||
        district.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    filteredDistricts = result;
  }

  $: {
    searchQuery;
    selectedLocation;
    filterDistricts();
  }
</script>

<svelte:head>
  <title>أحياء جدة - دليل شامل لأسعار نقل العفش في جميع أحياء جدة</title>
  <meta name="description" content="استكشف جميع أحياء جدة واكتشف أسعار نقل العفش في كل حي. دليل شامل يضم 26 حي مع تفاصيل الأسعار والخدمات المتاحة." />
  <meta name="keywords" content="أحياء جدة, نقل عفش جدة, أسعار النقل بالأحياء, دليل أحياء جدة" />
  <meta property="og:title" content="أحياء جدة - دليل شامل لأسعار نقل العفش" />
  <meta property="og:description" content="استكشف جميع أحياء جدة واكتشف أسعار نقل العفش في كل حي" />
  <meta property="og:type" content="website" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">أحياء جدة</h1>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        اكتشف جميع أحياء جدة وتعرف على أسعار نقل العفش في كل حي. دليلك الشامل لاختيار الحي المناسب لاحتياجاتك
      </p>
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
        <p class="text-lg font-semibold">🏘️ {districts.length} حي متاح</p>
      </div>
    </div>
  </section>

  <!-- Search and Filter Section -->
  <section class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Search Input -->
        <div>
          <label for="search" class="block text-sm font-medium text-gray-700 mb-2">
            🔍 البحث في الأحياء
          </label>
          <input
            id="search"
            type="text"
            bind:value={searchQuery}
            placeholder="ابحث باسم الحي أو الخدمات..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <!-- Location Filter -->
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700 mb-2">
            📍 تصفية حسب المنطقة
          </label>
          <select
            id="location"
            bind:value={selectedLocation}
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {#each locations as location}
              <option value={location.id}>{location.name}</option>
            {/each}
          </select>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mt-4 text-center">
        <p class="text-gray-600">
          عرض <span class="font-bold text-green-600">{filteredDistricts.length}</span> من أصل {districts.length} حي
        </p>
      </div>
    </div>
  </section>

  <!-- Districts Grid -->
  <section class="container mx-auto px-4 pb-16">
    {#if filteredDistricts.length === 0}
      <div class="text-center py-16">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
        <p class="text-gray-500">جرب تغيير معايير البحث أو الفلترة</p>
      </div>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredDistricts as district}
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <!-- District Image -->
            <div class="relative h-48">
              <img
                src={district.image}
                alt={district.name}
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute top-4 right-4">
                <span class="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {locations.find(l => l.id === district.location)?.name || district.location}
                </span>
              </div>
            </div>

            <!-- District Info -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{district.name}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">{district.description}</p>

              <!-- Features -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-1">
                  {#each district.features.slice(0, 3) as feature}
                    <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  {/each}
                  {#if district.features.length > 3}
                    <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{district.features.length - 3} المزيد
                    </span>
                  {/if}
                </div>
              </div>

              <!-- Price Range -->
              <div class="mb-4">
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div class="bg-blue-50 p-2 rounded">
                    <div class="font-semibold text-blue-800">شقة</div>
                    <div class="text-blue-600">
                      {district.priceRange.apartment.min.toLocaleString()} - {district.priceRange.apartment.max.toLocaleString()} ر.س
                    </div>
                  </div>
                  <div class="bg-green-50 p-2 rounded">
                    <div class="font-semibold text-green-800">فيلا</div>
                    <div class="text-green-600">
                      {district.priceRange.villa.min.toLocaleString()} - {district.priceRange.villa.max.toLocaleString()} ر.س
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-2">
                <a
                  href="/districts/{district.id}"
                  class="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-semibold"
                >
                  تفاصيل الحي
                </a>
                <a
                  href="/calculator?district={district.id}"
                  class="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  احسب التكلفة
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">لم تجد الحي المناسب؟</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        استخدم حاسبة التكلفة للحصول على تقدير دقيق لأسعار النقل في أي منطقة بجدة
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/calculator"
          class="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
        >
          حاسبة التكلفة
        </a>
        <a
          href="/contact"
          class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
        >
          تواصل معنا
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 
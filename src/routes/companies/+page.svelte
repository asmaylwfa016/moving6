<script lang="ts">
  import { companies } from '$lib/data/companies';
  import { getImageSrc } from '$lib/utils/imageHelper';
</script>

<svelte:head>
  <title>شركات نقل العفش في جدة - مقارنة شاملة | دليل نقل العفش</title>
  <meta name="description" content="قارن بين أفضل شركات نقل العفش في جدة من حيث الأسعار والخدمات والتقييمات. اختر الشركة المناسبة لاحتياجاتك." />
</svelte:head>

<section class="py-12 bg-gray-50 min-h-screen">
  <div class="container mx-auto px-4">
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">شركات نقل العفش في جدة</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        قارن بين أفضل شركات نقل العفش المرخصة في جدة واختر الأنسب لاحتياجاتك
      </p>
    </div>

    <!-- Filters -->
    <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="flex items-center gap-3">
        <label class="font-medium">ترتيب حسب:</label>
        <select class="rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
          <option>التقييم الأعلى</option>
          <option>السعر الأقل</option>
          <option>الأكثر خبرة</option>
        </select>
      </div>

      <div class="flex items-center gap-3">
        <label class="font-medium">فئة السعر:</label>
        <select class="rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
          <option>جميع الفئات</option>
          <option>اقتصادي</option>
          <option>متوسط</option>
          <option>مميز</option>
        </select>
      </div>
    </div>

    <!-- Companies Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each companies as company}
        <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src={getImageSrc(company.logo || '/images/placeholder.svg')} alt={company.name} class="w-10 h-10" />
              <h3 class="text-xl font-bold text-gray-800 mr-3">{company.name}</h3>
            </div>
            
            <p class="text-gray-600 mb-4">{company.description}</p>
            
            <div class="space-y-2 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-600">التقييم:</span>
                <span class="font-semibold">{company.rating}/5 ⭐</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">سنوات الخبرة:</span>
                <span class="font-semibold">{company.experience} سنة</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">نطاق السعر:</span>
                <span class="font-semibold">{company.priceRange}</span>
              </div>
            </div>
            
            <a href="/contact" class="block w-full text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
              احصل على عرض سعر
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
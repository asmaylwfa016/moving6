<script lang="ts">
  import { writable } from 'svelte/store';

  const pageTitle = 'مقارنة شركات نقل العفش في جدة | اختر الأفضل لك';
  const pageDescription = 'قارن بين أفضل شركات نقل الأثاث في جدة جنبًا إلى جنب. شاهد الفروقات في الأسعار، الخدمات، التقييمات، والضمانات لاتخاذ قرار مستنير.';

  // Dummy data for companies
  const allCompanies = [
    { id: 1, name: 'الروضة السريعة', category: 'اقتصادية', price: 800, rating: 4.6, warranty: 'لا يوجد', services: ['نقل أساسي'] },
    { id: 2, name: 'الأمان لنقل العفش', category: 'مميزة', price: 2200, rating: 4.7, warranty: 'تأمين شامل', services: ['نقل', 'تغليف', 'فك وتركيب'] },
    { id: 3, name: 'جدة المثالي', category: 'قياسية', price: 1400, rating: 4.4, warranty: 'ضمان 30 يوم', services: ['نقل', 'تغليف أساسي'] },
    { id: 4, name: 'نجمة جدة', category: 'قياسية', price: 1600, rating: 4.5, warranty: 'ضمان 60 يوم', services: ['نقل', 'تغليف', 'فك وتركيب'] },
    { id: 5, name: 'الفرسان للنقل', category: 'اقتصادية', price: 950, rating: 4.3, warranty: 'لا يوجد', services: ['نقل أساسي'] },
    { id: 6, name: 'التميز الراقي', category: 'مميزة', price: 2500, rating: 4.8, warranty: 'تأمين شامل', services: ['نقل', 'تغليف VIP', 'فك وتركيب'] },
  ];

  const selectedCompanies = writable<Set<number>>(new Set([1, 2, 3]));

  function toggleCompany(id: number) {
    selectedCompanies.update(set => {
      if (set.has(id)) {
        set.delete(id);
      } else {
        if (set.size < 5) {
          set.add(id);
        }
      }
      return set;
    });
  }

  let companiesToCompare: typeof allCompanies = [];
  $: {
    const currentSelected = $selectedCompanies;
    companiesToCompare = allCompanies.filter(c => currentSelected.has(c.id));
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="مقارنة شركات نقل العفش, مقارنة اسعار نقل الاثاث, افضل شركة نقل عفش" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-100 font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-4">أداة مقارنة شركات النقل</h1>
    <p class="text-lg text-center text-gray-600 mb-12">
      حدد الشركات التي تود مقارنتها (حتى 5 شركات)
    </p>

    <!-- Company Selection -->
    <div class="mb-8 p-4 bg-white rounded-lg shadow">
      <h2 class="text-xl font-bold mb-4">اختر الشركات:</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each allCompanies as company}
          <label class="flex items-center gap-2 p-3 rounded-md cursor-pointer" class:bg-green-100={$selectedCompanies.has(company.id)}>
            <input
              type="checkbox"
              on:change={() => toggleCompany(company.id)}
              checked={$selectedCompanies.has(company.id)}
              class="rounded border-gray-400 text-green-600 focus:ring-green-600" />
            <span>{company.name}</span>
          </label>
        {/each}
      </div>
    </div>

    <!-- Comparison Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-center">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="p-4 font-semibold">الميزة</th>
            {#each companiesToCompare as company}
              <th class="p-4 font-semibold">{company.name}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-4 font-semibold">الفئة</td>
            {#each companiesToCompare as company}
              <td class="p-4">{company.category}</td>
            {/each}
          </tr>
          <tr class="border-b bg-gray-50">
            <td class="p-4 font-semibold">متوسط السعر</td>
            {#each companiesToCompare as company}
              <td class="p-4">{company.price.toLocaleString()} ر.س</td>
            {/each}
          </tr>
          <tr class="border-b">
            <td class="p-4 font-semibold">التقييم</td>
            {#each companiesToCompare as company}
              <td class="p-4">{company.rating} ⭐</td>
            {/each}
          </tr>
          <tr class="border-b bg-gray-50">
            <td class="p-4 font-semibold">الضمانات</td>
            {#each companiesToCompare as company}
              <td class="p-4">{company.warranty}</td>
            {/each}
          </tr>
          <tr class="border-b">
            <td class="p-4 font-semibold">الخدمات</td>
            {#each companiesToCompare as company}
              <td class="p-4">
                <ul class="list-disc list-inside">
                  {#each company.services as service}
                    <li>{service}</li>
                  {/each}
                </ul>
              </td>
            {/each}
          </tr>
          <tr>
            <td class="p-4 font-semibold"></td>
            {#each companiesToCompare as company}
              <td class="p-4">
                <a href="/contact" class="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  اطلب عرض سعر
                </a>
              </td>
            {/each}
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</main>
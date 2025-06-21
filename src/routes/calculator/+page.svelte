<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { districts } from '$lib/data/districts';

  /* --- SEO Meta --- */
  const pageTitle = 'حاسبة تكلفة نقل الأثاث التفصيلية | جدة 2025';
  const pageDescription =
    'احسب تكلفة نقل العفش بدقة استناداً إلى المسافة، عدد الغرف، حجم القطع، والخدمات الإضافية مثل التغليف والفك والتركيب في جدة – يونيو 2025.';

  /* --- Data --- */
  const jeddahDistricts = [
    'الروضة', 'الشاطئ', 'النزهة', 'الصفا', 'المروة', 'الفيصلية', 'الحمراء', 'النعيم', 'السلامة', 'البوادي', 'الربوة', 'الزهراء', 'الخالدية', 'الأندلس', 'البغدادية الغربية', 'البغدادية الشرقية', 'البلد', 'الهنداوية', 'الكندرة', 'الجامعة', 'قويزة', 'السامر', 'الروابي', 'المرجان', 'أبحر الشمالية', 'الأمير فواز'
  ];

  const furnitureItems = {
    'غرفة النوم': [
      { name: 'سرير كبير', cost: 50 },
      { name: 'دولاب ملابس', cost: 70 },
      { name: 'تسريحة', cost: 30 },
      { name: 'كومودينو', cost: 15 }
    ],
    'غرفة المعيشة': [
      { name: 'كنبة ثلاثية', cost: 80 },
      { name: 'كنبة ثنائية', cost: 60 },
      { name: 'كرسي مفرد', cost: 40 },
      { name: 'طاولة قهوة', cost: 25 },
      { name: 'مكتبة تلفزيون', cost: 45 }
    ],
    'أجهزة كهربائية': [
      { name: 'ثلاجة', cost: 60 },
      { name: 'غسالة', cost: 40 },
      { name: 'فرن', cost: 50 },
      { name: 'مكيف شباك', cost: 30 },
      { name: 'مكيف سبليت', cost: 100 }
    ]
  };

  /* --- Reactive State --- */
  const fromDistrict = writable<string>(jeddahDistricts[0]);
  const toDistrict = writable<string>(jeddahDistricts[1]);
  const residenceType = writable<'apartment' | 'villa' | 'duplex'>('apartment');
  const floor = writable<number>(0);
  const hasElevator = writable<boolean>(true);
  const selectedFurniture = writable<Set<string>>(new Set());
  const extraServices = writable<{ pack: boolean; disassemble: boolean; storage: boolean }>({
    pack: false,
    disassemble: false,
    storage: false
  });

  const estimate = writable<{ economy: number; standard: number; premium: number } | null>(null);

  function calculateCost(): number {
    let base = 500; // Base cost

    // Residence type factor
    if ($residenceType === 'villa') base += 400;
    if ($residenceType === 'duplex') base += 250;

    // Floor factor (if no elevator)
    if (!$hasElevator) {
      base += $floor * 50;
    }

    // Furniture size factor
    const furnitureCount = $selectedFurniture.size;
    base += furnitureCount * 100;

    // Extra services cost
    if ($extraServices.pack) base += base * 0.2; // 20% of total for packing
    if ($extraServices.disassemble) base += 150;
    if ($extraServices.storage) base += 300;

    // Distance factor
    const districtIds = districts.map(d => d.id);
    const fromIndex = districtIds.indexOf($fromDistrict);
    const toIndex = districtIds.indexOf($toDistrict);
    const districtIndexDiff = Math.abs(fromIndex - toIndex);
    base += districtIndexDiff * 15;

    return base;
  }

  function compute() {
    const base = calculateCost();
    const economy = Math.round(base);
    const standard = Math.round(base * 1.5);
    const premium = Math.round(base * 2.2);

    estimate.set({ economy, standard, premium });
  }

  function toggleFurniture(name: string) {
    selectedFurniture.update(set => {
      if (set.has(name)) {
        set.delete(name);
      } else {
        set.add(name);
      }
      return set;
    });
  }

  onMount(() => {
    console.log('Advanced calculator with furniture checklist mounted');
  });
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta name="keywords"
    content="حاسبة اسعار نقل العفش, تكلفة نقل اثاث جدة, نقل عفش مع تغليف, نقل اثاث شامل الفك والتركيب, يونيو 2025" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-12">حاسبة تكلفة النقل المتقدمة</h1>

    <form
      class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8"
      on:submit|preventDefault={compute}>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- From District -->
        <div>
          <label for="from-district" class="block mb-1 font-medium">من حي</label>
          <select id="from-district" bind:value={$fromDistrict} class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
            {#each jeddahDistricts as district}
              <option value={district}>{district}</option>
            {/each}
          </select>
        </div>

        <!-- To District -->
        <div>
          <label for="to-district" class="block mb-1 font-medium">إلى حي</label>
          <select id="to-district" bind:value={$toDistrict} class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
            {#each jeddahDistricts as district}
              <option value={district}>{district}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Residence Type -->
        <div>
          <label class="block mb-1 font-medium">نوع السكن</label>
          <select bind:value={$residenceType} class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
            <option value="apartment">شقة</option>
            <option value="villa">فيلا</option>
            <option value="duplex">دوبلكس</option>
          </select>
        </div>
        <!-- Floor & Elevator -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 font-medium">الطابق</label>
            <input
              bind:value={$floor}
              type="number"
              min="0"
              disabled={$hasElevator}
              class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600 disabled:bg-gray-100" />
          </div>
          <div class="flex items-center gap-3 pt-7">
            <input
              id="elevator"
              type="checkbox"
              bind:checked={$hasElevator}
              class="rounded border-gray-300 text-green-600 focus:ring-green-600" />
            <label for="elevator" class="font-medium">مصعد</label>
          </div>
        </div>
      </div>

      <!-- Furniture Checklist -->
      <fieldset class="space-y-4 pt-4">
        <legend class="font-semibold text-lg mb-2">قائمة الأثاث (حدد القطع المطلوب نقلها)</legend>
        {#each Object.entries(furnitureItems) as [category, items]}
          <div class="p-4 border rounded-md">
            <h3 class="font-semibold mb-3">{category}</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              {#each items as item}
                <label class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <input
                    type="checkbox"
                    on:change={() => toggleFurniture(item.name)}
                    checked={$selectedFurniture.has(item.name)}
                    class="rounded border-gray-300 text-green-600 focus:ring-green-600" />
                  <span>{item.name}</span>
                </label>
              {/each}
            </div>
          </div>
        {/each}
      </fieldset>

      <!-- Extra services -->
      <fieldset class="space-y-3 pt-4">
        <legend class="font-semibold text-lg mb-2">خدمات إضافية</legend>
        <div class="flex items-center gap-3">
          <input id="pack" type="checkbox" bind:checked={$extraServices.pack} class="rounded border-gray-300 text-green-600 focus:ring-green-600" />
          <label for="pack">تغليف احترافي</label>
        </div>
        <div class="flex items-center gap-3">
          <input id="disassemble" type="checkbox" bind:checked={$extraServices.disassemble} class="rounded border-gray-300 text-green-600 focus:ring-green-600" />
          <label for="disassemble">فك وتركيب الأثاث</label>
        </div>
        <div class="flex items-center gap-3">
          <input id="storage" type="checkbox" bind:checked={$extraServices.storage} class="rounded border-gray-300 text-green-600 focus:ring-green-600" />
          <label for="storage">تخزين مؤقت</label>
        </div>
      </fieldset>

      <button
        type="submit"
        class="w-full py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition-transform transform hover:scale-105">
        احسب الآن
      </button>
    </form>

    {#if $estimate}
      <div class="max-w-4xl mx-auto mt-10 text-center space-y-6">
        <h2 class="text-3xl font-bold text-gray-800">عروض الأسعار التقديرية</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Economy -->
          <div class="bg-green-50 border border-green-200 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-green-700">اقتصادي</h3>
            <p class="text-2xl font-bold my-2">{$estimate.economy.toLocaleString()} ر.س</p>
            <a href="/pricing/economy" class="text-sm text-green-600 underline">تفاصيل الفئة</a>
          </div>
          <!-- Standard -->
          <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-blue-700">قياسي</h3>
            <p class="text-2xl font-bold my-2">{$estimate.standard.toLocaleString()} ر.س</p>
            <a href="/pricing/standard" class="text-sm text-blue-600 underline">تفاصيل الفئة</a>
          </div>
          <!-- Premium -->
          <div class="bg-purple-50 border border-purple-200 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-700">مميز</h3>
            <p class="text-2xl font-bold my-2">{$estimate.premium.toLocaleString()} ر.س</p>
            <a href="/pricing/premium" class="text-sm text-purple-600 underline">تفاصيل الفئة</a>
          </div>
        </div>
        <p class="text-xs text-gray-500 pt-4">
          الأسعار تقديرية وقد تختلف بناء على تقييم فرق النقل والعوامل الخاصة بموقعك.
        </p>
      </div>
    {/if}
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
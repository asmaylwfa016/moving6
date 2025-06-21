<script>
  // List of a few images to test
  const testImages = [
    '/images/furniture_transportation_jeddah_specialists_saudi.jpg',
    '/images/furniture_transport_solutions_jeddah.jpg',
    '/images/jeddah_furniture_moving_company_ksa.jpg',
    '/images/generator_moving_services_jeddah_ksa.jpg'
  ];
</script>

<svelte:head>
  <title>اختبار الصور - Test Images</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8 text-center">اختبار الصور - Test Images</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each testImages as imageSrc, index}
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">صورة رقم {index + 1}</h3>
        <img 
          src={imageSrc} 
          alt="Test Image {index + 1}"
          class="w-full h-48 object-cover rounded-md mb-2"
          on:load={() => console.log('Image loaded:', imageSrc)}
          on:error={() => console.log('Image failed:', imageSrc)}
        />
        <p class="text-sm text-gray-600 break-all">{imageSrc}</p>
      </div>
    {/each}
  </div>
  
  <div class="mt-8 p-4 bg-blue-100 rounded-lg">
    <h2 class="text-xl font-semibold mb-2">نصائح التشخيص:</h2>
    <ul class="list-disc list-inside space-y-1">
      <li>افتح أدوات المطور (F12) وتحقق من console للأخطاء</li>
      <li>تحقق من تبويب Network لرؤية حالة تحميل الصور</li>
      <li>إذا ظهرت الصور هنا، المشكلة في الكود الآخر</li>
      <li>إذا لم تظهر، المشكلة في Netlify أو مسارات الصور</li>
    </ul>
  </div>
</div> 
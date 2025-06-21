import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">عشر طرق ذكية لتوفير تكلفة نقل العفش في جدة</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-04">4 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>12 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/money_saving_moving_hacks_saudi.jpg" alt="عشر طرق توفير تكلفة نقل العفش في جدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل تريد نقل عفشك بأقل تكلفة ممكنة دون التضحية بالجودة؟ تعرف على أفضل 10 استراتيجيات مجربة لتوفير المال عند نقل العفش في جدة، مع نصائح عملية يمكنك تطبيقها فوراً لتوفير 30-50% من التكلفة!
    </p>
    
    <div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
      <h3 class="font-bold text-green-800 mb-2">💰 نتائج مضمونة</h3>
      <p>العائلات التي طبقت هذه النصائح وفرت في المتوسط 1,200 ريال من تكلفة النقل. أعلى توفير مسجل كان 2,800 ريال!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الطريقة الأولى: تقليل حجم العفش</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <div class="flex items-center mb-4">
        <span class="bg-blue-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">1</span>
        <h3 class="text-xl font-bold text-blue-800">تخلص من غير الضروري قبل النقل</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-blue-700 mb-3">ما يجب بيعه أو التبرع به:</h4>
          <ul class="text-sm space-y-1">
            <li>• الأثاث القديم أو المكسور</li>
            <li>• الملابس غير المستعملة</li>
            <li>• الكتب والمجلات القديمة</li>
            <li>• الأجهزة المعطلة</li>
            <li>• أدوات المطبخ الزائدة</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-blue-700 mb-3">التوفير المحقق:</h4>
          <ul class="text-sm space-y-1">
            <li>• تقليل حجم الشاحنة المطلوبة</li>
            <li>• توفير 200-600 ريال في التكلفة</li>
            <li>• مال إضافي من بيع الأغراض</li>
            <li>• وقت أقل في التغليف والتفريغ</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4 bg-white p-3 rounded border border-blue-300">
        <p class="text-sm"><strong>نصيحة:</strong> ابدأ عملية الفرز قبل شهر من النقل. اعرض الأثاث الجيد للبيع أولاً، ثم تبرع بالباقي.</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الطريقة الثانية: التوقيت الذكي</h2>
    
    <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
      <div class="flex items-center mb-4">
        <span class="bg-orange-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">2</span>
        <h3 class="text-xl font-bold text-orange-800">اختر الوقت المناسب للتوفير</h3>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-orange-200 rounded-lg">
          <thead class="bg-orange-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">التوقيت</th>
              <th class="px-4 py-3 text-right border-b">نسبة التوفير</th>
              <th class="px-4 py-3 text-right border-b">السبب</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b">الثلاثاء-الأربعاء</td>
              <td class="px-4 py-3 border-b text-green-600">15-25%</td>
              <td class="px-4 py-3 border-b">أقل طلباً</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">منتصف الشهر</td>
              <td class="px-4 py-3 border-b text-green-600">10-20%</td>
              <td class="px-4 py-3 border-b">تجنب ذروة الراتب</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">فصل الشتاء</td>
              <td class="px-4 py-3 border-b text-green-600">15-30%</td>
              <td class="px-4 py-3 border-b">موسم هادئ</td>
            </tr>
            <tr>
              <td class="px-4 py-3">خارج الإجازات</td>
              <td class="px-4 py-3 text-green-600">20-40%</td>
              <td class="px-4 py-3">تجنب الذروة</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الطريقة الثالثة: التغليف الذاتي</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <div class="flex items-center mb-4">
        <span class="bg-purple-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">3</span>
        <h3 class="text-xl font-bold text-purple-800">غلف بنفسك واوفر المئات</h3>
      </div>
      
      <div class="grid md:grid-cols-3 gap-4">
        <div>
          <h4 class="font-bold text-purple-700 mb-2">ما يمكنك تغليفه:</h4>
          <ul class="text-sm space-y-1">
            <li>• الملابس والمنسوجات</li>
            <li>• الكتب والمستندات</li>
            <li>• أدوات المطبخ الصغيرة</li>
            <li>• الألعاب</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-purple-700 mb-2">اترك للمحترفين:</h4>
          <ul class="text-sm space-y-1">
            <li>• التلفزيونات والشاشات</li>
            <li>• الأجهزة الكهربائية</li>
            <li>• التحف والقطع الثمينة</li>
            <li>• المرايا واللوحات</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-purple-700 mb-2">التوفير:</h4>
          <ul class="text-sm space-y-1">
            <li>• 300-800 ريال</li>
            <li>• وقت أقل للعمال</li>
            <li>• مواد تغليف أرخص</li>
            <li>• تحكم أفضل</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الطريقة الرابعة: مقارنة الأسعار بذكاء</h2>
    
    <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
      <div class="flex items-center mb-4">
        <span class="bg-teal-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">4</span>
        <h3 class="text-xl font-bold text-teal-800">استراتيجية المقارنة الفعالة</h3>
      </div>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-2">خطة المقارنة:</h4>
          <ol class="text-sm space-y-1">
            <li>1. احصل على 4-5 عروض أسعار</li>
            <li>2. تأكد من تشابه الخدمات المعروضة</li>
            <li>3. اطلب تفاصيل كل بند</li>
            <li>4. اسأل عن الخصومات المتاحة</li>
            <li>5. فاوض بناءً على أفضل عرض</li>
          </ol>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-3 rounded border border-teal-300">
            <h5 class="font-semibold mb-2">معايير المقارنة:</h5>
            <ul class="text-sm space-y-1">
              <li>• السعر الإجمالي الشامل</li>
              <li>• جودة وسمعة الشركة</li>
              <li>• التأمين والضمانات</li>
              <li>• مرونة المواعيد</li>
            </ul>
          </div>
          <div class="bg-white p-3 rounded border border-teal-300">
            <h5 class="font-semibold mb-2">تجنب هذه الأخطاء:</h5>
            <ul class="text-sm space-y-1">
              <li>• اختيار الأرخص دائماً</li>
              <li>• إهمال قراءة التفاصيل</li>
              <li>• عدم التحقق من المراجع</li>
              <li>• التسرع في القرار</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الطريقة الخامسة: التفاوض الذكي</h2>
    
    <div class="bg-red-50 p-6 rounded-lg border border-red-200">
      <div class="flex items-center mb-4">
        <span class="bg-red-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">5</span>
        <h3 class="text-xl font-bold text-red-800">أسرار التفاوض الناجح</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-red-700 mb-3">عبارات تفاوضية قوية:</h4>
          <div class="space-y-2 text-sm">
            <div class="bg-white p-2 rounded border border-red-300">
              "لدي عرض أفضل، هل يمكنكم مجاراته؟"
            </div>
            <div class="bg-white p-2 rounded border border-red-300">
              "ما هي أفضل خدمة إضافية يمكن تقديمها بنفس السعر؟"
            </div>
            <div class="bg-white p-2 rounded border border-red-300">
              "هل هناك خصم للعملاء الجدد؟"
            </div>
          </div>
        </div>
        <div>
          <h4 class="font-bold text-red-700 mb-3">نصائح التفاوض:</h4>
          <ul class="text-sm space-y-1">
            <li>• كن مؤدباً ومحترماً</li>
            <li>• اعرض عروضاً منافسة</li>
            <li>• ركز على القيمة المضافة</li>
            <li>• اطلب تحسينات بدلاً من خصم</li>
            <li>• كن مستعداً للمشي إذا لم يتحسن العرض</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الطرق الخمس المتبقية</h2>
    
    <div class="space-y-6">
      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="flex items-center mb-3">
          <span class="bg-gray-500 text-white font-bold px-3 py-1 rounded-full mr-3">6</span>
          <h3 class="font-bold">استخدم صناديق مستعملة</h3>
        </div>
        <p class="text-sm">احصل على صناديق مجانية من المتاجر أو اشترِ مستعملة. التوفير: 150-300 ريال.</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="flex items-center mb-3">
          <span class="bg-gray-500 text-white font-bold px-3 py-1 rounded-full mr-3">7</span>
          <h3 class="font-bold">شارك الشاحنة مع آخرين</h3>
        </div>
        <p class="text-sm">إذا كان العفش قليل، شارك الشاحنة مع عائلة أخرى. التوفير: 40-60% من التكلفة.</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="flex items-center mb-3">
          <span class="bg-gray-500 text-white font-bold px-3 py-1 rounded-full mr-3">8</span>
          <h3 class="font-bold">تجنب الخدمات غير الضرورية</h3>
        </div>
        <p class="text-sm">افعل بنفسك: تنظيف المنزل القديم، نقل النباتات، ترتيب المنزل الجديد. التوفير: 200-500 ريال.</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="flex items-center mb-3">
          <span class="bg-gray-500 text-white font-bold px-3 py-1 rounded-full mr-3">9</span>
          <h3 class="font-bold">احجز مبكراً للحصول على خصومات</h3>
        </div>
        <p class="text-sm">الحجز قبل 3-4 أسابيع يحصل على خصومات 10-20%. كما يضمن توفر أفضل الشركات.</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="flex items-center mb-3">
          <span class="bg-gray-500 text-white font-bold px-3 py-1 rounded-full mr-3">10</span>
          <h3 class="font-bold">استغل العروض الموسمية</h3>
        </div>
        <p class="text-sm">تابع عروض الشركات في الأوقات الهادئة أو المناسبات الخاصة. التوفير: 15-35%.</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">حاسبة التوفير: كم ستوفر؟</h2>
    
    <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
      <h3 class="text-xl font-bold text-yellow-800 mb-4">🧮 مثال عملي: شقة 3 غرف</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-yellow-200 rounded-lg">
          <thead class="bg-yellow-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">الطريقة</th>
              <th class="px-4 py-3 text-right border-b">التوفير</th>
              <th class="px-4 py-3 text-right border-b">التكلفة بعد التوفير</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b">التكلفة الأصلية</td>
              <td class="px-4 py-3 border-b">-</td>
              <td class="px-4 py-3 border-b">4,500 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">تقليل العفش</td>
              <td class="px-4 py-3 border-b text-green-600">-400 ريال</td>
              <td class="px-4 py-3 border-b">4,100 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">التوقيت المناسب</td>
              <td class="px-4 py-3 border-b text-green-600">-600 ريال</td>
              <td class="px-4 py-3 border-b">3,500 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">التغليف الذاتي</td>
              <td class="px-4 py-3 border-b text-green-600">-300 ريال</td>
              <td class="px-4 py-3 border-b">3,200 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">التفاوض</td>
              <td class="px-4 py-3 border-b text-green-600">-200 ريال</td>
              <td class="px-4 py-3 border-b">3,000 ريال</td>
            </tr>
            <tr class="bg-green-200">
              <td class="px-4 py-3 font-bold">التوفير الإجمالي</td>
              <td class="px-4 py-3 font-bold text-green-700">-1,500 ريال</td>
              <td class="px-4 py-3 font-bold">3,000 ريال</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-4 bg-white p-4 rounded border border-yellow-300">
        <h4 class="font-bold text-yellow-800 mb-2">🎯 النتيجة:</h4>
        <p class="text-sm">تطبيق 4 طرق فقط من العشرة وفر 33% من التكلفة الأصلية!</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: التوفير الذكي لا يعني التضحية بالجودة</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
      <p class="mb-4">
        التوفير في تكلفة نقل العفش فن يتطلب تخطيطاً وذكاءً، وليس مجرد البحث عن أرخص الأسعار. بتطبيق هذه الاستراتيجيات العشر، يمكنك توفير مئات الريالات مع الحصول على خدمة ممتازة.
      </p>
      
      <div class="bg-white p-4 rounded border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">🏆 المعادلة الرابحة:</h4>
        <p class="text-sm">تخطيط مبكر + مقارنة ذكية + تفاوض مهذب + توقيت مناسب = توفير كبير مع جودة عالية</p>
      </div>
      
      <div class="mt-4 p-4 bg-green-100 rounded">
        <p class="text-sm text-green-800"><strong>💡 البداية:</strong> ابدأ بتطبيق 3 طرق فقط من هذه القائمة في نقلتك القادمة، وستندهش من التوفير المحقق!</p>
      </div>
    </div>
  </section>

</article>
`;

export const GET: RequestHandler = async () => {
  return new Response(customContent, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}; 
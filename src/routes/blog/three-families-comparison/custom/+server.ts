import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">مقارنة بين ثلاث عائلات: تجارب مختلفة في نقل العفش بجدة</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-15">15 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>16 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/jeddah_family_moving.jpg" alt="مقارنة تجارب ثلاث عائلات في نقل العفش بجدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      كيف تختلف تجربة نقل العفش من عائلة لأخرى؟ نقدم لك مقارنة شاملة بين ثلاث عائلات سعودية مختلفة في جدة، كل منها اتخذت نهجاً مغايراً في عملية النقل. من العائلة الاقتصادية إلى العائلة الفاخرة، ومن التخطيط المبكر إلى القرارات العفوية، اكتشف الدروس المستفادة والنتائج المفاجئة.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <h3 class="font-bold text-blue-800 mb-2">📊 نظرة سريعة على النتائج</h3>
      <p>العائلة الاقتصادية دفعت 2,400 ريال، العائلة المتوسطة دفعت 4,800 ريال، والعائلة الفاخرة دفعت 8,500 ريال. لكن هل المبلغ الأعلى يعني دائماً تجربة أفضل؟ الإجابات ستفاجئك!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">العائلة الأولى: نهج "التوفير الذكي"</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <div class="flex items-center mb-4">
        <span class="bg-green-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">1</span>
        <h3 class="text-xl font-bold text-green-800">عائلة الأستاذ سالم - النهج الاقتصادي</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-green-700 mb-3">👨‍👩‍👧‍👦 ملف العائلة:</h4>
          <ul class="text-sm space-y-1">
            <li>• <strong>الحجم:</strong> 4 أفراد (الوالدان + طفلان)</li>
            <li>• <strong>المهنة:</strong> موظف حكومي</li>
            <li>• <strong>النقل:</strong> شقة 3 غرف → شقة 4 غرف</li>
            <li>• <strong>المسافة:</strong> 8 كيلومتر (الرحاب → الصالحية)</li>
            <li>• <strong>الميزانية:</strong> 2,500 ريال (حد أقصى)</li>
            <li>• <strong>وقت التخطيط:</strong> شهرين مسبقاً</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-green-700 mb-3">🎯 الاستراتيجية المتبعة:</h4>
          <ul class="text-sm space-y-1">
            <li>• بحث مكثف لمدة 3 أسابيع</li>
            <li>• مقارنة 12 شركة مختلفة</li>
            <li>• تغليف ذاتي لـ 80% من الأغراض</li>
            <li>• بيع الأثاث القديم مسبقاً</li>
            <li>• اختيار يوم الثلاثاء للنقل</li>
            <li>• تفاوض قوي مع الشركة</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 bg-white p-4 rounded border border-green-300">
        <h4 class="font-bold text-green-800 mb-3">💰 التكلفة النهائية: 2,400 ريال</h4>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>النقل الأساسي:</strong><br>
            1,800 ريال
          </div>
          <div>
            <strong>مواد التغليف:</strong><br>
            300 ريال
          </div>
          <div>
            <strong>رسوم إضافية:</strong><br>
            300 ريال
          </div>
        </div>
      </div>
      
      <div class="mt-4 bg-green-100 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">✅ النتائج الإيجابية:</h4>
        <ul class="text-sm space-y-1">
          <li>• توفير 800 ريال من الميزانية المخططة</li>
          <li>• تجربة تعليمية ممتازة للأطفال</li>
          <li>• شعور بالإنجاز والاستقلالية</li>
          <li>• تنظيم أفضل للأغراض</li>
        </ul>
        
        <h4 class="font-bold text-green-800 mb-2 mt-3">⚠️ التحديات المواجهة:</h4>
        <ul class="text-sm space-y-1">
          <li>• إجهاد بدني ونفسي من التغليف</li>
          <li>• استغراق 4 أسابيع في التحضير</li>
          <li>• بعض الأضرار الطفيفة للأغراض</li>
          <li>• ضغط الوقت في يوم النقل</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">العائلة الثانية: نهج "التوازن المعقول"</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <div class="flex items-center mb-4">
        <span class="bg-blue-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">2</span>
        <h3 class="text-xl font-bold text-blue-800">عائلة المهندس خالد - النهج المتوازن</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-blue-700 mb-3">👨‍👩‍👧‍👦 ملف العائلة:</h4>
          <ul class="text-sm space-y-1">
            <li>• <strong>الحجم:</strong> 5 أفراد (الوالدان + 3 أطفال)</li>
            <li>• <strong>المهنة:</strong> مهندس في شركة خاصة</li>
            <li>• <strong>النقل:</strong> فيلا صغيرة → فيلا متوسطة</li>
            <li>• <strong>المسافة:</strong> 15 كيلومتر (الحمراء → أبحر الشمالية)</li>
            <li>• <strong>الميزانية:</strong> 5,000 ريال (مرنة)</li>
            <li>• <strong>وقت التخطيط:</strong> شهر واحد</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-blue-700 mb-3">🎯 الاستراتيجية المتبعة:</h4>
          <ul class="text-sm space-y-1">
            <li>• اختيار شركة ذات سمعة جيدة</li>
            <li>• خدمة تغليف جزئية (القطع الحساسة)</li>
            <li>• تأمين شامل لجميع الأغراض</li>
            <li>• تغليف ذاتي للملابس والكتب</li>
            <li>• حجز خدمة فك وتركيب الأثاث</li>
            <li>• النقل يوم السبت (مريح للعائلة)</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 bg-white p-4 rounded border border-blue-300">
        <h4 class="font-bold text-blue-800 mb-3">💰 التكلفة النهائية: 4,800 ريال</h4>
        <div class="grid md:grid-cols-4 gap-3 text-sm">
          <div>
            <strong>النقل الأساسي:</strong><br>
            2,800 ريال
          </div>
          <div>
            <strong>التغليف الجزئي:</strong><br>
            800 ريال
          </div>
          <div>
            <strong>فك وتركيب:</strong><br>
            600 ريال
          </div>
          <div>
            <strong>التأمين الشامل:</strong><br>
            600 ريال
          </div>
        </div>
      </div>
      
      <div class="mt-4 bg-blue-100 p-4 rounded">
        <h4 class="font-bold text-blue-800 mb-2">✅ النتائج الإيجابية:</h4>
        <ul class="text-sm space-y-1">
          <li>• راحة بال كاملة وتقليل الإجهاد</li>
          <li>• حماية ممتازة للأغراض الثمينة</li>
          <li>• توفير الوقت والجهد</li>
          <li>• فريق محترف ومدرب</li>
          <li>• ضمان شامل ضد الأضرار</li>
        </ul>
        
        <h4 class="font-bold text-blue-800 mb-2 mt-3">⚠️ التحديات المواجهة:</h4>
        <ul class="text-sm space-y-1">
          <li>• تكلفة أعلى من المتوقع</li>
          <li>• تأخير ساعتين في الموعد المحدد</li>
          <li>• بعض سوء الفهم مع فريق العمل</li>
          <li>• ضرورة متابعة مستمرة للعملية</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">العائلة الثالثة: نهج "الخدمة المميزة"</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <div class="flex items-center mb-4">
        <span class="bg-purple-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">3</span>
        <h3 class="text-xl font-bold text-purple-800">عائلة الدكتور عبدالله - النهج الفاخر</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-purple-700 mb-3">👨‍👩‍👧‍👦 ملف العائلة:</h4>
          <ul class="text-sm space-y-1">
            <li>• <strong>الحجم:</strong> 6 أفراد (الوالدان + 4 أطفال)</li>
            <li>• <strong>المهنة:</strong> طبيب استشاري</li>
            <li>• <strong>النقل:</strong> فيلا فاخرة → قصر</li>
            <li>• <strong>المسافة:</strong> 25 كيلومتر (الزهراء → شمال جدة)</li>
            <li>• <strong>الميزانية:</strong> مفتوحة (الأولوية للجودة)</li>
            <li>• <strong>وقت التخطيط:</strong> أسبوعين فقط</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-purple-700 mb-3">🎯 الاستراتيجية المتبعة:</h4>
          <ul class="text-sm space-y-1">
            <li>• شركة نقل متخصصة في الأثاث الفاخر</li>
            <li>• خدمة VIP شاملة ومتكاملة</li>
            <li>• تغليف احترافي لجميع الأغراض</li>
            <li>• تأمين بقيمة كاملة</li>
            <li>• خدمة تنظيف ما بعد النقل</li>
            <li>• إشراف مدير مشروع مخصص</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 bg-white p-4 rounded border border-purple-300">
        <h4 class="font-bold text-purple-800 mb-3">💰 التكلفة النهائية: 8,500 ريال</h4>
        <div class="grid md:grid-cols-4 gap-3 text-sm">
          <div>
            <strong>النقل VIP:</strong><br>
            4,500 ريال
          </div>
          <div>
            <strong>التغليف الكامل:</strong><br>
            1,800 ريال
          </div>
          <div>
            <strong>خدمات إضافية:</strong><br>
            1,200 ريال
          </div>
          <div>
            <strong>التأمين المميز:</strong><br>
            1,000 ريال
          </div>
        </div>
      </div>
      
      <div class="mt-4 bg-purple-100 p-4 rounded">
        <h4 class="font-bold text-purple-800 mb-2">✅ النتائج الإيجابية:</h4>
        <ul class="text-sm space-y-1">
          <li>• تجربة نقل فاخرة ومريحة تماماً</li>
          <li>• عدم تحمل أي عبء أو مجهود</li>
          <li>• حماية استثنائية للقطع الثمينة</li>
          <li>• خدمة عملاء متميزة</li>
          <li>• إنجاز سريع ودقيق</li>
        </ul>
        
        <h4 class="font-bold text-purple-800 mb-2 mt-3">⚠️ التحديات المواجهة:</h4>
        <ul class="text-sm space-y-1">
          <li>• تكلفة عالية جداً</li>
          <li>• توقعات مرتفعة لم تتحقق كلياً</li>
          <li>• بعض التأخير في الخدمات الإضافية</li>
          <li>• شعور بالمبالغة في بعض الخدمات</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">مقارنة شاملة: الأرقام والحقائق</h2>
    
    <div class="overflow-x-auto mb-6">
      <table class="w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-right border-b">معيار المقارنة</th>
            <th class="px-4 py-3 text-right border-b">العائلة الاقتصادية</th>
            <th class="px-4 py-3 text-right border-b">العائلة المتوازنة</th>
            <th class="px-4 py-3 text-right border-b">العائلة الفاخرة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">التكلفة الإجمالية</td>
            <td class="px-4 py-3 border-b">2,400 ريال</td>
            <td class="px-4 py-3 border-b">4,800 ريال</td>
            <td class="px-4 py-3 border-b">8,500 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">وقت التحضير</td>
            <td class="px-4 py-3 border-b">شهرين</td>
            <td class="px-4 py-3 border-b">شهر واحد</td>
            <td class="px-4 py-3 border-b">أسبوعين</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">مدة النقل</td>
            <td class="px-4 py-3 border-b">8 ساعات</td>
            <td class="px-4 py-3 border-b">6 ساعات</td>
            <td class="px-4 py-3 border-b">4 ساعات</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">الأضرار المسجلة</td>
            <td class="px-4 py-3 border-b">3 قطع طفيفة</td>
            <td class="px-4 py-3 border-b">قطعة واحدة</td>
            <td class="px-4 py-3 border-b">لا يوجد</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">مستوى الرضا</td>
            <td class="px-4 py-3 border-b">85%</td>
            <td class="px-4 py-3 border-b">90%</td>
            <td class="px-4 py-3 border-b">95%</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">الإجهاد المقدر</td>
            <td class="px-4 py-3 border-b">عالي</td>
            <td class="px-4 py-3 border-b">متوسط</td>
            <td class="px-4 py-3 border-b">منخفض</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold">التوصية للآخرين</td>
            <td class="px-4 py-3">للميزانية المحدودة</td>
            <td class="px-4 py-3">للعائلات المتوسطة</td>
            <td class="px-4 py-3">لمحبي الرفاهية</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-green-100 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">💡 نصائح من العائلة الاقتصادية:</h4>
        <ul class="text-sm space-y-1">
          <li>• ابدأ التخطيط مبكراً</li>
          <li>• قارن أكثر من 10 شركات</li>
          <li>• تعلم تقنيات التغليف الأساسية</li>
          <li>• استغل أوقات الخصومات</li>
        </ul>
      </div>
      <div class="bg-blue-100 p-4 rounded">
        <h4 class="font-bold text-blue-800 mb-2">💡 نصائح من العائلة المتوازنة:</h4>
        <ul class="text-sm space-y-1">
          <li>• اختر شركة بسمعة طيبة</li>
          <li>• استثمر في التأمين الشامل</li>
          <li>• احجز الخدمات الأساسية فقط</li>
          <li>• تابع العملية بنفسك</li>
        </ul>
      </div>
      <div class="bg-purple-100 p-4 rounded">
        <h4 class="font-bold text-purple-800 mb-2">💡 نصائح من العائلة الفاخرة:</h4>
        <ul class="text-sm space-y-1">
          <li>• لا تتردد في دفع أكثر للجودة</li>
          <li>• اطلب مدير مشروع مخصص</li>
          <li>• تأكد من التأمين الكامل</li>
          <li>• اختبر الشركة مع قطعة واحدة أولاً</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الدروس المستفادة: أيهم كان الأذكى؟</h2>
    
    <div class="space-y-6">
      <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 class="text-xl font-bold text-yellow-800 mb-4">🏆 تحليل القيمة مقابل المال</h3>
        
        <div class="grid md:grid-cols-3 gap-4 mb-4">
          <div class="text-center">
            <div class="bg-green-200 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span class="text-green-800 font-bold">85%</span>
            </div>
            <h4 class="font-semibold text-green-800">العائلة الاقتصادية</h4>
            <p class="text-sm">قيمة ممتازة للمال مع تحمل بعض الإجهاد</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-200 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span class="text-blue-800 font-bold">90%</span>
            </div>
            <h4 class="font-semibold text-blue-800">العائلة المتوازنة</h4>
            <p class="text-sm">أفضل توازن بين السعر والراحة</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-200 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span class="text-purple-800 font-bold">75%</span>
            </div>
            <h4 class="font-semibold text-purple-800">العائلة الفاخرة</h4>
            <p class="text-sm">خدمة ممتازة لكن بتكلفة مرتفعة جداً</p>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-yellow-300">
          <h4 class="font-bold text-yellow-800 mb-2">🥇 الفائز: العائلة المتوازنة</h4>
          <p class="text-sm">حققت أفضل نتيجة من ناحية توازن التكلفة، الجودة، وراحة البال. استطاعت تجنب الإجهاد الزائد للنهج الاقتصادي والتكلفة المفرطة للنهج الفاخر.</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold mb-4">📋 دليل اختيار النهج المناسب لك</h3>
        
        <div class="space-y-4">
          <div class="border border-green-300 p-4 rounded">
            <h4 class="font-bold text-green-700 mb-2">✅ اختر النهج الاقتصادي إذا:</h4>
            <ul class="text-sm space-y-1">
              <li>• ميزانيتك محدودة (أقل من 3,000 ريال)</li>
              <li>• لديك وقت كافي للتحضير (شهرين+)</li>
              <li>• تستمتع بالعمل اليدوي والتنظيم</li>
              <li>• أثاثك بسيط وغير معقد</li>
              <li>• العائلة صغيرة ويمكنها المشاركة</li>
            </ul>
          </div>
          
          <div class="border border-blue-300 p-4 rounded">
            <h4 class="font-bold text-blue-700 mb-2">✅ اختر النهج المتوازن إذا:</h4>
            <ul class="text-sm space-y-1">
              <li>• ميزانيتك متوسطة (3,000-6,000 ريال)</li>
              <li>• تريد توازناً بين السعر والراحة</li>
              <li>• لديك بعض القطع الثمينة</li>
              <li>• وقتك محدود للتحضير</li>
              <li>• تفضل الأمان على التوفير</li>
            </ul>
          </div>
          
          <div class="border border-purple-300 p-4 rounded">
            <h4 class="font-bold text-purple-700 mb-2">✅ اختر النهج الفاخر إذا:</h4>
            <ul class="text-sm space-y-1">
              <li>• الميزانية ليست مشكلة (+6,000 ريال)</li>
              <li>• لديك أثاث ثمين ومعقد</li>
              <li>• وقتك ثمين ولا تريد إجهاد</li>
              <li>• تقدر الخدمة المميزة</li>
              <li>• تخطط لنقل مرة واحدة فقط</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: لا يوجد نهج "خاطئ"</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <p class="mb-4">
        الدرس الأهم من مقارنة هذه العائلات الثلاث هو أن كل نهج له مميزاته حسب الظروف الشخصية. العائلة الاقتصادية نجحت في توفير المال مع تحمل الجهد، العائلة المتوازنة حققت أفضل قيمة شاملة، والعائلة الفاخرة استمتعت بتجربة مريحة تماماً.
      </p>
      
      <div class="bg-white p-4 rounded border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">💡 النصيحة الذهبية:</h4>
        <p class="text-sm">قبل اختيار نهجك، اسأل نفسك: ما هو أهم شيء بالنسبة لي - التوفير، الراحة، أم الجودة؟ ثم اختر النهج الذي يتماشى مع أولوياتك وظروفك. لا تقلد الآخرين، بل اتبع ما يناسب عائلتك.</p>
      </div>
      
      <div class="mt-4 p-4 bg-blue-100 rounded">
        <p class="text-sm text-blue-800"><strong>🔗 خطوتك التالية:</strong> استخدم <a href="/calculator" class="underline font-semibold">حاسبة تكلفة النقل</a> لتحديد التكلفة المتوقعة لكل نهج حسب حالتك الخاصة، ثم اتخذ قرارك بناءً على معلومات دقيقة.</p>
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
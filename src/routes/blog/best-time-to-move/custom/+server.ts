import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">أفضل وقت لنقل العفش في جدة: دليل التوقيت المثالي لتوفير المال والجهد</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-02">2 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>11 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/jeddah_city_moving_tips.jpg" alt="أفضل وقت لنقل العفش في جدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل تعلم أن اختيار التوقيت المناسب لنقل عفشك يمكن أن يوفر عليك 40% من التكلفة ويضمن خدمة أفضل؟ اكتشف الأسرار التي تعرفها شركات النقل عن أفضل وأسوأ أوقات النقل في جدة.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <h3 class="font-bold text-blue-800 mb-2">⏰ حقيقة مهمة</h3>
      <p>النقل يوم الثلاثاء في يناير يكلف 35% أقل من النقل يوم الخميس في يونيو! التوقيت يحدث فرقاً كبيراً.</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التقويم السنوي للنقل: متى تنقل ومتى تتجنب؟</h2>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 class="font-bold text-green-800 mb-3">🌟 الأوقات الذهبية (توفير 25-40%)</h3>
        <div class="space-y-2 text-sm">
          <div class="bg-white p-2 rounded border border-green-300">
            <strong>يناير - فبراير:</strong> الموسم الأهدأ
          </div>
          <div class="bg-white p-2 rounded border border-green-300">
            <strong>نوفمبر - ديسمبر:</strong> ما عدا العيد
          </div>
          <div class="bg-white p-2 rounded border border-green-300">
            <strong>منتصف مارس:</strong> بعد الامتحانات
          </div>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 class="font-bold text-yellow-800 mb-3">⚡ الأوقات المعتدلة (توفير 10-25%)</h3>
        <div class="space-y-2 text-sm">
          <div class="bg-white p-2 rounded border border-yellow-300">
            <strong>أبريل - مايو:</strong> ربيع مريح
          </div>
          <div class="bg-white p-2 rounded border border-yellow-300">
            <strong>سبتمبر - أكتوبر:</strong> بعد الصيف
          </div>
          <div class="bg-white p-2 rounded border border-yellow-300">
            <strong>أوائل مارس:</strong> نشاط محدود
          </div>
        </div>
      </div>
      
      <div class="bg-red-50 p-4 rounded-lg border border-red-200">
        <h3 class="font-bold text-red-800 mb-3">🔥 أوقات الذروة (أسعار مرتفعة +30-50%)</h3>
        <div class="space-y-2 text-sm">
          <div class="bg-white p-2 rounded border border-red-300">
            <strong>يونيو - أغسطس:</strong> العطلة الصيفية
          </div>
          <div class="bg-white p-2 rounded border border-red-300">
            <strong>عيد الأضحى:</strong> ذروة النشاط
          </div>
          <div class="bg-white p-2 rounded border border-red-300">
            <strong>نهاية أغسطس:</strong> العودة للمدارس
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تحليل مفصل: لماذا هذه التوقيتات؟</h2>
    
    <div class="space-y-6">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">❄️ الشتاء (يناير - فبراير): الموسم الذهبي</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-gray-700 mb-3">المزايا:</h4>
            <ul class="text-sm space-y-1">
              <li>• أقل طلب على خدمات النقل</li>
              <li>• أسعار منخفضة وعروض جذابة</li>
              <li>• توفر أفضل الشركات والمواعيد</li>
              <li>• طقس معتدل (15-25°)</li>
              <li>• مرونة في التخطيط</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-700 mb-3">العيوب البسيطة:</h4>
            <ul class="text-sm space-y-1">
              <li>• احتمالية أمطار خفيفة</li>
              <li>• ساعات نهار أقصر</li>
              <li>• بعض المدارس في دوام</li>
            </ul>
            
            <div class="mt-3 p-3 bg-green-100 rounded">
              <p class="text-sm font-semibold text-green-800">التوفير المتوقع: 25-40% من السعر العادي</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">☀️ الصيف (يونيو - أغسطس): موسم الذروة</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-gray-700 mb-3">لماذا أسعار مرتفعة؟</h4>
            <ul class="text-sm space-y-1">
              <li>• العطلة الصيفية للمدارس</li>
              <li>• عودة المبتعثين والمسافرين</li>
              <li>• تجديد عقود الإيجار</li>
              <li>• طلب مرتفع جداً</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-700 mb-3">التحديات:</h4>
            <ul class="text-sm space-y-1">
              <li>• درجات حرارة عالية (35-45°)</li>
              <li>• صعوبة الحجز</li>
              <li>• أسعار مرتفعة</li>
              <li>• جودة خدمة أقل أحياناً</li>
            </ul>
            
            <div class="mt-3 p-3 bg-red-100 rounded">
              <p class="text-sm font-semibold text-red-800">زيادة التكلفة: 30-50% عن السعر العادي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أفضل أيام الأسبوع للنقل</h2>
    
    <div class="overflow-x-auto">
      <table class="w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-right border-b">اليوم</th>
            <th class="px-4 py-3 text-right border-b">مستوى الطلب</th>
            <th class="px-4 py-3 text-right border-b">السعر</th>
            <th class="px-4 py-3 text-right border-b">التوصية</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-green-50">
            <td class="px-4 py-3 border-b font-semibold">الثلاثاء</td>
            <td class="px-4 py-3 border-b">منخفض جداً</td>
            <td class="px-4 py-3 border-b text-green-600">-15 إلى -25%</td>
            <td class="px-4 py-3 border-b">ممتاز ⭐⭐⭐⭐⭐</td>
          </tr>
          <tr class="bg-green-50">
            <td class="px-4 py-3 border-b font-semibold">الأربعاء</td>
            <td class="px-4 py-3 border-b">منخفض</td>
            <td class="px-4 py-3 border-b text-green-600">-10 إلى -20%</td>
            <td class="px-4 py-3 border-b">ممتاز ⭐⭐⭐⭐⭐</td>
          </tr>
          <tr class="bg-yellow-50">
            <td class="px-4 py-3 border-b font-semibold">الاثنين</td>
            <td class="px-4 py-3 border-b">متوسط</td>
            <td class="px-4 py-3 border-b text-yellow-600">-5 إلى -10%</td>
            <td class="px-4 py-3 border-b">جيد ⭐⭐⭐⭐</td>
          </tr>
          <tr class="bg-yellow-50">
            <td class="px-4 py-3 border-b font-semibold">الأحد</td>
            <td class="px-4 py-3 border-b">متوسط</td>
            <td class="px-4 py-3 border-b">عادي</td>
            <td class="px-4 py-3 border-b">مقبول ⭐⭐⭐</td>
          </tr>
          <tr class="bg-red-50">
            <td class="px-4 py-3 border-b font-semibold">الخميس</td>
            <td class="px-4 py-3 border-b">عالي</td>
            <td class="px-4 py-3 border-b text-red-600">+10 إلى +20%</td>
            <td class="px-4 py-3 border-b">تجنب ⭐⭐</td>
          </tr>
          <tr class="bg-red-50">
            <td class="px-4 py-3 border-b font-semibold">الجمعة</td>
            <td class="px-4 py-3 border-b">عالي جداً</td>
            <td class="px-4 py-3 border-b text-red-600">+20 إلى +40%</td>
            <td class="px-4 py-3 border-b">تجنب ⭐</td>
          </tr>
          <tr class="bg-red-50">
            <td class="px-4 py-3 font-semibold">السبت</td>
            <td class="px-4 py-3">عالي جداً</td>
            <td class="px-4 py-3 text-red-600">+25 إلى +50%</td>
            <td class="px-4 py-3">تجنب ⭐</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أفضل أوقات اليوم للنقل</h2>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
        <h3 class="font-bold text-orange-800 mb-3">🌅 الصباح الباكر (6-9 ص)</h3>
        <div class="space-y-2">
          <div class="bg-white p-2 rounded text-sm">
            <strong>المزايا:</strong> طقس بارد، طاقة عالية، تجنب الزحام
          </div>
          <div class="bg-white p-2 rounded text-sm">
            <strong>التحدي:</strong> استيقاظ مبكر، قد تحتاج إذن الجيران
          </div>
          <div class="bg-green-100 p-2 rounded text-sm">
            <strong>التوصية:</strong> ممتاز للنقل في الصيف
          </div>
        </div>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 class="font-bold text-blue-800 mb-3">☀️ الصباح (9-12 ظ)</h3>
        <div class="space-y-2">
          <div class="bg-white p-2 rounded text-sm">
            <strong>المزايا:</strong> وقت مثالي، إضاءة جيدة، نشاط العمال
          </div>
          <div class="bg-white p-2 rounded text-sm">
            <strong>التحدي:</strong> قد يصادف زحمة مدارس
          </div>
          <div class="bg-green-100 p-2 rounded text-sm">
            <strong>التوصية:</strong> الأفضل على الإطلاق
          </div>
        </div>
      </div>
      
      <div class="bg-red-50 p-4 rounded-lg border border-red-200">
        <h3 class="font-bold text-red-800 mb-3">🌙 المساء (5-8 م)</h3>
        <div class="space-y-2">
          <div class="bg-white p-2 rounded text-sm">
            <strong>المزايا:</strong> مناسب للعاملين، طقس أبرد
          </div>
          <div class="bg-white p-2 rounded text-sm">
            <strong>التحدي:</strong> زحمة مرورية، إرهاق العمال، رسوم إضافية
          </div>
          <div class="bg-yellow-100 p-2 rounded text-sm">
            <strong>التوصية:</strong> مقبول مع رسوم إضافية (+15%)
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأوقات الخاصة: متى تتجنب النقل تماماً؟</h2>
    
    <div class="space-y-4">
      <div class="bg-red-100 p-4 rounded-lg border border-red-300">
        <h3 class="font-bold text-red-800 mb-3">🚫 أوقات يُفضل تجنبها</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-red-700 mb-2">المناسبات الدينية:</h4>
            <ul class="text-sm space-y-1">
              <li>• عيد الأضحى (أسبوع كامل)</li>
              <li>• عيد الفطر (3 أيام)</li>
              <li>• العشر الأواخر من رمضان</li>
              <li>• أيام الحج</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-red-700 mb-2">المواسم الدراسية:</h4>
            <ul class="text-sm space-y-1">
              <li>• آخر أسبوع في أغسطس</li>
              <li>• أول أسبوع من العام الدراسي</li>
              <li>• فترة الامتحانات النهائية</li>
              <li>• بداية الفصل الثاني</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
        <h3 class="font-bold text-yellow-800 mb-3">⚠️ أوقات تحتاج تخطيط إضافي</h3>
        <ul class="text-sm space-y-1">
          <li>• شهر رمضان: أوقات عمل مختلفة، قد تحتاج للحجز المبكر</li>
          <li>• الأجازات الوطنية: توفر محدود للشركات</li>
          <li>• موسم الأمطار (نوفمبر-يناير): احتياط للطقس</li>
          <li>• فترة العمرة (رجب-شعبان): زحمة في بعض الأحياء</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">استراتيجية التوقيت المثالي</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">📅 خطة الـ 90 يوم للنقل الأمثل</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">3 أشهر قبل النقل:</h4>
          <ul class="text-sm space-y-1">
            <li>• حدد الشهر المثالي حسب الجدول أعلاه</li>
            <li>• تجنب المواسم المزدحمة</li>
            <li>• خطط لتكون مرناً في التواريخ</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">شهر قبل النقل:</h4>
          <ul class="text-sm space-y-1">
            <li>• احجز في أيام الثلاثاء أو الأربعاء</li>
            <li>• اختر وقت الصباح (9-12 ظهر)</li>
            <li>• تأكد من خلو اليوم من المناسبات</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">أسبوع قبل النقل:</h4>
          <ul class="text-sm space-y-1">
            <li>• تابع حالة الطقس</li>
            <li>• أكد الموعد مع الشركة</li>
            <li>• حضر خطة بديلة للطوارئ</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">حاسبة التوفير حسب التوقيت</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-gray-800 mb-4">💰 مثال: نقل شقة تكلفتها الأساسية 4,000 ريال</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">التوقيت</th>
              <th class="px-4 py-3 text-right border-b">نسبة التغيير</th>
              <th class="px-4 py-3 text-right border-b">التكلفة النهائية</th>
              <th class="px-4 py-3 text-right border-b">الفرق</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-green-50">
              <td class="px-4 py-3 border-b">ثلاثاء في يناير، صباحاً</td>
              <td class="px-4 py-3 border-b text-green-600">-35%</td>
              <td class="px-4 py-3 border-b font-bold">2,600 ريال</td>
              <td class="px-4 py-3 border-b text-green-600">-1,400 ريال</td>
            </tr>
            <tr class="bg-yellow-50">
              <td class="px-4 py-3 border-b">اثنين في مايو، صباحاً</td>
              <td class="px-4 py-3 border-b text-yellow-600">-15%</td>
              <td class="px-4 py-3 border-b font-bold">3,400 ريال</td>
              <td class="px-4 py-3 border-b text-yellow-600">-600 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">أحد عادي، صباحاً</td>
              <td class="px-4 py-3 border-b">0%</td>
              <td class="px-4 py-3 border-b font-bold">4,000 ريال</td>
              <td class="px-4 py-3 border-b">المرجع</td>
            </tr>
            <tr class="bg-red-50">
              <td class="px-4 py-3 border-b">خميس في يوليو، مساءً</td>
              <td class="px-4 py-3 border-b text-red-600">+45%</td>
              <td class="px-4 py-3 border-b font-bold">5,800 ريال</td>
              <td class="px-4 py-3 border-b text-red-600">+1,800 ريال</td>
            </tr>
            <tr class="bg-red-50">
              <td class="px-4 py-3">جمعة في أغسطس</td>
              <td class="px-4 py-3 text-red-600">+60%</td>
              <td class="px-4 py-3 font-bold">6,400 ريال</td>
              <td class="px-4 py-3 text-red-600">+2,400 ريال</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-4 bg-green-100 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">🎯 النتيجة المذهلة:</h4>
        <p class="text-sm">الفرق بين أفضل وأسوأ توقيت يصل إلى 3,800 ريال لنفس الخدمة!</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: التوقيت المناسب = نصف النجاح</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
      <p class="mb-4">
        اختيار التوقيت المناسب لنقل العفش ليس مجرد تفضيل شخصي، بل استراتيجية ذكية توفر المال وتضمن خدمة أفضل. بالتخطيط المسبق واختيار الأوقات المناسبة، يمكنك تحويل تجربة النقل من عبء مالي إلى قرار اقتصادي ذكي.
      </p>
      
      <div class="bg-white p-4 rounded border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">⏰ القاعدة الذهبية للتوقيت:</h4>
        <p class="text-sm">كلما قل الطلب على الخدمة، كانت الجودة أعلى والسعر أقل. خطط مسبقاً واختر بذكاء!</p>
      </div>
      
      <div class="mt-4 p-4 bg-green-100 rounded">
        <p class="text-sm text-green-800"><strong>🎯 البداية الآن:</strong> حدد موعد نقلك المبدئي باستخدام <a href="/calculator" class="underline font-semibold">حاسبة التوقيت المثالي</a> واحصل على أفضل العروض.</p>
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
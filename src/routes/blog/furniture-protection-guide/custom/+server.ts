import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">دليل حماية الأثاث الشامل: تقنيات التغليف الاحترافية لنقل آمن في جدة</h1>
    <div class="text-gray-600">
      <time datetime="2025-09-01">1 سبتمبر 2025</time>
      <span class="mx-2">•</span>
      <span>13 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/protect_furniture_moving_jeddah.jpg" alt="حماية الأثاث أثناء النقل" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      90% من أضرار الأثاث أثناء النقل يمكن تجنبها بالتغليف الصحيح! هذا الدليل المتخصص يكشف لك أسرار المحترفين في حماية كل قطعة أثاث، من التقنيات البسيطة إلى الحلول المبتكرة، مع توفير المال والحصول على نتائج احترافية.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400" style="background-color: #DBEAFE; border-color: #3B82F6;">
      <h3 class="font-bold mb-2" style="color: #1D4ED8;">💡 معلومة ذهبية</h3>
      <p>الاستثمار في مواد التغليف الجيدة يوفر عليك آلاف الريالات من تكاليف الإصلاح والاستبدال!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">مواد التغليف الأساسية ومصادرها في جدة</h2>
    
    <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
      <h3 class="text-xl font-bold text-yellow-800 mb-4">🛍️ قائمة التسوق الذكية</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-yellow-200 rounded-lg">
          <thead class="bg-yellow-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">المادة</th>
              <th class="px-4 py-3 text-right border-b">الاستخدام</th>
              <th class="px-4 py-3 text-right border-b">السعر التقريبي</th>
              <th class="px-4 py-3 text-right border-b">أماكن الشراء في جدة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">ورق الفقاعات</td>
              <td class="px-4 py-3 border-b">الأجهزة، الزجاج، اللوحات</td>
              <td class="px-4 py-3 border-b">25-40 ريال/لفة</td>
              <td class="px-4 py-3 border-b">ساكو، إكسترا، محلات التغليف</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">بطانيات النقل</td>
              <td class="px-4 py-3 border-b">الأثاث الخشبي الكبير</td>
              <td class="px-4 py-3 border-b">50-80 ريال/قطعة</td>
              <td class="px-4 py-3 border-b">محلات نقل العفش، أسواق الجملة</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">الكرتون المقوى</td>
              <td class="px-4 py-3 border-b">الصناديق، الفواصل</td>
              <td class="px-4 py-3 border-b">5-20 ريال/صندوق</td>
              <td class="px-4 py-3 border-b">مصانع الكرتون، الدانوب</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">البلاستيك المطاطي</td>
              <td class="px-4 py-3 border-b">تثبيت الأبواب والأدراج</td>
              <td class="px-4 py-3 border-b">15-25 ريال/لفة</td>
              <td class="px-4 py-3 border-b">محلات مواد البناء</td>
            </tr>
            <tr>
              <td class="px-4 py-3 font-semibold">أكياس التخزين الكبيرة</td>
              <td class="px-4 py-3">المفروشات، الملابس</td>
              <td class="px-4 py-3">30-50 ريال/مجموعة</td>
              <td class="px-4 py-3">ايكيا، هوم سنتر</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تقنيات التغليف حسب نوع الأثاث</h2>
    
    <div class="space-y-6">
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">🛋️ الأثاث الخشبي</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-3">طاولات الطعام:</h4>
            <ol class="text-sm space-y-1">
              <li>1. فك الأرجل إن أمكن (احتفظ بالبراغي في كيس)</li>
              <li>2. لف كل رجل منفصلة بورق الفقاعات</li>
              <li>3. ضع كرتون على السطح العلوي</li>
              <li>4. غلف بالبطانية وثبت بالشريط</li>
              <li>5. ضع ملصق "هش - الأعلى" بوضوح</li>
            </ol>
          </div>
          
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-3">الخزائن والدواليب:</h4>
            <ul class="text-sm space-y-1">
              <li>• أفرغ المحتويات تماماً</li>
              <li>• ثبت الأبواب بشريط مطاطي (لا لاصق)</li>
              <li>• ضع فقاعات على الزوايا</li>
              <li>• لف بطبقتين من البلاستيك</li>
              <li>• استخدم واقيات الزوايا الكرتونية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 class="text-xl font-bold text-purple-800 mb-4">🪑 المقاعد والكنب</h3>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">الكنب الجلدي:</h4>
            <ul class="text-sm space-y-1">
              <li>⚠️ تجنب البلاستيك المباشر (يسبب الرطوبة والتشقق)</li>
              <li>✓ استخدم بطانيات قطنية أولاً</li>
              <li>✓ غلف بالبلاستيك فوق البطانية فقط</li>
              <li>✓ لا تضع أي شيء فوق الجلد</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">الكراسي القماشية:</h4>
            <ul class="text-sm space-y-1">
              <li>• نظف وجفف تماماً قبل التغليف</li>
              <li>• استخدم أكياس الأثاث الكبيرة</li>
              <li>• ضع كرات النفتالين للحماية من الحشرات</li>
              <li>• يمكن تكديس 2-3 كراسي معاً</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-red-50 p-6 rounded-lg border border-red-200">
        <h3 class="text-xl font-bold text-red-800 mb-4">🖼️ القطع الحساسة والقيمة</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">المرايا والزجاج:</h4>
            <ul class="text-sm space-y-1">
              <li>• شريط X على السطح</li>
              <li>• طبقات فقاعات متعددة</li>
              <li>• صندوق خشبي مخصص</li>
              <li>• علامة "زجاج" بارزة</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">اللوحات الفنية:</h4>
            <ul class="text-sm space-y-1">
              <li>• ورق حريري خالٍ من الأحماض</li>
              <li>• إطار كرتوني مقوى</li>
              <li>• تخزين عمودي دائماً</li>
              <li>• فصل كل لوحة</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">التحف والمزهريات:</h4>
            <ul class="text-sm space-y-1">
              <li>• حشو داخلي بالورق</li>
              <li>• لف فردي بالفقاعات</li>
              <li>• صندوق مبطن جيداً</li>
              <li>• وسائد هوائية حول القطعة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تقنيات متقدمة للحماية الفائقة</h2>
    
    <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <h3 class="text-xl font-bold text-indigo-800 mb-4">🔬 أساليب المحترفين</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-3">تقنية "الصندوق داخل الصندوق":</h4>
          <p class="text-sm mb-2">للقطع الثمينة جداً والهشة:</p>
          <ol class="text-sm space-y-1">
            <li>1. ضع القطعة في صندوق صغير محكم مع حشوة</li>
            <li>2. ضع الصندوق الصغير في صندوق أكبر</li>
            <li>3. املأ الفراغ بالفول السوداني الرغوي</li>
            <li>4. اختبر بالهز - لا يجب أن تتحرك القطعة</li>
          </ol>
        </div>
        
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-3">الحماية المناخية:</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-semibold mb-1">للخشب الثمين:</h5>
              <ul class="text-sm space-y-1">
                <li>• أكياس السيليكا لامتصاص الرطوبة</li>
                <li>• تغليف بورق الشمع</li>
                <li>• تجنب التعرض للشمس</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-1">للإلكترونيات:</h5>
              <ul class="text-sm space-y-1">
                <li>• أكياس مضادة للكهرباء الساكنة</li>
                <li>• مؤشرات الصدمة</li>
                <li>• عزل حراري خاص</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأخطاء الشائعة وكيفية تجنبها</h2>
    
    <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
      <h3 class="text-xl font-bold text-orange-800 mb-4">⚠️ احذر من هذه الممارسات</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded border border-orange-300">
          <h4 class="font-bold text-orange-700 mb-3">❌ أخطاء قاتلة:</h4>
          <ul class="text-sm space-y-2">
            <li><strong>الصحف للتغليف:</strong> الحبر يترك بقعاً دائمة</li>
            <li><strong>الإفراط في الحشو:</strong> قد يسبب ضغطاً وكسراً</li>
            <li><strong>ترك فراغات:</strong> يسمح بالحركة والاصطدام</li>
            <li><strong>خلط الثقيل مع الخفيف:</strong> سحق مضمون</li>
            <li><strong>تجاهل التسميات:</strong> فوضى عند الوصول</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-orange-300">
          <h4 class="font-bold text-orange-700 mb-3">✅ الممارسات الصحيحة:</h4>
          <ul class="text-sm space-y-2">
            <li><strong>ورق التغليف الأبيض:</strong> نظيف وآمن</li>
            <li><strong>الحشو المتوازن:</strong> ثابت دون ضغط</li>
            <li><strong>ملء كل الفراغات:</strong> بمواد مناسبة</li>
            <li><strong>الفصل بالوزن:</strong> ثقيل أسفل، خفيف أعلى</li>
            <li><strong>نظام ترقيم واضح:</strong> مع قائمة مفصلة</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل التغليف السريع للطوارئ</h2>
    
    <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
      <h3 class="text-xl font-bold text-teal-800 mb-4">⏱️ عندما يكون الوقت ضيقاً</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-2">بدائل سريعة فعالة:</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold mb-1">بدلاً من ورق الفقاعات:</p>
              <ul class="space-y-1">
                <li>• المناشف والبطانيات</li>
                <li>• الملابس الشتوية</li>
                <li>• أكياس النوم القديمة</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-1">بدلاً من الصناديق:</p>
              <ul class="space-y-1">
                <li>• حقائب السفر</li>
                <li>• سلال الغسيل</li>
                <li>• الأدراج نفسها (مغلفة)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">حماية الأثاث في مناخ جدة</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">🌡️ التحديات المناخية الخاصة</h3>
      
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الرطوبة العالية:</h4>
          <ul class="text-sm space-y-1">
            <li>• استخدم مزيلات الرطوبة</li>
            <li>• تغليف مزدوج للخشب</li>
            <li>• تهوية قبل التخزين</li>
            <li>• فحص دوري أثناء النقل</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الحرارة الشديدة:</h4>
          <ul class="text-sm space-y-1">
            <li>• تجنب النقل وقت الظهيرة</li>
            <li>• عزل حراري للإلكترونيات</li>
            <li>• شاحنات مكيفة للقطع الحساسة</li>
            <li>• حماية من أشعة الشمس المباشرة</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الغبار والرمال:</h4>
          <ul class="text-sm space-y-1">
            <li>• إغلاق محكم لكل القطع</li>
            <li>• طبقة بلاستيك خارجية</li>
            <li>• تنظيف قبل التغليف</li>
            <li>• فلاتر للأجهزة الإلكترونية</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">حلول مبتكرة موفرة للتكلفة</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <h3 class="text-xl font-bold text-green-800 mb-4">💰 وفر المال بذكاء</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-3">مصادر مجانية أو رخيصة:</h4>
          <ul class="text-sm space-y-1">
            <li>🎁 <strong>صناديق من السوبرماركت:</strong> اطلبها مساءً قبل رميها</li>
            <li>📰 <strong>جرائد من المكاتب:</strong> للحشو (ليس للتغليف المباشر)</li>
            <li>🛍️ <strong>أكياس التسوق القماشية:</strong> لحماية الأشياء الصغيرة</li>
            <li>👕 <strong>ملابس قديمة:</strong> أفضل حشوة طبيعية</li>
            <li>🥚 <strong>كراتين البيض:</strong> مثالية للأشياء الصغيرة الهشة</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-3">صنع مواد حماية منزلية:</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold mb-1">واقيات الزوايا:</p>
              <p>قص كرتون مقوى على شكل L وثبته بشريط</p>
            </div>
            <div>
              <p class="font-semibold mb-1">وسائد هوائية:</p>
              <p>أكياس بلاستيك منفوخة ومغلقة بإحكام</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">قائمة فحص الحماية النهائية</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-800 mb-4">✅ تأكد من كل خطوة</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-700 mb-3">قبل التغليف:</h4>
          <ul class="text-sm space-y-1">
            <li>☐ تنظيف وتجفيف كل قطعة</li>
            <li>☐ تصوير الحالة الحالية</li>
            <li>☐ فك ما يمكن فكه</li>
            <li>☐ جمع مواد التغليف المناسبة</li>
            <li>☐ تجهيز منطقة عمل واسعة</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-700 mb-3">أثناء التغليف:</h4>
          <ul class="text-sm space-y-1">
            <li>☐ البدء من الداخل للخارج</li>
            <li>☐ عدم ترك أي سطح مكشوف</li>
            <li>☐ التثبيت الجيد دون إفراط</li>
            <li>☐ وضع علامات واضحة</li>
            <li>☐ توثيق المحتويات</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4 bg-gray-100 p-4 rounded">
        <h4 class="font-bold text-gray-700 mb-2">النصيحة الذهبية:</h4>
        <p class="text-sm">"إذا كنت تعتقد أن التغليف كافٍ، أضف طبقة أخرى!" - خبير نقل بخبرة 20 عاماً</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دراسة حالة: مقارنة طرق الحماية</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">📊 نتائج واقعية</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-purple-200 rounded-lg">
          <thead class="bg-purple-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">طريقة الحماية</th>
              <th class="px-4 py-3 text-right border-b">التكلفة</th>
              <th class="px-4 py-3 text-right border-b">مستوى الحماية</th>
              <th class="px-4 py-3 text-right border-b">الوقت المطلوب</th>
              <th class="px-4 py-3 text-right border-b">نسبة الأضرار</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b">بدون حماية</td>
              <td class="px-4 py-3 border-b">0 ريال</td>
              <td class="px-4 py-3 border-b">⭐</td>
              <td class="px-4 py-3 border-b">0 دقيقة</td>
              <td class="px-4 py-3 border-b text-red-600">35-45%</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">حماية أساسية</td>
              <td class="px-4 py-3 border-b">100-200 ريال</td>
              <td class="px-4 py-3 border-b">⭐⭐⭐</td>
              <td class="px-4 py-3 border-b">2-3 ساعات</td>
              <td class="px-4 py-3 border-b text-orange-600">10-15%</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">حماية متقدمة</td>
              <td class="px-4 py-3 border-b">300-500 ريال</td>
              <td class="px-4 py-3 border-b">⭐⭐⭐⭐</td>
              <td class="px-4 py-3 border-b">4-5 ساعات</td>
              <td class="px-4 py-3 border-b text-yellow-600">3-5%</td>
            </tr>
            <tr>
              <td class="px-4 py-3">حماية احترافية</td>
              <td class="px-4 py-3">600+ ريال</td>
              <td class="px-4 py-3">⭐⭐⭐⭐⭐</td>
              <td class="px-4 py-3">6+ ساعات</td>
              <td class="px-4 py-3 text-green-600">&lt;1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: استثمر في الحماية.. وفر في الإصلاح</h2>
    
    <div class="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg border-r-4 border-blue-400">
      <p class="mb-4">
        حماية الأثاث ليست مجرد لف وتغليف، بل فن وعلم يتطلب المعرفة والممارسة. الوقت والمال المستثمر في الحماية الصحيحة يعود عليك أضعافاً من خلال الحفاظ على ممتلكاتك وتجنب تكاليف الإصلاح أو الاستبدال.
      </p>
      
      <div class="bg-white p-4 rounded border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">💎 الخلاصة الذهبية:</h4>
        <p class="text-sm">كل ريال تنفقه على مواد الحماية يوفر عليك 10 ريالات من تكاليف الإصلاح. وكل دقيقة إضافية في التغليف تحمي ذكرياتك الثمينة لسنوات قادمة.</p>
      </div>
      
      <div class="mt-4 p-4 bg-green-100 rounded">
        <p class="text-sm text-green-800"><strong>🌟 نصيحة أخيرة:</strong> أثاثك يحكي قصة حياتك.. احمِه جيداً ليواصل روايتها في منزلك الجديد!</p>
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
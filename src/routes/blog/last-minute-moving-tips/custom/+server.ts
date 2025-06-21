import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">نقل العفش في اللحظة الأخيرة: دليل الطوارئ الشامل لسكان جدة</h1>
    <div class="text-gray-600">
      <time datetime="2025-07-15">15 يوليو 2025</time>
      <span class="mx-2">•</span>
      <span>14 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/moving_solutions_guide_jeddah.jpg" alt="نقل عفش طارئ في جدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل فوجئت بضرورة الانتقال خلال أيام أو حتى ساعات؟ لا تقلق! هذا الدليل الشامل يقدم لك خطة إنقاذ مجربة لنقل عفشك بسرعة وأمان في جدة، مع نصائح ذهبية من خبراء تعاملوا مع آلاف حالات النقل الطارئ.
    </p>
    
    <div class="bg-red-50 p-6 rounded-lg border-r-4 border-red-400" style="background-color: #FEE2E2; border-color: #EF4444;">
      <h3 class="font-bold mb-2" style="color: #DC2626;">⚡ تنبيه مهم</h3>
      <p>في حالات النقل الطارئ، كل دقيقة لها قيمة! احفظ هذه الصفحة واتبع الخطوات بالترتيب للحصول على أفضل نتيجة ممكنة.</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خطة الـ 24 ساعة: نقل كامل في يوم واحد</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">⏰ الجدول الزمني للطوارئ</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الساعات 0-2: التقييم السريع</h4>
          <ul class="text-sm space-y-1">
            <li>• حصر سريع للغرف والأثاث الكبير</li>
            <li>• اتصل بـ 3-5 شركات نقل (احتفظ بقائمة الطوارئ)</li>
            <li>• التقط صور سريعة لكل غرفة</li>
            <li>• حدد الأولويات: ما يجب نقله أولاً</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الساعات 2-6: التحضير المكثف</h4>
          <ul class="text-sm space-y-1">
            <li>• اشترِ مستلزمات التغليف (قائمة أدناه)</li>
            <li>• ابدأ بتعبئة الأشياء الثمينة والهشة</li>
            <li>• أكّد مع شركة النقل المختارة</li>
            <li>• رتب للحصول على صناديق إضافية</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الساعات 6-12: التعبئة الجماعية</h4>
          <ul class="text-sm space-y-1">
            <li>• استعن بالأصدقاء والأقارب</li>
            <li>• عبّئ غرفة تلو الأخرى</li>
            <li>• ضع ملصقات واضحة على كل صندوق</li>
            <li>• جهّز الأثاث الكبير للنقل</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">الساعات 12-24: النقل والتركيب</h4>
          <ul class="text-sm space-y-1">
            <li>• أشرف على عملية التحميل</li>
            <li>• انتقل مع أول شحنة</li>
            <li>• وجّه العمال في المنزل الجديد</li>
            <li>• ركّب الأساسيات فوراً</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">قائمة مستلزمات الطوارئ</h2>
    
    <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
      <h3 class="text-xl font-bold text-yellow-800 mb-4">🛒 ما تحتاجه فوراً (متوفر 24/7)</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded border border-yellow-300">
          <h4 class="font-bold text-yellow-700 mb-2">من السوبرماركت:</h4>
          <ul class="text-sm space-y-1">
            <li>☑️ أكياس قمامة كبيرة (3 رول على الأقل)</li>
            <li>☑️ شريط لاصق عريض (10 رول)</li>
            <li>☑️ أقلام تحديد (ألوان مختلفة)</li>
            <li>☑️ مناشف ورقية</li>
            <li>☑️ أكياس بلاستيك صغيرة</li>
            <li>☑️ قفازات مطاطية</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-yellow-300">
          <h4 class="font-bold text-yellow-700 mb-2">من محلات مواد البناء:</h4>
          <ul class="text-sm space-y-1">
            <li>☑️ كراتين متنوعة الأحجام (30-50)</li>
            <li>☑️ ورق فقاعات (لفتين كبيرتين)</li>
            <li>☑️ بطانيات نقل (أو بدائل)</li>
            <li>☑️ حبال قوية</li>
            <li>☑️ مفك براغي متعدد</li>
            <li>☑️ كيس أدوات أساسية</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4 bg-yellow-100 p-4 rounded">
        <p class="text-sm text-yellow-800"><strong>💡 نصيحة:</strong> العديد من المحلات في جدة تفتح 24 ساعة. استخدم تطبيقات التوصيل للحصول على المستلزمات بسرعة!</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تقنيات التعبئة السريعة</h2>
    
    <div class="space-y-6">
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">📦 طريقة "الصندوق الواحد للغرفة"</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">غرفة النوم (30 دقيقة)</h4>
            <ul class="text-sm space-y-1">
              <li>• الملابس في أكياس القمامة</li>
              <li>• الأدراج كاملة في أكياس</li>
              <li>• المجوهرات في علب صغيرة</li>
              <li>• الأحذية في أكياسها الأصلية</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">المطبخ (45 دقيقة)</h4>
            <ul class="text-sm space-y-1">
              <li>• الأطباق ملفوفة بالجرائد</li>
              <li>• الأكواب في الجوارب</li>
              <li>• التوابل في كيس محكم</li>
              <li>• الأجهزة في كراتينها</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">غرفة المعيشة (40 دقيقة)</h4>
            <ul class="text-sm space-y-1">
              <li>• الإلكترونيات في بطانيات</li>
              <li>• الكتب في صناديق صغيرة</li>
              <li>• الديكورات ملفوفة جيداً</li>
              <li>• الوسائد كحشوة إضافية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 class="text-xl font-bold text-purple-800 mb-4">🎯 تقنية "التعبئة الذكية"</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-1">استخدم ما لديك:</h4>
            <p class="text-sm">حقائب السفر، السلال، صناديق الغسيل، الأدراج نفسها - كلها صناديق جاهزة!</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-1">الملابس كمواد تغليف:</h4>
            <p class="text-sm">استخدم المناشف والملابس الشتوية لحماية الأشياء الهشة بدلاً من شراء مواد تغليف.</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-1">طريقة الطبقات:</h4>
            <p class="text-sm">ثقيل في الأسفل، خفيف في الأعلى، هش في المنتصف محمي من كل الجهات.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل شركات النقل الطارئ في جدة</h2>
    
    <div class="bg-red-50 p-6 rounded-lg border border-red-200">
      <h3 class="text-xl font-bold text-red-800 mb-4">🚨 خدمات النقل الطارئ (24/7)</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-red-200 rounded-lg">
          <thead class="bg-red-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">نوع الخدمة</th>
              <th class="px-4 py-3 text-right border-b">وقت الاستجابة</th>
              <th class="px-4 py-3 text-right border-b">التكلفة الإضافية</th>
              <th class="px-4 py-3 text-right border-b">المميزات</th>
              <th class="px-4 py-3 text-right border-b">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">نقل فوري</td>
              <td class="px-4 py-3 border-b">2-4 ساعات</td>
              <td class="px-4 py-3 border-b">+50-75%</td>
              <td class="px-4 py-3 border-b">فريق كامل، معدات جاهزة</td>
              <td class="px-4 py-3 border-b">الأغلى لكن الأسرع</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">نقل عاجل</td>
              <td class="px-4 py-3 border-b">6-12 ساعة</td>
              <td class="px-4 py-3 border-b">+30-40%</td>
              <td class="px-4 py-3 border-b">جدولة سريعة</td>
              <td class="px-4 py-3 border-b">توازن جيد</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">نقل اليوم التالي</td>
              <td class="px-4 py-3 border-b">24 ساعة</td>
              <td class="px-4 py-3 border-b">+15-25%</td>
              <td class="px-4 py-3 border-b">تحضير أفضل</td>
              <td class="px-4 py-3 border-b">الخيار الاقتصادي</td>
            </tr>
            <tr>
              <td class="px-4 py-3 font-semibold">مساعدة ذاتية</td>
              <td class="px-4 py-3">فوري</td>
              <td class="px-4 py-3">تكلفة الإيجار فقط</td>
              <td class="px-4 py-3">شاحنة + أدوات</td>
              <td class="px-4 py-3">للميزانية المحدودة</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التعامل مع المواقف الصعبة</h2>
    
    <div class="space-y-6">
      <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h3 class="text-xl font-bold text-orange-800 mb-4">🚧 التحديات الشائعة وحلولها</h3>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-2">المصعد معطل/غير موجود:</h4>
            <ul class="text-sm space-y-1">
              <li>• اطلب عمال إضافيين (تكلفة +20%)</li>
              <li>• استخدم ونش خارجي للطوابق العليا</li>
              <li>• فكك الأثاث الكبير قدر الإمكان</li>
              <li>• خطط لوقت إضافي (ضعف الوقت العادي)</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-2">المطر المفاجئ:</h4>
            <ul class="text-sm space-y-1">
              <li>• غطِّ كل شيء بالبلاستيك المزدوج</li>
              <li>• أعطِ الأولوية للإلكترونيات والأثاث الخشبي</li>
              <li>• استخدم المناشف عند المداخل</li>
              <li>• فكر في تأجيل الأشياء غير الضرورية</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-2">نقص الصناديق:</h4>
            <ul class="text-sm space-y-1">
              <li>• استخدم أكياس القمامة المتينة</li>
              <li>• احتفظ بالأدراج كما هي وغلفها</li>
              <li>• استعر من الجيران أو الأصدقاء</li>
              <li>• اتصل بالسوبرماركت للحصول على صناديق فارغة</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
        <h3 class="text-xl font-bold text-teal-800 mb-4">💼 النقل الطارئ للمكاتب</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-teal-700 mb-3">أولويات المكتب:</h4>
            <ol class="text-sm space-y-1">
              <li>1. السيرفرات والبيانات الحساسة</li>
              <li>2. أجهزة الكمبيوتر والطابعات</li>
              <li>3. الملفات والوثائق المهمة</li>
              <li>4. المعدات المكتبية الثمينة</li>
              <li>5. الأثاث (حسب الأهمية)</li>
            </ol>
          </div>
          <div>
            <h4 class="font-bold text-teal-700 mb-3">نصائح خاصة:</h4>
            <ul class="text-sm space-y-1">
              <li>• احتفظ بنسخ احتياطية فورية</li>
              <li>• صور كل التوصيلات قبل الفك</li>
              <li>• خصص شخص IT للإشراف</li>
              <li>• رتب لاستمرار العمل عن بُعد</li>
              <li>• أبلغ العملاء بالانتقال</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">قوائم التحقق السريعة</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-800 mb-4">✅ قوائم لا غنى عنها</h3>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-3">قبل وصول الشركة:</h4>
          <ul class="text-sm space-y-1">
            <li>☐ فصل الأجهزة الكهربائية</li>
            <li>☐ تفريغ الثلاجة والفريزر</li>
            <li>☐ جمع المفاتيح والريموتات</li>
            <li>☐ تصوير عدادات الخدمات</li>
            <li>☐ سحب النقود والمجوهرات</li>
            <li>☐ تجهيز حقيبة الضروريات</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-3">حقيبة البقاء (24 ساعة):</h4>
          <ul class="text-sm space-y-1">
            <li>☐ ملابس وأدوات نظافة</li>
            <li>☐ أدوية وإسعافات أولية</li>
            <li>☐ شواحن وبطاريات</li>
            <li>☐ وثائق مهمة</li>
            <li>☐ مياه ووجبات خفيفة</li>
            <li>☐ نقود كاش إضافية</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-3">في المنزل الجديد:</h4>
          <ul class="text-sm space-y-1">
            <li>☐ فحص الكهرباء والماء</li>
            <li>☐ تنظيف سريع قبل التفريغ</li>
            <li>☐ تحديد أماكن الأثاث</li>
            <li>☐ تركيب الستائر للخصوصية</li>
            <li>☐ تجهيز غرفة نوم واحدة</li>
            <li>☐ طلب وجبة عشاء!</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأخطاء القاتلة في النقل الطارئ</h2>
    
    <div class="bg-red-50 p-6 rounded-lg border-r-4 border-red-400">
      <h3 class="text-xl font-bold text-red-800 mb-4">❌ تجنب هذه الأخطاء بأي ثمن</h3>
      
      <div class="space-y-3">
        <div class="bg-white p-3 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-1">1. القبول بأول عرض:</h4>
          <p class="text-sm">حتى في الطوارئ، قارن 3 عروض على الأقل. الفرق قد يصل إلى 50%!</p>
        </div>
        
        <div class="bg-white p-3 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-1">2. نسيان التأمين:</h4>
          <p class="text-sm">في العجلة، الأخطاء أكثر. التأمين ضروري وليس رفاهية.</p>
        </div>
        
        <div class="bg-white p-3 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-1">3. عدم وضع علامات:</h4>
          <p class="text-sm">صندوق بدون علامة = ساعات من البحث لاحقاً. 30 ثانية الآن توفر 30 دقيقة لاحقاً.</p>
        </div>
        
        <div class="bg-white p-3 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-1">4. التعبئة الزائدة:</h4>
          <p class="text-sm">صناديق ثقيلة جداً = إصابات وتلف. الحد الأقصى 20 كجم للصندوق.</p>
        </div>
        
        <div class="bg-white p-3 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-1">5. تجاهل الأساسيات:</h4>
          <p class="text-sm">لا تنس: مفاتيح، أرقام مهمة، عنوان جديد مكتوب، خريطة للعمال.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">موارد الطوارئ في جدة</h2>
    
    <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <h3 class="text-xl font-bold text-indigo-800 mb-4">📍 أرقام وعناوين مفيدة</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-3">متاجر مفتوحة 24/7:</h4>
          <ul class="text-sm space-y-1">
            <li>• بنده/الدانوب: مستلزمات أساسية</li>
            <li>• صيدليات النهدي: طوارئ طبية</li>
            <li>• محطات البنزين: أدوات بسيطة</li>
            <li>• بعض فروع ساكو: مواد تغليف</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-3">خدمات مساندة:</h4>
          <ul class="text-sm space-y-1">
            <li>• كريم/أوبر: نقل سريع للأشياء الصغيرة</li>
            <li>• مرسول: شراء وتوصيل مستلزمات</li>
            <li>• تطبيقات العمالة: مساعدة إضافية</li>
            <li>• شركات تأجير الشاحنات الصغيرة</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4 bg-indigo-100 p-4 rounded">
        <p class="text-sm text-indigo-800"><strong>💡 نصيحة:</strong> احفظ هذه الأرقام في هاتفك الآن، لن يكون لديك وقت للبحث عنها في حالة الطوارئ!</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">قصص نجاح: تجارب حقيقية</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <h3 class="text-xl font-bold text-green-800 mb-4">✨ إلهام من أرض الواقع</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">عائلة السيد أحمد (حي الروضة):</h4>
          <p class="text-sm mb-2"><strong>التحدي:</strong> إخلاء فيلا في 18 ساعة بسبب مشكلة قانونية</p>
          <p class="text-sm mb-2"><strong>الحل:</strong> قسّموا العائلة لفرق، استأجروا 3 شاحنات، استخدموا الجيران للتخزين المؤقت</p>
          <p class="text-sm"><strong>النتيجة:</strong> نقل كامل دون خسائر، توفير 3000 ريال من التخزين</p>
        </div>
        
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">شركة التقنية (حي الأندلس):</h4>
          <p class="text-sm mb-2"><strong>التحدي:</strong> نقل مكتب 50 موظف في عطلة نهاية الأسبوع</p>
          <p class="text-sm mb-2"><strong>الحل:</strong> كل موظف مسؤول عن مكتبه، فريق IT يعمل ليلاً، بوفيه مفتوح للمحفزات</p>
          <p class="text-sm"><strong>النتيجة:</strong> عمل طبيعي يوم الأحد، صفر توقف للخدمات</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">ما بعد النقل الطارئ</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">📅 خطة الـ 7 أيام التالية</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-purple-700 mb-3">الأولويات الفورية:</h4>
          <ul class="text-sm space-y-1">
            <li>✓ تحديث العنوان في الجهات الحكومية</li>
            <li>✓ نقل الخدمات (كهرباء، ماء، إنترنت)</li>
            <li>✓ إبلاغ البنك وشركات البطاقات</li>
            <li>✓ تحديث عنوان التوصيل</li>
            <li>✓ البحث عن خدمات محلية جديدة</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-purple-700 mb-3">ترتيب المنزل:</h4>
          <ul class="text-sm space-y-1">
            <li>✓ فتح صندوق واحد يومياً (لا تستعجل)</li>
            <li>✓ ترتيب غرفة واحدة كاملة أولاً</li>
            <li>✓ التخلص من مواد التغليف تدريجياً</li>
            <li>✓ تصوير الأضرار إن وجدت</li>
            <li>✓ الاحتفال بإنجاز المهمة!</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: أنت أقوى مما تظن!</h2>
    
    <div class="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg border-r-4 border-blue-400">
      <p class="mb-4">
        النقل الطارئ تحدٍ كبير، لكنه ليس مستحيلاً. بالتخطيط السريع والتنفيذ الذكي، يمكنك تحويل هذه الأزمة إلى قصة نجاح. تذكر: آلاف العائلات في جدة مرت بنفس التجربة ونجحت، وأنت قادر على ذلك أيضاً!
      </p>
      
      <div class="bg-white p-4 rounded border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">🎯 الدرس الأهم:</h4>
        <p class="text-sm">الهدوء والتنظيم أهم من السرعة. خطة بسيطة منفذة أفضل من خطة معقدة مشوشة. ثق بنفسك واطلب المساعدة عند الحاجة.</p>
      </div>
      
      <div class="mt-4 p-4 bg-green-100 rounded">
        <p class="text-sm text-green-800"><strong>💪 رسالة أخيرة:</strong> بعد 48 ساعة ستكون في منزلك الجديد تحتسي القهوة وتضحك على هذه اللحظات. النجاح مضمون!</p>
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
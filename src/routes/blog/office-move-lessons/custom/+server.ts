import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">دروس قيمة من تجارب نقل المكاتب في جدة: أخطاء شائعة وحلول عملية</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-12">12 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>17 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/jeddah_office_movers_1.jpg" alt="دروس من نقل المكاتب في جدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      نقل المكاتب ليس مجرد نقل أثاث من مكان لآخر، بل عملية معقدة تتطلب تخطيطاً دقيقاً وخبرة متخصصة. من خلال تحليل 25 تجربة نقل مكتبي في جدة خلال العامين الماضيين، نقدم لك الدروس المستفادة والأخطاء الشائعة التي يجب تجنبها لضمان انتقال سلس وناجح لشركتك.
    </p>
    
    <div class="bg-red-50 p-6 rounded-lg border-r-4 border-red-400">
      <h3 class="font-bold text-red-800 mb-2">⚠️ إحصائية مفاجئة</h3>
      <p>70% من الشركات التي نقلت مكاتبها في جدة واجهت تأخيراً في العمل لمدة 3-7 أيام بسبب سوء التخطيط. 85% منها تجاوزت الميزانية المخططة بنسبة 25-40%. تعلم من أخطاء الآخرين!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الدرس الأول: التخطيط المبكر يوفر الآلاف</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <h3 class="text-xl font-bold text-green-800 mb-4">🏢 قصة شركة النجم التجارية</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-green-700 mb-3">الوضع الأولي:</h4>
          <ul class="text-sm space-y-1">
            <li>• <strong>النشاط:</strong> شركة استيراد وتصدير</li>
            <li>• <strong>حجم المكتب:</strong> 150 متر مربع</li>
            <li>• <strong>عدد الموظفين:</strong> 25 موظف</li>
            <li>• <strong>المسافة:</strong> من العزيزية إلى الحمراء</li>
            <li>• <strong>وقت التخطيط:</strong> 3 أشهر مسبقاً</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-green-700 mb-3">النتائج المحققة:</h4>
          <ul class="text-sm space-y-1">
            <li>• <strong>التكلفة:</strong> 12,000 ريال (تحت الميزانية)</li>
            <li>• <strong>التوقف:</strong> يوم واحد فقط</li>
            <li>• <strong>فقدان البيانات:</strong> صفر</li>
            <li>• <strong>الأضرار:</strong> قطعة واحدة طفيفة</li>
            <li>• <strong>رضا الموظفين:</strong> 95%</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 bg-white p-4 rounded border border-green-300">
        <h4 class="font-bold text-green-800 mb-3">🗓️ الجدول الزمني المتبع:</h4>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span><strong>3 أشهر قبل:</strong></span>
            <span>اختيار الموقع الجديد ووضع خطة النقل</span>
          </div>
          <div class="flex justify-between">
            <span><strong>2.5 شهر قبل:</strong></span>
            <span>طلب عروض أسعار ونسخ احتياطية للبيانات</span>
          </div>
          <div class="flex justify-between">
            <span><strong>2 شهر قبل:</strong></span>
            <span>حجز الشركة وإشعار العملاء والموردين</span>
          </div>
          <div class="flex justify-between">
            <span><strong>شهر واحد قبل:</strong></span>
            <span>تجهيز المكتب الجديد وتحديث العناوين</span>
          </div>
          <div class="flex justify-between">
            <span><strong>أسبوع واحد قبل:</strong></span>
            <span>تغليف غير الضروريات وتأكيد التفاصيل</span>
          </div>
        </div>
      </div>
      
      <div class="mt-4 bg-green-100 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">💰 التوفير المحقق:</h4>
        <p class="text-sm">بسبب التخطيط المبكر، وفرت الشركة 8,000 ريال من التكلفة المتوقعة، وتجنبت خسائر إنتاجية قدرها 15,000 ريال.</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الدرس الثاني: إهمال البيانات كارثة حقيقية</h2>
    
    <div class="bg-red-50 p-6 rounded-lg border border-red-200">
      <h3 class="text-xl font-bold text-red-800 mb-4">💻 قصة مؤسسة التقنية الحديثة</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">❌ الخطأ الكارثي:</h4>
          <p class="text-sm">اعتمدت المؤسسة على نقل السيرفرات والأجهزة دون عمل نسخ احتياطية شاملة. أثناء النقل، تعرض القرص الصلب الرئيسي للتلف.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-bold text-red-700 mb-2">الخسائر المباشرة:</h4>
            <ul class="text-sm space-y-1">
              <li>• فقدان قاعدة بيانات العملاء (3 سنوات)</li>
              <li>• تلف ملفات مشاريع جارية بقيمة 45,000 ريال</li>
              <li>• توقف العمل لمدة أسبوع كامل</li>
              <li>• تكلفة استعادة البيانات: 12,000 ريال</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-red-700 mb-2">الخسائر غير المباشرة:</h4>
            <ul class="text-sm space-y-1">
              <li>• فقدان ثقة 8 عملاء رئيسيين</li>
              <li>• تأخير تسليم 5 مشاريع</li>
              <li>• غرامات تأخير: 8,000 ريال</li>
              <li>• سمعة الشركة في السوق</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-4 bg-red-100 p-4 rounded">
          <h4 class="font-bold text-red-800 mb-2">💸 إجمالي الخسائر: 75,000 ريال</h4>
          <p class="text-sm">كل هذا كان يمكن تجنبه بتكلفة نسخ احتياطي لا تتجاوز 2,000 ريال!</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الدرس الثالث: أهمية التواصل مع الموظفين</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">👥 قصة مجموعة الإبداع الإعلامية</h3>
      
      <div class="space-y-4">
        <p class="text-sm">شركة إعلامية تضم 40 موظفاً قررت النقل دون إشراك الموظفين في التخطيط، مما أدى إلى مقاومة داخلية ومشاكل عديدة.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-2">🚫 المشاكل التي حدثت:</h4>
            <ul class="text-sm space-y-1">
              <li>• عدم تعاون الموظفين في التغليف</li>
              <li>• فقدان ملفات شخصية مهمة</li>
              <li>• تذمر وانخفاض الروح المعنوية</li>
              <li>• تأخير في إعداد محطات العمل</li>
              <li>• استقالة 3 موظفين مهمين</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-2">✅ الحلول المطبقة لاحقاً:</h4>
            <ul class="text-sm space-y-1">
              <li>• اجتماعات توضيحية أسبوعية</li>
              <li>• إشراك الموظفين في القرارات</li>
              <li>• دليل إرشادي مفصل لكل موظف</li>
              <li>• تعويضات عن الإزعاج</li>
              <li>• احتفال في المكتب الجديد</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-4 bg-blue-100 p-4 rounded">
          <h4 class="font-bold text-blue-800 mb-2">📈 النتيجة النهائية:</h4>
          <p class="text-sm">بعد تطبيق استراتيجية التواصل، تحسنت الروح المعنوية بنسبة 60% وتم تقليل وقت التكيف مع المكتب الجديد من شهر إلى أسبوعين.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الدرس الرابع: اختيار الشركة المتخصصة</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">🏗️ قصة مقاولات البناء المتقدمة</h3>
      
      <div class="space-y-4">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-bold text-purple-700 mb-3">❌ التجربة الأولى (شركة عامة):</h4>
            <ul class="text-sm space-y-1 bg-white p-3 rounded border border-purple-300">
              <li>• تكلفة: 8,000 ريال (ظاهرياً أرخص)</li>
              <li>• تلف 3 أجهزة كمبيوتر</li>
              <li>• كسر طاولة اجتماعات (25,000 ريال)</li>
              <li>• فقدان ملفات مشاريع</li>
              <li>• توقف العمل 4 أيام</li>
              <li>• <strong>إجمالي الخسائر: 45,000 ريال</strong></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-purple-700 mb-3">✅ التجربة الثانية (شركة متخصصة):</h4>
            <ul class="text-sm space-y-1 bg-white p-3 rounded border border-purple-300">
              <li>• تكلفة: 15,000 ريال</li>
              <li>• صفر أضرار للمعدات</li>
              <li>• تغليف احترافي لجميع القطع</li>
              <li>• نقل منظم ومرحلي</li>
              <li>• توقف العمل يوم واحد فقط</li>
              <li>• <strong>توفير صافي: 23,000 ريال</strong></li>
            </ul>
          </div>
        </div>
        
        <div class="mt-4 bg-white p-4 rounded border border-purple-300">
          <h4 class="font-bold text-purple-800 mb-2">📊 مقارنة التكلفة الحقيقية:</h4>
          <div class="text-sm space-y-1">
            <li>• الشركة العامة: 8,000 + 45,000 خسائر = <strong>53,000 ريال</strong></li>
            <li>• الشركة المتخصصة: 15,000 ريال فقط</li>
            <li>• <strong>الفرق: 38,000 ريال توفير!</strong></li>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأخطاء الـ 10 الأكثر شيوعاً</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">1️⃣ عدم عمل جردة شاملة</h4>
          <p class="text-sm">45% من الشركات فقدت أغراض بسبب عدم وضع قائمة مفصلة</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">2️⃣ إهمال التصاريح والموافقات</h4>
          <p class="text-sm">تأخير النقل بسبب عدم الحصول على تصاريح المباني</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">3️⃣ عدم تحديث العناوين</h4>
          <p class="text-sm">مشاكل في تسليم البريد والشحنات بعد النقل</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">4️⃣ سوء التنسيق مع IT</h4>
          <p class="text-sm">تأخير في تشغيل الأنظمة والشبكات</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">5️⃣ عدم اختبار الموقع الجديد</h4>
          <p class="text-sm">اكتشاف مشاكل في الكهرباء والتكييف متأخراً</p>
        </div>
      </div>
      
      <div class="space-y-4">
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">6️⃣ إهمال تأمين المحتويات</h4>
          <p class="text-sm">خسائر مالية فادحة عند حدوث أضرار</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">7️⃣ عدم تجهيز خطة طوارئ</h4>
          <p class="text-sm">فوضى عند حدوث تأخير أو مشاكل غير متوقعة</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">8️⃣ سوء توقيت النقل</h4>
          <p class="text-sm">اختيار أوقات ذروة أو مواسم مزدحمة</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">9️⃣ إهمال تدريب الموظفين</h4>
          <p class="text-sm">صعوبات في التكيف مع المكتب الجديد</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-2">🔟 عدم وضع ميزانية احتياطية</h4>
          <p class="text-sm">تجاوز التكلفة المخططة بنسبة كبيرة</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل النقل المكتبي المثالي</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold mb-4">📋 قائمة مراجعة شاملة (3 أشهر قبل النقل)</h3>
      
      <div class="space-y-6">
        <div class="bg-blue-50 p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-800 mb-3">🗓️ المرحلة الأولى (3-2 أشهر قبل)</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-semibold mb-2">التخطيط الاستراتيجي:</h5>
              <ul class="space-y-1">
                <li>□ تشكيل فريق إدارة النقل</li>
                <li>□ وضع الميزانية التفصيلية</li>
                <li>□ اختيار الموقع النهائي</li>
                <li>□ دراسة احتياجات المساحة</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">البحث والمقارنة:</h5>
              <ul class="space-y-1">
                <li>□ طلب عروض من 5 شركات نقل متخصصة</li>
                <li>□ زيارة مراجع الشركات</li>
                <li>□ التأكد من التراخيص والتأمين</li>
                <li>□ مقارنة الخدمات والأسعار</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-800 mb-3">🔧 المرحلة الثانية (2-1 شهر قبل)</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-semibold mb-2">التحضيرات العملية:</h5>
              <ul class="space-y-1">
                <li>□ جردة شاملة للأثاث والمعدات</li>
                <li>□ نسخ احتياطية لجميع البيانات</li>
                <li>□ تحديث العناوين مع الجهات المختلفة</li>
                <li>□ ترتيب الخدمات في الموقع الجديد</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">التواصل والتنسيق:</h5>
              <ul class="space-y-1">
                <li>□ إشعار العملاء والموردين</li>
                <li>□ تدريب الموظفين على الخطة</li>
                <li>□ تنسيق مع إدارة المباني</li>
                <li>□ حجز المصاعد والممرات</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-orange-50 p-4 rounded border border-orange-300">
          <h4 class="font-bold text-orange-800 mb-3">🚚 المرحلة الثالثة (الأسبوع الأخير)</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-semibold mb-2">اللمسات الأخيرة:</h5>
              <ul class="space-y-1">
                <li>□ تغليف الأغراض غير الأساسية</li>
                <li>□ تأكيد جميع المواعيد</li>
                <li>□ فصل وتغليف المعدات التقنية</li>
                <li>□ إعداد الصناديق المتخصصة</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">يوم النقل:</h5>
              <ul class="space-y-1">
                <li>□ وصول فريق الإشراف مبكراً</li>
                <li>□ توجيه الفرق المختلفة</li>
                <li>□ متابعة عملية النقل خطوة بخطوة</li>
                <li>□ فحص الأغراض عند الوصول</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تكاليف نقل المكاتب في جدة</h2>
    
    <div class="overflow-x-auto">
      <table class="w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-right border-b">حجم المكتب</th>
            <th class="px-4 py-3 text-right border-b">عدد الموظفين</th>
            <th class="px-4 py-3 text-right border-b">التكلفة الأساسية</th>
            <th class="px-4 py-3 text-right border-b">خدمات إضافية</th>
            <th class="px-4 py-3 text-right border-b">الإجمالي المتوقع</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3 border-b">مكتب صغير (50 م²)</td>
            <td class="px-4 py-3 border-b">5-10 موظفين</td>
            <td class="px-4 py-3 border-b">3,000-5,000 ريال</td>
            <td class="px-4 py-3 border-b">1,000-2,000 ريال</td>
            <td class="px-4 py-3 border-b">4,000-7,000 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b">مكتب متوسط (150 م²)</td>
            <td class="px-4 py-3 border-b">15-30 موظف</td>
            <td class="px-4 py-3 border-b">8,000-12,000 ريال</td>
            <td class="px-4 py-3 border-b">3,000-5,000 ريال</td>
            <td class="px-4 py-3 border-b">11,000-17,000 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b">مكتب كبير (300 م²)</td>
            <td class="px-4 py-3 border-b">50-100 موظف</td>
            <td class="px-4 py-3 border-b">15,000-25,000 ريال</td>
            <td class="px-4 py-3 border-b">5,000-10,000 ريال</td>
            <td class="px-4 py-3 border-b">20,000-35,000 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3">مكتب كبير جداً (+500 م²)</td>
            <td class="px-4 py-3">+100 موظف</td>
            <td class="px-4 py-3">30,000-50,000 ريال</td>
            <td class="px-4 py-3">10,000-20,000 ريال</td>
            <td class="px-4 py-3">40,000-70,000 ريال</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="mt-4 bg-blue-50 p-4 rounded">
      <h4 class="font-bold text-blue-800 mb-2">📝 الخدمات الإضافية تشمل:</h4>
      <div class="grid md:grid-cols-3 gap-4 text-sm">
        <ul class="space-y-1">
          <li>• تغليف احترافي</li>
          <li>• فك وتركيب الأثاث</li>
          <li>• نقل المعدات التقنية</li>
        </ul>
        <ul class="space-y-1">
          <li>• تأمين شامل</li>
          <li>• تخزين مؤقت</li>
          <li>• تنظيف ما بعد النقل</li>
        </ul>
        <ul class="space-y-1">
          <li>• خدمات عطلة نهاية الأسبوع</li>
          <li>• إشراف مختص</li>
          <li>• نقل عاجل</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: النجاح في التفاصيل</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
      <p class="mb-4">
        نقل المكاتب ليس مجرد انتقال مكاني، بل نقلة استراتيجية تؤثر على إنتاجية الشركة وروح الفريق. الدروس المستفادة من تجارب الشركات في جدة تؤكد أن الاستثمار في التخطيط الجيد والشركات المتخصصة يوفر الآلاف ويضمن استمرارية العمل.
      </p>
      
      <div class="bg-white p-4 rounded border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">🏆 المعادلة الذهبية للنقل الناجح:</h4>
        <p class="text-sm">تخطيط مبكر + شركة متخصصة + تواصل فعال + خطة طوارئ = نقل ناجح وسلس</p>
      </div>
      
      <div class="mt-4 p-4 bg-green-100 rounded">
        <p class="text-sm text-green-800"><strong>💼 استشارة مجانية:</strong> إذا كنت تخطط لنقل مكتبك في جدة، يمكنك الاستفادة من <a href="/calculator" class="underline font-semibold">حاسبة تكلفة النقل المكتبي</a> للحصول على تقدير دقيق وخطة أولية مجانية.</p>
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
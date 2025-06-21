import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">التأمين ومطالبات التعويض في نقل العفش: دليلك القانوني الشامل في جدة</h1>
    <div class="text-gray-600">
      <time datetime="2025-08-15">15 أغسطس 2025</time>
      <span class="mx-2">•</span>
      <span>15 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/reliable_movers_jeddah.jpg" alt="التأمين على نقل العفش" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل تعرضت لضرر في أثاثك أثناء النقل؟ هل ترغب في حماية ممتلكاتك مسبقاً؟ هذا الدليل الشامل يوضح لك كل ما تحتاج معرفته عن التأمين على نقل العفش، وكيفية المطالبة بالتعويض، والحقوق القانونية في المملكة العربية السعودية، مع نماذج عملية وخطوات تفصيلية.
    </p>
    
    <div class="bg-red-50 p-6 rounded-lg border-r-4 border-red-400" style="background-color: #FEE2E2; border-color: #EF4444;">
      <h3 class="font-bold mb-2" style="color: #DC2626;">⚖️ إحصائية مهمة</h3>
      <p>65% من حالات تلف الأثاث أثناء النقل لا يتم تعويضها بشكل كامل بسبب عدم معرفة العملاء بحقوقهم وإجراءات المطالبة الصحيحة!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أنواع التأمين على نقل العفش</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">📋 التأمين الأساسي</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">التغطية المحدودة</h4>
            <p class="text-sm">يغطي الأضرار الناتجة عن الحوادث المرورية والسرقة فقط</p>
            <p class="text-xs text-gray-600 mt-1">التعويض: 50-100 ريال/متر مكعب</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">المسؤولية القانونية</h4>
            <p class="text-sm">تأمين إلزامي تفرضه الدولة على الشركات المرخصة</p>
            <p class="text-xs text-gray-600 mt-1">الحد الأدنى: 50,000 ريال</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">الاستثناءات</h4>
            <p class="text-sm">لا يشمل: الخدوش، الأضرار البسيطة، سوء التعامل</p>
          </div>
        </div>
      </div>
      
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">🛡️ التأمين الشامل</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">التغطية الكاملة</h4>
            <p class="text-sm">يشمل جميع أنواع الأضرار بما فيها سوء التعامل</p>
            <p class="text-xs text-gray-600 mt-1">التعويض: القيمة الفعلية للضرر</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">الحماية الإضافية</h4>
            <p class="text-sm">تأخير التسليم، فقدان المفاتيح، التخزين المؤقت</p>
            <p class="text-xs text-gray-600 mt-1">قسط إضافي: 2-5% من قيمة الأثاث</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">خدمات مميزة</h4>
            <p class="text-sm">تعويض فوري، بدل إيجار، إصلاح متخصص</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">كيفية حساب قيمة التأمين</h2>
    
    <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
      <h3 class="text-xl font-bold text-yellow-800 mb-4">🧮 معادلة حساب القسط</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-yellow-200 rounded-lg">
          <thead class="bg-yellow-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">قيمة الأثاث</th>
              <th class="px-4 py-3 text-right border-b">نوع التأمين</th>
              <th class="px-4 py-3 text-right border-b">نسبة القسط</th>
              <th class="px-4 py-3 text-right border-b">القسط السنوي</th>
              <th class="px-4 py-3 text-right border-b">التحمل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b">50,000 ريال</td>
              <td class="px-4 py-3 border-b">أساسي</td>
              <td class="px-4 py-3 border-b">1.5%</td>
              <td class="px-4 py-3 border-b">750 ريال</td>
              <td class="px-4 py-3 border-b">500 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">50,000 ريال</td>
              <td class="px-4 py-3 border-b">شامل</td>
              <td class="px-4 py-3 border-b">3%</td>
              <td class="px-4 py-3 border-b">1,500 ريال</td>
              <td class="px-4 py-3 border-b">250 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b">100,000 ريال</td>
              <td class="px-4 py-3 border-b">أساسي</td>
              <td class="px-4 py-3 border-b">1.2%</td>
              <td class="px-4 py-3 border-b">1,200 ريال</td>
              <td class="px-4 py-3 border-b">750 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3">100,000 ريال</td>
              <td class="px-4 py-3">شامل</td>
              <td class="px-4 py-3">2.5%</td>
              <td class="px-4 py-3">2,500 ريال</td>
              <td class="px-4 py-3">صفر</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-4 bg-yellow-100 p-4 rounded">
        <p class="text-sm text-yellow-800"><strong>ملاحظة:</strong> التحمل هو المبلغ الذي يدفعه العميل من جيبه قبل بدء التعويض من شركة التأمين</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خطوات المطالبة بالتعويض</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">📝 الإجراءات خطوة بخطوة</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-purple-300">
          <h4 class="font-bold text-purple-700 mb-3">1️⃣ الإبلاغ الفوري (خلال 24 ساعة)</h4>
          <ul class="text-sm space-y-1">
            <li>• اتصل بشركة النقل فوراً وأبلغ عن الضرر</li>
            <li>• احصل على رقم مرجعي للبلاغ</li>
            <li>• أرسل إشعار كتابي بالبريد الإلكتروني</li>
            <li>• احتفظ بنسخة من جميع المراسلات</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-purple-300">
          <h4 class="font-bold text-purple-700 mb-3">2️⃣ التوثيق الشامل (خلال 48 ساعة)</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-semibold mb-2">التصوير:</h5>
              <ul class="text-sm space-y-1">
                <li>• صور واضحة للضرر من جميع الزوايا</li>
                <li>• صور مقربة للتفاصيل</li>
                <li>• فيديو إن أمكن</li>
                <li>• التاريخ والوقت واضحين</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">المستندات:</h5>
              <ul class="text-sm space-y-1">
                <li>• عقد النقل الأصلي</li>
                <li>• قائمة الجرد الموقعة</li>
                <li>• إيصال الدفع</li>
                <li>• وثيقة التأمين</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-purple-300">
          <h4 class="font-bold text-purple-700 mb-3">3️⃣ تقديم المطالبة (خلال 7 أيام)</h4>
          <ul class="text-sm space-y-1">
            <li>• املأ نموذج المطالبة الرسمي</li>
            <li>• أرفق جميع المستندات المطلوبة</li>
            <li>• احصل على تقديرات إصلاح من 3 ورش</li>
            <li>• قدم المطالبة شخصياً أو بالبريد المسجل</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-purple-300">
          <h4 class="font-bold text-purple-700 mb-3">4️⃣ المتابعة والتصعيد</h4>
          <ul class="text-sm space-y-1">
            <li>• تابع كل 3 أيام عمل</li>
            <li>• وثق جميع الاتصالات</li>
            <li>• صعّد للإدارة بعد 15 يوم</li>
            <li>• اللجوء للجهات الرسمية إذا لزم</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">نماذج المطالبات الجاهزة</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📄 نموذج مطالبة تعويض</h3>
      
      <div class="bg-white p-6 rounded border border-gray-300 font-mono text-sm">
        <p class="mb-4">التاريخ: ___/___/_____</p>
        <p class="mb-4">إلى: شركة _________ لنقل العفش</p>
        <p class="mb-4">الموضوع: <strong>مطالبة تعويض عن أضرار نقل</strong></p>
        
        <p class="mb-4">السادة المحترمون،</p>
        
        <p class="mb-4">
          أتقدم إليكم بمطالبة تعويض عن الأضرار التي لحقت بأثاثي أثناء عملية النقل التي تمت بتاريخ ___/___ 
          برقم عقد: _______ ورقم بوليصة التأمين: _______
        </p>
        
        <p class="mb-4"><strong>تفاصيل الأضرار:</strong></p>
        <ul class="mb-4">
          <li>1. _________________________________</li>
          <li>2. _________________________________</li>
          <li>3. _________________________________</li>
        </ul>
        
        <p class="mb-4"><strong>القيمة التقديرية للأضرار:</strong> _______ ريال سعودي</p>
        
        <p class="mb-4"><strong>المرفقات:</strong></p>
        <ul class="mb-4">
          <li>☐ صور الأضرار</li>
          <li>☐ تقديرات الإصلاح</li>
          <li>☐ نسخة من العقد</li>
          <li>☐ إيصال الدفع</li>
        </ul>
        
        <p class="mb-4">أرجو التكرم بدراسة المطالبة واتخاذ اللازم في أسرع وقت ممكن.</p>
        
        <p class="mb-4">وتفضلوا بقبول فائق الاحترام،</p>
        <p>الاسم: _____________</p>
        <p>التوقيع: ___________</p>
        <p>رقم الجوال: ________</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الحقوق القانونية وفقاً للنظام السعودي</h2>
    
    <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <h3 class="text-xl font-bold text-indigo-800 mb-4">⚖️ حقوقك المحمية بالقانون</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-2">نظام النقل البري (المادة 23)</h4>
          <p class="text-sm mb-2">الناقل مسؤول عن سلامة البضائع من وقت تسلمها حتى تسليمها للمرسل إليه</p>
          <ul class="text-xs space-y-1 text-gray-600">
            <li>• المسؤولية كاملة عن الفقد الكلي</li>
            <li>• التعويض عن الضرر الجزئي حسب نسبة الضرر</li>
            <li>• لا يُعفى الناقل إلا بإثبات القوة القاهرة</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-2">حماية المستهلك</h4>
          <ul class="text-sm space-y-1">
            <li>• الحق في التعويض العادل خلال 30 يوم</li>
            <li>• عدم جواز الإعفاء من المسؤولية مسبقاً</li>
            <li>• الحق في رفع دعوى قضائية خلال سنة</li>
            <li>• إمكانية الشكوى لوزارة التجارة</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-2">العقوبات على الشركات المخالفة</h4>
          <ul class="text-sm space-y-1">
            <li>• غرامة تصل إلى 100,000 ريال</li>
            <li>• إيقاف الترخيص مؤقتاً</li>
            <li>• إلزام بالتعويض + غرامة تأخير</li>
            <li>• النشر في الصحف على نفقة المخالف</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأخطاء الشائعة في المطالبات</h2>
    
    <div class="bg-red-50 p-6 rounded-lg border border-red-200">
      <h3 class="text-xl font-bold text-red-800 mb-4">❌ تجنب هذه الأخطاء القاتلة</h3>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-3">أخطاء التوثيق:</h4>
          <ul class="text-sm space-y-1">
            <li>❌ التوقيع على الاستلام دون فحص</li>
            <li>❌ عدم التصوير قبل وبعد النقل</li>
            <li>❌ التأخر في الإبلاغ عن الضرر</li>
            <li>❌ فقدان المستندات الأصلية</li>
            <li>❌ عدم الحصول على أرقام مرجعية</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-red-300">
          <h4 class="font-bold text-red-700 mb-3">أخطاء الإجراءات:</h4>
          <ul class="text-sm space-y-1">
            <li>❌ القبول بأول عرض تعويض</li>
            <li>❌ التنازل عن الحقوق كتابياً</li>
            <li>❌ إصلاح الضرر قبل المعاينة</li>
            <li>❌ عدم متابعة المطالبة</li>
            <li>❌ تجاهل المهل القانونية</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دراسات حالة حقيقية</h2>
    
    <div class="space-y-6">
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">✅ حالة ناجحة: السيد خالد من حي الصفا</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">المشكلة:</h4>
            <p class="text-sm">تضرر طقم كنب فاخر قيمته 25,000 ريال (خدوش وتمزق)</p>
          </div>
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">الإجراءات:</h4>
            <ul class="text-sm space-y-1">
              <li>• توثيق فوري بالصور</li>
              <li>• مطالبة خلال 24 ساعة</li>
              <li>• 3 تقديرات إصلاح</li>
              <li>• متابعة يومية</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">النتيجة:</h4>
            <p class="text-sm">تعويض كامل 25,000 ريال خلال 21 يوم</p>
          </div>
        </div>
      </div>

      <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h3 class="text-xl font-bold text-orange-800 mb-4">⚠️ حالة تحذيرية: السيدة فاطمة من حي الروضة</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-2">المشكلة:</h4>
            <p class="text-sm">كسر مرآة أثرية قيمتها 15,000 ريال</p>
          </div>
          <div class="bg-white p-4 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-2">الأخطاء:</h4>
            <ul class="text-sm space-y-1">
              <li>• وقعت على الاستلام دون فحص</li>
              <li>• تأخرت 10 أيام في الإبلاغ</li>
              <li>• لم تحتفظ بالكسر</li>
              <li>• لا يوجد تأمين إضافي</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-2">النتيجة:</h4>
            <p class="text-sm">تعويض جزئي 3,000 ريال فقط بعد معاناة 3 أشهر</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الجهات المختصة للشكاوى</h2>
    
    <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
      <h3 class="text-xl font-bold text-teal-800 mb-4">🏛️ جهات حماية حقوقك</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-3">وزارة التجارة:</h4>
          <ul class="text-sm space-y-1">
            <li>📞 الرقم الموحد: 1900</li>
            <li>🌐 تطبيق "بلاغ تجاري"</li>
            <li>📧 البريد الإلكتروني الرسمي</li>
            <li>🏢 مكاتب حماية المستهلك</li>
            <li>⏱️ الرد خلال 5 أيام عمل</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-3">هيئة النقل العام:</h4>
          <ul class="text-sm space-y-1">
            <li>📞 رقم الشكاوى: 19929</li>
            <li>🌐 المنصة الإلكترونية</li>
            <li>📱 تطبيق "ناقل"</li>
            <li>🏢 الفروع الإقليمية</li>
            <li>⏱️ متابعة فورية للشكاوى</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4 bg-white p-4 rounded border border-teal-300">
        <h4 class="font-bold text-teal-700 mb-2">مجلس الضمان الصحي التعاوني (للتأمين):</h4>
        <ul class="text-sm space-y-1">
          <li>• الإشراف على شركات التأمين</li>
          <li>• حل النزاعات التأمينية</li>
          <li>• ضمان حقوق المؤمن لهم</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">نصائح لتجنب المشاكل</h2>
    
    <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">💡 الوقاية خير من العلاج</h3>
      
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-3">قبل النقل:</h4>
          <ul class="text-sm space-y-1">
            <li>✓ اختر شركة مرخصة ومؤمنة</li>
            <li>✓ اقرأ العقد كاملاً</li>
            <li>✓ صور كل قطعة</li>
            <li>✓ احصل على تأمين إضافي</li>
            <li>✓ وثق القطع الثمينة</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-purple-300">
          <h4 class="font-bold text-purple-700 mb-3">أثناء النقل:</h4>
          <ul class="text-sm space-y-1">
            <li>✓ كن حاضراً شخصياً</li>
            <li>✓ راقب التعامل</li>
            <li>✓ وثق أي حادث فوراً</li>
            <li>✓ لا توقع تحت ضغط</li>
            <li>✓ احتفظ بكل الأوراق</li>
          </ul>
        </div>
        
        <div class="bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-700 mb-3">بعد النقل:</h4>
          <ul class="text-sm space-y-1">
            <li>✓ افحص فوراً</li>
            <li>✓ لا تؤجل الإبلاغ</li>
            <li>✓ احتفظ بالأدلة</li>
            <li>✓ تابع بإصرار</li>
            <li>✓ اعرف حقوقك</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأسئلة الشائعة</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-800 mb-4">❓ إجابات الخبراء</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-2">ما هي مدة التقادم للمطالبة بالتعويض؟</h4>
          <p class="text-sm">سنة واحدة من تاريخ التسليم وفقاً للنظام السعودي، لكن يُنصح بالمطالبة فوراً</p>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-2">هل يمكن رفض التعويض بحجة "التوقيع على الاستلام"؟</h4>
          <p class="text-sm">لا، التوقيع على الاستلام لا يعني التنازل عن حق المطالبة، خاصة للأضرار غير الظاهرة</p>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-2">ماذا لو رفضت الشركة التعويض؟</h4>
          <p class="text-sm">يمكنك التصعيد لوزارة التجارة، هيئة النقل، أو رفع دعوى قضائية في المحكمة التجارية</p>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-300">
          <h4 class="font-bold text-gray-700 mb-2">هل التأمين الإضافي يستحق التكلفة؟</h4>
          <p class="text-sm">نعم بالتأكيد، خاصة للأثاث الثمين. التكلفة بسيطة مقارنة بالحماية التي يوفرها</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: حقوقك مصانة.. فاحمِها</h2>
    
    <div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-r-4 border-green-400">
      <p class="mb-4">
        التأمين على نقل العفش ليس رفاهية بل ضرورة في عصرنا الحالي. معرفة حقوقك وإجراءات المطالبة الصحيحة تضمن لك الحصول على تعويض عادل في حال حدوث أي ضرر. لا تتنازل عن حقك، ولا تتردد في المطالبة به.
      </p>
      
      <div class="bg-white p-4 rounded border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">📌 القاعدة الذهبية:</h4>
        <p class="text-sm">"الوقاية خير من العلاج، والتوثيق نصف الحل، والمثابرة تضمن حقك"</p>
      </div>
      
      <div class="mt-4 p-4 bg-blue-100 rounded">
        <p class="text-sm text-blue-800"><strong>💪 تذكر دائماً:</strong> القانون في صفك، والجهات الرقابية موجودة لحمايتك. لا تتردد في المطالبة بحقك الكامل!</p>
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
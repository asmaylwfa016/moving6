import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">حل النزاعات في نقل العفش: دليل قانوني وعملي شامل</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-14">14 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>16 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/honest_excellent_moving_service_jeddah.jpg" alt="حل النزاعات في نقل العفش" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل تواجه نزاعاً مع شركة نقل العفش؟ لست وحدك! 35% من عمليات النقل في جدة تشهد خلافات متنوعة. هذا الدليل الشامل يزودك بكل الأدوات القانونية والعملية لحماية حقوقك وحل أي نزاع بفعالية، من المفاوضة الودية إلى الإجراءات القضائية.
    </p>
    
    <div class="bg-red-50 p-6 rounded-lg border-r-4 border-red-400">
      <h3 class="font-bold text-red-800 mb-2">⚖️ حقيقة مهمة</h3>
      <p>92% من النزاعات يمكن حلها ودياً إذا عرفت حقوقك وطرق التفاوض الصحيحة. المعرفة القانونية قوة!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أنواع النزاعات الشائعة في نقل العفش</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">💔 نزاعات الأضرار والتلف</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">كسر الأثاث</h4>
            <p class="text-sm">40% من النزاعات - تلف القطع أثناء النقل</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">خدش الجدران</h4>
            <p class="text-sm">25% من النزاعات - أضرار بالعقار</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">فقدان الممتلكات</h4>
            <p class="text-sm">15% من النزاعات - ضياع أغراض</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">تلف الأجهزة</h4>
            <p class="text-sm">20% من النزاعات - أعطال كهربائية</p>
          </div>
        </div>
      </div>
      
      <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h3 class="text-xl font-bold text-orange-800 mb-4">💰 نزاعات مالية وتعاقدية</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">رسوم إضافية</h4>
            <p class="text-sm">35% من النزاعات - مطالبات غير متفق عليها</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">تأخير التسليم</h4>
            <p class="text-sm">30% من النزاعات - عدم الالتزام بالمواعيد</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">إلغاء الخدمة</h4>
            <p class="text-sm">20% من النزاعات - رسوم الإلغاء</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">جودة الخدمة</h4>
            <p class="text-sm">15% من النزاعات - خدمة دون المستوى</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خطوات الوقاية من النزاعات</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <h3 class="text-xl font-bold text-green-800 mb-4">🛡️ الوقاية خير من العلاج</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">1. قبل التعاقد:</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="text-sm space-y-1">
              <li>• تحقق من تراخيص الشركة</li>
              <li>• اقرأ تقييمات العملاء السابقين</li>
              <li>• اطلب عقداً مفصلاً مكتوباً</li>
              <li>• وثق حالة الأثاث بالصور</li>
            </ul>
            <ul class="text-sm space-y-1">
              <li>• اسأل عن التأمين والضمانات</li>
              <li>• احصل على فاتورة تقديرية</li>
              <li>• وضح جميع التفاصيل الخاصة</li>
              <li>• احتفظ بنسخة من كل الوثائق</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">2. يوم النقل:</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="text-sm space-y-1">
              <li>• كن حاضراً طوال العملية</li>
              <li>• وثق بالفيديو والصور</li>
              <li>• راجع قائمة المحتويات</li>
              <li>• افحص كل قطعة قبل التحميل</li>
            </ul>
            <ul class="text-sm space-y-1">
              <li>• لا توقع إلا بعد المراجعة</li>
              <li>• سجل أي ملاحظات فوراً</li>
              <li>• احصل على إيصالات مكتوبة</li>
              <li>• تأكد من أرقام التواصل</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">استراتيجيات حل النزاعات</h2>
    
    <div class="space-y-6">
      <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <div class="flex items-center mb-4">
          <span class="bg-purple-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">1</span>
          <h3 class="text-xl font-bold text-purple-800">المرحلة الأولى: التواصل المباشر</h3>
        </div>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">خطوات التواصل الفعال:</h4>
            <ol class="text-sm space-y-1">
              <li>1. <strong>ابق هادئاً:</strong> تجنب الانفعال مهما كان الموقف</li>
              <li>2. <strong>وثق كل شيء:</strong> احتفظ بسجل مكتوب لكل المحادثات</li>
              <li>3. <strong>كن واضحاً:</strong> حدد المشكلة والحل المطلوب بدقة</li>
              <li>4. <strong>ضع مهلة زمنية:</strong> "أتوقع رداً خلال 48 ساعة"</li>
              <li>5. <strong>اطلب مسؤولاً:</strong> إذا لم تحصل على نتيجة</li>
            </ol>
          </div>
          
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">نموذج رسالة شكوى:</h4>
            <div class="bg-gray-100 p-3 rounded text-sm">
              <p><strong>التاريخ:</strong> [التاريخ]</p>
              <p><strong>إلى:</strong> إدارة شركة [اسم الشركة]</p>
              <p><strong>الموضوع:</strong> شكوى بخصوص خدمة النقل رقم [الرقم]</p>
              <p class="mt-2">السادة المحترمون،</p>
              <p>أتقدم بشكوى بخصوص [وصف المشكلة بالتفصيل]. حدث هذا في [التاريخ والوقت].</p>
              <p>المطلوب: [الحل المطلوب بوضوح]</p>
              <p>أرجو الرد خلال [المدة] وإلا سأضطر لاتخاذ الإجراءات القانونية.</p>
              <p>مع الشكر،</p>
              <p>[اسمك وتوقيعك]</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
        <div class="flex items-center mb-4">
          <span class="bg-indigo-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">2</span>
          <h3 class="text-xl font-bold text-indigo-800">المرحلة الثانية: الوساطة والتفاوض</h3>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-indigo-700 mb-3">تقنيات التفاوض:</h4>
            <ul class="text-sm space-y-1">
              <li>• ابدأ بطلب أعلى من توقعاتك</li>
              <li>• استخدم الأدلة (صور، فيديوهات)</li>
              <li>• أظهر استعدادك للتصعيد</li>
              <li>• اقترح حلولاً وسطية</li>
              <li>• حدد نقطة لا تراجع</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-indigo-700 mb-3">جهات الوساطة:</h4>
            <ul class="text-sm space-y-1">
              <li>• وزارة التجارة: 1900</li>
              <li>• جمعية حماية المستهلك</li>
              <li>• الغرفة التجارية بجدة</li>
              <li>• منصة تراضي الإلكترونية</li>
              <li>• مكاتب المحاماة المتخصصة</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-red-50 p-6 rounded-lg border border-red-200">
        <div class="flex items-center mb-4">
          <span class="bg-red-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">3</span>
          <h3 class="text-xl font-bold text-red-800">المرحلة الثالثة: الإجراءات القانونية</h3>
        </div>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">متى تلجأ للقضاء:</h4>
            <ul class="text-sm space-y-1">
              <li>• فشل جميع المحاولات الودية</li>
              <li>• أضرار كبيرة (أكثر من 5,000 ريال)</li>
              <li>• احتيال أو نصب واضح</li>
              <li>• رفض الشركة التعاون نهائياً</li>
              <li>• انتهاء مهل الإنذار القانونية</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">الخطوات القضائية:</h4>
            <ol class="text-sm space-y-1">
              <li>1. <strong>جمع الأدلة:</strong> كل الوثائق والمراسلات</li>
              <li>2. <strong>توكيل محامي:</strong> متخصص في القضايا التجارية</li>
              <li>3. <strong>رفع دعوى:</strong> في المحكمة المختصة</li>
              <li>4. <strong>المتابعة:</strong> حضور الجلسات والمرافعات</li>
              <li>5. <strong>التنفيذ:</strong> تنفيذ الحكم عبر الجهات المختصة</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الحقوق القانونية للعميل</h2>
    
    <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
      <h3 class="text-xl font-bold text-yellow-800 mb-4">⚖️ حقوقك المكفولة بالقانون</h3>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white border border-yellow-200 rounded-lg">
          <thead class="bg-yellow-100">
            <tr>
              <th class="px-4 py-3 text-right border-b">الحق القانوني</th>
              <th class="px-4 py-3 text-right border-b">الوصف</th>
              <th class="px-4 py-3 text-right border-b">المرجع القانوني</th>
              <th class="px-4 py-3 text-right border-b">العقوبة للمخالف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">التعويض عن الأضرار</td>
              <td class="px-4 py-3 border-b">تعويض كامل عن أي ضرر</td>
              <td class="px-4 py-3 border-b">نظام المعاملات المدنية</td>
              <td class="px-4 py-3 border-b">دفع قيمة الضرر + غرامة</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">الحصول على فاتورة</td>
              <td class="px-4 py-3 border-b">فاتورة مفصلة وواضحة</td>
              <td class="px-4 py-3 border-b">نظام الفوترة الإلكترونية</td>
              <td class="px-4 py-3 border-b">غرامة تصل 50,000 ريال</td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b font-semibold">الإلغاء والاسترجاع</td>
              <td class="px-4 py-3 border-b">حق الإلغاء خلال مدة محددة</td>
              <td class="px-4 py-3 border-b">نظام التجارة الإلكترونية</td>
              <td class="px-4 py-3 border-b">إرجاع المبلغ كاملاً</td>
            </tr>
            <tr>
              <td class="px-4 py-3 font-semibold">الحماية من الاحتيال</td>
              <td class="px-4 py-3">الحماية من الغش التجاري</td>
              <td class="px-4 py-3">نظام مكافحة الغش</td>
              <td class="px-4 py-3">السجن والغرامة المالية</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل التعامل مع أنواع الأضرار</h2>
    
    <div class="space-y-6">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">🔨 حالة: كسر الأثاث الثمين</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded border border-gray-200">
            <h4 class="font-bold text-gray-700 mb-2">الإجراءات الفورية:</h4>
            <ol class="text-sm space-y-1">
              <li>1. لا تحرك القطعة المكسورة</li>
              <li>2. صور من جميع الزوايا</li>
              <li>3. احصل على إقرار من العمال</li>
              <li>4. اتصل بالشركة فوراً</li>
              <li>5. احصل على تقرير خبير إذا لزم</li>
            </ol>
          </div>
          <div class="bg-white p-4 rounded border border-gray-200">
            <h4 class="font-bold text-gray-700 mb-2">حساب التعويض:</h4>
            <ul class="text-sm space-y-1">
              <li>• <strong>قابل للإصلاح:</strong> تكلفة الإصلاح + 20% نقص قيمة</li>
              <li>• <strong>تلف كامل:</strong> القيمة السوقية الحالية</li>
              <li>• <strong>قطع أثرية:</strong> تقييم خبير معتمد</li>
              <li>• <strong>أثاث مستورد:</strong> السعر + الجمارك + النقل</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">🏚️ حالة: أضرار بالعقار</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded border border-gray-200">
            <h4 class="font-bold text-gray-700 mb-2">أنواع الأضرار:</h4>
            <ul class="text-sm space-y-1">
              <li>• خدوش الجدران والأبواب</li>
              <li>• كسر البلاط أو الرخام</li>
              <li>• تلف تمديدات كهربائية</li>
              <li>• أضرار بالمصعد</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-gray-200">
            <h4 class="font-bold text-gray-700 mb-2">الإثبات والتوثيق:</h4>
            <ul class="text-sm space-y-1">
              <li>• تقرير من إدارة العقار</li>
              <li>• صور قبل وبعد</li>
              <li>• فواتير الإصلاح</li>
              <li>• شهادة شهود (الجيران/الحارس)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">نماذج وأدوات قانونية</h2>
    
    <div class="space-y-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">📝 نموذج إنذار قانوني</h3>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <div class="text-sm space-y-2">
            <p class="text-center font-bold">إنذار عدلي</p>
            <p><strong>المُنذِر:</strong> [اسمك الكامل] - [رقم الهوية]</p>
            <p><strong>المُنذَر إليه:</strong> شركة [اسم الشركة] - س.ت: [الرقم]</p>
            <p><strong>الموضوع:</strong> إنذار بالتعويض عن أضرار نقل العفش</p>
            <hr class="my-2">
            <p>بموجب العقد المؤرخ [التاريخ] والخاص بنقل العفش من [العنوان] إلى [العنوان]، وحيث أن شركتكم قد تسببت في [وصف الأضرار].</p>
            <p>لذا ننذركم بضرورة:</p>
            <ol>
              <li>1. دفع تعويض قدره [المبلغ] ريال</li>
              <li>2. خلال مدة أقصاها 7 أيام من تاريخه</li>
              <li>3. وإلا سنضطر لاتخاذ كافة الإجراءات القانونية</li>
            </ol>
            <p>مع حفظ كافة حقوقنا الأخرى.</p>
            <p><strong>التوقيع:</strong> _________________ <strong>التاريخ:</strong> _________________</p>
          </div>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">✅ قائمة التحقق القانونية</h3>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">المستندات المطلوبة:</h4>
            <ul class="text-sm space-y-1">
              <li>☐ العقد الأصلي موقع</li>
              <li>☐ الفاتورة والإيصالات</li>
              <li>☐ صور وفيديوهات الأضرار</li>
              <li>☐ المراسلات مع الشركة</li>
              <li>☐ تقارير الخبراء</li>
              <li>☐ شهادات الشهود</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">المواعيد المهمة:</h4>
            <ul class="text-sm space-y-1">
              <li>☐ 24 ساعة: للإبلاغ عن الضرر</li>
              <li>☐ 7 أيام: لتقديم شكوى رسمية</li>
              <li>☐ 30 يوم: للجوء للوساطة</li>
              <li>☐ 90 يوم: لرفع دعوى قضائية</li>
              <li>☐ سنة: مدة التقادم للمطالبة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">قصص نجاح: كيف حصلوا على حقوقهم</h2>
    
    <div class="space-y-6">
      <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 class="text-xl font-bold text-purple-800 mb-4">📖 القصة الأولى: تعويض 15,000 ريال</h3>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">المشكلة:</h4>
            <p class="text-sm">السيد خالد نقل أثاث منزله مع شركة معروفة. تضررت غرفة النوم الرئيسية (كسر المرآة وخدوش عميقة) وفُقد صندوق مجوهرات.</p>
          </div>
          
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">الإجراءات:</h4>
            <ol class="text-sm space-y-1">
              <li>1. وثق كل شيء بالصور والفيديو فور اكتشاف الضرر</li>
              <li>2. أرسل إنذاراً رسمياً خلال 48 ساعة</li>
              <li>3. رفض العرض الأول (3,000 ريال فقط)</li>
              <li>4. تقدم بشكوى لوزارة التجارة</li>
              <li>5. قدم تقييماً من خبير أثاث معتمد</li>
            </ol>
          </div>
          
          <div class="bg-purple-200 p-4 rounded border border-purple-400">
            <h4 class="font-bold text-purple-800 mb-2">النتيجة:</h4>
            <p class="text-sm">بعد 45 يوماً، حصل على تعويض 15,000 ريال (8,000 للأثاث + 7,000 للمجوهرات) بعد تدخل الوساطة.</p>
          </div>
        </div>
      </div>

      <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
        <h3 class="text-xl font-bold text-teal-800 mb-4">📖 القصة الثانية: استرداد كامل المبلغ</h3>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-teal-300">
            <h4 class="font-bold text-teal-700 mb-2">المشكلة:</h4>
            <p class="text-sm">السيدة نورا دفعت 4,500 ريال مقدماً لشركة نقل. الشركة لم تحضر في الموعد المحدد ورفضت إرجاع المبلغ.</p>
          </div>
          
          <div class="bg-white p-4 rounded border border-teal-300">
            <h4 class="font-bold text-teal-700 mb-2">الاستراتيجية الذكية:</h4>
            <ul class="text-sm space-y-1">
              <li>• بحثت عن الشركة ووجدت أنها غير مرخصة</li>
              <li>• تواصلت مع البنك وطلبت استرجاع المبلغ</li>
              <li>• قدمت بلاغاً للجهات المختصة</li>
              <li>• نشرت تحذيراً في وسائل التواصل</li>
            </ul>
          </div>
          
          <div class="bg-teal-200 p-4 rounded border border-teal-400">
            <h4 class="font-bold text-teal-800 mb-2">النتيجة:</h4>
            <p class="text-sm">استردت كامل المبلغ خلال أسبوعين عبر البنك، والشركة تم إغلاقها من الجهات المختصة.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل الجهات المختصة</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📞 أرقام وعناوين مهمة</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-700 mb-3">جهات حكومية:</h4>
          <div class="space-y-2 text-sm">
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>وزارة التجارة:</strong><br>
              الخط الساخن: 1900<br>
              الموقع: mc.gov.sa
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>وزارة العدل:</strong><br>
              ناجز: najiz.sa<br>
              الاستعلام: 1950
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>منصة تراضي:</strong><br>
              taradhi.sa<br>
              للصلح الإلكتروني
            </div>
          </div>
        </div>
        
        <div>
          <h4 class="font-bold text-gray-700 mb-3">جهات أخرى:</h4>
          <div class="space-y-2 text-sm">
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>جمعية حماية المستهلك:</strong><br>
              الهاتف: 0126514151<br>
              جدة - حي الروضة
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>الغرفة التجارية بجدة:</strong><br>
              الهاتف: 0126515555<br>
              خدمات فض المنازعات
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>مركز المساعدة القانونية:</strong><br>
              نقابة المحامين<br>
              استشارات مجانية
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: حقوقك مصانة.. فلا تتنازل عنها</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <p class="mb-4">
        النزاعات في نقل العفش ليست نهاية المطاف، بل فرصة لتعلم حقوقك وممارستها. القانون في صفك، والأدوات متاحة، والجهات المختصة جاهزة للمساعدة. المهم أن تتحرك بسرعة، توثق كل شيء، وتتبع الإجراءات الصحيحة.
      </p>
      
      <div class="bg-white p-4 rounded border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">⚖️ القاعدة الذهبية:</h4>
        <p class="text-sm">الوقاية خير من العلاج، لكن إذا وقع الضرر فالمعرفة القانونية والإصرار على الحق هما سلاحك للحصول على التعويض العادل.</p>
      </div>
      
      <div class="mt-4 p-4 bg-blue-100 rounded">
        <p class="text-sm text-blue-800"><strong>💪 تذكر دائماً:</strong> لا تتنازل عن حقك مهما كان صغيراً. كل تنازل يشجع على المزيد من التجاوزات!</p>
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
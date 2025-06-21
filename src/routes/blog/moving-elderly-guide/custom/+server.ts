import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">دليل نقل العفش لكبار السن في جدة: رعاية خاصة لانتقال مريح وآمن</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-16">16 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>17 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/jeddah_family_moving.jpg" alt="دليل نقل العفش لكبار السن" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      نقل العفش تجربة صعبة على الجميع، لكنها تحدٍ خاص لكبار السن الذين يتركون منازل عاشوا فيها عقوداً. هذا الدليل الشامل مصمم خصيصاً لمساعدة كبار السن وعائلاتهم في جدة على تخطيط وتنفيذ عملية نقل آمنة ومريحة تراعي احتياجاتهم الخاصة.
    </p>
    
    <div class="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-400">
      <h3 class="font-bold text-purple-800 mb-2">👴🏻👵🏻 إحصائية مهمة</h3>
      <p>78% من كبار السن فوق 65 عاماً في جدة يحتاجون لمساعدة متخصصة عند النقل، و92% منهم يعانون من ضغط نفسي شديد خلال هذه الفترة.</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التحديات الخاصة لنقل كبار السن</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">💙 التحديات العاطفية</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">التعلق بالمكان</h4>
            <p class="text-sm">ذكريات عقود من الحياة في نفس المنزل</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">الخوف من التغيير</h4>
            <p class="text-sm">القلق من البيئة الجديدة وفقدان الاستقلالية</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">فقدان الروابط</h4>
            <p class="text-sm">ترك الجيران والأصدقاء القدامى</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-blue-300">
            <h4 class="font-bold text-blue-700 mb-1">الضغط النفسي</h4>
            <p class="text-sm">التوتر والإرهاق من عملية النقل</p>
          </div>
        </div>
      </div>
      
      <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h3 class="text-xl font-bold text-orange-800 mb-4">🏥 التحديات الصحية</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">القدرة الحركية</h4>
            <p class="text-sm">صعوبة في التنقل والمساعدة في التعبئة</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">الأمراض المزمنة</h4>
            <p class="text-sm">الحاجة لاستمرار الرعاية الطبية</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">الأدوية والمعدات</h4>
            <p class="text-sm">نقل آمن للأدوية والأجهزة الطبية</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">التعب السريع</h4>
            <p class="text-sm">الحاجة لفترات راحة متكررة</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التخطيط المبكر: مفتاح النجاح</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <h3 class="text-xl font-bold text-green-800 mb-4">📅 جدول زمني مثالي (3 أشهر قبل النقل)</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">🗓️ الشهر الأول: التحضير النفسي</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="text-sm space-y-1">
              <li>• ناقش الأمر بهدوء مع كبير السن</li>
              <li>• زوروا المنزل الجديد عدة مرات</li>
              <li>• اشرح الإيجابيات والفوائد</li>
              <li>• اسمح بالتعبير عن المشاعر</li>
            </ul>
            <ul class="text-sm space-y-1">
              <li>• ابدأ بفرز الممتلكات تدريجياً</li>
              <li>• صور الذكريات المهمة</li>
              <li>• احتفظ بالأشياء ذات القيمة العاطفية</li>
              <li>• اشرك كبير السن في القرارات</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">🗓️ الشهر الثاني: الترتيبات العملية</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="text-sm space-y-1">
              <li>• اختر شركة نقل متخصصة</li>
              <li>• رتب المنزل الجديد مسبقاً</li>
              <li>• انقل السجلات الطبية</li>
              <li>• حدد الصيدليات القريبة</li>
            </ul>
            <ul class="text-sm space-y-1">
              <li>• سجل في مركز صحي قريب</li>
              <li>• تعرف على الخدمات المحلية</li>
              <li>• ابحث عن أنشطة اجتماعية</li>
              <li>• جهز قائمة بأرقام الطوارئ</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-green-300">
          <h4 class="font-bold text-green-700 mb-2">🗓️ الشهر الثالث: التنفيذ التدريجي</h4>
          <ul class="text-sm space-y-1">
            <li>• ابدأ بنقل الأشياء غير الضرورية يومياً</li>
            <li>• حافظ على الروتين اليومي قدر الإمكان</li>
            <li>• انقل غرفة واحدة في كل مرة</li>
            <li>• احرص على توفير مكان مريح للراحة</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">اختيار شركة النقل المناسبة</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">🚛 معايير خاصة لكبار السن</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-purple-700 mb-3">المواصفات المطلوبة:</h4>
          <ul class="text-sm space-y-1">
            <li>✅ خبرة في التعامل مع كبار السن</li>
            <li>✅ عمال مدربون على الصبر واللطف</li>
            <li>✅ مرونة في المواعيد والسرعة</li>
            <li>✅ توفير مقاعد مريحة أثناء النقل</li>
            <li>✅ إمكانية النقل على مراحل</li>
            <li>✅ خدمات إضافية (ترتيب، تنظيف)</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-purple-700 mb-3">أسئلة مهمة للشركة:</h4>
          <ul class="text-sm space-y-1">
            <li>• هل لديكم تجربة مع كبار السن؟</li>
            <li>• كيف تتعاملون مع الحالات الخاصة؟</li>
            <li>• هل يمكن توفير استراحات متكررة؟</li>
            <li>• ما مدى مرونتكم في التوقيت؟</li>
            <li>• هل تقدمون خدمة الترتيب النهائي؟</li>
            <li>• كيف تضمنون سلامة الأدوية والمعدات؟</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4 bg-white p-4 rounded border border-purple-300">
        <h4 class="font-bold text-purple-800 mb-2">⭐ شركات موصى بها في جدة:</h4>
        <p class="text-sm">ابحث عن شركات حاصلة على شهادات في "الرعاية الإنسانية" أو لديها برامج خاصة "لنقل كبار السن" مع مراجعات إيجابية من عائلات أخرى.</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التعبئة والتغليف الآمن</h2>
    
    <div class="space-y-6">
      <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
        <h3 class="text-xl font-bold text-indigo-800 mb-4">📦 نظام التعبئة المُيسر</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-indigo-300">
            <h4 class="font-bold text-indigo-700 mb-2">🔴 الأولوية القصوى</h4>
            <ul class="text-sm space-y-1">
              <li>• الأدوية والوصفات الطبية</li>
              <li>• الأجهزة الطبية</li>
              <li>• النظارات والسماعات</li>
              <li>• الوثائق المهمة</li>
              <li>• احتياجات يومية</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-indigo-300">
            <h4 class="font-bold text-indigo-700 mb-2">🟡 أساسيات الراحة</h4>
            <ul class="text-sm space-y-1">
              <li>• الفراش المفضل</li>
              <li>• الكرسي المريح</li>
              <li>• الملابس لأسبوع</li>
              <li>• أدوات النظافة</li>
              <li>• الصور العائلية</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-indigo-300">
            <h4 class="font-bold text-indigo-700 mb-2">🟢 الممتلكات العامة</h4>
            <ul class="text-sm space-y-1">
              <li>• الأثاث الكبير</li>
              <li>• أدوات المطبخ</li>
              <li>• الكتب والمجلات</li>
              <li>• الديكورات</li>
              <li>• الأشياء الإضافية</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-4 bg-white p-4 rounded border border-indigo-300">
          <h4 class="font-bold text-indigo-800 mb-2">💡 نصائح التعبئة:</h4>
          <ul class="text-sm space-y-1">
            <li>• استخدم ملصقات واضحة وكبيرة الخط</li>
            <li>• ضع الأشياء الثقيلة في صناديق صغيرة</li>
            <li>• احتفظ بصندوق "اليوم الأول" منفصل</li>
            <li>• صور محتويات كل صندوق</li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 class="text-xl font-bold text-yellow-800 mb-4">⚕️ نقل المعدات الطبية</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full bg-white border border-yellow-200 rounded-lg">
            <thead class="bg-yellow-100">
              <tr>
                <th class="px-4 py-3 text-right border-b">المعدة</th>
                <th class="px-4 py-3 text-right border-b">طريقة النقل</th>
                <th class="px-4 py-3 text-right border-b">احتياطات خاصة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 border-b">أجهزة الأكسجين</td>
                <td class="px-4 py-3 border-b">مع المريض مباشرة</td>
                <td class="px-4 py-3 border-b">تأكد من شحن البطاريات</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">الكراسي المتحركة</td>
                <td class="px-4 py-3 border-b">آخر ما يُحمل، أول ما يُنزل</td>
                <td class="px-4 py-3 border-b">تثبيت جيد لمنع التلف</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">أجهزة قياس السكر/الضغط</td>
                <td class="px-4 py-3 border-b">حقيبة يد شخصية</td>
                <td class="px-4 py-3 border-b">مع بطاريات احتياطية</td>
              </tr>
              <tr>
                <td class="px-4 py-3">المشايات والعكازات</td>
                <td class="px-4 py-3">سهلة الوصول</td>
                <td class="px-4 py-3">ربطها معاً لعدم الضياع</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">يوم النقل: إدارة مثالية</h2>
    
    <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
      <h3 class="text-xl font-bold text-teal-800 mb-4">🌅 برنامج اليوم المثالي</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-2">قبل وصول الشركة:</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <ul class="space-y-1">
              <li>✓ إفطار مغذي لكبير السن</li>
              <li>✓ تناول الأدوية في موعدها</li>
              <li>✓ ارتداء ملابس مريحة</li>
              <li>✓ تجهيز حقيبة شخصية</li>
            </ul>
            <ul class="space-y-1">
              <li>✓ شحن الهاتف والأجهزة</li>
              <li>✓ وضع كرسي مريح للجلوس</li>
              <li>✓ تحضير وجبات خفيفة وماء</li>
              <li>✓ التأكد من وجود مرافق</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-2">أثناء النقل:</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>كل 30 دقيقة:</strong>
              <ul class="space-y-1 mt-1">
                <li>• تفقد حالة كبير السن</li>
                <li>• تقديم الماء</li>
                <li>• السؤال عن الراحة</li>
              </ul>
            </div>
            <div>
              <strong>كل ساعة:</strong>
              <ul class="space-y-1 mt-1">
                <li>• استراحة إجبارية</li>
                <li>• المشي قليلاً</li>
                <li>• تناول وجبة خفيفة</li>
              </ul>
            </div>
            <div>
              <strong>عند الحاجة:</strong>
              <ul class="space-y-1 mt-1">
                <li>• دورة المياه</li>
                <li>• تناول الأدوية</li>
                <li>• الراحة الكاملة</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-teal-300">
          <h4 class="font-bold text-teal-700 mb-2">في المنزل الجديد:</h4>
          <ol class="text-sm space-y-1">
            <li>1. إنزال وترتيب غرفة النوم أولاً</li>
            <li>2. تجهيز دورة المياه بالضروريات</li>
            <li>3. وضع الأدوية في مكان واضح</li>
            <li>4. ترتيب المطبخ بالأساسيات</li>
            <li>5. التأكد من عمل جميع الأجهزة</li>
            <li>6. ترك باقي الترتيب لأيام لاحقة</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التأقلم في المنزل الجديد</h2>
    
    <div class="space-y-6">
      <div class="bg-pink-50 p-6 rounded-lg border border-pink-200">
        <h3 class="text-xl font-bold text-pink-800 mb-4">🏡 الأسبوع الأول: التكيف التدريجي</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-pink-700 mb-3">الروتين اليومي:</h4>
            <ul class="text-sm space-y-1">
              <li>• الحفاظ على مواعيد النوم والاستيقاظ</li>
              <li>• تناول الوجبات في أوقات محددة</li>
              <li>• ممارسة الأنشطة المعتادة</li>
              <li>• الصلاة في أوقاتها</li>
              <li>• مشاهدة البرامج المفضلة</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-pink-700 mb-3">الأمان والراحة:</h4>
            <ul class="text-sm space-y-1">
              <li>• وضع إضاءة ليلية في الممرات</li>
              <li>• تثبيت مقابض في دورة المياه</li>
              <li>• إزالة السجاد الصغير (خطر التعثر)</li>
              <li>• وضع أرقام الطوارئ بخط كبير</li>
              <li>• التأكد من سهولة الوصول للهاتف</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">🤝 بناء العلاقات الجديدة</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">مع الجيران:</h4>
            <ul class="text-sm space-y-1">
              <li>• تقديم كبير السن للجيران</li>
              <li>• توضيح أي احتياجات خاصة</li>
              <li>• تبادل أرقام الهواتف</li>
              <li>• المشاركة في اللقاءات</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">المراكز الاجتماعية:</h4>
            <ul class="text-sm space-y-1">
              <li>• مراكز كبار السن</li>
              <li>• المساجد القريبة</li>
              <li>• النوادي الاجتماعية</li>
              <li>• حلقات القرآن</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-2">الخدمات المحلية:</h4>
            <ul class="text-sm space-y-1">
              <li>• الصيدلية الأقرب</li>
              <li>• البقالة والسوبرماركت</li>
              <li>• المركز الصحي</li>
              <li>• خدمات التوصيل</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الدعم النفسي والعاطفي</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">💚 استراتيجيات الدعم النفسي</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">علامات تحتاج للانتباه:</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>علامات طبيعية مؤقتة:</strong>
              <ul class="space-y-1 mt-1">
                <li>• الحزن على المنزل القديم</li>
                <li>• صعوبة النوم أول أيام</li>
                <li>• فقدان الشهية المؤقت</li>
                <li>• البحث عن الأشياء</li>
              </ul>
            </div>
            <div>
              <strong>علامات تستدعي التدخل:</strong>
              <ul class="space-y-1 mt-1 text-red-600">
                <li>• الاكتئاب المستمر</li>
                <li>• رفض الطعام لأيام</li>
                <li>• العزلة التامة</li>
                <li>• الارتباك الشديد</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-2">طرق الدعم الفعال:</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <ul class="space-y-1">
              <li>• الزيارات المتكررة من الأحباء</li>
              <li>• الاتصال اليومي بالأصدقاء القدامى</li>
              <li>• إحضار أطعمة مفضلة من المطاعم القديمة</li>
              <li>• المحافظة على الهوايات والأنشطة</li>
            </ul>
            <ul class="space-y-1">
              <li>• تزيين المنزل بالصور والذكريات</li>
              <li>• الخروج لاستكشاف الحي الجديد</li>
              <li>• دعوة الأصدقاء لزيارة المنزل الجديد</li>
              <li>• الاحتفال بالإنجازات الصغيرة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">قصص نجاح ملهمة</h2>
    
    <div class="space-y-6">
      <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 class="text-xl font-bold text-purple-800 mb-4">📖 قصة الحاج عبدالله (78 عاماً)</h3>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">التحدي:</h4>
            <p class="text-sm">عاش 45 عاماً في منزله بحي البلد، مع ذكريات الزوجة الراحلة. الأبناء أرادوا نقله لشقة حديثة في النزهة قريبة منهم.</p>
          </div>
          
          <div class="bg-white p-4 rounded border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2">الاستراتيجية:</h4>
            <ul class="text-sm space-y-1">
              <li>• بدأ الأبناء بإحضاره للمبيت في الشقة الجديدة تدريجياً</li>
              <li>• نقلوا أثاث غرفته كما هي بنفس الترتيب</li>
              <li>• جلبوا جيرانه القدامى لزيارته</li>
              <li>• ساعدوه في إيجاد مسجد يحب أهله</li>
            </ul>
          </div>
          
          <div class="bg-purple-200 p-4 rounded border border-purple-400">
            <h4 class="font-bold text-purple-800 mb-2">النتيجة:</h4>
            <p class="text-sm">بعد 3 أشهر، أصبح الحاج عبدالله سعيداً في منزله الجديد، مع أصدقاء جدد في المسجد، ويزور أحفاده يومياً!</p>
          </div>
        </div>
      </div>

      <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
        <h3 class="text-xl font-bold text-teal-800 mb-4">📖 قصة الحاجة فاطمة (82 عاماً)</h3>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border border-teal-300">
            <h4 class="font-bold text-teal-700 mb-2">التحدي:</h4>
            <p class="text-sm">تستخدم كرسي متحرك، وتحتاج لغسيل كلى. انتقلت من منزل بدور أرضي إلى شقة بالدور الثاني.</p>
          </div>
          
          <div class="bg-white p-4 rounded border border-teal-300">
            <h4 class="font-bold text-teal-700 mb-2">الحلول المبتكرة:</h4>
            <ul class="text-sm space-y-1">
              <li>• اختاروا شقة بمصعد واسع ومولد كهرباء</li>
              <li>• جهزوا غرفة خاصة لجلسات الغسيل المنزلية</li>
              <li>• وضعوا مقابض وتجهيزات خاصة في كل مكان</li>
              <li>• رتبوا مع الجيران للمساعدة في الطوارئ</li>
            </ul>
          </div>
          
          <div class="bg-teal-200 p-4 rounded border border-teal-400">
            <h4 class="font-bold text-teal-800 mb-2">النتيجة:</h4>
            <p class="text-sm">الحاجة فاطمة الآن أكثر استقلالية في منزلها الجديد المجهز، مع رعاية طبية أفضل وقرب من المستشفى.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل الخدمات المتخصصة في جدة</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📍 خدمات مفيدة لكبار السن</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-700 mb-3">خدمات طبية:</h4>
          <div class="space-y-2 text-sm">
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>الرعاية المنزلية:</strong><br>
              وزارة الصحة - خدمة (صحة)<br>
              937 للاستفسار
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>العلاج الطبيعي المنزلي:</strong><br>
              مراكز متخصصة متعددة<br>
              خدمات يومية وأسبوعية
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>توصيل الأدوية:</strong><br>
              صيدليات النهدي والدواء<br>
              خدمة مجانية لكبار السن
            </div>
          </div>
        </div>
        
        <div>
          <h4 class="font-bold text-gray-700 mb-3">خدمات اجتماعية:</h4>
          <div class="space-y-2 text-sm">
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>مراكز الرعاية النهارية:</strong><br>
              جمعية البر بجدة<br>
              أنشطة يومية وبرامج صحية
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>نوادي كبار السن:</strong><br>
              مراكز الأحياء<br>
              برامج ثقافية واجتماعية
            </div>
            <div class="bg-white p-3 rounded border border-gray-200">
              <strong>خدمات النقل الخاص:</strong><br>
              شركات متخصصة<br>
              مواعيد طبية وتسوق
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: رحلة جديدة مليئة بالأمل</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-400">
      <p class="mb-4">
        نقل كبار السن ليس مجرد نقل أثاث، بل نقل حياة كاملة بذكرياتها وعاداتها وروابطها. بالتخطيط الجيد والصبر والحب، يمكن تحويل هذه التجربة من تحدٍ مرهق إلى بداية جديدة مفعمة بالراحة والأمان.
      </p>
      
      <div class="bg-white p-4 rounded border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-2">💜 الرسالة الأهم:</h4>
        <p class="text-sm">كبار السن كنوزنا وبركة بيوتنا. استثمروا في راحتهم وسعادتهم، فدعاؤهم لكم لا يُقدر بثمن.</p>
      </div>
      
      <div class="mt-4 p-4 bg-purple-100 rounded">
        <p class="text-sm text-purple-800"><strong>🤲 دعاء:</strong> اللهم ارحم آباءنا وأمهاتنا، واجعل آخر أيامهم خير أيامهم، وارزقنا برّهم والإحسان إليهم.</p>
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
import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">دليل نقل الأثاث الثمين والأنتيك في جدة: التغليف، التأمين، والتكاليف</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-16">16 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>16 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/jeddah_furniture_wrapping_1.jpg" alt="نقل الأثاث الثمين في جدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل تملك قطعاً أثرية ثمينة أو تحفاً فنية تحتاج لنقلها بأمان تام؟ نقل <strong>الأثاث الثمين والأنتيك</strong> في جدة يتطلب خبرة متخصصة وتقنيات خاصة لضمان وصول كنوزك بحالة مثالية. هذا الدليل الشامل يوضح كل ما تحتاجه من تقنيات التغليف المتطورة إلى أفضل شركات النقل المتخصصة.
    </p>
    
    <div class="bg-amber-50 p-6 rounded-lg border-r-4 border-amber-400">
      <h3 class="font-bold text-amber-800 mb-2">⚠️ إحصائية مهمة</h3>
      <p>وفقاً لإحصائيات التأمين، 65% من أضرار الأثاث الثمين تحدث أثناء النقل بسبب التغليف غير المناسب أو الخبرة المحدودة. الاستثمار في خدمة متخصصة يقلل المخاطر بنسبة 90%.</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تصنيف الأثاث الثمين: ما الذي يحتاج عناية خاصة؟</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-red-600">قطع عالية المخاطر</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="text-red-500 mr-2">🔴</span>
            <div>
              <strong>التحف الأثرية والأنتيك</strong>
              <p class="text-sm text-gray-600">قطع عمرها أكثر من 100 سنة، خشب قديم هش</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-red-500 mr-2">🔴</span>
            <div>
              <strong>الأعمال الفنية واللوحات</strong>
              <p class="text-sm text-gray-600">لوحات زيتية، أكواريل، أعمال على قماش</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-red-500 mr-2">🔴</span>
            <div>
              <strong>المرايا والزجاج الأثري</strong>
              <p class="text-sm text-gray-600">مرايا بإطارات مذهبة، زجاج بنيسي، كريستال</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-red-500 mr-2">🔴</span>
            <div>
              <strong>الآثار والمخطوطات</strong>
              <p class="text-sm text-gray-600">قطع أثرية، مخطوطات، كتب نادرة</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-orange-600">قطع متوسطة المخاطر</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="text-orange-500 mr-2">🟠</span>
            <div>
              <strong>الأثاث الخشبي الفاخر</strong>
              <p class="text-sm text-gray-600">طاولات ماهوجني، كراسي منحوتة، خزائن كلاسيكية</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-orange-500 mr-2">🟠</span>
            <div>
              <strong>الأثاث المطعم بالصدف</strong>
              <p class="text-sm text-gray-600">قطع شامية مطعمة، صناديق خشبية مزخرفة</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-orange-500 mr-2">🟠</span>
            <div>
              <strong>البيانو والآلات الموسيقية</strong>
              <p class="text-sm text-gray-600">بيانو، عود، آلات وترية قديمة</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-orange-500 mr-2">🟠</span>
            <div>
              <strong>السجاد الفاخر والتراثي</strong>
              <p class="text-sm text-gray-600">سجاد فارسي، كليم تراثي، قطع منسوجة يدوياً</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">تقنيات التغليف المتخصصة</h2>
    
    <div class="space-y-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-blue-800 mb-4">🎨 تغليف اللوحات والأعمال الفنية</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold mb-2">الطريقة الاحترافية:</h4>
            <ol class="text-sm space-y-1">
              <li>1. تنظيف سطح اللوحة بفرشاة ناعمة</li>
              <li>2. وضع ورق مقاوم للأحماض على الوجه</li>
              <li>3. تثبيت في صندوق خشبي مبطن</li>
              <li>4. ملء الفراغات بفوم مضاد للصدمات</li>
              <li>5. وضع علامات "هش" و"لا يقلب"</li>
            </ol>
          </div>
          <div>
            <h4 class="font-semibold mb-2">المواد المطلوبة:</h4>
            <ul class="text-sm space-y-1">
              <li>• ورق خالي من الأحماض</li>
              <li>• فوم بولي إيثيلين</li>
              <li>• صناديق خشبية مقواة</li>
              <li>• شريط تثبيت قوي</li>
              <li>• مواد توسيد مرنة</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 p-3 bg-blue-100 rounded">
          <p class="text-xs text-blue-800"><strong>تكلفة التغليف:</strong> 200-500 ريال للوحة حسب الحجم والقيمة</p>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-green-800 mb-4">🪑 تغليف الأثاث الخشبي الأثري</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold mb-2">خطوات التحضير:</h4>
            <ol class="text-sm space-y-1">
              <li>1. توثيق الحالة بالصور من جميع الزوايا</li>
              <li>2. إزالة الأجزاء القابلة للفصل بعناية</li>
              <li>3. تنظيف بمواد لطيفة متخصصة</li>
              <li>4. معالجة الخدوش الصغيرة</li>
              <li>5. تطبيق طبقة حماية مؤقتة</li>
            </ol>
          </div>
          <div>
            <h4 class="font-semibold mb-2">تقنية التغليف:</h4>
            <ul class="text-sm space-y-1">
              <li>• بطانيات متخصصة للأثاث</li>
              <li>• أغلفة بلاستيكية قابلة للتنفس</li>
              <li>• واقيات زوايا مبطنة</li>
              <li>• شرائح خشبية لتوزيع الضغط</li>
              <li>• حبال ناعمة عالية الجودة</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 p-3 bg-green-100 rounded">
          <p class="text-xs text-green-800"><strong>تكلفة التغليف:</strong> 300-800 ريال للقطعة حسب الحجم والتعقيد</p>
        </div>
      </div>

      <div class="bg-purple-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-purple-800 mb-4">🎼 تغليف البيانو والآلات الموسيقية</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold mb-2">البيانو العمودي:</h4>
            <ol class="text-sm space-y-1">
              <li>1. إقفال الغطاء وتثبيت المفاتيح</li>
              <li>2. حماية الدواسات بمواد مبطنة</li>
              <li>3. تغليف الجوانب ببطانيات ثقيلة</li>
              <li>4. استخدام عربة نقل متخصصة</li>
              <li>5. تثبيت في الشاحنة بأحزمة قوية</li>
            </ol>
          </div>
          <div>
            <h4 class="font-semibold mb-2">الآلات الوترية:</h4>
            <ul class="text-sm space-y-1">
              <li>• إرخاء الأوتار لتقليل التوتر</li>
              <li>• حالات نقل مبطنة مخصصة</li>
              <li>• مواد توسيد داخلية إضافية</li>
              <li>• تجنب التغيرات الحرارية المفاجئة</li>
              <li>• نقل في الوضع الصحيح فقط</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 p-3 bg-purple-100 rounded">
          <p class="text-xs text-purple-800"><strong>تكلفة التغليف:</strong> 500-1,200 ريال للبيانو، 100-300 ريال للآلات الأخرى</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">التأمين الشامل: حماية استثمارك الثمين</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-red-50 p-6 rounded-lg border border-red-200">
        <h3 class="text-lg font-bold text-red-800 mb-3">🛡️ أنواع التغطية التأمينية</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-semibold text-red-700">التأمين الأساسي</h4>
            <p class="text-sm">تغطية محدودة: 5-10 ريال/كيلو</p>
            <p class="text-xs text-red-600">غير كافي للقطع الثمينة</p>
          </div>
          <div>
            <h4 class="font-semibold text-red-700">التأمين الشامل</h4>
            <p class="text-sm">تغطية كاملة بالقيمة المعلنة</p>
            <p class="text-xs text-red-600">مطلوب تقييم مسبق</p>
          </div>
          <div>
            <h4 class="font-semibold text-red-700">التأمين المتخصص</h4>
            <p class="text-sm">للتحف والأعمال الفنية</p>
            <p class="text-xs text-red-600">يشمل أضرار المناخ والاهتزاز</p>
          </div>
        </div>
      </div>
      
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-lg font-bold text-green-800 mb-3">📋 متطلبات التأمين</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>تقييم مسبق من خبير معتمد</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>توثيق مصور شامل للحالة</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>شهادة أصالة للقطع الأثرية</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>قوائم جرد مفصلة بالقيم</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>شروط خاصة للنقل والتخزين</span>
          </li>
        </ul>
        
        <div class="mt-4 p-3 bg-green-100 rounded">
          <h4 class="font-semibold text-green-800 text-sm">تكلفة التأمين الشامل:</h4>
          <p class="text-xs text-green-700">1.5-3% من قيمة القطعة سنوياً</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أفضل شركات النقل المتخصصة في جدة</h2>
    
    <div class="space-y-6">
      <div class="bg-gradient-to-r from-gold-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
        <div class="flex items-center mb-3">
          <span class="bg-yellow-500 text-white text-lg font-bold px-3 py-1 rounded-full mr-3">1</span>
          <h3 class="text-xl font-bold text-yellow-800">مؤسسة الإتقان للنقل المتخصص</h3>
          <span class="mr-auto text-yellow-600 font-bold">★★★★★</span>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div>
            <h4 class="font-bold mb-2">التخصصات:</h4>
            <ul class="text-sm space-y-1">
              <li>• التحف والأنتيك</li>
              <li>• الأعمال الفنية</li>
              <li>• البيانو والآلات</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">الخدمات:</h4>
            <ul class="text-sm space-y-1">
              <li>• تقييم مجاني</li>
              <li>• تغليف متخصص</li>
              <li>• تأمين شامل</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">التكلفة:</h4>
            <ul class="text-sm space-y-1">
              <li>• أساسية: 200% من النقل العادي</li>
              <li>• متخصصة: 300-400%</li>
              <li>• استشارة: 300 ريال</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300">
        <div class="flex items-center mb-3">
          <span class="bg-blue-500 text-white text-lg font-bold px-3 py-1 rounded-full mr-3">2</span>
          <h3 class="text-xl font-bold text-blue-800">شركة الفن والتراث للنقل</h3>
          <span class="mr-auto text-blue-600 font-bold">★★★★☆</span>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div>
            <h4 class="font-bold mb-2">التخصصات:</h4>
            <ul class="text-sm space-y-1">
              <li>• المخطوطات</li>
              <li>• السجاد التراثي</li>
              <li>• الخزف والفخار</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">الخدمات:</h4>
            <ul class="text-sm space-y-1">
              <li>• ترميم طارئ</li>
              <li>• تخزين مناخي</li>
              <li>• نقل دولي</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">التكلفة:</h4>
            <ul class="text-sm space-y-1">
              <li>• معقولة: 150-250% إضافي</li>
              <li>• تقييم: 200 ريال</li>
              <li>• استشارة: مجانية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-300">
        <div class="flex items-center mb-3">
          <span class="bg-green-500 text-white text-lg font-bold px-3 py-1 rounded-full mr-3">3</span>
          <h3 class="text-xl font-bold text-green-800">خدمات النقل الملكي</h3>
          <span class="mr-auto text-green-600 font-bold">★★★★☆</span>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div>
            <h4 class="font-bold mb-2">التخصصات:</h4>
            <ul class="text-sm space-y-1">
              <li>• المجوهرات</li>
              <li>• القطع الملكية</li>
              <li>• الساعات النادرة</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">الخدمات:</h4>
            <ul class="text-sm space-y-1">
              <li>• حراسة مسلحة</li>
              <li>• مركبات مصفحة</li>
              <li>• تتبع GPS</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">التكلفة:</h4>
            <ul class="text-sm space-y-1">
              <li>• مرتفعة: 400-600% إضافي</li>
              <li>• حد أدنى: 5,000 ريال</li>
              <li>• حراسة: 500 ريال/ساعة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">دليل التكاليف الشامل</h2>
    
    <div class="overflow-x-auto">
      <table class="w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-right border-b">نوع القطعة</th>
            <th class="px-4 py-3 text-right border-b">التقييم</th>
            <th class="px-4 py-3 text-right border-b">التغليف</th>
            <th class="px-4 py-3 text-right border-b">النقل</th>
            <th class="px-4 py-3 text-right border-b">التأمين</th>
            <th class="px-4 py-3 text-right border-b">الإجمالي</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">لوحة زيتية صغيرة</td>
            <td class="px-4 py-3 border-b">300 ريال</td>
            <td class="px-4 py-3 border-b">200 ريال</td>
            <td class="px-4 py-3 border-b">400 ريال</td>
            <td class="px-4 py-3 border-b">200 ريال</td>
            <td class="px-4 py-3 border-b">1,100 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">طقم أثاث أنتيك</td>
            <td class="px-4 py-3 border-b">500 ريال</td>
            <td class="px-4 py-3 border-b">800 ريال</td>
            <td class="px-4 py-3 border-b">1,500 ريال</td>
            <td class="px-4 py-3 border-b">600 ريال</td>
            <td class="px-4 py-3 border-b">3,400 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">بيانو عمودي</td>
            <td class="px-4 py-3 border-b">200 ريال</td>
            <td class="px-4 py-3 border-b">500 ريال</td>
            <td class="px-4 py-3 border-b">1,200 ريال</td>
            <td class="px-4 py-3 border-b">400 ريال</td>
            <td class="px-4 py-3 border-b">2,300 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 border-b font-semibold">سجادة فارسية</td>
            <td class="px-4 py-3 border-b">400 ريال</td>
            <td class="px-4 py-3 border-b">300 ريال</td>
            <td class="px-4 py-3 border-b">600 ريال</td>
            <td class="px-4 py-3 border-b">300 ريال</td>
            <td class="px-4 py-3 border-b">1,600 ريال</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold">مجموعة مخطوطات</td>
            <td class="px-4 py-3">600 ريال</td>
            <td class="px-4 py-3">400 ريال</td>
            <td class="px-4 py-3">800 ريال</td>
            <td class="px-4 py-3">500 ريال</td>
            <td class="px-4 py-3">2,300 ريال</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="mt-4 grid md:grid-cols-2 gap-4">
      <div class="bg-blue-50 p-4 rounded">
        <h4 class="font-bold text-blue-800 mb-2">عوامل التكلفة الإضافية:</h4>
        <ul class="text-sm space-y-1">
          <li>• النقل للطوابق العليا: +50-200 ريال</li>
          <li>• التخزين المؤقت: 100-300 ريال/يوم</li>
          <li>• النقل الطارئ: +50% من التكلفة</li>
          <li>• المسافات الطويلة: +30-50%</li>
        </ul>
      </div>
      <div class="bg-green-50 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">طرق التوفير:</h4>
        <ul class="text-sm space-y-1">
          <li>• التخطيط المسبق: خصم 10-15%</li>
          <li>• النقل الجماعي: خصم 20%</li>
          <li>• التغليف الذاتي: توفير 30%</li>
          <li>• التقييم الذاتي: توفير 200-600 ريال</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خطة عمل شاملة لنقل آمن</h2>
    
    <div class="space-y-6">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold mb-4">📅 الجدول الزمني المثالي (6-8 أسابيع قبل النقل)</h3>
        
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded mr-3 mt-1">6-8</span>
            <div>
              <h4 class="font-semibold">أسابيع قبل النقل: التخطيط والتقييم</h4>
              <ul class="text-sm text-gray-600 mt-1">
                <li>• جرد شامل للقطع الثمينة</li>
                <li>• الحصول على تقييمات احترافية</li>
                <li>• البحث عن شركات متخصصة</li>
                <li>• الحصول على عروض أسعار مفصلة</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded mr-3 mt-1">4-5</span>
            <div>
              <h4 class="font-semibold">أسابيع قبل النقل: الحجز والتأمين</h4>
              <ul class="text-sm text-gray-600 mt-1">
                <li>• حجز الشركة المختارة</li>
                <li>• ترتيب التأمين المناسب</li>
                <li>• طلب مواد التغليف المتخصصة</li>
                <li>• تحديد مواعيد التغليف والنقل</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded mr-3 mt-1">2-3</span>
            <div>
              <h4 class="font-semibold">أسابيع قبل النقل: التحضير النهائي</h4>
              <ul class="text-sm text-gray-600 mt-1">
                <li>• التوثيق المصور الشامل</li>
                <li>• بدء عملية التغليف التدريجي</li>
                <li>• تأكيد جميع التفاصيل مع الشركة</li>
                <li>• تحضير مكان الاستقبال</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded mr-3 mt-1">0-1</span>
            <div>
              <h4 class="font-semibold">أسبوع قبل النقل: اللمسات الأخيرة</h4>
              <ul class="text-sm text-gray-600 mt-1">
                <li>• إنهاء التغليف النهائي</li>
                <li>• تأكيد المواعيد والتفاصيل</li>
                <li>• تحضير الإرشادات المكتوبة</li>
                <li>• الاستعداد ليوم النقل</li>
              </ul>
            </div>
          </div>
        </div>
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
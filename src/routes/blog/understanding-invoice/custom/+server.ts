import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">فهم فاتورة نقل العفش: دليل شامل لقراءة وفهم كل بند</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-06">6 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>13 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/reliable_movers_jeddah.jpg" alt="دليل فهم فاتورة نقل العفش في جدة" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل وصلتك فاتورة نقل العفش وشعرت بالحيرة من البنود والأرقام؟ أنت لست وحدك! 65% من العملاء في جدة لا يفهمون تفاصيل فواتير النقل، مما يجعلهم عرضة للاستغلال. هذا الدليل المفصل يشرح لك كل بند في فاتورة النقل وكيفية التأكد من صحتها.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <h3 class="font-bold text-blue-800 mb-2">💡 نصيحة مهمة</h3>
      <p>فهم فاتورة النقل ليس مجرد رقم نهائي، بل مفتاح لتقييم عدالة السعر، اكتشاف الأخطاء، والتفاوض على تحسين الخدمة. استثمر 10 دقائق في فهم فاتورتك لتوفر مئات الريالات!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">مكونات فاتورة النقل الأساسية</h2>
    
    <div class="space-y-6">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">📋 القسم الأول: معلومات الشركة والعميل</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded border border-gray-200">
            <h4 class="font-bold text-gray-700 mb-3">بيانات الشركة (يجب التحقق منها):</h4>
            <ul class="text-sm space-y-1">
              <li>• <strong>اسم الشركة الكامل:</strong> كما هو مسجل رسمياً</li>
              <li>• <strong>السجل التجاري:</strong> رقم السجل ومدينة الإصدار</li>
              <li>• <strong>الرقم الضريبي:</strong> للشركات المسجلة ضريبياً</li>
              <li>• <strong>رقم الترخيص:</strong> ترخيص نقل العفش</li>
              <li>• <strong>العنوان:</strong> عنوان المقر الرئيسي</li>
              <li>• <strong>أرقام التواصل:</strong> ثابت ومحمول</li>
            </ul>
            
            <div class="mt-3 p-2 bg-red-100 rounded">
              <p class="text-xs text-red-700"><strong>تحذير:</strong> تأكد من وجود جميع هذه البيانات. الشركات غير المرخصة قد تتجنب ذكرها.</p>
            </div>
          </div>
          
          <div class="bg-white p-4 rounded border border-gray-200">
            <h4 class="font-bold text-gray-700 mb-3">بياناتك كعميل:</h4>
            <ul class="text-sm space-y-1">
              <li>• <strong>الاسم الكامل:</strong> كما هو في الهوية</li>
              <li>• <strong>رقم الهوية:</strong> للمواطنين أو الإقامة للمقيمين</li>
              <li>• <strong>رقم الجوال:</strong> للتواصل</li>
              <li>• <strong>العنوان الحالي:</strong> مكان استلام العفش</li>
              <li>• <strong>العنوان الجديد:</strong> مكان التسليم</li>
              <li>• <strong>تاريخ الخدمة:</strong> يوم ووقت النقل</li>
            </ul>
            
            <div class="mt-3 p-2 bg-green-100 rounded">
              <p class="text-xs text-green-700"><strong>نصيحة:</strong> تأكد من صحة جميع بياناتك لتجنب المشاكل القانونية أو التأمينية.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">💰 القسم الثاني: تفصيل التكاليف</h3>
        
        <div class="bg-white p-4 rounded border border-gray-200">
          <h4 class="font-bold text-gray-700 mb-3">أ) التكلفة الأساسية:</h4>
          
          <div class="overflow-x-auto">
            <table class="w-full border border-gray-300 rounded">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-3 py-2 text-right border-b">البند</th>
                  <th class="px-3 py-2 text-right border-b">التفسير</th>
                  <th class="px-3 py-2 text-right border-b">السعر المعتاد</th>
                  <th class="px-3 py-2 text-right border-b">ملاحظات</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr>
                  <td class="px-3 py-2 border-b font-semibold">النقل الأساسي</td>
                  <td class="px-3 py-2 border-b">نقل العفش من نقطة لأخرى</td>
                  <td class="px-3 py-2 border-b">1,500-3,500 ريال</td>
                  <td class="px-3 py-2 border-b">حسب المسافة والحجم</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 border-b font-semibold">العمالة</td>
                  <td class="px-3 py-2 border-b">أجور العمال (عادة 2-4 عمال)</td>
                  <td class="px-3 py-2 border-b">200-400 ريال</td>
                  <td class="px-3 py-2 border-b">قد يكون مشمول في النقل</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 border-b font-semibold">الشاحنة</td>
                  <td class="px-3 py-2 border-b">أجرة الشاحنة والوقود</td>
                  <td class="px-3 py-2 border-b">300-800 ريال</td>
                  <td class="px-3 py-2 border-b">حسب نوع وحجم الشاحنة</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-semibold">المسافة</td>
                  <td class="px-3 py-2">تكلفة إضافية للمسافات الطويلة</td>
                  <td class="px-3 py-2">5-10 ريال/كم</td>
                  <td class="px-3 py-2">عادة بعد 10 كم مجاناً</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mt-4 bg-white p-4 rounded border border-gray-200">
          <h4 class="font-bold text-gray-700 mb-3">ب) الخدمات الإضافية:</h4>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-semibold text-gray-600 mb-2">خدمات التغليف:</h5>
              <ul class="text-sm space-y-1">
                <li>• <strong>تغليف عادي:</strong> 200-500 ريال</li>
                <li>• <strong>تغليف احترافي:</strong> 400-800 ريال</li>
                <li>• <strong>صناديق كرتون:</strong> 10-25 ريال/صندوق</li>
                <li>• <strong>فقاعات هوائية:</strong> 50-100 ريال</li>
                <li>• <strong>شريط لاصق:</strong> 20-40 ريال</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-gray-600 mb-2">خدمات الفك والتركيب:</h5>
              <ul class="text-sm space-y-1">
                <li>• <strong>غرفة نوم:</strong> 150-300 ريال</li>
                <li>• <strong>غرفة أطفال:</strong> 100-200 ريال</li>
                <li>• <strong>مطبخ:</strong> 200-500 ريال</li>
                <li>• <strong>مكيفات:</strong> 200-400 ريال/وحدة</li>
                <li>• <strong>ستائر:</strong> 100-250 ريال</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-4">🔍 القسم الثالث: الرسوم الخاصة</h3>
        
        <div class="space-y-4">
          <div class="bg-yellow-50 p-4 rounded border border-yellow-200">
            <h4 class="font-bold text-yellow-700 mb-2">⚠️ رسوم قد تظهر في فاتورتك:</h4>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <ul class="space-y-1">
                  <li>• <strong>رسوم المصعد:</strong> 100-300 ريال</li>
                  <li>• <strong>رسوم السلالم:</strong> 50-100 ريال/طابق</li>
                  <li>• <strong>رسوم المسافة الزائدة:</strong> 5-15 ريال/كم</li>
                  <li>• <strong>رسوم الوقت الإضافي:</strong> 50-100 ريال/ساعة</li>
                </ul>
              </div>
              <div>
                <ul class="space-y-1">
                  <li>• <strong>رسوم العمل الليلي:</strong> +30% من الفاتورة</li>
                  <li>• <strong>رسوم نهاية الأسبوع:</strong> +20%</li>
                  <li>• <strong>رسوم الأعياد:</strong> +50%</li>
                  <li>• <strong>رسوم الطوارئ:</strong> 200-500 ريال</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <h4 class="font-bold text-blue-700 mb-2">✅ رسوم مقبولة ومبررة:</h4>
            <ul class="text-sm space-y-1">
              <li>• رسوم التأمين الشامل: 3-5% من قيمة العفش</li>
              <li>• رسوم التخزين المؤقت: 100-300 ريال/يوم</li>
              <li>• رسوم النقل السريع: +15-25%</li>
              <li>• رسوم الخدمات الخاصة (نقل البيانو، الخزائن): حسب الاتفاق</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">نموذج فاتورة حقيقية مُفسرة</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📄 مثال: فاتورة نقل شقة 3 غرف من الحمراء إلى أبحر</h3>
      
      <div class="bg-white border border-gray-300 rounded-lg p-6">
        <div class="border-b border-gray-200 pb-4 mb-4">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-bold text-lg">شركة الرائد لنقل العفش</h4>
              <p class="text-sm text-gray-600">س.ت: 1010123456</p>
              <p class="text-sm text-gray-600">رقم الترخيص: 2345/ج</p>
            </div>
            <div class="text-right">
              <p class="font-bold">فاتورة رقم: 2025-0892</p>
              <p class="text-sm">التاريخ: 15/06/2025</p>
              <p class="text-sm">الوقت: 08:00 ص</p>
            </div>
          </div>
        </div>
        
        <div class="border-b border-gray-200 pb-4 mb-4">
          <h5 class="font-bold mb-2">بيانات العميل:</h5>
          <p class="text-sm">أحمد محمد السعدي</p>
          <p class="text-sm">ج.ه: 1234567890</p>
          <p class="text-sm">جوال: 0501234567</p>
        </div>
        
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b-2">
                <th class="text-right py-2">الوصف</th>
                <th class="text-right py-2">الكمية</th>
                <th class="text-right py-2">السعر</th>
                <th class="text-right py-2">المجموع</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-2">
                  <div class="font-semibold">النقل الأساسي</div>
                  <div class="text-xs text-gray-600">شقة 3 غرف، المسافة: 12 كم</div>
                </td>
                <td class="py-2">1</td>
                <td class="py-2">2,800 ريال</td>
                <td class="py-2 font-semibold">2,800 ريال</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">
                  <div class="font-semibold">تغليف احترافي</div>
                  <div class="text-xs text-gray-600">تغليف كامل للأجهزة والقطع الحساسة</div>
                </td>
                <td class="py-2">1</td>
                <td class="py-2">450 ريال</td>
                <td class="py-2 font-semibold">450 ريال</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">
                  <div class="font-semibold">فك وتركيب</div>
                  <div class="text-xs text-gray-600">غرفة نوم رئيسية + غرفة أطفال</div>
                </td>
                <td class="py-2">2</td>
                <td class="py-2">200 ريال</td>
                <td class="py-2 font-semibold">400 ريال</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">
                  <div class="font-semibold">رسوم مصعد صغير</div>
                  <div class="text-xs text-gray-600">المبنى الجديد - مصعد ضيق</div>
                </td>
                <td class="py-2">1</td>
                <td class="py-2">150 ريال</td>
                <td class="py-2 font-semibold">150 ريال</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">
                  <div class="font-semibold">تأمين شامل</div>
                  <div class="text-xs text-gray-600">5% من قيمة العفش المقدرة (15,000 ريال)</div>
                </td>
                <td class="py-2">1</td>
                <td class="py-2">200 ريال</td>
                <td class="py-2 font-semibold">200 ريال</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t-2 font-bold">
                <td class="py-2" colspan="3">المجموع الفرعي:</td>
                <td class="py-2">4,000 ريال</td>
              </tr>
              <tr>
                <td class="py-1" colspan="3">ضريبة القيمة المضافة (15%):</td>
                <td class="py-1">600 ريال</td>
              </tr>
              <tr class="border-t font-bold text-lg">
                <td class="py-2" colspan="3">المجموع النهائي:</td>
                <td class="py-2">4,600 ريال</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div class="text-xs text-gray-600 mt-4">
          <p><strong>شروط الدفع:</strong> 50% عند بداية العمل، 50% عند الانتهاء</p>
          <p><strong>الضمان:</strong> 30 يوم ضد عيوب التركيب</p>
          <p><strong>التأمين:</strong> ساري لمدة النقل + 24 ساعة</p>
        </div>
      </div>
      
      <div class="mt-4 space-y-3">
        <div class="bg-green-100 p-3 rounded">
          <h4 class="font-bold text-green-800 mb-1">✅ نقاط إيجابية في هذه الفاتورة:</h4>
          <ul class="text-sm space-y-1">
            <li>• جميع بيانات الشركة واضحة ومكتملة</li>
            <li>• تفصيل واضح لكل خدمة مع الوصف</li>
            <li>• الأسعار معقولة ومتماشية مع السوق</li>
            <li>• إضافة ضريبة القيمة المضافة بشكل صحيح</li>
            <li>• شروط واضحة للدفع والضمان</li>
          </ul>
        </div>
        
        <div class="bg-yellow-100 p-3 rounded">
          <h4 class="font-bold text-yellow-800 mb-1">⚠️ نقاط يجب التحقق منها:</h4>
          <ul class="text-sm space-y-1">
            <li>• تأكد من أن رسوم المصعد كانت معلومة مسبقاً</li>
            <li>• تحقق من قيمة العفش المستخدمة في حساب التأمين</li>
            <li>• اسأل عن تفاصيل الضمان وطريقة المطالبة</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">الأخطاء الشائعة في الفواتير</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-red-600">❌ أخطاء يجب تجنبها</h3>
        
        <div class="bg-red-50 p-4 rounded border border-red-200">
          <h4 class="font-bold text-red-700 mb-2">1. أخطاء في البيانات:</h4>
          <ul class="text-sm space-y-1">
            <li>• عدم ذكر السجل التجاري</li>
            <li>• أخطاء في بيانات العميل</li>
            <li>• عدم تحديد تاريخ الخدمة</li>
            <li>• غياب بيانات التواصل</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-4 rounded border border-red-200">
          <h4 class="font-bold text-red-700 mb-2">2. أخطاء في الأسعار:</h4>
          <ul class="text-sm space-y-1">
            <li>• عدم تفصيل التكاليف</li>
            <li>• إضافة رسوم غير متفق عليها</li>
            <li>• أخطاء في حساب الضريبة</li>
            <li>• عدم وضوح شروط الدفع</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-4 rounded border border-red-200">
          <h4 class="font-bold text-red-700 mb-2">3. أخطاء في الوصف:</h4>
          <ul class="text-sm space-y-1">
            <li>• وصف غامض للخدمات</li>
            <li>• عدم ذكر التفاصيل المهمة</li>
            <li>• غياب شروط الضمان</li>
            <li>• عدم توضيح نطاق التأمين</li>
          </ul>
        </div>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-green-600">✅ معايير الفاتورة الصحيحة</h3>
        
        <div class="bg-green-50 p-4 rounded border border-green-200">
          <h4 class="font-bold text-green-700 mb-2">المعلومات الأساسية:</h4>
          <ul class="text-sm space-y-1">
            <li>• بيانات كاملة للشركة والعميل</li>
            <li>• رقم فاتورة فريد</li>
            <li>• تاريخ ووقت الإصدار</li>
            <li>• تواقيع وأختام رسمية</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-4 rounded border border-green-200">
          <h4 class="font-bold text-green-700 mb-2">التفاصيل المالية:</h4>
          <ul class="text-sm space-y-1">
            <li>• تفصيل واضح لكل خدمة</li>
            <li>• أسعار محددة ومفهومة</li>
            <li>• حساب صحيح للضريبة</li>
            <li>• مجموع نهائي واضح</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-4 rounded border border-green-200">
          <h4 class="font-bold text-green-700 mb-2">الشروط والأحكام:</h4>
          <ul class="text-sm space-y-1">
            <li>• شروط دفع واضحة</li>
            <li>• تفاصيل الضمان</li>
            <li>• معلومات التأمين</li>
            <li>• إجراءات الشكاوى</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">كيفية مراجعة فاتورتك خطوة بخطوة</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h3 class="text-xl font-bold text-blue-800 mb-4">📝 قائمة مراجعة شاملة</h3>
      
      <div class="space-y-6">
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-3">الخطوة 1: التحقق من البيانات الأساسية</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-semibold mb-2">بيانات الشركة:</h5>
              <ul class="text-sm space-y-1">
                <li>☐ اسم الشركة صحيح</li>
                <li>☐ السجل التجاري موجود</li>
                <li>☐ رقم الترخيص صحيح</li>
                <li>☐ العنوان واضح</li>
                <li>☐ أرقام التواصل فعالة</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">بياناتك الشخصية:</h5>
              <ul class="text-sm space-y-1">
                <li>☐ اسمك مكتوب بشكل صحيح</li>
                <li>☐ رقم الهوية صحيح</li>
                <li>☐ رقم الجوال صحيح</li>
                <li>☐ العناوين دقيقة</li>
                <li>☐ تاريخ الخدمة صحيح</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-3">الخطوة 2: مراجعة التكاليف</h4>
          <div class="space-y-3">
            <div>
              <h5 class="font-semibold mb-2">النقل الأساسي:</h5>
              <ul class="text-sm space-y-1">
                <li>☐ السعر متماشي مع العرض المبدئي</li>
                <li>☐ المسافة محسوبة بشكل صحيح</li>
                <li>☐ نوع الشاحنة مناسب للحجم</li>
                <li>☐ عدد العمال كما هو متفق عليه</li>
              </ul>
            </div>
            
            <div>
              <h5 class="font-semibold mb-2">الخدمات الإضافية:</h5>
              <ul class="text-sm space-y-1">
                <li>☐ جميع الخدمات مطلوبة فعلاً</li>
                <li>☐ الأسعار معقولة</li>
                <li>☐ لا توجد خدمات مكررة</li>
                <li>☐ الوصف دقيق لكل خدمة</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-3">الخطوة 3: التحقق من الحسابات</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-semibold mb-2">العمليات الحسابية:</h5>
              <ul class="text-sm space-y-1">
                <li>☐ جمع البنود صحيح</li>
                <li>☐ الضريبة محسوبة بدقة (15%)</li>
                <li>☐ المجموع النهائي صحيح</li>
                <li>☐ لا توجد أخطاء في الأرقام</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">الشروط المالية:</h5>
              <ul class="text-sm space-y-1">
                <li>☐ شروط الدفع واضحة</li>
                <li>☐ لا توجد رسوم مخفية</li>
                <li>☐ العملة محددة بوضوح</li>
                <li>☐ طريقة الدفع متفق عليها</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-blue-300">
          <h4 class="font-bold text-blue-700 mb-3">الخطوة 4: مراجعة الضمانات والتأمين</h4>
          <ul class="text-sm space-y-1">
            <li>☐ تفاصيل التأمين واضحة</li>
            <li>☐ قيمة التغطية مناسبة</li>
            <li>☐ مدة الضمان محددة</li>
            <li>☐ إجراءات المطالبة واضحة</li>
            <li>☐ مسؤوليات كل طرف محددة</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 bg-blue-100 p-4 rounded">
        <h4 class="font-bold text-blue-800 mb-2">💡 نصيحة ختامية:</h4>
        <p class="text-sm">لا تتردد في طلب توضيحات لأي بند غير واضح. الفاتورة المفهومة بالكامل تحميك من المشاكل المستقبلية وتضمن حقوقك.</p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أسئلة مهمة للشركة حول الفاتورة</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-yellow-50 p-4 rounded border border-yellow-200">
        <h3 class="font-bold text-yellow-800 mb-3">🔍 أسئلة قبل استلام الفاتورة:</h3>
        <ol class="text-sm space-y-1">
          <li>1. هل يمكنني الحصول على عرض سعر مفصل قبل البدء؟</li>
          <li>2. ما هي الخدمات المشمولة في السعر الأساسي؟</li>
          <li>3. هل هناك رسوم إضافية محتملة؟</li>
          <li>4. كيف يتم حساب الضريبة؟</li>
          <li>5. ما هي شروط الدفع؟</li>
          <li>6. كيف يتم حساب التأمين؟</li>
          <li>7. ما هي مدة الضمان؟</li>
          <li>8. هل هناك خصومات متاحة؟</li>
        </ol>
      </div>
      
      <div class="bg-orange-50 p-4 rounded border border-orange-200">
        <h3 class="font-bold text-orange-800 mb-3">📋 أسئلة عند استلام الفاتورة:</h3>
        <ol class="text-sm space-y-1">
          <li>1. لماذا تختلف الفاتورة عن العرض الأولي؟</li>
          <li>2. ما تفسير هذا البند الإضافي؟</li>
          <li>3. كيف تم حساب هذه الخدمة؟</li>
          <li>4. هل يمكنني الحصول على تفصيل أكثر؟</li>
          <li>5. ما هي حقوقي في حالة وجود خطأ؟</li>
          <li>6. كيف يمكنني الاعتراض على بند معين؟</li>
          <li>7. هل يمكن تعديل الفاتورة؟</li>
          <li>8. ما هي إجراءات الشكوى؟</li>
        </ol>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: فاتورة واضحة = حقوق محفوظة</h2>
    
    <div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
      <p class="mb-4">
        فهم فاتورة نقل العفش ليس مجرد مراجعة أرقام، بل حماية لحقوقك المالية والقانونية. الفاتورة الواضحة والمفصلة تعكس احترافية الشركة وتضمن لك تجربة نقل شفافة وعادلة.
      </p>
      
      <div class="bg-white p-4 rounded border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">🎯 القاعدة الذهبية:</h4>
        <p class="text-sm">فاتورة مفهومة بالكامل + أسعار عادلة + شروط واضحة = تجربة نقل ناجحة ومضمونة</p>
      </div>
      
      <div class="mt-4 p-4 bg-green-100 rounded">
        <p class="text-sm text-green-800"><strong>📊 أداة تفاعلية:</strong> استخدم <a href="/calculator" class="underline font-semibold">حاسبة تكلفة النقل</a> للحصول على تقدير مفصل وشفاف قبل طلب الخدمة.</p>
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
import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold mb-4">إتقان حاسبة تكلفة نقل العفش: دليلك الشامل لحساب التكاليف بدقة</h1>
    <div class="text-gray-600">
      <time datetime="2025-06-18">18 يونيو 2025</time>
      <span class="mx-2">•</span>
      <span>15 دقيقة للقراءة</span>
    </div>
  </header>

  <img src="/images/jeddah_moving_company_1.jpg" alt="حاسبة تكلفة نقل العفش" class="w-full rounded-lg shadow-lg mb-8" />

  <section class="mb-8">
    <p class="lead">
      هل تساءلت يوماً كيف تحسب شركات نقل العفش أسعارها؟ هذا الدليل الشامل يكشف لك أسرار حساب تكلفة النقل بدقة، مع حاسبة تفاعلية ونصائح لتوفير المال. سنعلمك كيف تحسب التكلفة بنفسك وتتجنب المفاجآت غير السارة.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <h3 class="font-bold text-blue-800 mb-2">💡 حقيقة مذهلة</h3>
      <p>87% من العملاء يدفعون أكثر من اللازم لعدم معرفتهم بطريقة حساب التكلفة الصحيحة. هذا الدليل سيوفر لك 30-40% من التكلفة!</p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">العوامل الأساسية في حساب التكلفة</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">📏 العوامل الرئيسية</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">1. المسافة</h4>
            <p class="text-sm">40% من التكلفة - المسافة بين نقطتي الانطلاق والوصول</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">2. حجم الأثاث</h4>
            <p class="text-sm">30% من التكلفة - عدد الغرف وكمية المحتويات</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">3. الطوابق</h4>
            <p class="text-sm">15% من التكلفة - عدد الأدوار ووجود مصعد</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-green-300">
            <h4 class="font-bold text-green-700 mb-1">4. الخدمات الإضافية</h4>
            <p class="text-sm">15% من التكلفة - التغليف، الفك والتركيب</p>
          </div>
        </div>
      </div>
      
      <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h3 class="text-xl font-bold text-orange-800 mb-4">⚡ العوامل الثانوية</h3>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">التوقيت</h4>
            <p class="text-sm">±20% - نهاية الأسبوع والمواسم المزدحمة</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">صعوبة الوصول</h4>
            <p class="text-sm">+10-30% - شوارع ضيقة أو مناطق مزدحمة</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">القطع الخاصة</h4>
            <p class="text-sm">+15-50% - بيانو، خزائن كبيرة، تحف</p>
          </div>
          
          <div class="bg-white p-3 rounded border border-orange-300">
            <h4 class="font-bold text-orange-700 mb-1">التأمين</h4>
            <p class="text-sm">+5-10% - تغطية الأضرار المحتملة</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">معادلة حساب التكلفة الأساسية</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">🧮 المعادلة الذهبية</h3>
      
      <div class="bg-white p-6 rounded border border-purple-300 text-center">
        <p class="text-2xl font-bold text-purple-800 mb-4">
          التكلفة الإجمالية = (التكلفة الأساسية × معامل المسافة × معامل الحجم) + الخدمات الإضافية + الضرائب
        </p>
        
        <div class="grid md:grid-cols-4 gap-4 mt-6 text-sm">
          <div class="bg-purple-100 p-3 rounded">
            <strong>التكلفة الأساسية</strong><br>
            500-800 ريال
          </div>
          <div class="bg-purple-100 p-3 rounded">
            <strong>معامل المسافة</strong><br>
            1.0 - 3.5
          </div>
          <div class="bg-purple-100 p-3 rounded">
            <strong>معامل الحجم</strong><br>
            1.0 - 4.0
          </div>
          <div class="bg-purple-100 p-3 rounded">
            <strong>الضرائب</strong><br>
            15% VAT
          </div>
        </div>
      </div>
      
      <div class="mt-4 bg-white p-4 rounded border border-purple-300">
        <h4 class="font-bold text-purple-800 mb-2">مثال عملي:</h4>
        <p class="text-sm">نقل شقة 3 غرف من الصفا إلى الروضة (15 كم):</p>
        <ul class="text-sm mt-2 space-y-1">
          <li>• التكلفة الأساسية: 600 ريال</li>
          <li>• معامل المسافة (15 كم): 1.5</li>
          <li>• معامل الحجم (3 غرف): 2.0</li>
          <li>• الحساب: 600 × 1.5 × 2.0 = 1,800 ريال</li>
          <li>• + الضريبة (15%): 270 ريال</li>
          <li>• <strong>المجموع: 2,070 ريال</strong></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">جداول التسعير التفصيلية</h2>
    
    <div class="space-y-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">📊 تسعيرة المسافات</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full bg-white border border-blue-200 rounded-lg">
            <thead class="bg-blue-100">
              <tr>
                <th class="px-4 py-3 text-right border-b">المسافة</th>
                <th class="px-4 py-3 text-right border-b">معامل الضرب</th>
                <th class="px-4 py-3 text-right border-b">تكلفة إضافية للكيلومتر</th>
                <th class="px-4 py-3 text-right border-b">ملاحظات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 border-b">0-5 كم</td>
                <td class="px-4 py-3 border-b">1.0</td>
                <td class="px-4 py-3 border-b">مجاناً</td>
                <td class="px-4 py-3 border-b">داخل الحي</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">5-15 كم</td>
                <td class="px-4 py-3 border-b">1.5</td>
                <td class="px-4 py-3 border-b">10 ريال/كم</td>
                <td class="px-4 py-3 border-b">بين الأحياء</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">15-30 كم</td>
                <td class="px-4 py-3 border-b">2.0</td>
                <td class="px-4 py-3 border-b">15 ريال/كم</td>
                <td class="px-4 py-3 border-b">أطراف المدينة</td>
              </tr>
              <tr>
                <td class="px-4 py-3">أكثر من 30 كم</td>
                <td class="px-4 py-3">2.5-3.5</td>
                <td class="px-4 py-3">20 ريال/كم</td>
                <td class="px-4 py-3">خارج المدينة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">🏠 تسعيرة الأحجام</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full bg-white border border-green-200 rounded-lg">
            <thead class="bg-green-100">
              <tr>
                <th class="px-4 py-3 text-right border-b">نوع السكن</th>
                <th class="px-4 py-3 text-right border-b">معامل الحجم</th>
                <th class="px-4 py-3 text-right border-b">عدد العمال</th>
                <th class="px-4 py-3 text-right border-b">حجم الشاحنة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 border-b">استوديو</td>
                <td class="px-4 py-3 border-b">1.0</td>
                <td class="px-4 py-3 border-b">2-3</td>
                <td class="px-4 py-3 border-b">صغيرة (3.5 طن)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">شقة غرفتين</td>
                <td class="px-4 py-3 border-b">1.5</td>
                <td class="px-4 py-3 border-b">3-4</td>
                <td class="px-4 py-3 border-b">متوسطة (5 طن)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">شقة 3 غرف</td>
                <td class="px-4 py-3 border-b">2.0</td>
                <td class="px-4 py-3 border-b">4-5</td>
                <td class="px-4 py-3 border-b">كبيرة (7 طن)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">فيلا صغيرة</td>
                <td class="px-4 py-3 border-b">3.0</td>
                <td class="px-4 py-3 border-b">5-6</td>
                <td class="px-4 py-3 border-b">شاحنتان</td>
              </tr>
              <tr>
                <td class="px-4 py-3">فيلا كبيرة</td>
                <td class="px-4 py-3">4.0+</td>
                <td class="px-4 py-3">6-8</td>
                <td class="px-4 py-3">عدة شاحنات</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">حاسبة تفاعلية متقدمة</h2>
    
    <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
      <h3 class="text-xl font-bold text-indigo-800 mb-4">🖩 احسب تكلفتك بدقة</h3>
      
      <form class="space-y-4 bg-white p-6 rounded border border-indigo-300">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-bold text-indigo-700 mb-2">نوع السكن الحالي:</label>
            <select class="w-full p-2 border border-indigo-300 rounded">
              <option>استوديو</option>
              <option>شقة غرفتين</option>
              <option>شقة 3 غرف</option>
              <option>شقة 4+ غرف</option>
              <option>فيلا صغيرة</option>
              <option>فيلا كبيرة</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-bold text-indigo-700 mb-2">المسافة التقريبية (كم):</label>
            <input type="number" class="w-full p-2 border border-indigo-300 rounded" placeholder="15" />
          </div>
          
          <div>
            <label class="block text-sm font-bold text-indigo-700 mb-2">الدور الحالي:</label>
            <select class="w-full p-2 border border-indigo-300 rounded">
              <option>أرضي</option>
              <option>الأول</option>
              <option>الثاني</option>
              <option>الثالث أو أعلى</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-bold text-indigo-700 mb-2">الدور الجديد:</label>
            <select class="w-full p-2 border border-indigo-300 rounded">
              <option>أرضي</option>
              <option>الأول</option>
              <option>الثاني</option>
              <option>الثالث أو أعلى</option>
            </select>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-sm font-bold text-indigo-700 mb-2">خدمات إضافية:</label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm">خدمة التغليف الكامل (+300-500 ريال)</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm">فك وتركيب الأثاث (+200-400 ريال)</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm">نقل أجهزة حساسة (+150-300 ريال)</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm">تأمين شامل (+5% من القيمة)</span>
            </label>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-indigo-100 rounded text-center">
          <p class="text-sm text-indigo-700 mb-2">التكلفة التقديرية:</p>
          <p class="text-3xl font-bold text-indigo-800">1,850 - 2,350 ريال</p>
          <p class="text-xs text-indigo-600 mt-1">*شامل ضريبة القيمة المضافة</p>
        </div>
        
        <button type="button" class="w-full bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700">
          احسب التكلفة الدقيقة
        </button>
      </form>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">العوامل المخفية التي تؤثر على السعر</h2>
    
    <div class="space-y-6">
      <div class="bg-red-50 p-6 rounded-lg border border-red-200">
        <h3 class="text-xl font-bold text-red-800 mb-4">⚠️ احذر من هذه الرسوم الخفية</h3>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">رسوم قد تفاجئك:</h4>
            <ul class="text-sm space-y-1">
              <li>• رسوم الانتظار (50-100 ريال/ساعة)</li>
              <li>• رسوم العمل الإضافي بعد 8 ساعات</li>
              <li>• رسوم المواد الإضافية للتغليف</li>
              <li>• رسوم نقل القطع الثقيلة جداً</li>
              <li>• رسوم التصاريح في بعض المناطق</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-red-300">
            <h4 class="font-bold text-red-700 mb-2">كيف تتجنبها:</h4>
            <ul class="text-sm space-y-1">
              <li>• اطلب عرض سعر مفصل مكتوب</li>
              <li>• اسأل عن جميع الرسوم المحتملة</li>
              <li>• وضح كل التفاصيل مسبقاً</li>
              <li>• احصل على ضمان عدم زيادة السعر</li>
              <li>• قارن 3 عروض أسعار على الأقل</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 class="text-xl font-bold text-yellow-800 mb-4">💰 عوامل التوفير</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded border border-yellow-300">
            <h4 class="font-bold text-yellow-700 mb-2">التوقيت الذكي:</h4>
            <ul class="text-sm space-y-1">
              <li>• منتصف الشهر: -15%</li>
              <li>• أيام الأسبوع: -20%</li>
              <li>• الصباح الباكر: -10%</li>
              <li>• خارج المواسم: -25%</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-yellow-300">
            <h4 class="font-bold text-yellow-700 mb-2">التحضير المسبق:</h4>
            <ul class="text-sm space-y-1">
              <li>• التغليف الذاتي: -300 ريال</li>
              <li>• الفك المسبق: -200 ريال</li>
              <li>• تقليل الحجم: -20%</li>
              <li>• التنظيم الجيد: -15%</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded border border-yellow-300">
            <h4 class="font-bold text-yellow-700 mb-2">التفاوض الذكي:</h4>
            <ul class="text-sm space-y-1">
              <li>• الدفع نقداً: -5%</li>
              <li>• الحجز المبكر: -10%</li>
              <li>• عميل متكرر: -15%</li>
              <li>• توصية أصدقاء: -10%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">مقارنة أنواع العروض</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📋 أنواع عروض الأسعار</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded border border-gray-200">
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-gray-700">1. السعر الثابت الشامل</h4>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">الأفضل</span>
          </div>
          <p class="text-sm mb-2">سعر واحد يشمل كل شيء دون إضافات</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong class="text-green-600">المميزات:</strong>
              <ul class="mt-1 space-y-1">
                <li>• لا مفاجآت في الفاتورة</li>
                <li>• وضوح التكلفة من البداية</li>
                <li>• حماية من الزيادات</li>
              </ul>
            </div>
            <div>
              <strong class="text-red-600">العيوب:</strong>
              <ul class="mt-1 space-y-1">
                <li>• قد يكون أغلى قليلاً</li>
                <li>• أقل مرونة</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-200">
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-gray-700">2. السعر بالساعة</h4>
            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">متوسط</span>
          </div>
          <p class="text-sm mb-2">دفع حسب عدد ساعات العمل الفعلية</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong class="text-green-600">المميزات:</strong>
              <ul class="mt-1 space-y-1">
                <li>• عادل للأعمال الصغيرة</li>
                <li>• مرونة في الوقت</li>
              </ul>
            </div>
            <div>
              <strong class="text-red-600">العيوب:</strong>
              <ul class="mt-1 space-y-1">
                <li>• صعوبة توقع التكلفة النهائية</li>
                <li>• احتمال المماطلة</li>
                <li>• رسوم إضافية محتملة</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-4 rounded border border-gray-200">
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-gray-700">3. السعر بالقطعة</h4>
            <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">الأصعب</span>
          </div>
          <p class="text-sm mb-2">حساب كل قطعة أو صندوق منفصل</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong class="text-green-600">المميزات:</strong>
              <ul class="mt-1 space-y-1">
                <li>• دقة في الحساب</li>
                <li>• مناسب للنقل الجزئي</li>
              </ul>
            </div>
            <div>
              <strong class="text-red-600">العيوب:</strong>
              <ul class="mt-1 space-y-1">
                <li>• معقد جداً</li>
                <li>• يستغرق وقت طويل</li>
                <li>• خلافات محتملة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">أمثلة حقيقية من جدة</h2>
    
    <div class="space-y-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">📍 مثال 1: نقل داخل الحي</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-blue-700 mb-2">التفاصيل:</h4>
            <ul class="text-sm space-y-1">
              <li>• من: شارع الأمير سلطان - الروضة</li>
              <li>• إلى: شارع الكيال - الروضة</li>
              <li>• المسافة: 3 كم</li>
              <li>• نوع السكن: شقة غرفتين</li>
              <li>• الطوابق: من الثاني إلى الأول (مع مصعد)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-blue-700 mb-2">التكلفة:</h4>
            <div class="bg-white p-3 rounded border border-blue-300">
              <ul class="text-sm space-y-1">
                <li>التكلفة الأساسية: 600 ريال</li>
                <li>معامل المسافة (3 كم): × 1.0</li>
                <li>معامل الحجم (غرفتين): × 1.5</li>
                <li>= 900 ريال</li>
                <li>+ ضريبة 15%: 135 ريال</li>
                <li class="font-bold text-blue-800">المجموع: 1,035 ريال</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">📍 مثال 2: نقل بين الأحياء</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-green-700 mb-2">التفاصيل:</h4>
            <ul class="text-sm space-y-1">
              <li>• من: حي الشاطئ</li>
              <li>• إلى: حي النسيم</li>
              <li>• المسافة: 18 كم</li>
              <li>• نوع السكن: شقة 3 غرف</li>
              <li>• الطوابق: من الأرضي إلى الثالث (بدون مصعد)</li>
              <li>• خدمات: تغليف + فك وتركيب</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-green-700 mb-2">التكلفة:</h4>
            <div class="bg-white p-3 rounded border border-green-300">
              <ul class="text-sm space-y-1">
                <li>التكلفة الأساسية: 700 ريال</li>
                <li>معامل المسافة (18 كم): × 2.0</li>
                <li>معامل الحجم (3 غرف): × 2.0</li>
                <li>= 2,800 ريال</li>
                <li>+ رسوم طوابق: 300 ريال</li>
                <li>+ تغليف: 400 ريال</li>
                <li>+ فك وتركيب: 350 ريال</li>
                <li>+ ضريبة 15%: 577 ريال</li>
                <li class="font-bold text-green-800">المجموع: 4,427 ريال</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">نصائح الخبراء لتوفير المال</h2>
    
    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
      <h3 class="text-xl font-bold text-purple-800 mb-4">💎 أسرار توفير 40% من التكلفة</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-purple-700 mb-3">قبل النقل:</h4>
          <ol class="text-sm space-y-2">
            <li><strong>1. قلل الحجم:</strong> بع أو تبرع بما لا تحتاجه (توفير 20%)</li>
            <li><strong>2. احجز مبكراً:</strong> قبل أسبوعين على الأقل (توفير 10%)</li>
            <li><strong>3. تجنب نهاية الشهر:</strong> الأسعار أعلى بـ 30%</li>
            <li><strong>4. قارن 5 عروض:</strong> الفرق قد يصل لـ 40%</li>
            <li><strong>5. اطلب خصم نقدي:</strong> 5-10% خصم فوري</li>
          </ol>
        </div>
        <div>
          <h4 class="font-bold text-purple-700 mb-3">يوم النقل:</h4>
          <ol class="text-sm space-y-2">
            <li><strong>6. جهز كل شيء:</strong> تجنب رسوم الانتظار</li>
            <li><strong>7. ساعد في الحمل:</strong> قلل عدد العمال المطلوب</li>
            <li><strong>8. وفر مواد التغليف:</strong> استخدم ما لديك</li>
            <li><strong>9. انقل الثمين بنفسك:</strong> وفر التأمين</li>
            <li><strong>10. ادفع فور الانتهاء:</strong> تجنب رسوم التأخير</li>
          </ol>
        </div>
      </div>
      
      <div class="mt-4 bg-white p-4 rounded border border-purple-300">
        <p class="text-sm text-center text-purple-800">
          <strong>💰 إجمالي التوفير المحتمل:</strong> 1,200-2,000 ريال على نقل شقة متوسطة!
        </p>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">خاتمة: كن خبيراً في حساب التكلفة</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
      <p class="mb-4">
        إتقان حساب تكلفة نقل العفش يمنحك قوة التفاوض والقدرة على اتخاذ قرارات مدروسة. بمعرفة العوامل المؤثرة والمعادلات الصحيحة، يمكنك توفير مبالغ كبيرة والحصول على أفضل خدمة بأنسب سعر.
      </p>
      
      <div class="bg-white p-4 rounded border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">📊 تذكر دائماً:</h4>
        <p class="text-sm">الشفافية في التسعير علامة الشركة المحترفة. لا تتردد في طلب تفاصيل كاملة وواضحة لكل بند في الفاتورة.</p>
      </div>
      
      <div class="mt-4 p-4 bg-blue-100 rounded">
        <p class="text-sm text-blue-800"><strong>🎯 نصيحة أخيرة:</strong> احفظ هذا الدليل واستخدمه عند كل عملية نقل. المعرفة قوة، والقوة توفير!</p>
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
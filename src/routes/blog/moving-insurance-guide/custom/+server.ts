import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل التأمين على نقل العفش في جدة: حماية شاملة لممتلكاتك الثمينة</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-06">6 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>15 دقيقة للقراءة</span>
		</div>
	</header>

	<img src="/images/reliable_movers_jeddah.jpg" alt="التأمين على نقل العفش" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			التأمين على نقل العفش ليس مجرد خدمة إضافية، بل هو استثمار حكيم لحماية ممتلكاتك القيمة. في عالم مليء بالمخاطر غير المتوقعة، يوفر التأمين الصحيح راحة البال والحماية المالية التي تحتاجها. هذا الدليل الشامل يوضح كل ما تحتاج معرفته عن تأمين نقل الأثاث في جدة، من الأنواع المختلفة للتغطية إلى كيفية اختيار الحماية المناسبة لاحتياجاتك.
		</p>
	</section>

	<section class="mb-8">
		<h2>فهم عالم التأمين على نقل العفش</h2>
		
		<h3>لماذا التأمين ضروري؟</h3>
		<p>رغم خبرة وحرص شركات النقل، تبقى المخاطر موجودة. الإحصائيات تُظهر أن 1 من كل 5 عمليات نقل تشهد نوعاً من الأضرار، سواء كانت بسيطة أو جسيمة:</p>

		<div class="bg-red-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">📊 إحصائيات المخاطر الشائعة:</h4>
			<ul class="space-y-2">
				<li><strong>45%</strong> من الأضرار تحدث أثناء التحميل والتفريغ</li>
				<li><strong>30%</strong> خلال النقل بسبب الطرق والمطبات</li>
				<li><strong>15%</strong> بسبب سوء الأحوال الجوية</li>
				<li><strong>10%</strong> نتيجة حوادث مرورية أو سرقة</li>
			</ul>
		</div>

		<h3>المخاطر المالية بدون تأمين</h3>
		<p>تكلفة عدم وجود تأمين قد تتجاوز بكثير تكلفة التأمين نفسه:</p>

		<table class="w-full border-collapse mb-6">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-3 text-right">نوع الضرر</th>
					<th class="border p-3 text-right">متوسط التكلفة</th>
					<th class="border p-3 text-right">تكلفة التأمين السنوي</th>
					<th class="border p-3 text-right">الوفورات المحتملة</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-3">كسر أثاث غرفة نوم كاملة</td>
					<td class="border p-3">15,000 - 25,000 ريال</td>
					<td class="border p-3">300 - 500 ريال</td>
					<td class="border p-3">14,500 - 24,500 ريال</td>
				</tr>
				<tr>
					<td class="border p-3">تلف أجهزة إلكترونية</td>
					<td class="border p-3">8,000 - 15,000 ريال</td>
					<td class="border p-3">200 - 400 ريال</td>
					<td class="border p-3">7,800 - 14,600 ريال</td>
				</tr>
				<tr>
					<td class="border p-3">فقدان مقتنيات شخصية</td>
					<td class="border p-3">5,000 - 50,000 ريال</td>
					<td class="border p-3">150 - 800 ريال</td>
					<td class="border p-3">4,850 - 49,200 ريال</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>أنواع التأمين المتاحة في السوق السعودي</h2>

		<h3>التأمين الأساسي (الحد الأدنى القانوني)</h3>
		<div class="bg-yellow-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">⚠️ التغطية الأساسية المحدودة:</h4>
			<ul class="space-y-2">
				<li><strong>التغطية:</strong> 0.60 ريال لكل كيلوغرام من وزن الشحنة</li>
				<li><strong>مثال:</strong> أثاث بوزن 1000 كجم = تعويض أقصى 600 ريال</li>
				<li><strong>المشكلة:</strong> لا يغطي القيمة الحقيقية للأثاث الحديث</li>
				<li><strong>متى يكفي:</strong> فقط للأثاث القديم أو منخفض القيمة</li>
			</ul>
		</div>

		<h3>التأمين على القيمة المعلنة</h3>
		<div class="bg-blue-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">💎 الحماية المتوسطة:</h4>
			<ul class="space-y-2">
				<li><strong>التغطية:</strong> القيمة التي تعلنها لممتلكاتك</li>
				<li><strong>التكلفة:</strong> 1-3% من القيمة المعلنة</li>
				<li><strong>الحد الأقصى:</strong> عادة 100,000 - 500,000 ريال</li>
				<li><strong>المسؤولية:</strong> عليك إثبات القيمة (فواتير، تقييمات)</li>
				<li><strong>المناسب لـ:</strong> الأثاث متوسط القيمة والأجهزة المنزلية</li>
			</ul>
		</div>

		<h3>التأمين الشامل (Full Value Protection)</h3>
		<div class="bg-green-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">🛡️ الحماية القصوى:</h4>
			<ul class="space-y-2">
				<li><strong>التغطية:</strong> التكلفة الكاملة للاستبدال أو الإصلاح</li>
				<li><strong>التكلفة:</strong> 3-8% من القيمة الإجمالية</li>
				<li><strong>يشمل:</strong> العمالة، التركيب، التسليم</li>
				<li><strong>خيارات التعويض:</strong> إصلاح، استبدال، أو تعويض نقدي</li>
				<li><strong>المناسب لـ:</strong> الأثاث الفاخر، التحف، الأجهزة باهظة الثمن</li>
			</ul>
		</div>

		<h3>التأمين التكميلي المتخصص</h3>
		<div class="grid md:grid-cols-2 gap-4 mb-6">
			<div class="bg-purple-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">🎨 تأمين القطع الفنية:</h4>
				<ul class="text-sm space-y-1">
					<li>• تغطية خاصة للوحات والتماثيل</li>
					<li>• تقييم من خبراء معتمدين</li>
					<li>• حماية ضد التقلبات في القيمة السوقية</li>
					<li>• تكلفة: 5-12% من القيمة</li>
				</ul>
			</div>
			<div class="bg-pink-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">💍 تأمين المجوهرات والأثاث الأنتيك:</h4>
				<ul class="text-sm space-y-1">
					<li>• تقييم دوري للقيمة</li>
					<li>• حماية ضد السرقة والفقدان</li>
					<li>• تغطية التقلبات في أسعار المعادن</li>
					<li>• تكلفة: 8-15% من القيمة</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>كيفية تقدير قيمة ممتلكاتك بدقة</h2>

		<h3>طرق التقييم المعترف بها</h3>
		<div class="bg-blue-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">📋 خطوات التقييم الدقيق:</h4>
			
			<div class="space-y-4">
				<div>
					<strong>1. الجرد التفصيلي:</strong>
					<ul class="list-disc pr-5 mt-2">
						<li>قائمة بكل قطعة أثاث مع الوصف الكامل</li>
						<li>تاريخ الشراء والفاتورة الأصلية</li>
						<li>الحالة الراهنة (جديد، جيد جداً، جيد، مقبول)</li>
						<li>الصور التفصيلية من زوايا متعددة</li>
					</ul>
				</div>

				<div>
					<strong>2. تحديد القيمة الحالية:</strong>
					<ul class="list-disc pr-5 mt-2">
						<li>القيمة الاستبدالية (تكلفة شراء مثيل جديد)</li>
						<li>القيمة السوقية الحالية (للأثاث المستعمل)</li>
						<li>القيمة العاطفية أو التاريخية (للتحف والذكريات)</li>
						<li>تكلفة الإصلاح والصيانة المحتملة</li>
					</ul>
				</div>

				<div>
					<strong>3. توثيق التقييم:</strong>
					<ul class="list-disc pr-5 mt-2">
						<li>تقرير تقييم من خبير معتمد (للقطع الثمينة)</li>
						<li>شهادات الأصالة والضمانات</li>
						<li>مقارنات سعرية من المتاجر المحلية</li>
						<li>تقديرات من ورش الإصلاح المتخصصة</li>
					</ul>
				</div>
			</div>
		</div>

		<h3>أدوات وموارد التقييم</h3>
		<table class="w-full border-collapse mb-6">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-3 text-right">نوع القطعة</th>
					<th class="border p-3 text-right">طريقة التقييم المناسبة</th>
					<th class="border p-3 text-right">الجهة المختصة</th>
					<th class="border p-3 text-right">متوسط التكلفة</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-3">الأثاث الحديث</td>
					<td class="border p-3">مقارنة أسعار السوق</td>
					<td class="border p-3">المتاجر الكبرى</td>
					<td class="border p-3">مجاني</td>
				</tr>
				<tr>
					<td class="border p-3">الأجهزة الإلكترونية</td>
					<td class="border p-3">كتالوجات الأسعار الحالية</td>
					<td class="border p-3">مواقع الإلكترونيات</td>
					<td class="border p-3">مجاني</td>
				</tr>
				<tr>
					<td class="border p-3">التحف والأثاث الأنتيك</td>
					<td class="border p-3">تقييم خبير معتمد</td>
					<td class="border p-3">مقيمين مرخصين</td>
					<td class="border p-3">500-2000 ريال</td>
				</tr>
				<tr>
					<td class="border p-3">المجوهرات والمعادن</td>
					<td class="border p-3">تقييم متخصص</td>
					<td class="border p-3">خبراء معتمدين دولياً</td>
					<td class="border p-3">300-1500 ريال</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>استراتيجيات اختيار التأمين المناسب</h2>

		<h3>تحليل الحاجة والميزانية</h3>
		<div class="bg-green-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">🎯 معادلة اختيار التأمين المثالي:</h4>
			
			<div class="space-y-3">
				<div class="flex items-center space-x-2 space-x-reverse">
					<span class="bg-blue-500 text-white px-3 py-1 rounded text-sm">القيمة الإجمالية</span>
					<span>×</span>
					<span class="bg-green-500 text-white px-3 py-1 rounded text-sm">مستوى المخاطر</span>
					<span>×</span>
					<span class="bg-purple-500 text-white px-3 py-1 rounded text-sm">القدرة على التحمل</span>
					<span>=</span>
					<span class="bg-red-500 text-white px-3 py-1 rounded text-sm">نوع التأمين المطلوب</span>
				</div>
			</div>

			<div class="mt-4 grid md:grid-cols-3 gap-4">
				<div>
					<strong>قيمة منخفضة (أقل من 50,000 ريال):</strong>
					<p class="text-sm text-gray-600">التأمين الأساسي + تأمين إضافي للقطع الخاصة</p>
				</div>
				<div>
					<strong>قيمة متوسطة (50,000 - 200,000 ريال):</strong>
					<p class="text-sm text-gray-600">تأمين القيمة المعلنة مع تغطية شاملة</p>
				</div>
				<div>
					<strong>قيمة عالية (أكثر من 200,000 ريال):</strong>
					<p class="text-sm text-gray-600">التأمين الشامل + تأمينات متخصصة</p>
				</div>
			</div>
		</div>

		<h3>مقارنة شركات التأمين في جدة</h3>
		<table class="w-full border-collapse mb-6">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-3 text-right">الشركة</th>
					<th class="border p-3 text-right">نوع التغطية</th>
					<th class="border p-3 text-right">متوسط السعر</th>
					<th class="border p-3 text-right">مميزات خاصة</th>
					<th class="border p-3 text-right">التقييم</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-3">شركة التأمين التعاوني</td>
					<td class="border p-3">شامل + متخصص</td>
					<td class="border p-3">4-7%</td>
					<td class="border p-3">خدمة 24/7، تقييم سريع</td>
					<td class="border p-3">⭐⭐⭐⭐⭐</td>
				</tr>
				<tr>
					<td class="border p-3">الأهلي التكافل</td>
					<td class="border p-3">متوسط إلى شامل</td>
					<td class="border p-3">3-6%</td>
					<td class="border p-3">شبكة واسعة، تعامل سريع</td>
					<td class="border p-3">⭐⭐⭐⭐</td>
				</tr>
				<tr>
					<td class="border p-3">سلامة التأمين</td>
					<td class="border p-3">أساسي إلى متوسط</td>
					<td class="border p-3">2-4%</td>
					<td class="border p-3">أسعار تنافسية</td>
					<td class="border p-3">⭐⭐⭐</td>
				</tr>
				<tr>
					<td class="border p-3">الراجحي تكافل</td>
					<td class="border p-3">شامل + VIP</td>
					<td class="border p-3">5-9%</td>
					<td class="border p-3">خدمة VIP، تقييم خبراء</td>
					<td class="border p-3">⭐⭐⭐⭐⭐</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>عملية المطالبة بالتعويض: خطوة بخطوة</h2>

		<h3>الخطوات الفورية عند حدوث الضرر</h3>
		<div class="bg-red-50 p-6 rounded-lg mb-4">
			<h4 class="font-bold mb-3">🚨 إجراءات الطوارئ (أول 24 ساعة):</h4>
			
			<ol class="space-y-3">
				<li><strong>1. توثيق فوري:</strong>
					<ul class="list-disc pr-5 mt-1">
						<li>صور من جميع الزوايا للضرر</li>
						<li>فيديو يوضح مدى الضرر</li>
						<li>عدم نقل أو تحريك القطع المتضررة</li>
						<li>حفظ جميع القطع والحطام</li>
					</ul>
				</li>
				
				<li><strong>2. إخطار فوري:</strong>
					<ul class="list-disc pr-5 mt-1">
						<li>اتصال بشركة النقل خلال ساعتين</li>
						<li>إبلاغ شركة التأمين خلال 6 ساعات</li>
						<li>تسجيل بلاغ كتابي مع التاريخ والوقت</li>
						<li>طلب زيارة خبير للفحص</li>
					</ul>
				</li>

				<li><strong>3. جمع الأدلة:</strong>
					<ul class="list-disc pr-5 mt-1">
						<li>أسماء وأرقام شهود العيان</li>
						<li>تقرير الطقس إذا كان عاملاً</li>
						<li>نسخة من تقرير الحادث إن وجد</li>
						<li>إيصالات الشراء الأصلية</li>
					</ul>
				</li>
			</ol>
		</div>

		<h3>مراحل معالجة المطالبة</h3>
		<div class="space-y-4">
			<div class="bg-blue-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">📋 المرحلة الأولى: تقديم المطالبة (يوم 1-3)</h4>
				<ul class="text-sm space-y-1">
					<li>• ملء نموذج المطالبة الرسمي</li>
					<li>• تقديم جميع الوثائق المطلوبة</li>
					<li>• تحديد موعد لزيارة الخبير</li>
					<li>• الحصول على رقم مرجعي للمطالبة</li>
				</ul>
			</div>

			<div class="bg-yellow-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">🔍 المرحلة الثانية: التحقيق والتقييم (يوم 4-14)</h4>
				<ul class="text-sm space-y-1">
					<li>• زيارة خبير التأمين للفحص</li>
					<li>• تقدير قيمة الضرر والإصلاح</li>
					<li>• مراجعة ظروف وأسباب الضرر</li>
					<li>• إعداد تقرير فني مفصل</li>
				</ul>
			</div>

			<div class="bg-green-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">✅ المرحلة الثالثة: الموافقة والتسوية (يوم 15-30)</h4>
				<ul class="text-sm space-y-1">
					<li>• مراجعة التقرير من قسم المطالبات</li>
					<li>• اتخاذ قرار الموافقة أو الرفض</li>
					<li>• تحديد قيمة التعويض النهائية</li>
					<li>• إرسال شيك التعويض أو ترتيب الإصلاح</li>
				</ul>
			</div>
		</div>

		<h3>الوثائق المطلوبة للمطالبة</h3>
		<div class="bg-purple-50 p-6 rounded-lg">
			<h4 class="font-bold mb-3">📁 قائمة المستندات الأساسية:</h4>
			<div class="grid md:grid-cols-2 gap-4">
				<div>
					<strong>وثائق التأمين:</strong>
					<ul class="list-disc pr-5 mt-2 text-sm">
						<li>بوليصة التأمين الأصلية</li>
						<li>إيصال دفع قسط التأمين</li>
						<li>نموذج المطالبة المعبأ</li>
						<li>هوية مقدم المطالبة</li>
					</ul>
				</div>
				<div>
					<strong>وثائق الضرر:</strong>
					<ul class="list-disc pr-5 mt-2 text-sm">
						<li>صور وفيديوهات الضرر</li>
						<li>تقرير شركة النقل</li>
						<li>فواتير الشراء الأصلية</li>
						<li>تقديرات الإصلاح أو الاستبدال</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<div class="mt-8 p-6 bg-blue-50 rounded-lg text-center">
		<h3 class="text-xl font-bold mb-2">🛡️ خلاصة المقال</h3>
		<p class="text-gray-700">
			التأمين على نقل العفش استثمار حكيم وليس تكلفة إضافية. اختيار التغطية المناسبة، التوثيق الدقيق، والتعامل الصحيح مع المطالبات يضمن حماية ممتلكاتك وراحة بالك. تذكر: الوقاية خير من العلاج، والتأمين الجيد يحول الكوارث المحتملة إلى مجرد مضايقات بسيطة قابلة للحل.
		</p>
	</div>
</article>
`;

export const GET: RequestHandler = async () => {
	return new Response(customContent, {
		headers: {
			'Content-Type': 'text/html'
		}
	});
}; 
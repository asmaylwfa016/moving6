<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'moving-checklist-timeline');
	const relatedPosts = posts
		.filter(p => p.slug !== 'moving-checklist-timeline' && 
			(p.tags.includes('تخطيط استراتيجي') || p.tags.includes('نصائح نقل الأثاث')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>قائمة مهام نقل العفش: جدول زمني شامل من 8 أسابيع قبل النقل | مدونة نقل العفش جدة</title>
	<meta name="description" content="قائمة مهام منظمة زمنياً لنقل العفش في جدة. من 8 أسابيع قبل النقل حتى يوم الانتقال، دليلك الشامل لعملية نقل منظمة وخالية من التوتر." />
	<meta name="keywords" content="قائمة مهام نقل العفش, جدول زمني للنقل, تخطيط نقل الأثاث, نقل منظم جدة" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">قائمة مهام نقل العفش: جدول زمني شامل من 8 أسابيع قبل النقل</h1>
		<div class="text-gray-600">
			<time datetime="2025-06-29">29 يونيو 2025</time>
			<span class="mx-2">•</span>
			<span>10 دقائق للقراءة</span>
		</div>
	</header>

	<img src="/images/moving_tips_stress_free_guide.jpg" alt="قائمة مهام نقل العفش" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			نقل العفش عملية معقدة تتطلب تخطيطاً دقيقاً وتنظيماً محكماً. في هذا الدليل الشامل، نقدم لك قائمة مهام مفصلة وجدولاً زمنياً يمتد لـ 8 أسابيع، لضمان نقل سلس وخالٍ من التوتر في جدة.
		</p>
	</section>

	<section class="mb-8">
		<h2>8 أسابيع قبل النقل: التخطيط الأولي</h2>
		<ul class="space-y-2">
			<li>✅ حدد تاريخ النقل المستهدف</li>
			<li>✅ ضع ميزانية أولية لعملية النقل</li>
			<li>✅ ابدأ البحث عن شركات نقل العفش في جدة</li>
			<li>✅ قم بجرد أولي لممتلكاتك</li>
			<li>✅ حدد الأغراض التي لن تنقلها معك</li>
		</ul>
		<div class="bg-blue-50 p-4 rounded-lg mt-4">
			<p><strong>نصيحة:</strong> البدء المبكر يمنحك مرونة أكبر في الاختيار والتفاوض على الأسعار.</p>
		</div>
	</section>

	<section class="mb-8">
		<h2>6 أسابيع قبل النقل: الحجز والتنظيم</h2>
		<ul class="space-y-2">
			<li>✅ احصل على عروض أسعار من 3-5 شركات نقل</li>
			<li>✅ قارن العروض واختر الشركة المناسبة</li>
			<li>✅ احجز موعد النقل رسمياً</li>
			<li>✅ ابدأ في التخلص من الأغراض غير المرغوبة</li>
			<li>✅ نظم بيع أو التبرع بالأثاث الزائد</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>4 أسابيع قبل النقل: التحضير العملي</h2>
		<h3>المهام الإدارية:</h3>
		<ul class="space-y-2">
			<li>✅ أبلغ المالك الحالي/الجديد بموعد النقل</li>
			<li>✅ ابدأ في جمع مستلزمات التغليف</li>
			<li>✅ صور الأغراض الثمينة للتوثيق</li>
			<li>✅ احتفظ بنسخ من المستندات المهمة</li>
		</ul>

		<h3>التغليف المبكر:</h3>
		<ul class="space-y-2">
			<li>✅ ابدأ بتغليف الأغراض الموسمية</li>
			<li>✅ غلف الكتب والديكورات</li>
			<li>✅ رقم الصناديق وسجل محتوياتها</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>2 أسابيع قبل النقل: التسريع</h2>
		<div class="bg-yellow-50 p-4 rounded-lg mb-4">
			<p><strong>تنبيه:</strong> هذه مرحلة حرجة - تأكد من إنجاز المهام الأساسية.</p>
		</div>
		
		<h3>مهام التغليف:</h3>
		<ul class="space-y-2">
			<li>✅ غلف معظم الأغراض غير الضرورية يومياً</li>
			<li>✅ فكك الأثاث الكبير إن أمكن</li>
			<li>✅ ضع ملصقات واضحة على الصناديق</li>
		</ul>

		<h3>التنسيق:</h3>
		<ul class="space-y-2">
			<li>✅ أكد موعد النقل مع الشركة</li>
			<li>✅ رتب لأخذ إجازة من العمل يوم النقل</li>
			<li>✅ نسق مع الجيران بخصوص موقف الشاحنة</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>أسبوع واحد قبل النقل: اللمسات الأخيرة</h2>
		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2 text-right">اليوم</th>
					<th class="border p-2 text-right">المهام</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">الأحد</td>
					<td class="border p-2">
						• تغليف المطبخ (ما عدا الضروريات)<br>
						• تنظيف الأجهزة الكهربائية
					</td>
				</tr>
				<tr>
					<td class="border p-2">الإثنين</td>
					<td class="border p-2">
						• تغليف غرف النوم<br>
						• تحضير حقيبة الضروريات
					</td>
				</tr>
				<tr>
					<td class="border p-2">الثلاثاء</td>
					<td class="border p-2">
						• تغليف الحمامات<br>
						• فصل وتنظيف الأجهزة
					</td>
				</tr>
				<tr>
					<td class="border p-2">الأربعاء</td>
					<td class="border p-2">
						• المراجعة النهائية للصناديق<br>
						• تأكيد التفاصيل مع شركة النقل
					</td>
				</tr>
				<tr>
					<td class="border p-2">الخميس</td>
					<td class="border p-2">
						• التنظيف العام للمنزل<br>
						• تحضير المال النقدي للدفع/البقشيش
					</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>يوم النقل: قائمة المهام النهائية</h2>
		<div class="bg-green-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">قبل وصول الشركة:</h3>
			<ul class="space-y-2 mb-4">
				<li>✅ استيقظ مبكراً وتناول إفطاراً جيداً</li>
				<li>✅ قم بجولة تفقدية أخيرة</li>
				<li>✅ احم الأرضيات والجدران</li>
				<li>✅ ضع الأغراض الثمينة في مكان آمن</li>
			</ul>

			<h3 class="font-bold mb-3">أثناء النقل:</h3>
			<ul class="space-y-2 mb-4">
				<li>✅ كن متواجداً للإشراف والتوجيه</li>
				<li>✅ تحقق من قائمة الجرد</li>
				<li>✅ صور أي أضرار موجودة مسبقاً</li>
				<li>✅ احتفظ بالمستندات المهمة معك</li>
			</ul>

			<h3 class="font-bold mb-3">بعد التحميل:</h3>
			<ul class="space-y-2">
				<li>✅ تفقد جميع الغرف والخزائن</li>
				<li>✅ أغلق النوافذ وأطفئ الأنوار</li>
				<li>✅ سلم المفاتيح حسب الاتفاق</li>
				<li>✅ احصل على إيصال من شركة النقل</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>في المنزل الجديد: قائمة الاستقبال</h2>
		<ol class="space-y-3">
			<li><strong>1. التحضير قبل الوصول:</strong> نظف المنزل الجديد وحدد أماكن الأثاث</li>
			<li><strong>2. استقبال الشحنة:</strong> تحقق من سلامة الصناديق والأثاث</li>
			<li><strong>3. التوجيه:</strong> أرشد العمال لوضع كل قطعة في مكانها</li>
			<li><strong>4. المراجعة:</strong> تأكد من استلام جميع الأغراض</li>
			<li><strong>5. التوثيق:</strong> وثق أي أضرار فوراً</li>
		</ol>
	</section>

	<section class="mb-8">
		<h2>نصائح إضافية لتنظيم أفضل</h2>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-blue-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🏷️ نظام الترميز بالألوان</h3>
				<p>استخدم ملصقات ملونة لكل غرفة لتسهيل التعرف على الصناديق.</p>
			</div>
			<div class="bg-green-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">📱 التطبيقات المساعدة</h3>
				<p>استخدم تطبيقات إدارة المهام لتتبع تقدمك.</p>
			</div>
			<div class="bg-yellow-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">📦 صندوق الضروريات</h3>
				<p>جهز صندوقاً خاصاً بأغراض أول يوم في المنزل الجديد.</p>
			</div>
			<div class="bg-purple-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">📸 التوثيق المصور</h3>
				<p>صور محتويات الصناديق لسهولة البحث لاحقاً.</p>
			</div>
		</div>
	</section>

	<footer class="mt-12 pt-8 border-t">
		<div class="bg-gray-50 p-6 rounded-lg">
			<h3 class="text-xl font-bold mb-4">مقالات ذات صلة:</h3>
			<div class="grid gap-4">
				{#each relatedPosts as post}
					<a href="/blog/{post.slug}" class="block hover:bg-gray-100 p-3 rounded transition-colors">
						<h4 class="font-semibold text-blue-600 hover:text-blue-800">{post.title}</h4>
						<p class="text-gray-600 text-sm mt-1">{post.summary}</p>
					</a>
				{/each}
			</div>
		</div>
		
		<div class="mt-8 text-center text-gray-600">
			<p>هل وجدت هذه القائمة مفيدة؟ شاركها مع من يحتاجها!</p>
		</div>
	</footer>
</article> 
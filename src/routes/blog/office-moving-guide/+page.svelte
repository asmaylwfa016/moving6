<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'office-moving-guide');
	const relatedPosts = posts
		.filter(p => p.slug !== 'office-moving-guide' && 
			(p.tags.includes('نقل المكاتب') || p.tags.includes('تخطيط استراتيجي')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل نقل المكاتب والشركات في جدة: خطة شاملة لانتقال سلس | مدونة نقل العفش جدة</title>
	<meta name="description" content="دليل متخصص لنقل المكاتب والشركات في جدة. تخطيط استراتيجي، تقليل فترة التوقف، نصائح لنقل المعدات المكتبية والملفات الحساسة." />
	<meta name="keywords" content="نقل المكاتب جدة, نقل الشركات, انتقال المكتب, نقل معدات مكتبية" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل نقل المكاتب والشركات في جدة</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-07">7 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>11 دقيقة للقراءة</span>
		</div>
	</header>

	<img src="/images/furniture_transportation_jeddah_specialists_saudi.jpg" alt="نقل المكاتب" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			نقل المكتب أكثر تعقيداً من نقل المنزل. يتطلب تخطيطاً دقيقاً لتقليل تعطل الأعمال وضمان استمرارية العمليات. هذا الدليل يقدم خطة شاملة لنقل ناجح وفعال للمكاتب في جدة.
		</p>
	</section>

	<section class="mb-8">
		<h2>التخطيط المبكر: مفتاح النجاح</h2>
		
		<h3>الجدول الزمني المثالي</h3>
		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">الفترة</th>
					<th class="border p-2">المهام الرئيسية</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">3-6 أشهر قبل</td>
					<td class="border p-2">تشكيل فريق النقل، اختيار الموقع الجديد</td>
				</tr>
				<tr>
					<td class="border p-2">2-3 أشهر قبل</td>
					<td class="border p-2">اختيار شركة النقل، التخطيط التفصيلي</td>
				</tr>
				<tr>
					<td class="border p-2">1-2 شهر قبل</td>
					<td class="border p-2">إبلاغ الموظفين والعملاء، بدء التعبئة</td>
				</tr>
				<tr>
					<td class="border p-2">أسبوعان قبل</td>
					<td class="border p-2">التحضيرات النهائية، نسخ احتياطي للبيانات</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>تشكيل فريق النقل</h2>
		
		<div class="bg-blue-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">الأدوار الأساسية:</h3>
			<ul class="space-y-2">
				<li><strong>منسق النقل:</strong> المسؤول الرئيسي عن العملية</li>
				<li><strong>مسؤول تقنية المعلومات:</strong> نقل الأنظمة والشبكات</li>
				<li><strong>مسؤول الموارد البشرية:</strong> التواصل مع الموظفين</li>
				<li><strong>مسؤول المشتريات:</strong> العقود والميزانية</li>
				<li><strong>ممثلو الأقسام:</strong> تنسيق احتياجات كل قسم</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>نقل المعدات المكتبية</h2>

		<h3>تصنيف المعدات</h3>
		<div class="grid md:grid-cols-3 gap-4">
			<div class="bg-green-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">🟢 منخفضة الحساسية</h4>
				<ul>
					<li>• المكاتب والكراسي</li>
					<li>• الخزائن الفارغة</li>
					<li>• اللوحات والديكور</li>
				</ul>
			</div>
			<div class="bg-yellow-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">🟡 متوسطة الحساسية</h4>
				<ul>
					<li>• الطابعات والماسحات</li>
					<li>• أجهزة الكمبيوتر</li>
					<li>• معدات المؤتمرات</li>
				</ul>
			</div>
			<div class="bg-red-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">🔴 عالية الحساسية</h4>
				<ul>
					<li>• الخوادم والشبكات</li>
					<li>• المعدات الطبية/المخبرية</li>
					<li>• البيانات والملفات السرية</li>
				</ul>
			</div>
		</div>

		<h3>نصائح للتعامل مع المعدات</h3>
		<ul class="space-y-2 mt-4">
			<li>✓ صور وسجل الأرقام التسلسلية لجميع الأجهزة</li>
			<li>✓ احتفظ بنسخ احتياطية من جميع البيانات</li>
			<li>✓ استخدم صناديق مخصصة للإلكترونيات</li>
			<li>✓ ضع ملصقات واضحة على كل جهاز</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>إدارة الملفات والوثائق</h2>

		<div class="bg-purple-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">استراتيجية الثلاث خطوات:</h3>
			<ol class="space-y-3">
				<li>
					<strong>1. التصنيف والتنظيف:</strong>
					<p>فرصة مثالية للتخلص من الملفات القديمة وتنظيم الأرشيف</p>
				</li>
				<li>
					<strong>2. الرقمنة:</strong>
					<p>حول الوثائق المهمة إلى نسخ إلكترونية قبل النقل</p>
				</li>
				<li>
					<strong>3. الحماية:</strong>
					<p>استخدم صناديق مقاومة للماء ومرقمة للملفات الحساسة</p>
				</li>
			</ol>
		</div>
	</section>

	<section class="mb-8">
		<h2>تقليل فترة التوقف</h2>

		<h3>استراتيجيات فعالة</h3>
		<ul class="space-y-3">
			<li><strong>النقل على مراحل:</strong> انقل قسماً واحداً في كل مرة</li>
			<li><strong>النقل في عطلة نهاية الأسبوع:</strong> استغل أيام الجمعة والسبت</li>
			<li><strong>العمل عن بُعد:</strong> اسمح للموظفين بالعمل من المنزل خلال النقل</li>
			<li><strong>الإعداد المسبق:</strong> جهز البنية التحتية في الموقع الجديد مسبقاً</li>
		</ul>

		<div class="bg-gray-50 p-4 rounded-lg mt-4">
			<p><strong>نصيحة:</strong> خطط لتكون العمليات الحرجة آخر ما ينقل وأول ما يُشغل</p>
		</div>
	</section>

	<section class="mb-8">
		<h2>قائمة مراجعة شاملة</h2>

		<div class="grid md:grid-cols-2 gap-6">
			<div>
				<h3 class="font-bold mb-3">قبل النقل:</h3>
				<ul class="space-y-1">
					<li>☐ تحديث العنوان في جميع السجلات الرسمية</li>
					<li>☐ إشعار العملاء والموردين</li>
					<li>☐ تحديث المواد التسويقية</li>
					<li>☐ نقل/إلغاء الخدمات (كهرباء، إنترنت، هاتف)</li>
					<li>☐ تأمين على النقل</li>
					<li>☐ تصاريح النقل إن لزمت</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold mb-3">بعد النقل:</h3>
				<ul class="space-y-1">
					<li>☐ فحص جميع المعدات</li>
					<li>☐ إعادة تشغيل الأنظمة</li>
					<li>☐ اختبار الاتصالات</li>
					<li>☐ جولة تعريفية للموظفين</li>
					<li>☐ تحديث خطط الطوارئ</li>
					<li>☐ الاحتفال بالانتقال الناجح!</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>التكاليف المتوقعة</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">حجم المكتب</th>
					<th class="border p-2">التكلفة التقريبية</th>
					<th class="border p-2">المدة المتوقعة</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">صغير (5-10 موظفين)</td>
					<td class="border p-2">3,000 - 8,000 ريال</td>
					<td class="border p-2">1-2 يوم</td>
				</tr>
				<tr>
					<td class="border p-2">متوسط (10-50 موظف)</td>
					<td class="border p-2">8,000 - 25,000 ريال</td>
					<td class="border p-2">2-4 أيام</td>
				</tr>
				<tr>
					<td class="border p-2">كبير (50+ موظف)</td>
					<td class="border p-2">25,000+ ريال</td>
					<td class="border p-2">أسبوع أو أكثر</td>
				</tr>
			</tbody>
		</table>
		<p class="text-sm mt-2">* التكاليف تشمل النقل والتركيب الأساسي، قد تزيد حسب الخدمات الإضافية</p>
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
			<p>تذكر: التخطيط الجيد يوفر الوقت والمال ويضمن استمرارية الأعمال!</p>
		</div>
	</footer>
</article> 
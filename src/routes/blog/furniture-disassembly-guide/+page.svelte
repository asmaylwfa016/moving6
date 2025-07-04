<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'furniture-disassembly-guide');
	const relatedPosts = posts
		.filter(p => p.slug !== 'furniture-disassembly-guide' && 
			(p.tags.includes('حماية الأثاث') || p.tags.includes('فك وتركيب الأثاث')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل فك وتركيب الأثاث أثناء النقل: نصائح الخبراء وطرق احترافية | مدونة نقل العفش جدة</title>
	<meta name="description" content="دليل شامل لفك وتركيب جميع أنواع الأثاث بطريقة صحيحة وآمنة. نصائح احترافية لحماية أثاثك وتوفير الوقت والجهد." />
	<meta name="keywords" content="فك تركيب الأثاث, تفكيك الأثاث للنقل, إعادة تركيب الأثاث, حماية الأثاث أثناء النقل" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل فك وتركيب الأثاث أثناء النقل: نصائح الخبراء</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-05">5 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>10 دقائق للقراءة</span>
		</div>
	</header>

	<img src="/images/furniture_transportation_jeddah_specialists_saudi.jpg" alt="فك وتركيب الأثاث" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			فك وتركيب الأثاث بشكل صحيح يوفر المساحة، يقلل خطر التلف، ويسهل عملية النقل. في هذا الدليل الشامل، نشارك معك خبرات المحترفين في التعامل مع جميع أنواع الأثاث، من الأبسط إلى الأكثر تعقيداً.
		</p>
	</section>

	<section class="mb-8">
		<h2>الأدوات الأساسية المطلوبة</h2>
		
		<div class="bg-yellow-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">🔧 صندوق العدة الأساسي:</h3>
			<div class="grid md:grid-cols-2 gap-4">
				<ul>
					<li>• مفكات متنوعة (عادية وصليبة)</li>
					<li>• مفتاح ألن (Allen keys) بأحجام مختلفة</li>
					<li>• مطرقة مطاطية</li>
					<li>• كماشة متعددة الاستخدامات</li>
					<li>• مفتاح إنجليزي قابل للتعديل</li>
				</ul>
				<ul>
					<li>• مثقاب كهربائي (اختياري لكن مفيد جداً)</li>
					<li>• شريط قياس</li>
					<li>• قلم وملصقات للترقيم</li>
					<li>• أكياس بلاستيكية للمسامير</li>
					<li>• كاميرا أو هاتف للتصوير</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>القواعد الذهبية لفك الأثاث</h2>
		
		<ol class="space-y-3">
			<li><strong>1. صور قبل الفك:</strong> التقط صوراً من جميع الزوايا، خاصة التوصيلات المعقدة</li>
			<li><strong>2. رقم القطع:</strong> استخدم ملصقات مرقمة على كل قطعة وقطعتها المقابلة</li>
			<li><strong>3. احفظ المسامير:</strong> ضع مسامير كل قطعة في كيس منفصل مع رقمها</li>
			<li><strong>4. اتبع التعليمات:</strong> احتفظ بدليل التركيب الأصلي إن وجد</li>
			<li><strong>5. لا تفرط في الفك:</strong> فكك فقط ما يلزم للنقل الآمن</li>
		</ol>
	</section>

	<section class="mb-8">
		<h2>دليل فك الأثاث حسب النوع</h2>

		<h3>🛏️ الأسرّة</h3>
		<div class="bg-blue-50 p-6 rounded-lg mb-6">
			<h4 class="font-bold mb-3">خطوات الفك:</h4>
			<ol class="space-y-2">
				<li>1. أزل المرتبة والمفروشات</li>
				<li>2. فك الألواح الجانبية من الرأسية والقدمية</li>
				<li>3. احتفظ بالمسامير الطويلة مع الألواح الجانبية</li>
				<li>4. لف الأجزاء المعدنية بالفقاعات لمنع الخدوش</li>
			</ol>
			<p class="mt-3"><strong>نصيحة:</strong> ضع شريط لاصق على فتحات المسامير لحمايتها من التلف</p>
		</div>

		<h3>🪑 الكراسي والطاولات</h3>
		<table class="w-full border-collapse mb-6">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">النوع</th>
					<th class="border p-2">طريقة الفك</th>
					<th class="border p-2">احتياطات خاصة</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">طاولة طعام</td>
					<td class="border p-2">فك الأرجل فقط إن أمكن</td>
					<td class="border p-2">احم السطح بغطاء سميك</td>
				</tr>
				<tr>
					<td class="border p-2">كراسي خشب</td>
					<td class="border p-2">عادة لا تحتاج فك</td>
					<td class="border p-2">لف الأرجل بالفوم</td>
				</tr>
				<tr>
					<td class="border p-2">كراسي مكتب</td>
					<td class="border p-2">فصل القاعدة عن المقعد</td>
					<td class="border p-2">احم العجلات من الكسر</td>
				</tr>
				<tr>
					<td class="border p-2">طاولة قابلة للتمديد</td>
					<td class="border p-2">أزل الأوراق الإضافية</td>
					<td class="border p-2">ثبت آلية التمديد جيداً</td>
				</tr>
			</tbody>
		</table>

		<h3>🚪 الخزائن والدواليب</h3>
		<div class="bg-green-50 p-6 rounded-lg mb-6">
			<h4 class="font-bold mb-3">الترتيب الصحيح:</h4>
			<ul class="space-y-2">
				<li>• أخرج جميع المحتويات والأرفف</li>
				<li>• رقم الأرفف حسب ترتيبها</li>
				<li>• فك الأبواب (احتفظ بالمفصلات معها)</li>
				<li>• إذا كان الدولاب كبيراً، فكك الجوانب</li>
				<li>• لف المرايا بعناية فائقة</li>
			</ul>
			<div class="bg-red-100 p-3 rounded mt-4">
				<p><strong>⚠️ تحذير:</strong> لا تحاول فك دواليب IKEA المركبة بالغراء - قد تتلف نهائياً!</p>
			</div>
		</div>

		<h3>🛋️ الكنب والأرائك</h3>
		<ul class="space-y-2 mb-6">
			<li><strong>الكنب العادي:</strong> فك الأرجل فقط (إن أمكن)</li>
			<li><strong>الكنب السرير:</strong> تأكد من تثبيت آلية الطي جيداً</li>
			<li><strong>الكنب المقسم (Sectional):</strong> فصل الأقسام وترقيمها</li>
			<li><strong>الكراسي الهزازة:</strong> فك القاعدة عن المقعد</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>نصائح لحفظ القطع الصغيرة</h2>

		<div class="bg-purple-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">📦 نظام التنظيم المثالي:</h3>
			<ol class="space-y-3">
				<li>
					<strong>1. كيس لكل قطعة:</strong>
					<p>استخدم أكياس زيبلوك وارقمها بوضوح</p>
				</li>
				<li>
					<strong>2. الصق الكيس بالأثاث:</strong>
					<p>ثبت كيس المسامير على القطعة نفسها بشريط لاصق</p>
				</li>
				<li>
					<strong>3. صندوق مركزي:</strong>
					<p>احتفظ بصندوق واحد لجميع الأدوات والأكياس الصغيرة</p>
				</li>
				<li>
					<strong>4. قائمة مرجعية:</strong>
					<p>اكتب قائمة بجميع القطع المفكوكة ومكان كل كيس</p>
				</li>
			</ol>
		</div>
	</section>

	<section class="mb-8">
		<h2>إعادة التركيب في المنزل الجديد</h2>

		<h3>التحضير للتركيب</h3>
		<ul class="space-y-2">
			<li>✓ حدد مكان كل قطعة قبل البدء</li>
			<li>✓ تأكد من وجود جميع القطع والمسامير</li>
			<li>✓ نظف القطع من الغبار قبل التركيب</li>
			<li>✓ جهز منطقة عمل واسعة ومحمية</li>
		</ul>

		<h3>ترتيب التركيب الأمثل</h3>
		<div class="bg-gray-50 p-6 rounded-lg mt-4">
			<ol class="space-y-2">
				<li><strong>1. الأثاث الكبير أولاً:</strong> الدواليب والأسرّة</li>
				<li><strong>2. القطع الثابتة:</strong> المكاتب والطاولات</li>
				<li><strong>3. الأثاث المتحرك:</strong> الكراسي والطاولات الجانبية</li>
				<li><strong>4. الإكسسوارات:</strong> الأرفف والديكورات</li>
			</ol>
		</div>
	</section>

	<section class="mb-8">
		<h2>الأخطاء الشائعة وكيفية تجنبها</h2>

		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-red-50 p-4 rounded-lg">
				<h4 class="font-bold text-red-700 mb-2">❌ الخطأ</h4>
				<p>شد المسامير بقوة مفرطة</p>
				<h4 class="font-bold text-green-700 mt-3 mb-2">✅ الصواب</h4>
				<p>شد بإحكام دون مبالغة لتجنب تشقق الخشب</p>
			</div>
			<div class="bg-red-50 p-4 rounded-lg">
				<h4 class="font-bold text-red-700 mb-2">❌ الخطأ</h4>
				<p>فك جميع القطع دفعة واحدة</p>
				<h4 class="font-bold text-green-700 mt-3 mb-2">✅ الصواب</h4>
				<p>فك قطعة قطعة مع التغليف المباشر</p>
			</div>
			<div class="bg-red-50 p-4 rounded-lg">
				<h4 class="font-bold text-red-700 mb-2">❌ الخطأ</h4>
				<p>عدم حماية الأجزاء المفكوكة</p>
				<h4 class="font-bold text-green-700 mt-3 mb-2">✅ الصواب</h4>
				<p>لف كل جزء بمواد حماية مناسبة</p>
			</div>
			<div class="bg-red-50 p-4 rounded-lg">
				<h4 class="font-bold text-red-700 mb-2">❌ الخطأ</h4>
				<p>نسيان ترتيب القطع</p>
				<h4 class="font-bold text-green-700 mt-3 mb-2">✅ الصواب</h4>
				<p>ترقيم وتصوير كل خطوة</p>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>متى تحتاج لمختص؟</h2>

		<div class="bg-yellow-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">استعن بمحترف في هذه الحالات:</h3>
			<ul class="space-y-2">
				<li>• الأثاث الأثري أو القيّم جداً</li>
				<li>• القطع المعقدة ذات الآليات الخاصة</li>
				<li>• الأثاث المثبت بالجدران (وحدات مطبخ، خزائن حائط)</li>
				<li>• عند فقدان دليل التركيب الأصلي للقطع المعقدة</li>
				<li>• إذا لم تكن واثقاً من قدرتك على إعادة التركيب</li>
			</ul>
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
			<p>تذكر: الصبر والتنظيم هما مفتاح النجاح في فك وتركيب الأثاث!</p>
		</div>
	</footer>
</article> 
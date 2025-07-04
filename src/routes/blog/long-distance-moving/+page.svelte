<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'long-distance-moving');
	const relatedPosts = posts
		.filter(p => p.slug !== 'long-distance-moving' && 
			(p.tags.includes('التخطيط للنقل') || p.tags.includes('نصائح نقل الأثاث')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل النقل لمسافات طويلة من وإلى جدة: نصائح للنقل بين المدن | مدونة نقل العفش جدة</title>
	<meta name="description" content="دليل شامل للنقل بين المدن من وإلى جدة. نصائح للتخطيط، التغليف الآمن، اختيار الشركة المناسبة، وضمان وصول أثاثك بأمان." />
	<meta name="keywords" content="نقل بين المدن, نقل لمسافات طويلة, نقل من جدة, نقل إلى جدة" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل النقل لمسافات طويلة من وإلى جدة</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-09">9 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>10 دقائق للقراءة</span>
		</div>
	</header>

	<img src="/images/long_distance_moving_jeddah_experts.jpg" alt="النقل لمسافات طويلة" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			النقل بين المدن يتطلب تخطيطاً خاصاً وعناية فائقة. سواء كنت تنتقل من جدة إلى الرياض، الدمام، أو أي مدينة أخرى، هذا الدليل يوفر كل ما تحتاجه لنقل آمن وسلس.
		</p>
	</section>

	<section class="mb-8">
		<h2>التحديات الخاصة بالنقل لمسافات طويلة</h2>
		
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-red-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🚚 التحديات</h3>
				<ul>
					<li>• مدة النقل الطويلة</li>
					<li>• تغيرات الطقس والحرارة</li>
					<li>• احتمالية أكبر للأضرار</li>
					<li>• صعوبة المتابعة المباشرة</li>
				</ul>
			</div>
			<div class="bg-green-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">✅ الحلول</h3>
				<ul>
					<li>• تغليف احترافي مضاعف</li>
					<li>• تأمين شامل على الشحنة</li>
					<li>• اختيار شركة موثوقة</li>
					<li>• نظام تتبع إلكتروني</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>المسافات والأوقات المتوقعة من جدة</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">المدينة</th>
					<th class="border p-2">المسافة (كم)</th>
					<th class="border p-2">وقت القيادة</th>
					<th class="border p-2">وقت النقل المتوقع</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">الرياض</td>
					<td class="border p-2">950</td>
					<td class="border p-2">9-10 ساعات</td>
					<td class="border p-2">1-2 يوم</td>
				</tr>
				<tr>
					<td class="border p-2">الدمام</td>
					<td class="border p-2">1,400</td>
					<td class="border p-2">13-14 ساعة</td>
					<td class="border p-2">2-3 أيام</td>
				</tr>
				<tr>
					<td class="border p-2">المدينة المنورة</td>
					<td class="border p-2">420</td>
					<td class="border p-2">4-5 ساعات</td>
					<td class="border p-2">1 يوم</td>
				</tr>
				<tr>
					<td class="border p-2">أبها</td>
					<td class="border p-2">625</td>
					<td class="border p-2">7-8 ساعات</td>
					<td class="border p-2">1-2 يوم</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>التخطيط المسبق للنقل البعيد</h2>

		<h3>قبل 6-8 أسابيع</h3>
		<ul class="space-y-2">
			<li>📋 ابحث عن شركات نقل متخصصة في المسافات الطويلة</li>
			<li>💰 احصل على عروض أسعار من 3-5 شركات</li>
			<li>📅 حدد تاريخ النقل المناسب</li>
			<li>🏠 رتب السكن المؤقت إن لزم</li>
		</ul>

		<h3>قبل 3-4 أسابيع</h3>
		<ul class="space-y-2">
			<li>✅ اختر الشركة ووقع العقد</li>
			<li>📦 ابدأ بالتخلص من الأغراض غير الضرورية</li>
			<li>📄 اجمع المستندات المهمة</li>
			<li>🔧 رتب لصيانة السيارة إذا كنت ستقودها</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>التغليف الخاص للمسافات الطويلة</h2>

		<div class="bg-yellow-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">قواعد التغليف الذهبية:</h3>
			<ol class="space-y-2">
				<li><strong>1. التغليف المزدوج:</strong> استخدم طبقتين من مواد الحماية</li>
				<li><strong>2. الصناديق القوية:</strong> استخدم صناديق جديدة أو شبه جديدة فقط</li>
				<li><strong>3. الملء الكامل:</strong> لا تترك فراغات داخل الصناديق</li>
				<li><strong>4. التوزيع الذكي:</strong> وزع الوزن بالتساوي</li>
				<li><strong>5. العلامات الواضحة:</strong> ضع علامات مفصلة على كل صندوق</li>
			</ol>
		</div>

		<h3>مواد خاصة مطلوبة</h3>
		<ul class="space-y-2 mt-4">
			<li>• صناديق مقواة للأغراض الثقيلة</li>
			<li>• أكياس مفرغة من الهواء للملابس</li>
			<li>• حاويات بلاستيكية محكمة للسوائل</li>
			<li>• مواد عزل حراري للإلكترونيات</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>اختيار شركة النقل المناسبة</h2>

		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-green-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">✅ ما تبحث عنه</h3>
				<ul>
					<li>• خبرة في النقل بين المدن</li>
					<li>• تراخيص سارية المفعول</li>
					<li>• تأمين شامل</li>
					<li>• نظام تتبع GPS</li>
					<li>• سمعة جيدة وتقييمات إيجابية</li>
				</ul>
			</div>
			<div class="bg-red-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">⚠️ علامات تحذيرية</h3>
				<ul>
					<li>• أسعار منخفضة جداً</li>
					<li>• عدم وجود عقد مكتوب</li>
					<li>• طلب دفعة كاملة مقدماً</li>
					<li>• عدم وجود مكتب ثابت</li>
					<li>• رفض تقديم مراجع</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>قائمة الأغراض الأساسية للرحلة</h2>

		<div class="bg-blue-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">احمل معك دائماً:</h3>
			<ul class="space-y-1">
				<li>☐ الوثائق المهمة (الهوية، العقود، الشهادات)</li>
				<li>☐ الأدوية والوصفات الطبية</li>
				<li>☐ المجوهرات والأشياء الثمينة</li>
				<li>☐ الأجهزة الإلكترونية الشخصية</li>
				<li>☐ ملابس لـ 3-5 أيام</li>
				<li>☐ مستلزمات النظافة الشخصية</li>
				<li>☐ شواحن الأجهزة</li>
				<li>☐ نقود كافية وبطاقات بنكية</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>التكاليف المتوقعة</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">حجم الشحنة</th>
					<th class="border p-2">جدة - الرياض</th>
					<th class="border p-2">جدة - الدمام</th>
					<th class="border p-2">جدة - المدينة</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">استوديو/غرفة</td>
					<td class="border p-2">1,500-2,500</td>
					<td class="border p-2">2,000-3,500</td>
					<td class="border p-2">1,000-1,800</td>
				</tr>
				<tr>
					<td class="border p-2">شقة 2-3 غرف</td>
					<td class="border p-2">3,000-5,000</td>
					<td class="border p-2">4,000-6,500</td>
					<td class="border p-2">2,000-3,500</td>
				</tr>
				<tr>
					<td class="border p-2">فيلا/منزل كبير</td>
					<td class="border p-2">6,000-10,000</td>
					<td class="border p-2">8,000-13,000</td>
					<td class="border p-2">4,000-7,000</td>
				</tr>
			</tbody>
		</table>
		<p class="text-sm mt-2">* الأسعار بالريال السعودي وتقريبية</p>
	</section>

	<section class="mb-8">
		<h2>نصائح للتوفير في النقل البعيد</h2>

		<ul class="space-y-3">
			<li>🗓️ <strong>تجنب المواسم:</strong> تجنب الصيف وبداية السنة الدراسية</li>
			<li>📦 <strong>قلل الحجم:</strong> بع أو تبرع بما لا تحتاجه</li>
			<li>🤝 <strong>النقل المشترك:</strong> شارك الشاحنة مع آخرين</li>
			<li>💪 <strong>التعبئة الذاتية:</strong> قم بالتعبئة بنفسك</li>
			<li>📋 <strong>قارن الأسعار:</strong> احصل على عروض متعددة</li>
		</ul>
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
			<p>تذكر: التخطيط الجيد يضمن وصول أغراضك بأمان مهما كانت المسافة!</p>
		</div>
	</footer>
</article> 
<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'packing-materials-guide');
	const relatedPosts = posts
		.filter(p => p.slug !== 'packing-materials-guide' && 
			(p.tags.includes('مواد التغليف') || p.tags.includes('حماية الأثاث')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل شامل لمواد التغليف والتعبئة لنقل العفش: أنواعها واستخداماتها | مدونة نقل العفش جدة</title>
	<meta name="description" content="اكتشف أفضل مواد التغليف لحماية أثاثك أثناء النقل. دليل مفصل لأنواع المواد، استخداماتها، وأين تجدها في جدة بأفضل الأسعار." />
	<meta name="keywords" content="مواد تغليف العفش, كراتين نقل, فقاعات التغليف, مستلزمات النقل جدة" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل شامل لمواد التغليف والتعبئة لنقل العفش</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-03">3 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>12 دقيقة للقراءة</span>
		</div>
	</header>

	<!-- Hero -->
	<section class="relative h-72 md:h-96">
		<img src="/images/jeddah_furniture_moving_specialists.jpg" alt="مواد تغليف العفش" class="w-full rounded-lg shadow-lg mb-8" />
	</section>

	<section class="mb-8">
		<p class="lead">
			التغليف الصحيح هو مفتاح نقل آمن وناجح للعفش. في هذا الدليل الشامل، نستعرض جميع أنواع مواد التغليف المتاحة، استخداماتها المثلى، وأين تجدها في جدة بأفضل الأسعار.
		</p>
	</section>

	<section class="mb-8">
		<h2>المواد الأساسية للتغليف</h2>
		
		<h3>1. الكراتين والصناديق</h3>
		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">النوع</th>
					<th class="border p-2">الحجم</th>
					<th class="border p-2">الاستخدام</th>
					<th class="border p-2">السعر التقريبي</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">كرتون صغير</td>
					<td class="border p-2">30×30×30 سم</td>
					<td class="border p-2">الكتب، الأدوات الثقيلة</td>
					<td class="border p-2">5-8 ريال</td>
				</tr>
				<tr>
					<td class="border p-2">كرتون متوسط</td>
					<td class="border p-2">40×40×40 سم</td>
					<td class="border p-2">الملابس، الألعاب</td>
					<td class="border p-2">8-12 ريال</td>
				</tr>
				<tr>
					<td class="border p-2">كرتون كبير</td>
					<td class="border p-2">60×50×50 سم</td>
					<td class="border p-2">الوسائد، البطانيات</td>
					<td class="border p-2">15-20 ريال</td>
				</tr>
				<tr>
					<td class="border p-2">كرتون الملابس</td>
					<td class="border p-2">60×50×100 سم</td>
					<td class="border p-2">الملابس على الشماعات</td>
					<td class="border p-2">25-35 ريال</td>
				</tr>
			</tbody>
		</table>

		<div class="bg-yellow-50 p-4 rounded-lg mt-4">
			<p><strong>نصيحة:</strong> لا تملأ الصناديق الكبيرة بأغراض ثقيلة. استخدم الصناديق الصغيرة للأوزان الثقيلة.</p>
		</div>

		<h3>2. مواد الحماية والتبطين</h3>
		<div class="grid md:grid-cols-2 gap-6 mt-6">
			<div class="bg-blue-50 p-6 rounded-lg">
				<h4 class="font-bold mb-3">🫧 البلاستيك الفقاعي (Bubble Wrap)</h4>
				<ul class="space-y-2">
					<li><strong>الاستخدام:</strong> الأجهزة الإلكترونية، الزجاج، التحف</li>
					<li><strong>المميزات:</strong> حماية ممتازة من الصدمات</li>
					<li><strong>السعر:</strong> 30-50 ريال للرول (عرض 1م × 50م)</li>
					<li><strong>نصيحة:</strong> ضع الفقاعات للداخل للحماية الأفضل</li>
				</ul>
			</div>

			<div class="bg-green-50 p-6 rounded-lg">
				<h4 class="font-bold mb-3">📰 ورق التغليف</h4>
				<ul class="space-y-2">
					<li><strong>الاستخدام:</strong> الأطباق، الأكواب، الديكورات</li>
					<li><strong>المميزات:</strong> نظيف وخالٍ من الحبر</li>
					<li><strong>السعر:</strong> 20-30 ريال للحزمة (10 كجم)</li>
					<li><strong>بديل:</strong> الجرائد (لكن احذر من الحبر)</li>
				</ul>
			</div>

			<div class="bg-purple-50 p-6 rounded-lg">
				<h4 class="font-bold mb-3">🧽 الفوم والإسفنج</h4>
				<ul class="space-y-2">
					<li><strong>الاستخدام:</strong> حواف الأثاث، الأجهزة الكبيرة</li>
					<li><strong>المميزات:</strong> مرن وقابل للقص</li>
					<li><strong>السعر:</strong> 15-25 ريال للوح (2م × 1م)</li>
					<li><strong>سماكات:</strong> 1سم، 2سم، 5سم</li>
				</ul>
			</div>

			<div class="bg-pink-50 p-6 rounded-lg">
				<h4 class="font-bold mb-3">🛡️ البطانيات المتحركة</h4>
				<ul class="space-y-2">
					<li><strong>الاستخدام:</strong> الأثاث الكبير، الأجهزة</li>
					<li><strong>المميزات:</strong> قابلة لإعادة الاستخدام</li>
					<li><strong>السعر:</strong> 50-80 ريال للبطانية</li>
					<li><strong>البديل:</strong> بطانيات قديمة من المنزل</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>مواد متخصصة لأغراض محددة</h2>

		<h3>الأجهزة الإلكترونية</h3>
		<ul class="space-y-2">
			<li><strong>أكياس مضادة للكهرباء الساكنة:</strong> ضرورية للأجزاء الإلكترونية الحساسة (10-20 ريال للعبوة)</li>
			<li><strong>صناديق التلفاز الأصلية:</strong> الأفضل إن كانت متوفرة، أو اشترِ صناديق خاصة (50-100 ريال)</li>
			<li><strong>حبيبات السيليكا:</strong> لامتصاص الرطوبة (15-25 ريال للعبوة)</li>
		</ul>

		<h3>الأثاث الخشبي والمعدني</h3>
		<ul class="space-y-2">
			<li><strong>أغطية الأثاث البلاستيكية:</strong> لحماية من الخدوش والغبار (30-50 ريال للرول)</li>
			<li><strong>واقيات الزوايا:</strong> من الكرتون أو الفوم (2-5 ريال للقطعة)</li>
			<li><strong>شريط التغليف العريض:</strong> لتثبيت الأدراج والأبواب (10-15 ريال)</li>
		</ul>

		<h3>المرايا واللوحات</h3>
		<div class="bg-red-50 p-6 rounded-lg">
			<h4 class="font-bold mb-3">⚠️ تحذير: المرايا تحتاج عناية خاصة</h4>
			<ol class="space-y-2">
				<li>1. ضع شريط لاصق على شكل X على سطح المرآة</li>
				<li>2. لف بطبقات متعددة من الفقاعات</li>
				<li>3. ضع في صندوق مخصص للمرايا</li>
				<li>4. اكتب "قابل للكسر" بوضوح</li>
			</ol>
		</div>
	</section>

	<section class="mb-8">
		<h2>أدوات التثبيت والإغلاق</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">الأداة</th>
					<th class="border p-2">الاستخدام</th>
					<th class="border p-2">النصائح</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">شريط التغليف الشفاف</td>
					<td class="border p-2">إغلاق الصناديق</td>
					<td class="border p-2">استخدم 3 خطوط: وسط وجانبين</td>
				</tr>
				<tr>
					<td class="border p-2">شريط التغليف الملون</td>
					<td class="border p-2">تمييز الصناديق حسب الغرف</td>
					<td class="border p-2">لون مختلف لكل غرفة</td>
				</tr>
				<tr>
					<td class="border p-2">حبال التربيط</td>
					<td class="border p-2">تثبيت الأثاث في الشاحنة</td>
					<td class="border p-2">استخدم حبال قوية ومتينة</td>
				</tr>
				<tr>
					<td class="border p-2">أشرطة الرباط (Ratchet Straps)</td>
					<td class="border p-2">تثبيت الأحمال الثقيلة</td>
					<td class="border p-2">أكثر أماناً من الحبال العادية</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>أين تجد مواد التغليف في جدة؟</h2>

		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-yellow-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">🏪 المتاجر المتخصصة</h3>
				<ul>
					<li>• متاجر مستلزمات النقل في حي الصناعية</li>
					<li>• محلات الكرتون في سوق الجملة</li>
					<li>• متاجر أدوات التغليف في البغدادية</li>
				</ul>
			</div>

			<div class="bg-blue-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">🛒 المتاجر الكبرى</h3>
				<ul>
					<li>• ساكو - قسم أدوات النقل</li>
					<li>• إيكيا - صناديق التخزين</li>
					<li>• بنده وكارفور - مستلزمات أساسية</li>
				</ul>
			</div>

			<div class="bg-green-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">💻 التسوق الإلكتروني</h3>
				<ul>
					<li>• أمازون السعودية</li>
					<li>• نون - قسم المنزل</li>
					<li>• متاجر محلية أونلاين</li>
				</ul>
			</div>

			<div class="bg-purple-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">♻️ مصادر مجانية/رخيصة</h3>
				<ul>
					<li>• السوبرماركت - كراتين مجانية</li>
					<li>• محلات الأجهزة - صناديق كبيرة</li>
					<li>• مجموعات التواصل المحلية</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>نصائح لتوفير المال في مواد التغليف</h2>

		<ol class="space-y-3">
			<li><strong>1. ابدأ الجمع مبكراً:</strong> اجمع الصناديق والأوراق من المحلات قبل أسابيع من النقل</li>
			<li><strong>2. استخدم ما لديك:</strong> المناشف والملابس القديمة ممتازة للتبطين</li>
			<li><strong>3. اشترِ بالجملة:</strong> أرخص بكثير من الشراء بالقطعة</li>
			<li><strong>4. شارك مع الجيران:</strong> اشتروا المواد معاً لتحصلوا على خصومات</li>
			<li><strong>5. أعد البيع:</strong> بع المواد غير المستخدمة بعد النقل</li>
		</ol>
	</section>

	<section class="mb-8">
		<h2>قائمة التسوق النموذجية لشقة متوسطة</h2>

		<div class="bg-gray-50 p-6 rounded-lg">
			<h3 class="font-bold mb-4">لشقة من 2-3 غرف نوم:</h3>
			<ul class="space-y-2">
				<li>✓ 20-30 كرتونة متنوعة الأحجام</li>
				<li>✓ 2 رول بلاستيك فقاعي</li>
				<li>✓ 5 كجم ورق تغليف</li>
				<li>✓ 3-4 رولات شريط لاصق</li>
				<li>✓ 10 أمتار من الفوم/الإسفنج</li>
				<li>✓ 5-10 بطانيات متحركة</li>
				<li>✓ ملصقات وأقلام للترقيم</li>
			</ul>
			<p class="mt-4"><strong>التكلفة التقريبية:</strong> 400-600 ريال</p>
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
			<p>تذكر: الاستثمار في مواد تغليف جيدة يوفر عليك تكاليف إصلاح الأضرار!</p>
		</div>
	</footer>
</article> 
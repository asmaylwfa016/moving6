<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'small-apartment-moving');
	const relatedPosts = posts
		.filter(p => p.slug !== 'small-apartment-moving' && 
			(p.tags.includes('توفير المال') || p.tags.includes('نصائح نقل الأثاث')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل نقل الشقق الصغيرة في جدة: نصائح ذكية وحلول عملية | مدونة نقل العفش جدة</title>
	<meta name="description" content="دليل متخصص لنقل الشقق الصغيرة والاستوديوهات في جدة. نصائح لتوفير المال والمساحة، مع حلول ذكية للتحديات الخاصة." />
	<meta name="keywords" content="نقل شقق صغيرة, نقل استوديو, توفير مساحة النقل, نقل اقتصادي جدة" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل نقل الشقق الصغيرة في جدة: نصائح ذكية وحلول عملية</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-04">4 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>8 دقائق للقراءة</span>
		</div>
	</header>

	<!-- Hero -->
	<section class="relative h-72 md:h-96">
		<img src="/images/jeddah_furniture_moving_specialists.jpg" alt="نقل الشقق الصغيرة" class="w-full rounded-lg shadow-lg mb-8" />
	</section>

	<section class="mb-8">
		<p class="lead">
			نقل الشقق الصغيرة والاستوديوهات له تحدياته الخاصة. رغم قلة الأغراض، إلا أن المساحة المحدودة وضرورة الاستفادة من كل متر تتطلب تخطيطاً ذكياً. هذا الدليل يقدم حلولاً عملية مصممة خصيصاً للشقق الصغيرة في جدة.
		</p>
	</section>

	<section class="mb-8">
		<h2>مميزات نقل الشقق الصغيرة</h2>
		
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-green-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">✅ التكلفة المنخفضة</h3>
				<p>أغراض أقل = تكلفة أقل. يمكنك توفير 50-70% مقارنة بالشقق الكبيرة.</p>
			</div>
			<div class="bg-blue-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">⏱️ الوقت الأقل</h3>
				<p>يمكن إنجاز النقل في 3-5 ساعات بدلاً من يوم كامل.</p>
			</div>
			<div class="bg-purple-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🚚 مركبة واحدة</h3>
				<p>غالباً ما تكفي شاحنة صغيرة أو بيك أب واحد.</p>
			</div>
			<div class="bg-yellow-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">👥 فريق أصغر</h3>
				<p>2-3 عمال يكفون بدلاً من فريق كبير.</p>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>التحديات الخاصة وحلولها</h2>

		<h3>1. الأثاث متعدد الاستخدامات</h3>
		<p>معظم أثاث الشقق الصغيرة له أكثر من وظيفة (أريكة سرير، طاولة قابلة للطي، إلخ).</p>
		<ul>
			<li><strong>التحدي:</strong> آليات معقدة قد تتضرر</li>
			<li><strong>الحل:</strong> صور فيديو لطريقة الطي/الفتح قبل التفكيك</li>
			<li><strong>نصيحة:</strong> احتفظ بالمسامير والأجزاء الصغيرة في أكياس مرقمة</li>
		</ul>

		<h3>2. التخزين المدمج</h3>
		<div class="bg-gray-50 p-4 rounded-lg">
			<p><strong>مشكلة شائعة:</strong> وحدات التخزين المثبتة بالجدران أو المدمجة في التصميم.</p>
			<ul class="mt-2">
				<li>• قرر مبكراً: هل ستنقلها أم تتركها؟</li>
				<li>• إذا قررت نقلها، استعن بفني متخصص</li>
				<li>• وثق حالتها قبل الفك لتجنب النزاعات</li>
			</ul>
		</div>

		<h3>3. المساحات الضيقة</h3>
		<table class="w-full border-collapse mt-4">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">التحدي</th>
					<th class="border p-2">الحل العملي</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">مداخل ضيقة</td>
					<td class="border p-2">قس جميع الأبواب والممرات مسبقاً</td>
				</tr>
				<tr>
					<td class="border p-2">سلالم ضيقة</td>
					<td class="border p-2">فكك الأثاث الكبير قدر الإمكان</td>
				</tr>
				<tr>
					<td class="border p-2">مصاعد صغيرة</td>
					<td class="border p-2">احجز المصعد مسبقاً واستخدمه بكفاءة</td>
				</tr>
				<tr>
					<td class="border p-2">لا يوجد موقف</td>
					<td class="border p-2">نسق مع البلدية للحصول على تصريح مؤقت</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>استراتيجية التعبئة الذكية</h2>

		<h3>قاعدة الصناديق المتماثلة</h3>
		<p>استخدم صناديق بنفس الحجم لسهولة التكديس والنقل. الحجم المثالي: 40×40×40 سم.</p>

		<h3>نظام الترقيم والتصنيف</h3>
		<div class="bg-blue-50 p-6 rounded-lg">
			<h4 class="font-bold mb-3">نظام فعال للشقق الصغيرة:</h4>
			<ul>
				<li><strong>A:</strong> ضروريات اليوم الأول (افتح فوراً)</li>
				<li><strong>B:</strong> أغراض الاستخدام اليومي (افتح خلال 2-3 أيام)</li>
				<li><strong>C:</strong> أغراض موسمية أو قليلة الاستخدام</li>
			</ul>
			<p class="mt-3">ضع ملصقات ملونة: أحمر لـ A، أصفر لـ B، أخضر لـ C</p>
		</div>

		<h3>الاستفادة من كل مساحة</h3>
		<ul class="space-y-2">
			<li>✓ املأ الأدراج بالملابس الخفيفة بدلاً من إفراغها</li>
			<li>✓ ضع المناشف داخل الغسالة والثلاجة</li>
			<li>✓ استخدم الحقائب والشنط الموجودة للتعبئة</li>
			<li>✓ لف الملابس بدلاً من طيها لتوفير المساحة</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>خيارات النقل الاقتصادية</h2>

		<div class="grid md:grid-cols-3 gap-4">
			<div class="bg-yellow-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🚐 خدمة مشتركة</h3>
				<p>شارك الشاحنة مع شخص آخر ينقل في نفس اليوم</p>
				<p class="mt-2"><strong>التوفير:</strong> حتى 40%</p>
			</div>
			<div class="bg-green-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🚙 نقل ذاتي جزئي</h3>
				<p>انقل الصناديق بنفسك واستأجر عمال للأثاث الثقيل فقط</p>
				<p class="mt-2"><strong>التوفير:</strong> حتى 60%</p>
			</div>
			<div class="bg-blue-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">📅 أيام الأسبوع</h3>
				<p>النقل من الأحد للأربعاء أرخص بـ 20-30%</p>
				<p class="mt-2"><strong>أفضل وقت:</strong> صباح الثلاثاء</p>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>قائمة مراجعة خاصة بالشقق الصغيرة</h2>

		<div class="bg-gray-50 p-6 rounded-lg">
			<h3 class="font-bold mb-4">قبل أسبوعين:</h3>
			<ul class="space-y-2">
				<li>☐ قس جميع قطع الأثاث الكبيرة</li>
				<li>☐ قس الأبواب والممرات في المنزلين</li>
				<li>☐ حدد ما ستتخلص منه (لا مساحة للزوائد!)</li>
				<li>☐ ابدأ في استهلاك الطعام المجمد</li>
			</ul>

			<h3 class="font-bold mb-4 mt-6">قبل أسبوع:</h3>
			<ul class="space-y-2">
				<li>☐ احجز شركة النقل أو السيارة</li>
				<li>☐ اجمع 10-15 كرتونة متماثلة</li>
				<li>☐ ابدأ تعبئة الأغراض غير الضرورية</li>
				<li>☐ صور محتويات الخزائن للمرجع</li>
			</ul>

			<h3 class="font-bold mb-4 mt-6">قبل يومين:</h3>
			<ul class="space-y-2">
				<li>☐ أكمل 80% من التعبئة</li>
				<li>☐ نظف الثلاجة والفريزر</li>
				<li>☐ جهز صندوق الضروريات</li>
				<li>☐ شحن جميع الأجهزة الإلكترونية</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>نصائح التنظيم في المنزل الجديد</h2>

		<h3>أولويات الترتيب للمساحات الصغيرة</h3>
		<ol class="space-y-3">
			<li><strong>1. المطبخ والحمام:</strong> الضروريات الأساسية أولاً</li>
			<li><strong>2. منطقة النوم:</strong> رتب السرير وضروريات النوم</li>
			<li><strong>3. منطقة العمل/الدراسة:</strong> إذا كنت تعمل من المنزل</li>
			<li><strong>4. منطقة الجلوس:</strong> يمكن أن تنتظر يوماً أو يومين</li>
			<li><strong>5. التخزين والديكور:</strong> آخر الأولويات</li>
		</ol>

		<h3>حيل لتحقيق أقصى استفادة</h3>
		<div class="bg-purple-50 p-4 rounded-lg mt-4">
			<p><strong>قاعدة ذهبية:</strong> في الشقق الصغيرة، كل سنتيمتر مهم!</p>
			<ul class="mt-2">
				<li>• استخدم الجدران للتخزين العمودي</li>
				<li>• ضع الأثاث متعدد الاستخدامات في أماكن استراتيجية</li>
				<li>• تخلص من أي شيء لم تستخدمه لـ 6 أشهر</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>تكاليف نقل الشقق الصغيرة في جدة</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">نوع الشقة</th>
					<th class="border p-2">نقل كامل</th>
					<th class="border p-2">نقل جزئي</th>
					<th class="border p-2">DIY + عمال</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">استوديو</td>
					<td class="border p-2">400-600 ريال</td>
					<td class="border p-2">250-400 ريال</td>
					<td class="border p-2">150-250 ريال</td>
				</tr>
				<tr>
					<td class="border p-2">غرفة واحدة</td>
					<td class="border p-2">600-900 ريال</td>
					<td class="border p-2">400-600 ريال</td>
					<td class="border p-2">250-400 ريال</td>
				</tr>
				<tr>
					<td class="border p-2">غرفتان صغيرتان</td>
					<td class="border p-2">900-1200 ريال</td>
					<td class="border p-2">600-800 ريال</td>
					<td class="border p-2">400-600 ريال</td>
				</tr>
			</tbody>
		</table>
		<p class="text-sm mt-2">* الأسعار تقريبية وتختلف حسب المسافة والطابق والخدمات الإضافية</p>
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
			<p>تذكر: الشقة الصغيرة تعني نقل أسهل وأسرع - استفد من هذه الميزة!</p>
		</div>
	</footer>
</article> 
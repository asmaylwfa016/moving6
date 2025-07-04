<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'moving-seniors');
	const relatedPosts = posts
		.filter(p => p.slug !== 'moving-seniors' && 
			(p.tags.includes('نصائح عائلية') || p.tags.includes('التخطيط للنقل')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل نقل العفش لكبار السن في جدة: نصائح لانتقال مريح وآمن | مدونة نقل العفش جدة</title>
	<meta name="description" content="دليل متخصص لمساعدة كبار السن في نقل العفش. نصائح للتخطيط، الدعم العاطفي، السلامة، وجعل التجربة أقل إرهاقاً." />
	<meta name="keywords" content="نقل كبار السن, نقل آمن للمسنين, مساعدة كبار السن, نقل مريح" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل نقل العفش لكبار السن في جدة</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-11">11 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>8 دقائق للقراءة</span>
		</div>
	</header>

	<img src="/images/house_moving_less_stressful.jpg" alt="نقل كبار السن" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			نقل العفش تجربة صعبة في أي عمر، لكنها تحمل تحديات خاصة لكبار السن. هذا الدليل يقدم نصائح عملية وحساسة لجعل تجربة النقل أكثر راحة وأماناً لأحبائنا الكبار.
		</p>
	</section>

	<section class="mb-8">
		<h2>التحديات الخاصة بكبار السن</h2>
		
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-blue-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">💭 التحديات العاطفية</h3>
				<ul>
					<li>• التعلق بالذكريات والمكان</li>
					<li>• الخوف من التغيير</li>
					<li>• فقدان الشعور بالاستقلالية</li>
					<li>• القلق من المجهول</li>
				</ul>
			</div>
			<div class="bg-green-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🏃 التحديات الجسدية</h3>
				<ul>
					<li>• محدودية الحركة</li>
					<li>• التعب السريع</li>
					<li>• الحاجة لأدوية منتظمة</li>
					<li>• صعوبة في التعبئة والترتيب</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>التخطيط المبكر والتدريجي</h2>

		<div class="bg-yellow-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">الجدول الزمني المثالي:</h3>
			<ul class="space-y-2">
				<li><strong>3-4 أشهر قبل:</strong> بدء المناقشات وزيارة المنزل الجديد</li>
				<li><strong>2-3 أشهر قبل:</strong> البدء بالفرز التدريجي للأغراض</li>
				<li><strong>شهر واحد قبل:</strong> التعبئة البطيئة للأغراض غير الضرورية</li>
				<li><strong>أسبوعان قبل:</strong> الترتيبات النهائية والتأكد من الراحة</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>نصائح للدعم العاطفي</h2>

		<h3>1. إشراكهم في القرارات</h3>
		<p>امنحهم السيطرة على أكبر عدد ممكن من القرارات. دعهم يختارون ما يأخذونه وما يتركونه.</p>

		<h3>2. احترم الذكريات</h3>
		<ul class="space-y-2">
			<li>• خذ وقتاً للاستماع لقصصهم عن الأغراض</li>
			<li>• صور الأماكن المهمة في المنزل القديم</li>
			<li>• اصنع ألبوم ذكريات خاص</li>
		</ul>

		<h3>3. التدرج في التغيير</h3>
		<p>إذا أمكن، انقل بعض الأغراض المألوفة أولاً لخلق شعور بالألفة في المكان الجديد.</p>
	</section>

	<section class="mb-8">
		<h2>السلامة أولاً</h2>

		<div class="bg-red-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">⚠️ احتياطات السلامة:</h3>
			<ul class="space-y-2">
				<li>• أبقِ الممرات خالية من العوائق</li>
				<li>• استخدم إضاءة جيدة في جميع المناطق</li>
				<li>• ضع سجاد مانع للانزلاق</li>
				<li>• احتفظ بالأدوية في مكان يسهل الوصول إليه</li>
				<li>• جهز كرسي مريح للراحة</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>التعبئة الذكية لكبار السن</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">الأولوية</th>
					<th class="border p-2">الأغراض</th>
					<th class="border p-2">نصائح</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">عالية جداً</td>
					<td class="border p-2">الأدوية والمعدات الطبية</td>
					<td class="border p-2">احملها معك شخصياً</td>
				</tr>
				<tr>
					<td class="border p-2">عالية</td>
					<td class="border p-2">الملابس والأغراض اليومية</td>
					<td class="border p-2">عبئها آخر شيء وافتحها أولاً</td>
				</tr>
				<tr>
					<td class="border p-2">متوسطة</td>
					<td class="border p-2">الأثاث المفضل</td>
					<td class="border p-2">رتبه في نفس الطريقة</td>
				</tr>
				<tr>
					<td class="border p-2">منخفضة</td>
					<td class="border p-2">الأغراض الإضافية</td>
					<td class="border p-2">فكر في التبرع بها</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>يوم النقل: خطة العمل</h2>

		<div class="bg-green-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">📋 الترتيبات الخاصة:</h3>
			<ul class="space-y-2">
				<li>• رتب لمرافق موثوق يبقى معهم</li>
				<li>• جهز مكان هادئ بعيد عن صخب النقل</li>
				<li>• احضر وجبات خفيفة ومشروبات مفضلة</li>
				<li>• خطط لفترات راحة منتظمة</li>
				<li>• تأكد من توفر جميع الأدوية</li>
			</ul>
		</div>
	</section>

	<section class="mb-8">
		<h2>الاستقرار في المنزل الجديد</h2>

		<h3>الأولويات الأولى</h3>
		<ol class="space-y-2">
			<li><strong>1. غرفة النوم:</strong> رتبها بنفس طريقة الغرفة القديمة إن أمكن</li>
			<li><strong>2. الحمام:</strong> ركب مقابض الأمان وضع سجاد مانع للانزلاق</li>
			<li><strong>3. المطبخ:</strong> ضع الأغراض في أماكن يسهل الوصول إليها</li>
			<li><strong>4. منطقة الجلوس:</strong> رتب مكان مريح مع إضاءة جيدة</li>
		</ol>

		<h3>تحسينات السلامة</h3>
		<ul class="space-y-2 mt-4">
			<li>✓ تركيب إضاءة ليلية في الممرات</li>
			<li>✓ إزالة العتبات العالية</li>
			<li>✓ تأمين السجاد جيداً</li>
			<li>✓ وضع أرقام الطوارئ في مكان واضح</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>الدعم المجتمعي</h2>

		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-purple-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">🏘️ في الحي الجديد</h3>
				<ul>
					<li>• تعرف على الجيران</li>
					<li>• ابحث عن مراكز كبار السن</li>
					<li>• اكتشف المساجد القريبة</li>
					<li>• حدد أقرب مركز صحي</li>
				</ul>
			</div>
			<div class="bg-pink-50 p-4 rounded-lg">
				<h3 class="font-bold mb-2">👥 الحفاظ على الروابط</h3>
				<ul>
					<li>• رتب زيارات منتظمة من الأصدقاء</li>
					<li>• علمهم استخدام تطبيقات التواصل</li>
					<li>• اشترك في نادي أو مجموعة</li>
					<li>• شجع الأنشطة الاجتماعية</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>نصائح من الخبراء</h2>

		<div class="bg-gray-50 p-6 rounded-lg">
			<h3 class="font-bold mb-3">💡 أفضل الممارسات:</h3>
			<ul class="space-y-2">
				<li>• ابدأ المحادثات مبكراً وكن صبوراً</li>
				<li>• ركز على الإيجابيات في المنزل الجديد</li>
				<li>• احترم مشاعرهم وامنحهم الوقت</li>
				<li>• اطلب المساعدة المهنية عند الحاجة</li>
				<li>• احتفل بالنجاحات الصغيرة</li>
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
			<p>تذكر: الصبر والحب والاحترام هي مفاتيح نقل ناجح لكبار السن ❤️</p>
		</div>
	</footer>
</article> 
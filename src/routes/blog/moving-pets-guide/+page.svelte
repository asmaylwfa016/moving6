<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'moving-pets-guide');
	const relatedPosts = posts
		.filter(p => p.slug !== 'moving-pets-guide' && 
			(p.tags.includes('نصائح عائلية') || p.tags.includes('نقل آمن')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل نقل العفش مع الحيوانات الأليفة: نصائح لراحة وأمان حيوانك | مدونة نقل العفش جدة</title>
	<meta name="description" content="دليل شامل لنقل الحيوانات الأليفة بأمان أثناء نقل العفش في جدة. نصائح عملية للقطط والكلاب والطيور لضمان تجربة خالية من التوتر." />
	<meta name="keywords" content="نقل الحيوانات الأليفة, نقل القطط والكلاب, نقل آمن للحيوانات, نصائح نقل الحيوانات" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل نقل العفش مع الحيوانات الأليفة: نصائح لراحة وأمان حيوانك</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-01">1 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>9 دقائق للقراءة</span>
		</div>
	</header>

	<img src="/images/furniture_transportation_jeddah_specialists_saudi.jpg" alt="نقل الحيوانات الأليفة" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			الحيوانات الأليفة جزء من العائلة، ونقلها يتطلب تخطيطاً خاصاً لضمان راحتها وأمانها. سواء كان لديك قط، كلب، طائر، أو أي حيوان آخر، هذا الدليل يقدم نصائح عملية لنقل آمن وخالٍ من التوتر في جدة.
		</p>
	</section>

	<section class="mb-8">
		<h2>التحضير قبل النقل</h2>
		
		<h3>1. زيارة الطبيب البيطري</h3>
		<ul>
			<li>فحص صحي شامل قبل النقل بأسبوعين</li>
			<li>تحديث التطعيمات والسجلات الصحية</li>
			<li>الحصول على شهادة صحية للسفر إن لزم</li>
			<li>مناقشة أدوية التهدئة إذا كان حيوانك قلقاً</li>
		</ul>

		<h3>2. تحديث المعلومات</h3>
		<ul>
			<li>تحديث بيانات الشريحة الإلكترونية</li>
			<li>تجديد بطاقة التعريف على الطوق</li>
			<li>إضافة رقم هاتف مؤقت للنقل</li>
			<li>التقاط صور حديثة للحيوان</li>
		</ul>

		<div class="bg-yellow-50 p-4 rounded-lg mt-4">
			<p><strong>تنبيه:</strong> ابدأ التحضيرات قبل شهر على الأقل لتجنب التوتر في اللحظة الأخيرة.</p>
		</div>
	</section>

	<section class="mb-8">
		<h2>نصائح خاصة بكل نوع</h2>

		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-blue-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">🐱 القطط</h3>
				<ul class="space-y-2">
					<li>• استخدم حامل قطط مريح وآمن</li>
					<li>• ضع بطانية مألوفة داخل الحامل</li>
					<li>• تجنب إطعامها قبل 3 ساعات من النقل</li>
					<li>• احتفظ بصندوق الرمل في مكان يسهل الوصول إليه</li>
					<li>• استخدم فيرومونات مهدئة للقطط</li>
				</ul>
			</div>

			<div class="bg-green-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">🐕 الكلاب</h3>
				<ul class="space-y-2">
					<li>• امشِ معه نزهة طويلة قبل النقل</li>
					<li>• استخدم حزام أمان خاص بالسيارة</li>
					<li>• احتفظ بألعابه المفضلة قريبة</li>
					<li>• خذ استراحات منتظمة للمشي</li>
					<li>• اصطحب وعاء ماء محمول</li>
				</ul>
			</div>

			<div class="bg-purple-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">🦜 الطيور</h3>
				<ul class="space-y-2">
					<li>• غطِ القفص جزئياً لتقليل التوتر</li>
					<li>• أزل الماء أثناء النقل لتجنب الانسكاب</li>
					<li>• ثبت الألعاب والأراجيح</li>
					<li>• حافظ على درجة حرارة معتدلة</li>
					<li>• تجنب الموسيقى الصاخبة</li>
				</ul>
			</div>

			<div class="bg-pink-50 p-6 rounded-lg">
				<h3 class="font-bold mb-3">🐠 الأسماك</h3>
				<ul class="space-y-2">
					<li>• انقلها في أكياس خاصة بالأسماك</li>
					<li>• احتفظ بماء الحوض الأصلي</li>
					<li>• استخدم صندوق معزول حرارياً</li>
					<li>• تجنب إطعامها قبل 24 ساعة</li>
					<li>• أعد تركيب الحوض فوراً</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>يوم النقل: خطة العمل</h2>

		<h3>الصباح الباكر</h3>
		<ol class="space-y-2">
			<li>أطعم حيوانك وجبة خفيفة قبل 3-4 ساعات</li>
			<li>امنحه فرصة لقضاء حاجته</li>
			<li>ضعه في مكان هادئ بعيد عن الفوضى</li>
			<li>جهز حقيبة الطوارئ الخاصة به</li>
		</ol>

		<h3>حقيبة طوارئ الحيوان</h3>
		<table class="w-full border-collapse mt-4">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2 text-right">العنصر</th>
					<th class="border p-2 text-right">الأهمية</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">طعام وماء لـ 3 أيام</td>
					<td class="border p-2">ضروري</td>
				</tr>
				<tr>
					<td class="border p-2">أدوية وسجلات طبية</td>
					<td class="border p-2">ضروري</td>
				</tr>
				<tr>
					<td class="border p-2">أوعية طعام وماء</td>
					<td class="border p-2">ضروري</td>
				</tr>
				<tr>
					<td class="border p-2">مناشف وبطانيات</td>
					<td class="border p-2">مهم</td>
				</tr>
				<tr>
					<td class="border p-2">ألعاب مفضلة</td>
					<td class="border p-2">مفيد</td>
				</tr>
				<tr>
					<td class="border p-2">أكياس نفايات</td>
					<td class="border p-2">ضروري</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>أثناء النقل</h2>

		<div class="bg-red-50 p-6 rounded-lg mb-4">
			<h3 class="font-bold mb-3">⚠️ تحذيرات مهمة</h3>
			<ul>
				<li>• لا تترك الحيوان في سيارة مغلقة أبداً</li>
				<li>• تجنب وضع الحامل في صندوق السيارة</li>
				<li>• لا تفتح الحامل أثناء النقل</li>
				<li>• احم الحيوان من أشعة الشمس المباشرة</li>
			</ul>
		</div>

		<h3>نصائح للرحلة</h3>
		<ul class="space-y-2">
			<li>حافظ على هدوئك - الحيوانات تشعر بتوترك</li>
			<li>تحدث بصوت هادئ ومطمئن</li>
			<li>شغل موسيقى هادئة</li>
			<li>حافظ على درجة حرارة مريحة</li>
			<li>توقف كل ساعتين للراحة (للكلاب)</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2>الوصول للمنزل الجديد</h2>

		<h3>الساعات الأولى</h3>
		<ol class="space-y-3">
			<li><strong>أعد غرفة آمنة:</strong> اختر غرفة هادئة وضع فيها أغراض الحيوان المألوفة</li>
			<li><strong>التعريف التدريجي:</strong> دع الحيوان يستكشف غرفة واحدة أولاً</li>
			<li><strong>الروتين المألوف:</strong> حافظ على مواعيد الطعام والنوم المعتادة</li>
			<li><strong>الإشراف المستمر:</strong> راقب سلوك حيوانك عن كثب</li>
		</ol>

		<h3>علامات التوتر التي يجب مراقبتها</h3>
		<div class="grid md:grid-cols-2 gap-4 mt-4">
			<div class="bg-yellow-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">القطط والكلاب</h4>
				<ul class="text-sm">
					<li>• فقدان الشهية</li>
					<li>• الاختباء المستمر</li>
					<li>• النباح/المواء المفرط</li>
					<li>• التبول في أماكن خاطئة</li>
				</ul>
			</div>
			<div class="bg-orange-50 p-4 rounded-lg">
				<h4 class="font-bold mb-2">الطيور والحيوانات الصغيرة</h4>
				<ul class="text-sm">
					<li>• نتف الريش</li>
					<li>• رفض الطعام</li>
					<li>• العدوانية غير المعتادة</li>
					<li>• الخمول الشديد</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2>التأقلم مع المنزل الجديد</h2>

		<h3>الأسبوع الأول</h3>
		<ul class="space-y-2">
			<li>توسع تدريجياً في المساحات المتاحة</li>
			<li>حافظ على الروتين اليومي الصارم</li>
			<li>امنح اهتماماً إضافياً وألعاباً جديدة</li>
			<li>تجنب تركه وحيداً لفترات طويلة</li>
		</ul>

		<h3>نصائح طويلة المدى</h3>
		<ul class="space-y-2">
			<li>سجل في عيادة بيطرية قريبة</li>
			<li>اكتشف أماكن المشي الآمنة (للكلاب)</li>
			<li>ابحث عن متاجر الحيوانات القريبة</li>
			<li>تعرف على مالكي الحيوانات في الحي</li>
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
			<p>تذكر: صبرك وحبك هما أهم عوامل نجاح انتقال حيوانك الأليف!</p>
		</div>
	</footer>
</article> 
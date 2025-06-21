<script>
	import { posts } from '../_posts';
	const currentPost = posts.find(p => p.slug === 'eco-friendly-moving');
	const relatedPosts = posts
		.filter(p => p.slug !== 'eco-friendly-moving' && 
			(p.tags.includes('نصائح نقل الأثاث') || p.tags.includes('توفير المال')))
		.slice(0, 3);
</script>

<svelte:head>
	<title>دليل النقل الصديق للبيئة في جدة: نصائح للحفاظ على البيئة | مدونة نقل العفش جدة</title>
	<meta name="description" content="اكتشف كيف تجعل عملية نقل العفش صديقة للبيئة. نصائح عملية لتقليل النفايات وإعادة التدوير." />
	<meta name="keywords" content="نقل صديق للبيئة, نقل مستدام, إعادة تدوير, نقل أخضر جدة" />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">دليل النقل الصديق للبيئة في جدة</h1>
		<div class="text-gray-600">
			<time datetime="2025-07-08">8 يوليو 2025</time>
			<span class="mx-2">•</span>
			<span>8 دقائق للقراءة</span>
		</div>
	</header>

	<img src="/images/jeddah_furniture_moving_specialists.jpg" alt="النقل الصديق للبيئة" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			نقل العفش يمكن أن يكون صديقاً للبيئة! مع تزايد الوعي البيئي في جدة، أصبح من المهم تبني ممارسات مستدامة أثناء النقل.
		</p>
	</section>

	<section class="mb-8">
		<h2>بدائل صديقة للبيئة لمواد التغليف</h2>

		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100">
					<th class="border p-2">المادة التقليدية</th>
					<th class="border p-2">البديل الأخضر</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">البلاستيك الفقاعي</td>
					<td class="border p-2">ورق الجرائد، المناشف القديمة</td>
				</tr>
				<tr>
					<td class="border p-2">صناديق كرتون جديدة</td>
					<td class="border p-2">صناديق معاد استخدامها</td>
				</tr>
				<tr>
					<td class="border p-2">الفوم البلاستيكي</td>
					<td class="border p-2">نشارة الخشب، قصاصات الورق</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-8">
		<h2>نصائح عملية للنقل المستدام</h2>

		<ul class="space-y-2">
			<li>✅ قلل من ممتلكاتك - احتفظ بما تحتاجه فقط</li>
			<li>✅ تبرع بالأغراض غير المرغوبة للجمعيات الخيرية</li>
			<li>✅ استخدم صناديق بلاستيكية قابلة للإعادة</li>
			<li>✅ اختر شركة نقل تستخدم وقود نظيف</li>
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
	</footer>
</article> 
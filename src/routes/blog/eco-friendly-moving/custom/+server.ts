import type { RequestHandler } from './$types';

const customContent = `
<article class="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold mb-4">النقل الصديق للبيئة في جدة: دليل شامل للنقل الأخضر والمستدام</h1>
		<div class="text-gray-600">
			<time datetime="2025-06-12">12 يونيو 2025</time>
			<span class="mx-2">•</span>
			<span>15 دقيقة للقراءة</span>
		</div>
	</header>

	<img src="/images/jeddah_packing_tips.jpg" alt="النقل الصديق للبيئة في جدة" class="w-full rounded-lg shadow-lg mb-8" />

	<section class="mb-8">
		<p class="lead">
			في عصر التغيير المناخي والوعي البيئي المتزايد، أصبح النقل الصديق للبيئة ضرورة حتمية وليس مجرد خيار. اكتشف كيف يمكنك نقل عفشك في جدة بطريقة تحافظ على البيئة وتوفر المال في نفس الوقت، مع استراتيجيات مبتكرة ونصائح عملية مجربة.
		</p>
		
		<div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
			<h3 class="font-bold text-green-800 mb-2">🌱 لماذا النقل الأخضر؟</h3>
			<p>النقل التقليدي يولد في المتوسط 2.3 طن من انبعاثات الكربون لكل عملية نقل. بالطرق الصديقة للبيئة، يمكن تقليل هذا الرقم بنسبة 60-80%!</p>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">مبادئ النقل الصديق للبيئة</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
				<h3 class="text-xl font-bold text-blue-800 mb-4">🌍 المبادئ الأساسية</h3>
				
				<div class="space-y-3">
					<div class="bg-white p-3 rounded border border-blue-300">
						<h4 class="font-bold text-blue-700 mb-1">1. تقليل الاستهلاك</h4>
						<p class="text-sm">قلل من كمية الأشياء التي تنقلها</p>
					</div>
					
					<div class="bg-white p-3 rounded border border-blue-300">
						<h4 class="font-bold text-blue-700 mb-1">2. إعادة الاستخدام</h4>
						<p class="text-sm">استخدم مواد تغليف قابلة للإعادة</p>
					</div>
					
					<div class="bg-white p-3 rounded border border-blue-300">
						<h4 class="font-bold text-blue-700 mb-1">3. إعادة التدوير</h4>
						<p class="text-sm">تخلص من المواد بطريقة صديقة للبيئة</p>
					</div>
					
					<div class="bg-white p-3 rounded border border-blue-300">
						<h4 class="font-bold text-blue-700 mb-1">4. النقل الذكي</h4>
						<p class="text-sm">استخدم وسائل نقل صديقة للبيئة</p>
					</div>
				</div>
			</div>
			
			<div class="bg-green-50 p-6 rounded-lg border border-green-200">
				<h3 class="text-xl font-bold text-green-800 mb-4">📊 الأثر البيئي للنقل</h3>
				
				<div class="space-y-4">
					<div class="bg-white p-4 rounded border border-green-300">
						<h4 class="font-bold text-green-700 mb-2">انبعاثات الكربون:</h4>
						<ul class="text-sm space-y-1">
							<li>• النقل التقليدي: 2.3 طن CO2</li>
							<li>• النقل الأخضر: 0.9 طن CO2</li>
							<li>• التوفير: 60% أقل انبعاثات</li>
						</ul>
					</div>
					
					<div class="bg-white p-4 rounded border border-green-300">
						<h4 class="font-bold text-green-700 mb-2">النفايات المولدة:</h4>
						<ul class="text-sm space-y-1">
							<li>• صناديق كرتون: 50-80 كجم</li>
							<li>• أكياس بلاستيكية: 15-25 كجم</li>
							<li>• مواد تغليف: 30-45 كجم</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">دليل التغليف الأخضر</h2>
		
		<div class="space-y-6">
			<div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
				<h3 class="text-xl font-bold text-purple-800 mb-4">📦 بدائل صديقة للبيئة</h3>
				
				<div class="overflow-x-auto">
					<table class="w-full bg-white border border-purple-200 rounded-lg">
						<thead class="bg-purple-100">
							<tr>
								<th class="px-4 py-3 text-right border-b">المادة التقليدية</th>
								<th class="px-4 py-3 text-right border-b">البديل الأخضر</th>
								<th class="px-4 py-3 text-right border-b">التوفير البيئي</th>
								<th class="px-4 py-3 text-right border-b">المصدر في جدة</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-4 py-3 border-b">صناديق كرتون جديدة</td>
								<td class="px-4 py-3 border-b">صناديق مستعملة/قابلة لإعادة الاستخدام</td>
								<td class="px-4 py-3 border-b text-green-600">70% أقل استهلاك</td>
								<td class="px-4 py-3 border-b">متاجر الأحياء، مواقع التبادل</td>
							</tr>
							<tr>
								<td class="px-4 py-3 border-b">أكياس بلاستيك</td>
								<td class="px-4 py-3 border-b">أكياس قماش/ورقية</td>
								<td class="px-4 py-3 border-b text-green-600">90% قابلة للتحلل</td>
								<td class="px-4 py-3 border-b">محلات البقالة، متاجر النسيج</td>
							</tr>
							<tr>
								<td class="px-4 py-3 border-b">فقاعات هوائية</td>
								<td class="px-4 py-3 border-b">ورق صحف، مناشف قديمة</td>
								<td class="px-4 py-3 border-b text-green-600">100% إعادة استخدام</td>
								<td class="px-4 py-3 border-b">المنزل، الجيران</td>
							</tr>
							<tr>
								<td class="px-4 py-3">شريط لاصق بلاستيكي</td>
								<td class="px-4 py-3">شريط ورقي قابل للتحلل</td>
								<td class="px-4 py-3 text-green-600">85% قابل للتحلل</td>
								<td class="px-4 py-3">مكتبات، متاجر المواد المكتبية</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
				<h3 class="text-xl font-bold text-yellow-800 mb-4">♻️ تقنيات التغليف الذكي</h3>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-bold text-yellow-700 mb-3">استخدم ما لديك:</h4>
						<ul class="text-sm space-y-1">
							<li>• المناشف والبطانيات كوسائد حماية</li>
							<li>• الملابس لتغليف الأشياء الحساسة</li>
							<li>• الحقائب والشنط لحمل الأغراض</li>
							<li>• الوسائد لحماية الأجهزة الإلكترونية</li>
						</ul>
					</div>
					<div>
						<h4 class="font-bold text-yellow-700 mb-3">نصائح التوفير:</h4>
						<ul class="text-sm space-y-1">
							<li>• اطلب صناديق من محلات البقالة</li>
							<li>• استخدم صحف قديمة للتغليف</li>
							<li>• احتفظ بصناديق الأمازون والتسوق</li>
							<li>• شارك مع الجيران في مواد التغليف</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">اختيار شركة النقل الخضراء</h2>
		
		<div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
			<h3 class="text-xl font-bold text-teal-800 mb-4">🚛 معايير الاختيار</h3>
			
			<div class="space-y-4">
				<div class="bg-white p-4 rounded border border-teal-300">
					<h4 class="font-bold text-teal-700 mb-2">أسئلة مهمة للشركة:</h4>
					<div class="grid md:grid-cols-2 gap-4">
						<div>
							<h5 class="font-semibold mb-2">عن الأسطول:</h5>
							<ul class="text-sm space-y-1">
								<li>• هل تستخدمون شاحنات حديثة موفرة للوقود؟</li>
								<li>• ما هو متوسط عمر الشاحنات؟</li>
								<li>• هل لديكم برنامج صيانة دورية؟</li>
								<li>• هل تستخدمون وقود بديل أو هجين؟</li>
							</ul>
						</div>
						<div>
							<h5 class="font-semibold mb-2">عن الممارسات:</h5>
							<ul class="text-sm space-y-1">
								<li>• هل تعيدون تدوير مواد التغليف؟</li>
								<li>• هل تجمعون عدة عمليات نقل في رحلة واحدة؟</li>
								<li>• ما هي سياستكم للنفايات؟</li>
								<li>• هل لديكم شهادات بيئية؟</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div class="bg-white p-4 rounded border border-teal-300">
					<h4 class="font-bold text-teal-700 mb-2">علامات الشركة الخضراء:</h4>
					<div class="grid md:grid-cols-3 gap-4 text-sm">
						<ul class="space-y-1">
							<li>✅ شاحنات حديثة (أقل من 5 سنوات)</li>
							<li>✅ برنامج إعادة تدوير</li>
							<li>✅ مواد تغليف صديقة للبيئة</li>
						</ul>
						<ul class="space-y-1">
							<li>✅ تخطيط مسارات ذكية</li>
							<li>✅ شهادات ISO 14001</li>
							<li>✅ تقارير بيئية سنوية</li>
						</ul>
						<ul class="space-y-1">
							<li>✅ برامج تعويض الكربون</li>
							<li>✅ شراكات مع منظمات بيئية</li>
							<li>✅ تدريب الموظفين على الممارسات الخضراء</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">استراتيجيات النقل المستدام</h2>
		
		<div class="space-y-6">
			<div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
				<div class="flex items-center mb-4">
					<span class="bg-indigo-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">1</span>
					<h3 class="text-xl font-bold text-indigo-800">تقليل حجم النقل</h3>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-bold text-indigo-700 mb-3">قبل النقل:</h4>
						<ul class="text-sm space-y-1">
							<li>• تبرع بالأثاث غير المرغوب فيه</li>
							<li>• بع الأجهزة القديمة</li>
							<li>• أعد تدوير الإلكترونيات</li>
							<li>• تخلص من الكتب والمجلات</li>
						</ul>
					</div>
					<div>
						<h4 class="font-bold text-indigo-700 mb-3">الفوائد البيئية:</h4>
						<ul class="text-sm space-y-1">
							<li>• تقليل استهلاك الوقود بنسبة 20-40%</li>
							<li>• انبعاثات أقل للكربون</li>
							<li>• أقل ضغطاً على مدافن النفايات</li>
							<li>• توفير الموارد الطبيعية</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
				<div class="flex items-center mb-4">
					<span class="bg-orange-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">2</span>
					<h3 class="text-xl font-bold text-orange-800">التخطيط الذكي للمسارات</h3>
				</div>
				
				<div class="space-y-4">
					<div class="bg-white p-4 rounded border border-orange-300">
						<h4 class="font-bold text-orange-700 mb-2">تحسين المسارات:</h4>
						<ul class="text-sm space-y-1">
							<li>• اختر أقصر المسارات باستخدام خرائط جوجل</li>
							<li>• تجنب ساعات الذروة المرورية</li>
							<li>• ادمج عدة مهام في رحلة واحدة</li>
							<li>• خطط للنقل في اتجاه واحد عند الإمكان</li>
						</ul>
					</div>
					
					<div class="bg-white p-4 rounded border border-orange-300">
						<h4 class="font-bold text-orange-700 mb-2">التوفير المحقق:</h4>
						<div class="grid md:grid-cols-3 gap-4 text-sm">
							<div>
								<strong>الوقود:</strong><br>
								توفير 25-35%
							</div>
							<div>
								<strong>الانبعاثات:</strong><br>
								تقليل 30-40%
							</div>
							<div>
								<strong>التكلفة:</strong><br>
								توفير 200-500 ريال
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-pink-50 p-6 rounded-lg border border-pink-200">
				<div class="flex items-center mb-4">
					<span class="bg-pink-500 text-white text-xl font-bold px-3 py-1 rounded-full mr-4">3</span>
					<h3 class="text-xl font-bold text-pink-800">النقل الجماعي المشترك</h3>
				</div>
				
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-bold text-pink-700 mb-3">كيفية التطبيق:</h4>
						<ul class="text-sm space-y-1">
							<li>• شارك الشاحنة مع الجيران</li>
							<li>• ادخل في مجموعات النقل المشترك</li>
							<li>• استخدم منصات التبادل الرقمية</li>
							<li>• نسق مع أصدقاء ينتقلون بنفس الوقت</li>
						</ul>
					</div>
					<div>
						<h4 class="font-bold text-pink-700 mb-3">الفوائد:</h4>
						<ul class="text-sm space-y-1">
							<li>• تقليل عدد الرحلات بنسبة 50-70%</li>
							<li>• توفير 40-60% من التكلفة</li>
							<li>• انبعاثات أقل بشكل كبير</li>
							<li>• بناء علاقات اجتماعية</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">بعد النقل: إعادة التدوير والتخلص الأخضر</h2>
		
		<div class="bg-gray-50 p-6 rounded-lg">
			<h3 class="text-xl font-bold text-gray-800 mb-4">♻️ خريطة إعادة التدوير في جدة</h3>
			
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h4 class="font-bold text-gray-700 mb-3">مراكز إعادة التدوير:</h4>
					<div class="space-y-3">
						<div class="bg-white p-3 rounded border border-gray-200">
							<h5 class="font-semibold text-green-600">الكرتون والورق:</h5>
							<ul class="text-sm space-y-1">
								<li>• مركز التدوير البيئي - طريق الملك عبدالعزيز</li>
								<li>• جمعية البر الخيرية - الحمراء</li>
								<li>• مراكز الأحياء التجارية</li>
							</ul>
						</div>
						
						<div class="bg-white p-3 rounded border border-gray-200">
							<h5 class="font-semibold text-blue-600">البلاستيك والمعادن:</h5>
							<ul class="text-sm space-y-1">
								<li>• شركة تدوير البلاستيك - العزيزية</li>
								<li>• مجمع التدوير البيئي - أبحر</li>
								<li>• محلات شراء الخردة المعدنية</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div>
					<h4 class="font-bold text-gray-700 mb-3">التبرع والعطاء:</h4>
					<div class="space-y-3">
						<div class="bg-white p-3 rounded border border-gray-200">
							<h5 class="font-semibold text-purple-600">الأثاث والملابس:</h5>
							<ul class="text-sm space-y-1">
								<li>• جمعية الأطفال المعوقين</li>
								<li>• مؤسسة الوليد الخيرية</li>
								<li>• مراكز التنمية الاجتماعية</li>
							</ul>
						</div>
						
						<div class="bg-white p-3 rounded border border-gray-200">
							<h5 class="font-semibold text-orange-600">الإلكترونيات:</h5>
							<ul class="text-sm space-y-1">
								<li>• مراكز صيانة الكمبيوتر</li>
								<li>• المدارس والجمعيات التعليمية</li>
								<li>• برامج إعادة تأهيل الأجهزة</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">حاسبة الأثر البيئي</h2>
		
		<div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
			<h3 class="text-xl font-bold text-blue-800 mb-4">🌍 قارن أثرك البيئي</h3>
			
			<div class="overflow-x-auto">
				<table class="w-full bg-white border border-blue-200 rounded-lg">
					<thead class="bg-blue-100">
						<tr>
							<th class="px-4 py-3 text-right border-b">المؤشر</th>
							<th class="px-4 py-3 text-right border-b">النقل التقليدي</th>
							<th class="px-4 py-3 text-right border-b">النقل الأخضر</th>
							<th class="px-4 py-3 text-right border-b">التوفير</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="px-4 py-3 border-b font-semibold">انبعاثات CO2 (كجم)</td>
							<td class="px-4 py-3 border-b text-red-600">2,300</td>
							<td class="px-4 py-3 border-b text-green-600">920</td>
							<td class="px-4 py-3 border-b text-green-600">-60%</td>
						</tr>
						<tr>
							<td class="px-4 py-3 border-b font-semibold">نفايات التغليف (كجم)</td>
							<td class="px-4 py-3 border-b text-red-600">95</td>
							<td class="px-4 py-3 border-b text-green-600">25</td>
							<td class="px-4 py-3 border-b text-green-600">-74%</td>
						</tr>
						<tr>
							<td class="px-4 py-3 border-b font-semibold">استهلاك الوقود (لتر)</td>
							<td class="px-4 py-3 border-b text-red-600">180</td>
							<td class="px-4 py-3 border-b text-green-600">108</td>
							<td class="px-4 py-3 border-b text-green-600">-40%</td>
						</tr>
						<tr>
							<td class="px-4 py-3 border-b font-semibold">تكلفة إضافية (ريال)</td>
							<td class="px-4 py-3 border-b">المرجع</td>
							<td class="px-4 py-3 border-b text-green-600">-400</td>
							<td class="px-4 py-3 border-b text-green-600">توفير مالي</td>
						</tr>
						<tr class="bg-green-50">
							<td class="px-4 py-3 font-bold">الأثر البيئي الإجمالي</td>
							<td class="px-4 py-3 text-red-600 font-bold">عالي</td>
							<td class="px-4 py-3 text-green-600 font-bold">منخفض</td>
							<td class="px-4 py-3 text-green-600 font-bold">65% تحسن</td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<div class="mt-4 bg-white p-4 rounded border border-blue-300">
				<h4 class="font-bold text-blue-800 mb-2">🏆 إنجازك البيئي:</h4>
				<p class="text-sm">باختيار النقل الأخضر، أنت توفر ما يعادل انبعاثات سيارة تسير 850 كم وتحافظ على ما يعادل 15 شجرة!</p>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">قصة نجاح: عائلة نورا الخضراء</h2>
		
		<div class="bg-green-50 p-6 rounded-lg border border-green-200">
			<h3 class="text-xl font-bold text-green-800 mb-4">🌱 تجربة ملهمة</h3>
			
			<div class="space-y-4">
				<div class="bg-white p-4 rounded border border-green-300">
					<h4 class="font-bold text-green-700 mb-2">التحدي:</h4>
					<p class="text-sm">عائلة من 5 أفراد تنتقل من فيلا في النزهة إلى شقة في الكورنيش، مع الرغبة في تقليل الأثر البيئي</p>
				</div>
				
				<div class="bg-white p-4 rounded border border-green-300">
					<h4 class="font-bold text-green-700 mb-2">الاستراتيجية المطبقة:</h4>
					<ol class="text-sm space-y-1">
						<li>1. تبرعوا بـ 60% من الأثاث القديم</li>
						<li>2. استخدموا صناديق مستعملة وملابس للتغليف</li>
						<li>3. تشاركوا الشاحنة مع عائلتين أخريين</li>
						<li>4. اختاروا شركة بشاحنات موفرة للوقود</li>
						<li>5. أعادوا تدوير جميع مواد التغليف</li>
					</ol>
				</div>
				
				<div class="bg-green-200 p-4 rounded border border-green-400">
					<h4 class="font-bold text-green-800 mb-2">النتائج المذهلة:</h4>
					<div class="grid md:grid-cols-2 gap-4 text-sm">
						<div>
							<strong>التوفير المالي:</strong><br>
							1,800 ريال من التكلفة الإجمالية
						</div>
						<div>
							<strong>التوفير البيئي:</strong><br>
							1.8 طن أقل انبعاثات كربون
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-bold mb-4">خاتمة: النقل الأخضر استثمار في المستقبل</h2>
		
		<div class="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
			<p class="mb-4">
				النقل الصديق للبيئة ليس مجرد موضة عابرة، بل ضرورة حتمية لحماية كوكبنا ومستقبل أجيالنا القادمة. في جدة، حيث التطور السريع والنمو العمراني، يمكن لكل فرد أن يساهم في حماية البيئة من خلال اختيارات ذكية عند نقل العفش.
			</p>
			
			<div class="bg-white p-4 rounded border border-green-200">
				<h4 class="font-bold text-green-800 mb-2">🌍 المعادلة الرابحة:</h4>
				<p class="text-sm">بيئة أنظف + توفير مالي + مجتمع أكثر استدامة = مستقبل أفضل للجميع</p>
			</div>
			
			<div class="mt-4 p-4 bg-green-100 rounded">
				<p class="text-sm text-green-800"><strong>🌱 ابدأ الآن:</strong> كل خطوة صغيرة نحو النقل الأخضر تصنع فرقاً كبيراً. اختر الاستدامة في نقلتك القادمة!</p>
			</div>
		</div>
	</section>

</article>
`;

export const GET: RequestHandler = async () => {
	return new Response(customContent, {
		headers: {
			'Content-Type': 'text/html; charset=utf-8'
		}
	});
}; 
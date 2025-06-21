<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { posts } from '../_posts.js';
  import type { BlogPost } from '../_posts.js';
  import type { PageData } from './$types';
  import '$lib/styles/article.css';

  export let data: PageData;

  interface TOCItem {
    id: string;
    text: string;
    level: number;
  }

  interface FAQItem {
    question: string;
    answer: string;
  }

  const slug = data.slug;
  let currentPost: BlogPost = data.post;
  let htmlContent = '';
  let toc: TOCItem[] = [];
  let readTime = 0;
  let faqItems: FAQItem[] = [];
  let openFAQIndex: number | null = null;
  // URL للصورة الأولى داخل Markdown (تُستخدم كبانر وصورة Open Graph)
  let coverImage = '';

  // الحصول على المقالات ذات الصلة بناءً على الوسوم المشتركة
  function getRelatedPosts() {
    if (!currentPost) return [];
    
    return posts
      .filter(p => p.slug !== slug)
      .map(p => ({
        ...p,
        commonTags: p.tags.filter(tag => currentPost!.tags.includes(tag)).length
      }))
      .filter(p => p.commonTags > 0)
      .sort((a, b) => b.commonTags - a.commonTags)
      .slice(0, 3);
  }

  function extractTOC(html: string) {
    const div = document.createElement('div');
    div.innerHTML = html;
    const headings = div.querySelectorAll('h2, h3');
    toc = Array.from(headings).map((h) => {
      const id = h.textContent?.trim().replace(/\s+/g, '-');
      h.id = id ?? '';
      return { id: h.id, text: h.textContent ?? '', level: h.tagName === 'H2' ? 2 : 3 };
    });
  }

  function extractFAQ(text: string) {
    // Extract FAQ section from markdown
    const faqMatch = text.match(/## الأسئلة الشائعة[\s\S]*?(?=\n## |\n---|\n$|$)/);
    if (faqMatch) {
      const faqSection = faqMatch[0];
      const qaMatches = faqSection.match(/### (.+?)\n([\s\S]*?)(?=\n### |\n## |\n---|\n$|$)/g);
      if (qaMatches) {
        faqItems = qaMatches.map(qa => {
          const [, question, answer] = qa.match(/### (.+?)\n([\s\S]*?)$/) || [];
          return {
            question: question?.trim() || '',
            answer: answer?.trim() || ''
          };
        });
      }
    }
  }

  function toggleFAQ(index: number) {
    openFAQIndex = openFAQIndex === index ? null : index;
  }

  function loadArticleContent() {
    // إذا كان هناك محتوى مخصص، نستخدمه
    if (data.customContent) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.customContent, 'text/html');
        const articleElement = doc.querySelector('article');
        
        if (articleElement) {
          htmlContent = articleElement.innerHTML;
          
          // حساب وقت القراءة
          const wordCount = articleElement.textContent?.split(/\s+/).length || 0;
          readTime = Math.max(1, Math.round(wordCount / 200));
          
          // استخراج الصورة الأولى
          const firstImg = articleElement.querySelector('img');
          if (firstImg) {
            coverImage = firstImg.src;
          }
          
          extractTOC(htmlContent);
          return;
        }
      } catch (error) {
        console.log('Error parsing custom content, using fallback');
      }
    }
    
    // المحتوى الاحتياطي المحسن
    const content = `
      <header class="mb-8 text-center">
        <h1 class="text-4xl font-bold mb-4">${currentPost?.title}</h1>
        <div class="text-gray-600">
          <time datetime="${currentPost?.date}">${new Date(currentPost?.date || '').toLocaleDateString('ar-EG')}</time>
          <span class="mx-2">•</span>
          <span>8 دقائق للقراءة</span>
        </div>
      </header>

      <img src="${currentPost?.image}" alt="${currentPost?.title}" class="w-full rounded-lg shadow-lg mb-8" />

      <section class="mb-8">
        <p class="lead text-lg leading-relaxed mb-6">${currentPost?.summary}</p>
        
        <div class="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-400">
          <h3 class="font-bold text-blue-800 mb-2">💡 نقاط مهمة</h3>
          <p>هذا المقال يقدم دليلاً شاملاً ومفصلاً حول موضوع ${currentPost?.title}، مع نصائح عملية وخبرات من المختصين في مجال نقل العفش بجدة.</p>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">المحتوى الأساسي</h2>
        <p class="mb-4">يتناول هذا المقال الجوانب المهمة التالية:</p>
        
        <ul class="space-y-3 list-disc list-inside mb-6">
          <li><strong>التخطيط المسبق:</strong> كيفية التحضير للنقل بشكل صحيح</li>
          <li><strong>اختيار الشركة:</strong> معايير اختيار شركة النقل المناسبة</li>
          <li><strong>التكاليف:</strong> فهم العوامل المؤثرة على الأسعار</li>
          <li><strong>النصائح العملية:</strong> خبرات ميدانية من المختصين</li>
          <li><strong>تجنب المشاكل:</strong> أهم الأخطاء الشائعة وكيفية تجنبها</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">نصائح متخصصة</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-bold text-green-800 mb-2">✅ ما يجب فعله</h3>
            <ul class="text-sm space-y-1">
              <li>• احصل على عروض أسعار متعددة</li>
              <li>• تأكد من وجود تأمين شامل</li>
              <li>• خطط للنقل مبكراً</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h3 class="font-bold text-red-800 mb-2">❌ ما يجب تجنبه</h3>
            <ul class="text-sm space-y-1">
              <li>• الاعتماد على السعر الأرخص فقط</li>
              <li>• إهمال قراءة التقييمات</li>
              <li>• التأجيل حتى اللحظة الأخيرة</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">التكاليف والأسعار</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-right border-b">نوع الخدمة</th>
                <th class="px-4 py-3 text-right border-b">التكلفة التقريبية</th>
                <th class="px-4 py-3 text-right border-b">الملاحظات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 border-b">نقل شقة صغيرة</td>
                <td class="px-4 py-3 border-b">800 - 1,500 ريال</td>
                <td class="px-4 py-3 border-b">حسب المسافة والطابق</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b">نقل شقة كبيرة</td>
                <td class="px-4 py-3 border-b">1,500 - 3,000 ريال</td>
                <td class="px-4 py-3 border-b">تشمل الفك والتركيب</td>
              </tr>
              <tr>
                <td class="px-4 py-3">نقل فيلا</td>
                <td class="px-4 py-3">3,000 - 8,000 ريال</td>
                <td class="px-4 py-3">حسب الحجم والخدمات</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">خلاصة وتوصيات</h2>
        <div class="bg-gray-50 p-6 rounded-lg">
          <p class="mb-4">باتباع الإرشادات المذكورة في هذا المقال، ستتمكن من:</p>
          <ul class="space-y-2 list-disc list-inside mb-4">
            <li>تنظيم عملية النقل بكفاءة عالية</li>
            <li>تجنب المشاكل والتأخيرات غير المرغوبة</li>
            <li>الحصول على أفضل قيمة مقابل المال المدفوع</li>
            <li>ضمان سلامة جميع ممتلكاتك أثناء النقل</li>
          </ul>
          
          <div class="bg-blue-100 p-4 rounded-lg">
            <p class="text-blue-800"><strong>💡 نصيحة أخيرة:</strong> لا تتردد في استخدام حاسبة التكلفة الخاصة بنا للحصول على تقدير دقيق لتكلفة نقل العفش الخاص بك.</p>
          </div>
        </div>
      </section>
    `;
    
    htmlContent = content;
    readTime = 8;
    coverImage = currentPost?.image || '/images/jeddah_movers_1.jpg';
    extractTOC(htmlContent);
  }

  onMount(() => {
    loadArticleContent();
  });

  function share(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  $: relatedPosts = currentPost ? getRelatedPosts() : [];
  $: displayPosts = relatedPosts.length > 0 
    ? relatedPosts 
    : posts.filter(p => p.slug !== slug).slice(0, 3);
</script>

<svelte:head>
  {#if currentPost}
    <title>{currentPost.title}</title>
    <meta name="description" content={currentPost.summary} />
    <meta property="og:title" content={currentPost.title} />
    <meta property="og:description" content={currentPost.summary} />
    <meta property="og:type" content="article" />
    <meta property="article:published_time" content={currentPost.date} />
    <meta property="og:image" content={coverImage || '/images/jeddah_movers_1.jpg'} />
  {/if}
</svelte:head>

{#if !currentPost}
  <main class="min-h-screen flex items-center justify-center font-sans" dir="rtl">
    <div class="text-center space-y-4">
      <h1 class="text-3xl font-bold">404</h1>
      <p>عذراً، لم يتم العثور على المقالة.</p>
      <a href="/blog" class="text-green-700 underline">العودة إلى المدونة</a>
    </div>
  </main>
{:else}
  <main dir="rtl" class="bg-gray-50 font-sans">
    <!-- Hero -->
    <section class="relative h-72 md:h-96">
      <img src={coverImage || '/images/jeddah_movers_1.jpg'} alt={currentPost.title} class="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="text-center text-white space-y-4 px-4">
          <h1 class="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">{currentPost.title}</h1>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <span class="bg-white/20 px-3 py-1 rounded">{new Date(currentPost.date).toLocaleDateString('ar-EG')}</span>
            <span class="bg-white/20 px-3 py-1 rounded">{readTime} دقيقة قراءة</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Content with TOC sidebar -->
    <section class="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
      <!-- Article -->
      <article class="w-full lg:w-3/4" dir="rtl">
        <div class="article-content">
          {@html htmlContent}
        </div>
        <!-- FAQ Section -->
        {#if faqItems.length > 0}
        <div class="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">الأسئلة الشائعة</h2>
          <div class="space-y-4">
            {#each faqItems as faq, index}
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  class="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  on:click={() => toggleFAQ(index)}
                >
                  <span class="font-semibold text-gray-800 text-lg">{faq.question}</span>
                  <svg
                    class="w-5 h-5 text-green-600 transform transition-transform duration-200 {openFAQIndex === index ? 'rotate-180' : ''}"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {#if openFAQIndex === index}
                  <div class="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                    {@html faq.answer}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
        {/if}

        <!-- Social Share -->
        <div class="mt-12 flex gap-4">
          <button on:click={() => share(`https://twitter.com/intent/tweet?url=${location.href}`)} class="bg-blue-500 text-white px-4 py-2 rounded">X</button>
          <button on:click={() => share(`https://www.facebook.com/sharer/sharer.php?u=${location.href}`)} class="bg-blue-700 text-white px-4 py-2 rounded">Facebook</button>
          <button on:click={() => share(`https://api.whatsapp.com/send?text=${location.href}`)} class="bg-green-600 text-white px-4 py-2 rounded">WhatsApp</button>
        </div>
      </article>

      <!-- TOC -->
      {#if toc.length}
      <aside class="hidden lg:block w-1/4 sticky top-32 h-max bg-white rounded-lg shadow p-6 space-y-3">
        <h2 class="font-bold text-lg mb-3">محتويات</h2>
        <ul class="space-y-2">
          {#each toc as item}
            <li class={item.level === 3 ? 'ml-4' : ''}>
              <a href={'#' + item.id} class="text-green-700 hover:underline">{item.text}</a>
            </li>
          {/each}
        </ul>
      </aside>
      {/if}
    </section>

    <!-- Related posts -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-center">مقالات ذات صلة</h2>
        <div class="grid gap-6 md:grid-cols-3">
          {#each displayPosts as rel}
            <a href={`/blog/${rel.slug}`} class="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">
              <!-- صورة المقال -->
              <div class="h-48 overflow-hidden">
                <img 
                  src={rel.image} 
                  alt={rel.title} 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <!-- محتوى المقال -->
              <div class="p-6 flex flex-col flex-grow space-y-3">
                <h3 class="font-semibold text-lg line-clamp-2 group-hover:text-green-700 transition-colors">{rel.title}</h3>
                <p class="text-sm text-gray-600 line-clamp-3">{rel.summary}</p>
                <div class="mt-auto flex items-center justify-between pt-4">
                  <span class="text-xs text-gray-500">{new Date(rel.date).toLocaleDateString('ar-EG')}</span>
                  <span class="text-green-700 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                    اقرأ المزيد ←
                  </span>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>
  </main>
{/if}

<style>
  /* Custom styles can be added here if needed */
</style>
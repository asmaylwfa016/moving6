<script lang="ts">
  import { posts } from './_posts';
  import PostCard from '$lib/components/blog/PostCard.svelte';
  import { onMount } from 'svelte';

  const pageTitle = 'مدونة أسعار نقل العفش في جدة 2025';
  const pageDescription =
    'اقرأ مقالات تحليلية ونصائح ودراسات حالة حول تكاليف نقل الأثاث، التوفير، والمقارنات بين الشركات في جدة.';

  // Lazy loading configuration
  const POSTS_PER_LOAD = 6;
  let visiblePosts = posts.slice(0, POSTS_PER_LOAD);
  let currentIndex = POSTS_PER_LOAD;
  let isLoading = false;
  let hasMorePosts = currentIndex < posts.length;

  function loadMorePosts() {
    if (isLoading || !hasMorePosts) return;
    
    isLoading = true;
    
    // Faster loading with minimal delay for better UX
    setTimeout(() => {
      const nextPosts = posts.slice(currentIndex, currentIndex + POSTS_PER_LOAD);
      visiblePosts = [...visiblePosts, ...nextPosts];
      currentIndex += POSTS_PER_LOAD;
      hasMorePosts = currentIndex < posts.length;
      isLoading = false;
    }, 200);  // Reduced from 800ms to 200ms
  }

  // Intersection Observer for infinite scroll (optional)
  let loadMoreButton: HTMLElement;
  let observer: IntersectionObserver;

  onMount(() => {
    // Optional: Auto-load when user scrolls near the bottom
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && hasMorePosts && !isLoading) {
              loadMorePosts();
            }
          });
        },
        { rootMargin: '100px' }
      );

      if (loadMoreButton) {
        observer.observe(loadMoreButton);
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content="مدونة نقل عفش جدة, نصائح نقل الاثاث, تحليل اسعار النقل" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="blog" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <section class="container mx-auto px-4 py-16">
    <!-- Header section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold mb-4">مدونة نقل العفش</h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        اكتشف أحدث المقالات والنصائح حول نقل العفش في جدة
      </p>
      <div class="mt-4 text-sm text-gray-500">
        عدد المقالات: {posts.length} مقال
      </div>
    </div>

    <!-- Posts grid with lazy loading -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each visiblePosts as post, index}
        <div 
          class="post-card-wrapper"
          style="animation-delay: {(index % POSTS_PER_LOAD) * 0.1}s"
        >
          <PostCard {post} />
        </div>
      {/each}
    </div>

    <!-- Loading indicator and load more button -->
    {#if hasMorePosts || isLoading}
      <div class="text-center mt-12" bind:this={loadMoreButton}>
        {#if isLoading}
          <div class="inline-flex items-center justify-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 ml-3"></div>
            <span class="text-gray-600">جاري تحميل المزيد من المقالات...</span>
          </div>
        {:else}
          <button
            on:click={loadMorePosts}
            class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            تحميل المزيد من المقالات
            <span class="text-sm opacity-90 mr-2">
              ({posts.length - visiblePosts.length} متبقي)
            </span>
          </button>
        {/if}
      </div>
    {:else}
      <div class="text-center mt-12 text-gray-600">
        <div class="inline-flex items-center justify-center bg-gray-100 rounded-lg p-4">
          <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          تم عرض جميع المقالات ({posts.length} مقال)
        </div>
      </div>
    {/if}
  </section>
</main>

<style>
  :global(html) { 
    scroll-behavior: smooth; 
  }

  .post-card-wrapper {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Loading animation styles */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
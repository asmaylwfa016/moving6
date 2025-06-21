<script lang="ts">
  import type { BlogPost } from '../../../routes/blog/_posts';
  import { onMount } from 'svelte';

  export let post: BlogPost;
  
  let imageElement: HTMLImageElement;
  let imageLoaded = false;
  let imageError = false;
  
  onMount(() => {
    // Optional: Add intersection observer for better performance
    if (imageElement && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Image is in viewport, start loading
              imageElement.src = post.image;
              observer.unobserve(imageElement);
            }
          });
        },
        { rootMargin: '50px' }
      );
      
      observer.observe(imageElement);
      
      return () => observer.disconnect();
    } else {
      // Fallback for older browsers
      imageElement.src = post.image;
    }
  });

  function handleImageLoad() {
    imageLoaded = true;
  }

  function handleImageError() {
    imageError = true;
  }
</script>

<a href={`/blog/${post.slug}`} class="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
  <div class="relative h-48 overflow-hidden bg-gray-200">
    <!-- Image placeholder -->
    {#if !imageLoaded && !imageError}
      <div class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
        <div class="flex items-center justify-center h-full">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>
    {/if}
    
    <!-- Error placeholder -->
    {#if imageError}
      <div class="absolute inset-0 bg-gray-300 flex items-center justify-center">
        <div class="text-center text-gray-500">
          <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-sm">فشل تحميل الصورة</p>
        </div>
      </div>
    {/if}
    
    <!-- Actual image -->
    <img 
      bind:this={imageElement}
      alt={post.title}
      class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
      loading="lazy"
      decoding="async"
      on:load={handleImageLoad}
      on:error={handleImageError}
    />
    
    <!-- Image overlay on hover -->
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
  </div>
  
  <div class="p-6">
    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-3">
      {#each post.tags.slice(0, 2) as tag}
        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-green-200 transition-colors">
          {tag}
        </span>
      {/each}
    </div>
    
    <!-- Title -->
    <h2 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
      {post.title}
    </h2>
    
    <!-- Date -->
    <p class="text-sm text-gray-500 mb-3 flex items-center">
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      {new Date(post.date).toLocaleDateString('ar-EG', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}
    </p>
    
    <!-- Summary -->
    <p class="text-gray-700 line-clamp-3 mb-4 leading-relaxed">
      {post.summary}
    </p>
    
    <!-- Read more link -->
    <div class="flex items-center justify-between">
      <span class="text-green-700 font-semibold text-sm group-hover:text-green-800 flex items-center">
        اقرأ المزيد
        <svg class="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </span>
      
      <!-- Reading time estimate -->
      <span class="text-xs text-gray-400 flex items-center">
        <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        {Math.ceil(post.summary.length / 200)} دقائق
      </span>
    </div>
  </div>
</a>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
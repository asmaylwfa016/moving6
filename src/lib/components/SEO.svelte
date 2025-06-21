<script lang="ts">
  import { page } from '$app/stores';
  import type { MetaData, TwitterCardData } from '$lib/seo/meta.js';
  import { 
    generateOpenGraphTags, 
    generateTwitterCardTags, 
    generateBasicMetaTags,
    getDefaultTwitterCard
  } from '$lib/seo/meta.js';
  import {
    generateBlogPostSchema,
    generateBreadcrumbSchema,
    type BlogPostSchema,
    type BreadcrumbSchema,
    type FAQSchema,
    generateFAQSchema
  } from '$lib/seo/schema.js';

  export let meta: MetaData;
  export let blogPost: {
    title: string;
    summary: string;
    date: string;
    tags: string[];
    slug: string;
    image: string;
    wordCount?: number;
  } | null = null;
  export let breadcrumbs: Array<{name: string; url: string}> | null = null;
  export let faqs: Array<{question: string; answer: string}> | null = null;
  export let customTwitter: TwitterCardData | null = null;
  export let additionalSchemas: any[] = [];

  // Generate Twitter card data
  $: twitterCard = customTwitter || getDefaultTwitterCard(meta);

  // Generate blog post schema if blog post data is provided
  $: blogPostSchema = blogPost ? generateBlogPostSchema(blogPost) : null;

  // Generate breadcrumb schema if breadcrumbs are provided
  $: breadcrumbSchema = breadcrumbs ? generateBreadcrumbSchema(breadcrumbs) : null;

  // Generate FAQ schema if FAQs are provided
  $: faqSchema = faqs ? generateFAQSchema(faqs) : null;

  // Combine all schemas
  $: allSchemas = [
    blogPostSchema,
    breadcrumbSchema,
    faqSchema,
    ...additionalSchemas
  ].filter(Boolean);

  // Current URL for canonical and social tags
  $: currentUrl = `https://jeddah-moving.com${$page.url.pathname}`;
  
  // Update meta with current URL if not provided
  $: metaWithUrl = {
    ...meta,
    url: meta.url || currentUrl,
    canonical: meta.canonical || currentUrl
  };
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  {@html generateBasicMetaTags(metaWithUrl)}
  
  <!-- Open Graph Tags -->
  {@html generateOpenGraphTags(metaWithUrl)}
  
  <!-- Twitter Card Tags -->
  {@html generateTwitterCardTags(twitterCard)}
  
  <!-- Additional Meta Tags for Arabic Content -->
  <meta name="language" content="Arabic" />
  <meta name="content-language" content="ar-SA" />
  <meta name="geo.region" content="SA-14" />
  <meta name="geo.placename" content="Jeddah" />
  
  <!-- Mobile Optimization -->
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="نقل العفش جدة" />
  
  <!-- Schema.org JSON-LD -->
  {#each allSchemas as schema}
    <script type="application/ld+json">
      {@html JSON.stringify(schema)}
    </script>
  {/each}
  
  <!-- Preload important resources -->
  <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossorigin />
  
  <!-- DNS Prefetch for external domains -->
  <link rel="dns-prefetch" href="//www.google-analytics.com" />
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="dns-prefetch" href="//fonts.gstatic.com" />
  
  <!-- Performance hints -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Additional meta tags for better indexing -->
  <meta name="rating" content="general" />
  <meta name="distribution" content="global" />
  <meta name="revisit-after" content="7 days" />
  <meta name="expires" content="never" />
  <meta name="pragma" content="no-cache" />
  
  <!-- Rich Snippets Support -->
  {#if meta.type === 'article'}
    <meta property="article:publisher" content="https://www.facebook.com/jeddah.moving.services" />
    <meta property="article:author" content="فريق نقل العفش جدة" />
    {#if meta.tags}
      {#each meta.tags as tag}
        <meta property="article:tag" content={tag} />
      {/each}
    {/if}
  {/if}
  
  <!-- Local Business Markup for location-specific pages -->
  {#if $page.url.pathname.includes('/districts/')}
    <meta name="geo.position" content="21.485811;39.192505" />
    <meta name="ICBM" content="21.485811, 39.192505" />
    <meta name="locality" content="جدة" />
    <meta name="region" content="مكة المكرمة" />
    <meta name="country" content="السعودية" />
  {/if}
</svelte:head> 
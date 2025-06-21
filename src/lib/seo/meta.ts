// SEO Meta tags utilities
export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'blog' | 'profile';
  locale?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
}

export interface TwitterCardData {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export function generateOpenGraphTags(meta: MetaData): string {
  const baseUrl = 'https://jeddah-moving.com';
  const defaultImage = `${baseUrl}/images/hero-image.jpg`;
  
  return `
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="${meta.type || 'website'}" />
    <meta property="og:url" content="${meta.url || baseUrl}" />
    <meta property="og:image" content="${meta.image || defaultImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${meta.title}" />
    <meta property="og:locale" content="${meta.locale || 'ar_SA'}" />
    <meta property="og:site_name" content="${meta.siteName || 'نقل العفش جدة'}" />
    ${meta.type === 'article' && meta.author ? `<meta property="article:author" content="${meta.author}" />` : ''}
    ${meta.type === 'article' && meta.publishedTime ? `<meta property="article:published_time" content="${meta.publishedTime}" />` : ''}
    ${meta.type === 'article' && meta.modifiedTime ? `<meta property="article:modified_time" content="${meta.modifiedTime}" />` : ''}
    ${meta.type === 'article' && meta.section ? `<meta property="article:section" content="${meta.section}" />` : ''}
    ${meta.type === 'article' && meta.tags ? meta.tags.map(tag => `<meta property="article:tag" content="${tag}" />`).join('\n    ') : ''}
  `.trim();
}

export function generateTwitterCardTags(twitter: TwitterCardData): string {
  return `
    <meta name="twitter:card" content="${twitter.card}" />
    <meta name="twitter:title" content="${twitter.title}" />
    <meta name="twitter:description" content="${twitter.description}" />
    ${twitter.site ? `<meta name="twitter:site" content="${twitter.site}" />` : ''}
    ${twitter.creator ? `<meta name="twitter:creator" content="${twitter.creator}" />` : ''}
    ${twitter.image ? `<meta name="twitter:image" content="${twitter.image}" />` : ''}
    ${twitter.imageAlt ? `<meta name="twitter:image:alt" content="${twitter.imageAlt}" />` : ''}
  `.trim();
}

export function generateBasicMetaTags(meta: MetaData): string {
  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    ${meta.keywords ? `<meta name="keywords" content="${meta.keywords}" />` : ''}
    ${meta.canonical ? `<link rel="canonical" href="${meta.canonical}" />` : ''}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="revisit-after" content="7 days" />
  `.trim();
}

export function generateAllMetaTags(meta: MetaData, twitter?: TwitterCardData): string {
  const basicMeta = generateBasicMetaTags(meta);
  const ogMeta = generateOpenGraphTags(meta);
  const twitterMeta = twitter ? generateTwitterCardTags(twitter) : '';
  
  return [basicMeta, ogMeta, twitterMeta].filter(Boolean).join('\n');
}

// Pre-defined meta data for common pages
export const defaultMeta: MetaData = {
  title: 'نقل العفش جدة | مقارنة أسعار نقل الأثاث وأفضل الشركات 2025',
  description: 'منصة شاملة لمقارنة أسعار نقل العفش في جدة. دليل محدث للأحياء، أفضل الشركات، والنصائح العملية لنقل آمن وموفر في عام 2025.',
  keywords: 'نقل العفش جدة, أسعار نقل الأثاث, شركات نقل العفش, نقل الأثاث السعودية, دليل نقل العفش',
  type: 'website',
  url: 'https://jeddah-moving.com',
  siteName: 'نقل العفش جدة'
};

export const blogMeta: MetaData = {
  title: 'مدونة نقل العفش جدة | نصائح وأدلة شاملة لنقل الأثاث',
  description: 'اكتشف أحدث النصائح والأدلة حول نقل العفش في جدة. مقالات متخصصة تساعدك في توفير المال وضمان نقل آمن لأثاثك.',
  keywords: 'مدونة نقل العفش, نصائح نقل الأثاث, تحليل أسعار النقل, دليل النقل جدة',
  type: 'blog',
  url: 'https://jeddah-moving.com/blog'
};

export const calculatorMeta: MetaData = {
  title: 'حاسبة تكلفة نقل العفش جدة | احسب تكلفة النقل بدقة 2025',
  description: 'احسب تكلفة نقل أثاثك في جدة بدقة مع حاسبتنا المتقدمة. تقدير فوري شامل للتغليف، النقل، التأمين وجميع الخدمات الإضافية.',
  keywords: 'حاسبة نقل العفش, تكلفة نقل الأثاث جدة, تقدير أسعار النقل, حساب تكلفة النقل',
  type: 'website',
  url: 'https://jeddah-moving.com/calculator'
};

export const districtsMeta: MetaData = {
  title: 'أسعار نقل العفش في أحياء جدة | دليل شامل لجميع المناطق 2025',
  description: 'دليل شامل لأسعار نقل العفش في جميع أحياء جدة. اكتشف متوسط التكاليف، العوامل المؤثرة، وأفضل الشركات في كل منطقة.',
  keywords: 'أسعار نقل العفش بالأحياء, نقل الأثاث أحياء جدة, تكلفة النقل حسب المنطقة',
  type: 'website',
  url: 'https://jeddah-moving.com/districts'
};

export const companiesMeta: MetaData = {
  title: 'دليل شركات نقل العفش في جدة | مقارنة الأسعار والخدمات 2025',
  description: 'مقارنة شاملة لأفضل شركات نقل العفش في جدة. تقييمات حقيقية، أسعار محدثة، وخدمات متنوعة لتختار الأنسب لاحتياجاتك.',
  keywords: 'شركات نقل العفش جدة, أفضل شركات النقل, مقارنة شركات نقل الأثاث, تقييمات شركات النقل',
  type: 'website',
  url: 'https://jeddah-moving.com/companies'
};

export const pricingMeta: MetaData = {
  title: 'أسعار نقل العفش في جدة | دليل التكاليف وفئات الخدمة 2025',
  description: 'دليل شامل لأسعار نقل العفش في جدة حسب فئات الخدمة. من الاقتصادية إلى الفاخرة، اكتشف التكاليف والخدمات المناسبة لميزانيتك.',
  keywords: 'أسعار نقل العفش, تكلفة نقل الأثاث جدة, فئات خدمات النقل, أسعار النقل 2025',
  type: 'website',
  url: 'https://jeddah-moving.com/pricing'
};

export function getDistrictMeta(districtName: string, districtId: string): MetaData {
  return {
    title: `أسعار نقل العفش في ${districtName} جدة | دليل شامل ${new Date().getFullYear()}`,
    description: `دليلك الشامل لأسعار نقل الأثاث في ${districtName} بجدة. اكتشف متوسط التكاليف، العوامل المؤثرة، وأفضل الشركات الموصى بها.`,
    keywords: `نقل عفش ${districtName}, أسعار نقل الأثاث ${districtName}, شركات نقل في ${districtName} جدة`,
    type: 'article',
    url: `https://jeddah-moving.com/districts/${districtId}`,
    section: 'أحياء جدة'
  };
}

export function getBlogPostMeta(post: {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
  image: string;
}): MetaData {
  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags.join(', '),
    type: 'article',
    url: `https://jeddah-moving.com/blog/${post.slug}`,
    image: `https://jeddah-moving.com${post.image}`,
    publishedTime: post.date,
    modifiedTime: post.date,
    section: 'نقل العفش',
    tags: post.tags,
    author: 'فريق نقل العفش جدة'
  };
}

export function getDefaultTwitterCard(meta: MetaData): TwitterCardData {
  return {
    card: 'summary_large_image',
    site: '@jeddah_moving',
    creator: '@jeddah_moving',
    title: meta.title.length > 70 ? meta.title.substring(0, 67) + '...' : meta.title,
    description: meta.description.length > 200 ? meta.description.substring(0, 197) + '...' : meta.description,
    image: meta.image,
    imageAlt: meta.title
  };
} 
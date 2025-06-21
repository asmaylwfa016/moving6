import { posts } from '../blog/_posts.js';
import { districts } from '$lib/data/districts.js';

const baseUrl = 'https://jeddah-moving.com';

export async function GET() {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  
  // Helper function to generate priority based on page importance
  const getPagePriority = (pageType: string): number => {
    switch (pageType) {
      case 'homepage': return 1.0;
      case 'calculator': return 0.9;
      case 'pricing': return 0.9;
      case 'districts': return 0.9;
      case 'blog': return 0.9;
      case 'companies': return 0.8;
      case 'district-page': return 0.8;
      case 'pricing-category': return 0.8;
      case 'about': return 0.7;
      case 'contact': return 0.7;
      case 'faq': return 0.7;
      case 'compare': return 0.7;
      case 'blog-post': return 0.7;
      default: return 0.5;
    }
  };

  // Helper function to get change frequency
  const getChangeFreq = (pageType: string): string => {
    switch (pageType) {
      case 'homepage': return 'daily';
      case 'blog': return 'daily';
      case 'calculator': return 'weekly';
      case 'pricing': return 'weekly';
      case 'districts': return 'weekly';
      case 'companies': return 'weekly';
      case 'district-page': return 'weekly';
      case 'pricing-category': return 'weekly';
      case 'blog-post': return 'monthly';
      case 'about': return 'monthly';
      case 'contact': return 'monthly';
      case 'faq': return 'monthly';
      case 'compare': return 'monthly';
      default: return 'yearly';
    }
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('homepage')}</changefreq>
    <priority>${getPagePriority('homepage')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/hero-image.jpg</image:loc>
      <image:title>نقل العفش جدة - منصة مقارنة الأسعار</image:title>
      <image:caption>منصة شاملة لمقارنة أسعار نقل العفش وأفضل الشركات في جدة</image:caption>
    </image:image>
  </url>
  
  <!-- Core Pages -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('about')}</changefreq>
    <priority>${getPagePriority('about')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/furniture_transportation_jeddah_specialists_saudi.jpg</image:loc>
      <image:title>خدمات نقل العفش في جدة</image:title>
      <image:caption>منصة مقارنة أسعار نقل العفش في جدة</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/pricing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('pricing')}</changefreq>
    <priority>${getPagePriority('pricing')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/jeddah_moving_prices.jpg</image:loc>
      <image:title>أسعار نقل العفش في جدة</image:title>
      <image:caption>دليل شامل لأسعار وفئات خدمات نقل العفش في جدة</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/companies</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('companies')}</changefreq>
    <priority>${getPagePriority('companies')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/jeddah_furniture_moving_company_ksa.jpg</image:loc>
      <image:title>أفضل شركات نقل العفش في جدة</image:title>
      <image:caption>مقارنة شاملة لأفضل شركات نقل العفش في جدة مع التقييمات والأسعار</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('contact')}</changefreq>
    <priority>${getPagePriority('contact')}</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/calculator</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('calculator')}</changefreq>
    <priority>${getPagePriority('calculator')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/moving_calculator_jeddah.jpg</image:loc>
      <image:title>حاسبة تكلفة نقل العفش في جدة</image:title>
      <image:caption>احسب تكلفة نقل أثاثك بدقة مع حاسبتنا المتقدمة</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('faq')}</changefreq>
    <priority>${getPagePriority('faq')}</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/compare</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('compare')}</changefreq>
    <priority>${getPagePriority('compare')}</priority>
  </url>

  <!-- Pricing Categories -->
  <url>
    <loc>${baseUrl}/pricing/economy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('pricing-category')}</changefreq>
    <priority>${getPagePriority('pricing-category')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/budget_moving_jeddah.jpg</image:loc>
      <image:title>خدمة النقل الاقتصادية في جدة</image:title>
      <image:caption>خيارات نقل العفش الاقتصادية والموفرة في جدة</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/pricing/standard</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('pricing-category')}</changefreq>
    <priority>${getPagePriority('pricing-category')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/standard_moving_jeddah.jpg</image:loc>
      <image:title>خدمة النقل القياسية في جدة</image:title>
      <image:caption>خدمة نقل العفش القياسية بتوازن مثالي بين السعر والجودة</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/pricing/premium</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('pricing-category')}</changefreq>
    <priority>${getPagePriority('pricing-category')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/premium_moving_jeddah.jpg</image:loc>
      <image:title>خدمة النقل المميزة في جدة</image:title>
      <image:caption>خدمة نقل العفش المميزة بأعلى معايير الجودة والراحة</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/pricing/vip</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('pricing-category')}</changefreq>
    <priority>${getPagePriority('pricing-category')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/vip_moving_jeddah.jpg</image:loc>
      <image:title>خدمة النقل الفاخرة VIP في جدة</image:title>
      <image:caption>خدمة نقل العفش الفاخرة للقصور والأثاث الثمين</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/pricing/specialized</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('pricing-category')}</changefreq>
    <priority>${getPagePriority('pricing-category')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/specialized_moving_jeddah.jpg</image:loc>
      <image:title>خدمات النقل المتخصصة في جدة</image:title>
      <image:caption>خدمات نقل متخصصة للمكاتب والمعدات الثقيلة والحساسة</image:caption>
    </image:image>
  </url>

  <!-- Districts Main Page -->
  <url>
    <loc>${baseUrl}/districts</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('districts')}</changefreq>
    <priority>${getPagePriority('districts')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/jeddah_districts_map.jpg</image:loc>
      <image:title>أحياء جدة ونقل العفش</image:title>
      <image:caption>دليل شامل لأسعار نقل العفش في جميع أحياء جدة</image:caption>
    </image:image>
  </url>

  <!-- Individual Districts -->
  ${districts.map(district => `
  <url>
    <loc>${baseUrl}/districts/${district.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('district-page')}</changefreq>
    <priority>${getPagePriority('district-page')}</priority>
    <image:image>
      <image:loc>${baseUrl}${district.image}</image:loc>
      <image:title>نقل العفش في ${district.name}</image:title>
      <image:caption>دليل شامل لأسعار وخدمات نقل العفش في ${district.name} بجدة</image:caption>
    </image:image>
  </url>`).join('')}

  <!-- Blog Main Page -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq('blog')}</changefreq>
    <priority>${getPagePriority('blog')}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/blog_moving_tips_jeddah.jpg</image:loc>
      <image:title>مدونة نقل العفش جدة</image:title>
      <image:caption>نصائح وأدلة شاملة حول نقل العفش في جدة</image:caption>
    </image:image>
  </url>

  <!-- Blog Posts -->
  ${posts.map(post => {
    // Calculate estimated reading time based on summary length
    const readingTime = Math.max(5, Math.ceil(post.summary.length / 200));
    
    return `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>${getChangeFreq('blog-post')}</changefreq>
    <priority>${getPagePriority('blog-post')}</priority>
    <image:image>
      <image:loc>${baseUrl}${post.image}</image:loc>
      <image:title>${post.title}</image:title>
      <image:caption>${post.summary.substring(0, 150)}...</image:caption>
    </image:image>
    <news:news>
      <news:publication>
        <news:name>نقل العفش جدة</news:name>
        <news:language>ar</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${post.title}</news:title>
      <news:keywords>${post.tags.join(', ')}</news:keywords>
    </news:news>
  </url>`;
  }).join('')}

  <!-- Additional SEO-focused pages -->
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/reviews</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/tips</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex'
    }
  });
} 
// SEO Schema markup utilities
export interface BlogPostSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string[];
  author: {
    "@type": string;
    name: string;
    url: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
  articleSection: string;
  keywords: string[];
  wordCount: number;
  timeRequired: string;
  inLanguage: string;
}

export interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  serviceArea: {
    "@type": string;
    name: string;
  };
  areaServed: string[];
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
      };
    }>;
  };
  aggregateRating?: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  review?: Array<{
    "@type": string;
    author: {
      "@type": string;
      name: string;
    };
    reviewRating: {
      "@type": string;
      ratingValue: number;
      bestRating: number;
    };
    reviewBody: string;
    datePublished: string;
  }>;
  sameAs: string[];
  logo: string;
  image: string[];
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface WebSiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  copyrightYear: number;
  copyrightHolder: {
    "@type": string;
    name: string;
  };
  potentialAction: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    };
    "query-input": string;
  };
  mainEntity: {
    "@type": string;
    name: string;
    alternateName: string[];
    description: string;
  };
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
      };
    }>;
  };
}

// Schema generators
export function generateBlogPostSchema(post: {
  title: string;
  summary: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
  wordCount?: number;
}): BlogPostSchema {
  const baseUrl = 'https://jeddah-moving.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    image: [`${baseUrl}${post.image}`],
    author: {
      "@type": "Organization",
      name: "فريق نقل العفش جدة",
      url: `${baseUrl}/about`
    },
    publisher: {
      "@type": "Organization",
      name: "نقل العفش جدة",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/furniture_transportation_jeddah_specialists_saudi.jpg`
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    articleSection: "نقل العفش",
    keywords: post.tags,
    wordCount: post.wordCount || 2000,
    timeRequired: "PT8M",
    inLanguage: "ar-SA"
  };
}

export function generateFAQSchema(faqs: Array<{question: string; answer: string}>): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "نقل العفش جدة",
    description: "منصة مقارنة أسعار نقل العفش في جدة - نوفر معلومات دقيقة وشاملة عن تكاليف وخدمات نقل الأثاث لمساعدتك في اتخاذ القرار الأمثل",
    url: "https://jeddah-moving.com",
    telephone: "+966-12-555-1234",
    email: "info@jeddah-moving.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الملك عبدالعزيز",
      addressLocality: "جدة",
      addressRegion: "مكة المكرمة",
      postalCode: "21441",
      addressCountry: "SA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.485811,
      longitude: 39.192505
    },
    openingHours: ["Mo-Su 08:00-22:00"],
    priceRange: "100-5000 ريال",
    serviceArea: {
      "@type": "City",
      name: "جدة"
    },
    areaServed: [
      "حي الصفا", "حي المروة", "حي الشاطئ", "حي الأندلس", "حي الربوة",
      "حي الخالدية", "حي الفيصلية", "حي البلد", "حي الكندرة", "حي النزلة الشرقية",
      "حي النزلة الغربية", "حي الأمير فواز", "حي قويزة", "حي البغدادية الشرقية",
      "حي البوادي", "حي الهنداوية", "حي الجامعة", "حي السامر", "حي السلامة",
      "حي الزهراء", "حي الحمراء", "حي الكندرة", "حي مدائن الفهد", "حي أبحر الشمالية",
      "حي أبحر الجنوبية", "حي الشرفية"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات نقل العفش",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "نقل العفش السكني",
            description: "خدمة نقل الأثاث للمنازل والشقق مع التغليف والحماية الكاملة"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "نقل المكاتب",
            description: "نقل مكاتب الشركات والمؤسسات مع ضمان أقل فترة توقف"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "التغليف والحماية",
            description: "خدمات التغليف الاحترافي باستخدام أفضل المواد"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "فك وتركيب الأثاث",
            description: "فك وتركيب الأثاث بطريقة احترافية وآمنة"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "التخزين المؤقت",
            description: "خدمات تخزين الأثاث في مستودعات آمنة ومكيفة"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 1247,
      bestRating: 5,
      worstRating: 1
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "أحمد المطيري"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: "خدمة ممتازة ومنصة مفيدة جداً لمقارنة الأسعار. ساعدتني في توفير الكثير من المال عند نقل منزلي.",
        datePublished: "2025-06-15"
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "فاطمة الغامدي"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: "معلومات دقيقة وشاملة عن جميع شركات النقل في جدة. نصحت بها كل أصدقائي.",
        datePublished: "2025-06-10"
      }
    ],
    sameAs: [
      "https://www.facebook.com/jeddah.moving.services",
      "https://twitter.com/jeddah_moving",
      "https://www.instagram.com/jeddah_moving",
      "https://www.linkedin.com/company/jeddah-moving"
    ],
    logo: "https://jeddah-moving.com/images/furniture_transportation_jeddah_specialists_saudi.jpg",
    image: [
      "https://jeddah-moving.com/images/furniture_transportation_jeddah_specialists_saudi.jpg",
      "https://jeddah-moving.com/images/jeddah_furniture_moving_company_ksa.jpg",
      "https://jeddah-moving.com/images/furniture_transport_solutions_jeddah.jpg"
    ]
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string; url: string}>): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "نقل العفش جدة",
    url: "https://jeddah-moving.com",
    description: "منصة شاملة لمقارنة أسعار نقل العفش في جدة مع دليل شامل للأحياء والشركات والخدمات",
    inLanguage: "ar-SA",
    copyrightYear: 2025,
    copyrightHolder: {
      "@type": "Organization",
      name: "نقل العفش جدة"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jeddah-moving.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    mainEntity: {
      "@type": "Thing",
      name: "خدمات نقل العفش في جدة",
      alternateName: ["نقل الأثاث جدة", "شركات النقل جدة", "تكلفة نقل العفش"],
      description: "خدمات شاملة لنقل العفش والأثاث في جميع أحياء مدينة جدة"
    }
  };
}

export function generateServiceSchema(serviceName: string, description: string): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "نقل العفش جدة",
      url: "https://jeddah-moving.com"
    },
    areaServed: {
      "@type": "City",
      name: "جدة"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات النقل المتخصصة",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
            description: description
          }
        }
      ]
    }
  };
} 
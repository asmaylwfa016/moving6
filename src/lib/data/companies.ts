export interface Company {
  id: number;
  name: string;
  description: string;
  logo?: string;
  rating: number;
  experience: number;
  priceRange: string;
  services: string[];
}

export const companies: Company[] = [
  {
    id: 1,
    name: 'الروضة السريعة لنقل العفش',
    description: 'شركة رائدة في نقل العفش بجدة مع خبرة تزيد عن 15 عاماً في خدمات النقل الآمن والسريع',
    logo: '/images/furniture_transportation_jeddah_specialists_saudi.jpg',
    rating: 4.6,
    experience: 15,
    priceRange: '800 - 1,200 ريال',
    services: ['نقل أثاث', 'فك وتركيب', 'تغليف', 'تخزين']
  },
  {
    id: 2,
    name: 'الأمان لنقل العفش',
    description: 'متخصصون في نقل العفش الفاخر مع ضمان شامل وتأمين على جميع المنقولات',
    logo: '/images/furniture_transport_solutions_jeddah.jpg',
    rating: 4.7,
    experience: 12,
    priceRange: '1,500 - 2,500 ريال',
    services: ['نقل فاخر', 'تأمين شامل', 'تغليف احترافي', 'فريق متخصص']
  },
  {
    id: 3,
    name: 'جدة المثالي',
    description: 'خدمات نقل عفش متكاملة بأسعار منافسة مع ضمان 30 يوم على جميع الخدمات',
    logo: '/images/furniture_transportation_experts_jeddah.jpg',
    rating: 4.4,
    experience: 10,
    priceRange: '1,000 - 1,800 ريال',
    services: ['نقل شامل', 'ضمان 30 يوم', 'فك وتركيب', 'نقل آمن']
  },
  {
    id: 4,
    name: 'السرعة الفائقة',
    description: 'نقل عفش سريع وآمن مع فريق مدرب وأسطول حديث من الشاحنات المجهزة',
    logo: '/images/jeddah_furniture_moving_company_ksa.jpg',
    rating: 4.5,
    experience: 8,
    priceRange: '900 - 1,500 ريال',
    services: ['نقل سريع', 'فريق مدرب', 'شاحنات حديثة', 'خدمة 24/7']
  },
  {
    id: 5,
    name: 'الخبراء لنقل الأثاث',
    description: 'متخصصون في نقل الأثاث الثمين والتحف مع خبرة في التعامل مع القطع الحساسة',
    logo: '/images/furniture_transportation_specialists_jeddah.jpg',
    rating: 4.8,
    experience: 20,
    priceRange: '2,000 - 3,500 ريال',
    services: ['نقل تحف', 'تغليف خاص', 'خبراء متخصصون', 'تأمين كامل']
  },
  {
    id: 6,
    name: 'الاقتصادي لنقل العفش',
    description: 'حلول نقل عفش اقتصادية مع الحفاظ على جودة الخدمة والأمان',
    logo: '/images/jeddah_furniture_moving_specialists.jpg',
    rating: 4.2,
    experience: 5,
    priceRange: '600 - 1,000 ريال',
    services: ['نقل اقتصادي', 'خدمة أساسية', 'فك وتركيب', 'أسعار منافسة']
  }
]; 
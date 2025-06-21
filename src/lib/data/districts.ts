export interface District {
  id: string;
  name: string;
  description: string;
  features: string[];
  priceRange: {
    apartment: { min: number; max: number };
    villa: { min: number; max: number };
  };
  image: string;
  location: 'north' | 'south' | 'east' | 'west' | 'center';
}

export const districts: District[] = [
  {
    id: 'rawdah',
    name: 'الروضة',
    description: 'من أرقى أحياء شمال جدة، يتميز بموقعه الاستراتيجي بالقرب من شارع الأمير سلطان',
    features: ['مراكز تجارية فاخرة', 'مطاعم ومقاهي راقية', 'موقع استراتيجي', 'خدمات متكاملة'],
    priceRange: {
      apartment: { min: 1800, max: 3200 },
      villa: { min: 4500, max: 8000 }
    },
    image: '/images/furniture_transportation_jeddah_specialists_saudi.jpg',
    location: 'north'
  },
  {
    id: 'shaati',
    name: 'الشاطئ',
    description: 'أحد أرقى وأجمل أحياء جدة، يطل مباشرة على البحر الأحمر ويضم أفخم الفنادق',
    features: ['إطلالة بحرية', 'فنادق فاخرة', 'أبراج سكنية شاهقة', 'مراكز تجارية'],
    priceRange: {
      apartment: { min: 2200, max: 4000 },
      villa: { min: 6000, max: 12000 }
    },
    image: '/images/reliable_furniture_transport_jeddah.jpg',
    location: 'west'
  },
  {
    id: 'abhor-north',
    name: 'أبحر الشمالية',
    description: 'منطقة راقية تضم مجمعات سكنية فاخرة وفلل بحرية مع إطلالات خلابة',
    features: ['فلل بحرية', 'مجمعات فاخرة', 'إطلالات خلابة', 'أمان عالي'],
    priceRange: {
      apartment: { min: 2200, max: 3500 },
      villa: { min: 8000, max: 13000 }
    },
    image: '/images/jeddah_furniture_moving_company_ksa.jpg',
    location: 'north'
  },
  {
    id: 'marjan',
    name: 'المرجان',
    description: 'حي حديث يتميز بالتخطيط العصري والخدمات المتطورة',
    features: ['تخطيط عصري', 'خدمات متطورة', 'مساحات خضراء', 'مواقف واسعة'],
    priceRange: {
      apartment: { min: 2000, max: 3400 },
      villa: { min: 4000, max: 6500 }
    },
    image: '/images/expert_moving_advice_jeddah.jpg',
    location: 'north'
  },
  {
    id: 'nuzhah',
    name: 'النزهة',
    description: 'حي حيوي قريب من مطار الملك عبد العزيز وطريق المدينة المنورة',
    features: ['قرب المطار', 'مواصلات ممتازة', 'خدمات متنوعة', 'موقع استراتيجي'],
    priceRange: {
      apartment: { min: 1600, max: 2800 },
      villa: { min: 3500, max: 6000 }
    },
    image: '/images/furniture_transport_solutions_jeddah.jpg',
    location: 'east'
  },
  {
    id: 'naeem',
    name: 'النعيم',
    description: 'حي النعيم من الأحياء الشعبية في جدة مع تكاليف نقل متوسطة، يحتاج لتخطيط جيد للنقل.',
    features: ['أسعار معقولة', 'خيارات متنوعة', 'خدمات أساسية', 'مواصلات جيدة'],
    priceRange: {
      apartment: { min: 1500, max: 2500 },
      villa: { min: 3000, max: 5000 }
    },
    image: '/images/furniture_transportation_jeddah_specialists_saudi.jpg',
    location: 'center'
  },
  {
    id: 'andalus',
    name: 'الأندلس',
    description: 'حي راقي يتميز بالهدوء والطابع السكني المميز',
    features: ['هدوء وراحة', 'طابع سكني', 'شوارع واسعة', 'أمان جيد'],
    priceRange: {
      apartment: { min: 1700, max: 3000 },
      villa: { min: 4000, max: 7000 }
    },
    image: '/images/jeddah_next_big_move.jpg',
    location: 'center'
  },
  {
    id: 'khalidiyah',
    name: 'الخالدية',
    description: 'حي الخالدية من الأحياء التجارية المهمة في جدة مع تحديات نقل متوسطة وتكلفة معقولة.',
    features: ['نشاط تجاري', 'خدمات متنوعة', 'مواصلات ممتازة', 'حيوية عالية'],
    priceRange: {
      apartment: { min: 1600, max: 2700 },
      villa: { min: 3800, max: 6500 }
    },
    image: '/images/jeddah_furniture_moving_company_ksa.jpg',
    location: 'center'
  },
  {
    id: 'zahra',
    name: 'الزهراء',
    description: 'حي سكني هادئ يناسب العائلات الباحثة عن الراحة',
    features: ['مناسب للعائلات', 'هدوء نسبي', 'خدمات أساسية', 'أسعار متوسطة'],
    priceRange: {
      apartment: { min: 1400, max: 2400 },
      villa: { min: 3200, max: 5500 }
    },
    image: '/images/jeddah_furniture_moving_specialists.jpg',
    location: 'center'
  },
  {
    id: 'rabwah',
    name: 'الربوة',
    description: 'حي متطور يضم مجمعات سكنية حديثة وخدمات متميزة',
    features: ['مجمعات حديثة', 'خدمات متميزة', 'تصميم عصري', 'مرافق متكاملة'],
    priceRange: {
      apartment: { min: 1900, max: 3300 },
      villa: { min: 4500, max: 7500 }
    },
    image: '/images/best_local_movers_jeddah_3.jpg',
    location: 'north'
  },
  {
    id: 'bawadi',
    name: 'البوادي',
    description: 'حي حديث يتميز بالتخطيط المتطور والمساحات الخضراء',
    features: ['تخطيط متطور', 'مساحات خضراء', 'حداثة في التصميم', 'بيئة صحية'],
    priceRange: {
      apartment: { min: 1800, max: 3100 },
      villa: { min: 4200, max: 7200 }
    },
    image: '/images/unmatched_moving_services_jeddah.jpg',
    location: 'north'
  },
  {
    id: 'salama',
    name: 'السلامة',
    description: 'حي سكني متوسط يوفر بيئة آمنة ومريحة للعائلات',
    features: ['بيئة آمنة', 'مناسب للعائلات', 'خدمات جيدة', 'أسعار معقولة'],
    priceRange: {
      apartment: { min: 1500, max: 2600 },
      villa: { min: 3400, max: 5800 }
    },
    image: '/images/moving_anxiety_jeddah.jpg',
    location: 'center'
  },
  {
    id: 'hamra',
    name: 'الحمراء',
    description: 'حي تاريخي يجمع بين الأصالة والحداثة في قلب جدة',
    features: ['طابع تاريخي', 'موقع مركزي', 'خدمات متنوعة', 'سهولة الوصول'],
    priceRange: {
      apartment: { min: 1600, max: 2800 },
      villa: { min: 3600, max: 6200 }
    },
    image: '/images/jeddah_to_riyadh_removalists.jpg',
    location: 'center'
  },
  {
    id: 'faisaliyah',
    name: 'الفيصلية',
    description: 'حي راقي يضم مجمعات سكنية فاخرة ومرافق متميزة',
    features: ['مجمعات فاخرة', 'مرافق متميزة', 'أمان عالي', 'خدمات راقية'],
    priceRange: {
      apartment: { min: 2000, max: 3500 },
      villa: { min: 4800, max: 8200 }
    },
    image: '/images/overwhelming_moving_jeddah.jpg',
    location: 'north'
  },
  {
    id: 'marwah',
    name: 'المروة',
    description: 'حي سكني هادئ يتميز بالطابع العائلي والخدمات الأساسية',
    features: ['طابع عائلي', 'هدوء وراحة', 'خدمات أساسية', 'أسعار مناسبة'],
    priceRange: {
      apartment: { min: 1400, max: 2300 },
      villa: { min: 3000, max: 5200 }
    },
    image: '/images/jeddah_storage_companies.jpg',
    location: 'center'
  },
  {
    id: 'safa',
    name: 'الصفا',
    description: 'حي متوسط يوفر خيارات سكنية متنوعة وخدمات جيدة',
    features: ['خيارات متنوعة', 'خدمات جيدة', 'مواصلات سهلة', 'أسعار متوسطة'],
    priceRange: {
      apartment: { min: 1500, max: 2500 },
      villa: { min: 3200, max: 5500 }
    },
    image: '/images/jeddah_moving_box_design.jpg',
    location: 'center'
  },
  {
    id: 'baghdadiyah-sharqiyah',
    name: 'البغدادية الشرقية',
    description: 'حي تجاري وسكني نشط يضم أسواق ومراكز تجارية متنوعة',
    features: ['نشاط تجاري', 'أسواق متنوعة', 'حيوية عالية', 'خدمات شاملة'],
    priceRange: {
      apartment: { min: 1300, max: 2200 },
      villa: { min: 2800, max: 4800 }
    },
    image: '/images/jeddah_old_furniture_removal.jpg',
    location: 'center'
  },
  {
    id: 'baghdadiyah-gharbiyah',
    name: 'البغدادية الغربية',
    description: 'امتداد للبغدادية الشرقية مع طابع سكني أكثر هدوءاً',
    features: ['طابع سكني', 'هدوء نسبي', 'خدمات متاحة', 'أسعار اقتصادية'],
    priceRange: {
      apartment: { min: 1200, max: 2100 },
      villa: { min: 2600, max: 4500 }
    },
    image: '/images/Reliable Removalists in Kogarah – Starting at $140_h!.jpg',
    location: 'center'
  },
  {
    id: 'balad',
    name: 'البلد',
    description: 'المنطقة التاريخية لجدة مع طابع تراثي مميز وأسواق شعبية',
    features: ['طابع تراثي', 'أسواق شعبية', 'موقع تاريخي', 'ثقافة أصيلة'],
    priceRange: {
      apartment: { min: 1000, max: 1800 },
      villa: { min: 2200, max: 4000 }
    },
    image: '/images/jeddah_furniture_carpenter.jpg',
    location: 'center'
  },
  {
    id: 'hindawiyah',
    name: 'الهنداوية',
    description: 'حي سكني متوسط يوفر بيئة مريحة وخدمات أساسية جيدة',
    features: ['بيئة مريحة', 'خدمات أساسية', 'أسعار معقولة', 'موقع مناسب'],
    priceRange: {
      apartment: { min: 1400, max: 2300 },
      villa: { min: 3000, max: 5000 }
    },
    image: '/images/furniture_transportation_specialists_jeddah.jpg',
    location: 'center'
  },
  {
    id: 'kandarah',
    name: 'الكندرة',
    description: 'حي سكني هادئ يناسب العائلات مع خدمات أساسية متوفرة',
    features: ['هدوء وراحة', 'مناسب للعائلات', 'خدمات متوفرة', 'أسعار مقبولة'],
    priceRange: {
      apartment: { min: 1300, max: 2200 },
      villa: { min: 2900, max: 4900 }
    },
    image: '/images/reliable_furniture_transport_jeddah.jpg',
    location: 'center'
  },
  {
    id: 'jamia',
    name: 'الجامعة',
    description: 'حي قريب من جامعة الملك عبد العزيز مع أجواء طلابية نشطة',
    features: ['قرب الجامعة', 'أجواء طلابية', 'خدمات تعليمية', 'مواصلات جيدة'],
    priceRange: {
      apartment: { min: 1400, max: 2400 },
      villa: { min: 3100, max: 5300 }
    },
    image: '/images/jeddah_furniture_movers_1.jpg',
    location: 'center'
  },
  {
    id: 'quwaizah',
    name: 'قويزة',
    description: 'حي سكني متنامي يشهد تطوراً مستمراً في الخدمات والمرافق',
    features: ['تطور مستمر', 'نمو سكاني', 'خدمات متطورة', 'استثمار جيد'],
    priceRange: {
      apartment: { min: 1500, max: 2600 },
      villa: { min: 3300, max: 5700 }
    },
    image: '/images/jeddah_packers_movers.jpg',
    location: 'center'
  },
  {
    id: 'samer',
    name: 'السامر',
    description: 'حي حديث يتميز بالتخطيط الجيد والخدمات العصرية',
    features: ['تخطيط جيد', 'خدمات عصرية', 'حداثة في البناء', 'بيئة نظيفة'],
    priceRange: {
      apartment: { min: 1600, max: 2700 },
      villa: { min: 3500, max: 6000 }
    },
    image: '/images/fast_easy_moving_jeddah.jpg',
    location: 'center'
  },
  {
    id: 'rawabi',
    name: 'الروابي',
    description: 'حي سكني متطور يضم مجمعات حديثة ومرافق متكاملة',
    features: ['مجمعات حديثة', 'مرافق متكاملة', 'تطور عمراني', 'خدمات متميزة'],
    priceRange: {
      apartment: { min: 1700, max: 2900 },
      villa: { min: 3800, max: 6500 }
    },
    image: '/images/jeddah_city_moving_tips.jpg',
    location: 'center'
  },
  {
    id: 'amir-fawaz',
    name: 'الأمير فواز',
    description: 'حي راقي يحمل اسم الأمير فواز ويتميز بالفخامة والخدمات المتميزة',
    features: ['طابع راقي', 'خدمات متميزة', 'موقع مرموق', 'بيئة فاخرة'],
    priceRange: {
      apartment: { min: 2100, max: 3600 },
      villa: { min: 5000, max: 8500 }
    },
    image: '/images/jeddah_moving_stencils.jpg',
    location: 'north'
  }
];

export function getDistrictById(id: string): District | undefined {
  return districts.find(district => district.id === id);
}

export function getDistrictsByLocation(location: string): District[] {
  return districts.filter(district => district.location === location);
}

export function searchDistricts(query: string): District[] {
  const lowercaseQuery = query.toLowerCase();
  return districts.filter(district => 
    district.name.includes(query) || 
    district.description.toLowerCase().includes(lowercaseQuery) ||
    district.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
} 
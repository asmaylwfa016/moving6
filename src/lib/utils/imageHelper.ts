// Map of image types to actual filenames in static/images
const imageMap: Record<string, string> = {
  // Company logos (using truck/transportation images)
  'jeddah_moving_company_logo_1.png': '/images/furniture_transportation_jeddah_specialists_saudi.jpg',
  'jeddah_moving_company_logo_2.png': '/images/furniture_transport_solutions_jeddah.jpg',
  'jeddah_moving_company_logo_3.png': '/images/furniture_transportation_experts_jeddah.jpg',
  
  // General moving services
  'jeddah_moving_company_1.jpg': '/images/jeddah_furniture_moving_company_ksa.jpg',
  'jeddah_movers_1.jpg': '/images/jeddah_furniture_moving_specialists.jpg',
  'jeddah_movers_2.jpg': '/images/furniture_transportation_services_jeddah_saudi.jpg',
  'jeddah_movers_3.jpg': '/images/jeddah_furniture_movers_professional.jpg',
  'jeddah_movers_4.jpg': '/images/furniture_removal_services_jeddah.jpg',
  'jeddah_movers_5.jpg': '/images/jeddah_furniture_moving_experts_saudi.jpg',
  
  // Specific services
  'professional_mover_jeddah.jpg': '/images/furniture_transportation_specialists_jeddah.jpg',
  'best_local_movers_jeddah_1.jpg': '/images/furniture_removal_jeddah_city_professionals.jpg',
  'best_local_movers_jeddah_2.jpg': '/images/jeddah_furniture_relocation_specialists.jpg',
  'best_local_movers_jeddah_3.jpg': '/images/jeddah_furniture_movers_specialists_ksa.jpg',
  'efficient_unpacking_jeddah.jpg': '/images/moving_tips_stress_free_guide.jpg', // Changed from missing file
  'long_distance_movers_jeddah.jpg': '/images/long_distance_moving_jeddah_experts.jpg',
  
  // Storage and packing
  'jeddah_storage_companies.jpg': '/images/furniture_storage_moving_jeddah.jpg',
  'jeddah_packing_services_1.jpg': '/images/furniture_storage_solutions_jeddah_ksa.jpg',
  'jeddah_packing_tips.jpg': '/images/furniture_transportation_jeddah_professional.jpg',
  
  // Moving specific items
  'jeddah_generator_moving.jpg': '/images/generator_moving_services_jeddah_ksa.jpg',
  'jeddah_furniture_carpenter.jpg': '/images/jeddah_furniture_removal_services_professional.jpg',
  'jeddah_furniture_movers_1.jpg': '/images/furniture_transportation_specialists_jeddah_saudi.jpg',
  'jeddah_furniture_wrapping_1.jpg': '/images/furniture_removal_specialists_jeddah.jpg',
  
  // Districts and locations
  'coastal_moving_services_jeddah_shaati.jpg': '/images/furniture_transportation_services_jeddah_experts.jpg',
  'fast_easy_moving_jeddah.jpg': '/images/jeddah_furniture_transportation_services.jpg',
  'jeddah_moving_box_design.jpg': '/images/furniture_voucher_services_jeddah_ksa.jpg',
  'moving_anxiety_jeddah.jpg': '/images/moving_anxiety_guide_jeddah.jpg',
  'money_saving_moving_hacks_saudi.jpg': '/images/moving_day_stress_busters_guide.jpg',
  'overwhelming_moving_jeddah.jpg': '/images/moving_solutions_guide_jeddah.jpg',
  
  // Moving tips and guides
  'moving_day_stress_hacks_jeddah.jpg': '/images/house_moving_less_stressful.jpg',
  
  // Company specific
  'best_moving_company_jeddah_1.jpg': '/images/jeddah_furniture_removal_specialists_saudi.jpg',
  'best_moving_company_jeddah_2.jpg': '/images/jeddah_moving_furniture_services_ksa.jpg',
  'expert_moving_advice_jeddah.jpg': '/images/furniture_transportation_jeddah_saudi.jpg',
  'unmatched_moving_services_jeddah.jpg': '/images/interstate_moving_planning_jeddah_ksa.jpg',
  'honest_excellent_moving_service_jeddah.jpg': '/images/jeddah_furniture_moving_solutions_saudi.jpg',
  
  // Missing images that appear in 404 errors
  'jeddah_moving_bidding_war.jpg': '/images/furniture_transportation_specialists_jeddah.jpg',
  'saudi_arabia_relocation_services_1.jpg': '/images/interstate_moving_planning_jeddah_ksa.jpg',
  'best_movers_jeddah_contact.jpg': '/images/jeddah_furniture_moving_company_ksa.jpg',
  'jeddah_house_removals_red_flags.jpg': '/images/moving_anxiety_guide_jeddah.jpg',
  'How to Choose the Best Movers for Your Move – A Step-by-Step Guide.jpg': '/images/moving_tips_stress_free_guide.jpg'
};

export function getImageSrc(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.replace(/^\/images\//, '');
  
  // Check if we have a mapping for this image
  if (imageMap[cleanPath]) {
    return imageMap[cleanPath];
  }
  
  // If the path already points to an existing file, use it as is
  if (imagePath.startsWith('/images/')) {
    return imagePath;
  }
  
  // Default fallback to first available image
  return '/images/furniture_transportation_jeddah_specialists_saudi.jpg';
}

export function getPlaceholderImage(type: 'default' | 'company' | 'service' | 'district' = 'default'): string {
  const placeholders = {
    default: '/images/furniture_transportation_jeddah_specialists_saudi.jpg',
    company: '/images/furniture_transport_solutions_jeddah.jpg',
    service: '/images/jeddah_furniture_moving_company_ksa.jpg',
    district: '/images/furniture_transportation_experts_jeddah.jpg'
  };
  
  return placeholders[type] || placeholders.default;
} 
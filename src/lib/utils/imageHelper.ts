export function getImageSrc(imagePath: string): string {
  // If image path ends with common extensions, replace with placeholder
  if (imagePath.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    // Return the placeholder SVG for now
    return '/images/placeholder.svg';
  }
  
  // If it's already an SVG, keep it
  if (imagePath.endsWith('.svg')) {
    return imagePath;
  }
  
  // Default to placeholder
  return '/images/placeholder.svg';
}

export function getPlaceholderImage(type: 'default' | 'company' | 'service' | 'district' = 'default'): string {
  const placeholders = {
    default: '/images/placeholder.svg',
    company: '/images/jeddah_moving_company_1.svg',
    service: '/images/placeholder.svg',
    district: '/images/placeholder.svg'
  };
  
  return placeholders[type] || placeholders.default;
} 
import { error } from '@sveltejs/kit';
import { posts } from '../_posts.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
  const { slug } = params;
  
  // البحث عن المقال في قاعدة البيانات
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    throw error(404, {
      message: 'المقال غير موجود'
    });
  }

  // محاولة تحميل المحتوى المخصص إذا كان متوفراً
  let customContent = null;
  
  try {
    // محاولة تحميل الصفحة المخصصة للمقال
    const customResponse = await fetch(`/blog/${slug}/custom`, {
      headers: { 'Accept': 'text/html' }
    });
    
    if (customResponse.ok) {
      customContent = await customResponse.text();
    }
  } catch (e) {
    // في حالة عدم وجود محتوى مخصص، نستخدم المحتوى الافتراضي
    console.log(`No custom content found for ${slug}, using default`);
  }

  return {
    post,
    customContent,
    slug
  };
}; 
<script lang="ts">
  import { generateFAQSchema } from '$lib/seo/schema.js';
  
  export let title: string = 'الأسئلة الشائعة';
  export let faqs: Array<{
    question: string;
    answer: string;
    id?: string;
  }>;
  
  let openIndex: number | null = null;
  
  const toggleFAQ = (index: number) => {
    openIndex = openIndex === index ? null : index;
  };
  
  // Generate schema for FAQ
  $: faqSchema = generateFAQSchema(faqs);
</script>

<svelte:head>
  <!-- FAQ Schema Markup -->
  <script type="application/ld+json">
    {@html JSON.stringify(faqSchema)}
  </script>
</svelte:head>

<section class="bg-gray-50 py-16" dir="rtl">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
        {title}
      </h2>
      
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div 
            class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            itemscope 
            itemtype="https://schema.org/Question"
          >
            <button
              class="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              on:click={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls="faq-answer-{index}"
              id="faq-question-{index}"
            >
              <h3 
                class="text-lg font-semibold text-gray-800 flex-1 text-right"
                itemprop="name"
              >
                {faq.question}
              </h3>
              <div class="mr-4 transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {#if openIndex === index}
              <div 
                class="px-6 pb-4 border-t border-gray-100"
                id="faq-answer-{index}"
                aria-labelledby="faq-question-{index}"
                itemscope 
                itemtype="https://schema.org/Answer"
                itemprop="acceptedAnswer"
              >
                <div 
                  class="text-gray-700 leading-relaxed pt-4"
                  itemprop="text"
                >
                  {@html faq.answer}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
      
      <!-- Additional Call-to-Action -->
      <div class="mt-12 text-center">
        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-green-800 mb-2">
            لم تجد إجابة سؤالك؟
          </h3>
          <p class="text-green-700 mb-4">
            تواصل معنا للحصول على استشارة مجانية حول نقل أثاثك في جدة
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
            >
              تواصل معنا
            </a>
            <a 
              href="/calculator" 
              class="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold"
            >
              احسب التكلفة
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Smooth transitions for FAQ expansion */
  .faq-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
  
  .faq-content.open {
    max-height: 1000px;
  }
  
  /* Accessibility improvements */
  button:focus {
    outline: 2px solid #059669;
    outline-offset: 2px;
  }
  
  /* Arabic text optimization */
  h3, p {
    line-height: 1.6;
  }
</style> 
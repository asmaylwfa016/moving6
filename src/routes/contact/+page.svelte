<script lang="ts">
  const pageTitle = 'تواصل معنا | استفسارات وأسئلة حول نقل العفش في جدة';
  const pageDescription =
    'لديك استفسار عن أسعار نقل الأثاث أو ترغب في شراكة معنا؟ تواصل مع فريق المنصة عبر النموذج أو وسائل الاتصال المباشرة.';

  /** demo submit */
  function send(e: Event) {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح، سنرد عليك قريباً!');
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords"
    content="تواصل نقل العفش, استفسار اسعار نقل عفش, خدمة عملاء نقل أثاث جدة" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ar_SA" />
</svelte:head>

<main dir="rtl" class="bg-gray-50 min-h-screen font-sans">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-center mb-8">تواصل معنا</h1>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- Contact form -->
      <form
        class="bg-white p-8 rounded-xl shadow-md space-y-6 order-2 lg:order-1"
        on:submit|preventDefault={send}>
        <div>
          <label class="block mb-1 font-medium">الاسم الكامل</label>
          <input
            type="text"
            required
            class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
        </div>

        <div>
          <label class="block mb-1 font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            required
            class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
        </div>

        <div>
          <label class="block mb-1 font-medium">الرسالة</label>
          <textarea
            rows="4"
            required
            class="block w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600"></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700">
          إرسال
        </button>
      </form>

      <!-- Contact info -->
      <div class="bg-white p-8 rounded-xl shadow-md order-1 lg:order-2 flex flex-col justify-between">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold mb-2">بيانات الاتصال</h2>
          <p><strong>البريد الإلكتروني:</strong> support@moving-cost.sa</p>
          <p><strong>الهاتف:</strong> ‎+966-12-555-1234</p>
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-2">ساعات العمل</h3>
          <p>الأحد – الخميس: 9 صباحاً – 6 مساءً</p>
          <p>الجمعة والسبت: مغلق</p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
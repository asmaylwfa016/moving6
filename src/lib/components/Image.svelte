<script lang="ts">
  export let src: string;
  export let alt: string;
  export let className: string = '';
  
  let imageError = false;
  
  function handleError() {
    imageError = true;
  }
  
  // Placeholder SVG as data URL
  const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='20'%3Eشركة نقل عفش جدة%3C/text%3E%3Cpath d='M160 140h80v60h-80z' fill='none' stroke='%236b7280' stroke-width='2'/%3E%3Cpath d='M160 140l40-30 40 30M180 200v-40h40v40' fill='none' stroke='%236b7280' stroke-width='2'/%3E%3Ccircle cx='170' cy='210' r='8' fill='%236b7280'/%3E%3Ccircle cx='230' cy='210' r='8' fill='%236b7280'/%3E%3C/svg%3E`;
</script>

{#if !imageError}
  <img 
    {src} 
    {alt} 
    class={className}
    on:error={handleError}
  />
{:else}
  <img 
    src={placeholder}
    alt={alt}
    class={className}
  />
{/if} 
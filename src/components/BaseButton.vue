<script setup lang="ts">
withDefaults(defineProps<{ href: string; variant?: 'primary' | 'ghost' }>(), {
  variant: 'primary',
})
</script>

<template>
  <a
    :href="href"
    class="inline-block rounded-full border-2 border-sachi-ink px-[1.6rem] py-[0.85rem] font-bold transition duration-300"
    :class="
      variant === 'primary'
        ? 'bg-sachi-ink text-sachi-blush hover:scale-[1.04] hover:border-[#666] hover:bg-[#666] hover:shadow-[0_10px_24px_rgba(74,74,74,0.22)]'
        : 'bg-transparent hover:-translate-y-[3px] hover:border-sachi-cream-deep hover:bg-sachi-cream-deep hover:shadow-[0_12px_24px_rgba(74,74,74,0.16)] active:-translate-y-px'
    "
  >
    <slot />
  </a>
</template>

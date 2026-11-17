<script setup lang="ts">
withDefaults(defineProps<{ d: string; fill: string; opacity?: number; flip?: boolean; bg?: boolean }>(), {
  opacity: 1,
  flip: false,
  bg: false,
})
</script>

<template>
  <div aria-hidden="true" class="leading-[0]" :class="[bg && 'bg-cream', flip && '-mt-px -scale-y-100']">
    <svg viewBox="0 0 1440 64" preserveAspectRatio="none" class="block h-16 w-full">
      <path :d="d" :fill="fill" :fill-opacity="opacity" />
    </svg>
  </div>
</template>
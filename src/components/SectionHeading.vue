<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
</script>

<template>
  <h2 v-reveal class="mb-4 font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.15]">
    <slot />
  </h2>
</template>

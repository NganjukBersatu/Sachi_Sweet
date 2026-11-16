<script setup lang="ts">
import type { SocialLink } from '@/types'

defineProps<{ name: SocialLink['icon'] }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    class="size-5 shrink-0"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'instagram'">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" />
    </template>
    <template v-else>
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4c.3 2.5 2 4 4.5 4.2" />
    </template>
  </svg>
</template>

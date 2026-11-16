<script setup lang="ts">
import { marqueeItems } from '@/data/site'
</script>

<template>
  <!-- Isi ditulis dua kali agar gerakannya mulus -->
  <div class="group overflow-hidden bg-sachi-ink py-[0.9rem] font-display text-[1.1rem] text-sachi-blush" aria-hidden="true">
    <div class="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
      <template v-for="copy in 2" :key="copy">
        <template v-for="item in marqueeItems" :key="`${copy}-${item}`">
          <span class="px-[1.4rem] whitespace-nowrap">{{ item }}</span>
          <span class="mx-[0.4rem] size-2 self-center rounded-full bg-sachi-rose" />
        </template>
      </template>
    </div>
  </div>
</template>

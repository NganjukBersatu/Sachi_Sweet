<script setup lang="ts">
import type { CatalogCategory } from '@/data/site'

defineProps<{ category: CatalogCategory }>()
</script>

<template>
  <RouterLink
    :to="{ name: 'catalog', hash: `#${category.slug}` }"
    class="cat-card group flex flex-col rounded-[26px] border-2 border-peach-300 bg-paper p-2.5 no-underline shadow-soft"
  >
    <div class="overflow-hidden rounded-[18px] bg-peach-200">
      <img
        :src="category.image"
        alt=""
        loading="lazy"
        class="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 class="px-2 pb-2 pt-3.5 text-center text-lg leading-tight">{{ category.title }}</h3>
  </RouterLink>
</template>

<style scoped>
.cat-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.cat-card:nth-child(4n + 1) { transform: rotate(-2deg); }
.cat-card:nth-child(4n + 2) { transform: rotate(1.5deg); }
.cat-card:nth-child(4n + 3) { transform: rotate(-1deg); }
.cat-card:nth-child(4n + 4) { transform: rotate(2deg); }

.cat-card:hover,
.cat-card:focus-visible {
  transform: rotate(0deg) translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .cat-card { transition: none; }
}
</style>

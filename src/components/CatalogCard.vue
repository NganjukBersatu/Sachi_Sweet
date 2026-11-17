<script setup lang="ts">
import type { CatalogCategory } from '@/data/site'

defineProps<{ category: CatalogCategory }>()
</script>

<template>
  <article class="flex flex-col rounded-[26px] border border-peach-300 bg-paper p-2.5 shadow-soft">
    <div class="overflow-hidden rounded-[16px] bg-peach-200">
      <img :src="category.image" :alt="`Kategori ${category.title}`" loading="lazy" class="h-[150px] w-full object-cover" />
    </div>
    <div class="flex-1 p-4">
      <h3 class="text-xl">{{ category.title }}</h3>
      <ul class="mt-3 space-y-2.5 text-[15px]">
        <li v-for="it in category.items" :key="it.name" class="flex items-baseline gap-2">
          <span>{{ it.name }}</span>
          <span class="mb-1 flex-1 border-b border-dotted border-peach-300" aria-hidden="true"></span>
          <span class="font-semibold">{{ it.price }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>
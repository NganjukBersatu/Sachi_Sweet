<script setup lang="ts">
import { computed, ref } from 'vue'
import MenuCard from '@/components/MenuCard.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { vReveal } from '@/directives/reveal'
import { menuFilters, menuItems } from '@/data/menu'
import type { MenuFilterValue } from '@/types'

const activeFilter = ref<MenuFilterValue>('semua')

const visibleItems = computed(() =>
  menuItems.filter((item) => activeFilter.value === 'semua' || item.kategori === activeFilter.value),
)
</script>

<template>
  <section id="menu" class="mx-auto max-w-[1100px] px-[5vw] py-20 max-md:overflow-x-clip">
    <SectionHeading>Menu Favorit</SectionHeading>

    <div v-reveal class="mb-6 flex flex-wrap gap-[0.6rem]">
      <button
        v-for="f in menuFilters"
        :key="f.value"
        type="button"
        class="cursor-pointer rounded-full border-2 border-sachi-rose px-[1.2rem] py-2 font-medium"
        :class="activeFilter === f.value ? 'bg-sachi-rose' : 'bg-sachi-blush'"
        :aria-pressed="activeFilter === f.value"
        @click="activeFilter = f.value"
      >
        {{ f.label }}
      </button>
    </div>

    <div
      v-reveal
      class="grid grid-cols-2 gap-3 max-md:translate-y-0! max-md:opacity-100! max-md:transition-none! md:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] md:gap-[1.2rem]"
    >
      <MenuCard v-for="item in visibleItems" :key="item.nama" :item="item" />
    </div>
  </section>
</template>

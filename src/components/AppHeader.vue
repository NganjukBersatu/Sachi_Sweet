<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logo from '@/assets/logo.jpeg'
import { navLinks, siteInfo } from '@/data/site'
import { useScrolled } from '@/composables/useScrolled'

const isOpen = ref(false)
const isScrolled = useScrolled()

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header
    class="sticky top-0 z-10 flex items-center justify-between border-b border-sachi-peach bg-sachi-blush/82 px-6 py-4 backdrop-blur-md"
    :class="isScrolled ? 'shadow-[0_4px_16px_rgba(74,74,74,0.08)]' : ''"
  >
    <a href="#beranda" class="flex items-center gap-2.5 font-display text-[1.4rem] font-bold">
      <img :src="logo" width="40" height="40" alt="" class="size-10 rounded-full object-cover" />
      <span>{{ siteInfo.nama }}</span>
    </a>

    <button
      type="button"
      class="cursor-pointer p-2 md:hidden"
      :aria-label="isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span v-for="n in 3" :key="n" class="my-[5px] block h-0.5 w-6 bg-sachi-ink" />
    </button>

    <nav
      class="absolute inset-x-0 top-full flex-col border-b border-sachi-peach bg-sachi-blush md:static md:flex-row md:gap-8 md:border-0 md:bg-transparent"
      :class="isOpen ? 'flex' : 'hidden md:flex'"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="relative px-6 py-4 font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-sachi-rose after:transition-transform after:duration-300 hover:after:scale-x-100 md:p-0 md:py-1"
        @click="isOpen = false"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

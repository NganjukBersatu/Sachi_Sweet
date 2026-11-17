<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import { images, navLinks } from '@/data/site'

const open = ref(false)
const active = ref('beranda')
let observer: IntersectionObserver | null = null

function onKey(e: KeyboardEvent): void {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && (active.value = en.target.id)),
    { rootMargin: '-45% 0px -50% 0px' },
  )
  document.querySelectorAll('header#beranda, section[id]').forEach((el) => observer?.observe(el))
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
    <nav class="wrap relative flex min-h-[76px] items-center justify-between gap-4" aria-label="Navigasi utama">
      <a href="#beranda" class="flex items-center gap-3 leading-[1.1] text-cherry-900 no-underline">
        <img :src="images.logo" alt="Logo Sachi Sweet" width="48" height="48" class="h-12 w-12 rounded-full border-2 border-peach-300 bg-white object-cover" />
        <span>
          <b class="block font-head text-xl font-extrabold">Sachi Sweet</b>
          <small class="hidden text-[13px] text-ink-soft sm:block">Café dan dessert</small>
        </span>
      </a>

      <ul
        id="navLinks"
        class="absolute inset-x-0 top-[calc(100%-4px)] m-0 list-none flex-col rounded-card bg-paper p-2.5 shadow-soft desk:static desk:flex desk:flex-row desk:gap-0.5 desk:bg-transparent desk:p-0 desk:shadow-none"
        :class="open ? 'flex' : 'hidden'"
      >
        <li v-for="l in navLinks" :key="l.id">
          <a
            :href="`#${l.id}`"
            class="inline-flex min-h-[44px] w-full items-center rounded-full px-3.5 font-head text-[15px] font-semibold text-ink no-underline hover:bg-peach-200 desk:w-auto"
            :class="active === l.id && '!bg-peach-300 !text-cherry-900'"
            :aria-current="active === l.id ? 'true' : undefined"
            @click="open = false"
          >{{ l.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <a href="#kontak" class="btn btn-ghost hidden desk:inline-flex">Hubungi kami</a>
        <button
          type="button"
          class="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-peach-500 bg-white text-cherry-900 desk:hidden"
          :aria-expanded="open"
          aria-controls="navLinks"
          :aria-label="open ? 'Tutup menu' : 'Buka menu'"
          @click="open = !open"
        >
          <component :is="open ? X : Menu" class="h-[22px] w-[22px]" />
        </button>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue'
import AppFooter from '@/components/AppFooter.vue'
import CatalogCard from '@/components/CatalogCard.vue'
import { CONFIG, catalog, images } from '@/data/site'

const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Halo Sachi Sweet, saya ingin pesan dari katalog.')}`
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-peach-300 bg-paper">
    <div class="wrap flex items-center justify-between gap-4 py-3">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
        <img :src="images.logo" alt="Logo Sachi Sweet" class="h-12 w-12 rounded-full border-2 border-peach-300 object-cover" />
        <span class="leading-tight">
          <span class="block text-lg font-semibold">Sachi Sweet</span>
          <span class="block text-sm text-ink-soft">Café dan dessert</span>
        </span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'home', hash: '#katalog' }"
        class="inline-flex items-center gap-2 rounded-full border-2 border-[#5a0d0d] px-5 py-2 font-semibold text-[#5a0d0d]"
      >
        <ArrowLeft class="h-4 w-4" aria-hidden="true" /> Kembali
      </RouterLink>
    </div>
  </header>

  <main class="pb-[72px] pt-10">
    <div class="wrap">
      <div class="mb-8 max-w-[620px]">
        <h1 class="sec-title">Katalog lengkap</h1>
        <p class="mt-3 text-[17px] text-ink-soft">Semua kategori sajian Sachi Sweet. Harga dapat berubah sewaktu-waktu.</p>
      </div>

      <nav aria-label="Lompat ke kategori" class="mb-8 flex flex-wrap gap-2">
        <a
          v-for="c in catalog"
          :key="c.slug"
          :href="`#${c.slug}`"
          class="rounded-full border border-peach-300 bg-paper px-4 py-1.5 text-sm font-semibold hover:bg-peach-200"
        >
          {{ c.title }}
        </a>
      </nav>

      <div class="grid gap-5 sm:grid-cols-2 desk:grid-cols-3">
        <CatalogCard v-for="c in catalog" :id="c.slug" :key="c.slug" :category="c" class="scroll-mt-28" />
      </div>

      <div class="mt-12 rounded-[26px] bg-peach-400 p-8 text-center shadow-soft">
        <h2 class="mb-2.5 text-[clamp(24px,3vw,30px)]">Tertarik memesan?</h2>
        <p class="mb-5">Hubungi kami lewat WhatsApp untuk pesanan kue, hampers, dan acara.</p>
        <a :href="waUrl" target="_blank" rel="noopener" class="btn btn-soft">Pesan via WhatsApp</a>
      </div>
    </div>
  </main>

  <AppFooter />
</template>
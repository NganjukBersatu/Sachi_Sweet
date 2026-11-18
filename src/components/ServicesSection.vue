<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import { catalog, homeCategories, popular } from '@/data/site'


const restCount = catalog.length - homeCategories.length
</script>

<template>
  <section id="katalog" class="catalog-bg relative pb-[110px] pt-14 max-sm:pb-[90px]">
    <!-- Tepi atas bergelombang -->
    <svg
      class="catalog-wave pointer-events-none absolute inset-x-0 bottom-[calc(100%-1px)] h-10 w-full sm:h-14"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="currentColor" d="M0,80 L0,45 C240,5 480,5 720,35 C960,65 1200,65 1440,25 L1440,80 Z" />
    </svg>

    <div class="wrap">
      <div class="mx-auto mb-10 max-w-[620px] text-center">
        <h2 class="sec-title">Katalog Sachi Sweet</h2>
        <span class="mx-auto mt-3 block h-1.5 w-14 rounded-full bg-peach-500" aria-hidden="true"></span>
        <p class="mt-4 text-[17px] text-ink-soft">Pilih kategori favoritmu, dari roti dan kue sampai hampers untuk acara.</p>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:gap-6 desk:grid-cols-4">
        <CategoryCard v-for="c in homeCategories" :key="c.slug" :category="c" />
      </div>

      <div class="mb-16 mt-10 flex flex-col items-center gap-4 text-center">
        <p class="text-ink-soft">Masih ada {{ restCount }} kategori lainnya, lengkap dengan harganya.</p>
        <RouterLink :to="{ name: 'catalog' }" class="btn btn-ghost">Lihat katalog lengkap</RouterLink>
      </div>

      <!-- Menu populer (tidak diubah) -->
      <div class="grid items-center gap-8 rounded-panel bg-peach-400 px-6 py-[30px] shadow-soft sm:p-[36px_40px] desk:grid-cols-[.8fr_2.2fr]">
        <div>
          <h3 class="mb-2.5 text-[clamp(26px,3vw,34px)]">Menu populer</h3>
          <p class="mb-5 max-w-[30ch]">Sajian favorit pelanggan, dari camilan box sampai kue manis.</p>
        </div>
        <div class="grid gap-7 text-center sm:grid-cols-3 sm:gap-6">
          <div v-for="p in popular" :key="p.title">
            <div class="mx-auto mb-3.5 aspect-square w-[min(168px,100%)] overflow-hidden rounded-full border-8 border-paper shadow-soft">
              <img :src="p.image" :alt="p.alt" loading="lazy" class="h-full w-full object-cover" />
            </div>
            <h4 class="text-lg">{{ p.title }}</h4>
            <p class="mx-auto mt-1 max-w-[22ch] text-sm">{{ p.text }}</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Tepi bawah bergelombang -->
    <svg
      class="catalog-wave-bottom pointer-events-none absolute inset-x-0 -bottom-px h-10 w-full -scale-x-100 sm:h-14"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="currentColor" d="M0,80 L0,45 C240,5 480,5 720,35 C960,65 1200,65 1440,25 L1440,80 Z" />
    </svg>
  </section>
</template>

<style scoped>
.catalog-bg {
  --catalog-bg: #FFF6E4; 
  background-color: var(--catalog-bg);
}
.catalog-wave {
  color: var(--catalog-bg);
}
.catalog-wave-bottom {
  color: var(--color-peach-200); /* samakan dengan warna latar section testimoni */
}
</style>
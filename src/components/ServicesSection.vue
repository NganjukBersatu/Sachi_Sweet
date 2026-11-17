<script setup lang="ts">
import { Heart, Plus } from '@lucide/vue'
import CatalogCard from '@/components/CatalogCard.vue'
import { catalog, homeCategories, popular, recommended } from '@/data/site'

const restCount = catalog.length - homeCategories.length
</script>

<template>
  <section id="katalog" class="pb-[72px] pt-6 max-sm:pb-14">
    <div class="wrap">
      <div class="mb-10 max-w-[620px]">
        <h2 class="sec-title">Katalog Sachi Sweet</h2>
        <p class="mt-3 text-[17px] text-ink-soft">Pilih kategori favoritmu, dari roti dan kue sampai hampers untuk acara.</p>
      </div>

      <div class="mb-14 grid gap-5 sm:grid-cols-2 desk:grid-cols-3">
        <CatalogCard v-for="c in homeCategories" :key="c.slug" :category="c" />
        <RouterLink
          :to="{ name: 'catalog' }"
          class="flex flex-col items-center justify-center rounded-[26px] bg-peach-400 p-8 text-center shadow-soft sm:col-span-2 desk:col-span-1"
        >
          <h3 class="mb-2.5 text-[clamp(24px,3vw,30px)]">Masih ada {{ restCount }} kategori lainnya</h3>
          <p class="mb-5 max-w-[28ch]">Lihat seluruh katalog Sachi Sweet beserta harganya.</p>
          <span class="btn btn-soft">Lihat katalog lengkap</span>
        </RouterLink>
      </div>

      <div class="grid items-center gap-8 rounded-panel bg-peach-400 px-6 py-[30px] shadow-soft sm:p-[36px_40px] desk:grid-cols-[.8fr_2.2fr]">
        <div>
          <h3 class="mb-2.5 text-[clamp(26px,3vw,34px)]">Menu populer</h3>
          <p class="mb-5 max-w-[30ch]">Sajian favorit pelanggan, dari camilan box sampai kue manis.</p>
          <a href="#pesan" class="btn btn-soft">Pesan sekarang</a>
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

      <div class="mb-7 mt-[60px] flex items-center gap-[18px] before:h-0.5 before:flex-1 before:rounded-sm before:bg-peach-300 after:h-0.5 after:flex-1 after:rounded-sm after:bg-peach-300">
        <h3 class="flex items-center gap-3 text-[clamp(22px,3vw,28px)]">
          <Heart class="h-[18px] w-[18px] fill-current text-cherry-600" aria-hidden="true" />Rekomendasi kami<Heart class="h-[18px] w-[18px] fill-current text-cherry-600" aria-hidden="true" />
        </h3>
      </div>
      <div class="grid gap-5 desk:grid-cols-3">
        <article v-for="r in recommended" :key="r.title" class="flex items-stretch gap-4 rounded-panel border border-peach-300 bg-paper p-3.5">
          <img :src="r.image" :alt="r.alt" loading="lazy" class="min-h-32 w-28 flex-none rounded-card object-cover" />
          <div class="flex min-w-0 flex-1 flex-col">
            <h4 class="text-lg">{{ r.title }}</h4>
            <p class="mt-1 text-sm text-ink-soft">{{ r.text }}</p>
            <a href="#pesan" :aria-label="`Pesan ${r.title.toLowerCase()}`" class="mt-auto grid h-11 w-11 self-end place-items-center rounded-soft bg-cherry-700 text-white hover:bg-[#B00000]">
              <Plus class="h-5 w-5" stroke-width="2.5" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { features, images } from '@/data/site'
</script>

<template>
  <section id="tentang" class="pb-[72px] pt-6 max-sm:pb-14">
    <div class="wrap">
      <div class="grid items-center gap-10 desk:grid-cols-[.9fr_1.1fr] desk:gap-16">
        <div class="relative w-full max-w-[420px] justify-self-center">
          <div class="relative aspect-[3/4] overflow-hidden rounded-[999px_999px_28px_28px] border-8 border-paper shadow-soft after:absolute after:inset-0 after:bg-peach-400/20">
            <img :src="images.tentangkami" alt="Cupcake stroberi di atas papan putih, di meja hijau teras kafe" loading="lazy" class="h-full w-full object-cover" />
          </div>
          <div class="absolute -right-1.5 bottom-[30px] h-[88px] w-[88px] overflow-hidden rounded-full border-[3px] border-peach-300 bg-white shadow-soft sm:-right-3.5 sm:h-[104px] sm:w-[104px]">
            <img :src="images.logo" alt="" width="104" height="104" class="h-full w-full object-cover" />
          </div>
        </div>
        <div>
          <h2 class="sec-title mb-4">Tentang Sachi Sweet</h2>
          <p class="mb-3.5 max-w-[54ch] text-[17px]">Sachi Sweet adalah kafe kecil dengan suasana seperti di rumah sendiri. Kami menyajikan dessert, roti, dan minuman yang dibuat segar, cocok untuk mampir sebentar, ngobrol bersama teman, atau merayakan hari istimewa.</p>
          <p class="mb-3.5 max-w-[54ch] text-[17px]">Dari milk bun dan croissant sampai tiramisu dan cupcake stroberi, setiap sajian kami siapkan supaya Anda ingin kembali lagi.</p>
          <a href="#layanan" class="btn btn-primary mt-2.5">Lihat layanan kami</a>
        </div>
      </div>

      <div class="mt-16 grid gap-7 grid-cols-2 md:grid-cols-4">
        <div v-for="f in features" :key="f.title">
          <div class="icon-badge mb-3.5 h-[52px] w-[52px]"><component :is="f.icon" class="h-[26px] w-[26px]" aria-hidden="true" /></div>
          <h3 class="mb-1.5 text-lg">{{ f.title }}</h3>
          <p class="text-[15px] text-ink-soft">{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
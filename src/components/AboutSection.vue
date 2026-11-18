<script setup lang="ts">
import { features, images } from '@/data/site'
</script>

<template>
  <section id="tentang" class="pb-14 pt-8 sm:pb-[72px] sm:pt-6">
    <div class="wrap">
      <div class="grid items-center gap-8 desk:grid-cols-[.9fr_1.1fr] desk:gap-16">
        <!-- Foto -->
        <div class="relative w-full max-w-[340px] justify-self-center sm:max-w-[400px] desk:max-w-[420px]">
          <div class="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_28px_28px] border-[6px] border-paper shadow-soft after:absolute after:inset-0 after:bg-peach-400/10 sm:aspect-[3/4] sm:border-8">
            <img
              :src="images.tentangkami"
              alt="Aneka kue ulang tahun dan mini cake warna pastel di meja kayu Sachi Sweet"
              loading="lazy"
              class="h-full w-full object-cover object-[50%_60%]"
            />
          </div>
          <!-- Logo: sedikit keluar bingkai agar tidak menutupi kue -->
          <div class="absolute -bottom-3 -right-2 h-[76px] w-[76px] overflow-hidden rounded-full border-[3px] border-peach-300 bg-white shadow-soft sm:-right-3.5 sm:bottom-[30px] sm:h-[104px] sm:w-[104px]">
            <img :src="images.logo" alt="" width="104" height="104" class="h-full w-full object-cover" />
          </div>
        </div>

        <!-- Teks -->
        <div class="text-center sm:text-left">
          <h2 class="sec-title mb-3 sm:mb-4">Tentang Sachi Sweet</h2>
          <p class="mx-auto mb-3 max-w-[54ch] text-base leading-relaxed sm:mx-0 sm:mb-3.5 sm:text-[17px]">
            Sachi Sweet adalah kafe kecil dengan suasana seperti di rumah sendiri. Kami menyajikan dessert, roti, dan minuman yang dibuat segar, cocok untuk mampir sebentar, ngobrol bersama teman, atau merayakan hari istimewa.
          </p>
          <p class="mx-auto mb-3 max-w-[54ch] text-base leading-relaxed sm:mx-0 sm:mb-3.5 sm:text-[17px]">
            Dari milk bun dan croissant sampai tiramisu dan cupcake stroberi, setiap sajian kami siapkan supaya Anda ingin kembali lagi.
          </p>
        </div>
      </div>

      <!-- Fitur -->
      <div class="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-7 md:grid-cols-4">
        <div
          v-for="f in features"
          :key="f.title"
          class="rounded-2xl bg-white/50 p-4 shadow-soft sm:bg-transparent sm:p-0 sm:shadow-none"
        >
          <div class="icon-badge mb-3 h-11 w-11 sm:mb-3.5 sm:h-[52px] sm:w-[52px]">
            <component :is="f.icon" class="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" aria-hidden="true" />
          </div>
          <h3 class="mb-1 text-base sm:mb-1.5 sm:text-lg">{{ f.title }}</h3>
          <p class="text-sm leading-snug text-ink-soft sm:text-[15px]">{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
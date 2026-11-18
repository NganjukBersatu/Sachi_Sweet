<script setup lang="ts">
import { ShoppingCart, Clock } from '@lucide/vue'
import { heroChips, images } from '@/data/site'
</script>

<template>
  <header
    id="beranda"
    class="relative flex min-h-[700px] flex-col justify-end overflow-hidden pb-6 pt-24 desk:block desk:min-h-[640px] desk:justify-start desk:pb-[72px] desk:pt-9"
  >
    <!-- Foto -->
    <div
      class="absolute inset-0 z-0 animate-rise overflow-hidden motion-reduce:animate-none desk:-right-[10%] desk:-top-[25%] desk:bottom-6 desk:left-auto desk:inset-y-auto desk:w-[66%] desk:rounded-[38%_0_0_62%/42%_0_0_58%] desk:shadow-soft"
    >
      <img
        :src="images.hero"
        alt="Tampak depan Sachi Sweet Café dengan lampu gantung dan tanaman di teras"
        fetchpriority="high"
        class="h-full w-full object-cover object-[50%_30%]"
      />
      <!-- Overlay krem tipis (mobile saja): foto tetap terlihat sampai bawah -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#ffebcd]/85 from-0% via-[#ffebcd]/55 via-40% to-transparent to-75% desk:hidden"
        aria-hidden="true"
      ></div>
    </div>

    <div class="wrap relative z-[1]">
      <div class="desk:max-w-[46%]">
        <!-- Pill jam buka (mobile) -->
        <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-[13px] font-semibold text-cherry-900 shadow-soft backdrop-blur-md desk:hidden">
          <Clock class="h-4 w-4" aria-hidden="true" />
          Buka setiap hari 08.00–21.00
        </div>

        <h1 class="max-w-[13ch] animate-rise text-[clamp(30px,9vw,62px)] leading-[1.08] tracking-[-.015em] text-white [text-shadow:0_2px_10px_rgba(60,20,10,.55)] motion-reduce:animate-none desk:text-cherry-900 desk:[text-shadow:none]">
  Dessert manis yang bikin jatuh cinta
</h1>

        <p class="mb-5 mt-3 max-w-[44ch] animate-rise text-[15px] font-medium leading-relaxed text-ink-soft [animation-delay:.08s] motion-reduce:animate-none desk:mb-[30px] desk:mt-5 desk:text-[19px] desk:font-normal">
          Milk bun, mini cake, roti sobek, cake bar, dan kue tart dalam suasana rumahan yang hangat. Nikmati di tempat, bawa pulang, atau pesan untuk acara Anda.
        </p>

        <div class="flex animate-rise flex-wrap items-center gap-2.5 [animation-delay:.16s] motion-reduce:animate-none desk:gap-3.5">
  <a
    href="#kontak"
    class="inline-flex w-auto max-w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cherry-700 px-6 py-3.5 text-base font-bold text-white shadow-soft hover:bg-[#B00000] desk:px-8 desk:py-4 desk:text-lg"
  >
    <ShoppingCart class="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
    Pesan sekarang
  </a>
  <a
    href="#katalog"
    class="inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 border-cherry-700 bg-white/50 px-5 py-3 text-base font-bold text-cherry-900 desk:bg-transparent"
  >
    Lihat menu
  </a>
</div>

        <!-- Chip -->
        <div class="mt-4 grid animate-rise grid-cols-3 divide-x divide-cherry-900/10 rounded-2xl bg-white/70 py-3.5 shadow-soft backdrop-blur-md [animation-delay:.24s] motion-reduce:animate-none desk:mt-[34px] desk:flex desk:flex-wrap desk:gap-[18px] desk:divide-x-0 desk:rounded-none desk:bg-transparent desk:py-0 desk:shadow-none desk:backdrop-blur-none">
          <div
            v-for="c in heroChips"
            :key="c.label"
            class="flex flex-col items-center gap-2 px-2 text-center text-xs font-medium leading-tight text-ink-soft desk:max-w-[130px] desk:flex-row desk:gap-2.5 desk:px-0 desk:text-left desk:text-sm desk:font-normal"
          >
            <span class="icon-badge h-10 w-10 shrink-0 desk:h-11 desk:w-11">
              <component :is="c.icon" class="h-5 w-5 desk:h-[22px] desk:w-[22px]" aria-hidden="true" />
            </span>
            {{ c.label }}
          </div>
        </div>
      </div>
    </div>

    <!-- Badge jam buka (desktop) -->
    <div class="absolute bottom-32 right-[6%] z-[2] hidden rounded-card bg-peach-300 px-[18px] py-3 text-center font-head text-sm font-bold leading-snug text-cherry-900 shadow-soft desk:block">
      Buka setiap hari<span class="block font-body text-[13px] font-medium">08.00 sampai 21.00</span>
    </div>
  </header>
</template>
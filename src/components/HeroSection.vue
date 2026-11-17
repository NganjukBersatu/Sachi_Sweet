<script setup lang="ts">
import { ShoppingCart } from '@lucide/vue'
import { heroChips, images } from '@/data/site'
</script>

<template>
  <header id="beranda" class="relative overflow-hidden pb-[72px] pt-9 desk:min-h-[640px]">
    <div class="wrap relative z-[1]">
      <div class="desk:max-w-[46%]">
        <h1 class="max-w-[12ch] animate-rise text-[clamp(36px,5.4vw,62px)] tracking-[-.015em] motion-reduce:animate-none">Dessert manis yang bikin jatuh cinta</h1>
        <p class="mb-[30px] mt-5 max-w-[44ch] animate-rise text-[clamp(17px,2vw,19px)] text-ink-soft [animation-delay:.08s] motion-reduce:animate-none">
          Milk bun, mini cake, roti sobek, cake bar, dan kue tart dalam suasana rumahan yang hangat. Nikmati di tempat, bawa pulang, atau pesan untuk acara Anda.
        </p>
        <div class="flex animate-rise flex-wrap items-center gap-3.5 [animation-delay:.16s] motion-reduce:animate-none">
          <a href="#kontak" class="btn btn-primary btn-lg"><ShoppingCart class="h-[18px] w-[18px]" aria-hidden="true" />Pesan sekarang!</a>
          <a href="#layanan" class="btn btn-ghost">Lihat menu</a>
        </div>
        <div class="mt-[34px] flex animate-rise flex-wrap gap-[18px] [animation-delay:.24s] motion-reduce:animate-none">
          <div v-for="c in heroChips" :key="c.label" class="flex max-w-[130px] items-center gap-2.5 text-sm leading-tight text-ink-soft">
            <span class="icon-badge h-11 w-11"><component :is="c.icon" class="h-[22px] w-[22px]" aria-hidden="true" /></span>{{ c.label }}
          </div>
        </div>
      </div>
    </div>

    <div class="relative mx-5 mt-10 aspect-[4/3] animate-rise overflow-hidden rounded-panel shadow-soft [animation-delay:.12s] motion-reduce:animate-none desk:absolute desk:-right-[10%] desk:-top-[25%] desk:bottom-6 desk:z-0 desk:m-0 desk:aspect-auto desk:w-[66%] desk:rounded-[38%_0_0_62%/42%_0_0_58%]">
  <img :src="images.hero" alt="Tampak depan Sachi Sweet Café dengan lampu gantung dan tanaman di teras" class="h-full w-full object-cover object-[50%_55%]" />
</div>

    <div class="absolute bottom-32 right-[6%] z-[2] hidden rounded-card bg-peach-300 px-[18px] py-3 text-center font-head text-sm font-bold leading-snug text-cherry-900 shadow-soft desk:block">
  Buka setiap hari<span class="block font-body text-[13px] font-medium">08.00 sampai 21.00</span>
</div>
  </header>
</template>
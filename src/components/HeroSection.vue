<script setup lang="ts">
import { ShoppingCart } from '@lucide/vue'
import { heroChips, images } from '@/data/site'
</script>

<template>
  <header id="beranda" class="relative overflow-hidden pb-[72px] pt-9">
    <div aria-hidden="true" class="absolute -right-[12%] -top-[30%] z-0 h-[150%] w-[68%] rounded-[46%_54%_40%_60%/55%_40%_60%_45%] bg-peach-300 opacity-[.55]" />
    <div class="wrap relative z-[1] grid items-center gap-10 desk:grid-cols-[1fr_1.08fr] desk:gap-12">
      <div>
        <h1 class="max-w-[12ch] animate-rise text-[clamp(36px,5.4vw,62px)] tracking-[-.015em] motion-reduce:animate-none">Dessert manis yang bikin jatuh cinta</h1>
        <p class="mb-[30px] mt-5 max-w-[44ch] animate-rise text-[clamp(17px,2vw,19px)] text-ink-soft [animation-delay:.08s] motion-reduce:animate-none">
          Milk bun, mini cake, roti sobek, cake bar, dan kue tart dalam suasana rumahan yang hangat. Nikmati di tempat, bawa pulang, atau pesan untuk acara Anda.
        </p>
        <div class="flex animate-rise flex-wrap items-center gap-3.5 [animation-delay:.16s] motion-reduce:animate-none">
          <a href="#pesan" class="btn btn-primary btn-lg"><ShoppingCart class="h-[18px] w-[18px]" aria-hidden="true" />Pesan sekarang!</a>
          <a href="#layanan" class="btn btn-ghost">Lihat menu</a>
        </div>
        <div class="mt-[34px] flex animate-rise flex-wrap gap-[18px] [animation-delay:.24s] motion-reduce:animate-none">
          <div v-for="c in heroChips" :key="c.label" class="flex max-w-[130px] items-center gap-2.5 text-sm leading-tight text-ink-soft">
            <span class="icon-badge h-11 w-11"><component :is="c.icon" class="h-[22px] w-[22px]" aria-hidden="true" /></span>{{ c.label }}
          </div>
        </div>
      </div>

      <div class="relative w-full max-w-[560px] animate-rise justify-self-center [animation-delay:.12s] motion-reduce:animate-none desk:justify-self-end">
        <div class="relative aspect-square overflow-hidden rounded-[58%_42%_46%_54%/46%_54%_46%_54%] bg-peach-300 shadow-soft after:absolute after:inset-0 after:bg-peach-400/40">
          <img :src="images.hero" alt="Tampak depan Sachi Sweet Café dengan kursi hijau dan papan menu" width="554" height="554" class="h-full w-full object-cover" />
        </div>
        <div class="absolute bottom-[8%] right-[2%] rounded-card bg-mint px-[18px] py-3 text-center font-head text-sm font-bold leading-snug text-cherry-900 shadow-soft">
          Buka setiap hari<span class="block font-body text-[13px] font-medium">08.00 sampai 21.00</span>
        </div>
      </div>
    </div>
  </header>
</template>
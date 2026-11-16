<script setup lang="ts">
import { CakeSlice, MapPin, Star } from '@lucide/vue'
import mockup from '@/assets/mockup.jpeg'
import BaseButton from '@/components/BaseButton.vue'
import { heroContent, siteInfo } from '@/data/site'

const flowers = [
  { id: 1, class: 'top-[14%] left-[47%] w-[54px] opacity-45' },
  { id: 2, class: 'bottom-[10%] left-[5%] w-9 opacity-45 [animation-direction:reverse]' },
  { id: 3, class: 'top-[62%] left-[44%] w-7 opacity-35' },
]
</script>

<template>
  <section
    id="beranda"
    class="relative grid items-center gap-8 overflow-hidden bg-[linear-gradient(160deg,var(--color-sachi-pink)_0%,var(--color-sachi-pink-soft)_55%,var(--color-sachi-cream)_100%)] px-6 pt-12 pb-20 md:min-h-[80vh] md:grid-cols-[1.1fr_0.9fr] md:py-20"
  >
    <!-- gumpalan warna latar -->
    <div class="pointer-events-none absolute -top-25 left-[32%] size-95 animate-drift rounded-full bg-sachi-cream-deep opacity-80 blur-[60px]" />
    <div class="pointer-events-none absolute -bottom-30 -left-20 size-80 animate-drift rounded-full bg-sachi-rose opacity-35 blur-[60px] [animation-delay:-6s]" />

    <!-- dekorasi bunga & titik -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        v-for="f in flowers"
        :key="f.id"
        viewBox="0 0 48 48"
        class="absolute animate-spin-slow fill-sachi-rose"
        :class="f.class"
      >
        <circle cx="24" cy="10" r="8" /><circle cx="37" cy="20" r="8" /><circle cx="32" cy="36" r="8" /><circle cx="16" cy="36" r="8" /><circle cx="11" cy="20" r="8" />
        <circle class="fill-sachi-cream" cx="24" cy="24" r="6" />
      </svg>
      <span class="absolute top-[26%] left-[40%] size-2.5 rounded-full bg-white opacity-70" />
      <span class="absolute bottom-[18%] left-[52%] size-3.5 rounded-full bg-white opacity-70" />
    </div>

    <!-- teks -->
    <div class="relative z-10 flex flex-col items-start gap-5">
      <span class="inline-block animate-fade-up rounded-full bg-white/60 px-4 py-1.5 text-[0.8rem] font-bold tracking-[0.12em] uppercase">
        {{ heroContent.eyebrow }}
      </span>
      <h1 class="animate-fade-up font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.15] [animation-delay:120ms]">
        {{ heroContent.judul }}
        <em class="relative whitespace-nowrap not-italic after:absolute after:inset-x-0 after:bottom-[0.02em] after:-z-10 after:h-[0.3em] after:origin-left after:scale-x-0 after:animate-underline after:rounded-full after:bg-sachi-cream-deep">{{ heroContent.judulSorot }}</em>
      </h1>
      <p class="max-w-[40ch] animate-fade-up text-[1.15rem] [animation-delay:240ms]">
        {{ heroContent.deskripsi }}
      </p>
      <div class="mt-3 flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms]">
        <BaseButton href="#menu">{{ heroContent.ctaMenu }}</BaseButton>
        <BaseButton href="#kontak" variant="ghost">{{ heroContent.ctaKunjungi }}</BaseButton>
      </div>
      <div class="mt-1 inline-flex animate-fade-up items-center gap-[0.7rem] text-[0.92rem] [animation-delay:480ms]">
        <span class="inline-flex gap-0.5 rounded-full bg-white/70 px-[0.7rem] py-[0.4rem]" role="img" aria-label="Rating 4,8 dari 5">
          <Star v-for="n in 5" :key="n" class="size-4 fill-[#e9a93c] stroke-none" aria-hidden="true" />
        </span>
        <span><strong>{{ heroContent.ratingNilai }}</strong> {{ heroContent.ratingLabel }}</span>
      </div>
    </div>

    <!-- foto -->
    <div class="relative z-10 aspect-square w-full max-w-[340px] animate-photo-in justify-self-center md:max-w-[520px]">
      <div class="absolute top-[10%] right-[-6%] bottom-[-6%] left-[10%] rounded-full bg-sachi-cream-deep opacity-80 blur-[36px]" aria-hidden="true" />
      <div class="absolute -top-[10%] -right-[14%] aspect-square w-[64%] animate-float-slow rounded-full border-2 border-white/75 bg-white/18" aria-hidden="true" />
      <div class="absolute -bottom-[7%] -left-[11%] aspect-square w-[36%] animate-float-slow rounded-full border-2 border-white/75 bg-white/18 [animation-delay:-4s]" aria-hidden="true" />

      <figure class="group absolute inset-0 animate-float overflow-hidden rounded-[40px] shadow-[0_24px_60px_rgba(226,180,189,0.5)]">
        <img :src="mockup" alt="Tampak depan cafe Sachi Sweet" class="block size-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.06]" />
      </figure>

      <div class="absolute bottom-[14%] left-0 z-[2] flex animate-float-fast items-center gap-[0.7rem] rounded-[18px] bg-white/78 px-[1.1rem] py-[0.7rem] text-[0.8rem] leading-[1.3] shadow-[0_12px_32px_rgba(74,74,74,0.14)] backdrop-blur-[10px] md:-left-[9%]">
        <span class="grid size-[38px] shrink-0 place-items-center rounded-full bg-sachi-cream-deep">
          <CakeSlice class="size-5 stroke-sachi-ink" :stroke-width="1.8" aria-hidden="true" />
        </span>
        <span><strong class="block font-display text-[0.95rem]">{{ heroContent.badgeJudul }}</strong>{{ heroContent.badgeKeterangan }}</span>
      </div>

      <a
        :href="siteInfo.mapsUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute top-[8%] right-0 z-[2] flex animate-float-fast items-center gap-[0.7rem] rounded-[18px] bg-white/78 px-[1.1rem] py-[0.7rem] text-[0.8rem] leading-[1.3] shadow-[0_12px_32px_rgba(74,74,74,0.14)] backdrop-blur-[10px] [animation-delay:-2.5s] hover:bg-white/95 hover:shadow-[0_16px_36px_rgba(74,74,74,0.2)] md:-right-[4%]"
      >
        <span class="grid size-[38px] shrink-0 place-items-center rounded-full bg-sachi-cream-deep">
          <MapPin class="size-5 stroke-sachi-ink" :stroke-width="1.8" aria-hidden="true" />
        </span>
        <span><strong class="block font-display text-[0.95rem]">{{ heroContent.badgeLokasiJudul }}</strong>{{ siteInfo.lokasiSingkat }}</span>
      </a>
    </div>
  </section>
</template>

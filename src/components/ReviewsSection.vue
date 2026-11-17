<script setup lang="ts">
import { reviews } from '@/data/site'
</script>

<template>
  <section id="portofolio" class="bg-peach-200 pb-14 pt-10">
    <div class="wrap">
      <div class="mx-auto mb-10 max-w-[620px] text-center">
        <h2 class="sec-title">Kata pelanggan tentang Sachi Sweet</h2>
        <p class="mt-3 text-[17px] text-ink-soft">Ulasan asli dari pelanggan kami di Google Maps.</p>
      </div>
      <div class="columns-1 gap-[22px] sm:columns-2 desk:columns-3">
        <figure v-for="(r, i) in reviews" :key="i" class="m-0 mb-[22px] break-inside-avoid rounded-card bg-paper p-2.5 shadow-soft">
          <img :src="r.image" :alt="r.alt" loading="lazy" class="h-auto w-full rounded-soft" />
        </figure>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import { vReveal } from '@/directives/reveal'
import { aboutContent, highlights } from '@/data/site'
</script>

<template>
  <section id="tentang" class="mx-auto max-w-[1100px] px-[5vw] py-20">
    <SectionHeading>{{ aboutContent.judul }}</SectionHeading>
    <p class="max-w-[62ch]">{{ aboutContent.paragraf }}</p>
    <ul class="mt-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
      <li
        v-for="(item, i) in highlights"
        :key="item.judul"
        v-reveal="i * 100"
        class="rounded-[20px] bg-sachi-cream p-[1.4rem]"
      >
        <strong class="mb-[0.2rem] block font-display text-[1.15rem]">{{ item.judul }}</strong>
        {{ item.deskripsi }}
      </li>
    </ul>
  </section>
</template>

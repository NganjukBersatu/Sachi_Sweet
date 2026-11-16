<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import type { MenuItem } from '@/types'

defineProps<{ item: MenuItem }>()

const card = useTemplateRef<HTMLElement>('card')
const isVisible = ref(false)

// Di HP: kartu muncul bergantian, kolom kiri dari kiri, kolom kanan dari kanan
onMounted(() => {
  if (!card.value || !('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  observer.observe(card.value)
})
</script>

<template>
  <article
    ref="card"
    class="overflow-hidden rounded-2xl bg-sachi-peach transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(74,74,74,0.12)] md:rounded-[20px]"
    :class="isVisible ? 'max-md:odd:animate-slide-left max-md:even:animate-slide-right' : 'max-md:opacity-0'"
  >
    <div class="aspect-[4/3] bg-sachi-cream-deep">
      <img v-if="item.gambar" :src="item.gambar" :alt="item.nama" loading="lazy" class="block size-full object-cover" />
    </div>
    <div class="px-[0.8rem] pt-[0.7rem] pb-[0.9rem] md:px-[1.2rem] md:pt-4 md:pb-[1.3rem]">
      <h3 class="mb-[0.15rem] font-display text-[0.95rem] leading-[1.15] md:mb-[0.3rem] md:text-[1.15rem]">{{ item.nama }}</h3>
      <p class="text-[0.8rem] leading-[1.4] md:text-[0.95rem] md:leading-[1.6]">{{ item.deskripsi }}</p>
      <span class="mt-[0.4rem] block text-[0.85rem] font-bold md:mt-[0.6rem] md:text-base">{{ item.harga }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from '@lucide/vue'
import AppFooter from '@/components/AppFooter.vue'
import { CONFIG, catalog, images } from '@/data/site'

const route = useRoute()
const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Halo Sachi Sweet, saya ingin pesan dari katalog.')}`

// Kategori aktif. Kalau dibuka dari kartu di beranda (/katalog#slug), kategori itu langsung terpilih.
const activeSlug = ref(catalog[0]?.slug ?? '')
watch(
  () => route.hash,
  (hash) => {
    const slug = hash.replace('#', '')
    if (catalog.some((c) => c.slug === slug)) activeSlug.value = slug
  },
  { immediate: true },
)
const active = computed(() => catalog.find((c) => c.slug === activeSlug.value) ?? catalog[0])
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-peach-300 bg-paper">
    <div class="wrap flex items-center justify-between gap-4 py-3">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
        <img :src="images.logo" alt="Logo Sachi Sweet" class="h-12 w-12 rounded-full border-2 border-peach-300 object-cover" />
        <span class="leading-tight">
          <span class="block text-lg font-semibold">Sachi Sweet</span>
          <span class="block text-sm text-ink-soft">Café dan dessert</span>
        </span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'home', hash: '#katalog' }"
        class="inline-flex items-center gap-2 rounded-full border-2 border-[#5a0d0d] px-5 py-2 font-semibold text-[#5a0d0d]"
      >
        <ArrowLeft class="h-4 w-4" aria-hidden="true" /> Kembali
      </RouterLink>
    </div>
  </header>

  <main class="pb-[72px] pt-10">
    <div class="wrap">
      
      <!-- Pilihan kategori -->
      <div role="group" aria-label="Pilih kategori" class="mb-10 flex flex-wrap justify-center gap-2.5">
        <button
          v-for="c in catalog"
          :key="c.slug"
          type="button"
          :aria-pressed="c.slug === active?.slug"
          class="min-h-[44px] cursor-pointer rounded-full border-2 px-4 py-2 font-head text-[15px] font-semibold text-cherry-900 transition-colors motion-reduce:transition-none"
          :class="c.slug === active?.slug ? 'border-cherry-900 bg-peach-300' : 'border-peach-300 bg-paper hover:bg-peach-200'"
          @click="activeSlug = c.slug"
        >
          {{ c.title }}
        </button>
      </div>

      <!-- Isi kategori -->
      <Transition name="swap" mode="out-in">
        <div
          v-if="active"
          :key="active.slug"
          class="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-10"
        >
          <div class="mx-auto w-full max-w-[420px] -rotate-2 rounded-[26px] border-2 border-peach-300 bg-paper p-2.5 shadow-soft md:max-w-none">
            <div class="overflow-hidden rounded-[18px] bg-peach-200">
              <img
                :src="active.image"
                :alt="`Foto kategori ${active.title}`"
                class="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <section
            :aria-label="`Daftar harga ${active.title}`"
            class="rounded-[26px] border-2 border-peach-300 bg-paper p-6 shadow-soft sm:p-8"
          >
            <h2 class="text-[clamp(28px,4vw,40px)]">{{ active.title }}</h2>
            <ul class="mt-4 m-0 list-none divide-y-2 divide-dotted divide-peach-300 p-0">
              <li
                v-for="it in active.items"
                :key="it.name"
                class="flex items-baseline justify-between gap-4 py-3.5 text-[16px]"
              >
                <span>{{ it.name }}</span>
                <span class="flex-none font-semibold">{{ it.price }}</span>
              </li>
            </ul>
          </section>
        </div>
      </Transition>

      <div class="mt-12 rounded-[26px] bg-peach-400 p-8 text-center shadow-soft">
        <h2 class="mb-2.5 text-[clamp(24px,3vw,30px)]">Tertarik memesan?</h2>
        <p class="mb-5">Hubungi kami lewat WhatsApp untuk pesanan kue, hampers, dan acara.</p>
        <a :href="waUrl" target="_blank" rel="noopener" class="btn btn-soft">Pesan via WhatsApp</a>
      </div>
    </div>
  </main>

  <AppFooter />
</template>

<style scoped>
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.swap-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .swap-enter-active,
  .swap-leave-active {
    transition: none;
  }
}
</style>
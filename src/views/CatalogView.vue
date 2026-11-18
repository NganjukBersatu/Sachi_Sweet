<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
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

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Chip aktif selalu digeser ke tengah baris (berguna di mobile)
const chipEls = new Map<string, HTMLElement>()
function setChip(slug: string, el: unknown) {
  if (el instanceof HTMLElement) chipEls.set(slug, el)
  else chipEls.delete(slug)
}
function centerActiveChip() {
  chipEls.get(activeSlug.value)?.scrollIntoView({
    inline: 'center',
    block: 'nearest',
    behavior: reduceMotion() ? 'auto' : 'smooth',
  })
}
watch(activeSlug, () => nextTick(centerActiveChip))
onMounted(centerActiveChip)

// Menu dibatasi setinggi kartu gambar; tombol "Lihat selengkapnya" membuka semuanya
const expanded = ref(false)
const canExpand = ref(false)
const imageHeight = ref(0)
const imgCardEl = ref<HTMLElement | null>(null)
const listEl = ref<HTMLElement | null>(null)
let ro: ResizeObserver | null = null

function measure() {
  nextTick(() => {
    if (imgCardEl.value) imageHeight.value = imgCardEl.value.offsetHeight
    nextTick(() => {
      const l = listEl.value
      if (l && !expanded.value) canExpand.value = l.scrollHeight > l.clientHeight + 1
    })
  })
}

function setImgCard(el: unknown) {
  if (imgCardEl.value) ro?.unobserve(imgCardEl.value)
  imgCardEl.value = el instanceof HTMLElement ? el : null
  if (imgCardEl.value) {
    ro?.observe(imgCardEl.value)
    measure()
  }
}

onMounted(() => {
  ro = new ResizeObserver(measure)
  if (imgCardEl.value) ro.observe(imgCardEl.value)
})
onBeforeUnmount(() => ro?.disconnect())

// Ganti kategori: tutup lagi dan ukur ulang
watch(activeSlug, () => {
  expanded.value = false
  measure()
})

// Di mobile: kalau halaman sedang tergulir ke bawah, klik chip membawa pengguna ke awal kategori baru
const contentEl = ref<HTMLElement | null>(null)
const STICKY_OFFSET = 128 // tinggi header + baris chip

function selectCategory(slug: string) {
  activeSlug.value = slug
  if (window.matchMedia('(min-width: 768px)').matches) return
  const el = contentEl.value
  if (el && el.getBoundingClientRect().top < STICKY_OFFSET) {
    el.scrollIntoView({ block: 'start', behavior: reduceMotion() ? 'auto' : 'smooth' })
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-peach-300 bg-paper">
    <div class="wrap flex h-14 items-center justify-between gap-4 md:h-auto md:py-3">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
        <img
          :src="images.logo"
          alt="Logo Sachi Sweet"
          class="h-10 w-10 rounded-full border-2 border-peach-300 object-cover md:h-12 md:w-12"
        />
        <span class="leading-tight">
          <span class="block text-base font-semibold md:text-lg">Sachi Sweet</span>
          <span class="hidden text-sm text-ink-soft sm:block">Café dan dessert</span>
        </span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'home', hash: '#katalog' }"
        class="inline-flex min-h-[44px] items-center font-semibold text-[#5a0d0d] no-underline hover:underline"
      >
        Kembali
      </RouterLink>
    </div>
  </header>

  <main class="pb-[72px] md:pt-10">
    <h1 class="sr-only">Katalog lengkap</h1>

    <!-- Pilihan kategori: di mobile satu baris yang bisa digeser dan menempel di bawah header -->
    <div class="sticky top-[57px] z-40 border-b border-peach-300/60 bg-cream md:static md:mb-10 md:border-0 md:bg-transparent">
      <div
        role="group"
        aria-label="Pilih kategori"
        class="no-scrollbar flex gap-2 overflow-x-auto px-5 py-2.5 md:mx-auto md:w-[min(1160px,calc(100%-40px))] md:flex-wrap md:justify-center md:gap-2.5 md:overflow-visible md:p-0"
      >
        <button
          v-for="c in catalog"
          :key="c.slug"
          :ref="(el) => setChip(c.slug, el)"
          type="button"
          :aria-pressed="c.slug === active?.slug"
          class="min-h-10 flex-none cursor-pointer whitespace-nowrap rounded-full border-2 px-4 py-1.5 font-head text-[15px] font-semibold text-cherry-900 transition-colors motion-reduce:transition-none md:min-h-[44px] md:py-2"
          :class="c.slug === active?.slug ? 'border-cherry-900 bg-peach-300' : 'border-peach-300 bg-paper hover:bg-peach-200'"
          @click="selectCategory(c.slug)"
        >
          {{ c.title }}
        </button>
      </div>
    </div>

    <div class="wrap pt-6 md:pt-0">
      <!-- Isi kategori -->
      <div ref="contentEl" class="scroll-mt-[128px] md:scroll-mt-0">
        <Transition name="swap" mode="out-in">
          <div
            v-if="active"
            :key="active.slug"
            class="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-10"
          >
            <div
              :ref="setImgCard"
              class="mx-auto w-full max-w-[480px] -rotate-[1.5deg] rounded-[26px] border-2 border-peach-300 bg-paper p-2.5 shadow-soft md:max-w-none md:-rotate-2"
            >
              <div class="overflow-hidden rounded-[18px] bg-peach-200">
                <img
                  :src="active.image"
                  :alt="`Foto kategori ${active.title}`"
                  class="aspect-[4/3] w-full object-cover md:aspect-[4/5]"
                  @load="measure"
                />
              </div>
            </div>

            <section
              :aria-label="`Daftar harga ${active.title}`"
              class="flex flex-col rounded-[26px] border-2 border-peach-300 bg-paper p-5 shadow-soft sm:p-8"
              :style="!expanded && imageHeight ? { maxHeight: imageHeight + 'px' } : undefined"
            >
              <h2 class="flex-none text-[clamp(26px,4vw,40px)]">{{ active.title }}</h2>

              <div ref="listEl" class="relative min-h-0 flex-1" :class="{ 'overflow-hidden': !expanded }">
                <ul class="mt-3 divide-y-2 divide-dotted divide-peach-300 md:mt-4">
                  <li
                    v-for="it in active.items"
                    :key="it.name"
                    class="flex items-baseline justify-between gap-4 py-3.5 text-[16px]"
                  >
                    <span>{{ it.name }}</span>
                    <span class="flex-none font-semibold">{{ it.price }}</span>
                  </li>
                </ul>
                <!-- Pudar di bagian bawah saat menu terpotong -->
                <div
                  v-if="!expanded && canExpand"
                  class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent"
                  aria-hidden="true"
                ></div>
              </div>

              <div v-if="canExpand" class="mt-4 flex-none text-center">
                <button
                  type="button"
                  :aria-expanded="expanded"
                  class="min-h-[44px] cursor-pointer rounded-full border-2 border-cherry-900 bg-peach-300 px-6 py-2 font-head text-[15px] font-semibold text-cherry-900 transition-colors hover:bg-peach-200 motion-reduce:transition-none"
                  @click="expanded = !expanded"
                >
                  {{ expanded ? 'Lihat lebih sedikit' : 'Lihat selengkapnya' }}
                </button>
              </div>
            </section>
          </div>
        </Transition>
      </div>

      <div class="mt-10 rounded-[26px] bg-peach-400 p-6 text-center shadow-soft md:mt-12 md:p-8">
        <h2 class="mb-2.5 text-[clamp(22px,3vw,30px)]">Tertarik memesan?</h2>
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

/* Sembunyikan scrollbar pada baris chip */
.no-scrollbar {
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
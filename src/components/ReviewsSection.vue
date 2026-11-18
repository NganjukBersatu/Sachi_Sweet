<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { reviews } from '@/data/site'

const root = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)
const active = ref(0)
const cols = ref(3)
const ratios = ref<number[]>([])
let lastWidth = 0
let observer: ResizeObserver | null = null

function updateCols() {
  const w = window.innerWidth
  cols.value = w >= 1024 ? 3 : w >= 640 ? 2 : 1
}

function loadRatios() {
  return Promise.all(
    reviews.map(
      (r) =>
        new Promise<number>((resolve) => {
          const img = new Image()
          img.onload = () => resolve(img.naturalHeight / img.naturalWidth)
          img.onerror = () => resolve(1)
          img.src = r.image
        }),
    ),
  )
}

const columns = computed(() => {
  const out: number[][] = Array.from({ length: cols.value }, () => [])
  const heights: number[] = Array(cols.value).fill(0)
  reviews.forEach((_, i) => {
    const k = heights.indexOf(Math.min(...heights))
    out[k]?.push(i)
    heights[k] = (heights[k] ?? 0) + (ratios.value[i] ?? 1)
  })
  return out
})

function equalize() {
  if (!root.value) return
  const colEls = Array.from(root.value.querySelectorAll<HTMLElement>('[data-col]'))
  const frames = colEls.map((c) => c.lastElementChild?.firstElementChild as HTMLElement | undefined)
  frames.forEach((f) => f && (f.style.maxHeight = ''))
  if (cols.value === 1) return
  const heights = colEls.map((c) => c.offsetHeight)
  const min = Math.min(...heights)
  frames.forEach((f, i) => {
    if (!f) return
    const extra = (heights[i] ?? min) - min
    f.style.maxHeight = `${f.offsetHeight - extra}px`
  })
}

/* Carousel mobile: hitung kartu yang sedang terlihat */
function onScroll() {
  const el = track.value
  const first = el?.firstElementChild as HTMLElement | undefined
  if (!el || !first) return
  const step = first.offsetWidth + 14
  active.value = Math.min(reviews.length - 1, Math.max(0, Math.round(el.scrollLeft / step)))
}

onMounted(async () => {
  updateCols()
  ratios.value = await loadRatios()
  await nextTick()
  equalize()
  window.addEventListener('resize', updateCols)
  observer = new ResizeObserver(() => {
    const w = root.value?.offsetWidth ?? 0
    if (w !== lastWidth) {
      lastWidth = w
      equalize()
    }
  })
  if (root.value) observer.observe(root.value)
})

watch(cols, async () => {
  await nextTick()
  equalize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCols)
  observer?.disconnect()
})
</script>

<template>
  <section id="ulasan" class="bg-peach-200 pb-14 pt-10">
    <div class="wrap">
      <div class="mx-auto mb-7 max-w-[620px] text-center sm:mb-10">
        <h2 class="sec-title">Kata pelanggan tentang Sachi Sweet</h2>
        <p class="mt-3 text-base text-ink-soft sm:text-[17px]">Ulasan asli dari pelanggan kami di Google Maps.</p>
      </div>

      <template v-if="ratios.length">
        <!-- MOBILE: carousel geser -->
        <div class="sm:hidden">
          <div
            ref="track"
            class="-mx-5 flex snap-x snap-mandatory items-start gap-3.5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            @scroll.passive="onScroll"
          >
            <figure
              v-for="(r, i) in reviews"
              :key="i"
              class="m-0 w-[84%] shrink-0 snap-center rounded-[22px] bg-paper p-2 shadow-soft"
            >
              <div class="overflow-hidden rounded-[14px]">
                <img
                  :src="r.image"
                  :alt="r.alt"
                  loading="lazy"
                  class="-ml-[4%] -mt-[4%] -mb-[4%] block h-auto w-[108%] max-w-none"
                  :style="{ aspectRatio: `1 / ${ratios[i]}` }"
                />
              </div>
            </figure>
          </div>
          <p class="mt-1 text-center text-sm font-medium text-ink-soft" aria-live="polite">
            {{ active + 1 }} / {{ reviews.length }} · geser untuk melihat ulasan lain
          </p>
        </div>

        <!-- TABLET & DESKTOP: masonry (tidak berubah) -->
        <div ref="root" class="hidden items-start gap-[22px] sm:flex">
          <div v-for="(col, c) in columns" :key="c" data-col class="flex min-w-0 flex-1 flex-col gap-[22px]">
            <figure v-for="i in col" :key="i" class="m-0 rounded-[26px] bg-paper p-2.5 shadow-soft">
              <div class="overflow-hidden rounded-[16px]">
                <img
                  :src="reviews[i]?.image"
                  :alt="reviews[i]?.alt"
                  loading="lazy"
                  class="-ml-[4%] -mt-[4%] -mb-[4%] block h-auto w-[108%] max-w-none"
                  :style="{ aspectRatio: `1 / ${ratios[i]}` }"
                />
              </div>
            </figure>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
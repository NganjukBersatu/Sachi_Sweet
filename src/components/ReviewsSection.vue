<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { reviews } from '@/data/site'

const root = ref<HTMLElement | null>(null)
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
  <section id="portofolio" class="bg-peach-200 pb-14 pt-10">
    <div class="wrap">
      <div class="mx-auto mb-10 max-w-[620px] text-center">
        <h2 class="sec-title">Kata pelanggan tentang Sachi Sweet</h2>
        <p class="mt-3 text-[17px] text-ink-soft">Ulasan asli dari pelanggan kami di Google Maps.</p>
      </div>

      <div v-if="ratios.length" ref="root" class="flex items-start gap-[22px]">
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
    </div>
  </section>
</template>
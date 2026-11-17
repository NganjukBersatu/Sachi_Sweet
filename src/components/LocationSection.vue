<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Clock, MapPin, MessageCircle, Navigation, Phone } from '@lucide/vue'
import { CONFIG, LOCATION, hours, locationFacts } from '@/data/site'

const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const WIB_DAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}`
const embedUrl = `https://maps.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&z=17&output=embed`
const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Halo Sachi Sweet, saya ingin bertanya.')}`

/* Kalau semua hari sama, tampilkan satu baris saja */
const first = hours[0]
const allSame = !!first && hours.every((h) => !!h && h.open === first.open && h.close === first.close)

const rows = allSame
  ? [{ d: -1, name: 'Setiap hari', time: `${first!.open} – ${first!.close}` }]
  : [1, 2, 3, 4, 5, 6, 0].map((d) => ({
      d,
      name: DAYS[d],
      time: hours[d] ? `${hours[d]!.open} – ${hours[d]!.close}` : 'Tutup',
    }))

const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  timer = setInterval(() => (now.value = new Date()), 60_000)
})
onBeforeUnmount(() => clearInterval(timer))

const wib = computed(() => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now.value)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0'
  return { day: WIB_DAY[get('weekday')] ?? 0, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
})

const toMin = (t: string) => {
  const [h, m] = t.split('.').map(Number)
  return (h ?? 0) * 60 + (m ?? 0)
}

const status = computed(() => {
  const { day, minutes } = wib.value
  const today = hours[day]
  if (today && minutes >= toMin(today.open) && minutes < toMin(today.close)) {
    return { open: true, text: `Buka sekarang · tutup pukul ${today.close}` }
  }
  if (today && minutes < toMin(today.open)) {
    return { open: false, text: `Tutup · buka pukul ${today.open}` }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    const h = hours[d]
    if (h) return { open: false, text: `Tutup · buka ${i === 1 ? 'besok' : DAYS[d]} pukul ${h.open}` }
  }
  return { open: false, text: 'Tutup' }
})
</script>

<template>
  <section id="lokasi" class="pb-14 pt-10">
    <div class="wrap">
      <div class="mx-auto mb-10 max-w-[620px] text-center">
        <h2 class="sec-title">Kunjungi Sachi Sweet</h2>
        <p class="mt-3 text-[17px] text-ink-soft">Mampir untuk dessert, roti, dan minuman favoritmu.</p>
      </div>

      <div class="grid items-stretch gap-[22px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <!-- Kartu info: foto di atas, detail di bawah -->
        <div class="flex flex-col rounded-[26px] border border-[#FFD2B5] bg-paper p-2.5 shadow-soft">
          <div class="overflow-hidden rounded-[16px]">
            <img :src="LOCATION.photo" :alt="LOCATION.photoAlt" loading="lazy" class="h-[190px] w-full object-cover" />
          </div>

          <div class="flex-1 p-4">
            <div class="flex gap-3">
              <MapPin class="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <div>
                <h3 class="font-semibold">Alamat</h3>
                <p class="mt-1 text-[15px] text-ink-soft">{{ CONFIG.address }}</p>
              </div>
            </div>

            <div class="mt-5 flex gap-3">
              <Clock class="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <div class="min-w-0 flex-1">
                <h3 class="font-semibold">Jam buka</h3>
                <span
                  class="mt-2 inline-block rounded-full px-3 py-1 text-sm font-semibold"
                  :class="status.open ? 'bg-[#DDF3E4] text-[#14532d]' : 'bg-[#FDE2E0] text-[#7f1d1d]'"
                >
                  {{ status.text }}
                </span>
                <ul class="mt-3 space-y-1 text-[15px]">
                  <li
                    v-for="r in rows"
                    :key="r.d"
                    class="flex justify-between gap-4"
                    :class="allSame || r.d === wib.day ? 'font-semibold' : 'text-ink-soft'"
                  >
                    <span>{{ r.name }}</span>
                    <span>{{ r.time }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-5 flex gap-3">
              <Phone class="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <div>
                <h3 class="font-semibold">Telepon</h3>
                <a :href="`tel:+${CONFIG.whatsapp}`" class="mt-1 block text-[15px] text-ink-soft">{{ CONFIG.phoneLabel }}</a>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                :href="directionsUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 rounded-full bg-[#5a0d0d] px-5 py-2.5 font-semibold text-white"
              >
                <Navigation class="h-4 w-4" aria-hidden="true" /> Petunjuk arah
              </a>
              <a
                :href="waUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 rounded-full border-2 border-[#5a0d0d] px-5 py-2 font-semibold text-[#5a0d0d]"
              >
                <MessageCircle class="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Peta -->
        <div class="rounded-[26px] border border-[#FFD2B5] bg-paper p-2.5 shadow-soft">
          <div class="relative h-full min-h-[340px] overflow-hidden rounded-[16px]">
            <iframe
              :src="embedUrl"
              title="Lokasi Sachi Sweet di Google Maps"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0 h-full w-full border-0"
            ></iframe>
            <a
              :href="LOCATION.mapsUrl"
              target="_blank"
              rel="noopener"
              class="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[12px] bg-paper px-4 py-2 text-center shadow-soft"
            >
              <span class="block font-semibold">Sachi Sweet</span>
              <span class="block text-sm text-ink-soft">Buka di Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Fasilitas -->
      <ul class="mt-[22px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="f in locationFacts"
          :key="f.label"
          class="flex items-center gap-3 rounded-[22px] border border-[#FFD2B5] bg-paper p-3 pr-4 shadow-soft"
        >
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-peach-200 text-[#5a0d0d]">
            <component :is="f.icon" class="h-5 w-5" aria-hidden="true" />
          </span>
          <span class="min-w-0">
            <span class="block font-semibold">{{ f.label }}</span>
            <span class="block text-sm text-ink-soft">{{ f.text }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
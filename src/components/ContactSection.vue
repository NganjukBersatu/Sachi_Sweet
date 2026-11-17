<script setup lang="ts">
import { reactive } from 'vue'
import { Clock, MapPin, Phone } from '@lucide/vue'
import { CONFIG, topics } from '@/data/site'
import { useTopic } from '@/composables/useTopic'

type FieldKey = 'name' | 'topic' | 'msg'

const { topic } = useTopic()
const values = reactive({ name: '', msg: '' })
const errors = reactive<Record<FieldKey, boolean>>({ name: false, topic: false, msg: false })

function submit(): void {
  errors.name = !values.name.trim()
  errors.topic = !topic.value.trim()
  errors.msg = !values.msg.trim()
  const firstBad = (['name', 'topic', 'msg'] as const).find((k) => errors[k])
  if (firstBad) {
    document.getElementById(firstBad)?.focus()
    return
  }
  const text = `Halo Sachi Sweet, saya ${values.name.trim()}.\nKeperluan: ${topic.value.trim()}\n\n${values.msg.trim()}`
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
}

const info = [
  { label: 'Alamat', icon: MapPin, text: CONFIG.address },
  { label: 'Jam buka', icon: Clock, text: '08.00 sampai 21.00' },
]
</script>

<template>
  <section id="kontak" class="pb-[72px] pt-6 max-sm:pb-14">
    <div class="wrap">
      <div class="grid items-start gap-10 rounded-panel border-2 border-peach-300 bg-paper p-[28px_22px] shadow-soft sm:p-10 desk:grid-cols-[1fr_1.1fr] desk:gap-12">
        <div>
          <h2 class="mb-2.5 text-[clamp(26px,3.4vw,36px)]">Kami tunggu kehadiran Anda</h2>
          <p class="mb-6 text-ink-soft">Ada pertanyaan, ingin memesan kue, atau tertarik melamar kerja? Tulis pesan Anda, kami balas lewat WhatsApp.</p>
          <ul class="m-0 grid list-none gap-4 p-0">
            <li v-for="i in info" :key="i.label" class="flex items-start gap-3.5">
              <span class="icon-badge h-11 w-11"><component :is="i.icon" class="h-[22px] w-[22px]" aria-hidden="true" /></span>
              <div><b class="block text-cherry-900">{{ i.label }}</b><span class="text-ink-soft">{{ i.text }}</span></div>
            </li>
            <li class="flex items-start gap-3.5">
              <span class="icon-badge h-11 w-11"><Phone class="h-[22px] w-[22px]" aria-hidden="true" /></span>
              <div><b class="block text-cherry-900">WhatsApp</b><a :href="`https://wa.me/${CONFIG.whatsapp}`" class="text-ink-soft">{{ CONFIG.phoneLabel }}</a></div>
            </li>
          </ul>
          <svg class="mt-7 max-w-[300px] text-peach-500" viewBox="0 0 300 130" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M150 0v22" /><path d="M128 44a22 22 0 0 1 44 0z" /><ellipse cx="150" cy="96" rx="34" ry="7" /><path d="M150 103v24M136 127h28" />
            <path d="M92 126V92c0-6 4-8 10-8h8c6 0 10 2 10 8v34M92 110h28M96 126l-3 4M116 126l3 4" />
            <path d="M190 126V92c0-6 4-8 10-8h8c6 0 10 2 10 8v34M190 110h28M194 126l-3 4M214 126l3 4" />
            <path d="M40 126v-30M40 108c-14-2-20-12-18-24 12 2 18 12 18 24zM40 112c12-2 18-10 18-20-10 2-16 10-18 20z" />
            <path d="M262 126v-30M262 108c-14-2-20-12-18-24 12 2 18 12 18 24zM262 112c12-2 18-10 18-20-10 2-16 10-18 20z" />
          </svg>
        </div>

        <form novalidate @submit.prevent="submit">
          <div class="mb-4">
            <label for="name" class="mb-1.5 block text-[15px] font-bold text-cherry-900">Nama lengkap</label>
            <input id="name" v-model="values.name" type="text" autocomplete="name" class="field-input" :class="errors.name && '!border-[#A11A2C]'" :aria-invalid="errors.name" aria-describedby="nameErr" @input="errors.name = false" />
            <p v-if="errors.name" id="nameErr" class="mt-1.5 text-sm font-semibold text-[#A11A2C]">Tulis nama Anda.</p>
          </div>
          <div class="mb-4">
            <label for="topic" class="mb-1.5 block text-[15px] font-bold text-cherry-900">Keperluan</label>
            <input id="topic" v-model="topic" type="text" list="topics" class="field-input" :class="errors.topic && '!border-[#A11A2C]'" :aria-invalid="errors.topic" aria-describedby="topicHint topicErr" @input="errors.topic = false" />
            <datalist id="topics"><option v-for="t in topics" :key="t" :value="t" /></datalist>
            <p id="topicHint" class="mt-1.5 text-sm text-ink-soft">Pilih dari daftar atau tulis sendiri.</p>
            <p v-if="errors.topic" id="topicErr" class="mt-1.5 text-sm font-semibold text-[#A11A2C]">Tulis keperluan Anda.</p>
          </div>
          <div class="mb-4">
            <label for="msg" class="mb-1.5 block text-[15px] font-bold text-cherry-900">Pesan</label>
            <textarea id="msg" v-model="values.msg" maxlength="500" class="field-input min-h-28 resize-y" :class="errors.msg && '!border-[#A11A2C]'" :aria-invalid="errors.msg" aria-describedby="msgHint msgErr" @input="errors.msg = false" />
            <p id="msgHint" class="mt-1.5 text-sm text-ink-soft">Maksimal 500 karakter.</p>
            <p v-if="errors.msg" id="msgErr" class="mt-1.5 text-sm font-semibold text-[#A11A2C]">Tulis pesan Anda, misalnya tanggal dan jumlah pesanan.</p>
          </div>
          <button type="submit" class="btn btn-primary">Kirim lewat WhatsApp</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { jobs } from '@/data/site'
import { useTopic } from '@/composables/useTopic'

const { topic } = useTopic()
</script>

<template>
  <section id="karier" class="pb-[72px] pt-10 max-sm:pb-14">
    <div class="wrap">
      <div class="relative grid items-center gap-10 overflow-hidden rounded-panel bg-peach-400 p-7 shadow-soft after:pointer-events-none after:absolute after:-right-[90px] after:-top-[90px] after:h-[260px] after:w-[260px] after:rounded-full after:bg-peach-300 after:opacity-60 sm:p-11 desk:grid-cols-[1fr_1.15fr]">
        <div class="relative z-[1]">
          <h2 class="mb-3.5 text-[clamp(28px,3.6vw,38px)]">Bergabung bersama tim Sachi Sweet</h2>
          <p class="mb-[22px] max-w-[40ch]">Kami mencari orang yang suka bekerja dalam tim kecil, ramah kepada pelanggan, dan senang menyajikan makanan manis. Kirim lamaran Anda lewat WhatsApp.</p>
          <a href="#kontak" class="btn btn-primary">Tanya lowongan</a>
        </div>
        <div class="relative z-[1] grid gap-3">
          <article v-for="j in jobs" :key="j.title" class="flex flex-wrap items-center justify-between gap-3.5 rounded-card bg-paper px-5 py-4">
            <div>
              <h3 class="text-lg">{{ j.title }}</h3>
              <p class="mt-0.5 text-sm text-ink-soft">{{ j.text }}</p>
              <div class="mt-2 flex flex-wrap gap-1.5">
                <span v-for="t in j.tags" :key="t" class="rounded-soft bg-mint px-[9px] py-px text-[13px] font-semibold text-cherry-900">{{ t }}</span>
              </div>
            </div>
            <a href="#kontak" class="btn btn-ghost" @click="topic = `Melamar: ${j.title}`">Kirim lamaran</a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
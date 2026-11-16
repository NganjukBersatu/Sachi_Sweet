<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import SocialIcon from '@/components/icons/SocialIcon.vue'
import { vReveal } from '@/directives/reveal'
import { siteInfo, socialLinks } from '@/data/site'
</script>

<template>
  <section id="kontak" class="bg-sachi-cream px-[5vw] py-20">
    <div class="mx-auto max-w-[1100px]">
      <SectionHeading>Kunjungi Kami</SectionHeading>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
        <div v-reveal>
          <h3 class="mb-[0.3rem] font-display text-[1.15rem] leading-[1.15]">Alamat</h3>
          <p>{{ siteInfo.alamat }}</p>
        </div>
        <div v-reveal>
          <h3 class="mb-[0.3rem] font-display text-[1.15rem] leading-[1.15]">Jam buka</h3>
          <p>{{ siteInfo.jamBuka.hari }}<br />{{ siteInfo.jamBuka.jam }}</p>
        </div>
        <div v-reveal>
          <h3 class="mb-[0.3rem] font-display text-[1.15rem] leading-[1.15]">Hubungi</h3>
          <p>{{ siteInfo.telepon }}</p>
          <ul class="mt-2 flex flex-col gap-[0.3rem]">
            <li v-for="s in socialLinks" :key="s.nama">
              <a
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${s.nama} Sachi Sweet, ${s.handle}`"
                class="group inline-flex items-center gap-[0.6rem] py-[0.2rem] transition-transform duration-200 hover:translate-x-1"
              >
                <SocialIcon :name="s.icon" />
                <span class="underline-offset-[3px] group-hover:underline">{{ s.handle }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

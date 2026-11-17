<script setup lang="ts">
import { platforms } from '@/data/site'
</script>

<template>
  <div id="pesan" class="pb-[72px] pt-10">
    <div class="wrap">
      <div class="flex flex-wrap items-center justify-between gap-5 rounded-panel border-2 border-peach-300 bg-paper px-7 py-[22px] shadow-soft">
        <div>
          <h2 class="text-[22px]">Pesan antar lewat aplikasi favorit Anda</h2>
          <p class="mt-1 text-[15px] text-ink-soft">Pilih aplikasi, lalu pesan dessert dan minuman dari rumah.</p>
        </div>
        <div class="flex flex-wrap gap-2.5">
          <a v-for="p in platforms" :key="p.key" :href="p.href" target="_blank" rel="noopener" class="btn btn-primary">{{ p.label }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
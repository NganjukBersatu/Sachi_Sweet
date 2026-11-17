<script setup lang="ts">
import { platforms } from '@/data/site'
</script>

<template>
  <footer class="mt-10 pb-8 pt-10">
    <div class="wrap flex flex-wrap items-center justify-between gap-5 text-sm text-ink-soft">
      <span>© 2026 Sachi Sweet Café. Seluruh hak cipta dilindungi.</span>
      <ul class="m-0 flex list-none flex-wrap gap-1.5 p-0" aria-label="Pesan antar">
        <li v-for="p in platforms" :key="p.key">
          <a :href="p.href" target="_blank" rel="noopener" class="inline-flex min-h-[44px] items-center px-2.5 font-semibold no-underline hover:underline">{{ p.label }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
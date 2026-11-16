<script setup lang="ts">
import { siteInfo } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-sachi-rose px-6 py-6 text-center text-[0.9rem]">
    <p>&copy; {{ year }} {{ siteInfo.nama }}. Semua hak dilindungi.</p>
  </footer>
</template>

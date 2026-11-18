<script setup lang="ts">
import { computed } from 'vue'
import { images, navLinks } from '@/data/site'

// Footer tidak perlu link "Beranda" (sama seperti desain referensi)
const links = computed(() => navLinks.filter((l) => l.id !== 'beranda'))

const contact = {
  address: 'Perumahan Bumi Wanamukti Blok B2, Sambiroto, Tembalang, Semarang',
  whatsapp: { label: 'WhatsApp 0852-8061-6218', href: 'https://wa.me/6285280616218' },
  instagram: { label: 'Instagram @sachisweet2023', href: 'https://instagram.com/sachisweet2023' },
  tiktok: { label: 'TikTok @sachi.sweet', href: 'https://tiktok.com/@sachi.sweet' },
}
</script>

<template>
  <footer class="site-footer relative mt-24 bg-[#FFC9A8] text-[#4a0a00]">
    <div class="wrap grid gap-10 pb-8 pt-12 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-16">
      <!-- Brand -->
      <div>
        <a href="#beranda" class="inline-flex items-center gap-3 no-underline">
          <img
            :src="images.logo"
            alt="Logo Sachi Sweet"
            width="44"
            height="44"
            class="h-11 w-11 rounded-full border-2 border-white bg-white object-cover"
          />
          <span class="font-head text-xl font-extrabold text-[#4a0a00]">Sachi Sweet</span>
        </a>
        <p class="mt-4 max-w-xs text-[15px] leading-relaxed">
          Café, bakery, dan dessert di Semarang.
        </p>
      </div>

      <!-- Jelajahi -->
      <nav aria-label="Jelajahi">
        <h2 class="m-0 font-head text-base font-extrabold">Jelajahi</h2>
        <ul class="m-0 mt-3 flex list-none flex-col gap-1.5 p-0">
          <li v-for="l in links" :key="l.id">
            <a :href="`#${l.id}`" class="footer-link">{{ l.label }}</a>
          </li>
        </ul>
      </nav>

      <!-- Hubungi kami -->
      <div>
        <h2 class="m-0 font-head text-base font-extrabold">Hubungi kami</h2>
        <address class="mt-3 flex flex-col gap-1.5 text-[15px] not-italic leading-relaxed">
          <span>{{ contact.address }}</span>
          <a :href="contact.whatsapp.href" target="_blank" rel="noopener" class="footer-link">{{ contact.whatsapp.label }}</a>
          <a :href="contact.instagram.href" target="_blank" rel="noopener" class="footer-link">{{ contact.instagram.label }}</a>
          <a :href="contact.tiktok.href" target="_blank" rel="noopener" class="footer-link">{{ contact.tiktok.label }}</a>
        </address>
      </div>
    </div>

    <!-- Bawah -->
        <!-- Bawah -->
    <div class="wrap pb-8">
      <div class="border-t border-[#4a0a00]/25 pt-6 text-sm">
        <span>© 2026 Sachi Sweet Café. Seluruh hak cipta dilindungi.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Tepi atas bergelombang (scallop) */
.site-footer::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -23px;
  height: 24px;
  background-image: radial-gradient(circle at 24px 24px, #ffc9a8 23.5px, transparent 24px);
  background-size: 48px 24px;
  background-repeat: repeat-x;
  pointer-events: none;
}

.footer-link {
  width: fit-content;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgb(74 10 0 / 0.45);
  transition: text-decoration-color 0.15s;
}
.footer-link:hover {
  text-decoration-color: currentColor;
}
</style>
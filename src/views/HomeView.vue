<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ReviewsSection from '@/components/ReviewsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import WaveDivider from '@/components/WaveDivider.vue'

const WAVE_B = 'M0 64V40C240 -10 520 70 760 34S1200 -6 1440 36V64Z'
</script>

<template>
  <a href="#konten" class="absolute -top-16 left-3 z-[100] rounded-soft bg-cherry-900 px-4 py-2.5 text-white focus:top-3">Lewati ke konten utama</a>
  <AppHeader />
  <main id="konten">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WaveDivider :d="WAVE_B" fill="#FFD2B5" bg />
    <ReviewsSection />
    <WaveDivider :d="WAVE_B" fill="#FFD2B5" bg flip />
    <ContactSection />
  </main>
  <AppFooter />
</template>
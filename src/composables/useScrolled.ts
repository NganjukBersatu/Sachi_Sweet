import { onMounted, onUnmounted, ref, type Ref } from 'vue'

// true saat halaman sudah di-scroll melewati `offset` piksel
export function useScrolled(offset = 10): Ref<boolean> {
  const isScrolled = ref(false)

  function update(): void {
    isScrolled.value = window.scrollY > offset
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
  })
  onUnmounted(() => window.removeEventListener('scroll', update))

  return isScrolled
}

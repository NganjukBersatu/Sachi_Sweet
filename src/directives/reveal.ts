import type { Directive } from 'vue'

// Muncul perlahan saat di-scroll. Nilai direktif = jeda (ms), opsional.
const REVEAL_CLASSES = [
  'opacity-0',
  'translate-y-7',
  'transition',
  'duration-700',
  'ease-in-out',
  'data-[revealed]:opacity-100',
  'data-[revealed]:translate-y-0',
  'motion-reduce:opacity-100',
  'motion-reduce:translate-y-0',
  'motion-reduce:transition-none',
]

export const vReveal: Directive<HTMLElement, number | undefined> = {
  beforeMount(el, binding) {
    el.classList.add(...REVEAL_CLASSES)
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
  },
  mounted(el) {
    if (!('IntersectionObserver' in window)) {
      el.dataset.revealed = ''
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.revealed = ''
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
  },
}

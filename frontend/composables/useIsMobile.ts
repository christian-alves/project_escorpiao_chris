import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Reatividade de "é mobile?" segura para SSR.
 * Inicia como `false` no servidor e é resolvida no cliente ao montar,
 * evitando o acesso a `window` no topo do <script setup> (que quebrava o SSR).
 */
export function useIsMobile(breakpoint = 767) {
  const isMobile = ref(false)

  function handleResize() {
    isMobile.value = window.innerWidth <= breakpoint
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isMobile }
}

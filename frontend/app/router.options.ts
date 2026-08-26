import type { RouterConfig } from '@nuxt/schema'

// Preserva o comportamento de scroll do projeto original:
// - âncoras de hash (ex.: /#produtos) rolam suavemente após o DOM montar;
// - navegação normal volta ao topo.
export default <RouterConfig>{
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        }, 100)
      })
    }
    return { top: 0 }
  },
}

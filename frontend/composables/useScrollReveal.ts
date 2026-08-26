import { onMounted } from 'vue'

/**
 * Anima elementos com as classes `.reveal-*` ao entrarem no viewport,
 * via IntersectionObserver. Substitui o bloco duplicado que existia em
 * cada view do projeto original. Roda apenas no client (dentro de onMounted).
 */
export function useScrollReveal() {
  onMounted(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document
      .querySelectorAll('.reveal-element, .reveal-scale, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el))
  })
}

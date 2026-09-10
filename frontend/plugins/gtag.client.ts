// Registra pageviews no GA4 a cada navegação client-side (NuxtLink não recarrega a página,
// então o gtag('config', ...) disparado uma vez no <head> não cobre rotas seguintes).
export default defineNuxtPlugin(() => {
  const { gaMeasurementId } = useRuntimeConfig().public
  const router = useRouter()

  router.afterEach((to) => {
    if (typeof window.gtag !== 'function') return
    window.gtag('config', gaMeasurementId, { page_path: to.fullPath })
  })
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  // Site institucional 100% estático -> geração estática (SSG) por padrão.
  // `nuxt generate` pré-renderiza todas as rotas em HTML.
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Domínio de produção — usado por sitemap, robots e canonical.
  site: {
    url: 'https://sodaescorpiao.com.br',
    name: 'Soda Cáustica Escorpião',
  },

  // Chaves públicas do EmailJS centralizadas (expostas ao client por design do EmailJS).
  runtimeConfig: {
    public: {
      emailjs: {
        serviceId: 'service_qkfa5mv',
        publicKey: 'tbViC79WPqnsOHWBi',
        templateDealer: 'template_63ypqqb',
        templateContact: 'template_nmvkvpc',
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Soda Cáustica Escorpião',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#720e0e' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/IconeEscorpiaoQuadrado.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap',
        },
      ],
    },
  },
})

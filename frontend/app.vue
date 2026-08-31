<template>
  <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Dados estruturados globais (Schema.org) — reaproveita as informações
// já exibidas no Footer (endereço, telefone, e-mail, CNPJ, redes sociais).
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Soda Cáustica Escorpião',
  legalName: 'Soda Cáustica Escorpião',
  url: 'https://sodaescorpiao.com.br',
  logo: 'https://sodaescorpiao.com.br/IconeEscorpiaoQuadrado.png',
  foundingDate: '1970',
  taxID: '04.548.633/0001-90',
  email: 'adm@sodaescorpiao.com.br',
  telephone: '+55-27-99850-7166',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Serra',
    addressRegion: 'ES',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/sodaescorpiao/',
    'https://www.facebook.com/61559856353973/',
    'https://www.tiktok.com/@sodaescorpiao',
  ],
}

const route = useRoute()
const siteConfig = useSiteConfig()
const canonicalUrl = computed(() => `${siteConfig.url}${route.path}`.replace(/\/{2,}$/, '/'))

// Defaults globais de Open Graph (páginas podem sobrescrever ogImage/description).
useSeoMeta({
  ogSiteName: 'Soda Cáustica Escorpião',
  ogImage: 'https://sodaescorpiao.com.br/IconeEscorpiaoQuadrado.png',
  twitterImage: 'https://sodaescorpiao.com.br/IconeEscorpiaoQuadrado.png',
  ogUrl: canonicalUrl,
})

useHead({
  // Evita duplicar a marca quando o título da página já a contém (ex.: home).
  titleTemplate: (title) =>
    title && title.includes('Escorpião') ? title : `${title} | Soda Cáustica Escorpião`,
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(orgJsonLd),
    },
  ],
})
</script>

<style>
.skip-link { position: fixed; top: .75rem; left: .75rem; z-index: 11000; padding: .75rem 1rem; color: #fff; background: rgb(var(--color-brand-800)); border-radius: .5rem; transform: translateY(-200%); transition: transform .2s ease; }
.skip-link:focus { transform: translateY(0); outline: 3px solid #fff; outline-offset: 2px; }
</style>

<template>
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

// Defaults globais de Open Graph (páginas podem sobrescrever ogImage/description).
useSeoMeta({
  ogSiteName: 'Soda Cáustica Escorpião',
  ogImage: 'https://sodaescorpiao.com.br/IconeEscorpiaoQuadrado.png',
  twitterImage: 'https://sodaescorpiao.com.br/IconeEscorpiaoQuadrado.png',
})

useHead({
  // Evita duplicar a marca quando o título da página já a contém (ex.: home).
  titleTemplate: (title) =>
    title && title.includes('Escorpião') ? title : `${title} | Soda Cáustica Escorpião`,
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(orgJsonLd),
    },
  ],
})
</script>

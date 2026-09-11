<template>
  <div>
    <NavBar />
    <WhatsappButton />
    <main id="main-content" tabindex="-1">
      <PageHero v-if="showPageHero" />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Layout global equivalente ao antigo App.vue:
// NavBar fixa + botão de WhatsApp flutuante + conteúdo da página + Footer.
// Componentes são auto-importados pelo Nuxt a partir de components/.
const route = useRoute()
const showPageHero = computed(() => route.path !== '/')
</script>

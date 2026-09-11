<template>
  <div>
    <NavBar />
    <WhatsappButton />
    <main id="main-content" tabindex="-1">
      <PageHero v-if="showPageHero" />
      <div :class="{ 'page-content-with-hero': showPageHero }"><slot /></div>
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

<style>
.page-content-with-hero h1 { display: none; }
.page-content-with-hero .line-page-custom-hero { display: none; }
</style>

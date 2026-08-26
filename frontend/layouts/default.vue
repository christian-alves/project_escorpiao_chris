<template>
  <div>
    <NavBar />
    <WhatsappButton />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
// Layout global equivalente ao antigo App.vue:
// NavBar fixa + botão de WhatsApp flutuante + conteúdo da página + Footer.
// Componentes são auto-importados pelo Nuxt a partir de components/.
</script>

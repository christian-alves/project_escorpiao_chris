<template>
  <div class="min-h-screen flex items-center justify-center px-6 font-montserrat" style="background-color: rgb(var(--color-cream));">
    <div class="text-center max-w-lg">
      <p class="text-7xl md:text-8xl font-extrabold text-brand-700 mb-4">{{ error.statusCode }}</p>
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        {{ error.statusCode === 404 ? 'Página não encontrada' : 'Algo deu errado' }}
      </h1>
      <p class="text-gray-600 mb-8">
        {{ error.statusCode === 404
          ? 'O endereço que você tentou acessar não existe ou foi movido.'
          : 'Ocorreu um erro inesperado. Tente novamente mais tarde.' }}
      </p>
      <button
        class="bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgb(var(--color-brand-700)/0.25)] hover:-translate-y-1"
        @click="handleError">
        Voltar para o início
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: { type: Object, required: true },
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

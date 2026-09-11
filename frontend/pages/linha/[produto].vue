<template>
  <SodaCaustica v-if="produto === 'soda-caustica'" />
  <EscorpiaoCasa v-else-if="produto === 'escorpiao-casa'" />
</template>

<script setup>
import SodaCaustica from '../soda-caustica.vue'
import EscorpiaoCasa from '../escorpiao-casa.vue'

const route = useRoute()
const produto = computed(() => String(route.params.produto || ''))

if (!['soda-caustica', 'escorpiao-casa'].includes(produto.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Linha não encontrada' })
}
</script>

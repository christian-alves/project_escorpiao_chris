<template>
  <section class="w-full bg-brand-800 pt-32 pb-12 text-white md:pt-36 md:pb-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-[11px] font-bold uppercase tracking-[.18em] text-brand-200">Soda Cáustica Escorpião</p>
      <h1 class="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">{{ title }}</h1>
      <nav class="mt-3 flex flex-wrap items-center gap-1.5 text-sm text-brand-100" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Início</NuxtLink>
        <template v-for="crumb in breadcrumbs" :key="crumb.label">
          <ChevronRight class="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
          <NuxtLink v-if="crumb.to" :to="crumb.to" class="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">{{ crumb.label }}</NuxtLink>
          <span v-else aria-current="page">{{ crumb.label }}</span>
        </template>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { getProdutoBySlug } from '../data/produtos'
import { getReceitaBySlug } from '../data/receitas'
import { ChevronRight } from 'lucide-vue-next'

const route = useRoute()

// Hospedagens estáticas costumam servir /produtos como /produtos/; sem normalizar, o título
// cairia no fallback depois da hidratação.
const path = computed(() => route.path.replace(/\/+$/, '') || '/')

const title = computed(() => {
  const fixedTitles = {
    '/produtos': 'Produtos',
    '/receitas': 'Receitas',
    '/info': 'Informações',
    '/nossa-historia': 'Sobre nós',
    '/politica-de-privacidade': 'Política de privacidade',
    '/termos-de-uso': 'Termos de uso',
    '/contato': 'Contato',
    '/contato/revendedor': 'Seja um revendedor',
    '/contato/obrigado': 'Obrigado',
    '/linha/soda-caustica': 'Soda Cáustica',
    '/linha/escorpiao-casa': 'Escorpião Casa',
  }

  if (path.value.startsWith('/produto/')) return getProdutoBySlug(String(route.params.slug))?.nome || 'Produto'
  if (path.value.startsWith('/receita/')) return getReceitaBySlug(String(route.params.slug))?.titulo || 'Receita'

  return fixedTitles[path.value] || 'Soda Cáustica Escorpião'
})

const breadcrumbs = computed(() => {
  if (path.value.startsWith('/produto/')) return [{ label: 'Produtos', to: '/produtos' }, { label: title.value }]
  if (path.value.startsWith('/receita/')) return [{ label: 'Receitas', to: '/receitas' }, { label: title.value }]
  if (path.value.startsWith('/linha/')) return [{ label: 'Produtos', to: '/produtos' }, { label: title.value }]
  return [{ label: title.value }]
})

</script>

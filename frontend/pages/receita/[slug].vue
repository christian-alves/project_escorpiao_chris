<template>
    <div v-if="receita" style="background-color: #faf4ef; overflow-x: hidden;">
        <section class="max-w-4xl mx-auto px-6 pt-32 pb-20 font-montserrat">
            <NuxtLink to="/receitas"
                class="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors mb-8">
                <ArrowLeft class="w-4 h-4" /> Voltar para receitas
            </NuxtLink>

            <div class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12">
                <ReceitaDetalhe :tipo="receita.tipo" :videoReceitas="videoReceitas" />
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import ReceitaDetalhe from '../../components/RecipeDetails.vue'
import { receitas, getReceitaBySlug, videoReceitas } from '../../data/receitas'

const route = useRoute()
const receita = getReceitaBySlug(route.params.slug)

if (!receita) {
    throw createError({ statusCode: 404, statusMessage: 'Receita não encontrada' })
}

useSeoMeta({
    title: `${receita.titulo} — Soda Cáustica Escorpião`,
    description: `Aprenda o passo a passo da receita: ${receita.titulo}, feita com Soda Cáustica Escorpião.`,
    ogTitle: receita.titulo,
    ogType: 'website',
    ogLocale: 'pt_BR',
})

definePageMeta({
    validate: async (r) => receitas.some(rec => rec.slug === r.params.slug),
})
</script>

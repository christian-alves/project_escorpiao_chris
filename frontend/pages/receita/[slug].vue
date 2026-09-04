<template>
    <div v-if="receita" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-4xl mx-auto px-6 pt-32 pb-20 font-montserrat">
            <NuxtLink to="/receitas"
                class="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors mb-8">
                <ArrowLeft class="w-4 h-4" /> Voltar para receitas
            </NuxtLink>

            <div class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12">
                <ReceitaDetalhe :tipo="receita.tipo" :videoReceitas="videoReceitas" />
            </div>

            <div class="mt-10">
                <SectionHeader title="ONDE COMPRAR" :icon="ShoppingCart" />
                <Card class="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p class="text-gray-700 text-lg font-montserrat leading-relaxed max-w-xl">
                        Vai fazer essa receita? Encontre a Soda Cáustica Escorpião em mercados, agropecuárias, lojas
                        de produtos de limpeza e materiais de construção em todo o Brasil.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <NuxtLink to="/onde-comprar">
                            <button
                                class="w-full sm:w-auto group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1 whitespace-nowrap">
                                <span class="relative z-10 group-hover:text-brand-700">ONDE COMPRAR</span>
                            </button>
                        </NuxtLink>
                        <a :href="linkCompra()" target="_blank" rel="noopener noreferrer">
                            <button
                                class="w-full sm:w-auto border-2 border-brand-700 text-brand-700 px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1 whitespace-nowrap">
                                COMPRAR PELO WHATSAPP
                            </button>
                        </a>
                    </div>
                </Card>
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ArrowLeft, ShoppingCart } from 'lucide-vue-next'
import ReceitaDetalhe from '../../components/RecipeDetails.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import Card from '../../components/ui/Card.vue'
import { receitas, getReceitaBySlug, videoReceitas } from '../../data/receitas'
import { useWhatsapp } from '../../composables/useWhatsapp'

const { linkCompra } = useWhatsapp()

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

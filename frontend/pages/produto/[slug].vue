<template>
    <div v-if="produto" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-6xl mx-auto px-6 pt-32 pb-20">
            <NuxtLink to="/produtos"
                class="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors mb-8">
                <ArrowLeft class="w-4 h-4" /> Voltar para produtos
            </NuxtLink>

            <div
                class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white to-brand-50/50 border border-brand-200/50 shadow-[0_8px_40px_rgb(var(--color-brand-700)/0.07)] px-8 py-12 md:px-14 md:py-14">
                <div class="absolute top-0 left-0 w-2/3 h-1 bg-gradient-to-r from-brand-700 via-brand-400 to-transparent">
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div class="flex justify-center">
                        <img :src="produto.img" :alt="produto.nome"
                            class="object-contain w-56 md:w-72 h-auto filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
                    </div>

                    <div>
                        <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-2">
                            {{ produto.categoria === 'soda' ? 'Linha Principal' : 'Linha de Limpeza' }}
                        </p>
                        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 font-montserrat tracking-tight mb-6">
                            {{ produto.nome }}
                        </h1>
                        <p
                            class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700">
                            {{ produto.descricao }}
                        </p>

                        <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-4 text-brand-700">
                            Aplicações
                        </p>
                        <ul class="space-y-3 mb-10">
                            <li v-for="uso in produto.usos" :key="uso" class="flex items-start gap-3">
                                <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-50">
                                    <Check class="w-3.5 h-3.5 text-brand-700" />
                                </div>
                                <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ uso }}</p>
                            </li>
                        </ul>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <NuxtLink to="/onde-comprar">
                                <button
                                    class="w-full sm:w-auto group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1">
                                    <span class="relative z-10 group-hover:text-brand-700">ONDE COMPRAR</span>
                                </button>
                            </NuxtLink>
                            <NuxtLink to="/contato">
                                <button
                                    class="w-full sm:w-auto border-2 border-brand-700 text-brand-700 px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1">
                                    FALE CONOSCO
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ArrowLeft, Check } from 'lucide-vue-next'
import { produtos, getProdutoBySlug } from '../../data/produtos'

const route = useRoute()
const produto = getProdutoBySlug(route.params.slug)

if (!produto) {
    throw createError({ statusCode: 404, statusMessage: 'Produto não encontrado' })
}

useSeoMeta({
    title: `${produto.nome} — Soda Cáustica Escorpião`,
    description: produto.resumo,
    ogTitle: produto.nome,
    ogDescription: produto.resumo,
    ogType: 'website',
    ogLocale: 'pt_BR',
})

definePageMeta({
    validate: async (r) => produtos.some(p => p.slug === r.params.slug),
})
</script>

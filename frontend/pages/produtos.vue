<template>
    <div style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">

        <section class="max-w-6xl mx-auto px-6 pt-32 pb-6 scroll-mt-32">
            <div class="flex items-center gap-4 reveal-element mb-8 mt-4 text-brand-700">
                <h1 class="text-3xl font-extrabold font-montserrat tracking-tight m-0">PRODUTOS</h1>
                <PackageOpen stroke-width="2" size="32" class="mb-1" />
            </div>

            <!-- Container Soda Cáustica -->
            <div class="reveal-element">
                <div
                    class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white to-brand-50/50 border border-brand-200/50 shadow-[0_8px_40px_rgb(var(--color-brand-700)/0.07)] px-8 py-12 md:px-14 md:py-14">

                    <div class="absolute top-0 left-0 w-2/3 h-1 bg-gradient-to-r from-brand-700 via-brand-400 to-transparent">
                    </div>

                    <div class="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div
                                class="bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0">
                                <FlaskConical class="text-white w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-0.5">
                                    Linha Principal</p>
                                <h2 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight leading-tight">
                                    Soda Cáustica</h2>
                            </div>
                        </div>
                        <p class="text-gray-500 font-montserrat text-sm md:ml-auto md:text-right max-w-xs leading-relaxed">
                            Hidróxido de sódio com 98% de pureza, referência nacional em qualidade e agilidade.
                        </p>
                    </div>

                    <div class="h-px bg-gradient-to-r from-brand-300 via-brand-100 to-transparent mb-10 opacity-60"></div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div class="reveal-element delay-100 flex flex-col justify-center">
                            <p
                                class="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700">
                                A soda cáustica em escamas é obtida a partir do processo de evaporação da soda cáustica
                                líquida, da fusão do produto anidro e do processo de escamação. Apresenta-se na forma de
                                escamas brancas, altamente deliquescentes, com concentração média de 98% de hidróxido de
                                sódio em peso.
                            </p>
                            <p
                                class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-300">
                                É utilizada na fabricação de sabões e detergentes, no tratamento de superfícies metálicas,
                                na mercerização de têxteis, na regeneração de resinas de troca iônica e na correção de pH
                                em processos industriais de alimentos, álcool e farmácia.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-4 md:gap-y-8">
                            <NuxtLink v-for="produto in sodaProdutos" :key="produto.slug" :to="`/produto/${produto.slug}`"
                                class="flex flex-col items-center text-center reveal-scale delay-200 group relative bg-white/70 rounded-2xl p-4 border border-brand-50 hover:border-brand-200/60 hover:shadow-[0_16px_32px_rgb(var(--color-brand-700)/0.10)] hover:-translate-y-1 transition-all duration-500"
                                :class="produto.wide ? 'sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-3 lg:mx-auto lg:w-1/2' : ''">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-brand-50 to-orange-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0 opacity-40">
                                </div>
                                <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async"
                                    class="relative z-10 product-img object-contain w-40 md:w-48 h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_25px_35px_rgb(var(--color-brand-700)/0.25)] transition-all duration-500 group-hover:-translate-y-2" />
                                <p
                                    class="relative z-10 text-base font-bold mt-4 text-gray-800 font-montserrat group-hover:text-brand-700 transition-colors">
                                    {{ produto.nome }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Linha de Limpeza -->
            <div class="mt-20 reveal-element">
                <div
                    class="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-50 to-accent/5 border border-accent/20 shadow-[0_8px_40px_rgb(var(--color-accent-700)/0.07)] px-8 py-12 md:px-14 md:py-14">

                    <div class="absolute top-0 left-0 w-2/3 h-1 bg-gradient-to-r from-accent via-accent-glow to-transparent">
                    </div>

                    <div class="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0 bg-gradient-to-br from-accent to-accent-dark">
                                <Sparkles class="text-white w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-0.5 text-accent">Nova Linha</p>
                                <h2 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight leading-tight">
                                    Linha de Limpeza</h2>
                            </div>
                        </div>
                        <p class="text-gray-500 font-montserrat text-sm md:ml-auto md:text-right max-w-xs leading-relaxed">
                            Produtos de alta pureza para limpeza, higienização e uso doméstico ou industrial.
                        </p>
                    </div>

                    <div class="h-px mb-10 bg-gradient-to-r from-accent to-transparent opacity-20"></div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
                        <NuxtLink v-for="produto in limpezaProdutos" :key="produto.slug" :to="`/produto/${produto.slug}`"
                            class="group flex flex-col items-center text-center reveal-scale delay-300 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(var(--color-accent-700)/0.12)] hover:-translate-y-2 transition-all duration-500">
                            <div class="relative w-full flex justify-center mb-4">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out opacity-60 blur-xl">
                                </div>
                                <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async"
                                    class="relative z-10 object-contain w-44 md:w-52 h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_20px_30px_rgb(var(--color-accent-700)/0.22)] transition-all duration-500 group-hover:-translate-y-2" />
                            </div>
                            <p
                                class="text-base font-extrabold text-gray-800 font-montserrat transition-colors mb-2 group-hover:text-accent">
                                {{ produto.nome }}</p>
                            <p class="text-sm text-gray-500 font-montserrat leading-relaxed">
                                {{ produto.resumo }}
                            </p>
                        </NuxtLink>
                    </div>

                    <div class="flex justify-center mt-12 reveal-element delay-300">
                        <NuxtLink to="/escorpiao-casa">
                            <button
                                class="group relative overflow-hidden border border-accent font-semibold tracking-wide px-10 py-3 rounded-full text-white bg-gradient-to-br from-accent to-accent-dark transition-all duration-300 hover:-translate-y-1">
                                <span class="relative z-10">CONHEÇA A LINHA ESCORPIÃO CASA</span>
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { PackageOpen, FlaskConical, Sparkles } from 'lucide-vue-next'
import { produtos } from '../data/produtos'

useSeoMeta({
    title: 'Produtos — Soda Cáustica Escorpião',
    description:
        'Conheça a linha completa de produtos Soda Escorpião: soda cáustica em escamas (500g, 1kg), soda cáustica líquida, percarbonato e bicarbonato de sódio.',
    ogTitle: 'Produtos Soda Escorpião',
    ogDescription: 'Soda cáustica, percarbonato e bicarbonato de sódio com qualidade e pureza garantidas.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const sodaProdutos = produtos.filter(p => p.categoria === 'soda')
const limpezaProdutos = produtos.filter(p => p.categoria === 'limpeza')

useScrollReveal()
</script>

<style scoped>
.reveal-element {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-element.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-scale {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-scale.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
}

.delay-100 {
    transition-delay: 100ms;
}

.delay-200 {
    transition-delay: 200ms;
}

.delay-300 {
    transition-delay: 300ms;
}
</style>

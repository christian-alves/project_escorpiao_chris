<template>
    <div style="background-color: #faf4ef; overflow-x: hidden;">
        <section class="max-w-6xl mx-auto px-6 pt-32 pb-20 font-montserrat">
            <div class="flex items-center gap-4 reveal-element">
                <h1 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat tracking-tight">ONDE COMPRAR?
                </h1>
                <ShoppingCart class="text-red-700 mb-4" stroke-width="2" size="32" />
            </div>

            <p
                class="text-gray-700 text-lg mb-12 leading-relaxed font-montserrat max-w-4xl border-l-4 border-red-700 pl-6 reveal-element delay-100">
                A Soda Cáustica Escorpião, localizada em Serra - Espírito Santo, é referência nacional no fornecimento
                de soda cáustica para distribuidores que valorizam tradição, qualidade e agilidade.
                <br><br>
                Nosso produto pode ser facilmente encontrado em uma ampla rede de parceiros:
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-16">
                <figure v-for="(local, index) in locais" :key="local.nome"
                    class="flex flex-col items-center reveal-scale group"
                    :style="{ transitionDelay: `${(index + 2) * 100}ms` }">
                    <div
                        class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 group-hover:shadow-[0_20px_40px_rgba(185,28,28,0.08)] group-hover:-translate-y-3 transition-all duration-500 w-full flex justify-center h-[200px] mb-4 relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <img :src="local.img" :alt="local.nome" loading="lazy" decoding="async"
                            class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 self-center z-10" />
                    </div>
                    <figcaption
                        class="text-center text-gray-800 font-bold text-lg leading-tight group-hover:text-red-700 transition-colors"
                        v-html="local.nome">
                    </figcaption>
                </figure>
            </div>

            <div class="flex justify-center reveal-element delay-500">
                <NuxtLink to="/contato">
                    <button
                        class="group relative overflow-hidden border border-red-700 bg-red-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1">
                        <span class="relative z-10 group-hover:text-red-700">FALE COM UM DISTRIBUIDOR</span>
                    </button>
                </NuxtLink>
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ShoppingCart } from 'lucide-vue-next'

import local1 from '../assets/ondeComprar/1.png'
import local2 from '../assets/ondeComprar/2.png'
import local3 from '../assets/ondeComprar/3.png'
import local4 from '../assets/ondeComprar/4.png'

useSeoMeta({
    title: 'Onde Comprar — Soda Cáustica Escorpião',
    description:
        'Encontre a Soda Cáustica Escorpião em mercados, agropecuárias, lojas de produtos de limpeza e materiais de construção em todo o Brasil.',
    ogTitle: 'Onde Comprar Soda Escorpião',
    ogDescription: 'Rede nacional de distribuidores da Soda Cáustica Escorpião.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const locais = [
    { nome: 'Mercados', img: local1 },
    { nome: 'Agropecuárias', img: local2 },
    { nome: 'Produtos de<br>Limpeza', img: local3 },
    { nome: 'Materiais de<br>Construção', img: local4 },
]

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

.delay-500 {
    transition-delay: 500ms;
}
</style>

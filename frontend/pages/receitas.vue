<template>
    <div style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section
            class="max-w-6xl mx-auto px-6 pt-32 pb-20 font-montserrat relative before:absolute before:inset-0 before:bg-white/40 before:rounded-[3rem] before:-z-10">
            <div class="flex items-center gap-4 reveal-element">
                <h1 class="text-3xl font-extrabold mt-2 text-brand-700 mb-6 font-montserrat tracking-tight">RECEITAS</h1>
                <BookMarked class="text-brand-700 mb-4" stroke-width="2" size="32" />
            </div>

            <div class="flex flex-col md:flex-row gap-8 items-stretch mt-4">
                <!-- Coluna de BOTÕES -->
                <div class="flex flex-col w-full md:w-2/5 space-y-4">
                    <div v-for="receita in receitas" :key="receita.slug" class="relative reveal-left">
                        <span v-if="receita.novidade"
                            class="absolute -top-3 left-7 z-10 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-xs font-bold rounded-full px-3 py-0.5 shadow-md flex items-center gap-1 select-none pointer-events-none animate-pulse-soft">
                            ✨ Novidade
                        </span>
                        <button @click="toggleReceita(receita.tipo)" class="recipe-btn w-full"
                            :class="{ 'active bg-brand-50 border-brand-400 text-brand-700': receitaAberta === receita.tipo }">
                            <span class="flex items-center gap-2 recipe-btn-text">
                                {{ receita.titulo }}
                                <Instagram v-if="receita.tipo === 3" class="w-5 h-5 text-pink-600 ml-1" />
                            </span>
                            <div class="recipe-btn-icon-wrapper"
                                :class="{ 'bg-brand-600 text-white shadow-md': receitaAberta === receita.tipo, 'bg-gray-100 text-gray-400': receitaAberta !== receita.tipo }">
                                <ChevronRight v-if="!isMobile" class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-90': receitaAberta === receita.tipo }" />
                                <ChevronDown v-else class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === receita.tipo }" />
                            </div>
                        </button>
                        <transition name="expand">
                            <div v-if="receitaAberta === receita.tipo && isMobile" class="recipe-content-mobile">
                                <ReceitaDetalhe :tipo="receita.tipo" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                        <NuxtLink :to="`/receita/${receita.slug}`"
                            class="mt-2 inline-block text-xs font-semibold text-brand-600 hover:text-brand-800 hover:underline">
                            Ver página completa →
                        </NuxtLink>
                    </div>

                    <div class="reveal-left mt-2">
                        <NuxtLink to="/info"
                            class="flex justify-between items-center text-lg font-bold text-brand-800 px-6 py-5 rounded-2xl bg-brand-50 border border-brand-200 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-lg hover:shadow-brand-600/30 transition-all duration-300 shadow-sm active:scale-[0.98] w-full group">
                            Informações de Manuseio
                            <BookAlert class="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                        </NuxtLink>
                    </div>

                    <transition name="fade">
                        <div v-if="isMobile && receitaAberta === null"
                            class="flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border rounded-3xl shadow-sm p-8 text-center text-gray-500 space-y-4 mb-4 md:hidden mt-4">
                            <div class="bg-gray-100 p-4 rounded-full">
                                <BookMarked class="w-10 h-10 opacity-60 text-gray-500" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-700">Explore Nossas Receitas</h3>
                            <p class="text-sm">Toque em uma opção acima para revelar o passo a passo completo e fazer o
                                melhor sabão caseiro.</p>
                        </div>
                    </transition>
                </div>

                <!-- COLUNA DIREITA (DESKTOP) -->
                <div class="flex-1 hidden md:block relative h-full min-h-[500px] reveal-element delay-300">
                    <transition name="slide-fade" mode="out-in">
                        <div v-if="receitaAberta !== null" :key="receitaAberta"
                            class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 h-full">
                            <ReceitaDetalhe :tipo="receitaAberta" :videoReceitas="videoReceitas" />
                        </div>
                        <div v-else
                            class="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-gray-200 p-12 text-center shadow-sm h-full max-h-[500px]">
                            <div
                                class="bg-brand-50 p-6 rounded-full mb-6 relative hover:scale-110 transition-transform duration-500 cursor-default">
                                <div class="absolute inset-0 bg-brand-100 rounded-full animate-ping opacity-20"></div>
                                <BookMarked class="w-16 h-16 text-brand-400" />
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">Desperte sua Criatividade</h3>
                            <p class="text-gray-500 max-w-sm text-lg leading-relaxed">Selecione uma receita ao lado para
                                descobrir o passo a passo de como fabricar em casa sabões incríveis.</p>
                        </div>
                    </transition>
                </div>
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronRight, ChevronDown, BookMarked, BookAlert, Instagram } from 'lucide-vue-next'
import ReceitaDetalhe from '../components/RecipeDetails.vue'
import { receitas, videoReceitas } from '../data/receitas'

useSeoMeta({
    title: 'Receitas de Sabão Caseiro — Soda Cáustica Escorpião',
    description:
        'Aprenda a fazer sabão em barra, sabão do Pará e sabão líquido em casa com a Soda Cáustica Escorpião. Receitas passo a passo e vídeos tutoriais.',
    ogTitle: 'Receitas de Sabão Caseiro',
    ogDescription: 'Passo a passo completo para fazer sabão caseiro com Soda Escorpião.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const receitaAberta = ref(null)

function toggleReceita(num) {
    receitaAberta.value = receitaAberta.value === num ? null : num
}

const { isMobile } = useIsMobile()

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

.reveal-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-left.is-visible {
    opacity: 1;
    transform: translateX(0);
}

.delay-300 {
    transition-delay: 300ms;
}

.recipe-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: #374151;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.recipe-btn:hover {
    border-color: rgb(var(--color-brand-300));
    box-shadow: 0 10px 15px -3px rgb(var(--color-brand-700) / 0.1), 0 4px 6px -2px rgb(var(--color-brand-700) / 0.05);
    background-color: rgb(var(--color-brand-50));
    color: rgb(var(--color-brand-700));
    transform: translateY(-2px);
}

.recipe-btn:active {
    transform: translateY(0) scale(0.98);
}

.recipe-btn-text {
    flex: 1;
    text-align: left;
}

.recipe-btn-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.recipe-content-mobile {
    margin-top: 0.75rem;
    background-color: #ffffff;
    border: 1px solid #f3f4f6;
    border-radius: 1rem;
    padding: 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

@keyframes pulse-soft {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.9;
        transform: scale(1.05);
    }
}

.animate-pulse-soft {
    animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.slide-fade-enter-active {
    transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease, padding 0.4s ease;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
    max-height: 1000px;
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

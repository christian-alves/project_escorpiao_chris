<template>
    <div v-if="produto" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-6xl mx-auto px-6 pt-32 pb-8">
            <NuxtLink to="/produtos"
                class="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors mb-8">
                <ArrowLeft class="w-4 h-4" /> Voltar para produtos
            </NuxtLink>

            <!-- Hero -->
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
                            class="text-gray-700 text-lg mb-10 leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700">
                            {{ produto.resumo }}
                        </p>

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

        <!-- Informações Técnicas -->
        <section id="tecnico" class="max-w-6xl mx-auto px-6 pt-8 scroll-mt-32">
            <SectionHeader title="INFORMAÇÕES TÉCNICAS" :icon="FlaskConical" />

            <Card class="p-8 md:p-10">
                <p class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700 mb-8">
                    {{ produto.descricao }}
                </p>

                <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-4 text-brand-700">
                    Aplicações
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    <li v-for="uso in produto.usos" :key="uso" class="flex items-start gap-3">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-50">
                            <Check class="w-3.5 h-3.5 text-brand-700" />
                        </div>
                        <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ uso }}</p>
                    </li>
                </ul>
            </Card>
        </section>

        <!-- Segurança -->
        <section id="seguranca" class="max-w-6xl mx-auto px-6 pt-16 scroll-mt-32">
            <SectionHeader title="SEGURANÇA" :icon="ShieldAlert" />

            <div class="info-container">
                <div class="info-text space-y-6">
                    <p v-for="(alerta, i) in alertasSeguranca" :key="i"
                        class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700">
                        {{ alerta }}
                    </p>

                    <div
                        class="mt-8 bg-brand-50 border border-brand-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                        <div class="bg-brand-100 p-3 rounded-full shrink-0">
                            <Phone class="w-6 h-6 text-brand-700" />
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-brand-800 mb-1 font-montserrat">Central de Emergência</h3>
                            <p class="text-gray-700 font-montserrat text-base">{{ emergencia.texto }}</p>
                            <p class="text-2xl font-extrabold text-brand-700 mt-2 font-montserrat tracking-wide">
                                {{ emergencia.telefone }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="divider hidden md:block"></div>

                <!-- FDS -->
                <div
                    class="flex flex-col items-center flex-1 fds-col bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 mt-8 md:mt-0">
                    <div class="bg-brand-50 p-4 rounded-full mb-4">
                        <FileText class="w-8 h-8 text-brand-600" />
                    </div>
                    <span class="mb-2 text-center text-lg font-bold text-gray-800 font-montserrat">
                        Ficha de Dados de Segurança
                    </span>
                    <p class="text-center text-sm text-gray-500 mb-6 font-montserrat px-2">
                        FDS de {{ produto.fds.label }}.
                    </p>
                    <button
                        class="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-brand-700 text-white px-8 py-3.5 rounded-full font-semibold font-montserrat tracking-wide transition-all duration-300 hover:bg-white border border-brand-700 hover:shadow-[0_8px_30px_rgb(185,28,28,0.3)] hover:-translate-y-1"
                        @click="abrirFds">
                        <span class="relative z-10 group-hover:text-brand-700">BAIXAR FDS</span>
                        <Download class="w-5 h-5 relative z-10 group-hover:text-brand-700 group-hover:animate-bounce" />
                    </button>
                </div>
            </div>

            <!-- Manuseio (somente linha soda cáustica) -->
            <template v-if="produto.seguranca === 'soda'">
                <div class="flex items-center gap-4 mb-8 mt-16">
                    <h2 class="text-2xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">
                        Manuseio do Produto
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div v-for="card in manuseioSoda" :key="card.titulo"
                        class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group">
                        <div
                            class="bg-gradient-to-br from-brand-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <component :is="iconMap[card.icon]" class="text-brand-600 w-8 h-8" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-brand-700 transition-colors">
                            {{ card.titulo }}
                        </h3>
                        <p class="text-gray-600 font-montserrat text-base leading-relaxed">{{ card.texto }}</p>
                    </div>
                </div>

                <div class="videos-wrapper mb-16" :class="{ 'flex-col': isMobile, 'flex-row': !isMobile }">
                    <template v-for="(video, i) in videosSoda" :key="video.titulo">
                        <div class="video-block">
                            <div
                                class="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full">
                                <h3 class="video-title font-montserrat font-bold text-xl text-gray-800 mb-4 text-center">
                                    {{ video.titulo }}
                                </h3>
                                <div class="video-box overflow-hidden rounded-2xl">
                                    <iframe class="video-frame w-full" :height="isMobile ? 180 : 250" :src="video.src"
                                        frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div v-if="!isMobile && i === 0" class="video-divider mx-8 my-auto h-32 w-px bg-brand-200"></div>
                    </template>
                </div>
            </template>
        </section>

        <!-- Onde Comprar -->
        <section id="onde-comprar" class="max-w-6xl mx-auto px-6 pt-4 pb-20 scroll-mt-32">
            <SectionHeader title="ONDE COMPRAR" :icon="ShoppingCart" />
            <Card class="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p class="text-gray-700 text-lg font-montserrat leading-relaxed max-w-xl">
                    Encontre {{ produto.nome }} em mercados, agropecuárias, lojas de produtos de limpeza e materiais de
                    construção em todo o Brasil.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <NuxtLink to="/onde-comprar">
                        <button
                            class="w-full sm:w-auto group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1 whitespace-nowrap">
                            <span class="relative z-10 group-hover:text-brand-700">ONDE COMPRAR</span>
                        </button>
                    </NuxtLink>
                    <a :href="linkCompra(produto.nome)" target="_blank" rel="noopener noreferrer">
                        <button
                            class="w-full sm:w-auto border-2 border-brand-700 text-brand-700 px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1 whitespace-nowrap">
                            COMPRAR PELO WHATSAPP
                        </button>
                    </a>
                </div>
            </Card>
        </section>

        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ArrowLeft, Check, FlaskConical, ShieldAlert, Phone, FileText, Download, ShoppingCart, Beaker, Shirt, Flame, Package } from 'lucide-vue-next'
import { produtos, getProdutoBySlug, emergencia, manuseioSoda, videosSoda, perigoSoda } from '../../data/produtos'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import Card from '../../components/ui/Card.vue'
import { useWhatsapp } from '../../composables/useWhatsapp'

const { linkCompra } = useWhatsapp()

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

const iconMap = { Beaker, ShieldAlert, Shirt, Flame, Package }

const alertasSeguranca = produto.seguranca === 'soda' ? perigoSoda : []

function abrirFds() {
    window.open(produto.fds.arquivo, '_blank')
}

const { isMobile } = useIsMobile()
</script>

<style scoped>
.info-container {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
}

.info-text {
    flex: 5;
}

.divider {
    width: 2px;
    height: auto;
    align-self: stretch;
    background: linear-gradient(to bottom, transparent, rgb(var(--color-brand-300)), transparent);
    border-radius: 1px;
}

.fds-col {
    flex: 3;
}

@media (max-width: 767px) {
    .info-container {
        flex-direction: column;
        align-items: stretch;
    }
}

.videos-wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
}

.video-block {
    flex: 1 1 300px;
    min-width: 260px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.video-title {
    text-align: center;
    width: 100%;
}

.video-box {
    width: 100%;
    display: flex;
    justify-content: center;
}

.video-frame {
    margin: 0 auto;
    display: block;
    border-radius: 12px;
}

@media (max-width: 767px) {
    .videos-wrapper {
        flex-direction: column !important;
        gap: 2rem;
    }

    .video-block {
        max-width: 100%;
        width: 100%;
        min-width: 0;
    }
}
</style>

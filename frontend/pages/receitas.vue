<template>
    <div class="bg-cream overflow-x-hidden">
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 font-montserrat">
            <header class="max-w-3xl mb-12 reveal-element">
                <p class="text-base md:text-lg leading-relaxed text-gray-600">
                    Encontre o passo a passo completo para preparar sabões com a Soda Cáustica Escorpião.
                </p>
            </header>

            <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <NuxtLink v-for="receita in receitas" :key="receita.slug" :to="`/receita/${receita.slug}`"
                    class="recipe-card group flex h-full flex-col reveal-element focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4"
                    :aria-label="`Ver receita: ${receita.titulo}`">
                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-200">
                        <img :src="receita.imagem" :alt="receita.alt" loading="lazy" decoding="async"
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span v-if="receita.novidade"
                            class="absolute left-3 top-3 bg-brand-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-white">
                            Novidade
                        </span>
                    </div>
                    <div class="flex min-h-32 flex-1 flex-col justify-between border border-t-0 border-gray-200 bg-white p-5 transition-colors duration-200 group-hover:border-brand-300">
                        <div>
                            <p class="text-[11px] font-bold uppercase tracking-[.14em] text-brand-700">Passo a passo</p>
                            <h2 class="mt-2 text-xl font-bold leading-tight text-gray-900">{{ receita.titulo }}</h2>
                        </div>
                        <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
                            Ver receita <ArrowUpRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </span>
                    </div>
                </NuxtLink>
            </div>

            <NuxtLink to="/info"
                class="mt-14 flex items-center justify-between border-y border-brand-200 bg-brand-50 px-5 py-5 text-brand-800 transition-colors hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4">
                <span>
                    <span class="block text-xs font-bold uppercase tracking-[.14em] text-brand-700">Segurança primeiro</span>
                    <span class="mt-1 block text-lg font-bold">Informações de manuseio</span>
                </span>
                <BookAlert class="h-6 w-6 shrink-0" aria-hidden="true" />
            </NuxtLink>
        </section>
    </div>
</template>

<script setup>
import { ArrowUpRight, BookAlert } from 'lucide-vue-next'
import { receitas } from '../data/receitas'

useSeoMeta({
    title: 'Receitas de Sabão Caseiro — Soda Cáustica Escorpião',
    description: 'Aprenda a fazer sabão em barra, sabão do Pará e sabão líquido em casa com a Soda Cáustica Escorpião. Receitas passo a passo e vídeos tutoriais.',
    ogTitle: 'Receitas de Sabão Caseiro',
    ogDescription: 'Passo a passo completo para fazer sabão caseiro com Soda Escorpião.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const siteConfig = useSiteConfig()

useBreadcrumbJsonLd([{ name: 'Receitas', path: '/receitas' }])

useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Receitas de Sabão Caseiro — Soda Cáustica Escorpião',
    description: 'Receitas passo a passo de sabão caseiro feitas com Soda Cáustica Escorpião.',
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: receitas.map((receita, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteConfig.url}/receita/${receita.slug}`,
            name: receita.titulo,
        })),
    },
})

useScrollReveal()
</script>

<style scoped>
.reveal-element { opacity: 0; transform: translateY(20px); transition: opacity .45s ease-out, transform .45s ease-out; }
.reveal-element.is-visible { opacity: 1; transform: translateY(0); }
.recipe-card { display: flex; min-width: 0; height: 100%; flex-direction: column; overflow: hidden; border-radius: 12px; transition: transform .2s ease, box-shadow .2s ease; }
.recipe-card:hover { box-shadow: 5px 5px 0 rgb(var(--color-brand-200)); transform: translate(-2px, -2px); }

@media (prefers-reduced-motion: reduce) {
    .reveal-element { opacity: 1; transform: none; transition: none; }
    .recipe-card, .recipe-card img { transition: none; }
    .recipe-card:hover { transform: none; }
}
</style>

<template>
    <div class="mt-16" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section id="history" class="max-w-4xl mx-auto px-6 pt-24 pb-24 scroll-mt-32">

            <div class="flex items-center gap-4 mb-10 reveal-element">
                <NuxtLink to="/#empresa"
                    class="transition-transform duration-300 hover:-translate-x-1 group bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-100">
                    <ChevronLeft
                        class="w-8 h-8 text-gray-500 group-hover:text-brand-700 transition-colors duration-300" />
                </NuxtLink>
                <div class="flex items-center gap-4">
                    <h1 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">NOSSA
                        HISTÓRIA</h1>
                    <BookOpenText class="text-brand-700 " stroke-width="2" :size="36" />
                </div>
            </div>

            <div
                class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 font-montserrat relative overflow-hidden reveal-scale delay-100">
                <!-- Decorative Blur -->
                <div
                    class="absolute -top-20 -right-20 w-80 h-80 bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none">
                </div>

                <div class="relative z-10 space-y-8">
                    <p class="text-gray-700 text-lg leading-relaxed reveal-element delay-200">
                        <span
                            class="text-4xl font-extrabold text-brand-700 float-left mr-3 mt-1 leading-none font-serif">A</span>
                        Soda Cáustica Escorpião nasceu na década de 70 na cidade de Vitória - Espírito Santo. Do pequeno
                        galpão no bairro de Jardim da Penha, expandimos e nos estabelecemos em nosso atual parque fabril
                        em
                        Jardim Limoeiro, na Serra. Sem perder o espírito de uma empresa familiar, mas em constante
                        aperfeiçoamento desde então, temos sido pioneiros no segmento como uma empresa comprometida com
                        a
                        qualidade e pureza da soda, com nossos parceiros de negócios em todo o Brasil e com a
                        preservação da
                        nossa identidade.
                    </p>

                    <p
                        class="text-xl font-bold text-brand-800 tracking-wide text-center italic reveal-element delay-300 py-4 my-8 border-y border-brand-100">
                        "Não temos dúvida de que as estrelas das prateleiras são os potinhos alvirrubros da Soda
                        Escorpião!"
                    </p>

                    <p
                        class="text-gray-700 text-lg leading-relaxed border-l-4 border-brand-700 pl-6 reveal-element delay-400">
                        É o nosso <strong class="text-brand-700">compromisso com a qualidade</strong> que promove a alta
                        fidelização do consumidor, nos permitindo
                        ser referência nacional. Durante quase meio século de vida, desenvolvemos um importante
                        conhecimento em nossa área de
                        atuação.
                    </p>

                    <p class="text-gray-700 text-lg leading-relaxed reveal-element delay-500">
                        Continuamos nossa busca pela excelência, qualidade e inovação, inspirados por nossas raízes
                        e comprometidos em oferecer sempre o melhor produto.
                    </p>

                    <p
                        class="text-gray-800 text-lg font-semibold leading-relaxed text-center pt-8 mt-8 border-t border-gray-100 reveal-element delay-600">
                        Agradecemos a todos que estiveram conosco nessa jornada. Seguimos firmes no propósito.
                    </p>
                </div>
            </div>

        </section>

        <!-- Dados de Confiança -->
        <section class="max-w-6xl mx-auto px-6 pb-24 scroll-mt-32">
            <div class="flex items-center gap-4 mb-10 reveal-element">
                <h2 class="text-2xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">Dados de
                    Confiança</h2>
                <ShieldCheck class="text-brand-700" stroke-width="2" :size="30" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div
                    class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 reveal-scale delay-100">
                    <CalendarDays class="text-brand-600 mb-4" :size="28" />
                    <p class="text-3xl font-extrabold text-brand-700 font-montserrat">Desde 1971</p>
                    <p class="text-gray-500 font-montserrat text-sm mt-1">Mais de 50 anos de tradição na fabricação de
                        soda cáustica.</p>
                </div>

                <div
                    class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 reveal-scale delay-200">
                    <MapPinned class="text-brand-600 mb-4" :size="28" />
                    <p class="text-3xl font-extrabold text-brand-700 font-montserrat">Brasil inteiro</p>
                    <p class="text-gray-500 font-montserrat text-sm mt-1">Rede de distribuidores atendendo todos os
                        estados do país.</p>
                </div>

                <div
                    class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 reveal-scale delay-300">
                    <UserCheck class="text-brand-600 mb-4" :size="28" />
                    <p class="text-lg font-extrabold text-brand-700 font-montserrat leading-snug">Jefferson B. Sousa
                    </p>
                    <p class="text-gray-500 font-montserrat text-sm mt-1">Responsável técnico — CRQ 21300121, 21ª
                        Região/ES.</p>
                </div>
            </div>

            <div
                class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 reveal-scale delay-400">
                <div class="flex items-center gap-3 mb-6">
                    <FileText class="text-brand-600" :size="24" />
                    <h3 class="text-lg font-bold text-gray-800 font-montserrat">Fichas de Dados de Segurança (FDS)</h3>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <a v-for="doc in fdsDocs" :key="doc.arquivo" :href="doc.arquivo" target="_blank"
                        rel="noopener noreferrer"
                        class="group flex items-center justify-between gap-3 bg-brand-50/50 hover:bg-brand-50 border border-brand-100 rounded-2xl px-5 py-4 transition-colors duration-300">
                        <span class="text-sm font-semibold text-gray-700 font-montserrat">{{ doc.label }}</span>
                        <Download
                            class="w-4 h-4 text-brand-600 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </section>

        <TeamSection />
    </div>
</template>

<script setup>
import { ChevronLeft, BookOpenText, ShieldCheck, CalendarDays, MapPinned, UserCheck, FileText, Download } from 'lucide-vue-next'
import { produtos } from '../data/produtos'

const fdsDocs = Array.from(
    new Map(produtos.map(p => [p.fds.arquivo, p.fds])).values()
)

useSeoMeta({
    title: 'Nossa História',
    description:
        'A história da Soda Cáustica Escorpião: da década de 70 em Vitória - ES ao parque fabril em Jardim Limoeiro, Serra. Meio século de tradição, qualidade e pureza.',
    ogTitle: 'Nossa História — Soda Cáustica Escorpião',
    ogDescription: 'Meio século de tradição capixaba na fabricação de soda cáustica.',
    ogType: 'article',
    ogLocale: 'pt_BR',
})

useBreadcrumbJsonLd([
    { name: 'Nossa História', path: '/nossa-historia' },
])

useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Nossa História — Soda Cáustica Escorpião',
    description:
        'A história da Soda Cáustica Escorpião: da década de 70 em Vitória - ES ao parque fabril em Jardim Limoeiro, Serra.',
    about: { '@type': 'Organization', name: 'Soda Cáustica Escorpião' },
})

useScrollReveal()
</script>

<style scoped>
/* ----------------------------------------------------
   Core Animations 
---------------------------------------------------- */

.reveal-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-element.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-scale {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-scale.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
}

/* Delay Utils */
.delay-100 {
    transition-delay: 100ms;
}

.delay-200 {
    transition-delay: 200ms;
}

.delay-300 {
    transition-delay: 300ms;
}

.delay-400 {
    transition-delay: 400ms;
}

.delay-500 {
    transition-delay: 500ms;
}

.delay-600 {
    transition-delay: 600ms;
}
</style>

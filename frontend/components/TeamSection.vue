<template>
    <section id="equipe" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6 scroll-mt-32 font-montserrat">
        <UiSectionHeader title="NOSSA EQUIPE" />

        <p class="text-gray-700 text-lg mb-12 leading-relaxed font-montserrat max-w-4xl reveal-element delay-100">
            Por trás de cada potinho alvirrubro da Soda Escorpião está uma equipe dedicada e apaixonada pelo que faz.
            Do chão de fábrica ao atendimento aos nossos parceiros em feiras e eventos por todo o Brasil, nosso time
            une experiência, cuidado e comprometimento com a qualidade que nos tornou referência nacional.
            <br /><br />
            Mais do que colaboradores, somos uma grande família que cresce e se aperfeiçoa a cada dia, mantendo viva
            a tradição capixaba iniciada em 1971.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <figure v-for="(foto, index) in fotos" :key="foto.src"
                class="reveal-scale group" :style="{ transitionDelay: `${index * 100}ms` }">
                <div class="relative overflow-hidden rounded-2xl shadow-md border border-gray-100 aspect-[4/3] bg-white group-hover:shadow-xl group-hover:shadow-brand-900/10 transition-all duration-500">
                    <img :src="foto.src" :alt="foto.alt" loading="lazy" decoding="async"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <figcaption class="mt-3 text-center text-sm font-semibold text-gray-600 group-hover:text-brand-700 transition-colors">
                    {{ foto.legenda }}
                </figcaption>
            </figure>
        </div>
    </section>
</template>

<script setup>

import equipeFeira1 from '../assets/nossa-equipe/equipe-feira-1.webp'
import equipeProducao1 from '../assets/nossa-equipe/equipe-producao-1.webp'
import equipeProducao2 from '../assets/nossa-equipe/equipe-producao-2.webp'
import equipeFeira2 from '../assets/nossa-equipe/equipe-feira-2.webp'
import equipeReuniao1 from '../assets/nossa-equipe/equipe-reuniao-1.webp'

const fotos = [
    { src: equipeFeira1, alt: 'Equipe Soda Escorpião em feira do setor', legenda: 'Em feiras e eventos do setor' },
    { src: equipeProducao1, alt: 'Equipe de produção e expedição da Soda Escorpião', legenda: 'Produção e expedição' },
    { src: equipeFeira2, alt: 'Equipe comercial da Soda Escorpião em estande', legenda: 'Equipe comercial' },
    { src: equipeProducao2, alt: 'Colaboradoras na linha de produção da Soda Escorpião', legenda: 'Linha de produção' },
    { src: equipeReuniao1, alt: 'Reunião de planejamento da equipe Soda Escorpião', legenda: 'Alinhamento e planejamento' },
]
</script>

<style scoped>
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

.delay-100 {
    transition-delay: 100ms;
}
</style>

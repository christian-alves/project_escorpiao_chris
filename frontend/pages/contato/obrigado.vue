<template>
    <div class="mt-16" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center font-montserrat">
            <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10 md:p-14">
                <div class="bg-brand-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 class="text-brand-700 w-10 h-10" />
                </div>
                <h1 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase mb-4">
                    Mensagem enviada!
                </h1>
                <p class="text-gray-700 text-lg leading-relaxed mb-10">
                    Obrigado pelo interesse em ser um revendedor da Soda Cáustica Escorpião. Nossa equipe vai analisar
                    seus dados e entrar em contato em breve.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a :href="linkRevenda()" target="_blank" rel="noopener noreferrer">
                        <button
                            class="w-full sm:w-auto group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1">
                            <span class="relative z-10 group-hover:text-brand-700">FALAR NO WHATSAPP</span>
                        </button>
                    </a>
                    <NuxtLink to="/">
                        <button
                            class="w-full sm:w-auto border-2 border-brand-700 text-brand-700 px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1">
                            VOLTAR AO INÍCIO
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
import { useWhatsapp } from '../../composables/useWhatsapp'

useSeoMeta({
    title: 'Mensagem Enviada',
    description: 'Recebemos sua solicitação de revenda. Em breve entraremos em contato.',
    robots: 'noindex, nofollow',
})

const { linkRevenda } = useWhatsapp()
</script>

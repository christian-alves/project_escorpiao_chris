<template>
    <div class="mt-16" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section id="contato" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">

            <div class="flex items-center gap-4 mb-10 reveal-element">
                <NuxtLink to="/contato"
                    class="transition-transform duration-300 hover:-translate-x-1 group bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-100">
                    <ChevronLeft
                        class="w-8 h-8 text-gray-500 group-hover:text-brand-700 transition-colors duration-300" />
                </NuxtLink>
                <div class="flex items-center gap-4">
                    <h1 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">SEJA
                        REVENDEDOR</h1>
                    <HeartHandshake class="text-brand-700" stroke-width="2" :size="isMobile ? 45 : 36" />
                </div>
            </div>

            <div class="max-w-4xl mx-auto reveal-scale delay-100">
                <form ref="formRef" @submit.prevent="sendEmail"
                    class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 font-montserrat relative overflow-hidden">

                    <!-- Decorative Element -->
                    <div
                        class="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2">
                    </div>

                    <div class="md:col-span-1 reveal-element delay-200 relative z-10">
                        <label for="nome" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Nome *</label>
                        <input id="nome" type="text" name="nome" v-model="form.nome" required autocomplete="name"
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="Seu nome completo" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-200 relative z-10">
                        <label for="telefone" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Telefone
                            *</label>
                        <input id="telefone" type="tel" name="telefone" v-model="form.telefone" required autocomplete="tel"
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="(00) 00000-0000" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-300 relative z-10">
                        <label for="empresa" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Empresa
                            *</label>
                        <input id="empresa" type="text" name="empresa" v-model="form.empresa" required autocomplete="organization"
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="Nome da sua empresa" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-300 relative z-10">
                        <label for="cidade" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Cidade /
                            Estado</label>
                        <input id="cidade" type="text" name="cidade" v-model="form.cidade" autocomplete="address-level2"
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="Ex: Serra - ES" />
                    </div>
                    <div class="md:col-span-2 reveal-element delay-400 relative z-10">
                        <label for="mensagem" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" v-model="form.mensagem" rows="4"
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800 resize-none"
                            placeholder="Como podemos ajudá-lo a se tornar um revendedor? (opcional)"></textarea>
                    </div>

                    <!-- Honeypot antispam: campo invisível, só bots preenchem.
                         Nome propositalmente incomum para não colidir com o autofill do navegador
                         (campos como "website"/"url" são frequentemente autopreenchidos mesmo fora da tela,
                         o que faria o honeypot barrar envios legítimos silenciosamente). -->
                    <div class="hp-field" aria-hidden="true">
                        <label for="hp_confirmacao_revenda">Não preencher este campo</label>
                        <input id="hp_confirmacao_revenda" type="text" name="hp_confirmacao_revenda"
                            v-model="form.hpConfirmacaoRevenda" tabindex="-1" autocomplete="off" />
                    </div>

                    <div class="md:col-span-2 reveal-element delay-500 relative z-10">
                        <label class="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" v-model="form.lgpd" required
                                class="mt-1 h-4 w-4 rounded border-gray-300 text-brand-700 focus:ring-brand-400" />
                            <span>
                                Li e concordo com a
                                <NuxtLink to="/politica-de-privacidade" class="text-brand-700 font-semibold hover:underline" target="_blank">
                                    Política de Privacidade
                                </NuxtLink>
                                e autorizo o uso dos meus dados para contato sobre revenda, conforme a LGPD. *
                            </span>
                        </label>
                    </div>

                    <div
                        class="md:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-6 mt-4 relative z-10 reveal-element delay-600">

                        <div
                            class="relative group flex items-center bg-gray-50 p-2 rounded-full border border-gray-100">
                            <CircleAlert class="h-5 w-5 text-gray-400 hover:text-brand-700 cursor-help transition-colors"
                                stroke="currentColor" />
                            <div
                                class="absolute left-10 bottom-full mb-2 w-64 text-sm bg-gray-800 text-white p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                                Todos os campos marcados com * são obrigatórios para prosseguir.
                                <svg class="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px"
                                    viewBox="0 0 255 255" xml:space="preserve">
                                    <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                </svg>
                            </div>
                        </div>

                        <button type="submit" :disabled="loading || !form.lgpd"
                            class="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgb(var(--color-brand-700)/0.25)] hover:shadow-[0_12px_25px_rgb(var(--color-brand-700)/0.4)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:hover:shadow-none min-w-[160px] flex items-center justify-center gap-3">
                            <span v-if="!loading">Enviar Mensagem</span>
                            <span v-else class="invisible">Enviar Mensagem</span>
                            <LoaderCircle v-if="loading" class="animate-spin absolute w-6 h-6" />
                        </button>

                    </div>

                    <transition name="fade">
                        <div v-if="error" role="alert"
                            class="md:col-span-2 bg-brand-50 text-brand-700 px-4 py-3 rounded-lg border border-brand-200 font-semibold mt-4 text-center">
                            Ocorreu um erro ao enviar, tente novamente mais tarde.
                        </div>
                    </transition>
                </form>

                <p class="text-center text-gray-500 font-montserrat text-sm mt-6 reveal-element delay-600">
                    Prefere falar agora?
                    <a :href="linkRevenda()" target="_blank" rel="noopener noreferrer"
                        class="text-brand-700 font-semibold hover:underline">
                        Fale com a gente pelo WhatsApp
                    </a>
                </p>
            </div>
        </section>
        <br><br><br>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronLeft, LoaderCircle, HeartHandshake, CircleAlert } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'
import { useWhatsapp } from '../../composables/useWhatsapp'

const { linkRevenda } = useWhatsapp()

useSeoMeta({
    title: 'Seja Revendedor',
    description:
        'Torne-se um revendedor da Soda Cáustica Escorpião. Junte-se à nossa rede de parceiros e ofereça a melhor soda cáustica do mercado.',
    ogTitle: 'Seja Revendedor — Soda Cáustica Escorpião',
    ogDescription: 'Junte-se à nossa rede nacional de distribuidores.',
    ogLocale: 'pt_BR',
})

const config = useRuntimeConfig()
const { isMobile } = useIsMobile()

const form = ref({
    nome: '',
    telefone: '',
    empresa: '',
    cidade: '',
    mensagem: '',
    lgpd: false,
    hpConfirmacaoRevenda: '', // honeypot antispam — deve permanecer vazio
})

const loading = ref(false)
const error = ref(false)
const formRef = ref(null)

function sendEmail() {
    // Honeypot preenchido = bot. Ignora silenciosamente sem alertar o remetente.
    if (form.value.hpConfirmacaoRevenda) {
        return
    }

    loading.value = true
    error.value = false

    emailjs.sendForm(
        config.public.emailjs.serviceId,
        config.public.emailjs.templateDealer,
        formRef.value,
        config.public.emailjs.publicKey
    ).then(() => {
        loading.value = false
        navigateTo('/contato/obrigado')
    }).catch(() => {
        loading.value = false
        error.value = true
    })
}


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

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Honeypot: fora da tela, invisível para humanos, alcançável por bots */
.hp-field {
    position: absolute;
    left: -9999px;
    top: -9999px;
    height: 0;
    overflow: hidden;
}
</style>

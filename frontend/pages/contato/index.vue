<template>
  <div style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
    <section id="contato" class="max-w-6xl mx-auto px-6 pt-12 pb-24 scroll-mt-32 font-montserrat">

      <!-- Texto -->
      <div class="reveal-element delay-100 mb-14">
        <p class="text-gray-700 text-lg mb-6 leading-relaxed relative">
          Com sólida experiência no mercado químico, entregamos um produto de alto padrão, com logística eficiente
          e atendimento personalizado, alcançando todo o território brasileiro com rapidez e segurança.
        </p>
        <p class="text-gray-700 text-lg mb-6 leading-relaxed relative">
          Nosso compromisso vai além da entrega: construímos parcerias duradouras com base na confiança, na
          excelência e no suporte contínuo, sempre prontos para atender às demandas do mercado com
          responsabilidade e eficiência.
        </p>
        <p class="text-xl font-bold text-brand-800 tracking-wide mt-8 text-center reveal-element delay-200">
          Soda Cáustica Escorpião - Tradição capixaba, presença nacional.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">

        <!-- Formulário Fale Conosco -->
        <section id="fale-conosco" aria-labelledby="fale-conosco-titulo" class="scroll-mt-32 reveal-scale delay-200">
          <form @submit.prevent="sendEmail"
            class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative overflow-hidden">

            <!-- Decorative Element -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2">
            </div>

            <header class="md:col-span-2 relative z-10">
              <h2 id="fale-conosco-titulo" class="text-2xl font-bold text-gray-800">Fale conosco</h2>
              <p class="mt-1 text-gray-500 text-base">
                Dúvidas, sugestões ou suporte? Nossa equipe de atendimento está pronta para ajudar.
              </p>
            </header>

            <div class="md:col-span-1 relative z-10">
              <label for="nome" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Nome *</label>
              <input id="nome" type="text" v-model="form.nome" required autocomplete="name"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                placeholder="Seu nome completo" />
            </div>
            <div class="md:col-span-1 relative z-10">
              <label for="email" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">E-mail *</label>
              <input id="email" type="email" v-model="form.email" required autocomplete="email"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                placeholder="seu@email.com" />
            </div>
            <div class="md:col-span-1 relative z-10">
              <label for="telefone" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Telefone *</label>
              <input id="telefone" type="tel" v-model="form.telefone" required autocomplete="tel"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                placeholder="(00) 00000-0000" />
            </div>
            <div class="md:col-span-1 relative z-10">
              <label for="empresa" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Empresa</label>
              <input id="empresa" type="text" v-model="form.empresa" autocomplete="organization"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800"
                placeholder="Opcional" />
            </div>
            <div class="md:col-span-2 relative z-10">
              <label for="mensagem" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Mensagem *</label>
              <textarea id="mensagem" v-model="form.mensagem" required rows="4"
                class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800 resize-none"
                placeholder="Escreva sua mensagem aqui..."></textarea>
            </div>

            <div class="md:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-6 mt-4 relative z-10">

              <div class="relative group flex items-center bg-gray-50 p-2 rounded-full border border-gray-100">
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

              <button type="submit" :disabled="loading"
                class="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgb(var(--color-brand-700)/0.25)] hover:shadow-[0_12px_25px_rgb(var(--color-brand-700)/0.4)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:hover:shadow-none min-w-[160px] flex items-center justify-center gap-3">
                <span v-if="!loading">Enviar Mensagem</span>
                <span v-else class="invisible">Enviar Mensagem</span>
                <LoaderCircle v-if="loading" class="animate-spin absolute w-6 h-6" />
              </button>

            </div>

            <transition name="fade">
              <div v-if="success" role="status" aria-live="polite"
                class="md:col-span-2 bg-green-50 text-green-700 px-4 py-3 rounded-lg border border-green-200 font-semibold mt-4 text-center">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            </transition>
            <transition name="fade">
              <div v-if="error" role="alert"
                class="md:col-span-2 bg-brand-50 text-brand-700 px-4 py-3 rounded-lg border border-brand-200 font-semibold mt-4 text-center">
                Ocorreu um erro ao enviar, tente novamente mais tarde.
              </div>
            </transition>
          </form>
        </section>

        <!-- Seja Revendedor -->
        <aside class="lg:sticky lg:top-32">
          <NuxtLink to="/contato/revendedor" class="group outline-none block focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4 focus-visible:ring-offset-cream rounded-3xl">
            <div
              class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgb(var(--color-brand-700)/0.08)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center reveal-scale delay-300 relative overflow-hidden">
              <!-- Decorativo -->
              <div
                class="absolute -top-10 -right-10 w-32 h-32 bg-brand-50 rounded-full blur-2xl opacity-50 group-hover:bg-brand-100 transition-colors duration-500">
              </div>

              <div
                class="bg-gradient-to-br from-brand-50 to-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Store class="text-brand-600 w-10 h-10 group-hover:text-brand-700 transition-colors" />
              </div>

              <h2 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-700 transition-colors relative z-10">
                Seja Revendedor</h2>
              <p class="text-gray-500 text-base mb-8 relative z-10">
                Junte-se à nossa rede de parceiros e ofereça a melhor soda cáustica do mercado em seu estabelecimento.
              </p>

              <span
                class="mt-auto relative z-10 w-full flex justify-center items-center gap-2 bg-brand-50 text-brand-700 font-bold py-3 px-6 rounded-full group-hover:bg-brand-700 group-hover:text-white transition-colors duration-300">
                Quero Revender
              </span>
            </div>
          </NuxtLink>
        </aside>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Store, LoaderCircle, CircleAlert } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

useSeoMeta({
  title: 'Contato',
  description:
    'Fale com a Soda Cáustica Escorpião: envie sua mensagem pelo formulário ou seja um revendedor. Tradição capixaba, presença nacional.',
  ogTitle: 'Contato — Soda Cáustica Escorpião',
  ogDescription: 'Envie sua mensagem ou seja revendedor. Atendimento em todo o Brasil.',
  ogType: 'website',
  ogLocale: 'pt_BR',
})

const config = useRuntimeConfig()

const form = ref({
  nome: '',
  email: '',
  telefone: '',
  empresa: '',
  mensagem: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

function sendEmail() {
  loading.value = true
  success.value = false
  error.value = false

  // Prepara os dados com tratamento para empresa
  const formData = {
    ...form.value,
    empresa: form.value.empresa || 'Sem empresa' // Tratamento para empresa vazia
  }

  emailjs.send(
    config.public.emailjs.serviceId,
    config.public.emailjs.templateContact,
    formData,
    config.public.emailjs.publicKey
  ).then(() => {
    loading.value = false
    success.value = true

    // Limpa o formulário
    form.value = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: ''
    }

    // Limpa a mensagem de sucesso após 5 segundos
    setTimeout(() => success.value = false, 5000)
  }).catch((err) => {
    console.error('Erro no envio:', err)
    loading.value = false
    error.value = true
  })
}

useBreadcrumbJsonLd([
  { name: 'Contato', path: '/contato' },
])

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato — Soda Cáustica Escorpião',
  description:
    'Fale com a Soda Cáustica Escorpião: envie sua mensagem pelo formulário ou seja um revendedor.',
})

useScrollReveal()

</script>

<style scoped>
/* ----------------------------------------------------
   Core Animations
---------------------------------------------------- */

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

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

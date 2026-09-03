<template>
  <div class="mt-16 min-h-screen overflow-x-hidden" style="background-color: rgb(var(--color-cream));">

    <!-- ===================== HERO ===================== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-darker">
      <div class="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full opacity-[0.07] bg-accent-glow"></div>
      <div class="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-[0.07] bg-white"></div>
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 36px 36px;"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-32 text-center">

        <div class="flex justify-center mb-8 hero-fade-in" style="animation-delay: 0.1s;">
          <span class="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full font-montserrat bg-white/10 text-white border border-white/20">
            <FlaskConical class="w-3.5 h-3.5" />
            Linha Principal
          </span>
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tight text-white mb-5 leading-none hero-fade-in" style="animation-delay: 0.2s;">
          SODA <span class="text-brand-300">CÁUSTICA</span>
        </h1>

        <p class="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-montserrat leading-relaxed mb-14 hero-fade-in" style="animation-delay: 0.35s;">
          Referência nacional em soda cáustica, com 98% de pureza. Tradição, qualidade e agilidade para distribuidores em todo o Brasil.
        </p>

        <div class="flex flex-wrap justify-center gap-12 md:gap-24 hero-fade-in" style="animation-delay: 0.5s;">
          <div class="flex flex-col items-center">
            <span class="text-4xl font-extrabold font-montserrat text-brand-300">98%</span>
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase mt-2">Pureza</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-extrabold font-montserrat text-white">3</span>
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase mt-2">Formatos</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-extrabold font-montserrat text-brand-300">50+</span>
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase mt-2">Anos de tradição</span>
          </div>
        </div>

        <div class="flex justify-center mt-16 hero-fade-in" style="animation-delay: 0.7s;">
          <div class="scroll-hint flex flex-col items-center gap-2 opacity-50">
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase">Explore</span>
            <div class="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" class="w-full h-16 md:h-24" preserveAspectRatio="none">
          <path d="M0,60 Q360,100 720,70 Q1080,40 1440,80 L1440,100 L0,100 Z" fill="rgb(var(--color-cream))" />
        </svg>
      </div>
    </section>

    <!-- ===================== INTRO ===================== -->
    <section class="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div class="reveal-element">
          <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-3">Sobre a Linha</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-800 font-montserrat tracking-tight mb-6">
            Tradição capixaba,<br>presença nacional
          </h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed font-montserrat pl-6 border-l-4 border-brand-700 mb-5">
            A soda cáustica em escamas é obtida a partir do processo de evaporação da soda cáustica líquida, da fusão do produto anidro e do processo de escamação, com concentração média de 98% de hidróxido de sódio em peso.
          </p>
          <p class="text-gray-500 text-base leading-relaxed font-montserrat pl-6 border-l-4 border-brand-300">
            Utilizada na fabricação de sabões e detergentes, no tratamento de superfícies metálicas, na mercerização de têxteis, na regeneração de resinas de troca iônica e na correção de pH em processos industriais de alimentos, álcool e farmácia.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 reveal-scale delay-200">
          <div class="rounded-2xl p-5 border border-brand-100 bg-brand-50/50 font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-brand-100">
              <BadgeCheck class="w-5 h-5 text-brand-700" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">98% de Pureza</p>
            <p class="text-xs text-gray-500 leading-relaxed">Padrão de qualidade constante em todos os lotes</p>
          </div>

          <div class="rounded-2xl p-5 border border-accent-100 bg-accent-50/60 font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-accent-100">
              <Factory class="w-5 h-5 text-accent-700" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Uso Industrial</p>
            <p class="text-xs text-gray-500 leading-relaxed">Versátil para diversos processos industriais</p>
          </div>

          <div class="rounded-2xl p-5 border border-brand-100 bg-brand-50/50 font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-brand-100">
              <Truck class="w-5 h-5 text-brand-700" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Agilidade</p>
            <p class="text-xs text-gray-500 leading-relaxed">Logística eficiente para todo o Brasil</p>
          </div>

          <div class="rounded-2xl p-5 border border-accent-100 bg-accent-50/60 font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-accent-100">
              <ShieldCheck class="w-5 h-5 text-accent-700" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Garantia</p>
            <p class="text-xs text-gray-500 leading-relaxed">Mais de 50 anos de tradição capixaba</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== PRODUTOS ===================== -->
    <section class="py-12 pb-28 bg-gradient-to-b from-cream to-cream-dark">
      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-16 reveal-element">
          <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-3">Conheça</p>
          <h2 class="text-3xl font-extrabold text-brand-800 font-montserrat tracking-tight">Nossos Produtos</h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-700 to-accent-500"></div>
        </div>

        <div v-for="(produto, i) in sodaProdutos" :key="produto.slug" class="reveal-element mb-16 last:mb-0">
          <div class="relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_8px_40px_rgb(var(--color-brand-700)/0.08)] border border-brand-100">
            <div class="absolute top-0 left-0 w-2/3 h-[3px] bg-gradient-to-r from-brand-700 via-accent-500 to-transparent"></div>

            <div class="px-8 py-12 md:px-14 md:py-14">
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div class="flex items-center gap-4">
                  <div class="rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0 bg-gradient-to-br from-brand-700 to-brand-900">
                    <FlaskConical class="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-0.5">Linha Principal</p>
                    <h3 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight">{{ produto.nome }}</h3>
                  </div>
                </div>
              </div>

              <div class="h-px mb-10 bg-gradient-to-r from-brand-300 via-accent-200 to-transparent opacity-60"></div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                :class="i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''">

                <div class="flex justify-center reveal-scale delay-100">
                  <NuxtLink :to="`/produto/${produto.slug}`" class="relative group block select-none">
                    <div class="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                      style="background: radial-gradient(circle, rgb(var(--color-brand-400)) 40%, rgb(var(--color-brand-700)) 100%);"></div>
                    <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async"
                      class="relative z-10 object-contain w-56 md:w-72 h-auto filter drop-shadow-[0_20px_40px_rgb(var(--color-brand-700)/0.18)] group-hover:drop-shadow-[0_30px_50px_rgb(var(--color-brand-700)/0.32)] transition-all duration-500 group-hover:-translate-y-4" />
                  </NuxtLink>
                </div>

                <div class="reveal-element delay-200">
                  <p class="text-gray-700 text-base leading-relaxed font-montserrat pl-6 border-l-4 border-brand-700 mb-8">
                    {{ produto.resumo }}
                  </p>

                  <div class="mb-8">
                    <p class="text-xs font-bold tracking-widest text-brand-700 uppercase font-montserrat mb-4">Aplicações</p>
                    <ul class="space-y-3">
                      <li v-for="(uso, idx) in produto.usos" :key="idx" class="flex items-start gap-3">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-50">
                          <Check class="w-3.5 h-3.5 text-brand-700" />
                        </div>
                        <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ uso }}</p>
                      </li>
                    </ul>
                  </div>

                  <NuxtLink :to="`/produto/${produto.slug}`"
                    class="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900 hover:underline font-montserrat tracking-wide">
                    Ver ficha técnica completa <ArrowRight class="w-4 h-4" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== SEGURANÇA / DIFERENCIAIS ===================== -->
    <section class="relative overflow-hidden py-28 bg-gradient-to-br from-brand-dark to-brand-darker">
      <div class="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" class="w-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,80 720,50 Q1080,20 1440,60 L1440,0 L0,0 Z" fill="rgb(var(--color-cream-dark))" />
        </svg>
      </div>

      <div class="absolute -top-16 right-0 w-80 h-80 rounded-full opacity-[0.06] bg-accent-glow"></div>
      <div class="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-[0.06] bg-white"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 pt-6">
        <div class="text-center mb-16 reveal-element">
          <p class="text-xs font-bold tracking-widest text-brand-300 uppercase font-montserrat mb-3">Diferenciais</p>
          <h2 class="text-3xl font-extrabold font-montserrat tracking-tight text-white">Por que escolher a Soda Cáustica Escorpião?</h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-400 to-accent-glow"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(diff, i) in diferenciais" :key="i"
            class="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element hover:-translate-y-2 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/30"
            :style="{ transitionDelay: `${i * 120}ms` }">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-white/10">
              <component :is="diff.icon" class="w-8 h-8 text-brand-300" />
            </div>
            <h3 class="text-lg font-bold text-white font-montserrat mb-3">{{ diff.title }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed font-montserrat">{{ diff.desc }}</p>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" class="w-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,80 L0,80 Z" fill="rgb(var(--color-cream))" />
        </svg>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="py-28" style="background-color: rgb(var(--color-cream));">
      <div class="max-w-3xl mx-auto px-6 text-center reveal-element">
        <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-3">Interessado?</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-800 font-montserrat tracking-tight mb-5">
          Saiba onde encontrar
        </h2>
        <p class="text-gray-500 font-montserrat text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Entre em contato conosco ou localize nossos distribuidores para adquirir a Soda Cáustica Escorpião.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/onde-comprar">
            <button
              class="w-full sm:w-auto group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1">
              <span class="relative z-10 group-hover:text-brand-700">ONDE COMPRAR</span>
            </button>
          </NuxtLink>
          <a :href="linkCompra()" target="_blank" rel="noopener noreferrer">
            <button
              class="w-full sm:w-auto border-2 border-brand-700 text-brand-700 px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1">
              COMPRAR PELO WHATSAPP
            </button>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { FlaskConical, BadgeCheck, Factory, Truck, ShieldCheck, Check, ArrowRight, Award, Recycle } from 'lucide-vue-next'
import { produtos } from '../data/produtos'
import { useWhatsapp } from '../composables/useWhatsapp'

useSeoMeta({
  title: 'Soda Cáustica — Linha Principal | Soda Cáustica Escorpião',
  description:
    'Conheça a linha principal da Soda Cáustica Escorpião: escamas 500g, 1kg e soda cáustica líquida, com 98% de pureza e tradição de mais de 50 anos.',
  ogTitle: 'Soda Cáustica Escorpião — Linha Principal',
  ogDescription: 'Referência nacional em soda cáustica: tradição, qualidade e agilidade.',
  ogType: 'website',
  ogLocale: 'pt_BR',
})

const sodaProdutos = produtos.filter(p => p.categoria === 'soda')
const { linkCompra } = useWhatsapp()

const diferenciais = [
  {
    title: 'Tradição Capixaba',
    desc: 'Mais de 50 anos de experiência no mercado químico, com atendimento personalizado e logística eficiente.',
    icon: Award,
  },
  {
    title: 'Pureza Garantida',
    desc: 'Concentração média de 98% de hidróxido de sódio, com qualidade constante em todos os lotes produzidos.',
    icon: Recycle,
  },
  {
    title: 'Segurança em Primeiro Lugar',
    desc: 'Fichas de segurança, central de emergência 0800 e orientações completas de manuseio para cada produto.',
    icon: ShieldCheck,
  },
]

useScrollReveal()
</script>

<style scoped>
.hero-fade-in {
  opacity: 0;
  transform: translateY(24px);
  animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes heroFadeIn {
  to { opacity: 1; transform: translateY(0); }
}

.reveal-element {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-element.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.94);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-scale.is-visible {
  opacity: 1;
  transform: scale(1);
}

.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
</style>

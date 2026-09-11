<template>
  <div class="min-h-screen" style="background-color: rgb(var(--color-casa-surface)); overflow-x: hidden;">

    <!-- ===================== INTRO ===================== -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Texto -->
        <div class="reveal-element">
          <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: rgb(var(--color-casa-blue));">Sobre a Linha</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-montserrat tracking-tight mb-6" style="color: rgb(var(--color-casa-primary));">
            Uma nova era<br>para o seu lar
          </h2>
          <p class="text-gray-600 text-base md:text-lg leading-relaxed font-montserrat mb-5">
            A linha Escorpião Casa nasce da tradição de mais de 50 anos da Soda Escorpião na indústria química, trazendo agora produtos pensados especialmente para o ambiente doméstico.
          </p>
          <p class="text-gray-500 text-base leading-relaxed font-montserrat">
            Com formulações de alta pureza e eficácia comprovada, nossos produtos são seguros, econômicos e sustentáveis — perfeitos para quem busca o melhor para sua casa.
          </p>
        </div>

        <!-- Feature cards 2x2 -->
        <div class="grid grid-cols-2 gap-4 reveal-scale delay-200">
          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgb(var(--color-casa-primary)/0.04); border-color: rgb(var(--color-casa-primary)/0.12);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgb(var(--color-casa-primary)/0.1);">
              <ShieldCheck class="w-5 h-5" style="color: rgb(var(--color-casa-primary));" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Alta Pureza</p>
            <p class="text-xs text-gray-500 leading-relaxed">Formulação com padrão industrial adaptada ao lar</p>
          </div>

          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgb(var(--color-casa-blue)/0.06); border-color: rgb(var(--color-casa-blue)/0.2);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgb(var(--color-casa-blue)/0.15);">
              <Droplets class="w-5 h-5" style="color: rgb(var(--color-casa-blue));" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Multiuso</p>
            <p class="text-xs text-gray-500 leading-relaxed">Versátil para diversas aplicações no lar</p>
          </div>

          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgb(var(--color-casa-green)/0.06); border-color: rgb(var(--color-casa-green)/0.2);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgb(var(--color-casa-green)/0.15);">
              <Leaf class="w-5 h-5" style="color: rgb(var(--color-casa-green));" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Sustentável</p>
            <p class="text-xs text-gray-500 leading-relaxed">Fórmulas eco-friendly que respeitam o meio ambiente</p>
          </div>

          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgb(var(--color-casa-primary)/0.04); border-color: rgb(var(--color-casa-primary)/0.12);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgb(var(--color-casa-primary)/0.1);">
              <BadgeCheck class="w-5 h-5" style="color: rgb(var(--color-casa-primary));" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Garantia</p>
            <p class="text-xs text-gray-500 leading-relaxed">Qualidade certificada da Soda Escorpião</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== PRODUTOS ===================== -->
    <section class="py-12 pb-28" style="background: linear-gradient(180deg, rgb(var(--color-casa-surface)) 0%, rgb(var(--color-casa-surface-dark)) 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Cabeçalho da seção -->
        <div class="text-center mb-16 reveal-element">
          <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: rgb(var(--color-casa-blue));">Conheça</p>
          <h2 class="text-3xl font-extrabold font-montserrat tracking-tight" style="color: rgb(var(--color-casa-primary));">Nossos Produtos</h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full" style="background: linear-gradient(90deg, rgb(var(--color-casa-primary)), rgb(var(--color-casa-blue)));"></div>
        </div>

        <!-- ---- PERCARBONATO DE SÓDIO ---- -->
        <div class="reveal-element mb-16">
          <div class="relative rounded overflow-hidden bg-white shadow-[0_8px_40px_rgb(var(--color-casa-primary)/0.08)] border" style="border-color: rgb(var(--color-casa-primary)/0.1);">
            <div class="absolute top-0 left-0 w-2/3 h-[3px]" style="background: linear-gradient(90deg, rgb(var(--color-casa-primary)), rgb(var(--color-casa-blue)), transparent);"></div>

            <div class="px-8 py-12 md:px-14 md:py-14">
              <!-- Header do produto -->
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div class="flex items-center gap-4">
                  <div class="rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0"
                    style="background: linear-gradient(135deg, rgb(var(--color-casa-primary)), rgb(var(--color-casa-primary-dark)));">
                    <Sparkles class="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-0.5" style="color: rgb(var(--color-casa-blue));">Linha Casa</p>
                    <h3 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight">Percarbonato de Sódio</h3>
                  </div>
                </div>
                <div class="md:ml-auto flex flex-wrap gap-2">
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgb(var(--color-casa-green)/0.12); color: rgb(var(--color-casa-green-dark)); border: 1px solid rgb(var(--color-casa-green)/0.3);">
                    <Leaf class="w-3 h-3" /> Eco Friendly
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgb(var(--color-casa-blue)/0.12); color: rgb(var(--color-casa-blue-dark)); border: 1px solid rgb(var(--color-casa-blue)/0.3);">
                    <Droplets class="w-3 h-3" /> Sem Cloro
                  </span>
                </div>
              </div>

              <!-- Divisor -->
              <div class="h-px mb-10" style="background: linear-gradient(to right, rgb(var(--color-casa-primary)), rgb(var(--color-casa-blue)), transparent); opacity: 0.18;"></div>

              <!-- Conteúdo -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <!-- Imagem -->
                <div class="flex justify-center reveal-scale delay-100">
                  <NuxtLink to="/produto/percarbonato-de-sodio" class="relative group block select-none">
                    <div class="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                      style="background: radial-gradient(circle, rgb(var(--color-casa-blue)) 40%, rgb(var(--color-casa-primary)) 100%);"></div>
                    <img :src="percarbonato" alt="Percarbonato de Sódio" loading="lazy" decoding="async"
                      class="relative z-10 object-contain w-56 md:w-72 h-auto filter drop-shadow-[0_20px_40px_rgb(var(--color-casa-primary)/0.18)] group-hover:drop-shadow-[0_30px_50px_rgb(var(--color-casa-primary)/0.32)] transition-all duration-500 group-hover:-translate-y-4" />
                  </NuxtLink>
                </div>

                <!-- Texto + detalhes -->
                <div class="reveal-element delay-200">
                  <p class="text-gray-700 text-base leading-relaxed font-montserrat mb-8">
                    O Percarbonato de Sódio é um agente branqueador à base de oxigênio ativo que libera peróxido de hidrogênio ao entrar em contato com a água. Altamente eficaz para alvejamento e desinfecção, sem uso de cloro.
                  </p>

                  <div class="mb-8">
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-4" style="color: rgb(var(--color-casa-primary));">Aplicações</p>
                    <ul class="space-y-3">
                      <li v-for="(use, i) in percarbonateUses" :key="i" class="flex items-start gap-3">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style="background: rgb(var(--color-casa-primary)/0.09);">
                          <Check class="w-3.5 h-3.5" style="color: rgb(var(--color-casa-primary));" />
                        </div>
                        <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ use }}</p>
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2 mb-8">
                    <span v-for="chip in percarbonateChips" :key="chip"
                      class="text-xs font-semibold px-3 py-1.5 rounded-full font-montserrat transition-all duration-300 hover:scale-105 cursor-default"
                      style="background: rgb(var(--color-casa-blue)/0.12); color: rgb(var(--color-casa-primary)); border: 1px solid rgb(var(--color-casa-primary)/0.15);">
                      {{ chip }}
                    </span>
                  </div>

                  <NuxtLink to="/produto/percarbonato-de-sodio"
                    class="inline-flex items-center gap-2 text-sm font-bold hover:underline font-montserrat tracking-wide"
                    style="color: rgb(var(--color-casa-primary));">
                    Ver ficha técnica completa <ArrowRight class="w-4 h-4" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ---- BICARBONATO DE SÓDIO ---- -->
        <div class="reveal-element">
          <div class="relative rounded overflow-hidden bg-white shadow-[0_8px_40px_rgb(var(--color-casa-primary)/0.08)] border" style="border-color: rgb(var(--color-casa-green)/0.15);">
            <div class="absolute top-0 left-0 w-2/3 h-[3px]" style="background: linear-gradient(90deg, rgb(var(--color-casa-green)), rgb(var(--color-casa-blue)), transparent);"></div>

            <div class="px-8 py-12 md:px-14 md:py-14">
              <!-- Header do produto -->
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div class="flex items-center gap-4">
                  <div class="rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0"
                    style="background: linear-gradient(135deg, rgb(var(--color-casa-green)), rgb(var(--color-casa-green-dark)));">
                    <Leaf class="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-0.5" style="color: rgb(var(--color-casa-green));">Linha Casa</p>
                    <h3 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight">Bicarbonato de Sódio</h3>
                  </div>
                </div>
                <div class="md:ml-auto flex flex-wrap gap-2">
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgb(var(--color-casa-primary)/0.08); color: rgb(var(--color-casa-primary)); border: 1px solid rgb(var(--color-casa-primary)/0.18);">
                    <Star class="w-3 h-3" /> Multiuso
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgb(var(--color-casa-green)/0.12); color: rgb(var(--color-casa-green-dark)); border: 1px solid rgb(var(--color-casa-green)/0.3);">
                    <ShieldCheck class="w-3 h-3" /> Não Tóxico
                  </span>
                </div>
              </div>

              <!-- Divisor -->
              <div class="h-px mb-10" style="background: linear-gradient(to right, rgb(var(--color-casa-green)), rgb(var(--color-casa-blue)), transparent); opacity: 0.25;"></div>

              <!-- Conteúdo invertido no desktop -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <!-- Texto + detalhes (primeiro no mobile, segundo no desktop) -->
                <div class="reveal-element delay-100 lg:order-1 order-2">
                  <p class="text-gray-700 text-base leading-relaxed font-montserrat mb-8">
                    O Bicarbonato de Sódio é um produto extremamente versátil, com propriedades limpantes, desodorizantes e abrasivas suaves. Amplamente reconhecido pela eficácia e segurança, é ideal para uso doméstico em múltiplas situações.
                  </p>

                  <div class="mb-8">
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-4" style="color: rgb(var(--color-casa-green));">Aplicações</p>
                    <ul class="space-y-3">
                      <li v-for="(use, i) in bicarbonateUses" :key="i" class="flex items-start gap-3">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style="background: rgb(var(--color-casa-green)/0.15);">
                          <Check class="w-3.5 h-3.5" style="color: rgb(var(--color-casa-green));" />
                        </div>
                        <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ use }}</p>
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2 mb-8">
                    <span v-for="chip in bicarbonateChips" :key="chip"
                      class="text-xs font-semibold px-3 py-1.5 rounded-full font-montserrat transition-all duration-300 hover:scale-105 cursor-default"
                      style="background: rgb(var(--color-casa-green)/0.1); color: rgb(var(--color-casa-green-dark)); border: 1px solid rgb(var(--color-casa-green)/0.25);">
                      {{ chip }}
                    </span>
                  </div>

                  <NuxtLink to="/produto/bicarbonato-de-sodio"
                    class="inline-flex items-center gap-2 text-sm font-bold hover:underline font-montserrat tracking-wide"
                    style="color: rgb(var(--color-casa-green-dark));">
                    Ver ficha técnica completa <ArrowRight class="w-4 h-4" />
                  </NuxtLink>
                </div>

                <!-- Imagem -->
                <div class="flex justify-center reveal-scale delay-200 lg:order-2 order-1">
                  <NuxtLink to="/produto/bicarbonato-de-sodio" class="relative group block select-none">
                    <div class="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                      style="background: radial-gradient(circle, rgb(var(--color-casa-green)) 40%, rgb(var(--color-casa-blue)) 100%);"></div>
                    <img :src="bicarbonato" alt="Bicarbonato de Sódio" loading="lazy" decoding="async"
                      class="relative z-10 object-contain w-56 md:w-72 h-auto filter drop-shadow-[0_20px_40px_rgb(var(--color-casa-green)/0.18)] group-hover:drop-shadow-[0_30px_50px_rgb(var(--color-casa-green)/0.32)] transition-all duration-500 group-hover:-translate-y-4" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== DIFERENCIAIS ===================== -->
    <section class="relative overflow-hidden py-28" style="background: linear-gradient(135deg, rgb(var(--color-casa-primary)) 0%, rgb(var(--color-casa-primary-dark)) 100%);">
      <!-- Waves top -->
      <div class="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" class="w-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,80 720,50 Q1080,20 1440,60 L1440,0 L0,0 Z" fill="rgb(var(--color-casa-surface-dark))" />
        </svg>
      </div>

      <div class="absolute -top-16 right-0 w-80 h-80 rounded-full opacity-[0.06]" style="background: rgb(var(--color-casa-blue));"></div>
      <div class="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-[0.06]" style="background: rgb(var(--color-casa-green));"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <!-- Cabeçalho -->
        <div class="text-center mb-16 reveal-element">
          <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: rgb(var(--color-casa-blue));">Diferenciais</p>
          <h2 class="text-3xl font-extrabold font-montserrat tracking-tight text-white">Por que escolher a linha Escorpião Casa?</h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full" style="background: linear-gradient(90deg, rgb(var(--color-casa-blue)), rgb(var(--color-casa-green)));"></div>
        </div>

        <!-- Cards de benefícios -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(benefit, i) in benefits" :key="i"
            class="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element hover:-translate-y-2 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/30"
            :style="{ transitionDelay: `${i * 120}ms` }">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" :style="benefit.iconBg">
              <component :is="benefit.icon" class="w-8 h-8" :style="{ color: benefit.iconColor }" />
            </div>
            <h3 class="text-lg font-bold text-white font-montserrat mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed font-montserrat">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Wave inferior -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" class="w-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,80 L0,80 Z" fill="rgb(var(--color-casa-surface))" />
        </svg>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="py-28" style="background-color: rgb(var(--color-casa-surface));">
      <div class="max-w-3xl mx-auto px-6 text-center reveal-element">
        <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: rgb(var(--color-casa-blue));">Interessado?</p>
        <h2 class="text-3xl md:text-4xl font-extrabold font-montserrat tracking-tight mb-5" style="color: rgb(var(--color-casa-primary));">
          Saiba onde encontrar
        </h2>
        <p class="text-gray-500 font-montserrat text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Entre em contato conosco ou localize nossos distribuidores para adquirir os produtos da linha Escorpião Casa.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contato">
            <button class="px-10 py-4 rounded-full font-bold font-montserrat tracking-wide text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgb(var(--color-casa-primary)/0.35)] hover:-translate-y-1 w-full sm:w-auto"
              style="background: linear-gradient(135deg, rgb(var(--color-casa-primary)), rgb(var(--color-casa-primary-dark)));">
              ENTRE EM CONTATO
            </button>
          </NuxtLink>
          <a :href="linkCompra()" target="_blank" rel="noopener noreferrer">
            <button class="px-10 py-4 rounded-full font-bold font-montserrat tracking-wide transition-all duration-300 hover:-translate-y-1 border-2 w-full sm:w-auto"
              style="color: rgb(var(--color-casa-primary)); border-color: rgb(var(--color-casa-primary)); background: transparent;">
              ONDE COMPRAR
            </button>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Sparkles, Leaf, ShieldCheck, Droplets, BadgeCheck, Check, Star, Recycle, Award, ArrowRight } from 'lucide-vue-next'

import percarbonato from '../assets/produto/novo4.png'
import bicarbonato from '../assets/produto/novo5.png'
import { useWhatsapp } from '../composables/useWhatsapp'

const { linkCompra } = useWhatsapp()

useSeoMeta({
  title: 'Escorpião Casa — Linha de produtos para o lar',
  description:
    'Linha Escorpião Casa: Percarbonato de Sódio e Bicarbonato de Sódio. Produtos de alta pureza, eco-friendly e seguros para limpeza e uso doméstico.',
  ogTitle: 'Escorpião Casa — Nova linha para o seu lar',
  ogDescription: 'Percarbonato e Bicarbonato de Sódio: eficazes, seguros e sustentáveis.',
  ogType: 'website',
  ogLocale: 'pt_BR',
})

const percarbonateUses = [
  'Alvejamento de roupas brancas e coloridas sem dano às fibras',
  'Desinfecção e higienização de superfícies domésticas',
  'Remoção de manchas difíceis em tecidos e estofados',
  'Limpeza de banheiros, pias e rejuntes',
  'Higienização de frutas e verduras',
]

const percarbonateChips = ['Sem cloro', 'Biodegradável', 'Alta eficácia', 'Seguro para cores', 'pH controlado']

const bicarbonateUses = [
  'Limpeza suave de superfícies delicadas na cozinha',
  'Neutralização de odores em geladeiras e armários',
  'Higiene pessoal como esfoliante natural suave',
  'Uso culinário como fermento em receitas domésticas',
  'Desodorização de tapetes, sofás e calçados',
]

const bicarbonateChips = ['Multiuso', 'Não tóxico', 'Natural', 'Versátil', 'Econômico']

const benefits = [
  {
    title: 'Qualidade Garantida',
    desc: 'Mais de 50 anos de tradição na indústria química brasileira, agora chegando ao seu lar com a mesma excelência.',
    icon: Award,
    iconBg: 'background: rgb(var(--color-casa-blue)/0.2);',
    iconColor: 'rgb(var(--color-casa-blue))',
  },
  {
    title: 'Compromisso Sustentável',
    desc: 'Formulações eco-friendly que minimizam o impacto ambiental sem abrir mão da máxima eficácia.',
    icon: Recycle,
    iconBg: 'background: rgb(var(--color-casa-green)/0.2);',
    iconColor: 'rgb(var(--color-casa-green))',
  },
  {
    title: 'Segurança em Primeiro Lugar',
    desc: 'Desenvolvidos com rigor técnico e seguros para o uso doméstico, com instruções claras de aplicação.',
    icon: ShieldCheck,
    iconBg: 'background: rgba(255,255,255,0.12);',
    iconColor: 'white',
  },
]

const siteConfig = useSiteConfig()

useBreadcrumbJsonLd([
  { name: 'Escorpião Casa', path: '/linha/escorpiao-casa' },
])

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Escorpião Casa — Linha de produtos para o lar',
  description:
    'Linha Escorpião Casa: Percarbonato de Sódio e Bicarbonato de Sódio. Produtos de alta pureza, eco-friendly e seguros para limpeza e uso doméstico.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, url: `${siteConfig.url}/produto/percarbonato-de-sodio`, name: 'Percarbonato de Sódio' },
      { '@type': 'ListItem', position: 2, url: `${siteConfig.url}/produto/bicarbonato-de-sodio`, name: 'Bicarbonato de Sódio' },
    ],
  },
})

useScrollReveal()
</script>

<style scoped>
/* === SCROLL REVEAL === */
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

.reveal-left {
  opacity: 0;
  transform: translateX(-28px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* === DELAYS === */
.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
.delay-300 { transition-delay: 0.3s; }
.delay-400 { transition-delay: 0.4s; }
</style>

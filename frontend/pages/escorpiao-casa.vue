<template>
  <div class="mt-16 min-h-screen" style="background-color: #f8faff; overflow-x: hidden;">

    <!-- ===================== HERO ===================== -->
    <section class="relative overflow-hidden" style="background: linear-gradient(135deg, #213067 0%, #1a2855 55%, #0e1a3a 100%);">
      <!-- Decorativos de fundo -->
      <div class="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full opacity-[0.07]" style="background: #6ABFEB;"></div>
      <div class="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-[0.07]" style="background: #7FB14E;"></div>
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 36px 36px;"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-32 text-center">

        <!-- Badge "Nova Linha" -->
        <div class="flex justify-center mb-8 hero-fade-in" style="animation-delay: 0.1s;">
          <span class="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full font-montserrat"
            style="background: rgba(106,191,235,0.15); color: #6ABFEB; border: 1px solid rgba(106,191,235,0.35);">
            <Sparkles class="w-3.5 h-3.5" />
            Nova Linha de Produtos
          </span>
        </div>

        <!-- Título principal -->
        <h1 class="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tight text-white mb-5 leading-none hero-fade-in" style="animation-delay: 0.2s;">
          ESCORPIÃO <span style="color: #6ABFEB;">CASA</span>
        </h1>

        <!-- Subtítulo -->
        <p class="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-montserrat leading-relaxed mb-14 hero-fade-in" style="animation-delay: 0.35s;">
          Produtos de alta qualidade desenvolvidos para o lar. Eficazes, seguros e com fórmulas que respeitam você e o meio ambiente.
        </p>

        <!-- Estatísticas -->
        <div class="flex flex-wrap justify-center gap-12 md:gap-24 hero-fade-in" style="animation-delay: 0.5s;">
          <div class="flex flex-col items-center">
            <span class="text-4xl font-extrabold font-montserrat" style="color: #6ABFEB;">50+</span>
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase mt-2">Anos de tradição</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-extrabold font-montserrat text-white">2</span>
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase mt-2">Produtos lançados</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-extrabold font-montserrat" style="color: #7FB14E;">Eco</span>
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase mt-2">Friendly</span>
          </div>
        </div>

        <!-- Scroll hint -->
        <div class="flex justify-center mt-16 hero-fade-in" style="animation-delay: 0.7s;">
          <div class="scroll-hint flex flex-col items-center gap-2 opacity-50">
            <span class="text-xs text-gray-400 font-montserrat tracking-widest uppercase">Explore</span>
            <div class="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <!-- Wave inferior -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" class="w-full h-16 md:h-24" preserveAspectRatio="none">
          <path d="M0,60 Q360,100 720,70 Q1080,40 1440,80 L1440,100 L0,100 Z" fill="#f8faff" />
        </svg>
      </div>
    </section>

    <!-- ===================== INTRO ===================== -->
    <section class="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Texto -->
        <div class="reveal-element">
          <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: #6ABFEB;">Sobre a Linha</p>
          <h2 class="text-3xl md:text-4xl font-extrabold font-montserrat tracking-tight mb-6" style="color: #213067;">
            Uma nova era<br>para o seu lar
          </h2>
          <p class="text-gray-600 text-base md:text-lg leading-relaxed font-montserrat pl-6 border-l-4 mb-5" style="border-color: #213067;">
            A linha Escorpião Casa nasce da tradição de mais de 50 anos da Soda Escorpião na indústria química, trazendo agora produtos pensados especialmente para o ambiente doméstico.
          </p>
          <p class="text-gray-500 text-base leading-relaxed font-montserrat pl-6 border-l-4" style="border-color: #6ABFEB;">
            Com formulações de alta pureza e eficácia comprovada, nossos produtos são seguros, econômicos e sustentáveis — perfeitos para quem busca o melhor para sua casa.
          </p>
        </div>

        <!-- Feature cards 2x2 -->
        <div class="grid grid-cols-2 gap-4 reveal-scale delay-200">
          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgba(33,48,103,0.04); border-color: rgba(33,48,103,0.12);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgba(33,48,103,0.1);">
              <ShieldCheck class="w-5 h-5" style="color: #213067;" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Alta Pureza</p>
            <p class="text-xs text-gray-500 leading-relaxed">Formulação com padrão industrial adaptada ao lar</p>
          </div>

          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgba(106,191,235,0.06); border-color: rgba(106,191,235,0.2);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgba(106,191,235,0.15);">
              <Droplets class="w-5 h-5" style="color: #6ABFEB;" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Multiuso</p>
            <p class="text-xs text-gray-500 leading-relaxed">Versátil para diversas aplicações no lar</p>
          </div>

          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgba(127,177,78,0.06); border-color: rgba(127,177,78,0.2);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgba(127,177,78,0.15);">
              <Leaf class="w-5 h-5" style="color: #7FB14E;" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Sustentável</p>
            <p class="text-xs text-gray-500 leading-relaxed">Fórmulas eco-friendly que respeitam o meio ambiente</p>
          </div>

          <div class="rounded-2xl p-5 border font-montserrat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style="background: rgba(33,48,103,0.04); border-color: rgba(33,48,103,0.12);">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="background: rgba(33,48,103,0.1);">
              <BadgeCheck class="w-5 h-5" style="color: #213067;" />
            </div>
            <p class="font-bold text-sm text-gray-800 mb-1">Garantia</p>
            <p class="text-xs text-gray-500 leading-relaxed">Qualidade certificada da Soda Escorpião</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== PRODUTOS ===================== -->
    <section class="py-12 pb-28" style="background: linear-gradient(180deg, #f8faff 0%, #eef3fa 100%);">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Cabeçalho da seção -->
        <div class="text-center mb-16 reveal-element">
          <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: #6ABFEB;">Conheça</p>
          <h2 class="text-3xl font-extrabold font-montserrat tracking-tight" style="color: #213067;">Nossos Produtos</h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full" style="background: linear-gradient(90deg, #213067, #6ABFEB);"></div>
        </div>

        <!-- ---- PERCARBONATO DE SÓDIO ---- -->
        <div class="reveal-element mb-16">
          <div class="relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_8px_40px_rgba(33,48,103,0.08)] border" style="border-color: rgba(33,48,103,0.1);">
            <div class="absolute top-0 left-0 w-2/3 h-[3px]" style="background: linear-gradient(90deg, #213067, #6ABFEB, transparent);"></div>

            <div class="px-8 py-12 md:px-14 md:py-14">
              <!-- Header do produto -->
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div class="flex items-center gap-4">
                  <div class="rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0"
                    style="background: linear-gradient(135deg, #213067, #1a2855);">
                    <Sparkles class="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-0.5" style="color: #6ABFEB;">Linha Casa</p>
                    <h3 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight">Percarbonato de Sódio</h3>
                  </div>
                </div>
                <div class="md:ml-auto flex flex-wrap gap-2">
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgba(127,177,78,0.12); color: #5a8a34; border: 1px solid rgba(127,177,78,0.3);">
                    <Leaf class="w-3 h-3" /> Eco Friendly
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgba(106,191,235,0.12); color: #2a7fad; border: 1px solid rgba(106,191,235,0.3);">
                    <Droplets class="w-3 h-3" /> Sem Cloro
                  </span>
                </div>
              </div>

              <!-- Divisor -->
              <div class="h-px mb-10" style="background: linear-gradient(to right, #213067, #6ABFEB, transparent); opacity: 0.18;"></div>

              <!-- Conteúdo -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <!-- Imagem -->
                <div class="flex justify-center reveal-scale delay-100">
                  <div class="relative group cursor-default select-none">
                    <div class="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                      style="background: radial-gradient(circle, #6ABFEB 40%, #213067 100%);"></div>
                    <img :src="percarbonato" alt="Percarbonato de Sódio" loading="lazy" decoding="async"
                      class="relative z-10 object-contain w-56 md:w-72 h-auto filter drop-shadow-[0_20px_40px_rgba(33,48,103,0.18)] group-hover:drop-shadow-[0_30px_50px_rgba(33,48,103,0.32)] transition-all duration-500 group-hover:-translate-y-4" />
                  </div>
                </div>

                <!-- Texto + detalhes -->
                <div class="reveal-element delay-200">
                  <p class="text-gray-700 text-base leading-relaxed font-montserrat pl-6 border-l-4 mb-8" style="border-color: #213067;">
                    O Percarbonato de Sódio é um agente branqueador à base de oxigênio ativo que libera peróxido de hidrogênio ao entrar em contato com a água. Altamente eficaz para alvejamento e desinfecção, sem uso de cloro.
                  </p>

                  <div class="mb-8">
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-4" style="color: #213067;">Aplicações</p>
                    <ul class="space-y-3">
                      <li v-for="(use, i) in percarbonateUses" :key="i" class="flex items-start gap-3">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style="background: rgba(33,48,103,0.09);">
                          <Check class="w-3.5 h-3.5" style="color: #213067;" />
                        </div>
                        <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ use }}</p>
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span v-for="chip in percarbonateChips" :key="chip"
                      class="text-xs font-semibold px-3 py-1.5 rounded-full font-montserrat transition-all duration-300 hover:scale-105 cursor-default"
                      style="background: rgba(106,191,235,0.12); color: #213067; border: 1px solid rgba(33,48,103,0.15);">
                      {{ chip }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ---- BICARBONATO DE SÓDIO ---- -->
        <div class="reveal-element">
          <div class="relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_8px_40px_rgba(33,48,103,0.08)] border" style="border-color: rgba(127,177,78,0.15);">
            <div class="absolute top-0 left-0 w-2/3 h-[3px]" style="background: linear-gradient(90deg, #7FB14E, #6ABFEB, transparent);"></div>

            <div class="px-8 py-12 md:px-14 md:py-14">
              <!-- Header do produto -->
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div class="flex items-center gap-4">
                  <div class="rounded-2xl w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0"
                    style="background: linear-gradient(135deg, #7FB14E, #5a8a34);">
                    <Leaf class="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-0.5" style="color: #7FB14E;">Linha Casa</p>
                    <h3 class="text-2xl font-extrabold text-gray-800 font-montserrat tracking-tight">Bicarbonato de Sódio</h3>
                  </div>
                </div>
                <div class="md:ml-auto flex flex-wrap gap-2">
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgba(33,48,103,0.08); color: #213067; border: 1px solid rgba(33,48,103,0.18);">
                    <Star class="w-3 h-3" /> Multiuso
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-montserrat"
                    style="background: rgba(127,177,78,0.12); color: #5a8a34; border: 1px solid rgba(127,177,78,0.3);">
                    <ShieldCheck class="w-3 h-3" /> Não Tóxico
                  </span>
                </div>
              </div>

              <!-- Divisor -->
              <div class="h-px mb-10" style="background: linear-gradient(to right, #7FB14E, #6ABFEB, transparent); opacity: 0.25;"></div>

              <!-- Conteúdo invertido no desktop -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <!-- Texto + detalhes (primeiro no mobile, segundo no desktop) -->
                <div class="reveal-element delay-100 lg:order-1 order-2">
                  <p class="text-gray-700 text-base leading-relaxed font-montserrat pl-6 border-l-4 mb-8" style="border-color: #7FB14E;">
                    O Bicarbonato de Sódio é um produto extremamente versátil, com propriedades limpantes, desodorizantes e abrasivas suaves. Amplamente reconhecido pela eficácia e segurança, é ideal para uso doméstico em múltiplas situações.
                  </p>

                  <div class="mb-8">
                    <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-4" style="color: #7FB14E;">Aplicações</p>
                    <ul class="space-y-3">
                      <li v-for="(use, i) in bicarbonateUses" :key="i" class="flex items-start gap-3">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style="background: rgba(127,177,78,0.15);">
                          <Check class="w-3.5 h-3.5" style="color: #7FB14E;" />
                        </div>
                        <p class="text-sm text-gray-600 font-montserrat leading-relaxed">{{ use }}</p>
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span v-for="chip in bicarbonateChips" :key="chip"
                      class="text-xs font-semibold px-3 py-1.5 rounded-full font-montserrat transition-all duration-300 hover:scale-105 cursor-default"
                      style="background: rgba(127,177,78,0.1); color: #5a8a34; border: 1px solid rgba(127,177,78,0.25);">
                      {{ chip }}
                    </span>
                  </div>
                </div>

                <!-- Imagem -->
                <div class="flex justify-center reveal-scale delay-200 lg:order-2 order-1">
                  <div class="relative group cursor-default select-none">
                    <div class="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                      style="background: radial-gradient(circle, #7FB14E 40%, #6ABFEB 100%);"></div>
                    <img :src="bicarbonato" alt="Bicarbonato de Sódio" loading="lazy" decoding="async"
                      class="relative z-10 object-contain w-56 md:w-72 h-auto filter drop-shadow-[0_20px_40px_rgba(127,177,78,0.18)] group-hover:drop-shadow-[0_30px_50px_rgba(127,177,78,0.32)] transition-all duration-500 group-hover:-translate-y-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== DIFERENCIAIS ===================== -->
    <section class="relative overflow-hidden py-28" style="background: linear-gradient(135deg, #213067 0%, #1a2855 100%);">
      <!-- Waves top -->
      <div class="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" class="w-full" preserveAspectRatio="none">
          <path d="M0,40 Q360,80 720,50 Q1080,20 1440,60 L1440,0 L0,0 Z" fill="#eef3fa" />
        </svg>
      </div>

      <div class="absolute -top-16 right-0 w-80 h-80 rounded-full opacity-[0.06]" style="background: #6ABFEB;"></div>
      <div class="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-[0.06]" style="background: #7FB14E;"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 pt-6">
        <!-- Cabeçalho -->
        <div class="text-center mb-16 reveal-element">
          <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: #6ABFEB;">Diferenciais</p>
          <h2 class="text-3xl font-extrabold font-montserrat tracking-tight text-white">Por que escolher a linha Escorpião Casa?</h2>
          <div class="mx-auto mt-4 h-1 w-16 rounded-full" style="background: linear-gradient(90deg, #6ABFEB, #7FB14E);"></div>
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
          <path d="M0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,80 L0,80 Z" fill="#f8faff" />
        </svg>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="py-28" style="background-color: #f8faff;">
      <div class="max-w-3xl mx-auto px-6 text-center reveal-element">
        <p class="text-xs font-bold tracking-widest uppercase font-montserrat mb-3" style="color: #6ABFEB;">Interessado?</p>
        <h2 class="text-3xl md:text-4xl font-extrabold font-montserrat tracking-tight mb-5" style="color: #213067;">
          Saiba onde encontrar
        </h2>
        <p class="text-gray-500 font-montserrat text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Entre em contato conosco ou localize nossos distribuidores para adquirir os produtos da linha Escorpião Casa.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contato">
            <button class="px-10 py-4 rounded-full font-bold font-montserrat tracking-wide text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(33,48,103,0.35)] hover:-translate-y-1 w-full sm:w-auto"
              style="background: linear-gradient(135deg, #213067, #1a2855);">
              ENTRE EM CONTATO
            </button>
          </NuxtLink>
          <NuxtLink to="/#ondecomprar">
            <button class="px-10 py-4 rounded-full font-bold font-montserrat tracking-wide transition-all duration-300 hover:-translate-y-1 border-2 w-full sm:w-auto"
              style="color: #213067; border-color: #213067; background: transparent;">
              ONDE COMPRAR
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Sparkles, Leaf, ShieldCheck, Droplets, BadgeCheck, Check, Star, Recycle, Award } from 'lucide-vue-next'

import percarbonato from '../assets/produto/novo4.png'
import bicarbonato from '../assets/produto/novo5.png'

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
    iconBg: 'background: rgba(106,191,235,0.2);',
    iconColor: '#6ABFEB',
  },
  {
    title: 'Compromisso Sustentável',
    desc: 'Formulações eco-friendly que minimizam o impacto ambiental sem abrir mão da máxima eficácia.',
    icon: Recycle,
    iconBg: 'background: rgba(127,177,78,0.2);',
    iconColor: '#7FB14E',
  },
  {
    title: 'Segurança em Primeiro Lugar',
    desc: 'Desenvolvidos com rigor técnico e seguros para o uso doméstico, com instruções claras de aplicação.',
    icon: ShieldCheck,
    iconBg: 'background: rgba(255,255,255,0.12);',
    iconColor: 'white',
  },
]

useScrollReveal()
</script>

<style scoped>
/* === HERO FADE IN === */
.hero-fade-in {
  opacity: 0;
  transform: translateY(24px);
  animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes heroFadeIn {
  to { opacity: 1; transform: translateY(0); }
}

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

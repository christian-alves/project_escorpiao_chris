<template>
  <div class="mt-16" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
    <section id="info" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">
      <!-- Título -->
      <div class="flex items-center gap-4 mb-4 reveal-element">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h1 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight">INFORMAÇÕES</h1>
          <Info class="text-brand-700" :stroke-width="2" :size="30" />
        </div>
      </div>

      <!-- Conteúdo principal -->
      <div class="info-container">
        <!-- Textos -->
        <div class="info-text reveal-element delay-100 space-y-6">
          <p class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700">
            A soda cáustica é um produto muito corrosivo que pode causar queimaduras severas e irreversíveis
            na pele e nos olhos, irritação respiratória e é nocivo para organismos aquáticos.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-brand-700">
            Além dos cuidados no manuseio, é fundamental atenção ao armazenamento. A ingestão do produto
            pode causar a morte.
          </p>

          <p class="text-gray-600 text-base leading-relaxed font-montserrat">
            As informações de segurança, manuseio e a FDS de cada produto também estão disponíveis diretamente
            na página do produto correspondente.
          </p>

          <!-- Chamada de Emergência -->
          <div
            class="mt-8 bg-brand-50 border border-brand-200 rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
            <div class="bg-brand-100 p-3 rounded-full shrink-0">
              <Phone class="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-brand-800 mb-1 font-montserrat">Central de Emergência</h3>
              <p class="text-gray-700 font-montserrat text-base">
                Caso ocorra contato com a soda cáustica, ligue imediatamente para:
              </p>
              <p class="text-2xl font-extrabold text-brand-700 mt-2 font-montserrat tracking-wide">
                0800-118270
              </p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider reveal-scale delay-200 hidden md:block"></div>

        <!-- Ficha de Dados de Segurança -->
        <div
          class="flex flex-col items-center flex-1 fds-col reveal-element delay-300 bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-[0_20px_40px_rgb(var(--color-brand-700)/0.08)] transition-all duration-500 mt-8 md:mt-0">
          <div class="bg-brand-50 p-4 rounded-full mb-4">
            <FileText class="w-8 h-8 text-brand-600" />
          </div>
          <span class="mb-2 text-center text-lg font-bold text-gray-800 font-montserrat">
            Ficha de Dados de Segurança
          </span>
          <p class="text-center text-sm text-gray-500 mb-6 font-montserrat px-2">
            Acesso rápido à FDS de cada produto. Segurança e manuseio detalhados estão na página de cada produto.
          </p>

          <!-- Linha Soda Cáustica -->
          <template v-for="(produto, i) in produtosSoda" :key="produto.slug">
            <div class="w-full" :class="i > 0 ? 'mt-1' : 'mb-3'">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-montserrat text-center">
                {{ produto.fds.label }}<span v-if="produto.slug === 'soda-caustica-500g'"> (500g e 1kg)</span>
              </p>
              <div class="flex gap-2">
                <NuxtLink :to="produto.slug === 'soda-caustica-500g' ? '/produtos' : `/produto/${produto.slug}#seguranca`" class="flex-1">
                  <button
                    class="w-full border-2 border-brand-700 text-brand-700 px-4 py-3.5 rounded-full font-semibold font-montserrat tracking-wide text-xs transition-all duration-300 hover:bg-brand-50">
                    VER PRODUTO
                  </button>
                </NuxtLink>
                <button
                  class="group relative overflow-hidden flex items-center justify-center gap-2 flex-1 bg-brand-700 text-white px-4 py-3.5 rounded-full font-semibold font-montserrat tracking-wide text-xs transition-all duration-300 hover:bg-white border border-brand-700 hover:shadow-[0_8px_30px_rgb(185,28,28,0.3)]"
                  @click="openPdf(produto.fds.arquivo)">
                  <span class="relative z-10 group-hover:text-brand-700">FDS</span>
                  <Download class="w-4 h-4 relative z-10 group-hover:text-brand-700" />
                </button>
              </div>
            </div>
            <div v-if="i < produtosSoda.length - 1" class="w-full h-px bg-gray-100 my-3"></div>
          </template>

          <!-- Divisor Linha Casa -->
          <div class="w-full flex items-center gap-3 my-6">
            <div class="h-px flex-1" style="background: linear-gradient(to right, transparent, rgb(var(--color-casa-primary)/0.15));"></div>
            <span class="text-[11px] font-bold uppercase tracking-widest font-montserrat" style="color: rgb(var(--color-casa-blue));">Linha Casa</span>
            <div class="h-px flex-1" style="background: linear-gradient(to left, transparent, rgb(var(--color-casa-blue)/0.2));"></div>
          </div>

          <!-- Linha Casa -->
          <template v-for="(produto, i) in produtosCasa" :key="produto.slug">
            <div class="w-full" :class="i > 0 ? 'mt-1' : 'mb-3'">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-montserrat text-center">{{ produto.fds.label }}</p>
              <div class="flex gap-2">
                <NuxtLink :to="`/produto/${produto.slug}#seguranca`" class="flex-1">
                  <button
                    class="w-full border-2 px-4 py-3.5 rounded-full font-semibold font-montserrat tracking-wide text-xs transition-all duration-300"
                    style="border-color: rgb(var(--color-casa-primary)); color: rgb(var(--color-casa-primary));">
                    VER PRODUTO
                  </button>
                </NuxtLink>
                <button
                  class="fds-btn-casa group relative overflow-hidden flex items-center justify-center gap-2 flex-1 text-white px-4 py-3.5 rounded-full font-semibold font-montserrat tracking-wide text-xs transition-all duration-300 border"
                  style="background: linear-gradient(135deg, rgb(var(--color-casa-primary)), rgb(var(--color-casa-primary-dark))); border-color: rgb(var(--color-casa-primary)); --hover-shadow: rgb(var(--color-casa-primary)/0.35);"
                  @click="openPdf(produto.fds.arquivo)">
                  <span class="relative z-10">FDS</span>
                  <Download class="w-4 h-4 relative z-10" />
                </button>
              </div>
            </div>
            <div v-if="i < produtosCasa.length - 1" class="w-full h-px bg-gray-100 my-3"></div>
          </template>
        </div>
      </div>

      <!-- Seção: Manuseio -->
      <div class="flex items-center gap-4 mb-8 mt-16 reveal-element">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h2 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">MANUSEIO DA SODA
            CÁUSTICA</h2>
          <ShieldAlert class="text-brand-700" :stroke-width="2" :size="isMobile ? 60 : 36" />
        </div>
      </div>

      <!-- Grade de Manuseio -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-100">
          <div
            class="bg-gradient-to-br from-brand-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Beaker class="text-brand-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-brand-700 transition-colors">
            Utensílios Adequados</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            Utilize plástico resistente ao aquecimento para a diluição. Nunca use para alimentos e lave abundantemente
            antes de reutilizar.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-200">
          <div
            class="bg-gradient-to-br from-brand-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <ShieldAlert class="text-brand-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-brand-700 transition-colors">
            Proteção Pessoal</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            É obrigatório o uso de luvas (PVC ou nitrílica), máscara facial e óculos de proteção com vedação lateral.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-300">
          <div
            class="bg-gradient-to-br from-brand-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shirt class="text-brand-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-brand-700 transition-colors">
            Vestuário Correto</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            As mangas devem ser compridas e justas para evitar o contato de qualquer respingo com a pele nua durante o
            manuseio.
          </p>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-400 lg:col-start-1 lg:col-end-2">
          <div
            class="bg-gradient-to-br from-brand-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Flame class="text-brand-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-brand-700 transition-colors">
            Combate a Fogo</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            O produto não é inflamável, mas reage com água. Use CO₂ ou pó químico em caso de incêndio. Evite jato direto
            de água.
          </p>
        </div>

        <!-- Card 5 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-500 lg:col-start-2 lg:col-end-4 md:col-span-2">
          <div
            class="bg-gradient-to-br from-brand-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Package class="text-brand-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-brand-700 transition-colors">
            Condições de Armazenamento</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            Armazene num local ventilado, seco e fresco, mantendo em embalagens de polietileno fechadas e longe de
            metais e ácidos para evitar reações.
          </p>
        </div>
      </div>

      <!-- Bloco de vídeos -->
      <div class="videos-wrapper mb-24" :class="{ 'flex-col': isMobile, 'flex-row': !isMobile }">
        <!-- Vídeo 1 -->
        <div class="video-block reveal-scale delay-200">
          <div
            class="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(var(--color-brand-700)/0.1)] transition-shadow duration-500 w-full group">
            <h3
              class="video-title font-montserrat font-bold text-xl text-gray-800 mb-4 text-center group-hover:text-brand-700 transition-colors">
              EPIs de Segurança</h3>
            <div class="video-box overflow-hidden rounded-2xl">
              <iframe class="video-frame w-full" :height="isMobile ? 180 : 250"
                src="https://www.youtube.com/embed/azPRpXrowmo" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div v-if="!isMobile" class="video-divider mx-8 my-auto h-32 w-px bg-brand-200 reveal-element delay-300"></div>

        <!-- Vídeo 2 -->
        <div class="video-block reveal-scale delay-400">
          <div
            class="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(var(--color-brand-700)/0.1)] transition-shadow duration-500 w-full group">
            <h3
              class="video-title font-montserrat font-bold text-xl text-gray-800 mb-4 text-center group-hover:text-brand-700 transition-colors">
              Como Desentupir</h3>
            <div class="video-box overflow-hidden rounded-2xl">
              <iframe class="video-frame w-full" :height="isMobile ? 180 : 250"
                src="https://www.youtube.com/embed/qX86BTFrDls" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { Info, Download, ShieldAlert, CircleAlert, Phone, FileText, Beaker, Shirt, Flame, Package } from 'lucide-vue-next'
import { produtos } from '../data/produtos'

useSeoMeta({
  title: 'Informações e Manuseio da Soda Cáustica',
  description:
    'Fichas de Dados de Segurança (FDS), orientações de manuseio, EPIs, armazenamento e central de emergência da Soda Cáustica Escorpião.',
  ogTitle: 'Informações de Segurança — Soda Cáustica Escorpião',
  ogDescription: 'FDS, manuseio seguro, EPIs e armazenamento da soda cáustica.',
  ogType: 'article',
  ogLocale: 'pt_BR',
})

// Únicos produtos com FDS distinta (500g e 1kg compartilham o mesmo arquivo de escamas)
const produtosSoda = produtos.filter(p => p.categoria === 'soda' && p.slug !== 'soda-caustica-1kg')
const produtosCasa = produtos.filter(p => p.categoria === 'limpeza')

function openPdf(arquivo) {
  window.open(arquivo, '_blank')
}

// Detecta se é mobile (SSR-safe)
const { isMobile } = useIsMobile()

useScrollReveal()
</script>

<style scoped>
/* Layout padrão */
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

.fds-btn-casa:hover {
  box-shadow: 0 8px 30px var(--hover-shadow);
}

/* Responsividade mobile */
@media (max-width: 767px) {
  .info-container {
    flex-direction: column;
    align-items: stretch;
  }
}

.videos-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Centraliza verticalmente os blocos no container */
}

.videos-wrapper.flex-col,
.videos-wrapper.flex-row {
  align-items: stretch;
  /* Centraliza no mobile e desktop! */
}

.video-block {
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centraliza o conteúdo dentro do bloco */
}

.video-title {
  text-align: center;
  width: 100%;
}

.video-box {
  width: 100%;
  display: flex;
  justify-content: center;
  /* Centraliza o iframe */
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
  transform: scale(0.9) translateY(20px);
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
</style>

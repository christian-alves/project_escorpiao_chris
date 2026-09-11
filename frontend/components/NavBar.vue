<template>
  <header
    class="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 fixed top-0 left-0 w-full z-50 h-[4.5rem] md:h-20"
    style="z-index: 10000; transition: all 0.3s ease;">
    <div class="max-w-[1720px] mx-auto flex justify-between items-center px-4 sm:px-8 xl:px-10 h-full">

      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
        <div class="flex items-center justify-center h-full sm:ml-2 md:ml-6">
          <img :src="Logo" alt="Logo Soda Escorpião"
            class="h-[3.25rem] sm:h-16 w-auto object-contain" />
        </div>
      </NuxtLink>

      <!-- Navegação Desktop -->
      <nav
        class="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-grow justify-center font-montserrat tracking-wider text-[13px] xl:text-[14px]">

        <template v-for="section in sections" :key="section.id">

          <!-- Item com mega-menu (PRODUTOS) -->
          <div v-if="section.id === 'produtos'" class="relative" @mouseenter="abrirProdutos"
            @mouseleave="agendarFechamentoProdutos" @focusin="abrirProdutos" @focusout="agendarFechamentoProdutos">

            <NuxtLink :to="section.to"
              class="relative px-4 py-2 whitespace-nowrap transition-colors duration-300 outline-none group"
              :class="activeSection === section.id ? 'text-brand-700' : 'text-gray-500 hover:text-brand-700'"
              aria-haspopup="true" :aria-expanded="produtosOpen" @click="fecharProdutos">
              <span class="relative z-10 flex items-center gap-1.5">
                {{ section.label }}
                <ChevronDown class="w-3.5 h-3.5 transition-transform duration-300"
                  :class="produtosOpen ? 'rotate-180' : ''" />
              </span>
            </NuxtLink>

            <!-- Painel do mega-menu: linhas à esquerda, produtos da linha em foco à direita -->
            <transition name="dropdown">
              <div v-if="produtosOpen"
                class="absolute left-1/2 -translate-x-1/2 top-full pt-4 xl:pt-5 z-50 normal-case tracking-normal">
                <div
                  class="w-[620px] xl:w-[740px] max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-[0_24px_60px_rgba(0,0,0,0.14)] overflow-hidden">
                  <div class="grid grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr]">

                    <!-- Coluna 1: as duas linhas -->
                    <div class="bg-gray-50/80 border-r border-gray-100 p-3 flex flex-col gap-1.5">
                      <NuxtLink v-for="linha in linhas" :key="linha.id" :to="linha.to"
                        @mouseenter="linhaAtiva = linha.id" @focusin="linhaAtiva = linha.id" @click="fecharProdutos"
                        class="flex items-start gap-3 rounded-2xl p-3 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                        :class="linhaAtiva === linha.id ? linha.activeClass : 'text-gray-600 hover:bg-white'">
                        <span
                          class="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 text-white"
                          :class="linha.iconClass">
                          <component :is="linha.icon" class="w-4 h-4" />
                        </span>
                        <span class="min-w-0">
                          <span class="block text-[10px] font-bold tracking-widest uppercase mb-0.5"
                            :class="linha.tagClass">{{ linha.tagline }}</span>
                          <span class="block text-[13px] font-bold leading-snug">{{ linha.label }}</span>
                        </span>
                        <ChevronRight class="w-4 h-4 ml-auto mt-1.5 flex-shrink-0 transition-all duration-300"
                          :class="linhaAtiva === linha.id ? 'opacity-100 translate-x-0.5' : 'opacity-0 -translate-x-1'" />
                      </NuxtLink>

                      <NuxtLink to="/produtos" @click="fecharProdutos"
                        class="mt-auto flex items-center justify-center gap-1.5 rounded-2xl border border-gray-200 bg-white px-3 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 transition-all duration-300 hover:border-brand-200 hover:text-brand-700 hover:shadow-sm">
                        Ver todos
                        <ArrowRight class="w-3.5 h-3.5" />
                      </NuxtLink>
                    </div>

                    <!-- Coluna 2: produtos da linha em foco -->
                    <div class="p-4">
                      <transition name="fade-swap" mode="out-in">
                        <div :key="linhaAtiva">
                          <p class="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            {{ produtosDaLinha.length }} produtos · {{ linhaEmFoco.label }}
                          </p>
                          <div class="grid gap-1" :class="gridProdutos">
                            <NuxtLink v-for="produto in produtosDaLinha" :key="produto.slug"
                              :to="`/produto/${produto.slug}`" @click="fecharProdutos"
                              class="group/prod flex flex-col items-center text-center rounded-2xl p-4 border border-transparent transition-all duration-300 outline-none hover:bg-gray-50/90 hover:border-gray-100 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-700"
                              :title="produto.resumo">
                              <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async"
                                class="h-28 xl:h-32 w-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.14)] transition-transform duration-500 group-hover/prod:-translate-y-1 group-hover/prod:scale-105" />
                              <span class="mt-2.5 text-[12px] font-bold leading-snug text-gray-700 transition-colors"
                                :class="linhaEmFoco.hoverText">{{ produto.nome }}</span>
                            </NuxtLink>
                          </div>
                        </div>
                      </transition>
                    </div>

                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Demais itens -->
          <NuxtLink v-else :to="section.to"
            class="relative px-4 py-2 whitespace-nowrap transition-colors duration-300 outline-none group"
            :class="activeSection === section.id ? 'text-brand-700' : 'text-gray-500 hover:text-brand-700'">
            <span class="relative z-10 flex items-center gap-1.5">
              {{ section.label }}
              <span v-if="section.badge"
                class="inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white leading-none bg-accent badge-novo">
                {{ section.badge }}
              </span>
            </span>
          </NuxtLink>

        </template>

        <NuxtLink to="/contato"
          class="relative px-4 py-2 whitespace-nowrap transition-colors duration-300 outline-none group"
          :class="activeSection === 'contato' ? 'text-brand-700' : 'text-gray-500 hover:text-brand-700'">
          <span class="relative z-10">CONTATO</span>
        </NuxtLink>

      </nav>

      <!-- Botões redes sociais (desktop) -->
      <div title="Redes Sociais" class="hidden md:flex items-center justify-end gap-2 pr-2">
        <a href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
          aria-label="Instagram"
          class="p-2.5 rounded text-brand-700 hover:text-brand-500 transition-colors duration-200">
          <Instagram class="w-[22px] h-[22px]" />
        </a>
        <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
          aria-label="Facebook"
          class="p-2.5 rounded text-brand-700 hover:text-brand-500 transition-colors duration-200">
          <Facebook class="w-[22px] h-[22px]" />
        </a>
        <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
          aria-label="TikTok"
          class="p-2.5 rounded text-brand-700 hover:text-brand-500 transition-colors duration-200">
          <svg class="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path
              d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
          </svg>
        </a>
      </div>

      <!-- Botão Mobile Menu -->
      <button class="lg:hidden min-h-11 min-w-11 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 focus:bg-brand-50 group transition-colors duration-300"
        @click="menuOpen = !menuOpen" aria-label="Menu principal" :aria-expanded="menuOpen" aria-controls="mobile-navigation">
        <Menu v-if="!menuOpen" class="w-8 h-8 text-brand-800 group-hover:text-brand-600 transition-colors duration-300" />
        <X v-else class="w-8 h-8 text-brand-800 group-hover:text-brand-600 transition-colors duration-300" />
      </button>
    </div>

    <!-- Navegação Mobile (Floating Card) -->
    <transition name="slide-fade">
      <div v-if="menuOpen" id="mobile-navigation" ref="mobileMenu"
        class="lg:hidden absolute left-4 right-4 top-[4.5rem] md:top-20 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 rounded-3xl font-montserrat z-50 max-h-[calc(100vh-6.5rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto">

        <div class="p-6 flex flex-col gap-2 relative">
          <!-- Decorativo -->
          <div
            class="absolute -top-10 -right-10 w-32 h-32 bg-brand-50 rounded-full blur-2xl opacity-60 z-0 pointer-events-none">
          </div>

          <NuxtLink to="/nossa-historia"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'nossa-historia' ? 'bg-brand-50 text-brand-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'"
            @click="fecharMenuMobile">SOBRE NÓS</NuxtLink>

          <!-- PRODUTOS: accordion com as duas linhas e seus produtos (hover não existe no toque) -->
          <div class="relative z-10">
            <button type="button" @click="produtosMobileOpen = !produtosMobileOpen"
              class="w-full flex items-center justify-between py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] text-left"
              :class="activeSection === 'produtos' ? 'bg-brand-50 text-brand-700 tracking-wide shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'"
              :aria-expanded="produtosMobileOpen" aria-controls="mobile-produtos-submenu">
              <span>PRODUTOS</span>
              <ChevronDown class="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                :class="produtosMobileOpen ? 'rotate-180' : ''" />
            </button>

            <transition name="collapse">
              <div v-if="produtosMobileOpen" id="mobile-produtos-submenu" class="overflow-hidden">
                <div class="mt-2 flex flex-col gap-3">

                  <div v-for="linha in linhas" :key="linha.id">
                    <NuxtLink :to="linha.to" @click="fecharMenuMobile"
                      class="flex items-center gap-2.5 py-2 px-3 rounded-xl transition-colors duration-300"
                      :class="linha.activeClass">
                      <span class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                        :class="linha.iconClass">
                        <component :is="linha.icon" class="w-3.5 h-3.5" />
                      </span>
                      <span class="text-[13px] font-bold">{{ linha.label }}</span>
                    </NuxtLink>

                    <NuxtLink v-for="produto in produtosPorLinha[linha.id]" :key="produto.slug"
                      :to="`/produto/${produto.slug}`" @click="fecharMenuMobile"
                      class="flex items-center gap-3 py-2 pl-4 pr-3 rounded-xl text-gray-600 transition-all duration-300 hover:bg-gray-50 hover:text-brand-600 active:scale-[0.98]">
                      <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async"
                        class="h-9 w-9 object-contain flex-shrink-0" />
                      <span class="text-[13px] font-medium leading-snug">{{ produto.nome }}</span>
                    </NuxtLink>
                  </div>

                  <NuxtLink to="/produtos" @click="fecharMenuMobile"
                    class="flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 transition-colors duration-300 hover:border-brand-200 hover:text-brand-700">
                    Ver todos
                    <ArrowRight class="w-3.5 h-3.5" />
                  </NuxtLink>

                </div>
              </div>
            </transition>
          </div>

          <NuxtLink to="/receitas"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'receitas' ? 'bg-brand-50 text-brand-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'"
            @click="fecharMenuMobile">RECEITAS</NuxtLink>

          <NuxtLink to="/onde-comprar"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'ondecomprar' ? 'bg-brand-50 text-brand-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'"
            @click="fecharMenuMobile">ONDE COMPRAR</NuxtLink>

          <NuxtLink to="/contato"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'contato' ? 'bg-brand-50 text-brand-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'"
            @click="fecharMenuMobile">CONTATO</NuxtLink>

          <!-- Mobile Social Medias -->
          <div class="flex gap-4 justify-center mt-6 pt-4 border-t border-gray-100 relative z-10">
            <a title="Instagram" href="https://www.instagram.com/sodaescorpiao/" target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-brand-50 rounded-full text-brand-700 hover:bg-brand-100 hover:text-brand-800 transition-colors">
              <Instagram class="w-6 h-6" />
            </a>
            <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-brand-50 rounded-full text-brand-700 hover:bg-brand-100 hover:text-brand-800 transition-colors">
              <Facebook class="w-6 h-6" />
            </a>
            <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
              class="p-3 bg-brand-50 rounded-full text-brand-700 hover:bg-brand-100 hover:text-brand-800 transition-colors">
              <svg class="w-5 h-5 mx-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path
                  d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { Menu, X, Instagram, Facebook, ChevronDown, ChevronRight, ArrowRight, FlaskConical, Sparkles } from 'lucide-vue-next'
import Logo from '../assets/LogoEscorpiao.png'
import { produtos } from '../data/produtos'

// useRoute é auto-importado pelo Nuxt (não requer import de vue-router).
const route = useRoute()
const activeSection = ref('') // ID da seção ativa ou nome da rota
const mobileMenu = ref(null)

const menuOpen = ref(false)

const sections = [
  { id: 'nossa-historia', label: 'SOBRE NÓS', to: '/nossa-historia' },
  { id: 'produtos', label: 'PRODUTOS', to: '/produtos' },
  { id: 'receitas', label: 'RECEITAS', to: '/receitas' },
  { id: 'ondecomprar', label: 'ONDE COMPRAR', to: '/onde-comprar' }
]

// As duas linhas do catálogo. O `id` casa com o campo `categoria` de data/produtos.js.
// As classes ficam literais aqui para o Tailwind conseguir extraí-las na build.
const linhas = [
  {
    id: 'soda',
    label: 'Soda Cáustica',
    tagline: 'Linha Principal',
    to: '/linha/soda-caustica',
    icon: FlaskConical,
    iconClass: 'bg-gradient-to-br from-brand-700 to-brand-900',
    activeClass: 'bg-brand-50 text-brand-700 shadow-sm',
    tagClass: 'text-brand-400',
    hoverText: 'group-hover/prod:text-brand-700',
  },
  {
    id: 'limpeza',
    label: 'Escorpião Casa',
    tagline: 'Nova Linha',
    to: '/linha/escorpiao-casa',
    icon: Sparkles,
    iconClass: 'bg-gradient-to-br from-accent to-accent-dark',
    activeClass: 'bg-accent-50 text-accent-700 shadow-sm',
    tagClass: 'text-accent-400',
    hoverText: 'group-hover/prod:text-accent',
  },
]

const produtosPorLinha = Object.fromEntries(
  linhas.map(linha => [linha.id, produtos.filter(p => p.categoria === linha.id)])
)

// Estado do mega-menu (desktop) e do accordion (mobile)
const produtosOpen = ref(false)
const produtosMobileOpen = ref(false)
const linhaAtiva = ref(linhas[0].id)

const linhaEmFoco = computed(() => linhas.find(l => l.id === linhaAtiva.value) || linhas[0])
const produtosDaLinha = computed(() => produtosPorLinha[linhaAtiva.value] || [])

// Colunas literais para o Tailwind extrair; evita coluna vazia na linha de 2 produtos.
const gridProdutos = computed(() => (produtosDaLinha.value.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'))

// Pequeno atraso no fechamento para o ponteiro poder atravessar até o painel.
let fecharProdutosTimer = null

function abrirProdutos() {
  if (fecharProdutosTimer) {
    clearTimeout(fecharProdutosTimer)
    fecharProdutosTimer = null
  }
  produtosOpen.value = true
}

function agendarFechamentoProdutos() {
  if (fecharProdutosTimer) clearTimeout(fecharProdutosTimer)
  fecharProdutosTimer = setTimeout(() => {
    produtosOpen.value = false
    linhaAtiva.value = linhas[0].id
  }, 160)
}

function fecharProdutos() {
  if (fecharProdutosTimer) {
    clearTimeout(fecharProdutosTimer)
    fecharProdutosTimer = null
  }
  produtosOpen.value = false
  linhaAtiva.value = linhas[0].id
}

function fecharMenuMobile() {
  menuOpen.value = false
  produtosMobileOpen.value = false
}

function handleScroll() {
  if (route.path !== '/') return
  const el = document.getElementById('empresa')
  let current = ''
  if (el) {
    const rect = el.getBoundingClientRect()
    if (rect.top <= 200 && rect.bottom > 200) {
      current = 'empresa'
    }
  }
  activeSection.value = current
}

onMounted(() => {
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (fecharProdutosTimer) clearTimeout(fecharProdutosTimer)
})

// Atualiza ao mudar de rota
watch(() => route.path, (newPath) => {
  fecharProdutos()
  produtosMobileOpen.value = false

  if (newPath === '/') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  } else {
    window.removeEventListener('scroll', handleScroll)
    // Se for '/info', destaca 'info'
    if (newPath.startsWith('/info')) {
      activeSection.value = 'info'
    }
    // Se for '/contato' ou qualquer subrota de contato, destaca 'contato'
    else if (newPath.startsWith('/contato')) {
      activeSection.value = 'contato'
    }
    // Rotas dedicadas de produtos, receitas e onde-comprar
    else if (newPath.startsWith('/produto')) {
      activeSection.value = 'produtos'
    }
    else if (newPath.startsWith('/receita')) {
      activeSection.value = 'receitas'
    }
    else if (newPath.startsWith('/onde-comprar')) {
      activeSection.value = 'ondecomprar'
    }
    // As páginas de cada linha também destacam PRODUTOS
    else if (newPath.startsWith('/linha/')) {
      activeSection.value = 'produtos'
    }
    // Caso contrário, tenta pegar o nome da rota principal
    else {
      activeSection.value = newPath.replace('/', '')
    }
  }
})

function handleClickOutside(event) {
  // Testa se menu está aberto e se o clique não está dentro do menu mobile ou do botão que o abre
  if (menuOpen.value && mobileMenu.value && !mobileMenu.value.contains(event.target) && !event.target.closest('button')) {
    fecharMenuMobile()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  window.removeEventListener('keydown', handleEscape)
})

function handleEscape(event) {
  if (event.key === 'Escape') {
    fecharMenuMobile()
    fecharProdutos()
  }
}

</script>

<style scoped>
.badge-novo {
  animation: badge-pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes badge-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
}

/* Transições do menu mobile (Slide and Fade in) */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 0, 0.2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}

/* Mega-menu de produtos (desktop) */
.dropdown-enter-active {
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translate(-50%, -8px);
}

/* Troca da linha em foco dentro do painel */
.fade-swap-enter-active,
.fade-swap-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.fade-swap-enter-from {
  opacity: 0;
  transform: translateX(8px);
}

.fade-swap-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}

/* Accordion de produtos (mobile) */
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  max-height: 720px;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .badge-novo { animation: none; }

  .dropdown-enter-active,
  .dropdown-leave-active,
  .fade-swap-enter-active,
  .fade-swap-leave-active,
  .collapse-enter-active,
  .collapse-leave-active {
    transition: none;
  }
}
</style>

<template>
    <div style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-6xl mx-auto px-6 pt-32 pb-20 font-montserrat">
            <div class="flex items-center gap-4 reveal-element">
                <h1 class="text-3xl font-extrabold mt-6 text-brand-700 mb-6 font-montserrat tracking-tight">ONDE COMPRAR?
                </h1>
                <ShoppingCart class="text-brand-700 mb-4" stroke-width="2" size="32" />
            </div>

            <p
                class="text-gray-700 text-lg mb-10 leading-relaxed font-montserrat max-w-4xl border-l-4 border-brand-700 pl-6 reveal-element delay-100">
                A Soda Cáustica Escorpião, localizada em Serra - Espírito Santo, é referência nacional no fornecimento
                de soda cáustica para distribuidores que valorizam tradição, qualidade e agilidade.
                <br><br>
                Filtre por estado e cidade para encontrar um revendedor perto de você:
            </p>

            <!-- Filtros -->
            <div class="flex flex-col sm:flex-row gap-4 mb-10 reveal-element delay-200">
                <div class="flex-1">
                    <label for="estado" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Estado</label>
                    <select id="estado" v-model="estadoSelecionado" @change="cidadeSelecionada = ''"
                        class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800">
                        <option value="">Todos os estados</option>
                        <option v-for="estado in estados" :key="estado" :value="estado">{{ estado }}</option>
                    </select>
                </div>
                <div class="flex-1">
                    <label for="cidade" class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Cidade</label>
                    <select id="cidade" v-model="cidadeSelecionada" :disabled="!estadoSelecionado"
                        class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition-all duration-300 text-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed">
                        <option value="">Todas as cidades</option>
                        <option v-for="cidade in cidadesDisponiveis" :key="cidade" :value="cidade">{{ cidade }}</option>
                    </select>
                </div>
            </div>

            <!-- Resultados -->
            <div v-if="revendedoresFiltrados.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div v-for="rev in revendedoresFiltrados" :key="rev.nome"
                    class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_rgb(var(--color-brand-700)/0.08)] hover:-translate-y-1 transition-all duration-500">
                    <p class="text-xs font-bold tracking-widest text-brand-400 uppercase font-montserrat mb-2">
                        {{ rev.categoria }}
                    </p>
                    <h3 class="text-lg font-bold text-gray-800 font-montserrat mb-1">{{ rev.nome }}</h3>
                    <p class="text-gray-500 font-montserrat text-sm">{{ rev.cidade }} - {{ rev.estado }}</p>
                </div>
            </div>
            <p v-else class="text-gray-500 font-montserrat text-center mb-16 reveal-element">
                Nenhum revendedor encontrado nesta região. Fale com a gente para indicarmos o parceiro mais próximo.
            </p>

            <div class="flex justify-center reveal-element delay-500">
                <a :href="linkCompra()" target="_blank" rel="noopener noreferrer">
                    <button
                        class="group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1">
                        <span class="relative z-10 group-hover:text-brand-700">FALE COM UM DISTRIBUIDOR</span>
                    </button>
                </a>
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCart } from 'lucide-vue-next'
import { revendedores, getEstados, getCidadesPorEstado } from '../data/revendedores'
import { useWhatsapp } from '../composables/useWhatsapp'

useSeoMeta({
    title: 'Onde Comprar — Soda Cáustica Escorpião',
    description:
        'Encontre a Soda Cáustica Escorpião em mercados, agropecuárias, lojas de produtos de limpeza e materiais de construção em todo o Brasil.',
    ogTitle: 'Onde Comprar Soda Escorpião',
    ogDescription: 'Rede nacional de distribuidores da Soda Cáustica Escorpião.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const { linkCompra } = useWhatsapp()

const estadoSelecionado = ref('')
const cidadeSelecionada = ref('')

const estados = computed(() => getEstados())
const cidadesDisponiveis = computed(() =>
    estadoSelecionado.value ? getCidadesPorEstado(estadoSelecionado.value) : []
)

const revendedoresFiltrados = computed(() => {
    return revendedores.filter(r => {
        if (estadoSelecionado.value && r.estado !== estadoSelecionado.value) return false
        if (cidadeSelecionada.value && r.cidade !== cidadeSelecionada.value) return false
        return true
    })
})

useScrollReveal()
</script>

<style scoped>
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

.delay-100 {
    transition-delay: 100ms;
}

.delay-200 {
    transition-delay: 200ms;
}

.delay-500 {
    transition-delay: 500ms;
}
</style>

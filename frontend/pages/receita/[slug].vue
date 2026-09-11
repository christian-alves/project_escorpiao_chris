<template>
    <div v-if="receita" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-4xl mx-auto px-6 pt-12 pb-20 font-montserrat">
            <NuxtLink to="/receitas"
                class="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors mb-8">
                <ArrowLeft class="w-4 h-4" /> Voltar para receitas
            </NuxtLink>

            <div class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12">
                <ReceitaDetalhe :tipo="receita.tipo" :videoReceitas="videoReceitas" />
            </div>

            <div class="mt-10">
                <SectionHeader title="ONDE COMPRAR" :icon="ShoppingCart" />
                <Card class="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p class="text-gray-700 text-lg font-montserrat leading-relaxed max-w-xl">
                        Vai fazer essa receita? Encontre a Soda Cáustica Escorpião em mercados, agropecuárias, lojas
                        de produtos de limpeza e materiais de construção em todo o Brasil.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <NuxtLink to="/onde-comprar">
                            <button
                                class="w-full sm:w-auto group relative overflow-hidden border border-brand-700 bg-brand-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1 whitespace-nowrap">
                                <span class="relative z-10 group-hover:text-brand-700">ONDE COMPRAR</span>
                            </button>
                        </NuxtLink>
                        <a :href="linkCompra()" target="_blank" rel="noopener noreferrer">
                            <button
                                class="w-full sm:w-auto border-2 border-brand-700 text-brand-700 px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1 whitespace-nowrap">
                                COMPRAR PELO WHATSAPP
                            </button>
                        </a>
                    </div>
                </Card>
            </div>
        </section>
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ArrowLeft, ShoppingCart } from 'lucide-vue-next'
import ReceitaDetalhe from '../../components/RecipeDetails.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import Card from '../../components/ui/Card.vue'
import { receitas, getReceitaBySlug, videoReceitas } from '../../data/receitas'
import { useWhatsapp } from '../../composables/useWhatsapp'

const { linkCompra } = useWhatsapp()

const route = useRoute()
const receita = getReceitaBySlug(route.params.slug)

if (!receita) {
    throw createError({ statusCode: 404, statusMessage: 'Receita não encontrada' })
}

useSeoMeta({
    title: `${receita.titulo} — Soda Cáustica Escorpião`,
    description: `Aprenda o passo a passo da receita: ${receita.titulo}, feita com Soda Cáustica Escorpião.`,
    ogTitle: receita.titulo,
    ogType: 'website',
    ogLocale: 'pt_BR',
})

definePageMeta({
    validate: async (r) => receitas.some(rec => rec.slug === r.params.slug),
})

useBreadcrumbJsonLd([
    { name: 'Receitas', path: '/receitas' },
    { name: receita.titulo, path: `/receita/${receita.slug}` },
])

// Ingredientes e modo de preparo espelham o conteúdo hardcoded em components/RecipeDetails.vue.
// A receita tipo 3 (Vídeos de Sabão) não tem passo a passo próprio, por isso não gera Recipe schema.
const receitasSchema = {
    1: {
        recipeIngredient: [
            '1 kg de soda cáustica Escorpião',
            '2 litros de água',
            '4 litros de óleo de cozinha',
            '1 litro de álcool',
            '5 ml de essência',
        ],
        recipeInstructions: [
            'Coloque no balde a soda cáustica e adicione lentamente 2 litros de água quente.',
            'Misture com muito cuidado utilizando a colher de pau até a soda cáustica dissolver completamente.',
            'Junte os 4 litros de óleo e continue mexendo por 20 minutos.',
            'Acrescente o álcool e a essência.',
            'Misture até obter uma pasta consistente.',
            'Despeje o conteúdo em um caixote de madeira forrado com um pano ou em formas, espalhe bem e acomode a pasta dentro do recipiente.',
            'Deixe secar por no mínimo 24 horas.',
            'Após a secagem, corte o sabão no tamanho desejado e enrole os pedaços em papel filme.',
        ],
    },
    2: {
        recipeIngredient: [
            '1 litro de água morna',
            '500 gramas de soda cáustica Escorpião',
            '2 litros de óleo novo ou usado',
            '1 litro de álcool acima de 70%',
            '1 litro de água sanitária',
            '55 litros de água fria',
            '160 gramas de bicarbonato de sódio',
        ],
        recipeInstructions: [
            'Dilua a Soda Cáustica Escorpião na água morna, com cuidado.',
            'Em seguida, adicione o óleo e o álcool, mexendo bem por cerca de 10 minutos, até atingir o ponto de creme.',
            'Acrescente a água sanitária e a água fria. Mexa bem até que a mistura fique uniforme.',
            'Dilua o bicarbonato em um copo com água e depois adicione à mistura.',
            'Deixe a mistura descansar por 24 horas.',
        ],
    },
    4: {
        recipeIngredient: [
            '350 ml de Soda Cáustica Líquida Escorpião',
            '400 ml de óleo',
            '400 ml de álcool',
            '250 ml de água sanitária',
            '10 colheres de sopa de açúcar',
            '5 colheres de sopa de bicarbonato',
            '5 colheres de sopa de sal',
            '500 ml de desinfetante',
            'Lauril para dar espuma',
        ],
        recipeInstructions: [
            'Em um recipiente, comece misturando o óleo e o álcool.',
            'Em seguida, adicione a Soda Líquida e misture um pouco para dissolver.',
            'Acrescente as 10 colheres de açúcar dissolvido em 500 ml de água quente.',
            'Em outro recipiente, adicione 8 litros de água em temperatura ambiente, 5 colheres de sal e 5 colheres de bicarbonato.',
            'Após diluir, junte o conteúdo com Soda Líquida à mistura de água e continue mexendo.',
            'Acrescente água sanitária e mais água até chegar no ponto que desejar.',
            'Para finalizar, adicione o lauril e o desinfetante, misture bem e deixe curar por 7 dias.',
        ],
    },
}

const dadosReceita = receitasSchema[receita.tipo]
if (dadosReceita) {
    useJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: receita.titulo,
        author: { '@type': 'Organization', name: 'Soda Cáustica Escorpião' },
        recipeCategory: 'Sabão caseiro',
        recipeIngredient: dadosReceita.recipeIngredient,
        recipeInstructions: dadosReceita.recipeInstructions.map((texto, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text: texto,
        })),
    })
}
</script>

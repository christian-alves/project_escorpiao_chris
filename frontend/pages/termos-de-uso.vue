<template>
    <div class="mt-16" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-4xl mx-auto px-6 pt-24 pb-24 scroll-mt-32">
            <div class="flex items-center gap-4 mb-10">
                <NuxtLink to="/"
                    class="transition-transform duration-300 hover:-translate-x-1 group bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-100">
                    <ChevronLeft class="w-8 h-8 text-gray-500 group-hover:text-brand-700 transition-colors duration-300" />
                </NuxtLink>
                <h1 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">
                    Termos de Uso
                </h1>
            </div>

            <div
                class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 space-y-6 font-montserrat text-gray-700 leading-relaxed">
                <p class="text-sm text-gray-400">Última atualização: 31 de agosto de 2026</p>

                <p>
                    Este site é de propriedade da Soda Cáustica Escorpião (CNPJ: 04.548.633/0001-90). Ao acessar e
                    utilizar este site, você concorda com os termos e condições descritos a seguir.
                </p>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">1. Uso do conteúdo</h2>
                    <p>
                        Todo o conteúdo disponibilizado neste site — textos, imagens, fichas técnicas e demais
                        materiais — é destinado apenas a fins informativos sobre os produtos e serviços da Soda
                        Cáustica Escorpião, sendo vedada sua reprodução comercial sem autorização prévia.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">2. Informações sobre o produto</h2>
                    <p>
                        As informações técnicas e de segurança disponibilizadas (como as Fichas de Dados de
                        Segurança - FDS) têm caráter informativo. O manuseio da soda cáustica deve sempre seguir as
                        orientações de segurança descritas na página de Informações e as instruções da embalagem do
                        produto.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">3. Formulários de contato</h2>
                    <p>
                        Ao preencher os formulários de contato ou cadastro de revendedor, você declara que as
                        informações fornecidas são verdadeiras e concorda com o tratamento dos seus dados conforme
                        descrito em nossa
                        <NuxtLink to="/politica-de-privacidade" class="text-brand-700 hover:underline">Política de Privacidade</NuxtLink>.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">4. Limitação de responsabilidade</h2>
                    <p>
                        A Soda Cáustica Escorpião não se responsabiliza por danos decorrentes do uso inadequado do
                        produto ou do descumprimento das instruções de segurança e manuseio informadas.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">5. Alterações destes termos</h2>
                    <p>
                        Estes termos podem ser atualizados a qualquer momento, sem aviso prévio. Recomendamos a
                        consulta periódica desta página.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">6. Contato</h2>
                    <p>
                        Dúvidas sobre estes termos podem ser enviadas para
                        <a href="mailto:adm@sodaescorpiao.com.br" class="text-brand-700 hover:underline">adm@sodaescorpiao.com.br</a>.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ChevronLeft } from 'lucide-vue-next'

useSeoMeta({
    title: 'Termos de Uso',
    description: 'Termos de Uso do site da Soda Cáustica Escorpião.',
    ogTitle: 'Termos de Uso — Soda Cáustica Escorpião',
    ogLocale: 'pt_BR',
})
</script>

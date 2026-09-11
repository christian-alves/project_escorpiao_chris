<template>
    <div style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-4xl mx-auto px-6 pt-12 pb-24 scroll-mt-32">
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
useSeoMeta({
    title: 'Termos de Uso',
    description:
        'Termos de uso do site da Soda Cáustica Escorpião: uso do conteúdo, informações sobre os produtos, formulários de contato e limitação de responsabilidade.',
    ogTitle: 'Termos de Uso — Soda Cáustica Escorpião',
    ogDescription:
        'Termos de uso do site da Soda Cáustica Escorpião: uso do conteúdo, informações sobre os produtos, formulários de contato e limitação de responsabilidade.',
    ogLocale: 'pt_BR',
})

useBreadcrumbJsonLd([
    { name: 'Termos de Uso', path: '/termos-de-uso' },
])
</script>

<template>
    <div class="mt-16" style="background-color: rgb(var(--color-cream)); overflow-x: hidden;">
        <section class="max-w-4xl mx-auto px-6 pt-24 pb-24 scroll-mt-32">
            <div class="flex items-center gap-4 mb-10">
                <NuxtLink to="/"
                    class="transition-transform duration-300 hover:-translate-x-1 group bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-100">
                    <ChevronLeft class="w-8 h-8 text-gray-500 group-hover:text-brand-700 transition-colors duration-300" />
                </NuxtLink>
                <h1 class="text-3xl font-extrabold text-brand-700 font-montserrat tracking-tight uppercase">
                    Política de Privacidade
                </h1>
            </div>

            <div
                class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 space-y-6 font-montserrat text-gray-700 leading-relaxed">
                <p class="text-sm text-gray-400">Última atualização: 31 de agosto de 2026</p>

                <p>
                    A Soda Cáustica Escorpião valoriza a privacidade dos usuários deste site e se compromete a
                    proteger os dados pessoais coletados, em conformidade com a Lei Geral de Proteção de Dados
                    (Lei nº 13.709/2018 - LGPD).
                </p>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">1. Dados coletados</h2>
                    <p>
                        Coletamos apenas os dados fornecidos voluntariamente por você através dos formulários de
                        contato e cadastro de revendedores do site, como nome, e-mail, telefone e mensagem enviada.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">2. Finalidade do uso dos dados</h2>
                    <p>
                        As informações coletadas são utilizadas exclusivamente para responder solicitações de
                        contato, avaliar cadastros de revendedores e melhorar a comunicação com o cliente. Não
                        compartilhamos seus dados com terceiros para fins comerciais.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">3. Armazenamento e segurança</h2>
                    <p>
                        Os dados são armazenados de forma segura e mantidos apenas pelo tempo necessário para
                        cumprir as finalidades descritas nesta política.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">4. Seus direitos</h2>
                    <p>
                        Você pode solicitar a qualquer momento a confirmação, correção, ou exclusão dos seus dados
                        pessoais entrando em contato pelo e-mail
                        <a href="mailto:adm@sodaescorpiao.com.br" class="text-brand-700 hover:underline">adm@sodaescorpiao.com.br</a>.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-900 mb-2">5. Alterações desta política</h2>
                    <p>
                        Esta política pode ser atualizada periodicamente. Recomendamos a consulta desta página
                        regularmente para se manter informado sobre eventuais mudanças.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ChevronLeft } from 'lucide-vue-next'

useSeoMeta({
    title: 'Política de Privacidade',
    description: 'Política de Privacidade da Soda Cáustica Escorpião — como coletamos, usamos e protegemos seus dados.',
    ogTitle: 'Política de Privacidade — Soda Cáustica Escorpião',
    ogLocale: 'pt_BR',
})
</script>

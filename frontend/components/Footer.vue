<template>
    <footer class="bg-white py-12 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Troque o grid por flex para 3 colunas -->
            <div class="flex flex-col md:flex-row justify-between gap-8">
                <!-- Sobre a empresa -->
                <div class="md:w-1/4">
                    <h3 class="text-lg font-bold text-gray-900 mb-4 font-montserrat">SODA CÁUSTICA ESCORPIÃO</h3>
                    <p class="text-gray-700 text-sm font-montserrat">
                        Referência nacional em soda cáustica, tradição, qualidade e agilidade desde 1970.
                    </p>
                </div>

                <!-- Contato -->
                <div class="md:w-1/4">
                    <NuxtLink to="/contato">
                        <h3 class="text-lg font-bold text-gray-900 mb-4 font-montserrat hover:text-gray-700">CONTATO
                        </h3>
                    </NuxtLink>
                    <ul class="space-y-2 text-sm text-gray-700 font-montserrat tracking-wide">
                        <li class="flex gap-2">
                            <MapPinned size="18" class="shrink-0 mt-0.5" />
                            <span>R. Zilda Rodrigues de Souza Oliveira, S/N - Quadra 210 - Galpão 1 - Jardim Limoeiro, Serra - ES, 29164-009</span>
                        </li>
                        <li class="flex gap-2">
                            <Mail size="18" />
                            <a href="mailto:adm@sodaescorpiao.com.br" class="hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded">adm@sodaescorpiao.com.br</a>
                        </li>
                        <li class="flex gap-2">
                            <Phone size="18" />
                            <a href="tel:+5527998507166" class="hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded">(27) 99850-7166</a>
                        </li>
                        <li class="flex gap-2">
                            <TriangleAlert size="18" class="text-brand-700 shrink-0" />
                            <span>
                                Emergência:
                                <a href="tel:0800118270" class="font-bold hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded">0800-118270</a>
                            </span>
                        </li>
                        <li class="flex gap-2">
                            <FileText size="18" />
                            <span>CNPJ: 04.548.633/0001-90</span>
                        </li>
                    </ul>
                </div>

                <!-- Redes sociais -->
                <div class="md:w-1/4">
                    <h3 class="text-lg font-bold text-gray-900 mb-4 font-montserrat">REDES SOCIAIS</h3>
                    <div class="flex gap-4 items-center">
                        <a title="Instagram" href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
                            aria-label="Instagram" class="text-brand-700 hover:text-brand-500 transition">
                            <Instagram class="w-6 h-6" />
                        </a>
                        <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
                            aria-label="Facebook" class="text-brand-700 hover:text-brand-500 transition">
                            <Facebook class="w-6 h-6" />
                        </a>

                        <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
                            aria-label="TikTok"
                            class="text-brand-700 hover:text-brand-500 transition rounded-lg p-1 border-2 border-brand-700 hover:border-brand-500">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                fill="currentColor">
                                <path
                                    d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
                            </svg>
                        </a>

                    </div>

                    <h3 class="text-lg font-bold text-gray-900 mb-4 mt-8 font-montserrat">LEGAL</h3>
                    <ul class="space-y-2 text-sm text-gray-700 font-montserrat tracking-wide">
                        <li>
                            <NuxtLink to="/politica-de-privacidade" class="hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded">
                                Política de Privacidade
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/termos-de-uso" class="hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded">
                                Termos de Uso
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Direitos autorais -->
            <div
                class="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500 font-montserrat tracking-wide">
                <p>© 2025 Soda Cáustica Escorpião. Todos os direitos reservados.</p>
                <p class="mt-2 text-xs opacity-75">Desenvolvido por Lucas Xavier</p>
            </div>
        </div>
    </footer>


</template>


<script setup>
import { Instagram, Facebook, MapPinned, Mail, Phone, FileText, TriangleAlert } from 'lucide-vue-next';
</script>

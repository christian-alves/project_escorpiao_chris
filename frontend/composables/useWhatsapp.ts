export const WHATSAPP_NUMERO = '5527998507166'

export function whatsappLink(mensagem: string) {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
}

export function useWhatsapp() {
    function linkCompra(produtoNome?: string) {
        const mensagem = produtoNome
            ? `Olá! Quero comprar ${produtoNome}.`
            : 'Olá! Quero saber onde comprar Soda Cáustica Escorpião.'
        return whatsappLink(mensagem)
    }

    function linkRevenda() {
        return whatsappLink('Olá! Tenho interesse em me tornar revendedor da Soda Cáustica Escorpião.')
    }

    return { linkCompra, linkRevenda }
}

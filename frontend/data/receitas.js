import sabaoLiquido from '../assets/receitas/sabao_sodaLiquido.jpg'
import sabaoBarra from '../assets/receitas/sabao_multiuso.jpg'
import sabaoPara from '../assets/receitas/sabao_fuba.png'
import videosSabao from '../assets/receitas/sabao_limao.png'

export const receitas = [
    {
        slug: 'sabao-com-soda-liquida',
        tipo: 4,
        titulo: 'Receita Sabão Líquido',
        novidade: true,
        imagem: sabaoLiquido,
        alt: 'Sabão líquido preparado com Soda Cáustica Escorpião',
    },
    {
        slug: 'sabao-em-barra',
        tipo: 1,
        titulo: 'Receita Sabão em Barra',
        imagem: sabaoBarra,
        alt: 'Sabão em barra caseiro',
    },
    {
        slug: 'sabao-do-para',
        tipo: 2,
        titulo: 'Receita Sabão do Pará',
        imagem: sabaoPara,
        alt: 'Sabão do Pará caseiro',
    },
    {
        slug: 'videos-de-sabao',
        tipo: 3,
        titulo: 'Vídeos de Sabão',
        imagem: videosSabao,
        alt: 'Receita de sabão caseiro de limão',
    },
]

export function getReceitaBySlug(slug) {
    return receitas.find(r => r.slug === slug)
}

export const videoReceitas = {
    1: 'https://www.youtube.com/embed/azPRpXrowmo',
    2: 'https://www.youtube.com/embed/djV11Xbc914',
}

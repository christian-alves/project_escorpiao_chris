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
        descricao:
            'Receita de sabão líquido caseiro com Soda Cáustica Líquida Escorpião: lista de ingredientes e passo a passo completo. Fica pronto após 7 dias de cura.',
    },
    {
        slug: 'sabao-em-barra',
        tipo: 1,
        titulo: 'Receita Sabão em Barra',
        imagem: sabaoBarra,
        alt: 'Sabão em barra caseiro',
        descricao:
            'Aprenda a fazer sabão em barra caseiro com óleo de cozinha e Soda Cáustica Escorpião: ingredientes, passo a passo em vídeo e 24 horas de secagem.',
    },
    {
        slug: 'sabao-do-para',
        tipo: 2,
        titulo: 'Receita Sabão do Pará',
        imagem: sabaoPara,
        alt: 'Sabão do Pará caseiro',
        descricao:
            'Receita de sabão do Pará com Soda Cáustica Escorpião, óleo, álcool e bicarbonato: ingredientes, passo a passo em vídeo e 24 horas de descanso.',
    },
    {
        slug: 'videos-de-sabao',
        tipo: 3,
        titulo: 'Vídeos de Sabão',
        imagem: videosSabao,
        alt: 'Receita de sabão caseiro de limão',
        descricao:
            'Vídeos de receitas de sabão caseiro com a Soda Cáustica Escorpião: assista ao passo a passo no nosso Instagram e aprenda a preparar o seu sabão.',
    },
]

export function getReceitaBySlug(slug) {
    return receitas.find(r => r.slug === slug)
}

export const videoReceitas = {
    1: 'https://www.youtube.com/embed/azPRpXrowmo',
    2: 'https://www.youtube.com/embed/djV11Xbc914',
}

export const receitas = [
    {
        slug: 'sabao-com-soda-liquida',
        tipo: 4,
        titulo: 'Receita Sabão Líquido',
        novidade: true,
    },
    {
        slug: 'sabao-em-barra',
        tipo: 1,
        titulo: 'Receita Sabão em Barra',
    },
    {
        slug: 'sabao-do-para',
        tipo: 2,
        titulo: 'Receita Sabão do Pará',
    },
    {
        slug: 'videos-de-sabao',
        tipo: 3,
        titulo: 'Vídeos de Sabão',
    },
]

export function getReceitaBySlug(slug) {
    return receitas.find(r => r.slug === slug)
}

export const videoReceitas = {
    1: 'https://www.youtube.com/embed/azPRpXrowmo',
    2: 'https://www.youtube.com/embed/djV11Xbc914',
}

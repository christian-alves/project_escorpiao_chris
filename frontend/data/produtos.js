import soda500g from '../assets/produto/novo1.png'
import soda1kg from '../assets/produto/novo3.png'
import sodaliquida from '../assets/produto/novo2.png'
import percarbonato from '../assets/produto/novo4.png'
import bicarbonato from '../assets/produto/novo5.png'

export const produtos = [
    {
        slug: 'soda-caustica-500g',
        nome: 'Soda Cáustica 500g',
        categoria: 'soda',
        img: soda500g,
        resumo: 'Soda cáustica em escamas, embalagem de 500g, com 98% de pureza.',
        descricao:
            'A soda cáustica em escamas é obtida a partir do processo de evaporação da soda cáustica líquida, da fusão do produto anidro e do processo de escamação. Apresenta-se na forma de escamas brancas, altamente deliquescentes, com concentração média de 98% de hidróxido de sódio em peso. A embalagem de 500g é ideal para uso doméstico e pequenas aplicações.',
        usos: [
            'Fabricação de sabões e detergentes',
            'Tratamento de superfícies metálicas',
            'Mercerização de têxteis',
            'Correção de pH em processos industriais',
        ],
    },
    {
        slug: 'soda-caustica-1kg',
        nome: 'Soda Cáustica 1kg',
        categoria: 'soda',
        img: soda1kg,
        resumo: 'Soda cáustica em escamas, embalagem de 1kg, com 98% de pureza.',
        descricao:
            'A soda cáustica em escamas é obtida a partir do processo de evaporação da soda cáustica líquida, da fusão do produto anidro e do processo de escamação. Apresenta-se na forma de escamas brancas, altamente deliquescentes, com concentração média de 98% de hidróxido de sódio em peso. A embalagem de 1kg atende com agilidade a distribuidores e ao uso industrial de menor escala.',
        usos: [
            'Fabricação de sabões e detergentes',
            'Tratamento de superfícies metálicas',
            'Regeneração de resinas de troca iônica',
            'Correção de pH em processos industriais de alimentos, álcool e farmácia',
        ],
    },
    {
        slug: 'soda-caustica-liquida',
        nome: 'Soda Cáustica Líquida',
        categoria: 'soda',
        img: sodaliquida,
        resumo: 'Soda cáustica em solução líquida, referência nacional em qualidade.',
        descricao:
            'A soda cáustica líquida é o hidróxido de sódio em solução aquosa, utilizada em larga escala na indústria química e em processos de fabricação de sabões caseiros e industriais. Fornecida com agilidade e qualidade constante para distribuidores em todo o Brasil.',
        usos: [
            'Fabricação de sabão caseiro e industrial',
            'Tratamento de água e efluentes',
            'Processos industriais de mercerização e limpeza',
            'Regulação de pH em processos químicos',
        ],
        wide: true,
    },
    {
        slug: 'percarbonato-de-sodio',
        nome: 'Percarbonato de Sódio',
        categoria: 'limpeza',
        img: percarbonato,
        resumo: 'Agente branqueador à base de oxigênio ativo. Ideal para alvejamento de roupas e desinfecção de superfícies sem agredir o meio ambiente.',
        descricao:
            'O Percarbonato de Sódio é um agente branqueador à base de oxigênio ativo que libera peróxido de hidrogênio ao entrar em contato com a água. Altamente eficaz para alvejamento e desinfecção, sem uso de cloro, faz parte da linha Escorpião Casa.',
        usos: [
            'Alvejamento de roupas brancas e coloridas sem dano às fibras',
            'Desinfecção e higienização de superfícies domésticas',
            'Remoção de manchas difíceis em tecidos e estofados',
            'Limpeza de banheiros, pias e rejuntes',
        ],
    },
    {
        slug: 'bicarbonato-de-sodio',
        nome: 'Bicarbonato de Sódio',
        categoria: 'limpeza',
        img: bicarbonato,
        resumo: 'Produto multiuso com propriedades limpantes e desodorizantes. Amplamente usado na limpeza doméstica, culinária e higiene pessoal.',
        descricao:
            'O Bicarbonato de Sódio é um produto extremamente versátil, com propriedades limpantes, desodorizantes e abrasivas suaves. Amplamente reconhecido pela eficácia e segurança, é ideal para uso doméstico em múltiplas situações e faz parte da linha Escorpião Casa.',
        usos: [
            'Limpeza suave de superfícies delicadas na cozinha',
            'Neutralização de odores em geladeiras e armários',
            'Higiene pessoal como esfoliante natural suave',
            'Desodorização de tapetes, sofás e calçados',
        ],
    },
]

export function getProdutoBySlug(slug) {
    return produtos.find(p => p.slug === slug)
}

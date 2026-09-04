// Lista de exemplo — substituir pelos revendedores reais.
export const revendedores = [
    { nome: 'Mercado Central', categoria: 'Mercados', cidade: 'Serra', estado: 'ES' },
    { nome: 'Agropecuária Boa Vista', categoria: 'Agropecuárias', cidade: 'Serra', estado: 'ES' },
    { nome: 'Casa das Limpezas', categoria: 'Produtos de Limpeza', cidade: 'Vitória', estado: 'ES' },
    { nome: 'Construmix Materiais', categoria: 'Materiais de Construção', cidade: 'Vila Velha', estado: 'ES' },
    { nome: 'Mercado São José', categoria: 'Mercados', cidade: 'Cariacica', estado: 'ES' },
    { nome: 'Depósito Popular', categoria: 'Materiais de Construção', cidade: 'Belo Horizonte', estado: 'MG' },
    { nome: 'Agropecuária Minas', categoria: 'Agropecuárias', cidade: 'Contagem', estado: 'MG' },
    { nome: 'Limpa Tudo Distribuidora', categoria: 'Produtos de Limpeza', cidade: 'Rio de Janeiro', estado: 'RJ' },
    { nome: 'Mercadinho Bom Preço', categoria: 'Mercados', cidade: 'Niterói', estado: 'RJ' },
    { nome: 'Casa & Construção', categoria: 'Materiais de Construção', cidade: 'São Paulo', estado: 'SP' },
]

export function getEstados() {
    return [...new Set(revendedores.map(r => r.estado))].sort()
}

export function getCidadesPorEstado(estado) {
    return [...new Set(revendedores.filter(r => r.estado === estado).map(r => r.cidade))].sort()
}

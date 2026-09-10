// Helpers para injetar dados estruturados (Schema.org) nas páginas migradas.
// Reaproveita o mesmo padrão já usado em app.vue (script application/ld+json via useHead).

type BreadcrumbItem = {
  name: string
  /** Caminho relativo a partir da raiz do site, ex.: '/produtos'. Omitir na última posição não é necessário. */
  path: string
}

/**
 * Injeta um ou mais blocos JSON-LD na página atual.
 * Aceita um objeto único ou um array de objetos (cada um vira seu próprio <script>).
 */
export function useJsonLd(schema: Record<string, any> | Record<string, any>[]) {
  const schemas = Array.isArray(schema) ? schema : [schema]

  useHead({
    script: schemas.map((s) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  })
}

/** Monta e injeta um BreadcrumbList a partir de uma lista de trechos do caminho (sem incluir "Início"). */
export function useBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const siteConfig = useSiteConfig()
  const toUrl = (path: string) => `${siteConfig.url}${path}`.replace(/([^:]\/)\/+/g, '$1')

  const fullItems: BreadcrumbItem[] = [{ name: 'Início', path: '/' }, ...items]

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toUrl(item.path),
    })),
  })
}

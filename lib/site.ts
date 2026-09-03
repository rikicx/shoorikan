// Dados de contato e institucionais — todos verificados nas fontes públicas da academia
// (academiashoorikan.com.br e instagram.com/academiashoorikan).

export const SITE = {
  name: "Academia de Judô Shoorikan",
  shortName: "Shoorikan",
  kanji: "勝利館",
  meaning: "vencedor da vida",
  foundedYear: 1996,
  anniversaryYear: 2026,
  anniversaryLabel: "30 anos em 2026",
  address: {
    street: "Rua Manuel de Morais, 53",
    district: "Vila Mariana",
    city: "São Paulo",
    state: "SP",
    zip: "04126-070",
    full: "Rua Manuel de Morais, 53 — Vila Mariana, São Paulo · SP · CEP 04126-070",
  },
  phoneDisplay: "(11) 98888-4324",
  whatsappNumber: "5511988884324",
  email: "contato@academiashoorikan.com.br",
  instagram: "https://www.instagram.com/academiashoorikan",
  instagramHandle: "@academiashoorikan",
  storeInstagram: "https://www.instagram.com/shoorikanstore",
  storeHandle: "@shoorikanstore",
  currentSite: "https://www.academiashoorikan.com.br",
  mapsQuery: "Academia de Judô Shoorikan, Rua Manuel de Morais, 53, Vila Mariana, São Paulo",
  federation: "Federação Paulista de Judô",
} as const;

export function waLink(message?: string) {
  const text =
    message ??
    "Olá! Vim pelo site da Shoorikan e gostaria de agendar uma aula experimental.";
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapsQuery,
)}&output=embed`;

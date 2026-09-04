# Shoorikan — site institucional

Site institucional da **Academia de Judô Shoorikan** (Vila Mariana, São Paulo).
Next.js 14 (App Router) + TypeScript, animações com GSAP/ScrollTrigger e scroll
suave com Lenis. Multi-página, cinematográfico, com foco em conversão
(aula experimental via WhatsApp).

## Rodar localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba esta pasta para um repositório Git (GitHub/GitLab/Bitbucket) **ou** use a
   Vercel CLI (`npx vercel`) direto desta pasta.
2. Na Vercel: **New Project → importar o repositório**. O framework é detectado
   como Next.js — não precisa configurar nada.
   - Build Command: `next build` (padrão)
   - Output: `.next` (padrão)
3. Deploy. Depois ajuste o domínio e, em `app/layout.tsx`, o campo
   `metadataBase` (hoje `https://shoorikan.vercel.app`) para o domínio final.

## Estrutura

O site é **multi-página**: cada item do menu tem sua própria URL. A home é uma
landing curta (Hero + manifesto + índice) que linka para todas elas — nenhum
conteúdo do site "de uma página só" original foi perdido, só reorganizado.

```
app/
  layout.tsx            Metadados, fontes, header/footer, scroll suave
  page.tsx              Home: Hero + Manifesto + índice de páginas + JSON-LD
  historia/page.tsx      /historia
  principios/page.tsx    /principios
  modalidades/page.tsx   /modalidades
  programas/page.tsx     /programas
  equipe/page.tsx        /equipe
  projeto-social/page.tsx /projeto-social
  estrutura/page.tsx     /estrutura (O Dojo)
  horarios/page.tsx      /horarios
  visite/page.tsx        /visite
  globals.css            Sistema visual completo (tokens, seções, responsivo)
  fonts.ts               Zen Kaku Gothic New (display, com kanji) + Roboto (corpo) + Roboto Mono (rótulos)
components/
  Header, Footer, Hero, SiteIndex  Globais / home
  Historia, Principios, Modalidades, Programas, Equipe,
  ProjetoSocial, Estrutura, Horarios, Visite  Uma seção por página dedicada
  BackLink                Link "← Shoorikan" no topo de cada página de seção
lib/
  site.ts         Contato, endereço, gerador de link do WhatsApp
  content.ts      TODO o conteúdo editorial (nav, equipe, horários, história...)
  images.ts       Mapeamento das imagens reais em /public
public/
  logo/           Logo oficial da academia
  equipe/         Fotos da equipe (site oficial)
  fotos/          Fotos do dojo, treinos e turmas (site oficial)
```

## Conteúdo

Todo o texto e as imagens vêm de fontes públicas **oficiais** da academia
(`academiashoorikan.com.br` — páginas Academia, Equipe, Horários, Projeto Social —
e o Instagram `@academiashoorikan`). Nada foi inventado: produtos, números,
certificações, títulos e depoimentos refletem apenas o que a própria academia
divulga.

### O que revisar / substituir antes de publicar

- **Grade de horários** (`lib/content.ts` → `SCHEDULE`): reconstruída a partir do
  quadro publicado; confirmar horários e turmas com a academia.
- **Fotos**: as imagens do site oficial são de baixa resolução. Ideal trocar por
  um ensaio em alta (dojo, treinos, retrato do sensei Jairo) mantendo os mesmos
  nomes de arquivo em `/public`.
- **Vídeo do Hero**: hoje usa um b-roll de judô do Pexels (uso livre), definido em
  `HERO_VIDEO` em `components/Hero.tsx`. Trocar por um vídeo próprio da academia
  assim que houver (basta apontar a URL ou colocar o arquivo em `/public`).
- **metadataBase / Open Graph image**: ajustar para o domínio final.
- **CNPJ / razão social** no rodapé, se desejarem incluir.

## Acessibilidade e performance

- Respeita `prefers-reduced-motion` (desliga pin/parallax, mantém o conteúdo).
- Imagens com `loading="lazy"`; hero com `fetchPriority="high"`.
- Sem dependência de banco de imagens externo — tudo servido de `/public`.

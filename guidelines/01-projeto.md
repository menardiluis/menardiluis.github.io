# 01 — Projeto: Visão Geral, Stack e Estrutura
> Carregar este arquivo quando: início do projeto, dúvidas de arquitetura ou ao gerar configurações raiz.

---

## Contexto

Portfólio de um **Product Designer** especializado em **Design Systems, Product Design e AI no processo de design**. Site estático gerado pelo Astro, hospedado no GitHub Pages, com conteúdo editorial gerenciado pelo Decap CMS.

**Princípio-guia:** cada arquivo gerado deve ser production-ready. Sem placeholder logic, sem TODOs, sem comentários desnecessários. Código limpo, tipado quando possível.

---

## Stack

```
Framework:     Astro 4.x (output: static)
CMS:           Decap CMS (via GitHub OAuth)
Hospedagem:    GitHub Pages + GitHub Actions
Estilo:        CSS nativo com Custom Properties
UI interativa: React 18 (via Astro Islands — apenas onde necessário)
Animações:     Framer Motion (em componentes React) + CSS Animations (em .astro)
Imagens:       Componente <Image /> do Astro
Fontes:        Self-hosted em /public/fonts via @font-face
```

**Proibido:** Tailwind, styled-components, Sass, Vue, Angular, qualquer outro UI framework.

---

## Modelo de uso: Astro + React (Islands Architecture)

O Astro renderiza tudo como HTML estático por padrão. React só é enviado ao browser quando o componente recebe uma diretiva `client:*` — chamada de **Island**. O resto da página continua com zero JS.

### Diretivas disponíveis

| Diretiva | Quando o JS carrega | Usar para |
|----------|--------------------|-----------| 
| `client:load` | Imediatamente | Componentes visíveis acima da dobra |
| `client:visible` | Quando entra na viewport | Componentes mais abaixo na página |
| `client:idle` | Quando o browser está ocioso | Componentes não-críticos |
| `client:only="react"` | Igual `client:load`, sem SSR | Componentes que dependem de browser APIs |

```astro
<!-- Em qualquer página .astro -->

<!-- Estático — zero JS, renderizado no build -->
<Hero />
<ProjectCard />

<!-- Island — React + Framer Motion, ativa quando entra na tela -->
<AnimatedTimeline client:visible />

<!-- Island — ativa imediatamente (acima da dobra) -->
<MobileNav client:load />
```

### Regra de decisão: .astro ou .tsx?

```
Tem estado interno (useState, useReducer)?      → React (.tsx)
Tem animação de entrada, saída ou gesture?      → React + Framer Motion (.tsx)
Responde a eventos além de hover/focus?         → React (.tsx)
Só exibe dados, layout ou animação CSS pura?    → Astro (.astro)
```

### Componentes do portfólio que devem ser React

| Componente | Motivo |
|-----------|--------|
| `MobileNav.tsx` | Estado aberto/fechado + animação de menu |
| `Hero.tsx` | Animações de entrada orquestradas com Framer Motion |
| `ProjectFilter.tsx` | Estado do filtro ativo por categoria |
| `AnimatedCounter.tsx` | Animação de número ao entrar na viewport |
| `CaseStudyGallery.tsx` | Lightbox ou carrossel de imagens |

### Configuração

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://[SEU_USUARIO].github.io',
  base: '/',
  output: 'static',
  integrations: [react()],
  build: {
    assets: '_assets'
  }
});
```

Instalar de uma vez:
```bash
npx astro add react
npm install framer-motion
```

---

## Estrutura de arquivos
 
Gere exatamente esta estrutura. Não adicione arquivos sem justificativa.
 
```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── admin/
│   │   ├── index.html        ← painel Decap CMS
│   │   └── config.yml        ← coleções do CMS
│   ├── fonts/                ← fontes self-hosted
│   ├── images/
│   │   ├── blog/             ← uploads via CMS
│   │   └── projects/         ← thumbnails e imagens dos cases
│   └── curriculo.pdf         ← PDF estático do currículo
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Nav.astro
│   │   ├── home/
│   │   │   ├── Hero.tsx              ← React (Framer Motion)
│   │   │   ├── FeaturedProjects.astro
│   │   │   ├── RecentPosts.astro
│   │   │   └── WorkWithMe.astro
│   │   ├── blog/
│   │   │   ├── PostCard.astro
│   │   │   └── TagList.astro
│   │   ├── projects/
│   │   │   ├── ProjectCard.astro
│   │   │   ├── ProjectFilter.tsx     ← React (estado do filtro)
│   │   │   └── CaseStudyHeader.astro
│   │   └── ui/                       ← componentes React reutilizáveis
│   │       ├── MobileNav.tsx         ← React (estado aberto/fechado)
│   │       ├── AnimatedCounter.tsx   ← React + Framer Motion
│   │       └── CaseStudyGallery.tsx  ← React (lightbox)
│   ├── content/
│   │   ├── config.ts         ← schemas Zod (ver 04-conteudo.md)
│   │   ├── blog/
│   │   └── projects/
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── BlogPost.astro
│   │   └── CaseStudy.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sobre.astro
│   │   ├── curriculo.astro
│   │   ├── projetos/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       ├── global.css
│       └── tokens.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```
 
---

## Configurações raiz

### astro.config.mjs
```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://[SEU_USUARIO].github.io',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
```

### tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*":    ["src/layouts/*"],
      "@styles/*":     ["src/styles/*"],
      "@ui/*":         ["src/components/ui/*"]
    }
  }
}
```

### package.json (scripts)
```json
{
  "scripts": {
    "dev":     "astro dev",
    "build":   "astro build",
    "preview": "astro preview"
  }
}
```

### Base.astro
```astro
---
import Header from '@components/layout/Header.astro';
import Footer from '@components/layout/Footer.astro';
import '@styles/global.css';

interface Props {
  title:       string;
  description: string;
  image?:      string;
  canonical?:  string;
  noIndex?:    boolean;
}

const {
  title,
  description,
  image     = '/images/og-default.jpg',
  canonical,
  noIndex   = false,
} = Astro.props;

const canonicalURL = canonical ?? Astro.url.href;
const fullTitle    = title === 'Home'
  ? '[Seu Nome] — Product Designer'
  : `${title} · [Seu Nome]`;
---

<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0A0A0A" />

    <title>{fullTitle}</title>
    <meta name="description"        content={description} />
    <link rel="canonical"           href={canonicalURL} />
    {noIndex && <meta name="robots" content="noindex" />}

    <meta property="og:type"        content="website" />
    <meta property="og:title"       content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image"       content={new URL(image, Astro.site)} />
    <meta property="og:url"         content={canonicalURL} />

    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:title"       content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image"       content={new URL(image, Astro.site)} />

    <link rel="icon"             type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <!-- BL Melody — estática, preload do peso mais usado -->
    <link rel="preload" href="/fonts/bl-melody-bold.woff2"
          as="font" type="font/woff2" crossorigin />
    <!-- Geist Sans — variável, 1 arquivo cobre todos os pesos -->
    <link rel="preload" href="/fonts/geist-variable.woff2"
          as="font" type="font/woff2" crossorigin />
  </head>
  <body>
    <Header />
    <main id="main-content">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

# 📋 Referência Rápida

## Comandos Essenciais

```bash
# Desenvolvimento
npm run dev          # Inicia servidor local em http://localhost:3000

# Build
npm run build        # Gera site estático em dist/
npm run preview      # Visualiza build localmente

# Git
git add .
git commit -m "feat: mensagem"
git push             # Deploy automático acionado
```

---

## URLs Importantes

| Local | URL |
|-------|-----|
| Site ao vivo | `https://menardiluis.github.io` |
| CMS | `https://menardiluis.github.io/admin/` |
| GitHub Repo | `https://github.com/menardiluis/menardiluis.github.io` |

---

## Arquivos Críticos

| Arquivo | Propósito |
|---------|----------|
| [package.json](package.json) | Dependências e scripts |
| [astro.config.mjs](astro.config.mjs) | Configuração do Astro |
| [src/styles/tokens.css](src/styles/tokens.css) | Cores, fontes, espaçamento |
| [src/content/config.ts](src/content/config.ts) | Schema de conteúdo |
| [public/admin/config.yml](public/admin/config.yml) | Configuração do CMS |
| [.github/workflows/deploy.yml](.github/workflows/deploy.yml) | Deploy automático |

---

## Adicionar Novo Post (Rápido)

Criar `src/content/blog/2024-03-15-meu-post.md`:

```markdown
---
title: 'Título'
date: 2024-03-15
summary: 'Descrição curta'
category: 'Design Systems'
draft: false
---

Conteúdo aqui...
```

**Ou via CMS:** `https://menardiluis.github.io/admin/` → Blog Posts → New Post

---

## Adicionar Novo Projeto (Rápido)

Criar `src/content/projects/meu-projeto.md`:

```markdown
---
title: 'Nome do Projeto'
company: 'Empresa'
year: 2024
role: 'Product Designer'
duration: '3 meses'
categories: ['Design System']
cover: '/images/projects/meu-projeto/cover.jpg'
summary: 'Descrição.'
featured: true
order: 1
---

Conteúdo aqui...
```

---

## Atualizar Cores e Espaçamento

Editar [src/styles/tokens.css](src/styles/tokens.css):

```css
:root {
  --color-accent: #8f57d9;
  --font-size-lg: 1.5rem;
  --space-8: 2rem;
  /* ... etc */
}
```

---

## Páginas Disponíveis

| Página | URL | Arquivo |
|--------|-----|---------|
| Home | `/` | [src/pages/index.astro](src/pages/index.astro) |
| Sobre | `/sobre` | [src/pages/sobre.astro](src/pages/sobre.astro) |
| Projetos | `/projetos` | [src/pages/projetos/index.astro](src/pages/projetos/index.astro) |
| Blog | `/blog` | [src/pages/blog/index.astro](src/pages/blog/index.astro) |

---

## Suporte a Fontes

| Fonte | Tipo | Localização |
|-------|------|------------|
| Geist Sans | Variável | `/public/fonts/geist-variable.woff2` |
| Geist Mono | Variável | `/public/fonts/geist-mono-variable.woff2` |
| BL Melody | Estática | `/public/fonts/bl-melody-{regular,bold}.woff2` |

**Baixar:** [github.com/vercel/geist-font](https://github.com/vercel/geist-font)

---

## Convenções de Nomenclatura

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componente Astro | PascalCase | `Hero.astro` |
| Componente React | PascalCase | `MobileNav.tsx` |
| Página | kebab-case | `sobre.astro` |
| Post | ISO date | `2024-03-15-slug.md` |
| Projeto | slug | `meu-projeto.md` |
| CSS Classes | BEM | `.hero`, `.hero__name` |

---

## Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Site não carrega | Aguarde 5-10 min, verifique Actions |
| CMS não autentica | Confirme OAuth secrets no GitHub |
| Build falha | Rode `npm install` novamente |
| Fontes não carregam | Verifique se arquivos estão em `/public/fonts/` |
| Estilos desapareceram | Confirme imports de `tokens.css` e `global.css` |

---

## Documentação Completa

- [📖 README.md](README.md) — Overview geral
- [🚀 SETUP.md](SETUP.md) — Passo a passo de setup
- [📋 guidelines/](guidelines/) — Documentação técnica detalhada

---

**Última atualização:** 16 de março de 2026  
**Versão:** 1.0.0

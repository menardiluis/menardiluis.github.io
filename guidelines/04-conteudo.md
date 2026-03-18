# 04 — Conteúdo: Schemas, Frontmatter e Estrutura Narrativa
> Carregar este arquivo quando: gerar content collections, páginas dinâmicas ou arquivos `.md`.

---

## Schema — src/content/config.ts

Este é o contrato de tipos de todo o conteúdo. **Sempre consultar antes de gerar páginas dinâmicas.** Os campos aqui definidos são os únicos válidos no frontmatter.

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    date:     z.coerce.date(),
    summary:  z.string(),
    cover:    z.string().optional(),
    category: z.enum(['Design Systems', 'Craft de Design', 'AI no Design']),
    tags:     z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft:    z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    company:    z.string(),
    year:       z.number(),
    role:       z.string(),
    duration:   z.string(),
    categories: z.array(z.string()),
    cover:      z.string(),
    summary:    z.string(),
    featured:   z.boolean().default(false),
    order:      z.number().default(99),
  }),
});

export const collections = { blog, projects };
```

---

## Frontmatter de post de blog

```md
---
title:    'Título do Post'
date:     2024-03-01
summary:  'Uma frase que resume o post — aparece na listagem e no OG.'
cover:    '/images/blog/nome-do-post/cover.jpg'
category: 'Design Systems'
tags:     ['tokens', 'governança', 'documentação']
featured: false
draft:    false
---
```

**Valores válidos para `category`** (exatos, case-sensitive):
- `Design Systems`
- `Craft de Design`
- `AI no Design`

---

## Frontmatter de projeto

```md
---
title:      'Nome do Projeto'
company:    'Empresa ou Cliente'
year:       2024
role:       'Product Designer'
duration:   '3 meses'
categories: ['Design System', 'Mobile']
cover:      '/images/projects/slug/cover.jpg'
summary:    'Uma linha descrevendo o projeto e seu impacto principal.'
featured:   true
order:      1
---
```

**`order`** define a sequência de exibição na listagem. Menor número = aparece primeiro.

---

## Estrutura narrativa do case study (obrigatória)

Todo arquivo `.md` de projeto deve seguir esta estrutura de seções, nesta ordem:

```md
## Contexto
[Empresa, momento de mercado, problema de negócio que originou o projeto]

## Desafio
[Problema de design específico, constraints técnicas e organizacionais, usuários afetados]

## Processo
[Pesquisa realizada, hipóteses levantadas, iterações feitas, decisões tomadas e por quê]

## Solução
[O que foi construído — incluir imagens com: ![descrição alt](caminho-da-imagem)]

## Resultado
[Métricas mensuráveis, aprendizados, impacto no negócio e nos usuários]

## Reflexão
[Opcional — o que faria diferente se refizesse o projeto hoje]
```

---

## Temáticas do blog

Ao gerar posts de exemplo, usar exclusivamente estes eixos:

| Categoria | Exemplos de temas |
|-----------|------------------|
| **Design Systems** | Arquitetura de tokens, governança, documentação, escala, componentes |
| **Craft de Design** | Processo criativo, decisão visual, qualidade, referências |
| **AI no Design** | Ferramentas de AI, experimentações práticas, reflexões críticas sobre o papel da AI |

---

## Imagens em conteúdo Markdown

Convenção de pastas:

```
/public/images/
  blog/
    [slug-do-post]/
      cover.jpg          ← capa do post
      [nome-descritivo].jpg
  projects/
    [slug-do-projeto]/
      cover.jpg          ← thumbnail da listagem (16:9, mínimo 1200×675px)
      [nome-descritivo].jpg
```

Sintaxe no Markdown:
```md
![Descrição acessível da imagem](/images/projects/redesign-checkout/fluxo-atual.jpg)
```

Sempre incluir `alt` descritivo — não deixar vazio.

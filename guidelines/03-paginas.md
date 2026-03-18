# 03 — Especificação das Páginas
> Carregar este arquivo quando: gerar ou editar qualquer página do site.  
> Pré-requisito: carregar `02-design-tokens.md` junto.

---

## Home — index.astro

**Objetivo:** causar delight imediato. O visitante reconhece o nível do designer nos primeiros 3 segundos.

### Seções (em ordem)

| # | Seção | Componente |
|---|-------|-----------|
| 1 | Hero | `Hero.astro` |
| 2 | Projetos em destaque | `FeaturedProjects.astro` |
| 3 | Posts recentes | `RecentPosts.astro` |
| 4 | Sobre (resumo) | inline na página |
| 5 | Trabalhe comigo | `WorkWithMe.astro` |

### Hero — comportamento detalhado

- Fundo: grid CSS animado com linhas `--color-border` (opacidade 0.4) ou textura noise via SVG
- Nome: `font-family: var(--font-display)`, `font-size: var(--font-size-hero)`
- Tagline: `font-size: var(--font-size-md)`, `color: var(--color-text-secondary)`
- CTA primário "Trabalhe comigo": classe `.btn.btn--primary`
- CTA secundário "Ver projetos": classe `.btn.btn--secondary`
- Animação: cada elemento com `.animate-fade-up` + `.stagger-1` até `.stagger-4`

```astro
---
// src/components/home/Hero.astro
// Sem props — conteúdo fixo
---

<section class="hero">
  <div class="container hero__inner">
    <p class="hero__eyebrow animate-fade-up stagger-1">Product Designer</p>
    <h1 class="hero__name animate-fade-up stagger-2">[Seu Nome]</h1>
    <p class="hero__tagline animate-fade-up stagger-3">
      Design Systems · Craft · AI
    </p>
    <div class="hero__actions animate-fade-up stagger-4">
      <a href="mailto:[seu@email.com]" class="btn btn--primary">Trabalhe comigo</a>
      <a href="/projetos" class="btn btn--secondary">Ver projetos</a>
    </div>
  </div>
</section>
```

### ProjectCard — comportamento detalhado

- Estado default: thumbnail, título, empresa, ano, 1 tag
- Estado hover: overlay `var(--color-accent-muted)`, título sobe `translateY(-4px)`
- Transição: `var(--transition-slow)` em todas as propriedades animadas

### FeaturedProjects — lógica de dados

```astro
---
import { getCollection } from 'astro:content';
import ProjectCard from '@components/projects/ProjectCard.astro';

const featured = (await getCollection('projects', ({ data }) => data.featured))
  .sort((a, b) => a.data.order - b.data.order)
  .slice(0, 3);
---
```

### RecentPosts — lógica de dados

```astro
---
import { getCollection } from 'astro:content';
import PostCard from '@components/blog/PostCard.astro';

const recent = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 2);
---
```

### WorkWithMe — comportamento

- Fundo: `var(--color-surface)`
- Texto direto: disponibilidade, tipo de projeto aceito, forma de contato
- Botão: `.btn.btn--primary` com `href="mailto:[seu@email.com]"`

---

## Sobre — sobre.astro

### Estrutura da página (ordem)

1. Foto editorial — proporção 3:4 ou 1:1, `border-radius: var(--radius-md)`
2. Nome completo em `font-display`
3. Especialidade em `color: var(--color-text-secondary)`
4. Bio em parágrafos — narrativa em 1ª pessoa
5. Linha do tempo de carreira
6. Valores / forma de trabalhar
7. Links sociais (LinkedIn, GitHub)
8. CTA para `/curriculo`

### Linha do tempo — HTML esperado

```html
<ol class="timeline">
  <li class="timeline__item">
    <span class="timeline__year">2024</span>
    <div class="timeline__content">
      <strong>Empresa X</strong>
      <p>Cargo — descrição breve do impacto</p>
    </div>
  </li>
</ol>
```

---

## Currículo — curriculo.astro

### Layout

- Desktop: duas colunas — sidebar 30% + conteúdo principal 70%
- Mobile: uma coluna

### Sidebar
Foto pequena, nome, cargo, contatos, competências, ferramentas, idiomas.

### Conteúdo principal
Experiência profissional (detalhada) + Formação.

### Botão de download

```astro
<a href="/curriculo.pdf" download class="btn btn--primary">
  Baixar PDF
</a>
```

O PDF é um asset estático em `/public/curriculo.pdf`. **Não gerar o PDF dinamicamente.**

---

## Projetos — projetos/index.astro

### Lógica de dados

```astro
---
import { getCollection } from 'astro:content';

const projects = (await getCollection('projects'))
  .sort((a, b) => a.data.order - b.data.order);
---
```

### Layout da listagem

- Grid responsivo: 1 coluna mobile → 2 colunas tablet → 3 colunas desktop
- Filtro por categoria: JS vanilla sem reload
- Cada item usa `ProjectCard.astro`

---

## Projeto individual — projetos/[slug].astro

```astro
---
import { getCollection } from 'astro:content';
import CaseStudy from '@layouts/CaseStudy.astro';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map(p => ({
    params: { slug: p.slug },
    props:  { project: p }
  }));
}

const { project } = Astro.props;
const { Content } = await project.render();
---

<CaseStudy {...project.data}>
  <Content />
</CaseStudy>
```

---

## Blog — blog/index.astro

### Lógica de dados

```astro
---
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
---
```

---

## Post individual — blog/[slug].astro

```astro
---
import { getCollection } from 'astro:content';
import BlogPost from '@layouts/BlogPost.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map(p => ({
    params: { slug: p.slug },
    props:  { post: p }
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<BlogPost {...post.data}>
  <Content />
</BlogPost>
```

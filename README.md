# Portfolio - Luis Menardi

Portfólio de **Luis Menardi** — Design Systems | Product Designer | Design Engineer

Construído com **Astro 4.x**, **React 18**, **Framer Motion** e hospedado no **GitHub Pages** com conteúdo gerenciado pelo **Decap CMS**.

---

## 🚀 Quick Start

### 1. Pré-requisitos
- Node.js 18+
- npm ou yarn

### 2. Instalação

```bash
# Clone o repositório
git clone https://github.com/menardiluis/menardiluis.github.io.git
cd menardiluis.github.io

# Instale as dependências
npm install
```

### 3. Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### 4. Build para produção

```bash
# Construa o site estático
npm run build

# Visualize a build localmente
npm run preview
```

---

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/          # Componentes Astro e React
│   │   ├── layout/          # Header, Footer
│   │   ├── home/            # Componentes da home
│   │   ├── blog/            # Componentes do blog
│   │   ├── projects/        # Componentes de projetos
│   │   └── ui/              # Útilitários e motion
│   ├── content/
│   │   ├── blog/            # Posts em Markdown
│   │   ├── projects/        # Projetos em Markdown
│   │   └── config.ts        # Schema de conteúdo
│   ├── pages/               # Páginas estáticas (.astro)
│   ├── layouts/             # Layouts base
│   └── styles/              # CSS global e tokens
├── public/
│   ├── admin/               # Decap CMS
│   ├── fonts/               # Fontes self-hosted
│   └── images/              # Imagens do site
├── .github/workflows/       # GitHub Actions
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

---

## 🎨 Design Tokens

Todos os valores visuais estão centralizados em [src/styles/tokens.css](src/styles/tokens.css):

- **Cores:** Primary, secondary, accent, backgrounds
- **Tipografia:** Display, body, mono (com suporte a fonte variável)
- **Espaçamento:** Scale de 0.25rem a 8rem
- **Border radius, transições, sombras**

Regra absoluta: **Nunca use valores hardcoded.** Sempre referencie tokens via `var(--token-name)`.

---

## 📝 Adicionando Conteúdo

### Novo Post de Blog

Crie um arquivo em `src/content/blog/YYYY-MM-DD-slug.md`:

```markdown
---
title: 'Título do Post'
date: 2024-03-15
summary: 'Uma linha descrevendo o post'
cover: '/images/blog/nome-do-post/cover.jpg'
category: 'Design Systems'
tags: ['tokens', 'governança']
featured: false
draft: false
---

# Conteúdo aqui...
```

**Categorias válidas:** Design Systems | Craft de Design | AI no Design

### Novo Projeto

Crie um arquivo em `src/content/projects/slug.md`:

```markdown
---
title: 'Nome do Projeto'
company: 'Empresa'
year: 2024
role: 'Product Designer'
duration: '3 meses'
categories: ['Design System', 'Mobile']
cover: '/images/projects/slug/cover.jpg'
summary: 'Descrição curta do projeto'
featured: true
order: 1
---

## Contexto
...

## Desafio
...
```

---

## 🛠️ Decap CMS (Gerenciamento de Conteúdo)

### Acessar o painel

1. Vá para: `https://menardiluis.github.io/admin/`
2. Faça login com sua conta GitHub
3. Crie, edite ou publique posts e projetos

### Configurar OAuth do GitHub

1. Vá em **GitHub Settings → Developer settings → OAuth Apps → New OAuth App**
2. Preencha:
   - Application name: `Portfolio CMS`
   - Homepage URL: `https://menardiluis.github.io`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
3. Copie o **Client ID** e **Client Secret**
4. Guarde para configuração futura se precisar usar outro backend

---

## ✅ Deploy Automático

Toda vez que você faz push para `main`, o GitHub Actions automaticamente:

1. Instala dependências
2. Constrói o site estático
3. Faz deploy no GitHub Pages

O site estará disponível em: `https://menardiluis.github.io`

---

## 🎬 Componentes e Padrões

### Astro vs React

- **Astro (.astro):** Layout, conteúdo estático, zero JavaScript
- **React (.tsx):** Componentes interativos, com estado, animações

### Framer Motion

Animações são definidas em [src/components/ui/motion.ts](src/components/ui/motion.ts) e reutilizadas:

```tsx
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@ui/motion';

export default function MyComponent() {
  return (
    <motion.section variants={staggerContainer} initial="hidden" animate="visible">
      <motion.h1 variants={fadeUp}>Olá</motion.h1>
    </motion.section>
  );
}
```

### CSS Global

- Variáveis customizadas em `:root`
- Classes utilitárias (`.btn`, `.card`, `.grid`)
- Animações (`.animate-fade-up`, `.stagger-1`, etc)

---

## 🔧 Stack Completa

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| Astro | 4.x | Framework estático |
| React | 18.x | Componentes interativos |
| Framer Motion | 10.x | Animações |
| TypeScript | 5.x | Tipagem |
| CSS Nativo | — | Estilo (nenhum preprocessador) |
| Decap CMS | 3.x | Gerenciamento de conteúdo |

**Proibido:** Tailwind, styled-components, Sass, Vue, Angular

---

## 📱 Performance & SEO

- **Lighthouse targets:** Performance ≥95, Accessibility ≥90
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **Images:** Otimizadas com component do Astro
- **Fonts:** Self-hosted em `/public/fonts`

---

## 📖 Referências

- [Guia de Projeto](guidelines/01-projeto.md)
- [Design Tokens](guidelines/02-design-tokens.md)
- [Especificação de Páginas](guidelines/03-paginas.md)
- [Conteúdo e Schemas](guidelines/04-conteudo.md)
- [CMS e Deploy](guidelines/05-cms-deploy.md)
- [Convenções](guidelines/06-convencoes.md)

---

## 📧 Contato

- Email: luisfelipemenardi@gmail.com
- GitHub: [@menardiluis](https://github.com/menardiluis)
- LinkedIn: [Luis Menardi](https://linkedin.com/in/menardiluis)

---

**Versão:** 1.0.0  
**Última atualização:** 16 de março de 2026

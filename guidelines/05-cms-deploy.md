# 05 — CMS e Deploy
> Carregar este arquivo quando: configurar o Decap CMS ou o pipeline de deploy no GitHub Actions.

---

## Decap CMS

### public/admin/index.html

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio CMS</title>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </head>
  <body></body>
</html>
```

### public/admin/config.yml

```yaml
backend:
  name: github
  repo: [SEU_USUARIO]/[SEU_REPOSITORIO]
  branch: main
  auth_scope: repo

media_folder: "public/images/blog"
public_folder: "/images/blog"

collections:
  - name: blog
    label: "Blog Posts"
    folder: "src/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - { label: "Título",    name: title,    widget: string }
      - { label: "Data",      name: date,     widget: datetime }
      - { label: "Resumo",    name: summary,  widget: text }
      - { label: "Capa",      name: cover,    widget: image,   required: false }
      - label: "Categoria"
        name: category
        widget: select
        options: ["Design Systems", "Craft de Design", "AI no Design"]
      - { label: "Tags",      name: tags,     widget: list,    required: false }
      - { label: "Destaque?", name: featured, widget: boolean, default: false }
      - { label: "Rascunho?", name: draft,    widget: boolean, default: false }
      - { label: "Conteúdo",  name: body,     widget: markdown }

  - name: projects
    label: "Projetos"
    folder: "src/content/projects"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Título",     name: title,      widget: string }
      - { label: "Empresa",    name: company,    widget: string }
      - { label: "Ano",        name: year,       widget: number }
      - { label: "Cargo",      name: role,       widget: string }
      - { label: "Duração",    name: duration,   widget: string }
      - { label: "Categorias", name: categories, widget: list }
      - { label: "Capa",       name: cover,      widget: image }
      - { label: "Resumo",     name: summary,    widget: text }
      - { label: "Destaque?",  name: featured,   widget: boolean, default: false }
      - { label: "Ordem",      name: order,      widget: number,  default: 99 }
      - { label: "Conteúdo",   name: body,       widget: markdown }
```

### Como o CMS funciona

1. Acessar: `https://[seu-usuario].github.io/admin/`
2. Autenticação via OAuth do GitHub — sem senha adicional
3. Todo post/projeto criado no painel gera um commit no branch `main`
4. O commit dispara o GitHub Actions, que reconstrói e faz deploy do site automaticamente

### Configuração do OAuth no GitHub

1. Ir em **Settings → Developer settings → OAuth Apps → New OAuth App**
2. Preencher:
   - Application name: `Portfolio CMS`
   - Homepage URL: `https://[seu-usuario].github.io`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
3. Salvar o **Client ID** e **Client Secret** gerados
4. Adicionar nas variáveis do repositório em **Settings → Secrets and variables → Actions**

---

## GitHub Actions — deploy.yml

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Ativar GitHub Pages

1. No repositório: **Settings → Pages**
2. Em **Source**, selecionar **GitHub Actions**
3. Fazer um push na `main` para disparar o primeiro deploy

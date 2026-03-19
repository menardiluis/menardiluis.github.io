# 🚀 Guia de Setup — GitHub Pages + TinaCMS (100% Grátis)

Este guia orienta você passo a passo para colocar seu portfólio no ar com CMS visual moderno e completamente grátis!

---

## ✨ Stack Utilizado

- **Host:** GitHub Pages (grátis, forever)
- **CMS:** TinaCMS (grátis, interface moderna)
- **Deploy:** GitHub Actions (automático)
- **Build:** Astro

---

## Passo 1: Criar o Repositório no GitHub

1. Vá para [github.com/new](https://github.com/new)
2. Nomeie o repositório como: **`menardiluis.github.io`**
3. Deixe **Public**
4. Não inicialize com README (vamos fazer isso localmente)
5. Clique **Create repository**

---

## Passo 2: Clonar e Enviar Código Local

```bash
# Clone o repositório vazio
git clone https://github.com/menardiluis/menardiluis.github.io.git
cd menardiluis.github.io

# Copie todos os arquivos deste projeto para a pasta

# Inicialize git e faça o primeiro commit
git add .
git commit -m "chore: initial setup astro portfolio"
git branch -M main
git remote add origin https://github.com/menardiluis/menardiluis.github.io.git
git push -u origin main
```

---

## Passo 3: Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. **Settings → Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique **Save**

O GitHub Pages vai iniciar automaticamente. Em poucos minutos, seu site estará em: `https://menardiluis.github.io`

---

## Passo 4: Deploy Automático com GitHub Actions

O arquivo [.github/workflows/deploy.yml](.github/workflows/deploy.yml) já vem configurado!

Toda vez que você faz `push` para `main`, o GitHub Actions vai:
1. Instalar dependências
2. Fazer build com Astro
3. Fazer deploy automático no Pages

**Confirmando funcionamento:**
1. Vá para **Actions** no seu repositório
2. Você deve ver um workflow em execução
3. Espere completar (verde ✅)

---

## Passo 5: Configurar TinaCMS (GRÁTIS!)

### 5.1 — Criar Conta TinaCMS

1. Vá para [**app.tina.io**](https://app.tina.io)
2. Clique **Sign up**
3. Selecione **GitHub**
4. Autorize o acesso
5. Pronto!

### 5.2 — Conectar Seu Repositório

1. No dashboard do Tina, clique **Create new site**
2. Selecione seu repositório **`menardiluis.github.io`**
3. Clique **Connect**
4. Tina vai detectar automaticamente `tina/config.ts`

### 5.3 — Testar o CMS

1. Você será redirecionado para o dashboard do Tina
2. Clique em **Blog Posts** ou **Projetos**
3. Clique **Create a new ...**
4. Preencha os campos com a interface visual
5. Clique **Save and Commit**
6. Tina vai:
   - Criar o arquivo
   - Fazer commit automático no GitHub
   - GitHub Actions vai fazer build e deploy

**Seu novo post/projeto aparecerá em 2-3 minutos no site!**

---

## Passo 6: Adicionar Foto de Perfil

1. Salve uma foto sua em: `public/images/profile.jpg` (proporção 3:4)
2. Faça commit e push:

```bash
git add public/images/profile.jpg
git commit -m "feat: add profile image"
git push
```

---

## Passo 7: Personálizar Informações

Atualize seus dados em diversos arquivos:

### Dados na home [src/pages/index.astro](src/pages/index.astro)
- Nome
- Email
- Especialidades

### Dados na página sobre [src/pages/sobre.astro](src/pages/sobre.astro)
- Bio completa
- Carreira
- Valores

### Dados na config [astro.config.mjs](astro.config.mjs)
- Site URL já tem seu username

---

## ✅ Checklist Final

- [ ] Repositório criado como `menardiluis.github.io`
- [ ] Código enviado para `main`
- [ ] GitHub Pages configurado
- [ ] Workflow de deploy em sucesso (verde ✅)
- [ ] Site acessível em `https://menardiluis.github.io`
- [ ] Conta TinaCMS criada
- [ ] Repositório conectado no TinaCMS
- [ ] CMS acessível via TinaCMS
- [ ] Foto de perfil inserida
- [ ] Informações pessoais atualizadas

---

## 📚 Como Usar o TinaCMS

### Adicionar um Blog Post

1. Vá para [app.tina.io](https://app.tina.io)
2. Selecione seu site
3. Clique **Blog Posts**
4. Clique **Create a new post**
5. Preencha:
   - Título
   - Data
   - Resumo
   - Categoria (select)
   - Tags (opcional)
   - Capa (imagem)
   - Conteúdo em Markdown com preview visual
6. Clique **Save and Commit**
7. Tina fará commit automático → GitHub Actions faz deploy

### Adicionar um Projeto

1. Vá para [app.tina.io](https://app.tina.io)
2. Selecione seu site
3. Clique **Projetos**
4. Clique **Create a new project**
5. Preencha todos os campos
6. Clique **Save and Commit**

### Preview em Tempo Real

- Enquanto edita, veja as mudanças em tempo real
- TinaCMS mostra uma preview ao lado
- Confirme antes de fazer commit

---

## 🐛 Troubleshooting

### "O site não apareceu ainda"
- Aguarde 5-10 minutos após fazer push
- Verifique **Actions** para ver se o workflow passou
- Limpe o cache do navegador (Ctrl+Shift+Del)

### "TinaCMS não vê as mudanças"
- Clique em **Settings** → **Fetch branches**
- TinaCMS sincroniza a cada mudança automaticamente

### "Deploy falha"
- Verifique **Actions** no GitHub para ver o erro
- Geralmente é problema no build do Astro
- Verifique se os arquivos estão no lugar certo

---

## 💡 Dicas

- **Editar pelo código:** Sempre funciona, use VS Code normalmente
- **Editar pelo CMS:** Use TinaCMS para interface visual com preview
- **Ambos funcionam juntos:** Você pode usar código e CMS ao mesmo tempo
- **Backup automático:** Git + GitHub = backup grátis e infinito
- **Histórico:** Todo commit fica guardado no GitHub

---

## 🚀 Próximos Passos

- Escrever primeiros posts no TinaCMS
- Adicionar projetos ao portfólio
- Customizar cores e fonts em `src/styles/tokens.css`
- Adicionar suas redes sociais
- Domínio customizado (opcional)

---

## 📖 Recursos Úteis

- [TinaCMS Docs](https://tina.io/docs/)
- [Astro Docs](https://docs.astro.build/)
- [GitHub Pages Docs](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

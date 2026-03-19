# 🚀 Guia de Setup — GitHub Pages + Forestry CMS (100% Grátis)

Este guia orienta você passo a passo para colocar seu portfólio no ar com CMS visual e completamente grátis!

---

## ✨ Stack Utilizado

- **Host:** GitHub Pages (grátis, forever)
- **CMS:** Forestry.io (grátis para 1 site)
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

## Passo 5: Configurar Forestry CMS (GRÁTIS!)

### 5.1 — Criar Conta Forestry

1. Vá para [app.forestry.io](https://app.forestry.io)
2. Clique **Sign up with GitHub**
3. Autorize o acesso
4. Pronto!

### 5.2 — Importar Repositório

1. No Forestry, clique **Add site**
2. Procure por **GitHub**
3. Selecione seu repositório **`menardiluis.github.io`**
4. Clique **Connect**
5. Forestry detectará automaticamente a estrutura (`.forestry/settings.yml`)

### 5.3 — Testar o CMS

1. Você será redirecionado para o dashboard do Forestry
2. Clique em **Blog Posts** ou **Projetos**
3. Clique **Create new**
4. Preencha os campos
5. Clique **Save**
6. Forestry vai:
   - Criar o arquivo
   - Fazer commit automático no GitHub
   - GitHub Actions vai fazer build e deploy

**Seu novo post/projeto aparecerá em 2-3 minutos no site!**

---

## Passo 6: Adicion

Clique **Deploy site**

Pronto! Seu site estará em `https://seu-site-aleatorio.netlify.app` (em poucos minutos)

### 3.4 — (Opcional) Usar Domínio Customizado

Para usar `menardiluis.github.io` no Netlify:

1. Na configuração do Netlify, vá em **Domain settings**
2. Clique **Add custom domain**
3. Digite `menardiluis.github.io`
4. Siga as instruções de DNS

---

## Passo 4: Configurar OAuth para Decap CMS

### 4.1 — Criar OAuth Application no GitHub

1. Vá para **GitHub → Settings → Developer settings → OAuth Apps**
2. Clique **New OAuth App**
3. Preencha:
   - **Application name:** Portfolio CMS
   - **Homepage URL:** `https://seu-site.netlify.app` (ou seu domínio)
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
4. Clique **Register application**
5. Copie o **Client ID**
6. Clique **Generate a new client secret** e copie também

### 4.2 — Adicionar Secrets no Netlify

1. No painel Netlify, vá em **Site settings → Build & deploy → Environment**
2. Clique **Edit variables**
3. Adicione dois novos:
   - **GITHUB_CLIENT_ID:** Colar o Client ID
   - **GITHUB_CLIENT_SECRET:** Colar o Client Secret
4. Redeploy o site (clique em **Trigger deploy**)

### 4.3 — Testar o CMS

1. Vá para: `https://seu-site.netlify.app/admin/` 
2. Clique **Login with GitHub**
3. Autorize o acesso
4. ✅ Painel do CMS deve aparecer!

---

## Passo 5: Adicionar Foto de Perfil

1. Salve uma foto sua em: `public/images/profile.jpg` (proporção 3:4)
2. Faça commit e push:

```bash
git add public/images/profile.jpg
git commit -m "feat: add profile image"
git push
```

O Netlify vai detectar a mudança e redeploy automaticamente!

---

## Passo 6: Personálizar Informações

Atualize seus dados em diversos arquivos:

### Dados na home [src/pages/index.astro](src/pages/index.astro)
- Nome
- Email
- especialidades

### Dados na página sobre [src/pages/sobre.astro](src/pages/sobre.astro)
- Bio completa
- Carreira
- Valores

### Dados na config [astro.config.mjs](astro.config.mjs)
- Site URL (atualize para seu domínio Netlify)

---

## ✅ Checklist Final

- [ ] Repositório criado como `menardiluis.github.io`
- [ ] Código enviado para `main`
- [ ] Site importado no Netlify
- [ ] Build deploy com sucesso no Netlify
- [ ] OAuth App criado no GitHub
- [ ] Secrets adicionados no Netlify
- [ ] CMS acessível em `/admin/`
- [ ] Foto de perfil inserida
- [ ] Informações pessoais atualizadas
- [ ] Site no ar no Netlify

---

## 🐛 Troubleshooting

### "O site não apareceu ainda"
- Aguarde 5-10 minutos após fazer push
- Verifique **Deploys** no Netlify para ver status
- Limpe o cache do navegador (Ctrl+Shift+Del)

### "CMS diz 'Invalid GitHub Config'"
- Confirme que os secrets foram salvos
- Verifique se o OAuth App está com URLs corretas
- Tente fazer logout e login novamente

### "Meu código não foi atualizado"
- Confirme que o commit foi feito: `git log`
- Confirme que o push.foi feito: `git status`
- Verifique o workflow em **GitHub → Actions**

---

## 📞 Próximos Passos

1. **Adicione projetos** via CMS em `/admin/`
2. **Escreva um post** no blog
3. **Customizador design** alterando [src/styles/tokens.css](src/styles/tokens.css)
4. **Adicione redes sociais** no Footer

---

🎉 Seu portfólio está pronto! Boa sorte!

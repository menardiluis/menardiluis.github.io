# 🚀 Guia de Setup — GitHub Pages + Decap CMS

Este guia orienta você passo a passo para colocar seu portfólio no ar!

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

# Iniciialize git e faça o primeiro commit
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

## Passo 4: Configurar Deploy Automático

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

## Passo 5: Configurar Decap CMS

### 5.1 — Criar um OAuth Application

1. Vá para **GitHub → Settings → Developer settings → OAuth Apps**
2. Clique **New OAuth App**
3. Preencha:
   - **Application name:** Portfolio CMS
   - **Homepage URL:** `https://menardiluis.github.io`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
4. Clique **Register application**
5. Copie o **Client ID**
6. Clique **Generate a new client secret** e copie também

### 5.2 — Configurar no Repositório

1. Vá para **Settings → Secrets and variables →Actions**
2. Clique **New repository secret**
3. Crie dois secrets:
   - **DECAP_CMS_GITHUB_CLIENT_ID:** Colar o Client ID
   - **DECAP_CMS_GITHUB_CLIENT_SECRET:** Colar o Client Secret

### 5.3 — Testar o CMS

1. Vá para: `https://menardiluis.github.io/admin/`
2. Clique **Login with GitHub**
3. Autorize o acesso
4. Você deve ver o painel do CMS!

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
- especialidades

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
- [ ] OAuth App criado no GitHub
- [ ] Secrets adicionados ao repositório
- [ ] CMS acessível em `/admin/`
- [ ] Foto de perfil inserida
- [ ] Informações pessoais atualizadas
- [ ] Site pelo no ar em `https://menardiluis.github.io`

---

## 🐛 Troubleshooting

### "O site não apareceu ainda"
- Aguarde 5-10 minutos após fazer push
- Verifique **Actions** para ver se o workflow passou
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

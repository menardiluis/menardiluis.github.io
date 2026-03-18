# 📝 Como Usar o Decap CMS para Adicionar Projetos

Seu CMS está **100% configurado** para que você adicione novos projetos diretamente pela interface, sem precisar tocar em código!

---

## 🚀 Acessar o CMS

1. Vá para: `https://menardiluis.github.io/admin/`
2. Clique em **Login with GitHub**
3. Autorize o acesso
4. Pronto! Você está no painel

---

## ➕ Adicionar um Novo Projeto

### Passo 1: Entrar na coleção de Projetos

Na barra lateral esquerda, clique em **Projetos**.

Você verá:
- Lista de projetos existentes
- Botão **New Project** no canto superior direito

### Passo 2: Preencher os campos obrigatórios

| Campo | O que é | Exemplo |
|-------|---------|---------|
| **Título** | Nome do projeto | "Redesign do Checkout" |
| **Empresa** | Empresa/Cliente | "Shopify Co." |
| **Ano** | Ano do projeto | 2024 |
| **Cargo** | Seu papel | "Product Designer" |
| **Duração** | Tempo que levou | "4 meses" |
| **Categorias** | Tipos de projeto | ["Design System", "Mobile"] |
| **Capa** | Imagem principal | Upload PNG/JPG |
| **Resumo** | Descrição curta | "Redesign completo do fluxo de checkout..." |

### Passo 3: Campos opcionais

- **Destaque?** → Se deve aparecer na home
- **Ordem** → Número para ordenar (menor = aparece primeiro)

### Passo 4: Escrever o conteúdo

No campo **Conteúdo**, escreva em **Markdown** usando esta estrutura:

```markdown
## Contexto
[Qual era a situação? Por que precisava redesenhar?]

## Desafio
[Qual era o problema específico de design?]

## Solução
[Como você resolveu? Que componentes criou?]

## Resultado
[Qual foi o impacto? Métricas?]
```

### Passo 5: Salvar e publicar

1. Clique em **Publish** (canto superior direito)
2. O CMS vai fazer commit automaticamente
3. GitHub Actions vai fazer deploy automático
4. Em 2-3 minutos, seu projeto estará no ar!

---

## 📸 Onde Upload as Imagens?

Ao clicar no campo **Capa**, o CMS permite você:
1. **Upload direto** - Seleciona arquivo do seu PC
2. **URL** - Cola link de imagem externa

**Dica:** Dimensões ideais: 1200x600px (proporção 2:1)

---

## 📖 Exemplo Prático Completo

### Dados do Projeto:

```
Título: "App Mobile - Redesign de Onboarding"
Empresa: "TechStartup XYZ"
Ano: 2024
Cargo: "Design Lead"
Duração: "2 meses"
Categorias: ["Mobile App", "UX Research"]
Capa: [Upload screenshot do app]
Resumo: "Redesenho completo do fluxo de onboarding, reduzindo drop-off rate em 40%"
Destaque: Sim (marcar checkbox)
Ordem: 2
```

### Conteúdo (Markdown):

```markdown
## Contexto

O app estava com taxa muito alta de abandono durante onboarding. Usuários
não entendiam por que precisavam preencher tantos dados.

## Desafio

- Reduzir campos de 12 para no máximo 5
- Manter coleta de dados essenciais
- Tornar processo intuitivo em mobile

## Solução

Criamos um fluxo em 3 passos:
1. Email básico
2. Preferências (através de cards interativos)
3. Foto de perfil (opcional)

## Resultado

- 40% redução em abandono
- Tempo médio de onboarding: 2min 30s (era 8min)
- 85% taxa de conclusão
```

---

## ❌ Deletar ou Editar um Projeto

### Para editar:
1. Vá em **Projetos**
2. Clique no projeto que quer alterar
3. Faça as mudanças
4. Clique **Publish**

### Para deletar:
1. Abra o projeto
2. Clique no botão de **menu** (⋮)
3. Selecione **Delete**
4. Confirme

---

## 📝 Mesma Coisa para Blog Posts

Blog funciona identicamente!

### Diferenças principais:

| Campo | Projetos | Blog |
|-------|----------|------|
| **Data** | Ano (número) | Data completa |
| **Slug** | Manual | Automático (YYYY-MM-DD) |
| **Categorias** | Livre | Fixa: Design Systems / Craft / AI |
| **Tags** | Não tem | Lista de tags |

---

## 🔄 Sync com GitHub

Tudo que você publica no CMS:
1. ✅ Cria um arquivo `.md` em `src/content/projects/`
2. ✅ Faz commit automático
3. ✅ Push para GitHub
4. ✅ GitHub Actions reconstrói o site
5. ✅ Deploy automático no Pages

Você **não precisa tocar em código**. O CMS cuida de tudo!

---

## 🐛 Troubleshooting

### "CMS diz autenticação recusada"
- Confirme que os secrets GitHub estão configurados
- Tente fazer logout e login novamente

### "Post publicado mas não aparece no site"
- Aguarde 2-3 minutos (tempo do GitHub Actions)
- Verifique em **GitHub → Actions** se workflow passou

### "Imagem não carrega"
- Confirme que fez upload (não apenas colou URL)
- Verifique se a imagem é maior que 100KB

---

## 📌 Checklist ao Adicionar um Projeto

- [ ] Título preenchido
- [ ] Empresa/Cliente definida
- [ ] Ano do projeto correto
- [ ] Seu cargo descrito
- [ ] Duração em texto (ex: "3 meses")
- [ ] Categorias selecionadas
- [ ] Imagem de capa uploadada
- [ ] Resumo de 1-2 linhas
- [ ] Conteúdo com Contexto, Desafio, Solução, Resultado
- [ ] Destaque marcado se relevante
- [ ] Número de ordem definido

---

**Pronto! Você pode começar a adicionar projetos agora mesmo! 🎉**

Perguntas? Volte a este guia ou consulte a [Referência Rápida](REFERENCIA.md).

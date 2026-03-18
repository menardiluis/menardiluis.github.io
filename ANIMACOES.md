# Animações Motion Dev - Documentação

## Animações Implementadas

Seu portfólio agora possui duas animações principais implementadas usando a biblioteca **Motion Dev**:

### 1. Scroll Image Reveal Effect
Animação que revela imagens ao fazer scroll na página, criando um efeito de revelação progressiva.

**Onde foi aplicada:**
- [Página inicial (Hero)](src/pages/index.astro) - imagens de projetos em destaque
- [ProjectCard component](src/components/projects/ProjectCard.astro) - imagens dos cards de projetos
- [Página de projetos](src/pages/projetos/index.astro) - todas as imagens dos cards
- [Página de projeto detail](src/pages/projetos/[...slug].astro) - imagem de capa do projeto
- [Página blog detail](src/pages/blog/[...slug].astro) - imagem de capa do post
- [Página sobre](src/pages/sobre.astro) - imagem de perfil

**Componente:** `src/components/ui/ScrollImageReveal.jsx`

```jsx
<ScrollImageReveal 
  client:load 
  src="/path/to/image.jpg" 
  alt="Descrição"
  className="custom-class"
/>
```

### 2. Scramble Text Effect
Animação que embaralha o texto ao carregar a página, executando apenas uma vez para criar uma sensação de "delight".

**Onde foi aplicada:**
- [Hero component](src/components/home/Hero.astro) - nome "Luis Menardi"
- [Página sobre](src/pages/sobre.astro) - nome "Luis Menardi"

**Componente:** `src/components/ui/ScrambleText.jsx`

```jsx
<h1><ScrambleText client:load>Luis Menardi</ScrambleText></h1>
```

## Configuração Técnica

- **Biblioteca:** Motion Dev (v5+)
- **Framework:** Astro + React
- **Client-side:** Yes (usa `client:load` no Astro)

## Como Usar

### AdicionarScroll Image Reveal em uma nova imagem:

```astro
---
import ScrollImageReveal from '@components/ui/ScrollImageReveal.jsx';
---

<ScrollImageReveal 
  client:load 
  src="/images/minha-imagem.jpg" 
  alt="Descrição da imagem"
  className="minha-classe"
/>
```

### Adicionar Scramble Text em outro elemento:

```astro
---
import ScrambleText from '@components/ui/ScrambleText.jsx';
---

<h2><ScrambleText client:load>Seu texto aqui</ScrambleText></h2>
```

## Personalização

### ScrollImageReveal
Para alterar a duração ou easing da animação, modifique em `src/components/ui/ScrollImageReveal.jsx`:

```jsx
transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
```

### ScrambleText
Para alterar a velocidade do efeito de embaralhamento, modifique a variável `duration` em `src/components/ui/ScrambleText.jsx`:

```jsx
const duration = 0.5; // em segundos
```

## Performance

- Os componentes usam `whileInView` para animar apenas quando visíveis
- Animações são executadas `once: true` (apenas uma vez por elemento)
- Tamanho inicial dos componentes é minimal (~0.38kB e ~0.64kB comprimidos)

## Dependências

As seguintes dependências foram adicionadas ao `package.json`:
- `motion`: ^5.0.0 (ou versão mais recente)

Para reinstalar as dependências:
```bash
npm install
```

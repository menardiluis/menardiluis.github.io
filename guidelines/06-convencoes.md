# 06 — Convenções, SEO, Performance e Regras para IA
> Carregar este arquivo quando: revisar código, tirar dúvida de convenção ou iniciar qualquer sessão de geração.

---

## Nomenclatura de arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes Astro | PascalCase + `.astro` | `ProjectCard.astro` |
| Componentes React | PascalCase + `.tsx` | `MobileNav.tsx` |
| Páginas | kebab-case + `.astro` | `sobre.astro` |
| Blog (conteúdo) | `YYYY-MM-DD-slug.md` | `2024-03-15-design-tokens.md` |
| Projetos (conteúdo) | `slug.md` | `redesign-checkout.md` |
| Imagens | kebab-case por contexto | `project-redesign-cover.jpg` |
| CSS classes | BEM simplificado | `.post-card`, `.post-card__title`, `.post-card--featured` |

**Onde cada tipo mora:**
- Componentes Astro → `src/components/layout/`, `home/`, `blog/`, `projects/`
- Componentes React → `src/components/ui/` (reutilizáveis) ou na pasta temática se for específico
- Nunca misturar `.astro` e `.tsx` na mesma pasta sem motivo claro

---

## Framer Motion — convenções

Usar `motion` apenas em componentes `.tsx`. Nunca importar Framer Motion em arquivos `.astro`.

### Variantes padrão do projeto

Definir variantes reutilizáveis em `src/components/ui/motion.ts` e importar onde necessário:

```ts
// src/components/ui/motion.ts
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } }
};
```

Uso em componente:
```tsx
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@ui/motion';

export default function Hero() {
  return (
    <motion.section variants={staggerContainer} initial="hidden" animate="visible">
      <motion.h1 variants={fadeUp}>Nome</motion.h1>
      <motion.p  variants={fadeUp}>Tagline</motion.p>
    </motion.section>
  );
}
```

### Regras de uso do Framer Motion

- Sempre usar `variants` — nunca animar inline com `animate={{ opacity: 0 }}`
- Preferir `whileInView` + `viewport={{ once: true }}` para animações de scroll
- Não animar mais de 4 propriedades simultâneas no mesmo elemento
- Usar as variantes de `motion.ts` antes de criar novas — manter consistência de timing

---

## Commits — Conventional Commits

```
feat:     nova página ou funcionalidade
fix:      correção de bug ou problema visual
content:  novo post ou atualização de conteúdo
style:    ajuste visual sem mudança funcional
refactor: reorganização sem mudança de comportamento
docs:     atualização de guidelines
chore:    configurações, dependências
```

---

## SEO

### Metas de performance (Lighthouse)

| Métrica | Target |
|---------|--------|
| Performance | ≥ 95 |
| Accessibility | ≥ 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |

### Imagens

- Usar sempre `<Image />` do Astro — nunca `<img>` puro para conteúdo
- Formato: WebP para fotos, SVG para ícones e ilustrações
- `alt` descritivo obrigatório em todas as imagens
- Capas de projeto: proporção 16:9, mínimo 1200×675px

### Fontes

- Self-hosted em `/public/fonts/`
- `font-display: swap` em todo `@font-face`
- Preload da fonte display no `<head>` do `Base.astro`:

```astro
<link rel="preload" href="/fonts/playfair-display-bold.woff2"
      as="font" type="font/woff2" crossorigin />
```

---

## Regras para a IA

Ao gerar código com base neste projeto, seguir obrigatoriamente:

**1. Consultar schemas antes de gerar páginas dinâmicas.**  
Os tipos das content collections estão em `04-conteudo.md`. Não inventar campos.

**2. Nunca usar valores CSS hardcoded.**  
Todos os valores de cor, espaço e tipografia devem vir de tokens declarados em `tokens.css`. Se o token não existir, criá-lo no arquivo antes de usá-lo.

**3. Gerar arquivos completos.**  
Nada de `// ... resto do código`, `// TODO` ou blocos truncados. Cada arquivo entregue deve funcionar standalone.

**4. Respeitar separação de responsabilidades:**
- Lógica de dados → páginas em `/pages`
- Apresentação → componentes em `/components`
- Estilo → CSS scoped no próprio `.astro` ou em `/styles`

**5. CSS scoped em componentes.**  
Ao gerar um componente, incluir a tag `<style>` scoped no mesmo arquivo `.astro`, usando apenas tokens.

**6. Mobile-first sem exceção.**  
CSS começa sem media query (mobile) e escala com `@media (min-width: ...)`.

**7. Acessibilidade mínima:**
- `aria-label` em links que só contêm ícone
- `alt` descritivo em todas as imagens
- Ordem lógica de headings (`h1` → `h2` → `h3`)
- Contraste mínimo AA (4.5:1 para texto, 3:1 para UI)

**8. Zero dependências desnecessárias.**  
Resolver com CSS nativo ou JS vanilla antes de sugerir qualquer pacote.

**9. Conteúdo de exemplo deve ser realista.**  
Usar as temáticas reais do blog: Design Systems, Craft de Design, AI no processo de design.

**10. Não comentar o óbvio.**  
Comentários no código apenas para decisões não-triviais ou contratos de interface (Props, types).

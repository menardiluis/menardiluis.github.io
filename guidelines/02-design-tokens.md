# 02 — Design Tokens e CSS Global
>
> Carregar este arquivo quando: gerar qualquer arquivo que contenha CSS.

---

## Regra absoluta

**Todo valor visual deve referenciar um token.** Nunca usar valores hardcoded de cor, espaço ou tipografia fora do `tokens.css`.

```css
/* ❌ NUNCA */
color: #FF3C3C;
margin-top: 48px;
font-family: 'DM Sans', sans-serif;

/* ✅ SEMPRE */
color: var(--color-accent);
margin-top: var(--space-12);
font-family: var(--font-body);
font-weight: var(--font-weight-book);
```

Se precisar de um token que não existe, crie-o em `tokens.css` seguindo a nomenclatura existente antes de usá-lo.

---

## Fontes

### Geist Sans — fonte variável

A Geist Sans é usada como fonte variável (`woff2-variations`), cobrindo o eixo de peso de 100 a 900 em um único arquivo. Isso elimina múltiplos `@font-face` e reduz o peso total de carregamento.

- **Arquivo:** `geist-variable.woff2`
- **Eixo:** `wght` — range 100–900 contínuo
- **Itálico:** não disponível na versão variável
- **Download:** [github.com/vercel/geist-font/releases](https://github.com/vercel/geist-font/releases)

### Geist Mono — fonte variável

A versão mono da Geist também tem variável disponível no mesmo repositório.

- **Arquivo:** `geist-mono-variable.woff2`
- **Eixo:** `wght` — range 100–900

### BL Melody — fonte estática

A BL Melody não possui versão variável. Continua sendo carregada como `.woff2` estáticos por peso.

- **Arquivos:** `bl-melody-regular.woff2` (400) e `bl-melody-bold.woff2` (700)
- **Licença:** comercial — adquirir separadamente

---

## tokens.css

```css
/* src/styles/tokens.css */

:root {
  /* ── Cores ── */
  --color-bg:             #fafafa;
  --color-surface:        #ebebeb;
  --color-surface-hover:  #cccccc;
  --color-border:         #d9d9d9;
  --color-text-primary:   #151515;
  --color-text-secondary: #262626;
  --color-text-disabled:  #444444;
  --color-accent:         #8f57d9;
  --color-accent-hover:   #752fd0;
  --color-accent-muted:   hsl(266, 63%, 12%);

  /* ── Tipografia — famílias ── */
  --font-display: 'BL Melody', Arial, sans-serif;
  --font-body:    'Geist Sans', Georgia, sans-serif;
  --font-mono:    'Geist Mono', 'Courier New', monospace;

  /* ── Tipografia — tamanhos ── */
  --font-size-xs:   0.75rem;    /*  12px */
  --font-size-sm:   0.875rem;   /*  14px */
  --font-size-base: 1rem;       /*  16px */
  --font-size-md:   1.125rem;   /*  18px */
  --font-size-lg:   1.5rem;     /*  24px */
  --font-size-xl:   2rem;       /*  32px */
  --font-size-2xl:  3rem;       /*  48px */
  --font-size-3xl:  4.5rem;     /*  72px */
  --font-size-hero: clamp(3.5rem, 9vw, 8rem);

    /* ════════════════════════════════════════
     TIPOGRAFIA — Pesos
     Geist Sans é variável: range 100–900 contínuo.
     Tokens intermediários como 450 só funcionam
     porque a fonte é variável — não usar em BL Melody.
     ════════════════════════════════════════ */

  --font-weight-thin:      100;
  --font-weight-light:     300;
  --font-weight-regular:   400;
  --font-weight-book:      450;  /* ← exclusivo de fonte variável */
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;
  --font-weight-extrabold: 800;
  --font-weight-black:     900;

  /* ════════════════════════════════════════
     TIPOGRAFIA — Line-height
     ════════════════════════════════════════ */

  --line-height-tight:  1.1;
  --line-height-snug:   1.3;
  --line-height-normal: 1.6;
  --line-height-loose:  1.8;

  /* ════════════════════════════════════════
     TIPOGRAFIA — Letter-spacing
     ════════════════════════════════════════ */

  --letter-spacing-tight:  -0.03em;
  --letter-spacing-normal:  0;
  --letter-spacing-wide:    0.06em;
  --letter-spacing-wider:   0.12em;
  --letter-spacing-widest:  0.2em;

  /* ── Espaçamento (base 4px) ── */
  --space-1:  0.25rem;   /*  4px */
  --space-2:  0.5rem;    /*  8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */

  /* ── Layout ── */
  --max-width-content: 72rem;
  --max-width-prose:   44rem;
  --gutter:            clamp(1.5rem, 5vw, 4rem);

  /* ── Bordas ── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-full: 9999px;

  /* ── Sombras ── */
  --shadow-sm: 0 1px 3px  rgba(0,0,0,0.4);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.5);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.6);

  /* ── Transições ── */
  --transition-fast:   150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow:   400ms cubic-bezier(0.16, 1, 0.3, 1);

  /* ── Z-index ── */
  --z-base:    0;
  --z-raised:  10;
  --z-overlay: 100;
  --z-nav:     200;
  --z-modal:   300;
}
```

---

## global.css

```css
/* src/styles/global.css */
@import './tokens.css';


/* ════════════════════════════════════════
   FONTES
   ════════════════════════════════════════ */

/* BL Melody — estática (sem versão variável disponível) */
@font-face {
  font-family: 'BL Melody';
  src: url('/fonts/bl-melody-regular.woff2') format('woff2');
  font-weight: 400;
  font-style:  normal;
  font-display: swap;
}

@font-face {
  font-family: 'BL Melody';
  src: url('/fonts/bl-melody-bold.woff2') format('woff2');
  font-weight: 700;
  font-style:  normal;
  font-display: swap;
}

/* Geist Sans — variável (1 arquivo cobre todo o range 100–900) */
@font-face {
  font-family: 'Geist Sans';
  src: url('/fonts/geist-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style:  normal;
  font-display: swap;
}

/* Geist Mono — variável */
@font-face {
  font-family: 'Geist Mono';
  src: url('/fonts/geist-mono-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style:  normal;
  font-display: swap;
}

/* ════════════════════════════════════════
   RESET
   ════════════════════════════════════════ */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--color-bg);
  color:            var(--color-text-primary);
  font-family:      var(--font-body);
  font-size:        var(--font-size-base);
  line-height:      var(--line-height-normal);
}

/* ════════════════════════════════════════
   TIPOGRAFIA BASE
   ════════════════════════════════════════ */

h1, h2, h3, h4, h5, h6 {
  font-family:    var(--font-display);
  font-weight:    var(--font-weight-bold);
  line-height:    var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color:          var(--color-text-primary);
}

h1 { font-size: var(--font-size-3xl); }
h2 { font-size: var(--font-size-2xl); }
h3 { font-size: var(--font-size-xl);  }
h4 { font-size: var(--font-size-lg);  font-weight: var(--font-weight-semibold); }
h5 { font-size: var(--font-size-md);  font-weight: var(--font-weight-semibold); }
h6 { font-size: var(--font-size-base); font-weight: var(--font-weight-medium); }

p {
  max-width:   var(--max-width-prose);
  font-weight: var(--font-weight-regular);
  color:       var(--color-text-primary);
}

/* Lead — parágrafo de destaque, usa font-weight-book (450) */
.lead {
  font-size:   var(--font-size-md);
  font-weight: var(--font-weight-book);
  color:       var(--color-text-secondary);
  line-height: var(--line-height-snug);
}

/* Label — rótulos, metadados */
.label {
  font-size:      var(--font-size-xs);
  font-weight:    var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  color:          var(--color-text-secondary);
}

a {
  color:           inherit;
  text-decoration: none;
  transition:      color var(--transition-fast);
}

img, video { display: block; max-width: 100%; }

code, pre {
  font-family: var(--font-mono);
  font-size:   var(--font-size-sm);
  font-weight: var(--font-weight-regular);

/* ════════════════════════════════════════
   LAYOUT
   ════════════════════════════════════════ */

.container {
  width:          100%;
  max-width:      var(--max-width-content);
  margin-inline:  auto;
  padding-inline: var(--gutter);
}

.sr-only {
  position:    absolute;
  width: 1px;  height: 1px;
  overflow:    hidden;
  clip:        rect(0,0,0,0);
  white-space: nowrap;
}

/* ── Botões ── */
.btn {
  display:        inline-flex;
  align-items:    center;
  gap:            var(--space-2);
  padding:        var(--space-3) var(--space-6);
  border-radius:  var(--radius-sm);
  font-family:    var(--font-body);
  font-size:      var(--font-size-base);
  font-weight:    var(--font-weight-medium);
  cursor:         pointer;
  transition:     background-color var(--transition-fast),
                  color var(--transition-fast),
                  border-color var(--transition-fast);
}

.btn--primary {
  background-color: var(--color-accent);
  color:            var(--color-bg);
  border:           2px solid transparent;
}
.btn--primary:hover { background-color: var(--color-accent-hover); }

.btn--secondary {
  background-color: transparent;
  color:            var(--color-text-primary);
  border:           2px solid var(--color-border);
}
.btn--secondary:hover {
  background-color: var(--color-surface-hover);
  border-color:     var(--color-text-secondary);
}

/* ── Animações de entrada ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.animate-fade-up {
  animation: fadeUp var(--transition-slow) both;
}

.stagger-1 { animation-delay: 100ms; }
.stagger-2 { animation-delay: 200ms; }
.stagger-3 { animation-delay: 350ms; }
.stagger-4 { animation-delay: 500ms; }
```

---

## Breakpoints

Mobile-first. Todo CSS começa sem media query (mobile) e escala para cima.

```css
/* mobile:  < 640px  → sem media query */
/* tablet:  ≥ 640px  */ @media (min-width: 640px)  { }
/* desktop: ≥ 1024px */ @media (min-width: 1024px) { }
/* wide:    ≥ 1280px */ @media (min-width: 1280px) { }
```

---

## Guia de pesos — Geist Variable

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--font-weight-thin` | 100 | Decorativo, títulos hero muito grandes |
| `--font-weight-light` | 300 | Subtítulos grandes, citações |
| `--font-weight-regular` | 400 | Corpo de texto, parágrafos |
| `--font-weight-book` | 450 | Lead, resumos — só funciona em fonte variável |
| `--font-weight-medium` | 500 | Labels, botões, navegação |
| `--font-weight-semibold` | 600 | H4–H6, destaques inline |
| `--font-weight-bold` | 700 | H1–H3 em body font quando necessário |
| `--font-weight-extrabold` | 800 | Números grandes, contadores |
| `--font-weight-black` | 900 | Uso expressivo e pontual |

> `--font-weight-book: 450` é um valor intermediário exclusivo de fontes variáveis. Não usar em `BL Melody`.


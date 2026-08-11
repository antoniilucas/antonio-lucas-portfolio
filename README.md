# Antonio Lucas — Portfolio

Portfólio pessoal de Antonio Lucas (Full Stack Developer), construído com
React, TypeScript, Vite, Tailwind CSS e Framer Motion, com direção visual
dark / cyber-terminal e verde-limão como accent.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (animações e microinterações)
- Lenis (smooth scroll)
- Lucide React (ícones)

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (roda tsc -b && vite build)
npm run preview   # servir o build de produção localmente
```

## Editar conteúdo

Todo o conteúdo editável fica isolado em `src/data/`, sem precisar tocar em
componentes ou lógica:

- `src/data/config.ts` — nome, cargo, links (e-mail, GitHub, LinkedIn) e
  caminho do currículo em PDF (`resumeUrl`).
- `src/data/projects.ts` — lista de projetos exibidos em "Selected Work".
  Cada item tem descrição, desafio, solução, stack e links (live/GitHub).
- `src/data/experience.ts` — timeline da seção "Experience".
- `src/data/stack.ts` — tecnologias organizadas por categoria na seção "Stack".

## Currículo em PDF

Coloque o arquivo em `public/resume.pdf` (ou atualize `resumeUrl` em
`src/data/config.ts` para outro caminho/URL).

## Imagens de projeto

As imagens referenciadas em `src/data/projects.ts` (`image`) são opcionais —
os cards atualmente usam um placeholder tipográfico. Para usar imagens/mockups
reais, coloque os arquivos em `public/projects/` e ajuste os componentes
`ProjectCard` e `ProjectModal` para renderizar `project.image` com `<img>`.

## Estrutura

```
src/
├── components/     # componentes reutilizáveis (Navbar, Terminal, GlitchText...)
├── sections/       # seções da página (Hero, About, Projects, Stack...)
├── data/           # conteúdo editável (projetos, experiência, stack, config)
├── hooks/          # hooks customizados (mouse position, media query...)
└── animations/     # variants do Framer Motion
```

## Acessibilidade & performance

- `prefers-reduced-motion` é respeitado: cursor customizado, glitch, magnetic
  buttons e a intro de loading são desativados/reduzidos automaticamente.
- Cursor customizado e efeitos pesados são desabilitados em telas
  touch/mobile.
- Animações usam apenas `transform`/`opacity` para evitar layout thrashing.
- Navegação por teclado com foco visível em todos os elementos interativos.

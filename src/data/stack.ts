export interface StackItem {
  name: string
  description: string
}

export interface StackCategory {
  id: string
  label: string
  items: StackItem[]
}

export const stack: StackCategory[] = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    items: [
      { name: 'React', description: 'Interfaces declarativas e componentizadas' },
      { name: 'TypeScript', description: 'Tipagem estática para código confiável' },
      { name: 'Next.js', description: 'Renderização híbrida e rotas full-stack' },
      { name: 'Tailwind CSS', description: 'Estilização utilitária e consistente' },
      { name: 'JavaScript', description: 'Base da web, sem atalhos' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    items: [
      { name: 'Node.js', description: 'Runtime JavaScript no servidor' },
      { name: 'Express', description: 'APIs REST leves e diretas' },
      { name: 'Laravel', description: 'Framework robusto para aplicações PHP' },
      { name: 'PHP', description: 'Backend server-side consolidado' },
    ],
  },
  {
    id: 'database',
    label: 'DATABASE',
    items: [
      { name: 'PostgreSQL', description: 'Banco relacional para dados críticos' },
      { name: 'MySQL', description: 'Persistência relacional amplamente usada' },
    ],
  },
  {
    id: 'tools',
    label: 'TOOLS',
    items: [
      { name: 'Docker', description: 'Ambientes isolados e reproduzíveis' },
      { name: 'Git', description: 'Controle de versão do código' },
      { name: 'GitHub', description: 'Colaboração e CI de projetos' },
      { name: 'Figma', description: 'Prototipação de interfaces' },
    ],
  },
]

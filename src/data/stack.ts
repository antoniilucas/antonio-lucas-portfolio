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
      { name: 'Next.js', description: 'Renderização híbrida e aplicações full-stack' },
      { name: 'Angular', description: 'Aplicações web estruturadas e escaláveis' },
      { name: 'JavaScript', description: 'Base da web, sem atalhos' },
      { name: 'Tailwind CSS', description: 'Estilização utilitária e consistente' },
      { name: 'Bootstrap', description: 'Componentes e interfaces responsivas' },
      { name: 'Framer Motion', description: 'Animações e interações fluidas' },
      { name: 'HTML5', description: 'Estrutura semântica para aplicações web' },
      { name: 'CSS3', description: 'Estilização, layouts e responsividade' },
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
      { name: 'APIs REST', description: 'Integração entre aplicações e serviços' },
      { name: 'Sequelize', description: 'ORM para aplicações Node.js' },
      { name: 'Prisma', description: 'ORM moderno para aplicações TypeScript' },

    ],
  },

  {
    id: 'database',
    label: 'DATABASE',
    items: [
      { name: 'PostgreSQL', description: 'Banco relacional robusto e escalável' },
      { name: 'MySQL', description: 'Banco relacional amplamente utilizado' },
      { name: 'MongoDB', description: 'Banco de dados orientado a documentos' },
      { name: 'SQL', description: 'Consultas e manipulação de dados relacionais' },
    ],
  },

  {
    id: 'tools',
    label: 'TOOLS',
    items: [
      { name: 'Git', description: 'Controle de versão do código' },
      { name: 'GitHub', description: 'Hospedagem e colaboração em projetos' },
      { name: 'Docker', description: 'Ambientes isolados e reproduzíveis' },
      { name: 'Docker Compose', description: 'Orquestração de ambientes multi-container' },
      // { name: 'AWS', description: 'Infraestrutura e serviços em cloud' },
      { name: 'Vercel', description: 'Deploy e hospedagem de aplicações web' },
      { name: 'Figma', description: 'Prototipação e desenvolvimento de interfaces' },
      { name: 'VS Code', description: 'Ambiente de desenvolvimento' },
    ],
  },
]
export interface ExperienceItem {
  id: string
  period: string
  role: string
  org: string
  description: string
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'projeto-base',
    period: '2026 — PRESENTE',
    role: 'Desenvolvedor Web',
    org: 'Jornal A Borda',
    description:
      'Desenvolvimento e manutenção de uma plataforma web em produção, atuando em backend, frontend e infraestrutura de deploy.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker'],
  },
  {
    id: 'freelance',
    period: '2025 — PRESENTE',
    role: 'Desenvolvedor Freelance',
    org: 'Projetos independentes',
    description:
      'Desenvolvimento de landing pages, aplicações web, sites e sistemas sob demanda, do design à entrega, para pequenos negócios e projetos pessoais.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'MySQL', 'MongoDB', 'Docker'],
  },
  {
    id: 'projetos-proprios',
    period: '2025 — PRESENTE',
    role: 'Criador Independente',
    org: 'Projetos Próprios',
    description:
      'Construção de SaaS e aplicações completas para estudo aprofundado de arquitetura, APIs e boas práticas de engenharia.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Prisma', 'PostgreSQL'],
  },
]

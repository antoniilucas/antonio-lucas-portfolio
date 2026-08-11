export interface Project {
  id: string
  number: string
  year: string
  name: string
  type: string
  description: string
  challenge: string
  solution: string
  tech: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'certifyhub',
    number: '01',
    year: '2025',
    name: 'CertifyHub',
    type: 'SaaS',
    description:
      'Plataforma para geração, gerenciamento e validação de certificados digitais em escala, com emissão automatizada e verificação pública.',
    challenge:
      'Certificados precisavam ser gerados em massa, validados publicamente e continuar rastreáveis mesmo após reemissões, sem comprometer performance.',
    solution:
      'Arquitetura orientada a filas para geração assíncrona de PDFs, hashes únicos de validação e uma API pública de verificação com cache agressivo.',
    tech: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    image: '/projects/certifyhub.svg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'jornal-a-borda',
    number: '02',
    year: '2024 — Presente',
    name: 'Jornal A Borda',
    type: 'Web Platform',
    description:
      'Manutenção e evolução contínua de uma plataforma jornalística real, com foco em performance de leitura e organização editorial de conteúdo.',
    challenge:
      'Base de código legada com gargalos de performance e um fluxo editorial que precisava de mais autonomia para os redatores.',
    solution:
      'Refatoração incremental de views em Blade, otimização de queries MySQL e componentização do painel editorial sem interromper a publicação diária.',
    tech: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'Docker'],
    image: '/projects/base.svg',
    liveUrl: '#',
  },
  {
    id: 'agencia-imobiliaria',
    number: '03',
    year: '2024',
    name: 'Agência Imobiliária',
    type: 'Web Application',
    description:
      'Sistema web para gestão e apresentação de imóveis, com cadastro estruturado, busca filtrada e painel administrativo próprio.',
    challenge:
      'Corretores precisavam publicar e atualizar imóveis rapidamente, com dados consistentes entre o site público e o painel interno.',
    solution:
      'API REST centralizada em Express com Prisma sobre MySQL, servindo tanto o painel administrativo quanto a vitrine pública de imóveis.',
    tech: ['React', 'Node.js', 'Express', 'Prisma', 'MySQL'],
    image: '/projects/imob.svg',
    githubUrl: '#',
  },
]

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
  // {
  //   id: 'CRM-AAA',
  //   number: '01',
  //   year: '2025',
  //   name: 'CRM GOATII',
  //   type: 'CRM',
  //   description:
  //     'Plataforma para geração, gerenciamento e validação de certificados digitais em escala, com emissão automatizada e verificação pública.',
  //   challenge:
  //     'Certificados precisavam ser gerados em massa, validados publicamente e continuar rastreáveis mesmo após reemissões, sem comprometer performance.',
  //   solution:
  //     'Arquitetura orientada a filas para geração assíncrona de PDFs, hashes únicos de validação e uma API pública de verificação com cache agressivo.',
  //   tech: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL'],
  //   image: '/projects/certifyhub.svg',
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
  // {
  //   id: 'agencia-imobiliaria',
  //   number: '03',
  //   year: '2024',
  //   name: 'Agência Imobiliária',
  //   type: 'Web Application',
  //   description:
  //     'Sistema web para gestão e apresentação de imóveis, com cadastro estruturado, busca filtrada e painel administrativo próprio.',
  //   challenge:
  //     'Corretores precisavam publicar e atualizar imóveis rapidamente, com dados consistentes entre o site público e o painel interno.',
  //   solution:
  //     'API REST centralizada em Express com Prisma sobre MySQL, servindo tanto o painel administrativo quanto a vitrine pública de imóveis.',
  //   tech: ['React', 'Node.js', 'Express', 'Prisma', 'MySQL'],
  //   image: '/projects/imob.svg',
  //   githubUrl: '#',
  // },
  {
    id: 'goatii',
    number: '01',
    year: '2026',
    name: 'Goatii',
    type: 'Web Application',
    description:
      'Plataforma web desenvolvida para apresentação de serviços e projetos da Goatii Digital Technology, com foco em identidade visual, navegação e experiência do usuário.',
    challenge:
      'Criar uma presença digital profissional que apresentasse os serviços, projetos e proposta da Goatii de forma clara, moderna e responsiva.',
    solution:
      'Desenvolvimento de uma interface responsiva e componentizada, estruturada para apresentar a marca, serviços e projetos de forma organizada e com uma experiência de navegação fluida.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/goatii.jpeg',
    githubUrl: 'https://github.com/antoniilucas/goatii',
    liveUrl: 'https://goatii.vercel.app',
  },

  {
    id: 'sistema-inteligente',
    number: '02',
    year: '2026',
    name: 'Sistema Inteligente de Gestão de Espaços Corporativos',
    type: 'Web Application',
    description:
      'Sistema web inteligente para gestão e otimização de espaços corporativos, auxiliando na alocação de equipes em salas e ambientes de um edifício empresarial.',
    challenge:
      'Ocupação inadequada dos espaços corporativos, com salas subutilizadas, conflitos de alocação e necessidade de considerar diferentes restrições para distribuir as equipes.',
    solution:
      'Desenvolvimento de uma solução com backend em FastAPI e banco de dados estruturado, integrada a uma interface React para gerenciamento de ambientes, equipes, restrições e execução das alocações.',
    tech: ['React', 'Python', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    image: '/sistemainteligente.jpeg',
    githubUrl: 'https://github.com/antoniilucas/sistema-inteligente',
    liveUrl: 'https://sistema-inteligente-gamma.vercel.app',
  },

  {
    id: 'vitta-auto',
    number: '03',
    year: '2026',
    name: 'Vitta Auto Seguros',
    type: 'Web Platform',
    description:
      'Landing page desenvolvida para uma empresa do segmento de seguros automotivos, com foco em apresentação de serviços, geração de contatos e experiência responsiva.',
    challenge:
      'Apresentar os serviços de seguros de forma clara e profissional, facilitando a navegação dos visitantes e o contato com a empresa.',
    solution:
      'Desenvolvimento de uma interface responsiva com seções informativas, chamadas para ação, formulário integrado ao WhatsApp, FAQ e elementos de interação para melhorar a experiência do usuário.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SVG'],
    image: '/vitta-auto.jpeg',
    githubUrl: 'https://github.com/antoniilucas/vitta-auto',
    liveUrl: 'https://vitta-auto.vercel.app',
  },

  {
    id: 'Sistema-CRUD',
    number: '04',
    year: '2026',
    name: 'Sistema com CRUD',
    type: 'Web Application',
    description:
      'Sistema web desenvolvido para gerenciamento de registros, permitindo cadastrar, visualizar, atualizar e excluir informações por meio de uma interface integrada a uma API.',
    challenge:
      'Criar uma aplicação capaz de organizar e manipular dados de forma estruturada, garantindo a comunicação entre a interface e o backend.',
    solution:
      'Desenvolvimento de uma aplicação full stack com operações CRUD, API REST e persistência de dados, conectando o frontend ao backend para gerenciamento dos registros.',
    tech: ['React', 'Node.js', 'Express', 'Prisma', 'MySQL'],
    image: '/crud.jpeg',
    githubUrl: 'https://github.com/antoniilucas/cadastro-de-usuarios',
    liveUrl: 'https://cadastro-de-usuarios-phi-lovat.vercel.app/',
  },
]

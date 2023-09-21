export const experiences = [
  {
    id: 1,
    icon: '/react.svg',
    iconBg: '#629bf0',
    title: 'React',
    details: [
      'NextJs',
      'Hooks',
      'React Router',
      'Context',
      'PropTypes',
      'Components',
      'Events',
    ],
  },
  {
    id: 2,
    icon: '/js.svg',
    iconBg: '#8257e5',
    title: 'Javascript',
    details: [
      'Objects',
      'Strings',
      'Arrays',
      'Promisses',
      'Fetch',
      'NPM',
      'GIT',
      'RegExp',
    ],
  },
  {
    id: 3,
    icon: '/server1.png',
    iconBg: '#629bf0',
    title: 'Node js',
    details: [
      'Express',
      'Sqlite',
      'Authentication',
      'Http requests',
      'Migrations',
      'JWS',
      'Knex',
      'Jest',
    ],
  },
  {
    id: 4,
    icon: '/html.svg',
    iconBg: '#8257e5',
    title: 'HTML / CSS',
    details: [
      'TailwindCSS',
      'Styled Components',
      'Sass',
      'Layout Responsivo',
      'Chakra UI',
      'Flexbox',
      'Grid layout',
      'Stitches',
    ],
  },
  {
    id: 5,
    icon: '/more.svg',
    iconBg: '#8257e5',
    title: 'Other Skills',
    details: [
      'Intermediate English',
      'Typescript',
      'Figma',
      'UI/UX',
      'Photoshop',
      'Premiere',
    ],
  },
]

export const services = [
  {
    id: 1,
    title: 'React',
    icon: '/reactjs.svg',
  },
  {
    id: 2,
    title: 'NextJs',
    icon: '/nextjs.svg',
  },
  {
    id: 3,
    title: 'NodeJs',
    icon: '/nodejs.svg',
  },
  {
    id: 4,
    title: 'Typescript',
    icon: '/typescript.svg',
  },
]

export const projects = [
  {
    id: 1,
    name: 'Ignite Call',
    image: '/ignite-call.png',
    description: 'Agendamento de horários integrado com api do google calendar',
    tags: [
      {
        name: 'node-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Ignite-Call',
  },
  {
    id: 2,
    name: 'Upload AI',
    image: '/uploadai2.png',
    description:
      'Chat com inteligencia artificial baseado em videos enviados e transcritos pela open ai',
    tags: [
      {
        name: 'node-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Upload-ai',
  },
  {
    id: 3,
    name: 'Cofee Delivery',
    image: '/cofee-delivery.png',
    description: 'Delivery de cafés com controle de quantidades e carrinho.',
    tags: [
      {
        name: 'node-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Cofee-Delivery',
  },
  {
    id: 4,
    name: 'Food explorer',
    image: '/foodexplorer.png',
    description:
      'Aplicação para restaurante onde o admin pode adicionar ou editar pratos.',
    tags: [
      {
        name: 'node-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Food-explorer-fullstack',
  },
  {
    id: 5,
    name: 'Rocketnotes',
    image: '/rocketnotes.png',
    description:
      'Dashboard para criação de notas e links úteis agrupados por tags.',
    tags: [
      {
        name: 'node-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Rocketnotes',
  },
  {
    id: 6,
    name: 'Ignite shop',
    image: '/igniteshop.png',
    description:
      'Loja de camisetas com sistema de pagamento usando api do stripe.',
    tags: [
      {
        name: 'next-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'stitches',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Ignite-shop',
  },
  {
    id: 7,
    name: 'Dashgo',
    image: '/dashgo.png',
    description:
      'Dashboard com acesso a lista de usuários cadastrados e estatísticas usando MirageJs.',
    tags: [
      {
        name: 'next-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'chakra-ui',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Dashgo',
  },
  {
    id: 8,
    name: 'Ignews',
    image: '/ignews.png',
    description:
      'Blog de notícias com opção de assinatura mensal para conteúdo exclusivo com stripe.',
    tags: [
      {
        name: 'next-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/IgNews',
  },
  {
    id: 9,
    name: 'DT Money',
    image: '/dtmoney.png',
    description:
      'Aplicativo de controle de gastos com valores de entrada e saída.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescrypt',
        color: 'green-text-gradient',
      },
      {
        name: 'styles-components',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/DT-Money',
  },
  {
    id: 10,
    name: 'Spacerocket',
    image: '/spacerocket.png',
    description:
      'Capsula do tempo onde o usuário pode fazer login e postar suas memorias em um formato de feed.',
    tags: [
      {
        name: 'next-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/NLW-Spacetime',
  },

  {
    id: 11,
    name: 'Metaversus',
    image: '/metaverse.png',
    description:
      'Website metaversus criado com threejs para aplicação de efeitos.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/NLW-Spacetime',
  },
  {
    id: 12,
    name: 'Pomodoro',
    image: '/pomodoro.png',
    description:
      'Método pomodoro para concentração e realização de tarefas com histórico.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/NLW-Spacetime',
  },
  {
    id: 13,
    name: 'Pets',
    image: '/pets.png',
    description:
      'Rede social para pets onde o usuário pode fazer login, postar, deletar fotos e realizar comentarios.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-primary',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Cats',
  },
  {
    id: 14,
    name: 'Todo List',
    image: '/teste.png',
    description:
      'Todo List com funçoes de adicionar, remover e marcar tarefa como concluída.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    link: "https://github.com/gabislera/To-do-List'",
  },
  {
    id: 15,
    name: 'Feed',
    image: '/feed.png',
    description:
      'Feed de comentários onde é possivel comentar, apagar o comentario e dar likes',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    link: 'https://github.com/gabislera/Post-feed',
  },
]

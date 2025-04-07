const projects = [
  {
    name: "CASACOR",
    description: "A maior e mais completa plataforma de arquitetura, design de interiores e paisagismo das Américas.",
    image:
      "data:image/png;base64,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",
    gitHub: "",
    deploy: "https://casacor.abril.com.br/pt-BR",
  },
  {
    name: "ProjectInBio ",
    description: "SASS para criação de links personalizados para o Instagram.",
    image: "https://i.pinimg.com/736x/73/da/01/73da01536e795d72207a46f692aa4983.jpg",
    gitHub: "https://github.com/MatheusAltrao/project-in-bio",
    deploy: "https://project-in-bio-rho.vercel.app/",
  },

  /*   {
    name: "FSW Barber",
    description: "um sistema de agendamento de serviços para barbearias!",
    image:
      "https://camo.githubusercontent.com/6db50351bf6ce99e0f59afab77bc5c1df00705213dba896b9043c34b892748d9/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f61332f39622f62382f61333962623834356439373339306430323565636135323634376238383334312e706e67",
    gitHub: "https://github.com/MatheusAltrao/FSW-barber",
    deploy: "https://fsw-barber-lemon.vercel.app/",
  }, */

  {
    name: "Amigo Secreto",
    description: "Sistema de amigo secreto para você e seus amigos.",
    image: "https://i.pinimg.com/736x/01/d9/dd/01d9dd109d9707391844312273e85bca.jpg",
    gitHub: "https://github.com/MatheusAltrao/web-amigo-secreto-app",
    deploy: "https://web-amigo-secreto-app.vercel.app/",
  },

  {
    name: "Bloquinho de carnaval",
    description: "Utlizando o SearchParams do NextJS para filtrar os blocos.",
    image: "https://assets.codante.io/challenge-screenshots/hackathon-do-carnaval-de-2025-103171495-NohtIUpsru.webp",
    gitHub: "https://github.com/MatheusAltrao/bloquinho-de-carnaval",
    deploy: "https://bloquinho-de-carnaval-3351.vercel.app/",
  },

  {
    name: "Kerdos",
    description: "SASS de controle financeiro, com gráficos e relatórios para melhor visualização.",
    image: "https://i.pinimg.com/originals/2c/1d/27/2c1d2765695234ee48c45809ed033bc1.png",
    gitHub: "https://github.com/MatheusAltrao/Kerdos",
    deploy: "https://kerdos.vercel.app/",
  },

  {
    name: "Olimpíadas",
    description: "Este projeto utiliza a API do Codante para fornecer informações atualizadas sobre os Jogos Olímpicos de 2024.",
    image: "https://i.pinimg.com/736x/88/1c/a0/881ca02973a0bb6e594a9538bb2cf9b3.jpg",
    gitHub: "https://github.com/MatheusAltrao/olimpiadas-api-codante",
    deploy: "https://olimpiadas-api-codante.vercel.app/",
  },

  /*   {
    name: "Holiday Plan",
    description: "Plneje e organize as suas férias usando o Holiday Plan. ",
    image:
      "https://i.pinimg.com/originals/51/51/c1/5151c1af1135cbb166eebf1b96e8a85e.png",
    gitHub: "https://github.com/MatheusAltrao/HolidayPlan",
    deploy: "https://holiday-plan.vercel.app/",
  }, */

  {
    name: "CodeAI",
    description: "Faça perguntas para a nossa IA especialista em javascript.",
    image:
      "https://camo.githubusercontent.com/1ea74d7662282de20df1bdc1dd4d9a6680a92cbdc0691104bb305b1ccf504f8c/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f35342f31322f38332f35343132383337646334656662376639646563393837383934646632326564392e706e67",
    gitHub: "https://github.com/MatheusAltrao/CodeAI",
    deploy: "https://code-ia.vercel.app/",
  },

  {
    name: "Blog",
    description: "Conheça mais sobre mim, conto um pouco  do meu dia a dia e posto lá. ",
    image: "https://i.pinimg.com/originals/69/80/f7/6980f7af3e36d70c7b3b6d92d5cdbfc8.jpg",
    gitHub: "https://github.com/MatheusAltrao/Blog",
    deploy: "https://matheus-blog-oauq.vercel.app/",
  },

  {
    name: "TaskList",
    description: "Organize melhor o seu dia, listagem de tarefas e compartilhe com os seus amigos.",
    image: "https://i.pinimg.com/originals/ad/d3/04/add3043a92810d64512576232b67e32a.jpg",
    gitHub: "https://github.com/MatheusAltrao/taskList",
    deploy: "https://task-list-eta-six.vercel.app/",
  },

  {
    name: "Games",
    description: "Procure os seus games preferidos e veja muitas informações sobre ele.",
    image: "https://games-indol-five.vercel.app/_next/image?url=https%3A%2F%2Fsujeitoprogramador.com%2Fnext-api%2Ffoto14.png&w=1920&q=100",
    gitHub: "https://github.com/MatheusAltrao/Games",
    deploy: "https://games-indol-five.vercel.app/",
  },

  {
    name: "SpiderMan-Miles",
    description: "Hero section inspirado no Jogo de PS4 e PS5 Miles Morales.",
    image: "https://i.pinimg.com/originals/13/52/b3/1352b36cbf7f5db50bcc6ab2726d205e.jpg",
    gitHub: "https://github.com/MatheusAltrao/SpiderMan-Miles",
    deploy: "https://matheusaltrao.github.io/SpiderMan-Miles/",
  },
  {
    name: "Ui Notion",
    description: "Usando uma lib de editor de texto para simular funcionalidades do notion.",
    image: "https://i.pinimg.com/originals/88/dc/1f/88dc1f6b1499ff436354c1fdf11f3f84.png",
    gitHub: "https://github.com/MatheusAltrao/UiNotion",
    deploy: "https://ui-notion-seven.vercel.app/",
  },

  /* 
 
  {
    name: 'Store',
    description: 'Desenvolvendo um carrinho de compras, usando Context.',
    image: 'https://myportfolio-omega-nine.vercel.app/assets/matheuStore-7f0db33b.png',
    gitHub: 'https://github.com/MatheusAltrao/CartProducts',
    deploy: 'https://cart-products-zeta.vercel.app/',
  },

  {
    name: 'Dashboard',
    description: 'Uma dashboard para visualizações de compras.',
    image: 'https://myportfolio-omega-nine.vercel.app/assets/dashboard-17dddae2.png',
    gitHub: 'https://github.com/MatheusAltrao/Dashboard',
    deploy: 'https://dashboard-3rsk.vercel.app/',
  },
 */
  {
    name: "Assistência médica",
    description: "LandingPage para consultórios médicos, simples e direta ao ponto.",
    image: "https://myportfolio-omega-nine.vercel.app/assets/assistenciamedica-ea4c928d.png",
    gitHub: "https://github.com/MatheusAltrao/DoctorCare",
    deploy: "https://matheusaltrao.github.io/DoctorCare/",
  },

  {
    name: "Salão de beleza",
    description: "Saúde natural para os seus cabelos e dicas de tratamentos.",
    image: "https://myportfolio-omega-nine.vercel.app/assets/salaodebeleza-5a49862d.png",
    gitHub: "https://github.com/MatheusAltrao/Beautysalon.",
    deploy: "https://matheusaltrao.github.io/Beautysalon./",
  },

  {
    name: " Relax Chill Code",
    description: "Cards de músicas para escutar, relaxar e programar.",
    image:
      "https://camo.githubusercontent.com/70aedc28729beb77cfd6ecfe03a6e815f58dff9ff638ef56e66044299453a504/68747470733a2f2f692e70696e696d672e636f6d2f353634782f39352f30622f39642f39353062396432626266323431393661656437653736393136653334353463652e6a7067",
    gitHub: "https://github.com/MatheusAltrao/PlayerMusic",
    deploy: "https://player-music-two.vercel.app/",
  },
];

export { projects };

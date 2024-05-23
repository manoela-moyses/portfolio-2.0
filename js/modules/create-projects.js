//Função responsável por expor todos os meus projetos na seção de Portfólio

export default function createProjects() {
  let projects = {
    data: [
      {
        projectName: 'Portfólio 1.0',
        category: 'Coding',
        description: 'Versão 1.0 do site porfólio para apresentação dos meus projetos',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/meu-portfolio.png',
        siteLink: 'https://manoela-moyses.github.io/portfolio-1.0/',
        githubLink: 'https://github.com/manoela-moyses/portfolio-1.0'
      },
      {
        projectName: 'Odonto Clinic',
        category: 'Coding',
        description: 'Aplicação criada para clínica odontológica',
        tools: 'HTML, CSS, JavaScript e SASS',
        image: '../../../../assets/projetos/odontoclinic.png',
        siteLink: 'https://odontoclinic.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/site-saude'
      },
      {
        projectName: 'Bolo Fofo',
        category: 'Coding',
        description: 'Aplicação criada para confeitaria',
        tools: 'HTML, CSS, JavaScript e SASS',
        image: '../../../../assets/projetos/bolo-fofo.png',
        siteLink: 'https://confeitaria-rust.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/site-confeitaria'
      },
      {
        projectName: 'Imobiliária',
        category: 'WordPress',
        description: 'Site em WordPress feito para imobiliária',
        tools: 'WordPress',
        image: '../../../../assets/projetos/imobiliaria.jpg',
        siteLink: 'https://manoelamoyses.net/imobiliaria/'
      },
      {
        projectName: 'Gestus',
        category: 'Coding',
        description: 'Aplicação criada para empresa de consultoria',
        tools: 'HTML, CSS, JavaScript e SASS',
        image: '../../../../assets/projetos/gestus.png',
        siteLink: 'https://empresarial-tau.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/site-empresarial'
      },
      {
        projectName: 'Studio Beauty',
        category: 'Coding',
        description: 'Aplicação criada para salão de beleza',
        tools: 'HTML, CSS, JavaScript e SASS',
        image: '../../../../assets/projetos/site-beleza.png',
        siteLink: 'https://beleza-xi.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/site-beleza'
      },
      {
        projectName: 'Blog Fitness',
        category: 'WordPress',
        description: 'Site em WordPress feito para administração de blog',
        tools: 'WordPress',
        image: '../../../../assets/projetos/blog-fitness.png',
        siteLink: 'https://manoelamoyses.net/blogfitness/'
      },
      {
        projectName: 'Caravan',
        category: 'Coding',
        description: 'Aplicação criada no curso Bootstrap 4 da Origamid',
        tools: 'HTML, CSS, JavaScript e SASS',
        image: '../../../../assets/projetos/caravan.png',
        siteLink: 'https://manoela-moyses.github.io/caravan/',
        githubLink: 'https://github.com/manoela-moyses/caravan'
      },
      {
        projectName: 'Bikcraft',
        category: 'Coding',
        description: 'Aplicação criada no curso CSS com SASS da Origamid',
        tools: 'HTML, CSS, JavaScript e SASS',
        image: '../../../../assets/projetos/bikcraft.png',
        siteLink: 'https://bikcraft-liard.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/bikcraft'
      },
      {
        projectName: 'Altemir dos Santos',
        category: 'WordPress',
        description: 'Site em WordPress feito para advogado / consultoria jurídica',
        tools: 'WordPress',
        image: '../../../../assets/projetos/altemir.jpg',
        siteLink: 'https://altemir.adv.br/'
      },
      {
        projectName: 'Le Scone',
        category: 'Coding',
        description: 'Aplicação criada no curso CSS com SASS da Origamid',
        tools: 'HTML, CSS e SASS',
        image: '../../../../assets/projetos/le-scone.png',
        siteLink: 'https://manoela-moyses.github.io/le-scone/',
        githubLink: 'https://github.com/manoela-moyses/le-scone'
      },
      {
        projectName: 'FocusTimer',
        category: 'Coding',
        description: 'Aplicação criada nao Stage 05 do Programa Explorer da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/focus-timer.png',
        siteLink: 'https://manoela-moyses.github.io/FocusTimer-2.0/',
        githubLink: 'https://github.com/manoela-moyses/FocusTimer-2.0'
      }, {
        projectName: 'Info+ Corsan',
        category: 'WordPress',
        description: 'Este site é a plataforma de comunicação interna da Corsan®',
        tools: 'WordPress',
        image: '../../../../assets/projetos/infomais.jpg',
        siteLink: 'https://infomais.corsan.com.br/'
      }, {
        projectName: 'Meu Linktree',
        category: 'Coding',
        description: 'Árvore de links para a Bio do Instagram',
        tools: 'WordPress',
        image: '../../../../assets/projetos/meu-linktree.png',
        siteLink: 'https://manoela-moyses.github.io/meulinktree/',
        githubLink: 'https://github.com/manoela-moyses/meulinktree'
      },
      {
        projectName: 'RocketPay',
        category: 'Coding',
        description: 'Componente de cartão de crédito riado no evento Explorer Lab da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/rocketpay.png',
        siteLink: 'https://explorer-lab-beige.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/explorer-lab'
      },
      {
        projectName: 'Vet Care',
        category: 'WordPress',
        description: 'Site em WordPress feito para clínica veterinária / petshop',
        tools: 'WordPress',
        image: '../../../../assets/projetos/vet-care.png',
        siteLink: 'https://manoelamoyses.net/vetcare/'
      },
      {
        projectName: 'Projeto IMC',
        category: 'Coding',
        description: 'Desafio 02 do Stage 05 do Programa Explorer da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/imc.png',
        siteLink: 'https://manoela-moyses.github.io/projeto-imc/',
        githubLink: 'https://github.com/manoela-moyses/projeto-imc'
      },
      {
        projectName: 'Recriando layout - Extra',
        category: 'Coding',
        description: 'Desafio intermediário do Stage 02 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/desafio-extra.png',
        siteLink: 'https://stage02-extra.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/stage02-extra'
      },
      {
        projectName: 'Macaron Shop',
        category: 'WordPress',
        description: 'Site em WordPress feito para e-commerce de macarons',
        tools: 'WordPress',
        image: '../../../../assets/projetos/macaron-shop.png',
        siteLink: 'https://manoelamoyses.net/macaronshop/'
      },
      {
        projectName: 'Móveis customizados',
        category: 'Coding',
        description: 'Desafio 01 do Stage 02 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/projeto-01.png',
        siteLink: 'https://manoela-moyses.github.io/meuprojeto01/',
        githubLink: 'https://github.com/manoela-moyses/meuprojeto01'
      },
      {
        projectName: 'Treine me',
        category: 'Coding',
        description: 'Desafio 02 do Stage 02 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/treine-me.png',
        siteLink: 'https://manoela-moyses.github.io/meuprojeto02/',
        githubLink: 'https://github.com/manoela-moyses/meuprojeto02'
      },
      {
        projectName: 'Somos Fruki',
        category: 'WordPress',
        description: 'Esse site é a plataforma de comunicação interna da Fruki®',
        tools: 'WordPress',
        image: '../../../../assets/projetos/somos-fruki.jpg',
        siteLink: 'https://somosfruki.com.br/'
      }, {
        projectName: 'Biscoito da Sorte',
        category: 'Coding',
        description: 'Jogo criado no Stage 05 do Porgrama Explorer da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/biscoito-da-sorte.png',
        siteLink: 'https://biscoito-da-sorte-gray.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/biscoito-da-sorte'
      },
      {
        projectName: 'SPA Universe',
        category: 'Coding',
        description: 'SPA criada no Stage 08 do Programa Explorer da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/spa-universe.png',
        siteLink: 'https://spa-universe-tau.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/spa-universe'
      }, {
        projectName: 'Digital Fire',
        category: 'WordPress',
        description: 'Site em WordPress feito para agência digital',
        tools: 'WordPress',
        image: '../../../../assets/projetos/digital-fire.png',
        siteLink: 'https://manoelamoyses.net/digitalfire/'
      },
      {
        projectName: 'GitFav',
        category: 'Coding',
        description: 'Página de favoritos do GitHub criada no Stage 06 do Programa Explorer da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/gitfav.png',
        siteLink: 'https://gitfav-nine.vercel.app/',
        githubLink: 'https://github.com/manoela-moyses/gitfav'
      },
      {
        projectName: 'Space Cream',
        category: 'Coding',
        description: 'Grid com animação criado no Stage 03 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/space-cream.png',
        siteLink: 'https://manoela-moyses.github.io/space-cream/',
        githubLink: 'https://github.com/manoela-moyses/space-cream'
      },
      {
        projectName: 'Infoproduto',
        category: 'WordPress',
        description: 'Site em WordPress feito para divulgação de infoproduto',
        tools: 'WordPress',
        image: '../../../../assets/projetos/infoproduto.png',
        siteLink: 'https://manoelamoyses.net/infoproduto/'
      },
      {
        projectName: 'Jogo da adivinhação',
        category: 'Coding',
        description: 'Projeto criado no Stage 05 do Programa Explorer da Rocketseat',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/adivinhacao.png',
        siteLink: 'https://manoela-moyses.github.io/jogo-adivinhacao/',
        githubLink: 'https://github.com/manoela-moyses/jogo-adivinhacao'
      },
      {
        projectName: 'RocketLinks',
        category: 'Coding',
        description: 'Árvore de links criada no evento Maratona Explorer 2 da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/rocket-links.png',
        siteLink: 'https://manoela-moyses.github.io/maratona-explorer-2/',
        githubLink: 'https://github.com/manoela-moyses/maratona-explorer-2'
      },
      {
        projectName: 'Captura de E-mail',
        category: 'WordPress',
        description: 'Site em WordPress feito para captura de e-mail',
        tools: 'WordPress',
        image: '../../../../assets/projetos/captura-de-email.png',
        siteLink: 'https://manoelamoyses.net/captura-email/'
      },
      {
        projectName: 'RocketCoffee',
        category: 'Coding',
        description: 'Cardápio criado no evento Maratona Explorer 3 da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/rocket-coffee.png',
        siteLink: 'https://manoela-moyses.github.io/maratona-explorer-3/',
        githubLink: 'https://github.com/manoela-moyses/maratona-explorer-3'
      },
      {
        projectName: 'Crie seu evento',
        category: 'Coding',
        description: 'Formulário criado no Stage 03 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/form.png',
        siteLink: 'https://manoela-moyses.github.io/criando-formularios/',
        githubLink: 'https://github.com/manoela-moyses/criando-formularios'
      },
      {
        projectName: 'Área Médica',
        category: 'WordPress',
        description: 'Site em WordPress feito para clínica médica',
        tools: 'WordPress',
        image: '../../../../assets/projetos/clinica-medica.jpg',
        siteLink: 'https://manoelamoyses.net/clinicamedica/'
      },
      {
        projectName: 'Responsividade',
        category: 'Coding',
        description: 'Desafio 02 do Stage 03 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/responsividade.png',
        siteLink: 'https://manoela-moyses.github.io/responsividade/',
        githubLink: 'https://github.com/manoela-moyses/responsividade'
      },
      {
        projectName: 'Componente Trabalhos',
        category: 'Coding',
        description: 'Desafio 03 do Stage 03 do Programa Explorer da Rocketseat',
        tools: 'WordPress',
        image: '../../../../assets/projetos/trabalhos.png',
        siteLink: 'https://manoela-moyses.github.io/componente-trabalhos/',
        githubLink: 'https://github.com/manoela-moyses/componente-trabalhos'
      }, {
        projectName: '10 Minutos Exercícios',
        category: 'WordPress',
        description: 'Site em WordPress feito para apresentação de aplicativo',
        tools: 'WordPress',
        image: '../../../../assets/projetos/10-minutos-exercicios.png',
        siteLink: 'https://manoelamoyses.net/10minutosexercicios/'
      },
      {
        projectName: 'Rocket.sect',
        category: 'Coding',
        description: 'Desafio avançado do Stage 02 do Programa Explorer da Rocketseat',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/rocket-sect.png',
        siteLink: 'https://manoela-moyses.github.io/meuprojeto03/',
        githubLink: 'https://github.com/manoela-moyses/meuprojeto03'
      }, {
        projectName: 'Projeto Flexbox&Grid',
        category: 'Coding',
        description: 'Aplicação criada no Programa Fullstack JavaScript Profissional da OneBitCode',
        tools: 'HTML e CSS',
        image: '../../../../assets/projetos/flexbox-grid.png',
        siteLink: 'https://manoela-moyses.github.io/exercicio-flexbox-grid/',
        githubLink: 'https://github.com/manoela-moyses/exercicio-flexbox-grid'
      },
      {
        projectName: 'Game Craft',
        category: 'WordPress',
        description: 'Site em WordPress feito para divulgação de curso online',
        tools: 'WordPress',
        image: '../../../../assets/projetos/gamecraft.png',
        siteLink: 'https://manoelamoyses.net/gamecraft/'
      }, {
        projectName: 'Mega Sena',
        category: 'Coding',
        description: 'Aplicação criada no Minicamp Data&Dev da XPE',
        tools: 'HTML, CSS e JavaScript (com LocalStorage)',
        image: '../../../../assets/projetos/megasena.png',
        siteLink: 'https://manoela-moyses.github.io/megasena-xpe/',
        githubLink: 'https://github.com/manoela-moyses/megasena-xpe'
      }, {
        projectName: 'Calculadora de IMC',
        category: 'Coding',
        description: 'Aplicação criada no Minicamp Data&Dev da XPE',
        tools: 'HTML, CSS e JavaScript',
        image: '../../../../assets/projetos/calculadora-imc.png',
        siteLink: 'https://manoela-moyses.github.io/calculadora-imc-xpe/',
        githubLink: 'https://github.com/manoela-moyses/calculadora-imc-xpe'
      },
      {
        projectName: 'Tech Club',
        category: 'WordPress',
        description: 'Site em WordPress feito para e-commerce de tecnologia',
        tools: 'WordPress',
        image: '../../../../assets/projetos/tech-club.png',
        siteLink: 'https://manoelamoyses.net/techclub/'
      }
    ],
  };

  for (let i of projects.data) {
    let card = document.createElement('div');
    card.classList.add('card', i.category, 'hide');

    let container = document.createElement('div');
    container.classList.add('container-proj');

    let name = document.createElement('h3');
    name.classList.add('project-name');
    name.innerText = i.projectName;
    container.appendChild(name);

    let description = document.createElement('p');
    description.classList.add('project-description');
    description.innerText = i.description;
    container.appendChild(description);

    let tools = document.createElement('span');
    tools.classList.add('project-tools');
    tools.innerText = i.tools;
    container.appendChild(tools);

    let btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    let siteLink = document.createElement('a');
    siteLink.classList.add('btn1');
    siteLink.setAttribute('href', i.siteLink);
    siteLink.setAttribute('target', '_blank');
    siteLink.innerText = 'Acesse';
    btnContainer.appendChild(siteLink);

    if (i.category == 'Coding') {
      let githubLink = document.createElement('a');
      githubLink.classList.add('btn2');
      githubLink.setAttribute('href', i.githubLink);
      githubLink.setAttribute('target', '_blank');
      githubLink.innerText = 'GitHub';
      btnContainer.appendChild(githubLink);
    };

    if (i.category == 'WordPress') {
      let hiddenButton = document.createElement('button');
      hiddenButton.classList.add('btn3');
      hiddenButton.innerText = '';
      btnContainer.appendChild(hiddenButton);
    }

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    let image = document.createElement('img');
    image.setAttribute('src', i.image);
    imgContainer.appendChild(image);


    document.getElementById('projects').appendChild(card);
    card.appendChild(container);
    card.appendChild(btnContainer);
    card.appendChild(imgContainer);
  };
}
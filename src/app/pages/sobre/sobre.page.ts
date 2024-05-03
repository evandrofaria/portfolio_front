import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
})
export class SobrePage implements OnInit {
  resumeSection = `Desenvolvedor Fullstack, graduado em Análise e Desenvolvimento de Sistemas, com cinco anos de experiência em desenvolvimento de software e uma verdadeira paixão pelo design de interfaces e experiência do usuário.<br/> 
                          Especializado em Angular, TypeScript, Ionic e Java.<br/> 
                          Dedico-me a compreender e reproduzir completamente cada protótipo com precisão, enfatizando a importância de cada elemento de design.<br/> 
                          Meu objetivo é desenvolver interfaces que atendam tanto aos requisitos estéticos quanto funcionais, garantindo uma navegação fluida e intuitiva para o usuário, sempre buscando equilibrar beleza e funcionalidade, priorizando as necessidades do cliente e do usuário final.`;
  menuList = [
    { section: 'Sobre', active: true },
    { section: 'Projetos', active: false },
    { section: 'Experiências', active: false },
    { section: 'Educação', active: false },
    { section: 'Contato', active: false }
  ];
  projectList = [
    {
      img: './assets/investsus-card.png',
      name: 'InvestSUS Cidadão',
      badge: 'Ministério da Saúde',
      description: 'O InvestSUS Cidadão melhora o acesso a informações de saúde e transparência em repasses do Fundo Nacional de Saúde, convidando a sociedade a acompanhar a aplicação de recursos no SUS, com detalhes acessíveis sobre a destinação de verbas federais.',
      linkApple: 'https://apps.apple.com/br/app/investsus-cidad%C3%A3o/id1471696623',
      linkGoogle: 'https://play.google.com/store/apps/details?id=br.gov.ms.investsus',
    },
    {
      img: './assets/mbk-card.png',
      name: 'BRB Mobile',
      badge: 'Banco BRB',
      description: 'O BRB Mobile foi desenvolvido para revolucionar a gestão financeira, permite abrir contas digitais gratuitas, oferecendo serviços como cartão de crédito, empréstimos competitivos, pagamento via PIX, seguros e investimentos, tudo de forma simplificada.',
      linkApple: 'https://apps.apple.com/br/app/brb-mobile/id1005747186',
      linkGoogle: 'https://play.google.com/store/apps/details?id=la.foton.brb.myphone',
    },
    {
      img: './assets/superapp-card.png',
      name: 'SuperApp MMA',
      badge: 'Ministério do Meio Ambiente',
      description: 'O SuperApp do MMA oferece um hub para serviços ambientais, com funcionalidades como monitoramento da balneabilidade das praias e qualidade do ar, através de miniapps interativos. Visa a melhor experiência e acesso facilitado a informações ambientais.',
      linkApple: 'https://apps.apple.com/br/app/superapp-mma/id1608190929',
      linkGoogle: 'https://play.google.com/store/apps/details?id=br.gov.mma.superapp',
    },
    {
      img: './assets/conectesus-card.png',
      name: 'Meu SUS Digital',
      badge: 'Ministério da Saúde',
      description: 'O Meu SUS Digital é a porta de acesso aos serviços do Sistema Único de Saúde (SUS). O aplicativo foi desenvolvido para gerenciar a saúde pessoal do usuário, permitindo o acompanhamento de histórico de exames, vacinas, medicamentos, localização de serviços e emissão de certificados.',
      linkApple: 'https://apps.apple.com/br/app/meu-sus-digital/id1045754608',
      linkGoogle: 'https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital',
    },
    {
      img: './assets/pcn-card.png',
      name: 'BRB Crédito Imobiliário',
      badge: 'Banco BRB',
      description: 'O BRB é um simulador de financiamento imobiliário, visando melhorar a experiência do usuário com uma interface amigável. A ferramenta facilita a consulta e o planejamento financeiro para financiamento imobiliário, com respostas rápidas e uma análise de crédito mais ágil.',
      linkWeb: '#',
    },
    {
      img: './assets/nexia-card.png',
      name: 'Nexia',
      badge: 'Zello Tecnologia',
      description: 'A Nexia é uma inteligência artificial que centraliza, analisa e encontra padrões em seus dados. Por meio do aprendizado de máquina, a ferramenta faz cruzamentos de grande volume de dados para gerar insights apoiando na tomada decisões, com informações de qualidade, mais rápido do que nunca.',
      linkWeb: 'https://www.nexia.ai/',
    },
  ];
  jobsList = [
    {
      img: './assets/logos/zello-tecnologia-logo.jpeg',
      cargo: 'Desenvolvedor Full Stack',
      empresa: 'Zello Tecnologia',
      periodo: '06/2021 - 12/2023',
      atribuicoes: 'Desenvolvimento de softwares PWA/Mobile usando Ionic, Angular, TypeScript e Java com Spring Boot. Responsável por build e publicação de aplicativos para iOS e Android, com proficiência em ferramentas de prototipagem como Figma. Experiência em versionamento de código utilizando Git e GitFlow, e aplicação de metodologias ágeis e suas cerimônias.'
    },
    {
      img: './assets/logos/nox-logo.jpeg',
      cargo: 'Desenvolvedor Web',
      empresa: 'Nox Sistemas',
      periodo: '2019 - 2021',
      atribuicoes: 'Atuação no desenvolvimento de sites e aplicações web com C# e ASP.NET. Experiência com CMS como WordPress e Elementor, e gestão de banco de dados SQL Server.'
    },
    {
      img: './assets/logos/odebrecht-logo.jpeg',
      cargo: 'Analista de infraestrutura',
      empresa: 'Odebrecht',
      periodo: '2015 - 2017',
      atribuicoes: 'Administração e configuração de redes, incluindo criação de infraestrutura. Suporte e manutenção de computadores e servidores em ambientes Linux, Windows e Windows Server. Atuação direta em suporte ao usuário, assegurando a eficiência e segurança das soluções de TI implementadas.'
    }
  ];
  educationList = [
    {
      img: './assets/logos/ceub-logo.jpeg',
      local: 'Centro Universitário de Brasília',
      area: 'Graduado em Análise e Desenvolvimento de Sistemas, 2017.',
      descricao: 'Honrado com o Prêmio de Excelência Acadêmica por obter a nota máxima no Projeto Final e selecionado como padrão de excelência para o repositório acadêmico da faculdade.'
    },
    {
      img: './assets/logos/howard-logo.jpg',
      local: 'Howard Community College',
      area: 'Especialização em Língua Inglesa e Literatura, 2018 - 2019.',
      descricao: 'Curso intensivo de 5 meses em Columbia, Maryland - EUA, com foco no aprimoramento da língua inglesa, incluindo habilidades de leitura, escrita, fala e compreensão gramatical. Adaptado para estudantes e profissionais visando a excelência no inglês acadêmico e empresarial.'
    },
  ];
  skillsList = [
    { img: './assets/logos/html5-logo.png' },
    { img: './assets/logos/css-logo.png' },
    { img: './assets/logos/js-logo.png' },
    { img: './assets/logos/ts-logo.png' },
    { img: './assets/logos/angular-logo.png' },
    { img: './assets/logos/ionic-logo.png' },
    { img: './assets/logos/tailwind-logo.png' },
    { img: './assets/logos/spring-logo.png' },
    { img: './assets/logos/react-logo.png' },
    { img: './assets/logos/next-logo.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    this.menuList = this.menuList.map(item => {
      return { ...item, active: item.section.toLowerCase() === sectionId.toLowerCase() };
    });

    const navbar = document.getElementById('navbar-sticky');
    if (navbar) {
      navbar.classList.add('hidden');
    }

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

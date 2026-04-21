import { 
  Users, Component, Handshake, Megaphone, 
  Database, CodeXml, Github, Linkedin, Mail, MessageSquare
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "MARCELLO",
  fullName: "MARCELLO EDUARDO PEREIRA JORGE",
  role: "CS + PO",
  email: "eduardomarcello912@gmail.com",
  github: "https://github.com/MarcelloEdu",
  linkedin: "https://www.linkedin.com/in/marcello-eduardo-5117b7276/",
  whatsapp: "#",
  university: "UFPR",
  degree: "Bacharelado em Ciência da Computação",
  period: "2024 — 2028",
  location: "Curitiba, PR",
  shortDesc: "Olá, meu nome é Marcello, estudante de Ciência da Computação na UFPR atualmente no 4º período.",
  aboutText: [
    "Sou um entusiasta de tecnologia e inovação, apaixonado por resolver problemas complexos e criar soluções eficientes. Com experiência em desenvolvimento de software e gestão de projetos, busco constantemente aprimorar minhas habilidades técnicas e de liderança.",
    "Atualmente, atuo como Diretor de Negócios e Product Owner na ECOMP, onde lidero uma equipe comercial e gerencio projetos ágeis. Tenho experiência em levantamento de requisitos, modelagem de processos e gestão de campanhas digitais, o que me permite entregar resultados impactantes e alinhados às necessidades dos clientes.",
    "Estou sempre aberto a novas oportunidades de aprendizado e colaboração, buscando contribuir para projetos inovadores e desafiadores no campo da tecnologia."
  ]
};

export const SKILLS = {
  tech: ["C / C++ / C#", ".NET / EF Core", "Python", "SQL Server", "React / APIs REST", "Git / GitHub", "Laravel / PHP"],
  product: ["Scrum / Kanban", "Product Ownership", "Gestão de Stakeholders", "Google Analytics / Ads", "OKRs", "Modelagem de Processos"]
};

export const EXPERIENCES = [
  {
    id: "ecomp",
    title: "ECOMP – Empresa Júnior de Computação",
    period: "Set 2024 – Atual",
    location: "Curitiba • UFPR",
    role: "Diretor de Negócios / Product Owner / Marketing",
    isPrimary: true,
    responsibilities: [
      { icon: Users, text: "Liderança de equipe comercial com 12 membros e gestão estruturada de pipeline comercial e de gestão (work in progress).", highlight: "12 membros" },
      { icon: Component, text: "Atuação como Product Owner em projetos ágeis: definição de backlog e Sprints.", highlight: "Product Owner" },
      { icon: Handshake, text: "Levantamento de requisitos, UML e modelagem de processos em 4 projetos reais de software entregues no prazo.", highlight: "4 projetos reais de software" },
      { icon: Megaphone, text: "Gestão de campanhas e análise de dados utilizando Google Ads/Analytics com 50% de aumento no engajamento.", highlight: "Google Ads/Analytics" }
    ]
  },
  {
    id: "Centro Acadêmico",
    title: "C.A. Alexandre Direne",
    period: "Jul 2024 — Atual",
    role: "Equipe de Marketing",
    color: "secondary",
    isPrimary: false,
    responsibilities: [
      "Planejamento de comunicação institucional e eventos acadêmicos.",
      "Gestão de redes sociais e produção de conteúdo."
    ]
  }
];

export const PROJECTS = [
  {
    id: "volvo",
    title: "Capacitação Volvo + PUCPR",
    period: "Jan 2026 – Fev 2026 • 52h",
    description: "Formação intensiva em desenvolvimento backend focado no ecossistema Microsoft. Manipulação avançada de dados e projeto prático integrando tecnologias .NET.",
    tags: ["C#", ".NET", "SQL Server", "Entity Framework"],
    icon: Database,
    color: "primary"
  },
  {
    id: "ufpr",
    title: "Projetos Acadêmicos UFPR",
    period: "2024 – Atual",
    description: "Foco em algoritmos complexos, estruturas de dados otimizadas e modelagem arquitetural de bancos de dados relacionais.",
    tags: ["C", "C++", "SQL", "Algoritmos"],
    icon: CodeXml,
    color: "secondary"
  }
];

export const ECOMP_TIMELINE = [
  {
    date: "Setembro 2024",
    role: "Assessor de Negócios",
    description: "Início da trajetória na Ecomp focado em prospecção ativa e entendimento do ecossistema de vendas de software.",
    milestones: ["Primeiros contatos comerciais", "Treinamento em Cold Call"]
  },
  {
    date: "Janeiro 2025",
    role: "Dupla Diretoria: Negócios & Comunicação",
    description: "Assumi o desafio de integrar as frentes comercial e marketing, alinhando a voz da marca com a estratégia de vendas.",
    milestones: ["Unificação de KPIs", "Nova estratégia de Inbound"]
  },
  {
    date: "2025.2",
    role: "Gerente de Comunicação",
    description: "Foco total na gestão da marca e na produção de conteúdo estratégico para o Centro Acadêmico e Atlética, elevando o engajamento.",
    milestones: ["Gestão de redes sociais", "Planejamento de eventos"]
  },
  {
    date: "2026 — Agora",
    role: "Diretor de Negócios",
    description: "Liderança estratégica da equipe de vendas (12 membros), focado em bater metas de faturamento e modelagem de processos UML.",
    milestones: ["Gestão de 12 membros", "+50% de engajamento", "4 projetos reais entregues"]
  }
];

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
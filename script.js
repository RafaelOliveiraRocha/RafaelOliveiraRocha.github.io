/* ═══════════════════════════════════════════
   Rafael Rocha, Portfolio JS
   Theme, i18n, navigation, reveal
   ═══════════════════════════════════════════ */

// ── I18N ──
const i18n = {
  pt: {
    navAbout:'Sobre', navSpec:'Especialidades', navPS:'ProcessSurge', navCases:'Impacto', navCareer:'Carreira', navStack:'Stack', navContact:'Contato', navCta:'Vamos conversar',
    heroBadge:'Analista de Dados · BI & Automação',
    heroTitle:'Dados e operação com <span class="hl">leitura executiva</span>, direção e resultado.',
    heroSub:'Estruturo indicadores, dashboards e análises que ajudam empresas a enxergar melhor sua operação, tomar decisões com mais segurança e acompanhar evolução com clareza.',
    heroBtn1:'Currículo PT', heroBtn2:'Resume EN', heroBtn3:'LinkedIn',
    heroNoteText:'Cofundador da',
    hcardKicker:'posição atual', hcardTitle:'Analista de Dados | BI & Automação',
    hc1t:'Dashboards e leitura executiva', hc1d:'Painéis para acompanhamento de operação, performance e indicadores estratégicos.',
    hc2t:'Análise de performance', hc2d:'Diagnósticos de volumetria, retenção, jornada e oportunidades de melhoria.',
    hc3t:'Automação e estruturação', hc3d:'Tratamento de bases, relatórios automatizados, fluxos de dados e integração.',
    hc4t:'Visão de negócio', hc4d:'Cofundador da ProcessSurge. Dados, automação e inteligência aplicada.',
    aboutLabel:'Sobre',
    aboutTitle:'Sobre mim',
    photoBadge:'Analista de Dados',
    aboutIntro:'Analista de Dados na <strong>Hi Platform</strong> e cofundador da <strong>ProcessSurge</strong>. Atuo com análise de performance, inteligência operacional, BI, dashboards executivos e automação aplicada ao negócio. Meu trabalho não é só mostrar indicadores, é organizar a leitura certa, conectar contexto aos números e transformar dado bruto em clareza para quem precisa decidir.',
    aSkillsTitle:'Atuação principal',
    aSkill1:'Dashboards executivos e leitura de performance',
    aSkill2:'Análise de volumetria, retenção, recontato e jornada',
    aSkill3:'Automação de relatórios e estruturação de métricas',
    aSkill4:'SQL, Python, Apache Superset e PostgreSQL',
    aSkill5:'Estudos analíticos sobre bases massivas de dados',
    aValuesTitle:'Valores',
    aValuesBody:'Dado bom é dado que gera decisão. Meu foco é entregar leitura clara, com profundidade suficiente para sustentar discussão de negócio e direcionar ação. Automação e técnica são meios, o resultado é o que importa.',
    aEduTitle:'Formação',
    aEdu1:'Bacharel em Engenharia de Software, UNOPAR',
    aStackTitle:'Stack principal',
    specLabel:'Especialidades', specTitle:'O que eu entrego na prática.', specSub:'Profundidade analítica com clareza de comunicação e senso de aplicação real para o negócio.',
    spec1t:'BI e dashboards executivos', spec1d:'Construção de painéis para acompanhar operação, performance e indicadores estratégicos. Foco em leitura clara, utilidade prática e velocidade de decisão.',
    spec2t:'Análise de performance e inteligência operacional', spec2d:'Leitura de volumes, comportamento, retenção, recontato, produtividade e jornada, sempre com foco em diagnóstico, direção e contexto de negócio.',
    spec3t:'Automação e estruturação de dados', spec3d:'Tratamento de bases, organização de dados e fluxos automatizados que conectam coleta, análise e visualização com mais eficiência e escala.',
    psLabel:'ProcessSurge', psRole:'Cofundador · Camada analítica e de dados', psTitle:'Process<em>Surge</em>',
    psTagline:'Automação que move receita.',
    psMetaRole:'Papel', psMetaRoleVal:'Co-founder', psMetaSince:'Desde', psMetaFocus:'Foco', psMetaFocusVal:'Dados & BI',
    psBody1:'A ProcessSurge entrega automação, dados e inteligência aplicada para empresas que precisam de estrutura real para crescer. Integramos operação, atendimento, marketplaces e fluxos de venda com tecnologia que organiza, mensura e escala. Cada solução nasce de um problema concreto e entrega resultado mensurável.',
    psChip1:'Automação', psChip2:'Dados e BI', psChip3:'IA aplicada', psChip4:'Integração', psChip5:'E-commerce',
    psKicker:'onde eu entro',
    psBody2:'Sou responsável pela camada de dados e inteligência da operação. Estruturo indicadores de performance, dashboards executivos, diagnósticos sobre bases de clientes e recortes analíticos que sustentam decisões reais. Cada entrega precisa ter um porquê claro e gerar direção prática para o negócio do cliente.',
    psBtn:'Visitar site da ProcessSurge', psBtn2:'Falar com a ProcessSurge',
    casesLabel:'Impacto', casesTitle:'Resultados construídos na prática.', casesSub:'Recortes de frentes em que análise, estruturação e execução técnica geraram eficiência real, economia e direção de negócio.',
    case1t:'Migração de plataforma de BI com redução relevante de custo recorrente',
    case1d:'Co-liderou a migração de toda a camada de dashboards e indicadores para uma nova estrutura analítica, preservando a leitura executiva e eliminando a dependência de uma ferramenta com custo mensal elevado. A mudança gerou uma economia recorrente de R$41K/mês no orçamento de tecnologia, com impacto direto no resultado da operação.',
    case1i:'&#8599; R$41K/mês de economia recorrente em tecnologia',
    case1tag2:'Migração', case1tag3:'Eficiência',
    case2t:'Diagnóstico conversacional em larga escala com geração de receita',
    case2d:'Estudo analítico profundo sobre uma base massiva de dados conversacionais, extraindo padrões de comportamento, gargalos de atendimento e oportunidades de melhoria que geraram receita pontual relevante para a empresa. O valor não esteve no processamento técnico, mas no diagnóstico, na inteligência extraída e na aplicabilidade dos insights.',
    case2i:'&#8599; Estudo monetizado com impacto direto no negócio',
    case2tag2:'Diagnóstico', case2tag3:'Receita',
    case3t:'Performance de bots e canais digitais traduzida em direção executiva',
    case3d:'Análises recorrentes de volumetria, retenção, recontato, abandono, CSAT e jornada do usuário em bots e canais digitais. Cada entrega conecta dados operacionais a leituras que ajudam gestores a priorizar ajustes, discutir evolução com stakeholders e tomar decisões com base concreta.',
    case3i:'&#8599; Entregas recorrentes que orientam decisão operacional',
    case3tag1:'Performance', case3tag2:'Métricas', case3tag3:'Decisão',
    careerLabel:'Experiência', careerTitle:'Trajetória construída em cima de dados, produto e operação.', careerSub:'A evolução do escopo e a forma como meu trabalho foi se conectando cada vez mais à tomada de decisão.',
    t1p:'2025 · atual', t1t:'Analista de Dados', t1d:'Atuação com análise de performance, dashboards executivos e leituras conectadas à operação e aos clientes B2B.',
    t1l1:'Co-liderou migração completa da plataforma de BI empresarial, gerando economia recorrente de R$41K/mês no orçamento de tecnologia sem perda de funcionalidade analítica.',
    t1l2:'Conduziu diagnóstico sobre base massiva de dados conversacionais (40+ GB), com insights diretamente monetizados pelo negócio.',
    t1l3:'Desenvolve e mantém dashboards executivos para 25+ clientes, rastreando volumetria, retenção, recontato, abandono, resolutividade e CSAT.',
    t1l4:'Constrói pipelines ETL automatizados com SQL e Python em ambiente PostgreSQL, garantindo confiabilidade e escala analítica.',
    t2p:'2024 · 2025', t2t:'Estagiário em BI', t2d:'Construção de dashboards de performance para canais digitais e bots, análises de volumetria e jornada do usuário, e estruturação de métricas operacionais para clientes B2B.',
    t3p:'2026 · atual', t3t:'Cofundador · Dados, BI e inteligência operacional', t3d:'Responsável pela camada de dados e inteligência da operação. Estrutura indicadores de performance, dashboards executivos e diagnósticos analíticos que sustentam decisões reais para clientes de e-commerce e automação de negócio.',
    t4p:'Experiência anterior', t4t:'Assistente de Operações', t4d:'Atuação multidisciplinar em operações de delivery, com autonomia crescente e iniciativas próprias em dados e automação.',
    t4l1:'Assumiu turno noturno de maior pico da operação, anteriormente sob responsabilidade da coordenação.', t4l2:'Construiu dashboards no Looker Studio para acompanhamento operacional de entregadores, restaurantes e consumidores, primeira camada de BI da empresa.', t4l3:'Automatizou processo de prospecção de entregadores com Python, eliminando coleta manual e reduzindo custo operacional.', t4l4:'Atuou em triagem antifraude em tempo real e helpdesk com alta autonomia para os três lados da plataforma.', t4l5:'',
    t5p:'Formação', t5t:'Bacharel em Engenharia de Software', t5d:'Graduação concluída, somando base técnica à atuação prática já consolidada em dados, BI e soluções digitais.',
    stackLabel:'Stack', stackTitle:'Stack e ferramentas do dia a dia.', stackSub:'As ferramentas e frentes que compõem minha atuação hoje.',
    scatData:'Dados e BI', scatViz:'Visualização e dashboards', scatAuto:'Automação e integração', scatAI:'IA e LLMs', tagPromptEng:'Prompt Engineering', scatWay:'Forma de atuação',
    tagExecDash:'Dashboards executivos', tagKPIs:'Métricas e KPIs', tagStorytelling:'Storytelling analítico', tagReportAuto:'Automação de relatórios',
    tagDataStruct:'Estruturação de bases', tagExecReading:'Leitura executiva', tagPerfAnalysis:'Análise de performance', tagBizSupport:'Apoio à decisão', tagMetricStruct:'Estruturação de métricas',
    contactLabel:'Contato', contactTitle:'Aberto a oportunidades e projetos com direção clara.', contactSub:'Para vagas ligadas a dados, BI e automação, ou para conversas estratégicas envolvendo a ProcessSurge.',
    cWt:'WhatsApp', cWd:'Falar direto comigo. Respondo rápido.', c1t:'E-mail', c1d:'Canal direto para oportunidades profissionais, apresentações e conversas objetivas.',
    c2t:'LinkedIn', c2d:'Trajetória profissional, experiências e conexões ligadas ao mercado.',
    c3t:'GitHub', c3d:'Portfólio, projetos técnicos e presença de código.'
  },
  en: {
    navAbout:'About', navSpec:'Specialties', navPS:'ProcessSurge', navCases:'Impact', navCareer:'Career', navStack:'Stack', navContact:'Contact', navCta:"Let's talk",
    heroBadge:'Data Analyst · BI & Automation',
    heroTitle:'Data and operations with <span class="hl">executive insight</span>, direction and results.',
    heroSub:'I structure indicators, dashboards and analyses that help companies understand their operations better, make decisions with more confidence and track progress with clarity.',
    heroBtn1:'Resume PT', heroBtn2:'Resume EN', heroBtn3:'LinkedIn',
    heroNoteText:'Co-founder at',
    hcardKicker:'current position', hcardTitle:'Data Analyst | BI & Automation',
    hc1t:'Dashboards and executive insight', hc1d:'Panels for operations monitoring, performance tracking and strategic indicators.',
    hc2t:'Performance analysis', hc2d:'Diagnostics on volume, retention, user journey and improvement opportunities.',
    hc3t:'Automation and structuring', hc3d:'Data treatment, automated reports, data flows and integration.',
    hc4t:'Business perspective', hc4d:'Co-founder at ProcessSurge. Data, automation and applied intelligence.',
    aboutLabel:'About',
    aboutTitle:'About me',
    photoBadge:'Data Analyst',
    aboutIntro:'Data Analyst at <strong>Hi Platform</strong> and co-founder at <strong>ProcessSurge</strong>. I work with performance analysis, operational intelligence, BI, executive dashboards and business-oriented automation. My job is not just about showing indicators, it is about organizing the right reading, connecting context to the numbers and turning raw data into clarity for those who need to decide.',
    aSkillsTitle:'Main expertise',
    aSkill1:'Executive dashboards and performance insight',
    aSkill2:'Analysis of volume, retention, recontact and user journey',
    aSkill3:'Report automation and metric structuring',
    aSkill4:'SQL, Python, Apache Superset and PostgreSQL',
    aSkill5:'Analytical studies on massive datasets',
    aValuesTitle:'Values',
    aValuesBody:'Good data is data that drives decisions. My focus is delivering clear readings, with enough depth to sustain business discussions and guide action. Automation and technique are means, results are what matter.',
    aEduTitle:'Education',
    aEdu1:'Bachelor in Software Engineering, UNOPAR',
    aStackTitle:'Core stack',
    specLabel:'Specialties', specTitle:'What I deliver in practice.', specSub:'Analytical depth with clear communication and a strong sense of real business application.',
    spec1t:'BI and executive dashboards', spec1d:'Building panels to track operations, performance and strategic indicators. Focus on clear reading, practical usefulness and decision speed.',
    spec2t:'Performance analysis and operational intelligence', spec2d:'Reading volume, behavior, retention, recontact, productivity and journey, always focused on diagnostics, direction and business context.',
    spec3t:'Automation and data structuring', spec3d:'Data treatment, organization and automated flows connecting collection, analysis and visualization more efficiently and at scale.',
    psLabel:'ProcessSurge', psRole:'Co-founder · Analytics and data layer', psTitle:'Process<em>Surge</em>',
    psTagline:'Automation that moves revenue.',
    psMetaRole:'Role', psMetaRoleVal:'Co-founder', psMetaSince:'Since', psMetaFocus:'Focus', psMetaFocusVal:'Data & BI',
    psBody1:'ProcessSurge delivers automation, data and applied intelligence for companies that need real structure to grow. We integrate operations, customer service, marketplaces and sales workflows with technology that organizes, measures and scales. Every solution is born from a concrete problem and delivers measurable results.',
    psChip1:'Automation', psChip2:'Data & BI', psChip3:'Applied AI', psChip4:'Integration', psChip5:'E-commerce',
    psKicker:'where I come in',
    psBody2:'I lead the data and intelligence layer of operations. I structure performance indicators, executive dashboards, client base diagnostics and analytical cuts that support real decisions. Every delivery needs a clear reason and must generate practical direction for the client\'s business.',
    psBtn:'Visit ProcessSurge website', psBtn2:'Talk to ProcessSurge',
    casesLabel:'Impact', casesTitle:'Results built in practice.', casesSub:'Selected work where analysis, structuring and technical execution generated real efficiency, cost savings and business direction.',
    case1t:'BI platform migration with significant recurring cost reduction',
    case1d:'Co-led the migration of the entire dashboard and indicator layer to a new analytical structure, preserving executive readability while eliminating dependency on a tool with a high monthly cost. The change generated recurring savings of BRL 41K per month in the technology budget, with direct impact on operational results.',
    case1i:'&#8599; BRL 41K/month in recurring technology savings',
    case1tag2:'Migration', case1tag3:'Efficiency',
    case2t:'Large-scale conversational diagnostics with revenue generation',
    case2d:'Deep analytical study on a massive conversational dataset, extracting behavioral patterns, service bottlenecks and improvement opportunities that generated significant one-time revenue for the company. The value was not in the technical processing, but in the diagnostics, the intelligence extracted and the applicability of the insights.',
    case2i:'&#8599; Monetized study with direct business impact',
    case2tag2:'Diagnostics', case2tag3:'Revenue',
    case3t:'Bot and digital channel performance translated into executive direction',
    case3d:'Recurring analyses of volume, retention, recontact, abandonment, CSAT and user journey across bots and digital channels. Each delivery connects operational data to readings that help managers prioritize adjustments, discuss progress with stakeholders and make concrete, data-backed decisions.',
    case3i:'&#8599; Recurring deliveries that guide operational decisions',
    case3tag1:'Performance', case3tag2:'Metrics', case3tag3:'Decisions',
    careerLabel:'Career', careerTitle:'A trajectory built on data, product and operations.', careerSub:'How my scope evolved and became increasingly connected to decision-making.',
    t1p:'2025 · present', t1t:'Data Analyst', t1d:'Working with performance analysis, executive dashboards and insights connected to operations and B2B clients.',
    t1l1:'Co-led the full migration of the enterprise BI platform, generating recurring savings of BRL 41K per month in the technology budget without losing analytical functionality.',
    t1l2:'Led a diagnosis over a massive conversational dataset (40+ GB), with insights directly monetized by the business.',
    t1l3:'Develops and maintains executive dashboards for 25+ clients, tracking volume, retention, recontact, abandonment, resolution and CSAT.',
    t1l4:'Builds automated ETL pipelines with SQL and Python in PostgreSQL environments, ensuring reliability and analytical scale.',
    t2p:'2024 · 2025', t2t:'BI Intern', t2d:'Built performance dashboards for digital channels and bots, analyzed volume and user journeys, and structured operational metrics for B2B clients.',
    t3p:'2026 · present', t3t:'Co-founder · Data, BI and operational intelligence', t3d:'Leads the data and intelligence layer of the operation, structuring performance indicators, executive dashboards and analytical diagnostics that support real decisions for e-commerce and business automation clients.',
    t4p:'Previous experience', t4t:'Operations Assistant', t4d:'Multidisciplinary role in delivery operations, with growing autonomy and self-driven initiatives in data and automation.',
    t4l1:'Took over the night shift during the operation\'s highest peak, previously handled by coordination.', t4l2:'Built Looker Studio dashboards to monitor delivery drivers, restaurants and consumers, creating the company\'s first BI layer.', t4l3:'Automated the driver prospecting process with Python, eliminating manual collection and reducing operational cost.', t4l4:'Worked on real-time antifraud screening and helpdesk with high autonomy across all three sides of the platform.', t4l5:'',
    t5p:'Education', t5t:'Bachelor in Software Engineering', t5d:'Degree completed, adding technical foundation to an already consolidated practice in data, BI and digital solutions.',
    stackLabel:'Stack', stackTitle:'Stack and everyday tools.', stackSub:'The tools and fronts that make up my work today.',
    scatData:'Data and BI', scatViz:'Visualization and dashboards', scatAuto:'Automation and integration', scatAI:'AI and LLMs', tagPromptEng:'Prompt Engineering', scatWay:'Way of working',
    tagExecDash:'Executive dashboards', tagKPIs:'Metrics and KPIs', tagStorytelling:'Analytical storytelling', tagReportAuto:'Report automation',
    tagDataStruct:'Data structuring', tagExecReading:'Executive insight', tagPerfAnalysis:'Performance analysis', tagBizSupport:'Decision support', tagMetricStruct:'Metric structuring',
    contactLabel:'Contact', contactTitle:'Open to opportunities and projects with clear direction.', contactSub:'For roles related to data, BI and automation, or strategic conversations involving ProcessSurge.',
    cWt:'WhatsApp', cWd:'Talk to me directly. Quick replies.', c1t:'Email', c1d:'Direct channel for professional opportunities, introductions and objective conversations.',
    c2t:'LinkedIn', c2d:'Professional trajectory, experiences and market connections.',
    c3t:'GitHub', c3d:'Portfolio, technical projects and code presence.'
  }
};

// ── STATE ──
let currentLang = localStorage.getItem('rr-lang') || 'pt';
let currentTheme = localStorage.getItem('rr-theme') || 'dark';

// ── ELEMENTS ──
const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');
const hamBtn = document.getElementById('hamBtn');
const mobnav = document.getElementById('mobnav');

// ── LANGUAGE ──
function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  localStorage.setItem('rr-lang', lang);
}

langBtn.addEventListener('click', () => {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
});

// ── THEME ──
function applyTheme(theme) {
  currentTheme = theme;
  document.body.classList.toggle('light', theme === 'light');
  themeBtn.innerHTML = theme === 'light' ? '&#9728;' : '&#9790;';
  localStorage.setItem('rr-theme', theme);
}

themeBtn.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ── MOBILE NAV ──
hamBtn.addEventListener('click', () => {
  mobnav.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeMob() {
  mobnav.classList.remove('open');
  document.body.style.overflow = '';
}

// ── REVEAL ON SCROLL ──
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { rootMargin: '-6% 0px', threshold: 0.08 });

document.querySelectorAll('.rev').forEach(el => revObs.observe(el));

// Timeline items
const tiObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { rootMargin: '-4% 0px', threshold: 0.08 });

document.querySelectorAll('.ti').forEach(el => tiObs.observe(el));

// ── NAV ACTIVE STATE ──
const nlEls = document.querySelectorAll('.nl');
const allSections = [document.querySelector('header'), ...document.querySelectorAll('section[id]')].filter(Boolean);

allSections.forEach(s => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        nlEls.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.nl[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }).observe(s);
});

// ── INIT ──
applyTheme(currentTheme);
applyLang(currentLang);

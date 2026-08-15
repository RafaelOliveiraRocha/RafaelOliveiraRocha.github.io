"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Language = "pt" | "en";
type Theme = "dark" | "light";

const copy = {
  pt: {
    nav: [
      ["Trabalho", "#trabalho"],
      ["Impacto", "#impacto"],
      ["Experiência", "#experiencia"],
      ["Sobre", "#sobre"],
      ["Contato", "#contato"],
    ],
    eyebrow: "ANALISTA DE DADOS · BI · ANALYTICS · IA",
    heroLead: "Transformo dados operacionais em",
    heroAccent: "inteligência de negócio.",
    heroBody:
      "Estruturo BI, dashboards e analytics operacional com SQL, Python, Apache Superset e Power BI para transformar dados dispersos em indicadores confiáveis e decisões melhores.",
    seeWork: "Ver projetos",
    download: "Baixar currículo",
    cvHref: "/Curriculo_Rafael_Rocha_PT.pdf",
    metrics: [
      ["43", "R$", "K/mês", "em savings recorrentes"],
      ["40", "", "+", "contas atendidas"],
      ["40", "", "+ GB", "analisados em estudo estratégico"],
    ],
    signal: "Sinal ativo",
    evidence: "Evidência",
    graphLabels: ["Dados", "Métricas", "Contexto", "Decisão"],
    roleLine: "Hi Platform · Analista de Dados",
    workLabel: "O que eu resolvo",
    workTitle: "Da base à decisão, com responsabilidade pelo caminho inteiro.",
    workIntro:
      "Minha melhor entrega acontece quando tecnologia, regra de negócio e leitura executiva precisam funcionar como uma coisa só.",
    profileLabel: "Perfil profissional",
    profileTitle: "Dados, BI e automação com leitura de negócio.",
    profileBody:
      "Analista de Dados na Hi Platform. Minha atuação combina construção técnica, visão operacional e comunicação executiva para transformar bases dispersas em indicadores confiáveis, análises acionáveis e produtos analíticos úteis.",
    profileFacts: [
      ["ATUAÇÃO", "BI · Analytics · Automação"],
      ["BASE", "Ubá · MG · Remoto"],
      ["FORMAÇÃO", "Engenharia de Software"],
      ["FOCO", "Próximo passo: nível Pleno"],
    ],
    profilePoints: [
      "Dashboards executivos e operacionais",
      "SQL, modelagem e qualidade de dados",
      "Métricas de atendimento, bots e canais digitais",
      "Automação e IA aplicada à rotina analítica",
    ],
    services: [
      {
        n: "01",
        title: "BI e analytics operacional",
        body: "Dashboards, KPIs e análises recorrentes que transformam operação em clareza para gestores e liderança.",
        tags: ["Dashboards", "KPIs", "Storytelling"],
      },
      {
        n: "02",
        title: "Dados prontos para decisão",
        body: "SQL, modelagem, validação e estruturas analíticas pensadas para desempenho, confiança e evolução contínua.",
        tags: ["SQL", "PostgreSQL", "ETL/ELT"],
      },
      {
        n: "03",
        title: "Automação e IA aplicada",
        body: "Pipelines e experiências analíticas que aproximam pessoas dos dados sem abrir mão de contexto, governança e rastreabilidade.",
        tags: ["Python", "n8n", "LLMs"],
      },
    ],
    processLabel: "Iniciativa empreendedora · ProcessSurge",
    processTitle: "Dados e inteligência operacional aplicados a e-commerce.",
    processBody:
      "Atuo como cofundador responsável pela frente de dados, BI e analytics da ProcessSurge, uma iniciativa empreendedora construída em parceria. A atuação conecta automação, indicadores e leitura executiva para ajudar operações de e-commerce a ganhar controle, eficiência e capacidade de decisão.",
    processPoints: ["BI para e-commerce", "Pipelines automatizados", "Indicadores de conversão", "Inteligência operacional"],
    processCta: "Conhecer a ProcessSurge",
    methodLabel: "Como eu trabalho",
    methodTitle: "O rigor está no caminho entre a pergunta e a decisão.",
    methodSteps: [
      ["01", "Entender o problema", "Começo pela operação, pela decisão que precisa ser tomada e pelas limitações reais dos dados."],
      ["02", "Estruturar a evidência", "Organizo fontes, regras de negócio, métricas e validações antes de transformar informação em narrativa."],
      ["03", "Construir para uso", "Entrego dashboards, análises e automações pensados para leitura, adoção e evolução contínua."],
      ["04", "Traduzir em direção", "Conecto resultado técnico a contexto, prioridade e oportunidade para negócio e liderança."],
    ],
    impactLabel: "Trabalhos selecionados",
    impactTitle: "Projetos que conectam execução técnica a impacto de negócio.",
    impactIntro:
      "Casos apresentados pelo problema, pela decisão e pelo resultado. Sem transformar ferramenta em protagonista.",
    cases: [
      {
        index: "01",
        kicker: "EFICIÊNCIA DE BI",
        title: "Migração de plataforma analítica com redução de custo recorrente",
        body: "Conduzi de ponta a ponta a migração da camada de dashboards e indicadores para uma estrutura interna em Apache Superset, incluindo a reconstrução dos painéis e a preservação da leitura operacional e da continuidade das entregas.",
        result: "R$43K/mês",
        resultLabel: "em savings de tecnologia",
        tags: ["Apache Superset", "SQL", "Migração"],
      },
      {
        index: "02",
        kicker: "INTEGRAÇÃO E ARQUITETURA DE DADOS",
        title: "Dados financeiros estruturados da origem à decisão",
        body: "Estruturei uma integração entre ERP, APIs, n8n e PostgreSQL em camadas RAW, Silver e Gold para preservar histórico, garantir rastreabilidade e alimentar uma aplicação analítica voltada à priorização e à tomada de decisão.",
        result: "RAW → GOLD",
        resultLabel: "com rastreabilidade ponta a ponta",
        tags: ["APIs", "n8n", "PostgreSQL"],
      },
      {
        index: "03",
        kicker: "DIAGNÓSTICO EM ESCALA",
        title: "Dados conversacionais transformados em oportunidade de negócio",
        body: "Análise profunda de uma base massiva para identificar padrões de comportamento, gargalos de atendimento e oportunidades acionáveis, traduzidas para stakeholders em uma narrativa objetiva.",
        result: "40+ GB",
        resultLabel: "de dados analisados",
        tags: ["Analytics", "Python", "Storytelling"],
      },
      {
        index: "04",
        kicker: "IA APLICADA AO BI",
        title: "Perguntas em linguagem natural com contexto, limites e evidência",
        body: "Desenvolvi de ponta a ponta uma camada conversacional sobre dados analíticos, conectando linguagem natural, geração de SQL e respostas rastreáveis. O foco não é a mágica do modelo, mas a confiança da decisão.",
        result: "NL → SQL",
        resultLabel: "com governança analítica",
        tags: ["LLMs", "SQL", "Observabilidade"],
      },
      {
        index: "05",
        kicker: "PRODUTO ANALÍTICO OPERACIONAL",
        title: "Torre de Controle: operação na TV e desempenho por identidade",
        body: "Desenvolvi de ponta a ponta uma Torre de Controle para atendimento, unindo uma visão operacional exibida continuamente na TV da operação a um dashboard único para supervisores e operadores. Com RLS dinâmica, cada operador acessa somente os próprios dados, enquanto a supervisão preserva a visão consolidada. Ingestão automatizada, reconciliação entre fontes e atualização recorrente sustentam indicadores consistentes.",
        result: "3 CONTEXTOS",
        resultLabel: "TV · supervisão · operador",
        tags: ["Apache Superset", "PostgreSQL", "RLS dinâmica"],
      },
    ],
    experienceLabel: "Experiência",
    experienceTitle: "Uma trajetória construída entre operação, produto e dados.",
    experienceIntro:
      "A experiência operacional não ficou para trás. Ela virou repertório para entender o negócio antes de modelar a resposta.",
    timeline: [
      {
        period: "ago/2025 · atual",
        role: "Analista de Dados",
        company: "Hi Platform",
        body: "Atuação ponta a ponta com BI, SQL, dashboards executivos, analytics operacional, automação e IA aplicada, incluindo a Torre de Controle com TV operacional e RLS dinâmica.",
        details: ["Migração de BI com aproximadamente R$43K/mês em savings", "Torre de Controle com visão em TV, dashboard único e RLS dinâmica", "Camada conversacional desenvolvida de ponta a ponta com linguagem natural, geração de SQL e respostas rastreáveis"],
      },
      {
        period: "fev/2024 · jul/2025",
        role: "Estagiário em Business Intelligence",
        company: "Hi Platform",
        body: "Construção de dashboards de performance, análises de canais digitais e estruturação de métricas para operações B2B.",
        details: ["Métricas de bots, atendimento e jornada", "Análises quantitativas e qualitativas para evolução de produto"],
      },
      {
        period: "jul/2022 · fev/2024",
        role: "Assistente de Operações",
        company: "AppJusto",
        body: "Operação de plataforma digital, dashboards no Looker Studio e automações em Python conectadas a problemas reais da rotina.",
        details: ["Primeiras camadas de BI para acompanhamento operacional", "Automação de processos de prospecção e prevenção de churn"],
      },
      {
        period: "2011 · 2022",
        role: "Operações, logística e controles",
        company: "Indústria e varejo",
        body: "Trajetória construída em produção, almoxarifado, estoque, logística e rotinas administrativas, formando o repertório operacional que hoje sustenta minha leitura de negócio.",
        details: ["Controles e relatórios em Excel", "Visão prática de processos, qualidade e operação"],
      },
    ],
    education: "Bacharel em Engenharia de Software · 2025",
    stackLabel: "Stack",
    stackTitle: "Ferramentas são meio. O valor está na arquitetura da decisão.",
    stackGroups: [
      ["Dados & BI", ["🗄️ SQL", "🐘 PostgreSQL", "📊 Apache Superset", "📈 Hi Boards", "📉 Power BI", "🔎 Looker Studio", "☁️ BigQuery", "🧱 dbt", "📊 Tableau", "📋 Excel", "📑 Google Sheets"]],
      ["Visualização", ["📊 Dashboards executivos", "🎯 Métricas e KPIs", "📖 Storytelling analítico", "🖥️ PowerPoint", "🧩 Google Slides", "🧭 Leitura executiva"]],
      ["Automação", ["🐍 Python", "⚡ n8n", "🔗 APIs", "🧰 Apps Script", "🔄 ETL/ELT", "🌿 Git/GitHub", "🧪 Qualidade de dados"]],
      ["IA aplicada", ["🤖 LLMs", "💬 ChatGPT", "🧠 Claude", "✨ Gemini", "⌨️ NL → SQL", "✍️ Prompt Engineering", "🔭 Observabilidade", "🛡️ Governança"]],
    ],
    aboutLabel: "Sobre",
    aboutTitle: "Técnica suficiente para construir. Contexto suficiente para decidir.",
    aboutBody: [
      "Sou Analista de Dados na Hi Platform. Trabalho na interseção entre BI, analytics operacional, automação e inteligência aplicada.",
      "Meu papel não termina quando o dashboard carrega. Eu busco entender a regra de negócio, validar a métrica, organizar a evidência e comunicar o que realmente merece atenção.",
      "Hoje, concentro minha evolução em produtos analíticos, IA aplicada ao BI e estruturas de dados que aproximem perguntas de decisões confiáveis.",
    ],
    principles: ["Baixo ruído", "Métrica com contexto", "Evidência antes da conclusão"],
    contactLabel: "Contato",
    contactTitle: "Se o desafio pede dados, contexto e direção, vale conversar.",
    contactBody:
      "Aberto a oportunidades em Dados, BI e Analytics e a conversas sobre produtos analíticos, automação e IA aplicada.",
    resourcesTitle: "Currículo e canais diretos",
    cvPt: "Currículo em português",
    cvEn: "Résumé in English",
    whatsappCta: "WhatsApp",
    emailCta: "Enviar e-mail",
    linkedinCta: "LinkedIn",
    githubCta: "GitHub",
    footer: "Dados com contexto. Decisões com evidência.",
    menu: "Abrir menu",
    theme: "Alternar tema",
    language: "Alterar idioma",
  },
  en: {
    nav: [
      ["Work", "#trabalho"],
      ["Impact", "#impacto"],
      ["Experience", "#experiencia"],
      ["About", "#sobre"],
      ["Contact", "#contato"],
    ],
    eyebrow: "DATA ANALYST · BI · ANALYTICS · AI",
    heroLead: "I turn operational data into",
    heroAccent: "business intelligence.",
    heroBody:
      "I build BI, dashboards and operational analytics with SQL, Python, Apache Superset and Power BI to turn scattered data into reliable indicators and better decisions.",
    seeWork: "View projects",
    download: "Download résumé",
    cvHref: "/Rafael_Rocha_Resume_EN.pdf",
    metrics: [
      ["43", "R$", "K/month", "in recurring savings"],
      ["40", "", "+", "accounts supported"],
      ["40", "", "+ GB", "analyzed in a strategic study"],
    ],
    signal: "Live signal",
    evidence: "Evidence",
    graphLabels: ["Data", "Metrics", "Context", "Decision"],
    roleLine: "Hi Platform · Data Analyst",
    workLabel: "What I solve",
    workTitle: "From raw data to decisions, owning the full analytical path.",
    workIntro:
      "My strongest work happens when technology, business rules and executive thinking need to operate as one system.",
    profileLabel: "Professional profile",
    profileTitle: "Data, BI and automation with business context.",
    profileBody:
      "Data Analyst at Hi Platform. My work combines technical execution, operational perspective and executive communication to turn scattered data into reliable indicators, actionable analysis and useful analytical products.",
    profileFacts: [
      ["FIELD", "BI · Analytics · Automation"],
      ["BASE", "Ubá · MG · Remote"],
      ["EDUCATION", "Software Engineering"],
      ["FOCUS", "Next step: Mid-level"],
    ],
    profilePoints: [
      "Executive and operational dashboards",
      "SQL, modeling and data quality",
      "Customer service, bot and digital-channel metrics",
      "Automation and AI applied to analytics",
    ],
    services: [
      {
        n: "01",
        title: "BI and operational analytics",
        body: "Dashboards, KPIs and recurring analysis that turn operations into clarity for managers and leadership.",
        tags: ["Dashboards", "KPIs", "Storytelling"],
      },
      {
        n: "02",
        title: "Decision-ready data",
        body: "SQL, modeling, validation and analytical structures designed for performance, trust and continuous evolution.",
        tags: ["SQL", "PostgreSQL", "ETL/ELT"],
      },
      {
        n: "03",
        title: "Automation and applied AI",
        body: "Pipelines and analytical experiences that bring people closer to data without giving up context, governance or traceability.",
        tags: ["Python", "n8n", "LLMs"],
      },
    ],
    processLabel: "Entrepreneurial initiative · ProcessSurge",
    processTitle: "Data and operational intelligence applied to e-commerce.",
    processBody:
      "I serve as co-founder responsible for data, BI and analytics at ProcessSurge, an entrepreneurial initiative built collaboratively. The work connects automation, indicators and executive insight to help e-commerce operations gain control, efficiency and stronger decision-making.",
    processPoints: ["E-commerce BI", "Automated pipelines", "Conversion indicators", "Operational intelligence"],
    processCta: "Visit ProcessSurge",
    methodLabel: "How I work",
    methodTitle: "The rigor lives in the path between a question and a decision.",
    methodSteps: [
      ["01", "Understand the problem", "I start with the operation, the decision to be made and the real limitations of the available data."],
      ["02", "Structure the evidence", "I organize sources, business rules, metrics and validations before turning information into a narrative."],
      ["03", "Build for real use", "I deliver dashboards, analysis and automation designed for readability, adoption and continuous evolution."],
      ["04", "Translate into direction", "I connect technical results to context, priorities and opportunities for business teams and leadership."],
    ],
    impactLabel: "Selected work",
    impactTitle: "Projects connecting technical execution to business impact.",
    impactIntro:
      "Cases presented through the problem, the decision and the outcome, without making tools the main character.",
    cases: [
      {
        index: "01",
        kicker: "BI EFFICIENCY",
        title: "Analytics platform migration with recurring cost reduction",
        body: "Led and executed the end-to-end migration of dashboards and indicators to an internal Apache Superset structure, including dashboard rebuilds while preserving operational visibility and delivery continuity.",
        result: "R$43K/month",
        resultLabel: "in technology savings",
        tags: ["Apache Superset", "SQL", "Migration"],
      },
      {
        index: "02",
        kicker: "DATA INTEGRATION AND ARCHITECTURE",
        title: "Financial data structured from source to decision",
        body: "Built an integration across ERP, APIs, n8n and PostgreSQL using RAW, Silver and Gold layers to preserve history, ensure traceability and feed an analytical application focused on prioritization and decision-making.",
        result: "RAW → GOLD",
        resultLabel: "with end-to-end traceability",
        tags: ["APIs", "n8n", "PostgreSQL"],
      },
      {
        index: "03",
        kicker: "DIAGNOSIS AT SCALE",
        title: "Conversational data turned into a business opportunity",
        body: "Deep analysis of a massive dataset to identify behavioral patterns, service bottlenecks and actionable opportunities, translated into a clear narrative for stakeholders.",
        result: "40+ GB",
        resultLabel: "of data analyzed",
        tags: ["Analytics", "Python", "Storytelling"],
      },
      {
        index: "04",
        kicker: "AI APPLIED TO BI",
        title: "Natural-language questions with context, limits and evidence",
        body: "Built an end-to-end conversational layer over analytical data, connecting natural language, SQL generation and traceable answers. The focus is not model magic, but decision confidence.",
        result: "NL → SQL",
        resultLabel: "with analytical governance",
        tags: ["LLMs", "SQL", "Observability"],
      },
      {
        index: "05",
        kicker: "OPERATIONAL ANALYTICS PRODUCT",
        title: "Control Tower: TV monitoring and identity-based performance",
        body: "I built an end-to-end Control Tower for a service operation, combining an operational view continuously displayed on the team’s TV with a single performance dashboard for supervisors and operators. Dynamic row-level security limits each operator to their own data while supervisors retain the consolidated view. Automated ingestion, source reconciliation, and recurring refreshes support consistent operational metrics.",
        result: "3 CONTEXTS",
        resultLabel: "TV · supervision · operator",
        tags: ["Apache Superset", "PostgreSQL", "Dynamic RLS"],
      },
    ],
    experienceLabel: "Experience",
    experienceTitle: "A career built across operations, product and data.",
    experienceIntro:
      "My operational background did not stay in the past. It became the perspective I use to understand the business before modeling an answer.",
    timeline: [
      {
        period: "Aug 2025 · present",
        role: "Data Analyst",
        company: "Hi Platform",
        body: "End-to-end work with BI, SQL, executive dashboards, operational analytics, automation and applied AI, including the Control Tower with operational TV monitoring and dynamic RLS.",
        details: ["BI migration delivering approximately R$43K/month in savings", "Control Tower with a TV view, one shared dashboard and dynamic RLS", "End-to-end conversational layer using natural language, SQL generation and traceable answers"],
      },
      {
        period: "Feb 2024 · Jul 2025",
        role: "Business Intelligence Intern",
        company: "Hi Platform",
        body: "Performance dashboards, digital-channel analyses and metric frameworks for B2B operations.",
        details: ["Bot, customer service and journey metrics", "Quantitative and qualitative analysis supporting product evolution"],
      },
      {
        period: "Jul 2022 · Feb 2024",
        role: "Operations Assistant",
        company: "AppJusto",
        body: "Digital-platform operations, Looker Studio dashboards and Python automation connected to real operational problems.",
        details: ["Early BI layers for operational monitoring", "Automation for prospecting and churn-prevention processes"],
      },
      {
        period: "2011 · 2022",
        role: "Operations, logistics and controls",
        company: "Industry and retail",
        body: "A career foundation across production, warehousing, inventory, logistics and administrative routines, building the operational perspective that now supports my business analysis.",
        details: ["Excel controls and reports", "Hands-on understanding of processes, quality and operations"],
      },
    ],
    education: "Bachelor's Degree in Software Engineering · 2025",
    stackLabel: "Stack",
    stackTitle: "Tools are a means. The value is in the decision architecture.",
    stackGroups: [
      ["Data & BI", ["🗄️ SQL", "🐘 PostgreSQL", "📊 Apache Superset", "📈 Hi Boards", "📉 Power BI", "🔎 Looker Studio", "☁️ BigQuery", "🧱 dbt", "📊 Tableau", "📋 Excel", "📑 Google Sheets"]],
      ["Visualization", ["📊 Executive dashboards", "🎯 Metrics and KPIs", "📖 Data storytelling", "🖥️ PowerPoint", "🧩 Google Slides", "🧭 Executive insight"]],
      ["Automation", ["🐍 Python", "⚡ n8n", "🔗 APIs", "🧰 Apps Script", "🔄 ETL/ELT", "🌿 Git/GitHub", "🧪 Data quality"]],
      ["Applied AI", ["🤖 LLMs", "💬 ChatGPT", "🧠 Claude", "✨ Gemini", "⌨️ NL → SQL", "✍️ Prompt Engineering", "🔭 Observability", "🛡️ Governance"]],
    ],
    aboutLabel: "About",
    aboutTitle: "Technical depth to build. Business context to decide.",
    aboutBody: [
      "I am a Data Analyst at Hi Platform, working at the intersection of BI, operational analytics, automation and applied intelligence.",
      "My role does not end when a dashboard loads. I work to understand the business rule, validate the metric, organize the evidence and communicate what truly deserves attention.",
      "I am currently focused on analytical products, AI applied to BI and data structures that bring questions closer to reliable decisions.",
    ],
    principles: ["Low noise", "Metrics with context", "Evidence before conclusions"],
    contactLabel: "Contact",
    contactTitle: "If the challenge calls for data, context and direction, let's talk.",
    contactBody:
      "Open to opportunities in Data, BI and Analytics, as well as conversations about analytical products, automation and applied AI.",
    resourcesTitle: "Résumé and direct channels",
    cvPt: "Currículo em português",
    cvEn: "Résumé in English",
    whatsappCta: "WhatsApp",
    emailCta: "Send an email",
    linkedinCta: "LinkedIn",
    githubCta: "GitHub",
    footer: "Data with context. Decisions with evidence.",
    menu: "Open menu",
    theme: "Toggle theme",
    language: "Change language",
  },
} as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" />
    </svg>
  );
}

function DataStage({ language }: { language: Language }) {
  const isPt = language === "pt";
  return (
    <div className="insight-stage" data-parallax="0.32" aria-hidden="true">
      <div className="insight-stage-head"><span className="signal-dot" /><strong>EVIDENCE → DECISION</strong><small>RR / 2026</small></div>
      <div className="quartz-flow">
        <span className="quartz-spine" />

        <div className="quartz-step quartz-question">
          <span className="quartz-node">1</span>
          <div className="quartz-card">
            <span className="quartz-icon">?</span>
            <div><small>{isPt ? "PERGUNTA" : "QUESTION"}</small><strong>{isPt ? "Onde está o maior impacto financeiro da operação?" : "Where is the operation's largest financial impact?"}</strong></div>
          </div>
        </div>

        <div className="quartz-step quartz-sql">
          <span className="quartz-node">2</span>
          <div className="quartz-card">
            <span className="quartz-icon">&lt;/&gt;</span>
            <div><small>SQL</small><code><b>SELECT</b> impacto_mensal<br/><b>FROM</b> camada_bi<br/><b>WHERE</b> evidencia = <em>true</em>;</code></div>
          </div>
        </div>

        <div className="quartz-step quartz-metric">
          <span className="quartz-node">3</span>
          <div className="quartz-card">
            <span className="quartz-icon quartz-bars"><i/><i/><i/></span>
            <div><small>{isPt ? "MÉTRICA VALIDADA" : "VALIDATED METRIC"}</small><strong className="quartz-value">R$43K<em>/{isPt ? "mês" : "month"}</em></strong><span className="quartz-status">▲ {isPt ? "custo recorrente evitado" : "recurring cost avoided"}</span></div>
            <svg className="quartz-spark" viewBox="0 0 92 52" role="presentation"><polyline points="3,45 14,37 24,40 35,26 46,30 58,18 69,21 88,6"/><circle cx="88" cy="6" r="3"/></svg>
          </div>
        </div>

        <div className="quartz-step quartz-insight">
          <span className="quartz-node">4</span>
          <div className="quartz-card">
            <span className="quartz-icon">✦</span>
            <div><small>INSIGHT</small><strong>{isPt ? "Redução de custo com continuidade analítica." : "Cost reduction with analytical continuity."}</strong></div>
          </div>
        </div>

        <aside className="quartz-evidence">
          <header>{isPt ? "EVIDÊNCIA OPERACIONAL" : "OPERATIONAL EVIDENCE"}</header>
          <div><span>{isPt ? "Custo evitado" : "Cost avoided"}</span><strong>R$43K/mês</strong></div>
          <div><span>{isPt ? "Continuidade" : "Continuity"}</span><strong>{isPt ? "Preservada" : "Preserved"}</strong></div>
          <div><span>{isPt ? "Plataforma" : "Platform"}</span><strong>Superset</strong></div>
          <footer>● {isPt ? "VALIDADO · RASTREÁVEL" : "VALIDATED · TRACEABLE"}</footer>
        </aside>
      </div>
    </div>
  );
}

function CaseVisual({ index, language }: { index: number; language: Language }) {
  const isPt = language === "pt";
  if (index === 0) return <div className="case-semantic migration-viz"><span>DashBI</span><i>→</i><span>Superset</span><strong>− R$43K</strong></div>;
  if (index === 1) return <div className="case-semantic pipeline-viz"><div><span>ERP</span><i>→</i><span>RAW</span><i>→</i><span>SILVER</span><i>→</i><span>GOLD</span></div><strong>{isPt ? "HISTÓRICO + RASTREABILIDADE" : "HISTORY + TRACEABILITY"}</strong></div>;
  if (index === 2) return <div className="case-semantic volume-viz"><strong>40+ GB</strong><div>{Array.from({length:18}).map((_,i)=><i key={i} />)}</div><span>{isPt ? "PADRÕES → OPORTUNIDADE" : "PATTERNS → OPPORTUNITY"}</span></div>;
  if (index === 3) return <div className="case-semantic ai-viz"><span>{isPt ? "“Qual indicador mudou?”" : "“Which metric changed?”"}</span><code>SELECT insight FROM data;</code><strong>✓ {isPt ? "RESPOSTA RASTREÁVEL" : "TRACEABLE ANSWER"}</strong></div>;
  return (
    <div className="case-semantic control-tower-viz" aria-label={isPt ? "Representação anônima da Torre de Controle" : "Anonymous Control Tower representation"}>
      <div className="tower-tv">
        <header><span>● {isPt ? "OPERAÇÃO" : "OPERATION"}</span><strong>TV</strong></header>
        <div className="tower-kpis"><i /><i /><i /></div>
        <div className="tower-chart"><b /><b /><b /><b /><b /></div>
      </div>
      <div className="tower-core" aria-hidden="true">
        <span className="tower-signal tower-signal-a" />
        <span className="tower-signal tower-signal-b" />
        <i className="tower-mast" />
        <div className="tower-body"><b /><b /><b /></div>
        <div className="tower-bi"><i /><i /><i /></div>
      </div>
      <div className="tower-access">
        <header><span>{isPt ? "MESMO DASHBOARD" : "SAME DASHBOARD"}</span><strong>RLS</strong></header>
        <div><i>OP</i><span>{isPt ? "DADOS PRÓPRIOS" : "OWN DATA"}</span></div>
        <div><i>SV</i><span>{isPt ? "VISÃO CONSOLIDADA" : "CONSOLIDATED VIEW"}</span></div>
      </div>
      <strong className="tower-flow">{isPt ? "TV · SUPERVISÃO · OPERADOR" : "TV · SUPERVISION · OPERATOR"}</strong>
    </div>
  );
}

type PortfolioCopy = (typeof copy)[Language];

function RecruiterMode({ language, t, onClose }: { language: Language; t: PortfolioCopy; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isPt = language === "pt";
  const labels = isPt
    ? ["Valor", "Impacto", "Capacidades", "Trajetória", "Contato"]
    : ["Value", "Impact", "Capabilities", "Career", "Contact"];

  useEffect(() => {
    closeRef.current?.focus();
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setStep((current) => Math.min(current + 1, labels.length - 1));
      if (event.key === "ArrowLeft") setStep((current) => Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [labels.length]);

  return (
    <div className="recruiter-mode" role="dialog" aria-modal="true" aria-labelledby="recruiter-title">
      <div className="recruiter-atmosphere" aria-hidden="true"><i/><i/><i/></div>
      <header className="recruiter-header">
        <div className="recruiter-brand">
          <span className="brand-mark">RR</span>
          <div><strong>{isPt ? "MODO RECRUTADOR" : "RECRUITER MODE"}</strong><small>{isPt ? "LEITURA EXECUTIVA · 60S" : "EXECUTIVE SCAN · 60S"}</small></div>
        </div>
        <div className="recruiter-header-status"><span className="signal-dot" />{isPt ? "PERFIL VERIFICÁVEL" : "VERIFIABLE PROFILE"}</div>
        <button ref={closeRef} className="recruiter-close" type="button" onClick={onClose} aria-label={isPt ? "Fechar modo recrutador" : "Close recruiter mode"}>×</button>
      </header>

      <div className="recruiter-shell">
        <nav className="recruiter-nav" aria-label={isPt ? "Etapas do resumo" : "Summary steps"}>
          {labels.map((label, index) => (
            <button key={label} type="button" className={step === index ? "active" : step > index ? "complete" : ""} onClick={() => setStep(index)} aria-current={step === index ? "step" : undefined}>
              <span>0{index + 1}</span><strong>{label}</strong><i />
            </button>
          ))}
        </nav>

        <section className="recruiter-content" aria-live="polite">
          <div className="recruiter-counter"><span>0{step + 1}</span> / 05 <i>{Math.round(((step + 1) / 5) * 100)}%</i></div>

          {step === 0 && (
            <div className="recruiter-slide recruiter-value" key="value">
              <p className="recruiter-kicker">{isPt ? "PROPOSTA DE VALOR" : "VALUE PROPOSITION"}</p>
              <h2 id="recruiter-title">{isPt ? "Dados operacionais viram direção de negócio." : "Operational data becomes business direction."}</h2>
              <p className="recruiter-lead">{t.profileBody}</p>
              <div className="recruiter-project-grid" aria-label={isPt ? "Projetos selecionados" : "Selected projects"}>
                {t.cases.map((item) => (
                  <article key={item.index}>
                    <span>{item.index} · {item.kicker}</span>
                    <strong>{item.result}</strong>
                    <h3>{item.title}</h3>
                  </article>
                ))}
              </div>
              <div className="recruiter-proof"><span>● {isPt ? "POSICIONAMENTO" : "POSITIONING"}</span><strong>{t.roleLine}</strong><p>{isPt ? "BI · Analytics · Automação · IA aplicada" : "BI · Analytics · Automation · Applied AI"}</p></div>
            </div>
          )}

          {step === 1 && (
            <div className="recruiter-slide" key="impact">
              <p className="recruiter-kicker">{isPt ? "EVIDÊNCIAS DE IMPACTO" : "IMPACT EVIDENCE"}</p>
              <h2>{isPt ? "Resultado antes da ferramenta." : "Outcome before tooling."}</h2>
              <div className="recruiter-case-grid">
                {t.cases.map((item) => (
                  <article key={item.index}><span>{item.index} · {item.kicker}</span><strong>{item.result}</strong><h3>{item.title}</h3><p>{item.resultLabel}</p></article>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="recruiter-slide" key="capabilities">
              <p className="recruiter-kicker">{isPt ? "CAPACIDADES" : "CAPABILITIES"}</p>
              <h2>{isPt ? "Técnica conectada ao uso." : "Technical depth connected to use."}</h2>
              <div className="recruiter-capabilities">
                {t.stackGroups.map(([group, items], index) => (
                  <article key={group}><span>0{index + 1}</span><h3>{group}</h3><div>{items.slice(0, 6).map((item) => <small key={item}>{item}</small>)}</div></article>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="recruiter-slide" key="career">
              <p className="recruiter-kicker">{isPt ? "TRAJETÓRIA" : "CAREER"}</p>
              <h2>{isPt ? "Operação → BI → dados → produto analítico." : "Operations → BI → data → analytical product."}</h2>
              <div className="recruiter-career">
                {t.timeline.map((item, index) => (
                  <article key={`${item.period}-${item.company}`}><span>0{index + 1}</span><time>{item.period}</time><div><strong>{item.role}</strong><small>{item.company}</small><p>{item.body}</p></div></article>
                ))}
              </div>
              <p className="recruiter-education">{t.education}</p>
            </div>
          )}

          {step === 4 && (
            <div className="recruiter-slide recruiter-contact" key="contact">
              <p className="recruiter-kicker">{isPt ? "PRÓXIMO PASSO" : "NEXT STEP"}</p>
              <h2>{t.contactTitle}</h2>
              <p className="recruiter-lead">{t.contactBody}</p>
              <div className="recruiter-actions">
                <a href={t.cvHref} download><span>PDF</span><strong>{t.download}</strong><DownloadIcon /></a>
                <a href="https://www.linkedin.com/in/rafael-rocha-89271021b/" target="_blank" rel="me noopener noreferrer"><span>IN</span><strong>LinkedIn</strong><ArrowIcon /></a>
                <a href="https://wa.me/5532998147576" target="_blank" rel="noopener noreferrer"><span>WA</span><strong>WhatsApp</strong><ArrowIcon /></a>
              </div>
              <div className="recruiter-final-signal"><span className="signal-dot"/><strong>{isPt ? "ABERTO A OPORTUNIDADES EM DADOS, BI E ANALYTICS" : "OPEN TO DATA, BI AND ANALYTICS OPPORTUNITIES"}</strong></div>
            </div>
          )}
        </section>
      </div>

      <footer className="recruiter-footer">
        <button type="button" onClick={() => setStep((current) => Math.max(current - 1, 0))} disabled={step === 0}>← {isPt ? "Anterior" : "Previous"}</button>
        <div><span style={{ width: `${((step + 1) / 5) * 100}%` }} /></div>
        {step < 4
          ? <button type="button" onClick={() => setStep((current) => Math.min(current + 1, 4))}>{isPt ? "Próximo" : "Next"} →</button>
          : <button type="button" onClick={onClose}>{isPt ? "Voltar ao portfólio" : "Back to portfolio"} ×</button>}
      </footer>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("trabalho");
  const heroRef = useRef<HTMLElement>(null);
  const t = copy[language];

  useEffect(() => {
    const storedLanguage = localStorage.getItem("rr-language") as Language | null;
    localStorage.removeItem("rr-theme");
    if (storedLanguage !== "pt" && storedLanguage !== "en") return;
    const timer = window.setTimeout(() => setLanguage(storedLanguage), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("rr-language", language);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress * 100}%`);
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-38% 0px -55% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((node) => sectionObserver.observe(node));
    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [language]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
      hero.querySelectorAll<HTMLElement>("[data-parallax]").forEach((node) => {
        const depth = Number(node.dataset.parallax ?? 0.4);
        node.style.transform = `translate3d(${x * depth * 16}px, ${y * depth * 16}px, 0)`;
      });
    };
    const leave = () => hero.querySelectorAll<HTMLElement>("[data-parallax]").forEach((node) => (node.style.transform = ""));
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setRecruiterOpen(false);
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 961px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    document.body.style.overflow = menuOpen || recruiterOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktop);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktop);
    };
  }, [menuOpen, recruiterOpen]);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    setMenuOpen(false);
  };

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Rafael Rocha, início">
          <span className="brand-mark">RR</span>
          <span className="brand-name">Rafael Rocha</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? (language === "pt" ? "Fechar menu" : "Close menu") : t.menu}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>
        <div id="site-menu" className={`header-panel ${menuOpen ? "is-open" : ""}`}>
          <nav className="main-nav" aria-label="Principal">
            {t.nav.map(([label, href]) => (
              <a
                key={href}
                className={activeSection === href.slice(1) ? "active" : ""}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-controls">
            <button className="recruiter-trigger" type="button" onClick={() => { setRecruiterOpen(true); setMenuOpen(false); }}>
              <span className="recruiter-trigger-dot" /><span className="recruiter-trigger-label">Recruiter</span><strong>60s</strong>
            </button>
            <div className="language-switch" aria-label={t.language}>
              <button className={language === "pt" ? "active" : ""} onClick={() => changeLanguage("pt")}>PT</button>
              <span>/</span>
              <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button>
            </div>
            <button
              className="theme-toggle"
              type="button"
              aria-label={t.theme}
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            >
              <span className="theme-icon sun">☼</span>
              <span className="theme-icon moon">◐</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero" ref={heroRef}>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="eyebrow hero-enter enter-1">{t.eyebrow}</p>
              <h1 className="hero-enter enter-2">
                {t.heroLead} <span>{t.heroAccent}</span>
              </h1>
              <p className="hero-body hero-enter enter-3">{t.heroBody}</p>
              <div className="hero-actions hero-enter enter-4">
                <a className="button button-primary" href="#impacto">
                  {t.seeWork}<ArrowIcon />
                </a>
                <a className="button button-secondary" href={t.cvHref} download>
                  {t.download}<DownloadIcon />
                </a>
              </div>
              <div className="hero-context hero-enter enter-5">
                <span className="context-pulse" />
                <span>{t.roleLine}</span>
                <span className="context-rule" />
                <span>Ubá · MG · Brasil</span>
              </div>
            </div>
            <DataStage language={language} />
          </div>
          <div className="metric-rail page-shell hero-enter enter-5">
            {t.metrics.map(([value, prefix, suffix, label], index) => (
              <div className="metric" key={label}>
                <span className="metric-index">0{index + 1}</span>
                <strong><small>{prefix}</small>{value}<small>{suffix}</small></strong>
                <span>{label}</span>
              </div>
            ))}
            <div className="metric-role">
              <span>CORE STACK</span>
              <strong>SQL · Python · Superset</strong>
              <span>Power BI · PostgreSQL · n8n</span>
            </div>
          </div>
        </section>

        <div className="value-marquee" aria-hidden="true">
          <div className="value-marquee-track">
            {[0, 1].map((group) => (
              <div className="value-marquee-group" key={group}>
                <span>BI &amp; ANALYTICS</span><b>◆</b>
                <span>SQL &amp; DATA PRODUCTS</span><b>◆</b>
                <span>AUTOMATION &amp; AI</span><b>◆</b>
                <span>BUSINESS IMPACT</span><b>◆</b>
                <span>BI &amp; ANALYTICS</span><b>◆</b>
                <span>SQL &amp; DATA PRODUCTS</span><b>◆</b>
                <span>AUTOMATION &amp; AI</span><b>◆</b>
                <span>BUSINESS IMPACT</span><b>◆</b>
              </div>
            ))}
          </div>
        </div>

        <section id="trabalho" className="section page-shell">
          <div className="section-heading reveal">
            <p className="section-label">{t.workLabel}</p>
            <h2>{t.workTitle}</h2>
            <p>{t.workIntro}</p>
          </div>
          <div className="service-grid">
            {t.services.map((service, index) => (
              <article className={`service-card reveal delay-${index + 1}`} key={service.n}>
                <div className="service-top">
                  <span>{service.n}</span>
                  <span className="service-cross">＋</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <div className="tag-row">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="page-shell process-layout">
            <div className="process-copy reveal">
              <p className="section-label">{t.processLabel}</p>
              <h2>{t.processTitle}</h2>
              <p>{t.processBody}</p>
              <div className="process-tags">
                {t.processPoints.map((point) => <span key={point}>{point}</span>)}
              </div>
              <a className="text-link" href="https://www.processsurge.com/pt" target="_blank" rel="noopener noreferrer">{t.processCta}<ArrowIcon /></a>
            </div>
            <div className="process-orbit reveal delay-1" aria-hidden="true">
              <span className="orbit-ring ring-one" />
              <span className="orbit-ring ring-two" />
              <span className="orbit-ring ring-three" />
              <strong>DATA</strong><b>BI</b><em>AUTOMATION</em>
            </div>
          </div>
        </section>

        <section id="impacto" className="section section-alt">
          <div className="page-shell">
            <div className="section-heading reveal">
              <p className="section-label">{t.impactLabel}</p>
              <h2>{t.impactTitle}</h2>
              <p>{t.impactIntro}</p>
            </div>
            <div className="case-list">
              {t.cases.map((item, index) => (
                <article className="case-card reveal" key={item.index}>
                  <div className="case-index">{item.index}</div>
                  <div className="case-copy">
                    <p className="case-kicker">{item.kicker}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="tag-row">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className={`case-result case-result-${index + 1}`}>
                    <CaseVisual index={index} language={language} />
                    <strong>{item.result}</strong>
                    <span>{item.resultLabel}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section page-shell">
          <div className="section-heading reveal">
            <p className="section-label">{t.methodLabel}</p>
            <h2>{t.methodTitle}</h2>
          </div>
          <div className="method-flow">
            {t.methodSteps.map(([number, title, body]) => (
              <article className="method-step reveal" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section page-shell">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="section-label">{t.experienceLabel}</p>
              <h2>{t.experienceTitle}</h2>
            </div>
            <p>{t.experienceIntro}</p>
          </div>
          <div className="career-arc reveal"><span>{language === "pt" ? "OPERAÇÃO" : "OPERATIONS"}</span><i>→</i><span>BI</span><i>→</i><span>{language === "pt" ? "DADOS" : "DATA"}</span><i>→</i><span>{language === "pt" ? "PRODUTO ANALÍTICO" : "ANALYTICAL PRODUCT"}</span></div>
          <div className="timeline">
            {t.timeline.map((item, index) => (
              <article className="timeline-row reveal" key={`${item.period}-${item.company}`}>
                <span className="timeline-number">0{index + 1}</span>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                </div>
                <div className="timeline-description">
                  <p>{item.body}</p>
                  <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
            <div className="education-row reveal">
              <span>EDU</span>
              <strong>{t.education}</strong>
              <span>UNOPAR</span>
            </div>
          </div>
        </section>

        <section className="section stack-section section-alt">
          <div className="page-shell">
            <div className="section-heading reveal">
              <p className="section-label">{t.stackLabel}</p>
              <h2>{t.stackTitle}</h2>
            </div>
            <div className="stack-grid">
              {t.stackGroups.map(([group, items], index) => (
                <article className={`stack-group reveal delay-${(index % 3) + 1}`} key={group}>
                  <span className="stack-number">0{index + 1}</span>
                  <h3>{group}</h3>
                  <div className="stack-items">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section page-shell about-section">
          <div className="about-visual reveal">
            <div className="portrait-frame">
              <img src="/rafael-rocha.jpeg" alt="Rafael Rocha" />
              <span className="portrait-grid" aria-hidden="true" />
            </div>
            <div className="about-status">
              <span className="signal-dot" />
              <span>DATA · BI · ANALYTICS</span>
              <strong>UBÁ / MG</strong>
            </div>
          </div>
          <div className="about-copy reveal delay-1">
            <p className="section-label">{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
            {t.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="principles">
              {t.principles.map((principle, index) => (
                <span key={principle}><small>0{index + 1}</small>{principle}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="page-shell contact-grid">
            <div className="reveal">
              <p className="section-label">{t.contactLabel}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactBody}</p>
            </div>
            <div className="contact-actions reveal delay-1">
              <h3 className="resources-title">{t.resourcesTitle}</h3>
              <a className="contact-link cv-link" href="/Curriculo_Rafael_Rocha_PT.pdf" download>
                <span>PDF · PT</span><strong>{t.cvPt}</strong><DownloadIcon />
              </a>
              <a className="contact-link cv-link" href="/Rafael_Rocha_Resume_EN.pdf" download>
                <span>PDF · EN</span><strong>{t.cvEn}</strong><DownloadIcon />
              </a>
              <a className="contact-link whatsapp-link" href="https://wa.me/5532998147576" target="_blank" rel="noopener noreferrer">
                <span>{t.whatsappCta}</span><strong>+55 32 99814-7576</strong><ArrowIcon />
              </a>
              <a className="contact-link primary" href="mailto:rafaelolirocha@gmail.com">
                <span>{t.emailCta}</span><strong>rafaelolirocha@gmail.com</strong><ArrowIcon />
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/rafael-rocha-89271021b/" target="_blank" rel="me noopener noreferrer">
                <span>{t.linkedinCta}</span><strong>/rafael-rocha</strong><ArrowIcon />
              </a>
              <a className="contact-link" href="https://github.com/RafaelOliveiraRocha" target="_blank" rel="me noopener noreferrer">
                <span>{t.githubCta}</span><strong>/RafaelOliveiraRocha</strong><ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-inner">
          <span>© {currentYear} Rafael Rocha</span>
          <strong>{t.footer}</strong>
          <a href="#inicio">↑ TOP</a>
        </div>
      </footer>

      {recruiterOpen && <RecruiterMode language={language} t={t} onClose={() => setRecruiterOpen(false)} />}
    </>
  );
}

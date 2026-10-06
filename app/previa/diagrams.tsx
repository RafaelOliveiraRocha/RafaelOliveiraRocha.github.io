import type { Language } from "./content";
import { Icon, type IconName } from "./icons";
import styles from "./preview.module.css";

function Node({ icon, label, accent = false }: { icon: IconName; label: string; accent?: boolean }) {
  return <div className={styles.diagramNode}><div className={`${styles.diagramIcon} ${accent ? styles.accentIcon : ""}`}><Icon name={icon}/></div><span>{label}</span></div>;
}
export function MigrationDiagram({ language }: { language: Language }) {
  return <figure className={`${styles.diagram} ${styles.migration}`} aria-label={language === "pt" ? "Migração: dashboards reconstruídos convergem para Apache Superset." : "Migration: rebuilt dashboards converge into Apache Superset."}>
    <div className={styles.migrationSources}>{(["bars", "trend", "table"] as const).map(icon => <div className={styles.diagramIcon} key={icon}><Icon name={icon}/></div>)}</div>
    <svg className={styles.migrationArrows} viewBox="0 0 120 300" preserveAspectRatio="none" aria-hidden="true"><path d="M0 28C68 28 52 150 112 150M0 150h112M0 272C68 272 52 150 112 150"/><path d="m103 143 10 7-10 7"/></svg>
    <svg className={styles.migrationMobileArrows} viewBox="0 0 300 80" aria-hidden="true"><path d="M32 0C32 35 150 22 150 72M150 0v72M268 0C268 35 150 22 150 72m-7-9 7 10 7-10"/></svg>
    <div className={styles.migrationTarget}><div className={`${styles.diagramIcon} ${styles.dashboardIcon}`}><Icon name="dashboard"/></div><span>Apache Superset</span></div>
  </figure>;
}
export function FlowDiagram({ type, language }: { type: "ai" | "financial" | "prototype"; language: Language }) {
  const pt = language === "pt";
  const data: Record<typeof type, { label: string; icon: IconName; accent?: boolean }[]> = {
    ai: [{label:pt?"Sistemas":"Systems",icon:"database"},{label:pt?"Integrações":"Integrations",icon:"integration",accent:true},{label:pt?"IA":"AI",icon:"document"},{label:pt?"Respostas":"Responses",icon:"document"},{label:pt?"Validação":"Validation",icon:"check",accent:true}],
    financial: [{label:"ERP",icon:"database"},{label:"APIs / n8n",icon:"integration",accent:true},{label:"RAW · Silver · Gold",icon:"database"},{label:pt?"Análise":"Analysis",icon:"bars"}],
    prototype: [{label:pt?"Linguagem natural":"Natural language",icon:"question"},{label:"LLMs",icon:"ai",accent:true},{label:"SQL",icon:"document"},{label:pt?"Dados":"Data",icon:"database"}],
  };
  const description = type === "ai" ? (pt ? "Sistemas conectados por integrações à IA, que produz respostas conferidas com as fontes de origem." : "Systems connected to AI through integrations; responses are checked against source data.") : type === "financial" ? (pt ? "ERP, APIs e n8n alimentavam as camadas RAW, Silver e Gold no PostgreSQL e a análise financeira." : "ERP, APIs and n8n fed RAW, Silver and Gold layers in PostgreSQL and financial analysis.") : (pt ? "No protótipo, perguntas em linguagem natural passam por LLMs e geração de SQL para consultar dados, com respostas rastreáveis." : "In the prototype, natural-language questions go through LLMs and SQL generation to query data, with traceable answers.");
  return <figure className={`${styles.diagram} ${styles.flowDiagram} ${styles[type + "Diagram" as "aiDiagram" | "financialDiagram" | "prototypeDiagram"]}`} aria-label={description}>
    <ol className={styles.flowNodes}>{data[type].map((node, index) => <li key={node.label}>
      {type === "financial" && index === 2 ? <div className={styles.layerNode}><div><i/>RAW</div><div><i/>Silver</div><div><i/>Gold</div><span>PostgreSQL</span></div> : <Node {...node}/>}
    </li>)}</ol>
    {type !== "financial" && <figcaption className={styles.feedback}><span>{type === "ai" ? (pt ? "Conferência com fontes de origem" : "Verification against source data") : (pt ? "Respostas rastreáveis" : "Traceable answers")}</span></figcaption>}
  </figure>;
}

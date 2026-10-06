"use client";
import { useEffect, useState } from "react";
import { copy, links, type Language } from "./content";
import styles from "./preview.module.css";

export default function Recruiter({ language, onClose }: { language: Language; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const t = copy[language];
  const pt = language === "pt";
  const labels = pt ? ["Valor", "Impacto", "Capacidades", "Trajetória", "Contato"] : ["Value", "Impact", "Capabilities", "Career", "Contact"];
  useEffect(() => {
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") { event.preventDefault(); setStep(current => Math.min(current + 1, 4)); }
      if (event.key === "ArrowLeft") { event.preventDefault(); setStep(current => Math.max(current - 1, 0)); }
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, []);
  return <>
    <div className={styles.recruiterShell}>
      <nav className={styles.recruiterSteps} aria-label={pt ? "Etapas do resumo" : "Summary steps"}>{labels.map((label,index) => <button type="button" key={label} aria-label={`${index+1}. ${label}`} aria-current={step === index ? "step" : undefined} onClick={() => setStep(index)}><span>0{index+1}</span><span className={styles.stepName}>{label}</span></button>)}</nav>
      <div className={styles.recruiterContent} aria-live="polite" aria-atomic="true">
        <p className={styles.kicker}>0{step+1} / 05 · {labels[step]}</p>
        {step === 0 && <><h3>{t.hero_title}</h3><p>{t.hero_body}</p><div className={styles.recruiterMetrics}><div><strong>{t.result1}</strong><p>{t.result1_body}</p></div><div><strong>{t.result2}</strong><p>{t.result2_body}</p></div></div></>}
        {step === 1 && <><h3>{pt ? "Impacto e responsabilidade." : "Impact and responsibility."}</h3><ul className={styles.recruiterList}>
          <li><strong>{t.bi_title}</strong><p>{pt ? "Migração conduzida para Apache Superset, com reconstrução dos dashboards e continuidade das entregas." : "Led the migration to Apache Superset, rebuilding dashboards and maintaining delivery continuity."}</p></li>
          <li><strong>{t.ai_title}</strong><p>{pt ? "Sustentação e evolução técnica: diagnóstico de falhas, validação de respostas com as fontes de origem e ajustes nas funcionalidades e integrações." : "Technical maintenance and evolution: failure diagnosis, response validation against source data, and feature and integration adjustments."}</p></li>
          <li><p>{pt ? "Outras entregas: integração financeira anterior, Torre de Controle com RLS dinâmica, análise de mais de 40 GB de conversas e protótipo de linguagem natural para SQL." : "Other work: a past financial integration, Control Tower with dynamic RLS, analysis of more than 40 GB of conversations, and a natural-language-to-SQL prototype."}</p></li>
        </ul></>}
        {step === 2 && <><h3>{t.tools}</h3><div className={styles.recruiterSkills}>{([1,2,3,4] as const).map(n => <div key={n}><h4>{t[`tool${n}_title`]}</h4><p>{t[`tool${n}_body`]}</p></div>)}</div></>}
        {step === 3 && <><h3>{t.experience}</h3><ul className={styles.recruiterList}>{([1,2,3] as const).map(n => <li key={n}><p>{t[`exp${n}_date`]}</p><strong>{t[`exp${n}_title`]}</strong></li>)}</ul><p className={styles.recruiterEducation}>{t.education_title}<br/>{t.education_body}</p></>}
        {step === 4 && <><h3>{t.contact_title}</h3><p>{t.contact_body}</p><div className={styles.recruiterContacts}><a href={links.email}>E-mail ↗</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={links.cvPT} download>{t.cv_pt} ↓</a><a href={links.cvEN} download>{t.cv_en} ↓</a></div></>}
      </div>
    </div>
    <div className={styles.recruiterFooter}><button className={styles.outlineButton} type="button" disabled={step === 0} onClick={() => setStep(current => Math.max(current - 1, 0))}>← {pt ? "Anterior" : "Previous"}</button><span aria-hidden="true">{step+1} / 5</span>{step < 4 ? <button type="button" className={styles.primary} onClick={() => setStep(current => Math.min(current + 1, 4))}>{pt ? "Próximo" : "Next"} →</button> : <button type="button" className={styles.primary} onClick={onClose}>{pt ? "Voltar" : "Back"} ×</button>}</div>
  </>;
}

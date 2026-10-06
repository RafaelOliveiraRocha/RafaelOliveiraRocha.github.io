"use client";

import { useLayoutEffect, useRef, useState, useSyncExternalStore, type MouseEvent } from "react";
import Continuity from "./previa/continuity";
import Disclosure from "./previa/disclosure";
import Modal from "./previa/modal";
import Recruiter from "./previa/recruiter";
import { FlowDiagram, MigrationDiagram } from "./previa/diagrams";
import { Icon } from "./previa/icons";
import { copy, links, type Copy, type Language } from "./previa/content";
import { applyPreferences, setLanguage, setTheme, useDesktopContent, usePreferences, type Theme } from "./previa/preferences";
import styles from "./previa/preview.module.css";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function subscribeScroll(callback: () => void) { window.addEventListener("scroll", callback, { passive: true }); return () => window.removeEventListener("scroll", callback); }
function LanguageControl({ language }: { language: Language }) {
  return <button type="button" className={styles.languageControl} onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={language === "pt" ? "Alterar idioma para inglês" : "Switch language to Portuguese"}><span data-active={language === "pt"}>PT</span><span aria-hidden="true">/</span><span data-active={language === "en"}>EN</span></button>;
}
function ThemeControl({ language, theme, label = false }: { language: Language; theme: Theme; label?: boolean }) {
  const text = language === "pt" ? `Ativar tema ${theme === "dark" ? "claro" : "escuro"}` : `Switch to ${theme === "dark" ? "light" : "dark"} theme`;
  return <button type="button" className={label ? styles.outlineButton : styles.iconButton} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={text} title={text}><Icon name={theme === "dark" ? "sun" : "moon"}/>{label && text}</button>;
}
function Emphasis({ text, part }: { text: string; part?: string }) {
  if (!part || !text.includes(part)) return <>{text}</>;
  const index = text.indexOf(part);
  return <>{text.slice(0,index)}<em>{part}</em>{text.slice(index+part.length)}</>;
}
type ProjectName = "bi" | "ai" | "financial" | "tower" | "conversations" | "prototype";
function ProjectText({ name, t, highlight }: { name: ProjectName; t: Copy; highlight?: string }) {
  const category = name === "bi" || name === "ai" || name === "financial" ? t[`${name}_category`] : null;
  return <div className={styles.projectText}>
    {category ? <p className={styles.kicker}>{category}</p> : <div className={styles.shortRule} aria-hidden="true"/>}
    <h3 id={`${name}-title`} tabIndex={-1}><Emphasis text={t[`${name}_title`]} part={highlight}/></h3>
    <p data-copy={`${name}_body`}>{t[`${name}_body`]}</p>
    <p className={styles.meta}>{t[`${name}_tags`]}</p>
  </div>;
}
function ContactLinks({ t }: { t: Copy }) {
  return <><div className={styles.contactLinks}>
    <a href={links.email}><Icon name="email"/><span>E-mail</span><span aria-hidden="true">↗</span></a>
    <a href={links.linkedin} target="_blank" rel="me noopener noreferrer"><Icon name="linkedin"/><span>LinkedIn</span><span aria-hidden="true">↗</span></a>
    <a href={links.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp"/><span>WhatsApp</span><span aria-hidden="true">↗</span></a>
    <a href={links.github} target="_blank" rel="noopener noreferrer"><Icon name="github"/><span>GitHub</span><span aria-hidden="true">↗</span></a>
  </div><div className={styles.cvLinks}><a className={styles.outlineButton} href={links.cvPT} download><Icon name="document"/>{t.cv_pt}</a><a className={styles.outlineButton} href={links.cvEN} download><Icon name="document"/>{t.cv_en}</a></div></>;
}

export default function Portfolio() {
  const { language, theme } = usePreferences();
  const t = copy[language]; const pt = language === "pt";
  const desktop = useDesktopContent();
  const showTop = useSyncExternalStore(subscribeScroll, () => window.scrollY > 480, () => false);
  const [overlay, setOverlay] = useState<"menu" | "recruiter" | null>(null);
  const [more, setMore] = useState(false);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const recruiterTrigger = useRef<HTMLButtonElement>(null);
  const moreTrigger = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    applyPreferences();
    return () => { delete document.documentElement.dataset.previewTheme; };
  }, []);
  const navigation = [{id:"impacto",label:pt?"Projetos":"Projects"},{id:"experiencia",label:t.experience},{id:"sobre",label:t.about},{id:"contato",label:t.contact}];
  function navigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault(); setOverlay(null);
    history.pushState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.querySelector<HTMLElement>("h2")?.focus({preventScroll:true});
      target?.scrollIntoView({ block:"start", behavior: reducedMotion() ? "instant" : "smooth" });
    });
  }
  function toggleProjects() {
    setMore(!more);
    requestAnimationFrame(() => {
      if (more) { moreTrigger.current?.focus({preventScroll:true}); moreTrigger.current?.scrollIntoView({block:"center",behavior:"instant"}); }
      else { const first = document.getElementById("tower-title"); first?.focus({preventScroll:true}); first?.scrollIntoView({block:"start",behavior:reducedMotion()?"instant":"smooth"}); }
    });
  }
  const returnFocus = () => window.matchMedia("(max-width: 1100px)").matches ? menuTrigger.current : recruiterTrigger.current;
  return <div className={styles.preview} id="inicio" lang={pt ? "pt-BR" : "en"} data-language={language}>
    <a className={styles.skipLink} href="#conteudo">{pt?"Pular para o conteúdo":"Skip to content"}</a>
    <Continuity/>
    <header className={styles.header}>
      <div className={`${styles.headerInner} ${styles.content}`} data-content-width>
        <a className={styles.brand} href="#inicio">Rafael Rocha</a><span className={styles.role}>{pt?"Analista de Dados":"Data Analyst"}</span>
        <nav className={styles.nav} aria-label={pt?"Navegação principal":"Main navigation"}>{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={event => navigate(event,item.id)}>{item.label}</a>)}</nav>
        <div className={styles.headerActions}>
          <button ref={recruiterTrigger} type="button" className={`${styles.outlineButton} ${styles.recruiterTrigger}`} onClick={() => setOverlay("recruiter")} aria-haspopup="dialog">Recruiter 60s</button>
          <button type="button" className={styles.topButton} data-visible={showTop} tabIndex={showTop ? 0 : -1} aria-hidden={!showTop} aria-label={pt?"Voltar ao topo":"Back to top"} title={pt?"Voltar ao topo":"Back to top"} onClick={() => { document.querySelector<HTMLAnchorElement>(`.${styles.brand}`)?.focus({preventScroll:true}); window.scrollTo({top:0,behavior:reducedMotion()?"instant":"smooth"}); }}><Icon name="up"/></button>
          <LanguageControl language={language}/>
          <div className={styles.desktopTheme}><ThemeControl language={language} theme={theme}/></div>
          <button ref={menuTrigger} className={styles.menuTrigger} type="button" aria-label={pt?"Abrir menu":"Open menu"} aria-expanded={overlay === "menu"} aria-controls="preview-menu" aria-haspopup="dialog" onClick={() => setOverlay("menu")}><Icon name="menu"/></button>
        </div>
      </div>
    </header>
    <main id="conteudo" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <picture className={styles.heroArt}><source media="(max-width: 767px)" srcSet="/redesign/hero-signals-mobile.webp" width="1586" height="470"/><img src="/redesign/hero-signals.webp" width="1586" height="734" alt="" fetchPriority="high"/></picture>
        <div className={`${styles.content} ${styles.heroCopy}`}>
          <p className={styles.eyebrow}>{pt ? "Analista de Dados" : "Data Analyst"}</p>
          <h1 id="hero-title" aria-label={t.hero_title}><span className={styles.heroFirst}><span>{pt?"Dados,":"Data,"}</span>{" "}<span>{pt?"Automação":"Automation"}<span className={styles.mobileConjunction}>{pt?" e":" and"}</span></span></span><span className={styles.heroSecond}><span className={styles.desktopConjunction}>{pt?"e ":"and "}</span><em>{pt?"IA Aplicada.":"Applied AI."}</em></span></h1>
          <p className={styles.lead} data-copy="hero_body">{t.hero_body}</p>
          <div className={styles.actions}><a className={styles.primary} href="#impacto" onClick={event=>navigate(event,"impacto")}>{pt?"Explorar projetos":"Explore projects"}<span aria-hidden="true">→</span></a><a className={styles.textLink} href={pt?links.cvPT:links.cvEN} download>{pt?"Currículo":"Résumé"}</a></div>
        </div>
      </section>
      <div className={styles.content}>
        <section className={styles.results} aria-label={pt?"Resultados":"Results"} data-continuity-section><div><strong>{t.result1}</strong><p>{t.result1_body}</p></div><div><strong>{t.result2}</strong><p>{t.result2_body}</p></div></section>
        <section id="impacto" className={styles.section} aria-labelledby="impacto-title" data-continuity-section>
          <h2 className={styles.sectionTitle} id="impacto-title" tabIndex={-1}>{t.selected}</h2>
          <article className={`${styles.featuredCase} ${styles.biCase}`} aria-labelledby="bi-title"><ProjectText name="bi" t={t} highlight={t.result1}/><MigrationDiagram language={language}/></article>
          <article className={`${styles.featuredCase} ${styles.aiCase}`} aria-labelledby="ai-title"><ProjectText name="ai" t={t}/><FlowDiagram type="ai" language={language}/></article>
        </section>
        <section id="outras-entregas" className={styles.section} aria-labelledby="other-title" data-continuity-section>
          <h2 className={styles.sectionTitle} id="other-title" tabIndex={-1}>{t.other}</h2>
          <article className={styles.splitCase} aria-labelledby="financial-title"><ProjectText name="financial" t={t} highlight={pt?"histórico e rastreabilidade.":"history and traceability."}/><FlowDiagram type="financial" language={language}/></article>
          <div id="more-projects" className={styles.moreProjects} data-expanded={more} hidden={!desktop && !more}>
            <div className={styles.complementaryGrid}><article aria-labelledby="tower-title"><ProjectText name="tower" t={t}/></article><article aria-labelledby="conversations-title"><ProjectText name="conversations" t={t} highlight="40 GB"/></article></div>
            <article className={styles.splitCase} aria-labelledby="prototype-title"><ProjectText name="prototype" t={t}/><FlowDiagram type="prototype" language={language}/></article>
          </div>
          <button ref={moreTrigger} type="button" className={`${styles.outlineButton} ${styles.moreButton}`} aria-expanded={more} aria-controls="more-projects" onClick={toggleProjects}>{more ? (pt?"Recolher projetos":"Collapse projects") : (pt?"Ver mais 3 projetos":"Show 3 more projects")}<span aria-hidden="true">{more?"−":"+"}</span></button>
        </section>
        <section id="processsurge" className={`${styles.section} ${styles.process}`} aria-labelledby="process-title" data-continuity-section><p className={styles.kicker}>{t.process_category}</p><h2 id="process-title" tabIndex={-1}><Emphasis text={t.process_title} part="ProcessSurge:"/></h2><p className={styles.processBody} data-copy="process_body">{t.process_body}</p><a className={styles.primary} href={links.process} target="_blank" rel="noopener noreferrer">{t.process_action}<span aria-hidden="true">↗</span></a></section>
        <section id="como-trabalho" className={`${styles.section} ${styles.work}`} aria-labelledby="work-title" data-continuity-section><p className={styles.kicker}>{t.work}</p><h2 id="work-title" tabIndex={-1}><Emphasis text={t.work_title} part={pt?"Construir para o uso.":"Build for use."}/></h2><p data-copy="work_body">{t.work_body}</p></section>
        <section id="ferramentas" className={styles.section} aria-labelledby="tools-title" data-continuity-section><h2 className={styles.sectionTitle} id="tools-title" tabIndex={-1}>{t.tools}</h2><div className={styles.skillsGrid}>{([1,2,3,4] as const).map(n=><Disclosure key={n} id={`skill-${n}`} desktop={desktop} title={t[`tool${n}_title`]}><p data-copy={`tool${n}_body`}>{t[`tool${n}_body`]}</p></Disclosure>)}</div></section>
        <section id="experiencia" className={styles.section} aria-labelledby="experience-title" data-continuity-section><h2 className={styles.sectionTitle} id="experience-title" tabIndex={-1}>{t.experience}</h2><div className={styles.timeline}>{([1,2,3] as const).map(n=><Disclosure key={n} id={`experience-${n}`} desktop={desktop} title={t[`exp${n}_title`]} period={t[`exp${n}_date`]}><p data-copy={`exp${n}_body`}>{t[`exp${n}_body`]}</p></Disclosure>)}</div></section>
        <section id="formacao" className={`${styles.section} ${styles.education}`} aria-labelledby="education-title" data-continuity-section><h2 className={styles.sectionTitle} id="education-title" tabIndex={-1}>{t.education}</h2><div><Icon name="graduation"/><div><h3>{t.education_title}</h3><p>{t.education_body}</p></div></div></section>
        <section id="sobre" className={`${styles.section} ${styles.about}`} aria-labelledby="about-title" data-continuity-section><h2 className={styles.sectionTitle} id="about-title" tabIndex={-1}>{t.about}</h2><div className={styles.aboutGrid}><picture><source media="(max-width: 767px)" srcSet="/redesign/foto-rafael-480.webp"/><img src="/redesign/foto-rafael-800.webp" alt="Rafael Rocha" width="800" height="800" loading="lazy" decoding="async"/></picture><div className={styles.aboutText}>{([1,2,3] as const).map(n=><p key={n} data-copy={`about${n}`}>{t[`about${n}`]}</p>)}</div></div></section>
        <section id="contato" className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title" data-continuity-section><p className={styles.kicker}>{t.contact}</p><h2 id="contact-title" tabIndex={-1}><Emphasis text={t.contact_title} part={pt?"conversar?":"talk?"}/></h2><p data-copy="contact_body">{t.contact_body}</p><ContactLinks t={t}/></section>
        <footer className={styles.footer}>© 2026 Rafael Rocha</footer>
      </div>
    </main>
    {overlay && <Modal key={overlay} id={overlay === "menu" ? "preview-menu" : "preview-recruiter"} title={overlay === "menu" ? "Rafael Rocha" : "Recruiter 60s"} closeLabel={pt?"Fechar":"Close"} onClose={()=>setOverlay(null)} returnFocus={returnFocus}>
      {overlay === "menu" ? <><nav className={styles.menuLinks} aria-label={pt?"Navegação":"Navigation"}>{navigation.map(item=><a key={item.id} href={`#${item.id}`} onClick={event=>navigate(event,item.id)}>{item.label}</a>)}</nav><button type="button" className={styles.primary} onClick={()=>setOverlay("recruiter")}>Recruiter 60s <span aria-hidden="true">→</span></button><div className={styles.menuPreferences}><LanguageControl language={language}/><ThemeControl language={language} theme={theme} label/></div><div className={styles.menuCV}><a href={links.cvPT} download>{t.cv_pt} ↓</a><a href={links.cvEN} download>{t.cv_en} ↓</a></div></> : <><div className={styles.recruiterPreferences}><LanguageControl language={language}/><ThemeControl language={language} theme={theme}/></div><Recruiter language={language} onClose={()=>setOverlay(null)}/></>}
    </Modal>}
  </div>;
}

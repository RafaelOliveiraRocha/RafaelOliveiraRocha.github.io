#!/usr/bin/env python3
"""Generate the bilingual, ATS-readable resumes embedded in the portfolio."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")

NAVY = colors.HexColor("#152B3A")
TEAL = colors.HexColor("#0B7680")
TEXT = colors.HexColor("#263740")
MUTED = colors.HexColor("#5F7078")
LINE = colors.HexColor("#CCD9DD")


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("ResumeSans", str(FONT_DIR / "DejaVuSans.ttf")))
    pdfmetrics.registerFont(TTFont("ResumeSansBold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="ResumeSansBold",
            fontSize=22,
            leading=24,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="ResumeSansBold",
            fontSize=10.2,
            leading=12.5,
            textColor=TEAL,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="ResumeSans",
            fontSize=7.7,
            leading=10,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="ResumeSansBold",
            fontSize=9.2,
            leading=11,
            textColor=TEAL,
            spaceBefore=7,
            spaceAfter=4,
            borderWidth=0,
            borderPadding=0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="ResumeSans",
            fontSize=8.2,
            leading=11.1,
            textColor=TEXT,
            spaceAfter=3,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="ResumeSansBold",
            fontSize=8.8,
            leading=11,
            textColor=NAVY,
            spaceBefore=4,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="ResumeSans",
            fontSize=7.9,
            leading=10.35,
            textColor=TEXT,
            leftIndent=10,
            firstLineIndent=-7,
            bulletIndent=0,
            spaceAfter=2.3,
        ),
        "compact": ParagraphStyle(
            "Compact",
            parent=base["Normal"],
            fontName="ResumeSans",
            fontSize=7.65,
            leading=10.1,
            textColor=TEXT,
            spaceAfter=2.3,
        ),
    }


def header(st, language: str):
    headline = (
        "Analista de Dados | Business Intelligence | Analytics"
        if language == "pt"
        else "Data Analyst | Business Intelligence | Analytics"
    )
    location = "Ubá, MG" if language == "pt" else "Ubá, MG, Brazil"
    return [
        Paragraph("RAFAEL ROCHA", st["name"]),
        Paragraph(headline, st["headline"]),
        Paragraph(
            f"{location} | +55 32 99814-7576 | rafaelolirocha@gmail.com<br/>"
            "linkedin.com/in/rafael-rocha-89271021b | rafaeloliveirarocha.github.io",
            st["contact"],
        ),
    ]


def section(title: str, st):
    return [
        Paragraph(title, st["section"]),
        Spacer(1, 0.5 * mm),
    ]


def role(title: str, company: str, period: str, st):
    return Paragraph(f"{title} | {company} | {period}", st["role"])


def bullets(items, st):
    return [Paragraph(f"• {item}", st["bullet"]) for item in items]


def pt_story(st):
    story = header(st, "pt")
    story += section("RESUMO PROFISSIONAL", st)
    story.append(
        Paragraph(
            "Analista de Dados com 4 anos de aplicação direta de dados, BI e automação a problemas operacionais e trajetória profissional desde 2011. Atua de ponta a ponta com SQL, Python, PostgreSQL, Apache Superset, Power BI, modelagem, ETL/ELT, dashboards, KPIs e comunicação executiva. Entregas incluem aproximadamente R$ 43 mil/mês em economia recorrente, análise de mais de 40 GB de dados conversacionais, suporte analítico a mais de 40 contas e produtos com IA e controle de acesso por identidade.",
            st["body"],
        )
    )
    story += section("COMPETÊNCIAS TÉCNICAS", st)
    for text in [
        "<b>Dados e BI:</b> SQL, PostgreSQL, BigQuery, Python, pandas, Apache Superset, Hi Boards, Power BI, Looker Studio, Excel e Google Sheets",
        "<b>Engenharia e automação:</b> Modelagem de dados, ETL/ELT, pipelines, integração de APIs, n8n, Apps Script, Git/GitHub, qualidade e validação de dados",
        "<b>Analytics:</b> Dashboards executivos e operacionais, definição de KPIs, auditorias, bots, jornada, retenção, recontato, abandono, CSAT e data storytelling",
        "<b>IA aplicada:</b> LLMs, NL-to-SQL, FastAPI, prompt engineering, observabilidade, rastreabilidade, guardrails e governança analítica",
    ]:
        story.append(Paragraph(text, st["compact"]))

    story += section("EXPERIÊNCIA PROFISSIONAL", st)
    story.append(role("Analista de Dados", "Hi Platform", "ago/2025 - atual", st))
    story += bullets(
        [
            "Desenvolvi de ponta a ponta uma Torre de Controle para operação de atendimento em Apache Superset, PostgreSQL e n8n, com painel operacional exibido em TV e dashboard único para supervisores e operadores; implementei ingestão automatizada, reconciliação entre fontes, atualização recorrente e RLS dinâmica para restringir cada operador aos próprios dados e preservar a visão consolidada da supervisão.",
            "Conduzi de ponta a ponta a migração da plataforma DashBI para Apache Superset (Hi Boards), reconstruindo dashboards e indicadores e gerando aproximadamente R$ 43 mil/mês em economia recorrente, sem perda de continuidade analítica.",
            "Desenvolvo dashboards, KPIs e análises para bots, canais digitais e mais de 40 contas, integrando coleta, processamento, validação, auditorias e comunicação de insights com especialistas, stakeholders e liderança.",
            "Analisei mais de 40 GB de dados conversacionais, com milhões de registros, identificando padrões de comportamento, gargalos de atendimento e oportunidades acionáveis para o negócio.",
            "Construo pipelines automatizados com SQL e Python em PostgreSQL, aplicando ETL/ELT, reconciliação entre fontes e validações de qualidade para elevar confiabilidade, rastreabilidade e velocidade de entrega.",
            "Desenvolvi de ponta a ponta uma PoC de camada conversacional aplicada ao BI, integrando Python, FastAPI, PostgreSQL, SQL e LLM via API em um fluxo NL-to-SQL com respostas fundamentadas, guardrails, observabilidade e governança.",
        ],
        st,
    )
    story.append(role("Estagiário em Business Intelligence", "Hi Platform", "fev/2024 - jul/2025", st))
    story += bullets(
        [
            "Desenvolvi dashboards de performance para chatbots e operações digitais, analisando fluxos conversacionais, resolução, pontos de fricção e experiência do usuário.",
            "Realizei análises quantitativas e qualitativas com SQL, Python e ferramentas de visualização e estruturei métricas a partir de requisitos de negócio e feedback de stakeholders.",
        ],
        st,
    )

    story.append(PageBreak())
    story += header(st, "pt")
    story += section("EXPERIÊNCIA PROFISSIONAL — CONTINUAÇÃO", st)
    story.append(role("Assistente de Operações", "AppJusto", "jul/2022 - fev/2024", st))
    story += bullets(
        [
            "Atuei em uma plataforma digital de delivery conectando operação, dados e melhoria contínua; acompanhei qualidade de serviço e transformei problemas da rotina em oportunidades de evolução.",
            "Construí dashboards no Looker Studio para métricas de entregadores, restaurantes e consumidores e desenvolvi automações em Python para prospecção e prevenção de churn, reduzindo tarefas manuais.",
        ],
        st,
    )
    story += section("EXPERIÊNCIA ANTERIOR — INDÚSTRIA E OPERAÇÕES", st)
    earlier = [
        ("Responsável de Setor — Almoxarifado", "Alcance Jeans", "set/2020 - fev/2022", "Gerenciei estoque, consumo de insumos, fornecedores, controles em Excel, relatórios mensais e prestação de contas de produtos controlados."),
        ("Responsável de Setor — Almoxarifado", "Alphabeto", "nov/2014 - mai/2020", "Atuei com estoque, recebimento e controle de insumos químicos, registros operacionais, reportes regulatórios e apoio direto à produção."),
        ("Auxiliar de Almoxarifado", "Confecções Sinder", "ago/2012 - mai/2014", "Evoluí para referência técnica no processo de dublagem, organizei ordens de serviço e liderei turnos noturnos em picos de demanda."),
        ("Auxiliar de Almoxarifado", "Confecções Life", "jan/2011 - ago/2012", "Iniciei a trajetória em logística interna, separação e fracionamento de insumos, organização de materiais e abastecimento da produção."),
    ]
    for title, company, period, text in earlier:
        story.append(role(title, company, period, st))
        story += bullets([text], st)

    story += section("PROJETOS E INICIATIVAS", st)
    story.append(role("Cofundador — Dados e Inteligência Operacional", "ProcessSurge", "2026 - atual", st))
    story += bullets(
        [
            "Construo em parceria uma iniciativa empreendedora de dados, BI e analytics para e-commerce, conectando automação, indicadores e leitura executiva para apoiar controle, eficiência e tomada de decisão.",
            "Projetei arquitetura com n8n, PostgreSQL e Apache Superset, implementei pipelines integrados a APIs e desenvolvi indicadores de funil, abandono, atribuição de receita e recuperação de vendas.",
        ],
        st,
    )
    story += section("FORMAÇÃO ACADÊMICA", st)
    story.append(Paragraph("<b>Bacharelado em Engenharia de Software</b> | UNOPAR | concluído em 2025", st["body"]))
    story += section("CERTIFICAÇÕES E DESENVOLVIMENTO PROFISSIONAL", st)
    story.append(
        Paragraph(
            "Automação com n8n — Santander (2025) | Data Universe — XP Educação (2024) | Intensivão Power BI — Hashtag Treinamentos (2024)<br/>Estrutura de Dados com Python — UNOPAR (2023) | Jornada Python — Hashtag Treinamentos (2023) | React Completo e JavaScript ES6+ — Origamid (2022)",
            st["compact"],
        )
    )
    return story


def en_story(st):
    story = header(st, "en")
    story += section("PROFESSIONAL SUMMARY", st)
    story.append(
        Paragraph(
            "Data Analyst with 4 years of direct experience applying data, BI and automation to operational problems, supported by a professional career beginning in 2011. End-to-end work with SQL, Python, PostgreSQL, Apache Superset, Power BI, data modeling, ETL/ELT, dashboards, KPIs and executive communication. Results include approximately BRL 43K/month in recurring savings, analysis of more than 40 GB of conversational data, analytics support for 40+ accounts and products using applied AI and identity-based access control.",
            st["body"],
        )
    )
    story += section("TECHNICAL SKILLS", st)
    for text in [
        "<b>Data and BI:</b> SQL, PostgreSQL, BigQuery, Python, pandas, Apache Superset, Hi Boards, Power BI, Looker Studio, Excel and Google Sheets",
        "<b>Data engineering and automation:</b> Data modeling, ETL/ELT, pipelines, API integration, n8n, Apps Script, Git/GitHub, data quality and validation",
        "<b>Analytics:</b> Executive and operational dashboards, KPI definition, audits, bots, customer journey, retention, repeat contact, abandonment, CSAT and data storytelling",
        "<b>Applied AI:</b> LLMs, NL-to-SQL, FastAPI, prompt engineering, observability, traceability, guardrails and analytics governance",
    ]:
        story.append(Paragraph(text, st["compact"]))

    story += section("PROFESSIONAL EXPERIENCE", st)
    story.append(role("Data Analyst", "Hi Platform", "Aug 2025 - Present", st))
    story += bullets(
        [
            "Built an end-to-end Control Tower for a service operation using Apache Superset, PostgreSQL, and n8n, combining an operational TV dashboard with a single performance dashboard for supervisors and operators; implemented automated ingestion, source reconciliation, recurring refreshes, and dynamic row-level security so each operator could access only their own data while supervisors retained the consolidated view.",
            "Led and executed the end-to-end migration from DashBI to Apache Superset (Hi Boards), rebuilding dashboards and indicators and delivering approximately BRL 43K/month in recurring savings with no loss of analytics continuity.",
            "Develop dashboards, KPIs and analyses for bots, digital channels and 40+ accounts, combining data collection, processing, validation, audits and insight communication with specialists, stakeholders and leadership.",
            "Analyzed more than 40 GB of conversational data across millions of records, identifying behavior patterns, service bottlenecks and actionable business opportunities.",
            "Build automated SQL and Python pipelines in PostgreSQL, applying ETL/ELT, source reconciliation and quality checks to improve reliability, traceability and delivery speed.",
            "Built an end-to-end conversational BI proof of concept using Python, FastAPI, PostgreSQL, SQL and an LLM API in an NL-to-SQL flow with grounded answers, guardrails, observability and governance.",
        ],
        st,
    )
    story.append(role("Business Intelligence Intern", "Hi Platform", "Feb 2024 - Jul 2025", st))
    story += bullets(
        [
            "Developed performance dashboards for chatbots and digital operations, analyzing conversational flows, resolution, friction points and user experience.",
            "Conducted quantitative and qualitative analysis with SQL, Python and visualization tools and structured metrics from business requirements and stakeholder feedback.",
        ],
        st,
    )

    story.append(PageBreak())
    story += header(st, "en")
    story += section("PROFESSIONAL EXPERIENCE — CONTINUED", st)
    story.append(role("Operations Assistant", "AppJusto", "Jul 2022 - Feb 2024", st))
    story += bullets(
        [
            "Worked in a digital delivery platform connecting operations, data and continuous improvement; monitored service quality and turned day-to-day problems into improvement opportunities.",
            "Built Looker Studio dashboards for courier, restaurant and consumer metrics and developed Python automation for prospecting and churn prevention, reducing manual work.",
        ],
        st,
    )
    story += section("EARLIER EXPERIENCE — INDUSTRY AND OPERATIONS", st)
    earlier = [
        ("Warehouse Supervisor", "Alcance Jeans", "Sep 2020 - Feb 2022", "Managed inventory, industrial supply consumption, suppliers, Excel controls, monthly reports and controlled-product accountability."),
        ("Warehouse Supervisor", "Alphabeto", "Nov 2014 - May 2020", "Managed inventory, receiving and chemical supplies, operational records, regulatory reporting and direct production support."),
        ("Warehouse Assistant", "Confecções Sinder", "Aug 2012 - May 2014", "Became a technical reference in fabric bonding, organized work orders and led night shifts during peak demand."),
        ("Warehouse Assistant", "Confecções Life", "Jan 2011 - Aug 2012", "Started a career in internal logistics, material separation and fractioning, inventory organization and production supply."),
    ]
    for title, company, period, text in earlier:
        story.append(role(title, company, period, st))
        story += bullets([text], st)

    story += section("PROJECTS AND INITIATIVES", st)
    story.append(role("Co-founder — Data and Operational Intelligence", "ProcessSurge", "2026 - Present", st))
    story += bullets(
        [
            "I co-build an entrepreneurial data, BI and analytics initiative for e-commerce, connecting automation, indicators and executive reporting to support control, efficiency and decision-making.",
            "Designed an architecture using n8n, PostgreSQL and Apache Superset, implemented API-integrated pipelines and built funnel, cart abandonment, revenue attribution and sales recovery indicators.",
        ],
        st,
    )
    story += section("EDUCATION", st)
    story.append(Paragraph("<b>Bachelor of Science in Software Engineering</b> | UNOPAR | Completed in 2025", st["body"]))
    story += section("CERTIFICATIONS AND PROFESSIONAL DEVELOPMENT", st)
    story.append(
        Paragraph(
            "n8n Automation — Santander (2025) | Data Universe — XP Educação (2024) | Power BI Intensive — Hashtag Treinamentos (2024)<br/>Data Structures with Python — UNOPAR (2023) | Python Journey — Hashtag Treinamentos (2023) | Complete React and JavaScript ES6+ — Origamid (2022)",
            st["compact"],
        )
    )
    return story


def footer(canvas, doc, language: str):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.45)
    canvas.line(18 * mm, 13 * mm, width - 18 * mm, 13 * mm)
    canvas.setFont("ResumeSans", 6.8)
    canvas.setFillColor(MUTED)
    label = "Página" if language == "pt" else "Page"
    canvas.drawRightString(width - 18 * mm, 8.5 * mm, f"{label} {doc.page}")
    canvas.restoreState()


def build(filename: str, language: str, story):
    path = PUBLIC / filename
    doc = BaseDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=14 * mm,
        bottomMargin=17 * mm,
        title="Rafael Rocha — Curriculum" if language == "pt" else "Rafael Rocha — Resume",
        author="Rafael Rocha",
        subject="Data, Business Intelligence and Analytics",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=lambda c, d: footer(c, d, language)))
    doc.build(story)


def main():
    register_fonts()
    st = styles()
    PUBLIC.mkdir(parents=True, exist_ok=True)
    build("Curriculo_Rafael_Rocha_PT.pdf", "pt", pt_story(st))
    build("Rafael_Rocha_Resume_EN.pdf", "en", en_story(st))


if __name__ == "__main__":
    main()

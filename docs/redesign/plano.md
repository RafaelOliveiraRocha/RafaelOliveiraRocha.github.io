# Portfólio — redesign na página principal

Atualizado em 06/10/2026. A página completa foi aprovada e promovida para **`/`**, na branch `redesign/camada-01`. `/previa/` continua funcionando com o mesmo componente de `app/portfolio.tsx`. A página anterior foi preservada fora do projeto. Sem commit, push ou publicação.

## Organização implementada

Abertura/resultados → migração de BI e plataforma de IA → quatro outras entregas → ProcessSurge → Como trabalho → ferramentas → experiência → formação → Sobre → contato/currículos. Layouts variam entre texto com diagrama lateral, fluxo amplo, duas colunas e linha do tempo. Alturas acompanham o conteúdo.

A abertura conserva arte, paleta carvão/marfim/laranja e Noto Serif Display/Noto Sans da camada 01. No desktop, nome e cargo ficam no cabeçalho. No mobile, apenas “Analista de Dados” antecede o título, dividido em “Dados,” / “Automação e” / “IA Aplicada.” em 390 px. Espaços até métricas/projetos foram reduzidos moderadamente.

Os quatro diagramas combinam SVG e rótulos HTML: dashboards convergem para Apache Superset; sistemas/integrações/IA/respostas/validação com conferência nas fontes; ERP/APIs/n8n/camadas RAW–Silver–Gold/análise; perguntas/LLMs/SQL/dados com rastreabilidade. BI, IA e protótipo reorganizam seus fluxos no mobile; o financeiro mantém uma faixa compacta com rótulos legíveis.

A foto original usa WebP de 800 px no desktop e 480 px no mobile, carregamento adiado e dimensões reservadas. Sobre mantém os três parágrafos integrais, foto de 246 px no desktop e 136 px no mobile (112 px nas telas menores), com texto em largura confortável.

## Comportamentos

- Abaixo de 768 px, os dois destaques ficam abertos; financeiro aparece inicialmente; “Ver mais 3 projetos” e “Recolher projetos” controlam as demais entregas. Ao expandir, o foco vai ao primeiro projeto revelado; ao recolher, volta ao controle visível na seção.
- Ferramentas têm quatro categorias independentes. Experiência mantém cargo/empresa/período e expande as descrições. Ao recolher, o controle conserva foco e posição. Em 768 px ou mais, todo o conteúdo é apresentado.
- Cabeçalho fixo; navegação completa acima de 1100 px e menu hamburger nas larguras menores. Âncoras compensam a altura do cabeçalho. Um único botão de topo aparece após 480 px de rolagem, em espaço reservado no cabeçalho, evitando cobrir textos ou ações.
- Menu e Recruiter usam diálogos nativos com contenção de foco, Escape e retorno ao acionador. Recruiter mantém cinco etapas: Valor, Impacto, Capacidades, Trajetória e Contato; botões, etapas diretas e setas de teclado permitem navegação.
- PT/EN abrange conteúdo, diagramas, rótulos, menu e resumo. `rr-language` mantém o idioma. O currículo da abertura acompanha a língua; ambos os PDFs permanecem explícitos no contato e menu.
- Escuro é o padrão. Um script anterior à pintura restaura o tema; claro é a alternativa. `rr-theme` é compartilhado pelas duas rotas, com compatibilidade para escolhas anteriores em `rr-preview-theme`. A inicialização ocorre no layout raiz e também atualiza a cor do navegador. Há tratamento de armazenamento indisponível.
- O fio continua fino, na margem, com um único ponto destacado. `ResizeObserver` mede a altura real após expansões, troca de idioma e reflow. Rolagem passiva e `requestAnimationFrame`; movimento reduzido mantém o marcador estático.

## Conteúdo e recursos

Português extraído dos SVGs aprovados em `content.ts`, com tradução fiel para EN. Financeiro permanece entrega anterior; linguagem natural para SQL, protótipo; plataforma corporativa de IA, sustentação/evolução técnica. Sem nomes internos, logística genérica, período 2011–2022 ou novas métricas. Sem pendência factual bloqueadora.

A hierarquia permanece: conteúdo consolidado → decisões de comportamento/proporção → novas referências da continuação/mobile → referência anterior da abertura/cases. Legendas externas das pranchas não integram a interface. Caminhos reais, hashes e recortes estão em [recursos-camada-01.json](recursos-camada-01.json); originais em `/home/rocha/Downloads/`, cópias em `referencias/`. Nenhuma referência foi buscada novamente ou substituída nesta rodada.

| Recurso | Destino preservado |
|---|---|
| E-mail | `mailto:rafaelolirocha@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/rafael-rocha-89271021b/` |
| WhatsApp | `https://wa.me/5532998147576` |
| GitHub | `https://github.com/RafaelOliveiraRocha` |
| ProcessSurge | `https://www.processsurge.com/pt` |
| Currículos PT / EN | `/Curriculo_Rafael_Rocha_PT.pdf` / `/Rafael_Rocha_Resume_EN.pdf` |

A estrutura reaproveita os recursos e as decisões da primeira camada. Os estados de idioma/menu e as cinco etapas do Recruiter existentes orientaram os componentes novos, com correção de foco e persistência. `app/portfolio.tsx` compartilha o conteúdo e usa os componentes e estilos existentes em `app/previa/`. O layout global foi reduzido à base necessária, preservando a aparência aprovada. Os recursos existentes em `public/redesign/` não foram alterados.

Skills consultadas: [img-to-html](../../.agents/skills/img-to-html/SKILL.md) e [to-wireframe](../../.agents/skills/to-wireframe/SKILL.md), revisão `99d0b39ce50b109f8b8484047f92e7943ac6c23d`. O usuário autorizou expressamente a execução sequencial deste lote sem aprovações intermediárias, no projeto React existente. Não foram usados agentes, APIs pagas ou novas dependências.

## Revisão e próximo passo

Página principal: `http://127.0.0.1:4173/`. Na raiz, reiniciar com `npm run dev -- --host 127.0.0.1 --port 4173 --strictPort`. Abrir com `xdg-open http://127.0.0.1:4173/`. Exportação local disponível em `http://127.0.0.1:4174/`, servida com `python3 -m http.server 4174 --bind 127.0.0.1 --directory out`.

[Verificação desta rodada](verificacao-pagina-completa.md) e [capturas](capturas/pagina-completa/). As [capturas da camada 01](verificacao-camada-01.md) foram preservadas. O visualizador mantém os wireframes como referência estrutural e aponta para a prévia montada. A [documentação anterior da camada 01](versoes/2026-10-06-camada-01/index.html) permanece arquivada.

O favicon usa `#ff5033`, com SVG, PNG de 32 px e ICO de 16/32/48 px consistentes e URLs versionadas para o cache. Título, descrição, dados estruturados e sitemap foram alinhados ao conteúdo atual; a URL canônica e a hospedagem foram preservadas.

[Verificação da promoção e restauração](verificacao-promocao.md). Cópia anterior: `/home/rocha/Backups/portfolio-pre-redesign-2026-10-06-104354/`, com 13 arquivos e manifesto SHA-256.

Próximo passo: revisão da página principal funcionando localmente. Não há bloqueio técnico identificado; commit, push e publicação permanecem fora desta rodada. A rota `/previa/` foi mantida.

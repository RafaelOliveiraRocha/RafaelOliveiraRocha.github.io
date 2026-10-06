# Verificação da camada visual 01 — 06/10/2026

Prévia: `http://127.0.0.1:4173/previa/`. Branch: `redesign/camada-01`. Sem publicação.

## Resultados

- TypeScript: `./node_modules/.bin/tsc --noEmit --incremental false` — aprovado.
- ESLint, com a configuração existente: `./node_modules/.bin/eslint app/previa` — aprovado, sem avisos.
- Chrome: prévia aberta e inspecionada em **1440, 834 e 390 px**. Sem excesso de largura ou cortes de conteúdo. Fontes e arte carregadas; nenhum erro de execução JavaScript nas verificações finais.
- Fio: percurso amostrado em 21 posições, sempre fora da área de conteúdo nas três larguras; um único ponto destacado. Acompanhamento da posição de leitura sem interceptar a rolagem.
- Altura dinâmica: acréscimo temporário de 900 px na seção de projetos mudou a altura medida de **3056,4375 para 3956,4375 px**; ao remover o conteúdo, voltou a **3056,4375 px**. A alteração foi feita apenas no DOM do navegador, sem mudar os arquivos.
- Movimento reduzido: marcador permaneceu na mesma posição durante a rolagem; `scroll-behavior: auto`. Nenhuma animação contínua de partículas foi introduzida.
- Contraste dos tokens sobre carvão: marfim **15,84:1**, apoio **10,86:1**, laranja **5,73:1**; texto escuro do botão sobre laranja **5,69:1**. Arte afastada dos parágrafos e controles na inspeção visual. Isso não substitui a revisão de acessibilidade da interface completa.
- SVGs: desktop **1440 × 7135**, mobile inicial **390 × 7484** e expandido **390 × 9766**. Fontes carregadas, texto dentro dos limites e nenhuma sobreposição entre blocos detectada. Conteúdo consolidado conferido; os textos recolhidos estão completos no estado expandido.
- Visualizador offline aberto em desktop/mobile. Menu aberto e Recruiter desktop/mobile inspecionados; nenhum texto fora dos quadros. Estrutura de cinco etapas do Recruiter mantida.
- As quatro versões anteriores dos documentos, licença e três referências foram preservadas em `versoes/2026-10-05/`, com hashes iguais aos originais desta rodada.
- Os **54 arquivos versionados** e os **274 arquivos preexistentes monitorados pela etapa anterior**, incluindo `.next/` e `out/`, mantiveram seus hashes. Não foi executado build/exportação. Apenas caches/logs locais normais do servidor podem ser atualizados pela prévia.

O recarregamento do servidor de desenvolvimento apresentou uma resposta 500 transitória durante alterações simultâneas de módulos. Após reiniciar, a rota respondeu 200 e as verificações finais passaram. A medição de expansão foi feita separadamente das capturas completas, pois o Chrome altera temporariamente o viewport durante essas capturas.

## Capturas

| Largura | Abertura | Página de contexto inteira |
|---|---|---|
| 1440 px | [Desktop](capturas/camada-01-desktop.png) | [Completa](capturas/camada-01-desktop-completa.png) |
| 390 px | [Mobile](capturas/camada-01-mobile.png) | [Completa](capturas/camada-01-mobile-completa.png) |
| 834 px | [Intermediária](capturas/camada-01-intermediario.png) | [Completa](capturas/camada-01-intermediario-completa.png) |

As capturas mostram a primeira camada com blocos de contexto. Os componentes finais das seções permanecem nos wireframes.

## Fidelidade e limites desta entrega

A abertura mantém a passagem de partículas dispersas para curvas organizadas, tons marfim/cinza/laranja e linhas verticais à direita. O recurso é um recorte mascarado da referência complementar de maior resolução, sem texto ou controles incorporados. A imagem principal orienta composição e proporções; as duas artes de referência têm distribuições diferentes. O mobile recebe outro recorte, integrado à abertura compacta.

Noto Serif Display e Noto Sans são aproximações tipográficas. Cabeçalho completo, idiomas, Recruiter, expansões, tema persistente e demais componentes não foram migrados nesta camada; continuam previstos e preservados na página principal/documentação. Diagramas de BI, IA, financeiro e protótipo ficam para as próximas camadas. A foto original foi otimizada e ainda será aplicada ao Sobre. Nenhum recurso indispensável desta rodada ficou faltando.

## Arquivos desta rodada

Modificados (versão anterior arquivada):

- `docs/redesign/wireframe-desktop.svg`
- `docs/redesign/wireframe-mobile.svg`
- `docs/redesign/index.html`
- `docs/redesign/plano.md`

Adicionados:

- `app/previa/page.tsx`, `layout.tsx`, `continuity.tsx`, `preview.module.css`.
- `public/redesign/hero-signals.webp`, `hero-signals-mobile.webp`, `process-signals.webp`.
- `public/redesign/foto-rafael-480.webp`, `foto-rafael-800.webp`.
- `public/redesign/fonts/noto-serif.woff`, `noto-sans.woff`, `LICENSE.txt`.
- `docs/redesign/wireframe-mobile-expandido.svg`.
- `docs/redesign/recursos-camada-01.json`, `verificacao-camada-01.md`.
- Cinco novas referências em `docs/redesign/referencias/`, identificadas no plano e manifesto.
- Seis capturas em `docs/redesign/capturas/`.
- Oito arquivos da versão anterior em `docs/redesign/versoes/2026-10-05/`.

Skills locais, página principal, configurações, dependências, PDFs, referências anteriores e exportações permaneceram intactos. A próxima camada depende da aprovação do usuário.

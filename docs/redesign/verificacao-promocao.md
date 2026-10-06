# Promoção local do redesign — 06/10/2026

Branch: `redesign/camada-01`. Página principal: **http://127.0.0.1:4173/**. Exportação estática: **http://127.0.0.1:4174/**. Sem commit, push, deploy ou alteração na hospedagem remota.

## Alterações

- `/` e `/previa/` reexportam o mesmo componente de `app/portfolio.tsx`. Seu conteúdo e comportamento foram preservados; somente os imports e o nome do componente mudaram na extração.
- O layout raiz inicializa as preferências antes da pintura. `rr-theme` é compartilhado, com compatibilidade para `rr-preview-theme`; PT/EN continua em `rr-language`. Escuro é o padrão. Estilos e fontes antigos foram retirados; a base aprovada, inclusive a textura discreta, permanece.
- Título principal: “Rafael Rocha | Dados, Automação e IA Aplicada”. Descrição e dados estruturados refletem o conteúdo aprovado e a foto atual. A URL canônica continua `https://rafaeloliveirarocha.github.io/`. `/` permite indexação; `/previa/` mantém `noindex`. O identificador antigo `codex-preview` foi removido. Sitemap atualizado para a data desta alteração.
- Favicon: fundo **`#ff5033`**, extraído de `--vermillion` em `app/previa/preview.module.css`. Fonte `public/favicon.svg`; derivados `public/favicon-32x32.png` e `public/favicon.ico` (16, 32 e 48 px). Monograma, atributos de texto, viewBox e retângulo arredondado do SVG preservados. Variantes renderizadas da mesma fonte. Não existem ícones de dispositivos adicionais no projeto.
- As três referências usam `?v=ff5033`. Um perfil isolado do Chrome carregou primeiro o ícone antigo; após a troca, o navegador buscou a URL nova. A associação das abas e os bitmaps de 16/32 px no cache do Chrome foram conferidos: fundo RGB `(255, 80, 51)`. Legibilidade inspecionada em tamanho pequeno.

## Verificação

| Verificação | Resultado |
|---|---|
| `./node_modules/.bin/tsc --noEmit --incremental false` | Passou |
| `npm run lint` | Passou sem avisos; o aviso da antiga página saiu junto com sua substituição |
| `npm run build:github` | Passou; exportou `/`, `/previa/` e a página 404 |
| Chrome, 1440 e 390 px, desenvolvimento e exportação | Fontes, foto, artes e quatro diagramas carregados; sem excesso de largura |
| Comparação com a prévia aprovada | Mesmas dimensões de todas as seções; zero pixels diferentes nas duas capturas da abertura |
| Console e recursos no navegador | Sem erros JavaScript, hidratação ou HTTP nas verificações finais |

O único aviso do build é o preexistente sobre múltiplos lockfiles e raiz inferida em `/home/rocha`. Configurações, dependências e workflow não foram alterados.

Menu com Escape e retorno do foco, expansão/recolhimento dos projetos, competências e experiência, Recruiter, navegação por âncoras e retorno ao topo passaram na página principal. A âncora de contato ficou abaixo do cabeçalho, com foco no título. O fio recalculou a altura após expansão; no modo reduzido, o ponto ficou estático. PT/EN e temas persistiram após recarga e entre as rotas. O primeiro quadro observado já apresentou o fundo do tema salvo, inclusive na exportação; sem escolha salva, apresentou escuro.

GitHub Pages usa a raiz `/`: não há `basePath` ou `assetPrefix`, e `trailingSlash` permanece habilitado. A exportação foi servida diretamente de `out/`, com 21 caminhos de recursos verificados por HTTP, todos válidos. Favicons, sitemap e PDFs servidos são idênticos aos respectivos arquivos em `public/`; ambos os currículos têm assinatura PDF válida. Contatos e ProcessSurge mantêm os destinos anteriores. Nenhuma mensagem foi enviada nem foi alterado serviço externo.

Capturas abertas e inspecionadas: [abertura desktop](capturas/pagina-principal/abertura-desktop.png) e [abertura mobile](capturas/pagina-principal/abertura-mobile.png). As capturas anteriores foram preservadas. Conferência feita em Chrome local; não foi repetida uma matriz de aparelhos físicos ou outros navegadores.

## Cópia anterior e restauração

Local: `/home/rocha/Backups/portfolio-pre-redesign-2026-10-06-104354/`.

Contém **13 arquivos reais anteriores à substituição**, incluindo os arquivos sem commit da prévia, layout, estilos, favicons, sitemap, retrato anterior e currículos. `manifesto-sha256.json` permite conferir a integridade. A cópia fica fora do projeto, de `public/` e de `out/`; não é um clone do repositório.

Para restaurar, encerre o servidor e preserve eventuais alterações posteriores que deseje manter. Depois:

```bash
cp -a "/home/rocha/Backups/portfolio-pre-redesign-2026-10-06-104354/files/." "/home/rocha/Área de Trabalho/portfolio_publicacao_v18/"
rm -f "/home/rocha/Área de Trabalho/portfolio_publicacao_v18/app/portfolio.tsx" "/home/rocha/Área de Trabalho/portfolio_publicacao_v18/app/preference-init.ts"
```

Isso restaura a página anterior e a prévia aprovada. Reinicie o servidor; para refazer o artefato da versão restaurada, execute `npm run build:github`. Instruções também em `RESTAURAR.md`, junto da cópia.

## Arquivos desta rodada

Alterados: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `app/previa/page.tsx`, `app/previa/layout.tsx`, `app/previa/preferences.ts`, os três favicons e `public/sitemap.xml`. Adicionados: `app/portfolio.tsx` e `app/preference-init.ts`.

Documentação: `plano.md` e `index.html` atualizados; este relatório, duas capturas em `capturas/pagina-principal/` e a cópia do plano anterior em `versoes/2026-10-06-pagina-completa/plano.md` adicionados. `.next/` e `out/` regenerados. Recursos de `public/redesign/`, conteúdo consolidado, componentes visuais, currículos, skills e verificações anteriores preservados.

## Abrir e reiniciar

Abrir: `xdg-open http://127.0.0.1:4173/`.

Na raiz do projeto, após encerrar o servidor atual:

```bash
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

Para servir novamente a exportação: `python3 -m http.server 4174 --bind 127.0.0.1 --directory out`.

Não foi identificado bloqueio técnico para publicar. A versão final permanece local, aguardando revisão e autorização posterior para commit, push e publicação.

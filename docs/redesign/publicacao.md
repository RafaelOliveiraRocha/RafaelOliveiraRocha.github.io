# Publicação do redesign — 06/10/2026

Publicação autorizada após a aprovação da página principal e da validação da exportação local.

- Repositório: `https://github.com/RafaelOliveiraRocha/RafaelOliveiraRocha.github.io`.
- Endereço preservado: `https://rafaeloliveirarocha.github.io/`.
- Desenvolvimento: `redesign/camada-01`; publicação: `main`.
- Fluxo existente: `.github/workflows/deploy-pages.yml`, acionado por push em `main`. Instala com `npm ci`, executa `npm run build:github` e publica o artefato `out/` pelo GitHub Pages. Sem alteração de domínio, configuração ou workflow.
- A leitura remota foi atualizada antes da integração. `main` permanecia em `f34d0154beca079548b0d573766d45b038e2069b`, sem mudanças adicionais; integração por fast-forward, sem force push.

## Referência anterior para reversão

Commit: **`f34d0154beca079548b0d573766d45b038e2069b`**, “Atualiza portfolio e adiciona Torre de Controle”.

Última publicação anterior: [execução 31905881109](https://github.com/RafaelOliveiraRocha/RafaelOliveiraRocha.github.io/actions/runs/31905881109), concluída com sucesso em 15/08/2026, pela branch `main`.

Também foi preservada a cópia local documentada em [verificacao-promocao.md](verificacao-promocao.md), fora do projeto. Em eventual reversão pública, preferir um novo commit que reverta a entrega sobre a `main` atual e acione o mesmo workflow, preservando mudanças posteriores e o histórico; não resetar nem forçar o remoto.

## Conteúdo registrado

Fontes compartilhados de `/` e `/previa/`, recursos WebP e fontes locais, favicons, metadados, sitemap, skills preparadas e documentos de design/verificação. Currículos e destinos de contato preservados.

`node_modules/`, caches, `.next/`, `out/`, temporários e backups não entram no commit. As cópias anteriores de documentos em `docs/redesign/versoes/` são locais e estão ignoradas; links históricos para essa pasta nos documentos devem ser usados no workspace original. Referências visuais e capturas são documentação, não são exportadas pelo site.

As verificações locais de TypeScript, lint, exportação e navegação estão em [verificacao-promocao.md](verificacao-promocao.md). A entrega só será considerada concluída após o workflow e a conferência da versão nova no endereço público. O resultado dessa conferência será registrado localmente em `work/publicacao-2026-10-06/`, fora do commit, e informado na entrega final.

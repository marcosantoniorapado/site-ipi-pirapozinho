# Orientação para Sofia da Casa — Atualização do site IPI Pirapozinho

Marcos pediu ajustes pontuais mantendo o visual atual do site.

## O que atualizar

1. Manter o site visualmente igual ao publicado.
2. Tornar a barra superior fixa no topo durante a rolagem.
3. Adicionar o link da Bíblia Online da IPIB:
   https://boomerang.dzign-e.net/ipib/utils/link/bible.php
4. Criar a seção "Boletim dominical" com botão para download.
5. Criar a pasta `downloads/`.
6. Colocar o boletim atual em:
   `downloads/Boletim Dominical.pdf`
7. Remover do rodapé a frase:
   "Site estático organizado por Marcos com apoio da Sofia."
8. Centralizar o texto restante do rodapé.

## Commit sugerido

```bash
git add .
git commit -m "Atualiza barra fixa links e boletim dominical"
git push
```

## Observação

Para trocar o boletim toda semana, substituir apenas:

`downloads/Boletim Dominical.pdf`

e ajustar o link no HTML se o nome do arquivo mudar.

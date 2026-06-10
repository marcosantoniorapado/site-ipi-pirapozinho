# Orientação para Sofia da Casa — publicar site da IPI Pirapozinho

Marcos já autorizou a conta da Sofia no repositório:

```text
https://github.com/marcosantoniorapado/site-ipi-pirapozinho
```

## Objetivo

Organizar o projeto dentro da Casa, na pasta de projetos, subir documentação e publicar a primeira versão do site institucional simples da Igreja Presbiteriana Independente de Pirapozinho-SP.

## Pasta da Casa

Usar a pasta:

```bash
/home/sofia/.openclaw/workspace/projetos
```

Se a pasta não existir:

```bash
mkdir -p /home/sofia/.openclaw/workspace/projetos
```

## Clonar o repositório

```bash
cd /home/sofia/.openclaw/workspace/projetos
git clone https://github.com/marcosantoniorapado/site-ipi-pirapozinho.git
cd site-ipi-pirapozinho
```

Se o repositório já existir localmente:

```bash
cd /home/sofia/.openclaw/workspace/projetos/site-ipi-pirapozinho
git pull
```

## Configurar identidade Git neste repositório

```bash
git config user.name "Sofia Monteiro"
git config user.email "sofiamonteiroia@gmail.com"
```

## Copiar os arquivos

Copiar todo o conteúdo do pacote `site-ipi-pirapozinho-primeira-versao.zip` para dentro da pasta do repositório, mantendo a estrutura de pastas.

## Testar localmente

```bash
python3 -m http.server 8080
```

Abrir no navegador:

```text
http://localhost:8080
```

Conferir: topo com foto da fachada, botão de WhatsApp, programação semanal, links oficiais, localização, botão flutuante e responsividade no celular.

## Primeiro commit

```bash
git status
git add .
git commit -m "Adiciona documentação e primeira versão do site institucional"
git push
```

## GitHub Pages

Depois do push, Marcos pode ativar:

```text
Settings → Pages → Deploy from a branch → main → /root → Save
```

Endereço esperado:

```text
https://marcosantoniorapado.github.io/site-ipi-pirapozinho/
```

## Observações importantes

- Não usar telefone antigo do boletim.
- WhatsApp atual: (18) 99637-3353.
- Não colocar avisos semanais fixos no site.
- Dados de dízimos e ofertas aparecem no boletim, mas devem ser mantidos somente se a liderança autorizar publicamente.
- Esta é uma primeira versão. Depois Marcos e Sofia podem ajustar visual, textos, links e imagens.

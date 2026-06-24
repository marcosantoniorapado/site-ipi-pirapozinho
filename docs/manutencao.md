# Manutenção do site

## Atualizar o boletim atual

O arquivo principal da home fica em:

```text
downloads/Boletim Dominical.pdf
```

Quando chegar um novo boletim:

1. substituir o arquivo atual
2. manter também uma cópia no histórico
3. atualizar o índice `downloads/boletins/boletins.json`
4. fazer commit e push

## Histórico de boletins

Os PDFs antigos ficam em:

```text
downloads/boletins/
```

Cada item listado em `boletins.json` deve ter:

- data
- título
- caminho do arquivo PDF

## Testar localmente

Na pasta do projeto:

```bash
python3 -m http.server 8080
```

Depois abrir:

```text
http://localhost:8080/
http://localhost:8080/boletins.html
```

## Atualizar imagens

As imagens do site ficam em:

```text
assets/img/
```

Os ícones de idioma ficam em:

```text
assets/icons/
```

## Atualizar redes sociais e links

Os links principais ficam em `index.html`.

Se for trocar WhatsApp, Instagram, YouTube, Facebook ou mapa, basta ajustar os links no HTML e testar de novo localmente.

## Publicação

Fluxo básico:

```bash
git status
git add .
git commit -m "Descreva aqui a alteração"
git push
```

## Cuidados

- não publicar informações internas da equipe
- não publicar documentos de bastidor
- manter no repositório público apenas o que for útil para o site
- validar a home e a página `boletins.html` antes de cada publicação

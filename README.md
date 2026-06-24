# Site Institucional da IPI Pirapozinho

Site estático da **Igreja Presbiteriana Independente de Pirapozinho-SP**, pensado para apresentar a igreja de forma simples, leve e fácil de manter.

## O que existe no site

- página inicial com apresentação da igreja
- programação semanal
- links oficiais e redes sociais
- WhatsApp oficial
- pedidos de oração
- localização
- dízimos e ofertas com QR Code Pix
- boletim dominical atual
- página de arquivo de boletins anteriores
- seletor de idioma com bandeiras para português, espanhol e alemão

## Tecnologias

- HTML
- CSS
- JavaScript puro
- GitHub Pages

## Estrutura do projeto

```text
site-ipi-pirapozinho/
├── README.md
├── index.html
├── boletins.html
├── style.css
├── script.js
├── boletins.js
├── .gitignore
├── assets/
│   ├── favicon/
│   ├── icons/
│   └── img/
├── downloads/
│   ├── Boletim Dominical.pdf
│   ├── boletim-dominical.pdf
│   └── boletins/
│       ├── boletins.json
│       └── *.pdf
└── docs/
    └── manutencao.md
```

## Boletim dominical

O boletim atual usado na home fica em:

```text
downloads/Boletim Dominical.pdf
```

O histórico público fica em:

```text
downloads/boletins/
```

O índice lido pela página `boletins.html` fica em:

```text
downloads/boletins/boletins.json
```

## Idiomas

O site está preparado para:

- português
- espanhol
- alemão

O seletor de idioma aparece no topo usando bandeiras.

## Teste local

Na pasta do projeto:

```bash
python3 -m http.server 8080
```

Depois abrir:

```text
http://localhost:8080/
http://localhost:8080/boletins.html
```

## Publicação

Fluxo básico:

```bash
git status
git add .
git commit -m "Descreva aqui a alteração"
git push
```

Depois do push, o GitHub Pages pode levar alguns instantes para refletir a alteração.

## Manutenção

As instruções práticas de manutenção ficam em:

```text
docs/manutencao.md
```

## Parceria de criação

Este projeto foi organizado por **Marcos Antonio Rapado** com apoio de **Sofia Monteiro**.

Marcos conduziu a visão prática, os ajustes de conteúdo, o envio dos materiais da igreja e a direção do que deveria aparecer no site.

Sofia apoiou na estrutura técnica, organização dos arquivos, documentação, ajustes visuais, página de boletins, fluxo do PDF semanal e publicação.

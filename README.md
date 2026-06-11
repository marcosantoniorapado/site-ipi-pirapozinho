# Site Institucional da IPI Pirapozinho

Site estático da **Igreja Presbiteriana Independente de Pirapozinho-SP**.

Este projeto reúne, em uma página simples e acessível, as principais informações da igreja: programação semanal, endereço, redes sociais, WhatsApp oficial, pedidos de oração, boletim dominical, links úteis da IPI do Brasil e informações de contribuição.

## Igreja

**Igreja Presbiteriana Independente de Pirapozinho**  
**“Pirapozinho: na missão pela vida”**

## Objetivo

Criar uma presença digital simples, bonita, leve, responsiva e fácil de manter.

O site foi pensado para:

- funcionar bem em celulares, tablets e computadores;
- servir como cartão institucional da igreja;
- apoiar a divulgação do WhatsApp oficial da comunidade;
- reunir links úteis em um só lugar;
- permitir o download do boletim dominical;
- evitar dependência de atualizações semanais complexas;
- preservar uma presença digital organizada mesmo sem um portal completo.

A proposta não é substituir as redes sociais ou o contato pastoral, mas oferecer uma página estável com as informações principais da igreja.

## Tecnologias

- HTML
- CSS
- JavaScript puro
- GitHub Pages

O projeto não depende de banco de dados, painel administrativo, framework ou hospedagem paga.

## Recursos do site

- Página única, leve e responsiva.
- Menu superior fixo.
- Botão flutuante de WhatsApp.
- Seções para sobre a igreja, programação, links úteis, boletim, localização e contribuições.
- Link para pedido de oração via WhatsApp.
- Link para download do boletim dominical.
- QR Code Pix na seção de dízimos e ofertas.
- Favicon com o símbolo da igreja.
- Estrutura preparada para versão em português e alemão.
- Documentação básica para manutenção.

## Estrutura do projeto

```text
site-ipi-pirapozinho/
├── README.md
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── img/
│   │   ├── fachada-igreja.jpg
│   │   ├── simbolo-ipi.jpg
│   │   ├── cafe-e-fe.jpg
│   │   └── qrcode-pix.png
│   └── favicon/
│       ├── favicon.ico
│       ├── favicon-16.png
│       ├── favicon-32.png
│       ├── favicon-192.png
│       └── favicon-512.png
├── downloads/
│   └── Boletim Dominical.pdf
└── docs/
    ├── projeto.md
    ├── conteudo-do-site.md
    ├── links-oficiais.md
    ├── manutencao.md
    └── historico.md
```

## Pastas principais

### `assets/img/`

Guarda as imagens usadas no site, como fachada, símbolo da igreja, arte da Live Café e Fé e QR Code Pix.

### `assets/favicon/`

Guarda os ícones usados pelo navegador, incluindo o favicon exibido na aba do site.

### `downloads/`

Guarda arquivos disponíveis para download público.

Atualmente, o boletim dominical fica em:

```text
downloads/Boletim Dominical.pdf
```

Para atualizar o boletim semanal, basta substituir esse arquivo mantendo o mesmo nome. Assim, o botão do site continua funcionando sem precisar alterar o `index.html`.

### `docs/`

Guarda a documentação interna do projeto, com contexto, conteúdo, links oficiais, manutenção e histórico.

## Links principais

### Igreja local

- WhatsApp: `https://wa.me/5518996373353`
- Instagram: `https://www.instagram.com/ipi.pirapo`
- YouTube: `https://youtube.com/@ipidepirapozinho`
- Facebook: link em confirmação/ajuste conforme página oficial

### Links institucionais da IPI

- IPI do Brasil: `https://ipib.org.br/`
- IPI Conecta: `https://www.ipiconecta.app.br/`
- O Estandarte: `https://oestandarte.vidaecaminho.com.br/`
- Bíblia Online: `https://boomerang.dzign-e.net/ipib/utils/link/bible.php`

## Boletim dominical

O site possui uma seção própria para o boletim dominical.

O arquivo público deve ficar em:

```text
downloads/Boletim Dominical.pdf
```

Fluxo sugerido de atualização semanal:

1. Baixar ou receber o boletim atualizado.
2. Renomear para `Boletim Dominical.pdf`.
3. Substituir o arquivo antigo dentro da pasta `downloads/`.
4. Fazer commit e push no GitHub.

Exemplo:

```bash
git add downloads/Boletim\ Dominical.pdf
git commit -m "Atualiza boletim dominical"
git push
```

## Dízimos e ofertas

A seção de contribuições apresenta os dados bancários divulgados pela igreja e um QR Code Pix.

O QR Code fica em:

```text
assets/img/qrcode-pix.png
```

Sempre que houver alteração nos dados bancários, chave Pix ou QR Code, a informação deve ser conferida com a liderança da igreja antes de publicar.

## Publicação no GitHub Pages

Depois de enviar os arquivos para o repositório:

1. Acesse `Settings`.
2. Entre em `Pages`.
3. Em `Build and deployment`, escolha `Deploy from a branch`.
4. Em `Branch`, selecione `main`.
5. Em `Folder`, selecione `/root`.
6. Clique em `Save`.

O endereço esperado será parecido com:

```text
https://marcosantoniorapado.github.io/site-ipi-pirapozinho/
```

Também pode ser usado por um domínio personalizado no futuro, caso a igreja compre, recupere ou configure um domínio próprio.

## Manutenção básica

Para atualizar o site:

```bash
git status
git add .
git commit -m "Descreva aqui a alteração realizada"
git push
```

Depois do push, o GitHub Pages pode levar alguns instantes para atualizar.

Se a alteração não aparecer no navegador, tente:

- atualizar com `Ctrl + F5`;
- abrir em aba anônima;
- aguardar alguns minutos;
- verificar a aba `Actions` do GitHub.

## Parceria de criação

Este site nasceu da iniciativa de **Marcos Antonio Rapado**, com apoio da **Sofia Monteiro**, dentro do processo de organização da presença digital da Igreja Presbiteriana Independente de Pirapozinho.

Marcos conduziu a visão prática do projeto, reuniu informações, imagens, links, boletins e necessidades reais da igreja. Sofia apoiou na documentação, planejamento, redação, organização do conteúdo, estrutura técnica, revisão e construção da página estática.

A proposta dessa parceria é simples: servir à igreja com uma presença digital clara, útil, respeitosa e de fácil manutenção.

## Histórico resumido

O projeto surgiu durante a organização do novo WhatsApp Business da igreja. Como a função de IA da Meta ainda não estava disponível no número novo, surgiu a ideia de criar uma página institucional simples, hospedada no GitHub Pages, reunindo as informações principais da igreja e fortalecendo a presença digital da comunidade.

A página também serve como base para futuras integrações com WhatsApp Business, IA de atendimento, boletins semanais, links oficiais e comunicação da igreja.

## Observação

Este site usa principalmente informações fixas e de baixa manutenção. Avisos semanais, escalas, aniversariantes e comunicados temporários devem continuar sendo divulgados pelas redes sociais, boletins ou WhatsApp, para evitar conteúdo desatualizado no site.

Quando houver dúvida sobre alguma informação institucional, pastoral, financeira ou de contato, ela deve ser confirmada com a liderança da igreja antes de ser publicada.

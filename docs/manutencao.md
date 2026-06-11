# Manutenção do site

## Como atualizar o WhatsApp

No arquivo `index.html`, procurar por:

```text
5518996373353
```

Trocar pelo novo número no formato internacional, sem espaços e sem sinais.

## Como atualizar redes sociais

No arquivo `index.html`, procurar pela seção `links-grid`.

Ali ficam os botões de redes sociais e links úteis.

## Como trocar imagens

As imagens principais ficam em:

```text
assets/img/
```

Arquivos usados:

```text
fachada-igreja.jpg
simbolo-ipi.jpg
cafe-e-fe.jpg
```

Para trocar uma imagem, manter o mesmo nome do arquivo ou atualizar o caminho no `index.html`.

## Como publicar no GitHub Pages

Depois de enviar os arquivos:

1. Entrar no repositório.
2. Acessar `Settings`.
3. Acessar `Pages`.
4. Em `Source`, selecionar `Deploy from a branch`.
5. Selecionar branch `main`.
6. Selecionar pasta `/root`.
7. Salvar.

## Como testar localmente

Abrir o arquivo `index.html` no navegador.

Também é possível usar um servidor local simples:

```bash
python3 -m http.server 8080
```

Depois acessar:

```text
http://localhost:8080
```

## Boas práticas

- Não colocar CPF, senhas, dados sensíveis ou informações privadas.
- Não publicar dados pessoais de membros sem autorização.
- Confirmar com a liderança antes de publicar informações financeiras.
- Manter o site simples.
- Usar redes sociais para avisos semanais e conteúdo que muda com frequência.


## Atualização semanal do boletim

Para atualizar o boletim dominical no site:

1. Salvar o novo PDF com o nome definido para a edição atual.
2. Substituir o arquivo existente em `downloads/Boletim Dominical.pdf`.
3. Fazer commit e push para o GitHub.
4. Aguardar o GitHub Pages atualizar a página.

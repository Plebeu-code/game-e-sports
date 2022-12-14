<p align="center">
  <img src="https://img.shields.io/static/v1?label=VISUALSTUDIOCODE&message=IDE&color=blue&style=for-the-badge&logo=VISUALSTUDIOCODE">
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas no site foram:

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hoppscotch-31C48D?style=for-the-badge&logo=hoppscotch&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/ts--node--dev-3178C6?style=for-the-badge&logo=ts-node-dev&logoColor=white"/>
</p>

- `JavaScript`;
- `TypeScript`;
- `Node`;
- `Tailwind CSS`;
- `Expo`;
- `React Native`;
- `HTML 5`;
- `CSS 3`;
- `Hoppscotch`;
- `Prisma`;
- `Sqlite`;
- `Radix`;
- `Ts-node-dev`.

## ✏️ Funcionalidades
- [X] Conexão do back-end (server) e do front-end (web) para mostrar os jogos;
- [X] Conexão de criação de anúncio com a API (back-end);
- [X] Listagem de games com contagem de anúncios;
- [X] Interface de criação de novo anúncio;
  - [X] Deixar funcional a parte de "quando costuma jogar?";
  - [X] Customizar a checkbox;
  - [X] Cadastrar o anúncio na API.
- [X] Buscar discord pelo ID do anúncio;
- [X] Listagem de anúncios por game;
- [X] Criação de novo anúncio;


## Design da aplicação WEB
<p align="center">
  <img src="https://user-images.githubusercontent.com/75649546/190654538-c3fbb59f-696e-4a58-9a77-e9a117e8d444.png"/>
  <img src="https://user-images.githubusercontent.com/75649546/190654603-59fc257a-04d7-4ff0-837b-8e12adc06dec.png"/>
</p>

## Design da aplicação Mobile
<p align="center">
  <img src="https://user-images.githubusercontent.com/75649546/190654688-4a52a596-a27d-4dd9-a4da-e85781b84b9b.png"/>
  <img src="https://user-images.githubusercontent.com/75649546/190654735-7f6ee78d-b3db-405b-b162-1d12f27f2c8a.png"/>
  <img src="https://user-images.githubusercontent.com/75649546/190654782-28fda26f-cd59-414e-878a-bb9bdcfdb0a5.png"/>
  <img src="https://user-images.githubusercontent.com/75649546/190654770-e5e60036-611f-4301-92ac-924d5fccdddb.png"/>
</p>

## 🕹️ Como Utilizar
Para rodar estas aplicações será necessário, primeiramente escolher a que deseja, entre elas:
- WEB (front-e-sports)
- MOBILE (back-e-sports).


A aplicação "server" se integra com a "web" e a "mobile", realizando o Back-end. Caso queira rodar as aplicações basta utilizar os seguintes comandos:


Rodando a aplicação web, primeiro iniciar o servidor e depois o próprio "web", ambos com o comando:
```bash
npm run dev
```

Rodando a aplicação mobile, primeiro iniciar o servidor e depois o próprio "mobile":
#### Server
```bash
npm run dev
```
#### Mobile
```bash
expo start --tunnel
ou
expo start 
```

Obs.: não esqueça de trocar pelo IP da sua máquina, para verificar o IP utilize o seguinte comando no terminal e achei o IPv4:
#### windows
```bash
ipconfig
```

#### Linux
```bash
ipconfig
```

## Informações Extras:

### HTTP methods 
- GET = Buscar
- POST = Criar
- PUT = Editar uma entidade
- PATCH = Editar uma informação específica
- DELETE = Deletar/Apagar

Obs.: o nome das rotas são sempre no plural.

### HTTP Codes

Tipo de resposta que o back-end está dando.

Status 201 - Algo foi criado

Status 200 - Resposta genérica de sucesso (ok)

Principais: 

- Começa com 2 -> Sucesso
- Começa com 3 -> Redirecionamento
- Começa com 4 -> Erro no código
- Começa com 5 ou derivados -> Erros inesperados

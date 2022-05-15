# Coins Shop Backend

# Contexto

Desafio técnico da [Voll Solutions](https://vollsolutions.com.br/).

Neste projeto foi desenvolvida uma `API RESTful` utilizando a arquitetura MSC, em conjunto com o `ORM` `Sequelize`.

A API trata-se de um sistema de gerenciamento de uma loja de produtos , onde é possível, utilizando o `CRUD`, gerenciar produtos e usuários. Também possui uma rota de login, feita utilizando a biblioteca `JSON Web Token` para gerenciar o login e atividades dos usuários no site da loja.
___

com as rotas será possível:

- Fazer login;
- Listar todos os produtos;
- Listar todos os usuários;
- Atualizar as moedas dos usuários;
- Cadastrar novos produtos no banco de dados.
  

## Tecnologias usadas

> Desenvolvido usando: Typescript, Javascript, Express, Node.js, Sequelize, JWT, Joi, ESlint, Mysql, Mocha, Chai, Sinon

## Configuração inicial

Instale as dependências do projeto: 

```bash
npm install
```

Para que o projeto funcione corretamente será necessário criar um arquivo do tipo `.env` com as variáveis de ambiente referentes ao banco de dados, portas a serem utilizadas e o seu segredo para utilizar o [JWT](https://jwt.io/introduction). Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo `.env` ficará desta forma:

```sh
MYSQL_URI=mysql://nome:1234@localhost:3306/db
PORT=3001
JWT_SECRET=secret
```
---
  Logo em seguida será necessário criar o banco de dados e as tabelas que vão compor o banco. Para isso basta ter o MySQL ativo na máquina, e utilizar os seguintes comandos:

```bash
npm run db
```
Este comando vai automaticamente criar o bando de dados da API e criar todas as tabelas.

Caso queira automaticamente incluir alguns dados para teste nas tabelas, basta rodar o seguinte comando: 

```bash
npm run seed
```

## Executando a aplicação

Para executar a aplicação basta executar o comando abaixo:
```bash
npm run build && npm start
```


## Testes

Para rodar os testes basta executar o comando abaixo:
```bash
npm test
```

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
Este comando vai automaticamente criar o bando de dados da API e todas as tabelas.

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
___

## Rotas

###  POST `/login`
Rota responsável por realizar o login de um usuário cadastrado. o `body` da requisição deve ter o seguinte formato:

```json
{
  "email": "email@mail.com",
  "password": "123456"
}
```

Exemplo de retorno com sucesso:
```json
{
  "user": {
	"id": 1,
	"name": "user",
	"email": "user@user.com",
	"role": "user",
	"coins": 9999
   },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```
_token fictício_

Ao realizar o login será retornado um token, que será necessário para realizar ações outras ações na API.


Quando os dados de login estão incorretos:

```json
{
   "message": "Invalid login or password"
}
```

#### Regras:
- Atributos `email` e `password` não podem estar vazios ou faltando;
- Atributo `email` deve ser um e-mail valido `email@email.com`;
- Atributo `password` deve ser uma string com exatamente 6 caracteres.
---


###  GET `/users`
Rota responsável por listar todos os usuários cadastrados na tabela `users`. Para realizar a listagem será necessário possuir um token, que é gerado ao realizar o login do usuário, e incluí-lo nos `headers` da requisição com a chave `authorization`.

![exemplo headers token](./public/token-getuser.png)

Quando o token não é informado na requisição:
```json
{
   "message": "Token not found"
}
```
Quando o token é inválido:
```json
{
   "message": "Expired or invalid token"
}
```
___

Exemplo de retorno com sucesso:
```json
[
	{
		"id": 1,
		"name": "user",
		"email": "user@user.com",
		"role": "user",
		"coins": 500
	},
	{
		"id": 2,
		"name": "admin",
		"email": "admin@admin.com",
		"role": "admin",
		"coins": 9999
	}
]
```
---
###  PUT `/users/:id`
Rota responsável por atualizar as moedas dos usuários na tabela `users` com base no id. Para realizar a atualização será necessário possuir um token, que é gerado ao realizar o login do usuário, e incluí-lo nos `headers` da requisição com a chave `authorization`.

![exemplo headers token](./public/token-putuser.png)

Quando o token não é informado na requisição:
```json
{
   "message": "Token not found"
}
```
Quando o token é inválido:
```json
{
   "message": "Expired or invalid token"
}
```
___

Exemplo de retorno com sucesso:
```json
1
```
Significando que um campo foi alterado, e a atualização foi um sucesso.

___

Quando a atualização não ocorre:

```json
0
```
Significando que nenhum campo foi alterado, e a atualização não aconteceu.
___

Quando o valor da atualização da moeda é negativo:
```json
{
   "message": "Coins cannot be negative"
}
```
___

###  GET `/products`
Rota responsável por listar todos os produtos cadastrados na tabela `products`. Para realizar a listagem será necessário possuir um token, que é gerado ao realizar o login do usuário, e incluí-lo nos `headers` da requisição com a chave `authorization`.

![exemplo headers token](./public/token-getproducts.png)

Quando o token não é informado na requisição:
```json
{
   "message": "Token not found"
}
```
Quando o token é inválido:
```json
{
   "message": "Expired or invalid token"
}
```
___

Exemplo de retorno com sucesso:
```json
[
	{
	"id": 1,
	"name": "Produto 1",
	"description": "Descrição produto 1",
	"price": 90,
	"image": "https://image.com/image1.jpg",
	"createdAt": "2021-08-01T19:58:00.000Z"
	},
	{
	"id": 2,
	"name": "Produto 2",
	"description": "Descrição produto 2",
	"price": 90,
	"image": "https://image.com/image2.jpg",
	"createdAt": "2021-08-01T19:58:00.000Z"
	}
]
```
---
###  POST `/products`
Rota responsável por cadastrar um novo produto na tabela `products`. Para realizar o cadastro será necessário possuir um token, que é gerado ao realizar o login do usuário, e incluí-lo nos `headers` da requisição com a chave `authorization`.

![exemplo headers token](./public/token-postproducts.png)

Quando o token não é informado na requisição:
```json
{
   "message": "Token not found"
}
```
Quando o token é inválido:
```json
{
   "message": "Expired or invalid token"
}
```
___
Além disso, o `body` da requisição deve ter o seguinte formato:

```json
{
	"name": "Novo Produto",
	"description": "Descrição novo produto",
	"price": 200,
	"image": "https://image.com/image1.png"
}
```
 
Exemplo de retorno com sucesso:
```json
{
	"id": 1,
	"name": "Novo Produto",
	"description": "Descrição novo produto",
	"price": 200,
	"image": "https://image.com/image1.png",
	"createdAt": "2022-05-07T16:35:43.259Z"
}
```
#### Regras:
- Atributos `name`, `description`, `price` e  `image`  não podem estar vazios ou faltando;
- Atributo `name` não pode ter menos de 3 caracteres;
- Atributo `description` não pode ter menos de 10 caracteres;
- Atributo `price` não pode ser um numero negativo;


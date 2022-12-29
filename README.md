
# SysMap

Aplicação para teste de conhecimento


## Instalação e Rodando o Projeto

Instale o projeto com npm



```bash
git clone git@github.com:omateusamaral/test-front-end-sysmap.git
cd test-front-end-sysmap
npm install
npm run dev
  
```

Após issso ele vai mostrar no terminal a porta para acessar o projeto
    
## Stack utilizada

**Front-end:** React, Material UI e Cypress



## Rodando os testes

Para rodar os testes, rode o seguinte comando

* Obs: é preciso estar rodando a aplicação também na porta 5173

```bash
  npm run test:e2e
```


## Documentação da API

#### Retorna todos os posts

```http
  GET https://jsonplaceholder.typicode.com/posts
```



#### Listagem de comentários de um post

* Estão todos no arquivo api.ts

```http
  GET https://jsonplaceholder.typicode.com/posts/${id}/comments
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



#### Retorna todos os usuários

```http
  GET https://jsonplaceholder.typicode.com/users
```

#### retorna Detalhes de um usuário

```http
  GET https://jsonplaceholder.typicode.com/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


## Screenshot

![Screenshot from 2022-12-29 08-43-17](https://user-images.githubusercontent.com/37390930/209946513-2a1f2bbd-6792-4dc1-b1c5-aba12881d3fe.png)


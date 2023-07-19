- POST `/user`: cria um novo usuário no sistema.

```
{
    "username": string REQUIRED,
    "password": string REQUIRED,
    "name": string,
    "email": string
}
```

- GET `/user`: lista os usuários do sistema. necessário ter um token de autenticação.

- PATCH `/user`: atualiza um usuário do sistema. necessário ter um token de autenticação. o token precisa ser o mesmo da conta a ser atualizada.

```
{
    "username": string REQUIRED,
    "password": string,
    "name": string,
    "email": string
}
```

- DELETE `/user`, deleta um usuário. necessário ter um token de autenticação. o token precisa ser o mesmo da conta a ser atualizada.

```
{
  "username": string REQUIRED
}
```

- POST `/login`, cria uma sessão e retorna o token para o usuário.

```
{
  "username": string REQUIRED
  "password": string REQUIRED
}
```

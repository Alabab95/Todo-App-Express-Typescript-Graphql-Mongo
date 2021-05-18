Public : 
http://localhost:8000/graphql/public

- Mutations :

• Login

```js
mutation loginuser{
  login(email:"ala@gmail.com", password:"Secret@123456"){
    email
    token
  }
}
```

• SignUp

```js
mutation createUser{
  signUp(user:{email:"ala@gmail.com", password:"Secret@123456", fullname:"Ala Ben Abdallah"}){
    token
    email
  }
}
```

After Signing in grab the token 
![image](https://user-images.githubusercontent.com/59669851/118735808-1df25700-b839-11eb-838f-e540afd38547.png)

And put it in Graphiql With Authorization in the header name and Bearer + token in the header value

![image](https://user-images.githubusercontent.com/59669851/118735882-3b272580-b839-11eb-99b6-f7c5a8a32631.png)

After doing that you will be able to access all the private queries and mutations

### Private

- Query

  • getUsers: [User]
  • todo(id: ID!): Todo
  • todos: [Todo]
  • personalTodos: [Todo]
  • allMyTodos: [Todo]

- Mutation

  • updateProfile(user: UserInfo): User
  • createTodo(input: TodoInput!): Todo
  • addCollaborater(id: ID!collaboraterId: ID!): Todo
  • removeCollaborater(id: ID!collaboraterId: ID!): Todo
  • updateTodo(id: ID!input: TodoInput!): Todo
  • deleteTodo(id: ID!): Todo


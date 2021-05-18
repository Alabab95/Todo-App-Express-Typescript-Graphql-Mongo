Public : 
http://localhost:8000/graphql/public

- Mutation

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

### Protected

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


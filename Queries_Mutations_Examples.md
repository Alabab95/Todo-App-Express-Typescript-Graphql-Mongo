Public : 
http://localhost:8000/graphql/public

Mutation 
• Login
mutation loginuser{
  login(email:"geekrishabh@gmail.com", password:"Secret@123456"){
    email
    token
  }
}
• SignUp

mutation createUser{
  signUp(user:{email:"geekrishabh@gmail.com", password:"Secret@123456", fullname:"Rishabh Pandey"}){
    token
    email
  }
}

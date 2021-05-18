# Todo-App-Express-Typescript-Graphql-Mongo
This is a basic todo application using GraphQL with Node.js, ES6 and Express with JWT Authentication & typescript

Getting Started
Clone the repo:

git clone https://github.com/Alabab95/Todo-app.git

cd Todo-App-Express-Typescript-Graphql-Mongo

Install yarn or npm :

https://www.npmjs.com/get-npm

npm install -g yarn

Install Mongo:

https://www.mongodb.com/try/download/community

Install dependencies:

yarn or npm i

Set environment (vars):

cp .env.example .env

Note:- Create a .logs folder at the root level of project (every logs goes there after you run the project)


# Start server
npm start
yarn start


# Docker
Using Docker Compose for Development
# service restarts on file change
bash bin/development.sh

Building and running with Docker Compose

You need to install Docker Desktop if you are using windows :

https://www.docker.com/products/docker-desktop

if you are using a linux distrubuation 

https://docs.docker.com/engine/install/ubuntu/

# Build docker
for windows users :

docker compose build

for linux users :

docker-compose build

# Run docker
for windows users :

docker compose up

for linux users :

docker-compose up

# EndPoints
• Public Graphql Endpoint http://localhost:4040/graphql/public : contains the login and sign up mutations 

• Private Graphql Endpoint http://localhost:4040/graphql/private : contains the private queries and mutation , you need to be authentificated to access this endpoint

Note: Please download GraphiQL to get the protected route working .

Graphiql : https://github.com/graphql/graphiql

Note: Need to pass Authorization Bearer Token in Header to access this endpoint obtained from public endpoint while Signup/Login.

http://localhost:4040/graphql/private

List Of Queries & Mutations

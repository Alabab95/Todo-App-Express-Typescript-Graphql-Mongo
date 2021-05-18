FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install 
# Install Typescript globally
RUN npm i typescript -g
# I had some problems with bcrypt version so I had to uninstall it and install again 
RUN npm uninstall bcrypt
RUN npm i bcrypt


# Bundle app source
COPY . .
# Compile Typescript to javascript 
RUN tsc --outDir todo

EXPOSE 8000
CMD [ "node", "todo/index.js" ]

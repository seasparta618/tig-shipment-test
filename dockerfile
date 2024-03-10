FROM node:20-alpine

RUN mkdir /app

WORKDIR /app

ADD package*.json ./

RUN npm install 

COPY . .

RUN npm run build

RUN npm run build:server

EXPOSE 3000

CMD ["node", "server.js"]


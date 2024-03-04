FROM node:18.18.2 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm", "start" ]
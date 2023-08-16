FROM node 

WORKDIR /app

COPY package*.json /app/

RUN echo 'aplicando configurações da aplicação back-end Node APIManualDoDev'

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM node:19.3.0-alpine3.17

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]
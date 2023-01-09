FROM node:19.3.0-alpine3.17

WORKDIR /app

RUN chown node /app

USER node

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
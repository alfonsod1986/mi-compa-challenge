FROM node:16-slim as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@9.3.0

RUN npm install

COPY . .

RUN npm run build

FROM node:16-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@9.3.0

RUN npm ci --omit=dev

COPY --from=development /usr/src/app/dist ./dist

CMD [ "npm", "run", "start" ]
FROM node:node:18-alpine

WORKDIR /usr/src/app

COPY package*.json /app
RUN npm ci --only=production

COPY . .

EXPOSE 4000/tcp

CMD [ "npm","run", "start:prod" ]
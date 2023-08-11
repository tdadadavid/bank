FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install typescript
RUN npm ci 

COPY . .

EXPOSE 4000

CMD [ "npm","run", "start:prod" ]
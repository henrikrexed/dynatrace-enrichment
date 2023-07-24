FROM node:18-alpine

WORKDIR /app
COPY *.js .
COPY package*.json ./


RUN npm install
RUN ls

ENTRYPOINT [ "npm", "start" ]
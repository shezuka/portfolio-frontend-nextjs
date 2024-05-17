FROM node:20.12.1-alpine

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 3000

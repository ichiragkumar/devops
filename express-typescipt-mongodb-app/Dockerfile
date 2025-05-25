#stage 1
FROM node:22-alpine as builder



WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .


#STAGE E

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app /app/

EXPOSE 3000


CMD ["npm", "run", "dev"]



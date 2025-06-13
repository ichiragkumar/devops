#stage 1
FROM node:20-alpine AS builder


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


#stage 2

FROM node:20-alpine


WORKDIR /app

COPY --from=builder /app /app


EXPOSE 3005



CMD ["node", "dist/index.js"]


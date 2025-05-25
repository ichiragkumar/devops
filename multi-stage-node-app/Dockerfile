#stage 1

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .


#stage 2
FROM node:22-alpine

WORKDIR /app

#copy from builder stage inside /app and move it into /app
COPY --from=builder /app /app


EXPOSE 3002


CMD ["npm", "run", "dev"]



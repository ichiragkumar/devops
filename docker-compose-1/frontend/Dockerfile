#builder stage 1
FROM node:22-alpine  as builder


WORKDIR /app


COPY package*:.json ./


RUN npm install



COPY . .


### use her npm run build


#stage 2  , server


FROM ngnix:alpine


COPY --from=builder /app/dist /app/dist /usr/share/nginx/html/

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]

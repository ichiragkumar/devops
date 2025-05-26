#builder stage 1
FROM node:22-alpine  As builder


WORKDIR /app


COPY package*.json ./



RUN npm install



COPY . .


### use her npm run build


#stage 2  , server


FROM nginx:alpine


COPY --from=builder /app/dist /usr/share/nginx/html



EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]

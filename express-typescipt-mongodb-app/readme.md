
# Express Typescript MongoDB App



```bash
 curl -X POST http://localhost:3003/add \
  -H "Content-Type: application/json" \
  -d '{"name": "Tom", "age": 10}'
```


## How to run docker with env
```bash
docker run --env-file .env -p 3003:3000 mongo-app/image_name
```


## How to run docker without env
```bash
docker run -p 3003:3000 mongo-app/image_name
```



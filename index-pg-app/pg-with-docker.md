

docker run  -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

docker exec -it container_id /bin/bash
psql -U postgres



CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255)
);
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);





we will be using psql 


docker run -p 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydb -d postgres


mine is running on port 5432
docker exec -it <container_id> /bin/bash
psql -U postgres




// gpt response

docker run -p 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydb -d postgres
psql -h localhost -p 5432 -U postgres


create database mydb;

create user myuser with password 'password';

grant all privileges on database mydb to myuser;

\c mydb

select * from pg_database;

select * from pg_user;

\q
# NodeJS with Mysql and TESTS

## MySQL

```sh
CREATE DATABASE `example`

CREATE TABLE Persons (
    id int NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    CONSTRAINT PK_Person PRIMARY KEY (id)
);
```

## Installation

After create table, Install the dependencies and devDependencies and start the server.

```sh
npm install
npm start
```

For tests
```sh
npm test
```

## Documentation API with OpenAPI and Swagger

To generate the docs
```sh
npm run swagger-autogen
```

To acess the docs
```sh
http://localhost:3000/doc
```

Technologies tha was used 

- NodeJS
- MySQL
- Tests




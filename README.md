# Airbnb with nest

Reservation REST API using Nest.js


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `MONGODB_URI` this is the Mongo URI to connect to the database


## Instalation
```bash
npm install
```

## Running the app
To run the app, run the following command
```bash
# development
npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
To run tests, run the following command
```
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Authors

- [@FelipeRamirez](https://www.github.com/mrinternauta)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Developer Notes

### Nest CLI instalation

to install nest globally, run the following command
``` bash
npm i -g @nestjs/cli 
```

### Generate new project

to create a new project with nest, run the following command
```bash
nest new <project_name>
```

### Generate new library

to create a new library with nest, run the following command
```bash
nest generate library <library_name>
```

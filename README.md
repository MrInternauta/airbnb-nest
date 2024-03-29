# Airbnb with nest

Reservation REST API using Nest.js


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file for each app

### Auth
- MONGODB_URI=mongodb+srv://wewewew:ww@cluster0.wewwew.mongodb.net #this is the Mongo URI to connect to the database
- JWT_SECRET=mysecret12345
- JWT_EXPIRATION=3600
- HTTP_PORT=3001
- TCP_PORT=3002
### Reservation
- MONGODB_URI=mongodb+srv://wewewew:ww@cluster0.wewwew.mongodb.net #this is the Mongo URI to connect to the database
- PORT=3000
- AUTH_PORT=3002
- AUTH_HOST=auth
- PAYMENTS_SERVICE_PORT=3003
- PAYMENTS_SERVICE_HOST=payments
### Payments
- PORT=3003
- STRIPE_SECRET_KEY=sdasdasdasdas
### NOTIFICATION
- PORT=3004
- SMTP_USER
- GOOGLE_OAUTH_CLIENT_ID
- GOOGLE_OAUTH_CLIENT_SECRET
- GOOGLE_OAUTH_REFRESH_TOKEN

Note generate `STRIPE_SECRET_KEY` with [Stripe](https://dashboard.stripe.com/test/dashboard)
## Instalation
```bash
# it will recursive install depencies
npm install -r
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

## Docker
To run build, run the following command
```
# build
$ cd apps/reservations
# do same for each micro-service
$docker build -t reservations -f ./Dockerfile ../../ 

# do same for each micro-service
$ docker run reservations

# run services
$ docker-compose up
```
### Docker run services
```$ docker-compose up```

### Tag image before upload to GCloud
```
❯ docker tag reservations us-east4-docker.pkg.dev/innate-temple-417000/reservations/production


❯ docker image push us-east4-docker.pkg.dev/innate-temple-417000/reservations/production

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


### Generate new module for an specific project

run the following command
```bash
nest generate module <module_name> -p <library_name>
```

### Generate new micro-service 

run the following command
this will generate `apps` folder
```bash
nest generate app <project_name>
```

FROM node:alpine as development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json tsconfig.json

RUN npm install 

COPY apps/notifications apps/notifications
COPY libs libs

RUN cd apps/notifications && npm install

RUN npm run build

EXPOSE 3000


#prod
FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/notifications/main"]
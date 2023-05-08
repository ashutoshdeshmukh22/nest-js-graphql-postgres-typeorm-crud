# --------- 1. Build Stage ---------

# Base Package
FROM node:18-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Getting package.json filrs
COPY package*.json ./

# installing dependancies
RUN npm install

# copy source code from Local dir to image dir
COPY . .

# build the app
RUN npm run build

# 2.  ------- Production Stage -------

# Base Package
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

# Getting package.json filrs
COPY package*.json ./

# installing dependancies
RUN npm install --only=production

# Remove the package.json file
RUN rm package*.json

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
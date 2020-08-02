# A Dockerfile contains commands to build and run the application

# use node version 10 from the offical nodejs docker image
FROM node:alpine

MAINTAINER Ryan Lafazan

# Expose web app port
EXPOSE 3000
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app
# Installing dependencies
COPY package*.json ./
# RUN npm install react-scripts -g --silent
RUN yarn install
# Copying source files
COPY . /app
# Building app
RUN yarn build 
# Running the app when the container launches
CMD [ "yarn", "dev"]

################################################
###                  WEB                     ###
################################################
FROM node:19-alpine3.16 as web

WORKDIR /home/node

COPY . .

RUN npm install
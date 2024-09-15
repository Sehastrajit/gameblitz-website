FROM node:18.19.1-alpine3.19
WORKDIR /app
COPY . . 
RUN apk update && apk add bash

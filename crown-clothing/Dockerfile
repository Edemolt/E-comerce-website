FROM node:16-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . . 

RUN npm build

# SERVER with nginx
FROM nginx:1.21-alpine 

WORKDIR /usr/share/nginx/html
RUN -rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM nginx:stable-alpine3.21-perl

RUN apk update && \
    apk upgrade --no-cache

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

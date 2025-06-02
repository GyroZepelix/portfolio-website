FROM public.ecr.aws/nginx/nginx:stable-alpine3.19

RUN apk update && \
    apk upgrade --no-cache

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

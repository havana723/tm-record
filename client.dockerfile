FROM node:16

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

COPY client .

RUN yarn install --pure-lockfile --non-interactive
RUN yarn build

FROM nginx:stable-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

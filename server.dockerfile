FROM node:16

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

COPY server .

RUN yarn install --pure-lockfile --non-interactive

CMD [ "yarn", "start" ]
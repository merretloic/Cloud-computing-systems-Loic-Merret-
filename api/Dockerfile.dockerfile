FROM node:22-bookworm-slim

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm i --omit=dev

COPY ./*.js ./

EXPOSE 80

ENTRYPOINT [ "node" ]

CMD [ "src/index.js" ]

FROM node:12-alpine

RUN apk  add --no-cache dumb-init # build-base

WORKDIR /workdir

COPY *.json *.lock /workdir/

RUN yarn

COPY . /workdir/

RUN yarn tsc

ENV PORT=80

ENTRYPOINT ["dumb-init", "--"]
CMD node dist/index.js

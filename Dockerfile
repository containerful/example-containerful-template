FROM node:12-alpine

RUN apk  add --no-cache dumb-init # build-base

WORKDIR /workdir

COPY *.json *.lock /workdir/

RUN yarn

COPY . /workdir/

ENV PORT=80

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "start"]

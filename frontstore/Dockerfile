# Build BASE
FROM node:16-alpine as BASE

WORKDIR /frontstore
COPY package.json package-lock.json ./
RUN apk add --no-cache git \
    && npm install \
    && npm cache clean --force

# Build Image
FROM node:16-alpine AS BUILD

WORKDIR /frontstore
COPY --from=BASE /frontstore/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
    && npm run build \
    && cd .next/standalone \
    && curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bi \
    && apk del curl

# Build production
FROM node:16-alpine AS PRODUCTION

WORKDIR /frontstore

COPY --from=BUILD /frontstore/public ./public
COPY --from=BUILD /frontstore/next.config.js ./

# Set mode "standalone" in file "next.config.js"
COPY --from=BUILD /frontstore/.next/standalone ./
COPY --from=BUILD /frontstore/.next/static ./.next/static

EXPOSE 3001

CMD ["node", "server.js"]

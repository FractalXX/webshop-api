FROM node:12.13.0-alpine

RUN apk update && apk add build-base git

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY ./src ./src
COPY tsconfig.json .
RUN npm run build

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

CMD ["npm", "start"]

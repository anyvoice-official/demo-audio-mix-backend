FROM node:14-alpine

RUN apk add --update ffmpeg

WORKDIR /app/

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3334

CMD node dist/apps/demo-audio-mix-backend/main.js

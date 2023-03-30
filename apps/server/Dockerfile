FROM node:latest
WORKDIR /usr/src/app/
COPY yarn.lock ./
COPY .env .
RUN yarn
ENV PORT=8000
EXPOSE ${PORT}
COPY . .
CMD [ "node", "dist/apps/server/main.js"]


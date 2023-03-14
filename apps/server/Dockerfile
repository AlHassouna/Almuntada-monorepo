FROM node:lts-alpine
WORKDIR /usr/src/app/
COPY ./dist/apps/server .
COPY package*.json ./
RUN yarn install --frozen-lockfile
ENV PORT=8000
EXPOSE ${PORT}
CMD [ "node", "dist/apps/server/main.js"]


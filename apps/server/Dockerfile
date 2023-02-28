FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ./dist/apps/server .
COPY package*.json ./
RUN npm install --production
ENV PORT=8001
EXPOSE ${PORT}
CMD [ "node", "main.js"]
 
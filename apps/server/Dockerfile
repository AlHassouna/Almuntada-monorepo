FROM node:latest
WORKDIR /usr/src/app/
COPY ./dist/apps/server .
COPY package*.json ./
RUN yarn
ENV PORT=8000
EXPOSE ${PORT}
COPY . .
CMD [ "node", "dist/apps/server/main.js"]

FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/auth .
COPY package.json package-lock.json ./
ENV PORT=8000
EXPOSE ${PORT}
RUN npm install --production
CMD node ./main.js
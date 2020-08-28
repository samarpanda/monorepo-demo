FROM node:current-alpine
RUN mkdir /home/api
WORKDIR /home/api
COPY package.json .
RUN npm ci
COPY . .
CMD ["node", "index.js"]
FROM node:18-alpine

COPY package.json package.json
COPY package-lock.json package-lock.json

  
COPY /src /src

RUN npm install

EXPOSE 3001

CMD [ "node", "src/server.js" ]
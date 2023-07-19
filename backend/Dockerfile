FROM node:18.16.0

COPY package.json package.json
COPY package-lock.json package-lock.json

  
COPY /src /src

RUN npm install

CMD [ "node", "src/server.js" ]
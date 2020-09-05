FROM node:14.9.0

WORKDIR app

COPY package.json .
RUN npm install

COPY index.ts .
ENTRYPOINT ["npm", "run", "start"]
FROM node:17.3.1
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 2020
CMD [ "npm","start","server" ]

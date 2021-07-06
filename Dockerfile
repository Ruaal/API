FROM node:12-alpine
WORKDIR /server
COPY package*.json .
COPY src /server/src
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
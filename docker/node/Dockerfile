FROM node

WORKDIR /app

COPY /app/ ./

RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm", "run", "dev"]
FROM node:erbium

WORKDIR /app
COPY package*.json ./
COPY . ./

RUN npm install
RUN npm install react-scripts@3.0.1 -g

EXPOSE 3000

CMD ["npm", "start"]
FROM node:14.17.1 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force
COPY . ./
EXPOSE 3001
CMD ["npm", "start"]

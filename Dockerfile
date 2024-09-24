FROM node:14.17.1 as builder
WORKDIR /frontend
COPY ./package.json /frontend
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

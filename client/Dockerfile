FROM node:alpine AS builder
WORKDIR '/app'
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

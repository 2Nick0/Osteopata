FROM node:20-alpine as build

RUN npm i -g pnpm

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
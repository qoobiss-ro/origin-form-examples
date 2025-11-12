FROM node:18 as build

ARG ENVIRONMENT
ENV ENVIRONMENT=$ENVIRONMENT

WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --production

FROM nginx:latest
COPY --from=build /app/dist/origin-client-app/browser /usr/share/nginx/html
COPY ./entrypoint.sh /usr/local/app/entrypoint.sh
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

RUN chmod +x /usr/local/app/entrypoint.sh

#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ./usr/local/app/entrypoint.sh --ENVIRONMENT $ENVIRONMENT
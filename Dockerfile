FROM aniekeme01/base-image:latest AS build-stage

RUN apk update && \
    apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY . .

RUN npm run build

# Stage 2: Production stage
FROM nginx:mainline-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
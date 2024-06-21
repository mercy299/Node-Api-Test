FROM aniekeme01/base-image:latest AS build-stage

RUN apk update && \
    apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY . .

RUN npm run build

# Stage 2: Production stage
FROM aniekeme01/base-image:latest

RUN apk update && \
    apk add --no-cache nodejs npm

WORKDIR /app

COPY --from=build-stage /app /app


EXPOSE 80

CMD ["node", "app.js"]

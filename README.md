# 🐳 App Dockerized with Multi-Stage Build

This project demonstrates how to containerize a Node.js + Express application using a multi-stage Docker build. The app features basic user API endpoints and a frontend-ready `nginx.conf` for SPA (Single Page Application) deployment.

---

## 🚀 Features

- 🐳 Multi-stage Docker build for optimized image size
- 🛠 Node.js backend with Express
- 🔥 Production-ready NGINX config for serving frontend assets
- 📦 Builds frontend with `npm run build`
- 🔀 Simple REST API with JSON support

---

## 📂 Project Structure

```
.
├── Dockerfile
├── nginx.conf
├── app.js
├── package.json
├── package-lock.json
└── [frontend build files]
```

---

## 🧪 API Endpoints

| Method | Endpoint     | Description                    |
|--------|--------------|--------------------------------|
| GET    | `/`          | Health check (Hello, World!)   |
| GET    | `/users`     | Returns a list of users        |
| POST   | `/users`     | Creates a new user (JSON body) |

---

## 🧱 Dockerfile Overview

- **Stage 1 (build-stage)**: Installs dependencies and builds the application.
- **Stage 2**: Uses the built app and runs it with Node.js inside a clean image.

---

## 📦 Build & Run

### 1. **Build the Docker image**
```bash
docker build -t my-node-app .
```

### 2. **Run the container**
```bash
docker run -p 80:80 my-node-app
```

> App will be accessible at `http://localhost/` and the API will respond on port 3000 internally.

---

## 🖥️ NGINX Configuration

The provided `nginx.conf` is tailored for single-page frontend apps like those built with React, Vue, or Angular. It handles client-side routing by falling back to `index.html`.

---

## 🧰 Requirements

- Docker
- Node.js & npm (for local testing)

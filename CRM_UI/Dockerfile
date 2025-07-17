# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --verbose
COPY . .
RUN npm run build --prod

# Stage 2: Serve
# FROM nginx:alpine
# COPY --from=builder /app/dist/crm-portal /usr/share/nginx/html
# EXPOSE 80

CMD ['ng', "serve", "--host", "0.0.0.0"]
EXPOSE 4200
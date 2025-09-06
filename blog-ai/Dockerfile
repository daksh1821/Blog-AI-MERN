# Use Node.js 18
FROM node:18 as build

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Build React app
COPY . .
RUN npm run build

# Use Nginx to serve
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

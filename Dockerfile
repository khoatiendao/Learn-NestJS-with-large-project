FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Debug: List files in dist directory
RUN ls -la dist/

# Expose port
EXPOSE 3000

# Start với đường dẫn chính xác
CMD ["node", "dist/src/main"]
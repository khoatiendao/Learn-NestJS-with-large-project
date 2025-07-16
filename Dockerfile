# Use Node.js version 20 as the base image
FROM node:20

# Set working directory
WORKDIR /travel/myapp/dist/src

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the application
RUN npm run build

# Default command
CMD ["node", "main.js"]
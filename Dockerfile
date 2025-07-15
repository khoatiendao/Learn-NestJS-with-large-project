# Use Node.js version 20 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR dist/src/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Run the application
CMD ["node", "main.js"]
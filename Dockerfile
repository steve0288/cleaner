# Use an official Node.js runtime as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install project dependencies using yarn
RUN yarn install

# Copy the entire project to the container
COPY . .

# Build the Vue.js app
RUN yarn build

# Use a lightweight web server as the base image
FROM nginx:alpine

# Define a mount point for the local volume
#VOLUME ["/usr/share/nginx/html"]

# Copy the built Vue.js app from the previous build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the container's port
EXPOSE 80

# Start the NGINX web server
CMD ["nginx", "-g", "daemon off;"]

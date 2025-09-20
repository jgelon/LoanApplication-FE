# Stage 1: Build the Angular application
FROM node:22-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application for production
# Adjust the output path if your build output is different (e.g., dist/your-app-name)
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built Angular app from the build stage to Nginx's HTML directory
# Replace 'your-app-name' with the actual name of your Angular project's output folder inside 'dist'
COPY --from=build /app/dist/loanapplication /usr/share/nginx/html

# Optional: Copy a custom Nginx configuration if you have one
# For most Angular apps, the default Nginx config is fine, but you might need this for routing.
# If you create a 'nginx' folder in your project root with 'default.conf' inside:
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (default Nginx port)
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
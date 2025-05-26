# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Run svelte-kit sync to generate necessary TypeScript configuration
RUN yarn svelte-kit sync

# Build the application
#RUN npm run build
#RUN npm exec svelte-kit sync && npm run build

# Expose the port the app runs on
EXPOSE 5173

ENV CHOKIDAR_USEPOLLING=true

# Start the application
CMD ["yarn", "dev", "--host", "0.0.0.0"]
#CMD ["npm", "run", "preview"]

#docker run -it --rm -p 5173:5173 -v ${PWD}:/app -v svelte-modules:/app/node_modules --name svelte-dev svelte:dev

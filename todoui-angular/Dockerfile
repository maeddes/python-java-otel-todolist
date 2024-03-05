FROM docker.io/node:lts AS builder

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

FROM docker.io/node:lts-slim
ENV TZ=Europe/Berlin
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available
COPY package*.json ./
# If you are building your code for production
RUN npm ci --only=production --ignore-scripts

# Copy from builder docker container
# Bundle app source
COPY --from=builder /app/dist/todoui-angular .
# bind port
EXPOSE 4000
# start server
CMD [ "node", "server/server.mjs" ]

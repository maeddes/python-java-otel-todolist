FROM docker.io/node:lts AS builder
# define build arguments
ARG STAGE=development
# default max RAM is 16GB
ARG MAX_NODE_RAM=16384

WORKDIR /app
COPY . .

RUN npm ci

RUN node --max_old_space_size=${MAX_NODE_RAM} node_modules/@angular/cli/bin/ng build --configuration ${STAGE} --extract-licenses

FROM docker.io/node:hydrogen-slim
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
COPY --from=builder /app/dist/todoui-angular/server .
# bind port
EXPOSE 4000
# start server
CMD [ "node", "server.mjs" ]

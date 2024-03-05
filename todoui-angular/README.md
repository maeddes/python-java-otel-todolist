# TodouiAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Docker
The `Dockerfile` contains a setup where in the first step the application is built and in the second, the artifacts are being copied to the actual running container.

### Build
Run `docker build -t todo-ui .` to build the application.

### Run
Run `docker run -d --env API_URL=https://example.url.com -p 4000:4000 todo-ui` to start the application on port `4000`.

### Change ENV variable
To change the API URL (`API_URL`), the container has to be stopped and rerun with a new value for the URL. The application will show the current URL on the landing page. 

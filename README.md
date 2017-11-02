# Hooplife

SMU Fall 2017 DB/GUI Project

## Dev Envrionment

Make sure to run `ng build --prod` in the frontend folder before doing anything

These commands are to be run in the top level 'endlist' folder.

`npm run setup`: Gets your project ready for the docker containers. This only needs to be run once.

`npm run install`: This runs all the installations needed for this project.

### Docker Scripts

These commands are to be run in the top level 'endlist' folder. Docker and docker-compose must be installed for this to work

`npm run docker-start`: Starts the docker containers. The production build of the website can be accessed from localhost:80. To watch for changes in dev mode, just run `ng serve` within the frontend folder and go to localhost:4200. The backend api can be accessed from localhost:80/backend/public.

`npm run docker-stop`: Stops the docker containers.

`npm run docker-prod`: Starts the docker containers in production mode. The frontend is configured to be accessed from endlist.fun and the backend from api.endlist.fun.

### Testing

`npm test`: Runs tests for both the fronend and backend.

`npm run test-frontend`: Runs tests for the frontend using jest.

`npm run test-backend`: Runs tests for the backend using phpunit.

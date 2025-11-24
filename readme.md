## To Validate Input in Express.js
https://www.digitalocean.com/community/tutorials/how-to-handle-form-inputs-efficiently-with-express-validator-in-express-js

## To Take POST request always use body-parser and in POSTMAN use raw json

## Question Regarding Docker not reflecting code changes
Use  CHOKIDAR_USEPOLLING: "true" CHOKIDAR_INTERVAL: "100" it will check for code changes
http://stackoverflow.com/questions/44643045/running-development-server-with-create-react-app-inside-of-a-docker-container
##
Can lead to high cpu usage


## How to Push Image from cicd
```
uses: docker/login-action@v3
For Login Purpose

uses: docker/build-push-action@v4
To Build and Push Image
```
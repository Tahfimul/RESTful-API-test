//import http package
const http = require('http');

//import app.js
const app = require('./app');

//set port for server using environment variable, if not available use hardcoded value
const port = process.env.PORT || 3000;

//create server using http package and pass app.js
const server = http.createServer(app);

//create server listener to listen for port
server.listen(port);

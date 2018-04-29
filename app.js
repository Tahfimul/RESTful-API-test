//Spins up application to handle requests

//import package express
const express = require('express');
//execute express as a function to use functionalities from express package
const app = express();

//middleware function for handling incoming request
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
app.use((req, res, next) => {
  //send json response by setting a status code 200
  res.status(200).json({
      //pass javascript object
      message: 'It works'
  });
});
//set app as a module using exports which converts app to module
//module is a variable which represents current module
module.exports = app;

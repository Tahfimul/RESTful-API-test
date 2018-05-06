//Handler for /products get request

//import express package
const express = require('express');

//import subpackage router from express to handle routes reaching different endpoint with different words
const router = express.Router();

//Register different routes using router package
//middleware function for handling incoming request
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.get('/', (req, res, next)=>{
  //send json response by setting a status code 200
 res.status(200).json({
     //pass javascript object
     message: 'Handling GET requests to /products'
 });
});

//Register different routes using router package
//middleware function for handling incoming request
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.post('/', (req, res, next)=>{
  //send json response by setting a status code 200
 res.status(200).json({
     //pass javascript object
     message: 'Handling POST requests to /products'
 });
});

//Register different routes using router package
//middleware function for handling incoming request
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.get('/:id', (req, res, next)=>{
  const id = req.params.id;
  if (id === 'special') {
    //send json response by setting a status code 201
    res.status(201).json({
       //pass javascript object
      message: 'You discovered the special ID'
    });
  }
});

//set router as a module using exports which converts router to module so that it can be used in other files
//module is a variable which represents current module
module.exports = router;

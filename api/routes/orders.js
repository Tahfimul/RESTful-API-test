//Handler for /orders get request

//import express package
const express = require('express');

//import subpackage router from express to handle routes reaching different endpoint with different words
const router = express.Router();

//Register different routes using router package
//middleware function for handling incoming get request
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.get('/', (req, res, next)=>{
  res.status(201).json({
    message: 'Order was fetched'
  });
});

//Register different routes using router package
//middleware function for handling incoming post request
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.post('/', (req, res, next)=>{
  res.status(201).json({
    message: 'Order Created'
  });
});

//Register different routes using router package
//middleware function for handling incoming get request to /id
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.get('/:id', (req, res, next)=>{
  res.status(201).json({
    message: 'Order details',
    order: req.params.id
  });
});

//Register different routes using router package
//middleware function for handling incoming delete request to /id
//req is to get request
//res is to get response
//next is a function which moves the request to next middleware in line
router.delete('/:id', (req, res, next)=>{
  res.status(201).json({
    message: 'Order deleted',
    order: req.params.id
  })
})

//set router as a module using exports which converts router to module so that it can be used in other files
//module is a variable which represents current module
module.exports = router;

//Spins up application to handle requests

//import package express
const express = require('express');
//execute express as a function to use functionalities from express package
const app = express();

//import products.js
const productRoutes = require('./api/routes/products');
//import orders.js
const orderRoutes = require('./api/routes/orders');

//middleware function for handling incoming request
//only requests that contain "/products" will be handled using products.js handler
app.use('/products',productRoutes);

//middleware function for handling incoming request
//only requests that contain "/orders" will be handled using orders.js handler
app.use('/orders', orderRoutes);

//set app as a module using exports which converts app to module
//module is a variable which represents current module
module.exports = app;

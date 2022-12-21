const express = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const ordersRouter = require('./ordersRouter');
const customersRouter = require('./customersRouter');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); // usar en todas las rutas para usar un path global, se usa normalmente para el versionamiento
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
  router.use('/customers', customersRouter);
}

module.exports = routerApi;

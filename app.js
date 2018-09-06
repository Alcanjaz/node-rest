const express = require('express');
const app = express();

const producRoutes = require('./api/routes/products');
const producOrders = require('./api/routes/orders');

app.use('/products', producRoutes);
app.use('/orders', producOrders);

module.exports = app;
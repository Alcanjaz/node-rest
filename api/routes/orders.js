const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const OrderController = require('../controllers/orders');

router.get('/', checkAuth, OrderController.orders_get_all);

router.post("/", checkAuth, OrderController.orders_create_order);

router.get('/:orderId', checkAuth, OrderController.orders_get_one);

router.delete('/:orderId', checkAuth, OrderController.orders_delete_order);

module.exports = router;
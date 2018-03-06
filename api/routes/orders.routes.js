'use strict';

const express = require("express"),
	  router = express.Router(),
	  checkAuth = require('../middleware/check-auth'),
	  OrdersController = require('../controllers/orders.controller');

// Handle incoming GET requests to /orders
router.get("/", checkAuth, OrdersController.orders_get_all);

router.post("/", checkAuth, OrdersController.orders_create_order);

router.get("/:orderId", checkAuth, OrdersController.orders_get_order);

router.delete("/:orderId", checkAuth, OrdersController.orders_delete_order);

module.exports = router;

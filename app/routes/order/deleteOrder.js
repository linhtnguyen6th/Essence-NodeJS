//import thư viện express
const express = require("express");

//import middleware
const { orderMiddleware } = require("../../middlewares/orderMiddleware");

//import controller
const { deleteOrderByCustomerId } = require("../../controllers/order/deleteOrder");


//khởi tạo router
const deleteOrderByCustomerIdRouter = express.Router();

//sử dụng middleware
deleteOrderByCustomerIdRouter.use(orderMiddleware);

// D - Delete order by customerId
deleteOrderByCustomerIdRouter.delete("/customers/:customerId/orders/:orderId", deleteOrderByCustomerId);

//export router thành 1 module
module.exports = { deleteOrderByCustomerIdRouter };
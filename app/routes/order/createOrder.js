//import thư viện express
const express = require("express");

//import middleware
const { orderMiddleware } = require("../../middlewares/orderMiddleware");

//import controller
const { createOrderByCustomerId } = require("../../controllers/order/createOrder");

//khởi tạo router
const createOrderByCustomerIdRouter = express.Router();

//sử dụng middleware
createOrderByCustomerIdRouter.use(orderMiddleware);

//C - Create order by customerId
createOrderByCustomerIdRouter.post("/customers/:customerId/orders", createOrderByCustomerId);


//export router thành 1 module
module.exports = { createOrderByCustomerIdRouter };
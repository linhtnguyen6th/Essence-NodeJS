//import thư viện express
const express = require("express");

//import middleware
const { orderMiddleware } = require("../../middlewares/orderMiddleware");

//import controller
const { getAllOrderByCustomerId } = require("../../controllers/order/getAllOrder");

//khởi tạo router
const getAllOrderByCustomerIdRouter = express.Router();

//sử dụng middleware
getAllOrderByCustomerIdRouter.use(orderMiddleware);

//R - Get all order by customerId
getAllOrderByCustomerIdRouter.get("/customers/:customerId/orders", getAllOrderByCustomerId);


//export router thành 1 module
module.exports = { getAllOrderByCustomerIdRouter };
//import thư viện express
const express = require("express");

//import middleware
const { orderMiddleware } = require("../../middlewares/orderMiddleware");

//import controller
const { getOrderByOrderId } = require("../../controllers/order/getOrderById");

//khởi tạo router
const getOrderByOrderIdRouter = express.Router();

//sử dụng middleware
getOrderByOrderIdRouter.use(orderMiddleware);

//R - Get order by orderId
getOrderByOrderIdRouter.get("/orders/:orderId", getOrderByOrderId);


//export router thành 1 module
module.exports = { getOrderByOrderIdRouter };
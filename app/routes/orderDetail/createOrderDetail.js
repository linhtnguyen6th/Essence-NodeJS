//import thư viện express
const express = require("express");

//import controller
const { createOrderDetailByOrderId } = require("../../controllers/orderDetail/createOrderDetail");

//import middleware
const { orderDetailMiddleware } = require("../../middlewares/orderDetailMiddleware");

//khởi tạo router
const createOrderDetailByOrderIdRouter = express.Router();

//sử dụng middleware
createOrderDetailByOrderIdRouter.use(orderDetailMiddleware);

//C - Create orderDetail by orderId
createOrderDetailByOrderIdRouter.post("/orders/:orderId/orderDetails", createOrderDetailByOrderId);



//export router thành 1 module
module.exports = { createOrderDetailByOrderIdRouter };
//import thư viện express
const express = require("express");

//import middleware
const { orderDetailMiddleware } = require("../../middlewares/orderDetailMiddleware");

//import controller
const { getAllOrderDetailByOrderId } = require("../../controllers/orderDetail/getAllOrderDetail");

//khởi tạo router
const getAllOrderDetailByOrderIdRouter = express.Router();

//sử dụng middleware
getAllOrderDetailByOrderIdRouter.use(orderDetailMiddleware);


//R - Get all order detail by orderId
getAllOrderDetailByOrderIdRouter.get("/orders/:orderId/orderDetails", getAllOrderDetailByOrderId);

//export router thành 1 module
module.exports = { getAllOrderDetailByOrderIdRouter };
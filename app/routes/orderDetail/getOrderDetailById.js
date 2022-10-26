//import thư viện express
const express = require("express");

//import middleware
const { orderDetailMiddleware } = require("../../middlewares/orderDetailMiddleware");

//import controller
const { getOrderDetailById } = require("../../controllers/orderDetail/getOrderDetailById")

//khởi tạo router
const getOrderDetailByIdRouter = express.Router();

//sử dụng middleware
getOrderDetailByIdRouter.use(orderDetailMiddleware);

//R - Get order detail by id
getOrderDetailByIdRouter.get("/orderDetails/:orderDetailsId", getOrderDetailById);

//export router thành 1 module
module.exports = { getOrderDetailByIdRouter };
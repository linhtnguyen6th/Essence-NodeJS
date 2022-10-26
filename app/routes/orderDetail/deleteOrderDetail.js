//import thư viện express
const express = require("express");

//import controller
const { deleteOrderDetailByOrderId } = require("../../controllers/orderDetail/deleteOrderDetail");

//import middleware
const { orderDetailMiddleware } = require("../../middlewares/orderDetailMiddleware");

//khởi tạo router
const deleteOrderDetailByOrderIdRouter = express.Router();

//sử dụng middleware
deleteOrderDetailByOrderIdRouter.use(orderDetailMiddleware);

//D - delete order detail by orderId
deleteOrderDetailByOrderIdRouter.delete("/orders/:orderId/orderDetails/:orderDetailsId", deleteOrderDetailByOrderId);



//export router thành 1 module
module.exports = { deleteOrderDetailByOrderIdRouter };
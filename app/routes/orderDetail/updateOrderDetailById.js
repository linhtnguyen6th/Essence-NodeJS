//import thư viện express
const express = require("express");

//import controller
const { updateOrderDetailById } = require("../../controllers/orderDetail/updateOrderDetailById");

//import middleware
const { orderDetailMiddleware } = require("../../middlewares/orderDetailMiddleware");

//khởi tạo router
const updateOrderDetailByOrderIdRouter = express.Router();

//sử dụng middleware
updateOrderDetailByOrderIdRouter.use(orderDetailMiddleware);

//U - update order detail by id
updateOrderDetailByOrderIdRouter.put("/orderDetails/:orderDetailsId", updateOrderDetailById);


//export router thành 1 module
module.exports = { updateOrderDetailByOrderIdRouter };
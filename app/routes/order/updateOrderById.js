//import thư viện express
const express = require("express");

//import middleware
const { orderMiddleware } = require("../../middlewares/orderMiddleware");

//import controller
const { updateOrderByOrderId } = require("../../controllers/order/updateOrderById");

//khởi tạo router
const updateOrderByOrderIdRouter = express.Router();

//sử dụng middleware
updateOrderByOrderIdRouter.use(orderMiddleware);

//U - Update order by orderId
updateOrderByOrderIdRouter.put("/orders/:orderId", updateOrderByOrderId);


//export router thành 1 module
module.exports = { updateOrderByOrderIdRouter };
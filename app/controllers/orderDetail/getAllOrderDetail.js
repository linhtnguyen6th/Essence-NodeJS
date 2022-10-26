//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderModel = require("../../models/order");

//R - Get all order detail by orderId
const getAllOrderDetailByOrderId = (req, res) => {
    //B1: Thu thập dữ liệu
    let orderId = req.params.orderId;

    //B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: `Order ID is invalid`
        });
    };
    
    //B3: Gọi model xử lý dữ liệu
    orderModel.findById(orderId)  
    .populate("orderDetails")
    .exec((error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        } else {
            return res.status(200).json({
                message: `Get all order details successfully`,
                orderDetails: data
            });
        };
    });
};

//export controller thành 1 module
module.exports = { getAllOrderDetailByOrderId }
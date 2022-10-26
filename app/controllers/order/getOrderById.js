//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderModel = require("../../models/order");
const customerModel = require("../../models/customer");

//R - Get order by orderId - GET method
const getOrderByOrderId = (req, res) => {
    //B1: Thu thập dữ liệu
    let orderId = req.params.orderId;

    //B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: `Order ID is invalid`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    orderModel.findById(orderId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(200).json({
            message: `Get order successfully. Order ID: ${orderId}`,
            orders: data
        });
    });
};


//export controller thành 1 module
module.exports = { getOrderByOrderId }
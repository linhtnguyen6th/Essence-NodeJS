//import thư viện mongoose
const mongoose = require("mongoose");

//import models
const orderModel = require("../../models/order");
const customerModel = require("../../models/customer");

//U - Update one order by orderId - PUT method
const updateOrderByOrderId = (req, res) => {
    //B1: Thu thập dữ liệu từ req
    let orderId = req.params.orderId;
    let body = req.body;
    //B2: Validate dữ liệu
    //orderId
    if(!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: `Order ID is invalid`
        });
    };

    //body
    //cost
    if(!Number.isInteger(body.cost) || body.cost < 0) {
        return res.status(400).json({
            message: `Cost is invalid`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    let updateOrder = {
        orderDate: body.orderDate,
        shippedDate: body.shippedDate,
        note: body.note,
        orderDetails: body.orderDetails,
        cost: body.cost
    }
    orderModel.findByIdAndUpdate(orderId, updateOrder, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(200).json({
            message: `Update order successfully. Order ID: ${orderId}`,
            updateOrder: data
        });
    });
};


//export controller thành 1 module
module.exports = { updateOrderByOrderId };
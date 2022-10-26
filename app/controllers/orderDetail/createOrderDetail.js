//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderDetailModel = require("../../models/orderDetail");
const orderModel = require("../../models/order");

//C - Create order detail by orderId - POST method
const createOrderDetailByOrderId = (req, res) => {
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
    //product
    if(!mongoose.Types.ObjectId.isValid(body.product)) {
        return res.status(400).json({
            message: `Product is invalid`
        });
    };

    //quantity
    if(!Number.isInteger(body.quantity) || body.quantity < 0) {
        return res.status(400).json({
            message: `Quantity is invalid`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    let newOrderDetail = {
        _id: mongoose.Types.ObjectId(),
        product: body.product,
        quantity: body.quantity
    }
    orderDetailModel.create(newOrderDetail, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        } else {
            orderModel.findByIdAndUpdate(orderId,
                {
                    $push: { orderDetails: data._id }
                },
                (error, updatedorder) => {
                    if(error) {
                        return res.status(500).json({
                            message: error.message
                        });
                    } else {
                        return res.status(201).json({
                            message: `Create order detail successfully. Order ID: ${orderId}`,
                            orderDetails: data
                        });
                    };
                }
            );
        };
    });
};



//export controller thành 1 module
module.exports = { createOrderDetailByOrderId }
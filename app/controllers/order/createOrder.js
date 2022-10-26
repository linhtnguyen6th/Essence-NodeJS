//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderModel = require("../../models/order");
const customerModel = require("../../models/customer");

//C - Create order by customerId - POST method
const createOrderByCustomerId = (req, res) => {
    //B1: Thu thập dữ liệu
    let customerId = req.params.customerId
    let body = req.body;

    //B2: Validate dữ liệu
    //customerId
    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({
            message: `Customer ID is invalid`
        });
    }
    //body
    //cost
    if(!Number.isInteger(body.cost) || body.cost < 0) {
        return res.status(400).json({
            message: `Cost is invalid`
        });
    };
    //B3: Gọi model để xử lý dữ liệu
    let newOrder = {
            _id: mongoose.Types.ObjectId(),
            orderDate: body.orderDate,
            shippedDate: body.shippedDate,
            note: body.note,
            orderDetails: body.orderDetails,
            cost: body.cost
    };

    orderModel.create(newOrder, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        } else {
            //Nếu không có lỗi, update thông tin order id vào customer
            customerModel.findByIdAndUpdate(customerId, 
                {
                    $push: { orders: data._id }
                },
                (error, updatedCustomer) => {
                    if(error) {
                        return res.status(500).json({
                            message: error.message
                        });
                    } else {
                        return res.status(201).json({
                            message: `Create order successfully. Customer ID: ${customerId}`,
                            orders: data
                        });
                    };
                }
            );
        };
    });
};

//export controller thành 1 module
module.exports = { createOrderByCustomerId };
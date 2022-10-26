//import thư viện mongoose
const mongoose = require("mongoose");

//import models
const orderModel = require("../../models/order");
const customerModel = require("../../models/customer");

//D - Delete order by customerId
const deleteOrderByCustomerId = (req, res) => {
    //B1: Thu thập dữ liệu
    let customerId = req.params.customerId;
    let orderId = req.params.orderId;

    //B2: Validate dữ liệu
    //customerId
    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({
            message: `Customer ID is invalid`
        });
    };

    //orderId
    if(!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: `Order ID is invalid`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    orderModel.findByIdAndDelete(orderId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        } else {
        // Sau khi xóa 1 order khỏi collection thì cần xóa order id chứa trong collection customer
            customerModel.findByIdAndUpdate(customerId,
                {
                    $pull: { orders: orderId }
                },
                (error, updatedCustomer) => {
                    if(error) {
                        return res.status(500).json({
                            message: error.message
                        }); 
                    } else {
                        return res.status(204).json({
                            message: `Delete order successfully. Customer ID: ${customerId}`
                        });
                    };
                }
            );
        };
    });
};


//export controller thành 1 module 
module.exports = { deleteOrderByCustomerId };

//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderModel = require("../../models/order");
const customerModel = require("../../models/customer");

//R - Get all order by customerId - GET method
const getAllOrderByCustomerId = (req, res) => {
    //B1: Thu thập dữ liệu từ req
    let customerId = req.params.customerId;
    
    //B2: Validate dữ liệu
    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({
            message: `Customer ID is invalid`
        });
    };

    //B3: Gọi model để xử lý dữ liệu
    customerModel.findById(customerId)
    .populate("orders")
    .exec((error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        } else {
            return res.status(200).json({
                message: `Get all order successfully`,
                orders: data
            });
        }
    });
};


//export controller thành 1 module
module.exports = { getAllOrderByCustomerId };
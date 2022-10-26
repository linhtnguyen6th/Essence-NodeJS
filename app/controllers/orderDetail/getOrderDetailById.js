//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderDetailModel = require("../../models/orderDetail");

// R - Get order detail by id
const getOrderDetailById = (req, res) => {
    //B1: Thu thập dữ liệu
    let orderDetailsId = req.params.orderDetailsId;

    //B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(orderDetailsId)) {
        return res.status(400).json({
            message: `Order ID is invalid`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    orderDetailModel.findById(orderDetailsId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(200).json({
            message: `Get order detail successfully. Order detail ID: ${orderDetailsId}`,
            orders: data
        });
    });
};


//export controller thành 1 module
module.exports = { getOrderDetailById }
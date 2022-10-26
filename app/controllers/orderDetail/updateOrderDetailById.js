//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderDetailModel = require("../../models/orderDetail");

//U - update order detail by id
const updateOrderDetailById = (req, res) => {
    //B1: Thu thập dữ liệu
    let orderDetailsId = req.params.orderDetailsId;
    let body = req.body;

    //B2: Validate dữ liệu
    //orderDetailsId
    if(!mongoose.Types.ObjectId.isValid(orderDetailsId)) {
        return res.status(400).json({
            message: `Order Detail ID is invalid`
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
    let updateOrderDetail = {
        product: body.product,
        quantity: body.quantity
    };
    orderDetailModel.findByIdAndUpdate(orderDetailsId, updateOrderDetail, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });    
        };

        return res.status(200).json({
            message: `Update order detail successfully. Order Detail ID: ${orderDetailsId}`,
            orderDetails: data
        });
    });
};




//export controller thành 1 module
module.exports = { updateOrderDetailById };
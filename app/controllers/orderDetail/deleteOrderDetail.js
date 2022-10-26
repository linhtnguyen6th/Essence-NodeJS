//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const orderDetailModel = require("../../models/orderDetail");
const orderModel = require("../../models/order");


// D - Delete order detail by orderId
const deleteOrderDetailByOrderId = (req, res) => {
    //B1: Thu thập dữ liệu
    let orderId = req.params.orderId;
    let orderDetailsId = req.params.orderDetailsId;

    //B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({
            message: `Order ID is invalid`
        });
    };

    if (!mongoose.Types.ObjectId.isValid(orderDetailsId)) {
        return res.status(400).json({
            message: `Order Detail ID is invalid`
        });
    };


    //B3: Gọi model xử lý dữ liệu
    orderDetailModel.findByIdAndDelete(orderDetailsId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        } else {
            //sau khi xóa 1 order detail khỏi collection thì cần xoát thêm orderDetailsId trong user chứa nó
            orderModel.findByIdAndUpdate(orderId, 
                {
                    $pull: { orderDetails: orderDetailsId }
                },
                (error, updatedOrder) => {
                    if(error) {
                        return res.status(500).json({
                            message: error.message
                        });
                    } else {
                        return res.status(204).json({
                            message: `Delete order detail successfully. Order ID: ${orderId}`
                        });
                    };
                }
            );
        };
    });
};




//export controller thành 1 module
module.exports = { deleteOrderDetailByOrderId };
//import thư viện mongoose
const mongoose = require("mongoose");
//import models
const customerModel = require("../../models/customer");

//D - Delete product type by id
const deleteCustomerById = (req, res) => {
    //B1: Thu thập dữ liệu
    let customerId = req.params.customerId;
    //B2: Vadlite dữ liệu
    //customerId
    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({
            message: "Customer ID is invalid!"
        });
    };

    //B3: Gọi model xử lý dữ liệu
    customerModel.findByIdAndDelete(customerId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        }; 

        return res.status(204).json({
            message: `Delete customer successfully. Customer ID: ${customerId}`
        });
    });
};


//expơrt controller thành 1 module
module.exports = { deleteCustomerById };
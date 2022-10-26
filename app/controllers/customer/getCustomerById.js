//import thư viện mongoose
const mongoose = require("mongoose");
//import models
const customerModel = require("../../models/customer");

//R - Get customer by id
const getCustomerById = (req, res) => {
    //B1: Thu thập dữ liệu
    let customerId = req.params.customerId;
    //B2: Validate dữ liệu
    //productTypeId
    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({
            message: "Customer ID is invalid!"
        });
    };

    //B3: Gọi model xử lý dữ liệu
    customerModel.findById(customerId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(201).json({
            message: `Get customer by id successfully. Customer ID: ${customerId}`,
            productTypes: data
        });
    });

};

//expơrt controller thành 1 module
module.exports = { getCustomerById };
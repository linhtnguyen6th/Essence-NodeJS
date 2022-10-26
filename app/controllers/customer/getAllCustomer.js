//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const customerModel = require("../../models/customer");

//R - Get all customer
const getAllCustomer = (req, res) => {
    // B1: Thu thập dữ liệu từ req
    // B2: Validate dữ liệu
    // B3: Gọi model xử lý dữ liệu
    customerModel.find((error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(200).json({
            message: `Get all customer successfully`,
            productTypes: data
        });
    });
};

//export controller thành 1 module
module.exports = { getAllCustomer };
//import thư viện mongoose
const mongoose = require("mongoose");
//import models
const customerModel = require("../../models/customer");

//U - Update customer by id
const updateCustomerById = (req, res) => {
    //B1: Thu thập dữ liệu
    let customerId = req.params.customerId;
    let body = req.body;

    //B2: Validate dữ liệu
    //customerId
    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({
            message: "Customer ID is invalid!"
        });
    };

    //body
    //fullName
    if(!body.fullName) {
        return res.status(400).json({
            message: `Full name is required!`
        });
    };

    //phone
    if(!body.phone) {
        return res.status(400).json({
            message: `Phone is required!`
        });
    };

    //email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
        return res.status(400).json({
            message: `Email is invalid`
        });
    };


    //B3: Gọi model xử lý dữ liệu
    let updateCustomer = {
            fullName: body.fullName,
            phone: body.phone,
            email: body.email,
            address: body.address,
            city: body.city,
            country: body.country,
            orders: body.orders   
    };

    customerModel.findByIdAndUpdate(customerId, updateCustomer, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(200).json({
            message: `Update customer by id successfully. Customer ID: ${customerId}`,
            updateCustomer: data
        });
    });
};


//expơrt controller thành 1 module
module.exports = { updateCustomerById };
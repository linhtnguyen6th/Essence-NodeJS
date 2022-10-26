//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const customerModel = require("../../models/customer");

//C - Create product type - POST method
const createCustomer = (req, res) => {
    //B1: Thu thập dữ liệu
    let body = req.body;

    //B2: Validate dữ liệu
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

    //B3: Gọi model để xử lý dữ liệu
    let newCustomer = {
            _id: mongoose.Types.ObjectId(),
            fullName: body.fullName,
            phone: body.phone,
            email: body.email,
            address: body.address,
            city: body.city,
            country: body.country,
            orders: body.orders   
    };

    customerModel.create(newCustomer, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(201).json({
            message: `Create customer successfully`,
            newCustomer: data
        });
    })
};

//export controller thành 1 module
module.exports = { createCustomer };
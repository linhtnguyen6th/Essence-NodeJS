//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const productTypeModel = require("../../models/productType");

//C - Create product type - POST method
const createProductType = (req, res) => {
    //B1: Thu thập dữ liệu
    let body = req.body;

    //B2: Validate dữ liệu
    if(!body.name) {
        return res.status(400).json({
            message: `Name is required!`
        });
    };

    //B3: Gọi model để xử lý dữ liệu
    let newProductType = {
        _id: mongoose.Types.ObjectId(),
        name: body.name,
        description: body.description
    };

    productTypeModel.create(newProductType, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(201).json({
            message: `Create product type successfully`,
            newProductType: data
        });
    })
};

//export controller thành 1 module
module.exports = { createProductType };
//import thư viện mongoose
const mongoose = require("mongoose");
//import models
const productTypeModel = require("../../models/productType");

//R - Get product type by id
const getProductTypeById = (req, res) => {
    //B1: Thu thập dữ liệu
    let productTypeId = req.params.productTypeId;
    //B2: Validate dữ liệu
    //productTypeId
    if(!mongoose.Types.ObjectId.isValid(productTypeId)) {
        return res.status(400).json({
            message: "Product Type ID is invalid!"
        });
    };

    //B3: Gọi model xử lý dữ liệu
    productTypeModel.findById(productTypeId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(201).json({
            message: `Get product type by id successfully. Product Type ID: ${productTypeId}`,
            productTypes: data
        });
    });

};

//expơrt controller thành 1 module
module.exports = { getProductTypeById };
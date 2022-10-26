//import thư viện mongoose
const mongoose = require("mongoose");
//import models
const productTypeModel = require("../../models/productType");

//U - Update product type by id
const updateProductTypeById = (req, res) => {
    //B1: Thu thập dữ liệu
    let productTypeId = req.params.productTypeId;
    let body = req.body;

    //B2: Validate dữ liệu
    //productTypeId
    if(!mongoose.Types.ObjectId.isValid(productTypeId)) {
        return res.status(400).json({
            message: "Product Type ID is invalid!"
        });
    };

    //productTypeBody
    if(body.name !== undefined && !body.name) {
        return res.status(400).json({
            message: `Name is required!`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    let updateProductType = {
        name: body.name,
        description: body.description
    };

    productTypeModel.findByIdAndUpdate(productTypeId, updateProductType, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(200).json({
            message: `Update Product Type successfully. Product Type ID: ${productTypeId}`,
            updateProductType: data
        });
    });
};


//expơrt controller thành 1 module
module.exports = { updateProductTypeById };
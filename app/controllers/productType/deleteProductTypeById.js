//import thư viện mongoose
const mongoose = require("mongoose");
//import models
const productTypeModel = require("../../models/productType");

//D - Delete product type by id
const deleteProductTypeById = (req, res) => {
    //B1: Thu thập dữ liệu
    let productTypeId = req.params.productTypeId;
    //B2: Vadlite dữ liệu
    //productTypeId
    if(!mongoose.Types.ObjectId.isValid(productTypeId)) {
        return res.status(400).json({
            message: "Product Type ID is invalid!"
        });
    };

    //B3: Gọi model xử lý dữ liệu
    productTypeModel.findByIdAndDelete(productTypeId, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        }; 

        return res.status(204).json({
            message: `Delete product type successfully. Product type ID: ${productTypeId}`
        });
    });
};


//expơrt controller thành 1 module
module.exports = { deleteProductTypeById };
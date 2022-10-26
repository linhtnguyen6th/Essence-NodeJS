//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const productModel = require ("../../models/product");

//R - Get product by id
const deleteProductById = (req, res) => {
    //B1: Thu thập dữ liệu
    let productId = req.params.productId;

    //B2: Validate dữ liệu
    if(!mongoose.Types.ObjectId(productId)) {
        return res.status(400).json({
            message: `Product ID is invalid`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    productModel.findByIdAndDelete(productId, (error, data) => {
        if (error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(204).json({
            message: `Delete product by id successfully. Product ID: ${productId}`,
        });
    });
}; 



//export controller thành 1 module
module.exports = { deleteProductById }; 
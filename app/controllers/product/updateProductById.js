//import thư viện mongoose
const mongoose = require("mongoose");

//import model
const productModel = require ("../../models/product");

//U - Update product by id
const updateProductById = (req, res) => {
    //B1: Thu thập dữ liệu
    let productId = req.params.productId;
    let body = req.body;

    //B2: Validate dữ liệu
    if(!mongoose.Types.ObjectId(productId)) {
        return res.status(400).json({
            message: `Product ID is invalid`
        });
    };

    //name
    if (body.name !== undefined && !body.name) {
        return res.status(400).json({
            message: `Name is required`
        });
    };
    //type
    if (!mongoose.Types.ObjectId(body.type)) {
        return res.status(400).json({
            message: `Type is invalid`
        });
    };
    //imageUrl
    if (body.imageUrl !== undefined && !body.imageUrl) {
        return res.status(400).json({
            message: `Image URL is required`
        });
    };
    //buyPrice
    if (body.buyPrice !== undefined && !body.buyPrice) {
        return res.status(400).json({
            message: `Buy Price is required`
        });
    };
    if (!Number.isInteger(body.buyPrice) || body.buyPrice < 0) {
        return res.status(400).json({
            message: `Buy Price is invalid`
        });
    };
    //promotionPrice
    if (body.promotionPrice !== undefined && !body.promotionPrice) {
        return res.status(400).json({
            message: `Promotion Price is required`
        });
    };
    if (!Number.isInteger(body.promotionPrice) || body.promotionPrice < 0 || body.promotionPrice > body.buyPrice) {
        return res.status(400).json({
            message: `Promotion Price is invalid`
        });
    };
    //brand
    if (!body.brand) {
        return res.status(400).json({
            message: `Brand is required`
        });
    };
    //size
    if (!body.size) {
        return res.status(400).json({
            message: `Size is required`
        });
    };
    //color
    if (!body.color) {
        return res.status(400).json({
            message: `Color is required`
        });
    };

    //B3: Gọi model xử lý dữ liệu
    let updateProduct = {
        name: body.name,
        description: body.description,
        type: body.type,
        imageUrl: body.imageUrl,
        buyPrice: body.buyPrice,
        promotionPrice: body.promotionPrice,
        brand: body.brand,
        size: body.size,
        color: body.color
    };


    productModel.findByIdAndUpdate(productId, updateProduct, (error, data) => {
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };

        return res.status(201).json({
            message: `Update product successfully. Product ID: ${productId}`,
            newProduct: data
        });
    });
};

//export controller thành 1 module
module.exports = { updateProductById };
//import thư viện express
const express = require("express");

//import middleware 
const { productMiddleware } = require("../../middlewares/productMiddeware");

//import controller
const { deleteProductById } = require("../../controllers/product/deleteProductById");



//khởi tạo router
const deleteProductByIdRouter = express.Router();

//sử dụng middleware
deleteProductByIdRouter.use(productMiddleware);

//D - Delete product by id
deleteProductByIdRouter.delete("/products/:productId", deleteProductById);


//export router thành 1 module
module.exports = { deleteProductByIdRouter };
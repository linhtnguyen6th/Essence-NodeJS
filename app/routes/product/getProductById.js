//import thư viện express
const express = require("express");

//import middleware 
const { productMiddleware } = require("../../middlewares/productMiddeware");

//import controller
const { getProductById } = require("../../controllers/product/getProductById");



//khởi tạo router
const getProductByIdRouter = express.Router();

//sử dụng middleware
getProductByIdRouter.use(productMiddleware);

//R - Get product by id
getProductByIdRouter.get("/products/:productId", getProductById);


//export router thành 1 module
module.exports = { getProductByIdRouter };
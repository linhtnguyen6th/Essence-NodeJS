//import thư viện express
const express = require("express");

//import middleware
const { productMiddleware } = require("../../middlewares/productMiddeware");

//import controller
const { createProduct } = require("../../controllers/product/createProduct");

//khởi tạo router
const createProductRouter = express.Router();

//sử dụng middleware
createProductRouter.use(productMiddleware);

//C - Create product
createProductRouter.post("/products", createProduct);


//export router thành 1 module
module.exports = { createProductRouter };
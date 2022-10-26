//import thư viện express
const express = require("express");

//import middleware
const { productMiddleware } = require("../../middlewares/productMiddeware");

//import controller
const { getAllProduct } = require("../../controllers/product/getAllProduct");

//khởi tạo router
const getAllProductRouter = express.Router();

//sử dụng middleware
getAllProductRouter.use(productMiddleware);

//R - Get all product
getAllProductRouter.get("/products", getAllProduct);


//export router thành 1 module
module.exports = { getAllProductRouter };
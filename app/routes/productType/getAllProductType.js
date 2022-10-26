//import thư viện express
const express = require("express");

//import middleware
const { productTypeMiddleware } = require("../../middlewares/productTypeMiddleware");

//import controller
const { getAllProductType } = require("../../controllers/productType/getAllProductType");

//khởi tạo router
const getAllProductTypeRouter = express.Router();

//sử dụng middleware
getAllProductTypeRouter.use(productTypeMiddleware);

//R - Get all product type
getAllProductTypeRouter.get("/product-types", getAllProductType);


//export router thành 1 module
module.exports = { getAllProductTypeRouter };
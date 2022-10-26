//import thư viện express
const express = require("express");

//import middleware
const { productTypeMiddleware } = require("../../middlewares/productTypeMiddleware");

//import controller
const { getProductTypeById } = require("../../controllers/productType/getProductTypeById");

//khởi tạo router
const getProductTypeByIdRouter = express.Router();

//sử dụng middleware
getProductTypeByIdRouter.use(productTypeMiddleware);

//R - Get product type by id
getProductTypeByIdRouter.get("/product-types/:productTypeId", getProductTypeById);


//export router thành 1 module
module.exports = { getProductTypeByIdRouter };
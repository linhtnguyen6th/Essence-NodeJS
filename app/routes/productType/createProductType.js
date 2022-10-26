//import thư viện express
const express = require("express");

//import middleware
const { productTypeMiddleware } = require("../../middlewares/productTypeMiddleware");

//import controller
const { createProductType } = require("../../controllers/productType/createProductType");

//khởi tạo router
const createProductTypeRouter = express.Router();

//sử dụng middleware
createProductTypeRouter.use(productTypeMiddleware);

//C - Create product type
createProductTypeRouter.post("/product-types", createProductType);


//export router thành 1 module
module.exports = { createProductTypeRouter };
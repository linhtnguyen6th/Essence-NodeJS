//import thư viện express
const express = require("express");

//import middleware
const { productTypeMiddleware } = require("../../middlewares/productTypeMiddleware");

//import controller
const { updateProductTypeById } = require("../../controllers/productType/updateProducTypeById");

//khởi tạo router
const updateProductTypeByIdRouter = express.Router();

//sử dụng middleware
updateProductTypeByIdRouter.use(productTypeMiddleware);

//U - Update product type by id
updateProductTypeByIdRouter.put("/product-types/:productTypeId", updateProductTypeById);


//export router thành 1 module
module.exports = { updateProductTypeByIdRouter };





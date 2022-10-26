//import thư viện express
const express = require("express");

//import middleware
const { productTypeMiddleware } = require("../../middlewares/productTypeMiddleware");

//import controller
const { deleteProductTypeById } = require("../../controllers/productType/deleteProductTypeById");

//khởi tạo router
const deleteProductTypeByIdRouter = express.Router();

//sử dụng middleware
deleteProductTypeByIdRouter.use(productTypeMiddleware);

//D - Delete product type by id
deleteProductTypeByIdRouter.delete("product-types/:productTypeId", deleteProductTypeById);


//export router thành 1 module
module.exports = { deleteProductTypeByIdRouter };
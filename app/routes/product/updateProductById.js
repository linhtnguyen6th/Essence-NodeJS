//import thư viện express
const express = require("express");

//import middleware
const { productMiddleware } = require("../../middlewares/productMiddeware");

//import controller
const { updateProductById } = require("../../controllers/product/updateProductById");

//khởi tạo router
const updateProductByIdRouter = express.Router();

//sử dụng middleware
updateProductByIdRouter.use(productMiddleware);

//U - Update product by id
updateProductByIdRouter.put("/products/:productId", updateProductById);


//export router thành 1 module
module.exports = { updateProductByIdRouter };
//import thư viện express
const express = require("express");

//import middleware
const { customerMiddleware } = require("../../middlewares/customerMiddleware");

//import controller
const { getCustomerById } = require("../../controllers/customer/getCustomerById");

//khởi tạo router
const getCustomerByIdRouter = express.Router();

//sử dụng middleware
getCustomerByIdRouter.use(customerMiddleware);

//R - Get customer by id
getCustomerByIdRouter.get("/customers/:customerId", getCustomerById);


//export router thành 1 module
module.exports = { getCustomerByIdRouter };
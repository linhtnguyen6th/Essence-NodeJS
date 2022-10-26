//import thư viện express
const express = require("express");

//import middleware
const { customerMiddleware } = require("../../middlewares/customerMiddleware");

//import controller
const { getAllCustomer } = require("../../controllers/customer/getAllCustomer");

//khởi tạo router
const getAllCustomerRouter = express.Router();

//sử dụng middleware
getAllCustomerRouter.use(customerMiddleware);

//R - Get all customer
getAllCustomerRouter.get("/customers", getAllCustomer);


//export router thành 1 module
module.exports = { getAllCustomerRouter };
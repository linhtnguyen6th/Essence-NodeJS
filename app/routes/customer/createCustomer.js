//import thư viện express
const express = require("express");

//import middleware
const { customerMiddleware } = require("../../middlewares/customerMiddleware");

//import controller
const { createCustomer } = require("../../controllers/customer/createCustomer");

//khởi tạo router
const createCustomerRouter = express.Router();

//sử dụng middleware
createCustomerRouter.use(customerMiddleware);

//C - Create customer
createCustomerRouter.post("/customers", createCustomer);


//export router thành 1 module
module.exports = { createCustomerRouter };
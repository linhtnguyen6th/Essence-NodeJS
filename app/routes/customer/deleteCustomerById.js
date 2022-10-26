//import thư viện express
const express = require("express");

//import middleware
const { customerMiddleware } = require("../../middlewares/customerMiddleware");

//import controller
const { deleteCustomerById } = require("../../controllers/customer/deleteCustomerById");

//khởi tạo router
const deleteCustomerByIdRouter = express.Router();

//sử dụng middleware
deleteCustomerByIdRouter.use(customerMiddleware);

//D - Delete customer by id
deleteCustomerByIdRouter.delete("/customers/:customerId", deleteCustomerById);


//export router thành 1 module
module.exports = { deleteCustomerByIdRouter };
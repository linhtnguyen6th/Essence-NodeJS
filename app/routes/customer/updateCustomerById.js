//import thư viện express
const express = require("express");

//import middleware
const { customerMiddleware } = require("../../middlewares/customerMiddleware");

//import controller
const { updateCustomerById } = require("../../controllers/customer/updateCustomerById");

//khởi tạo router
const updateCustomerByIdRouter = express.Router();

//sử dụng middleware
updateCustomerByIdRouter.use(customerMiddleware);

//U - Update customer by id
updateCustomerByIdRouter.put("/customers/:customerId", updateCustomerById);


//export router thành 1 module
module.exports = { updateCustomerByIdRouter };





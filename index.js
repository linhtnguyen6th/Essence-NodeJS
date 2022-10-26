//Import thư viện expressjs tương đương import express from "express"; 
const express = require("express");
//Import thư viện mongoose
const mongoose = require("mongoose");
//Import thư viện path
const path = require("path");


//Import schema (models)
const { productTypeSchema } = require("./app/models/productType");
const { productSchema } = require("./app/models/product");
const { customerSchema } = require("./app/models/customer");
const { orderSchema } = require("./app/models/order");
const { orderDetailSchema } = require("./app/models/orderDetail");




//Import router
//Product Type
const { createProductTypeRouter } = require("./app/routes/productType/createProductType");
const { getAllProductTypeRouter } = require("./app/routes/productType/getAllProductType");
const { getProductTypeByIdRouter } = require("./app/routes/productType/getProductTypeById");
const { updateProductTypeByIdRouter } = require("./app/routes/productType/updateProducTypeById");
const { deleteProductTypeByIdRouter } = require("./app/routes/productType/deleteProductTypeById");

//Product
const { createProductRouter } = require("./app/routes/product/createProduct");
const { getAllProductRouter } = require("./app/routes/product/getAllProduct");
const { getProductByIdRouter } = require("./app/routes/product/getProductById");
const { updateProductByIdRouter } = require("./app/routes/product/updateProductById");
const { deleteProductByIdRouter } = require("./app/routes/product/deleteProductById");

//Customer
const { createCustomerRouter } = require("./app/routes/customer/createCustomer");
const { getAllCustomerRouter } = require("./app/routes/customer/getAllCustomer");
const { getCustomerByIdRouter } = require("./app/routes/customer/getCustomerById");
const { updateCustomerByIdRouter } = require("./app/routes/customer/updateCustomerById");
const { deleteCustomerByIdRouter } = require("./app/routes/customer/deleteCustomerById");

//Order
const { createOrderByCustomerIdRouter } = require("./app/routes/order/createOrder");
const { getAllOrderByCustomerIdRouter } = require("./app/routes/order/getAllOrder");
const { getOrderByOrderIdRouter } = require("./app/routes/order/getOrderById");
const { updateOrderByOrderIdRouter } = require("./app/routes/order/updateOrderById");
const { deleteOrderByCustomerIdRouter } = require("./app/routes/order/deleteOrder");

//OrderDetail
const { createOrderDetailByOrderIdRouter } = require("./app/routes/orderDetail/createOrderDetail");
const { getAllOrderDetailByOrderIdRouter } = require("./app/routes/orderDetail/getAllOrderDetail");
const { getOrderDetailByIdRouter } = require("./app/routes/orderDetail/getOrderDetailById");
const { updateOrderDetailByOrderIdRouter } = require("./app/routes/orderDetail/updateOrderDetailById");
const { deleteOrderDetailByOrderIdRouter } = require("./app/routes/orderDetail/deleteOrderDetail");






//Khởi tạo 1 app express 
const app = express();

//Khai báo cổng chạy project
const port = 8000;

//sử dụng được body json
app.use(express.json());

//sử dụng body unicode để đọc tiếng Việt
app.use(express.urlencoded({
    extended:true
}));

//sử dụng static() để render các nội dung tĩnh (như ảnh, file css)
// app.use(express.static(__dirname + "/views"));


//kết nối với mongoDB
mongoose.connect("mongodb://localhost:27017/CRUD_Shop24h_NodeJS", function(error) { // uri =  mongodb://localhost:27017/{Database_Name}
    if (error) throw error;
    console.log("Successfully connected to MongoDB");
});





//***Main code starts here
app.get("/", (req, res) => {
    res.status(200).json({
        message: `Hello World !!!`
    });
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname + "/views/index.html")); // render front-end
});

// Xử lý CORS Middleware validate
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next(); 
});



//sử dụng router
//product type
app.use("/", createProductTypeRouter); 
app.use("/", getAllProductTypeRouter); 
app.use("/", getProductTypeByIdRouter); 
app.use("/", updateProductTypeByIdRouter); 
app.use("/", deleteProductTypeByIdRouter); 

//product
app.use("/", createProductRouter); 
app.use("/", getAllProductRouter); 
app.use("/", getProductByIdRouter); 
app.use("/", updateProductByIdRouter); 
app.use("/", deleteProductByIdRouter); 

//customer
app.use("/", createCustomerRouter); 
app.use("/", getAllCustomerRouter); 
app.use("/", getCustomerByIdRouter); 
app.use("/", updateCustomerByIdRouter); 
app.use("/", deleteCustomerByIdRouter); 


//order
app.use("/", createOrderByCustomerIdRouter); 
app.use("/", getAllOrderByCustomerIdRouter); 
app.use("/", getOrderByOrderIdRouter); 
app.use("/", updateOrderByOrderIdRouter); 
app.use("/", deleteOrderByCustomerIdRouter); 

//orderDetail
app.use("/", createOrderDetailByOrderIdRouter); 
app.use("/", getAllOrderDetailByOrderIdRouter); 
app.use("/", getOrderDetailByIdRouter); 
app.use("/", updateOrderDetailByOrderIdRouter); 
app.use("/", deleteOrderDetailByOrderIdRouter); 




//listen on port
app.listen(port, () => {
    console.log("App listening on port: ", port);
});

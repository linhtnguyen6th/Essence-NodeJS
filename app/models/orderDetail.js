//import thư viện mongoose
const mongoose = require("mongoose");

//khai báo Schema
const Schema = mongoose.Schema;

//khai báo model
const orderDetailSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    quantity: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

//export model thành 1 module
module.exports = mongoose.model("orderDetails", orderDetailSchema);
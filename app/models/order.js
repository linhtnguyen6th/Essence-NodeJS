//import thư viện mongoose
const mongoose = require("mongoose");

//khai báo Schema
const Schema = mongoose.Schema;

//khai báo model
const orderSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    shippedDate: {
        type: Date
    },
    note: {
        type: String
    },
    orderDetails: [{
        type: Schema.Types.ObjectId,
        ref: "orderDetails"
    }],
    cost: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

//export model thành 1 module
module.exports = mongoose.model("order", orderSchema);
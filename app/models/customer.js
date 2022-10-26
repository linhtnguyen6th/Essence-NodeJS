//import thư viện mongoose
const mongoose = require("mongoose");

//khai báo Schema
const Schema = mongoose.Schema;

//khai báo model
const customerSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "order"
    }]
}, {
    timestamps: true
});

//export model thành 1 module
module.exports = mongoose.model("customer", customerSchema);
//import thư viện mongoose
const mongoose = require("mongoose");

//khai báo Schema
const Schema = mongoose.Schema;

//khai báo model
const productSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: "productType",
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    buyPrice: {
        type: Number,
        required: true
    },
    promotionPrice: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//export model thành 1 module
module.exports = mongoose.model("product", productSchema);
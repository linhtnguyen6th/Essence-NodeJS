//import thư viện mongoose
const mongoose = require("mongoose");

//khai báo Schema
const Schema = mongoose.Schema;

//khai báo model
const productTypeSchema = new Schema({
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
    }
}, {
    timestamps: true
});

//export model thành 1 module
module.exports = mongoose.model("productType", productTypeSchema);
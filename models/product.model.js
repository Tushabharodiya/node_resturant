let mongoose = require("mongoose")


let productSchema = new mongoose.Schema({
    product_name: {
        type: String,
    },
    price: {
        type: Number,
    },
    desc: {
        type: String,
    }
})


let product = mongoose.model("productSchema", productSchema);

module.exports = product;




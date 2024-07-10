const { orderSchema } = require("../models")
const { getData, postData } = require("../Query/query")

let getOrder = () => {
    return orderSchema.find().populate("user").populate("product")
}

let addorder = (body) => {
    return postData(orderSchema, body)
}


module.exports = { getOrder, addorder }
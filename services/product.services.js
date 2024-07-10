const { productSchema } = require("../models")
const { getData, postData, deleteData, findDataId, updateData } = require("../Query/query")

let featchProduct = () => {
    return getData(productSchema)
}

let createProduct = (body) => {
    return postData(productSchema, body)
}

let findAndDelete = (id) => {
    return deleteData(productSchema, id)
}

let findByProductId = (id) => {
    return findDataId(productSchema, id)
}

let findIdAndUpdate = (id, body) => {
    return updateData(productSchema, id, body)
}

module.exports = { featchProduct, createProduct, findAndDelete, findByProductId, findIdAndUpdate }
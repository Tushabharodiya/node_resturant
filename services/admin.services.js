const { adminSchema } = require("../models")
const { getData, postData, dublicateData, dataFindAndDelete, findDataId, updateData, deleteData } = require("../Query/query")



let featchAdmin = () => {
    return getData(adminSchema)
}

let createAdmin = (body) => {
    return postData(adminSchema, body)
}

let dublicateAdmin = (email) => {
    return dublicateData(adminSchema, { email })
}

let findIdAndDelete = (id) => {
    return deleteData(adminSchema, id)
}

let findIdAdmin = (id) => {
    return findDataId(adminSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateData(adminSchema, id, body)
}


module.exports = { featchAdmin, createAdmin, dublicateAdmin, findIdAndDelete, findIdAdmin, findByIdAndUpdate }
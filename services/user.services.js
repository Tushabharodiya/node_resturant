const { userSchema } = require("../models")
const { getData, postData, deleteData, findDataId, updateData } = require("../Query/query")



let featchUser = () => {
    return getData(userSchema)
}

let createUser = (body) => {
    return postData(userSchema, body)
}

let userFindAndDelete = (id) => {
    return deleteData(userSchema, id)
}

let userFindAndId = (id) => {
    return findDataId(userSchema, id)
}

let userFindAndUpdate = (id, body) => {
    return updateData(userSchema, id, body)
}


module.exports = { featchUser, createUser, userFindAndDelete, userFindAndId ,userFindAndUpdate}
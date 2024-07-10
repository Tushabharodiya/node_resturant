


let getData = (schema) => {
    return schema.find()
}

let postData = (schema, body) => {
    return schema.create(body)
}

let dublicateData = (schema, data) => {
    return schema.findOne(data)
}

let deleteData = (schema, id) => {
    return schema.findByIdAndDelete(id)
}

let findDataId = (schema, id) => {
    return schema.findById(id)
}

let updateData = (schema, id, body) => {
    return schema.findByIdAndUpdate(id, body)
}


module.exports = { getData, postData, dublicateData, deleteData, findDataId,updateData}

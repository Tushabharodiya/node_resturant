let mongoose = require("mongoose")


let userSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    profile: {
        type: String,
    }

})

let user = mongoose.model("userSchema", userSchema)

module.exports = user;
let mongoose = require("mongoose")

let dbConnect = () => {
    try {
        mongoose.connect(process.env.DB_URL).then(() => {
            console.log("database connect");
        });
    } catch (error) {
        console.log(error, "database connect error");
    }
}

module.exports = dbConnect;
let multer = require("multer")
let fs = require("fs")
let path = require("path")


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdirSync(path.join(__dirname, "../public/images"), { recursive: true });
        cb(null, path.join(__dirname, "../public/images"))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage: storage })

module.exports = upload;
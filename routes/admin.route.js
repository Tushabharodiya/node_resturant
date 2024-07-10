let express = require("express");
const { adminController } = require("../controller");
const validate = require("../middleware/validate");
const { adminValidation } = require("../validation");

let route = express.Router()


route.get("/get", adminController.getAdmin);
route.post("/post", validate(adminValidation.admin), adminController.postAdmin);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put("/update/:id", validate(adminValidation.admin), adminController.updateAdmin)

module.exports = route;



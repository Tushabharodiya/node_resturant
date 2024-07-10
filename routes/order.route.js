let express = require("express");
const { orderController } = require("../controller");

let route = express.Router();

route.get("/get", orderController.getOrder)
route.post("/add",orderController.addOrder)

module.exports = route;
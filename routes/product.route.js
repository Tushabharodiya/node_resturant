let express = require("express")
const { productController } = require("../controller")

let route = express.Router()

route.get("/get", productController.getProduct);
route.post("/create", productController.addProduct);
route.delete("/delete/:id", productController.deleteProduct);
route.put("/update/:id", productController.updateProduct)


module.exports = route;



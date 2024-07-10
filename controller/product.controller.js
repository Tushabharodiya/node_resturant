const { productServices } = require("../services")


let getProduct = async (req, res) => {
    try {
        let product = await productServices.featchProduct()
        console.log(product);

        res.status(200).json({
            message: "product get success",
            product,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}


let addProduct = async (req, res) => {
    try {
        let body = req.body;

        let product = await productServices.createProduct(body)
        console.log(product);

        res.status(201).json({
            message: "product add success",
            product,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteProduct = async (req, res) => {

    try {
        let { id } = req.params;

        let findId = await productServices.findByProductId(id);
        if (!findId) {
            res.status(500).json({
                message: "product is not found"
            })
        }

        let product = await productServices.findAndDelete(id)
        console.log(product);

        res.status(200).json({
            message: "product Delete Successully",
            product,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

let updateProduct = async (req, res) => {

    let { id } = req.params;
    let body = req.body;

    let updateBody = {
        id,
        ...body,
    }

    let product = await productServices.findIdAndUpdate(id, body);
    // console.log(product);

    res.status(200).json({
        message: "product update successfully",
        updateBody,
    });
}

module.exports = { getProduct, addProduct, deleteProduct, updateProduct }
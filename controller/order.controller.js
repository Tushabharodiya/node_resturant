const { orderServices } = require("../services")

let getOrder = async (req, res) => {
    try {
        let order = await orderServices.getOrder()

        res.status(200).json({
            message: "get all order success",
            order,
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let addOrder = async (req, res) => {

    let body = req.body;

    let order = await orderServices.addorder(body)

    res.status(200).json({
        message: "order place success",
        order,
    })
}

module.exports = { getOrder, addOrder }
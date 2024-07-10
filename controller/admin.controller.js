const { adminService } = require("../services")



let getAdmin = async (req, res) => {
    try {
        let admin = await adminService.featchAdmin();
        console.log(admin);

        res.status(200).json({
            message: "admin get success",
            admin,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let postAdmin = async (req, res) => {

    try {
        let body = req.body;

        let dublicate = await adminService.dublicateAdmin(body.email)
        if (dublicate) {
            throw new Error("admin alreay existed");
        };

        let admin = await adminService.createAdmin(body)
        console.log(admin);
        res.status(201).json({
            message: "admin create success",
            admin,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteAdmin = async (req, res) => {
    console.log(req);

    try {
        let { id } = req.params;
        // console.log(id);

        let find = await adminService.findIdAdmin(id)
        // console.log(find);
        if (!find) {
            throw new Error("admin is not found")
        }

        let admin = await adminService.findIdAndDelete(id)

        res.status(200).json({
            message: "admin delete successfuly",
            admin,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let updateAdmin = async (req, res) => {

    try {
        let { id } = req.params;
        let body = req.body;

        let updateBody = {
            id,
            ...body,
        }

        let admin = await adminService.findByIdAndUpdate(id, body)
        // console.log(admin);

        res.status(200).json({
            message: "admin update successdully",
            updateBody,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getAdmin, postAdmin, deleteAdmin, updateAdmin }
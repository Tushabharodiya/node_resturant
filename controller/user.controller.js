const { userServices } = require("../services");
const sendEmail = require("../services/email.services");
let getUser = async (req, res) => {
    try {
        let user = await userServices.featchUser()
        console.log(user);

        res.status(200).json({
            message: "user get success",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let postUser = async (req, res) => {
    try {
        let body = req.body;
        // console.log(body);
        // console.log(req.file);
        let { path } = req.file;

        let newBody = {
            ...body,
            profile: path,
        }

        let result = await userServices.createUser(newBody);
        // Check if user and user.email are defined
        if (result) {
            let ress = await sendEmail(
                result.email,
                "Test mail",
                `Hello ${result.first_name}`
            );
            // console.log(ress, "email");
        }
        res.status(201).json({
            message: "user creatred success",
            result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}

let deleteUser = async (req, res) => {
    try {
        let { id } = req.params;

        let findId = await userServices.userFindAndId(id)
        // console.log(findId);
        if (!findId) {
            throw new Error("User Is Not Found")
        }

        let user = await userServices.userFindAndDelete(id)
        console.log(user);

        res.status(200).json({
            message: "user delete success",
            user,
        })
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

let updateUser = async (req, res) => {
    try {
        // console.log(req);
        let { id } = req.params;
        let body = req.body;
        let updateBody = {
            id,
            ...body,
        };

        let user = await userServices.userFindAndUpdate(id, body);
        // console.log(user);

        res.status(200).json({
            message: "user update succesfuly",
            updateBody,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
}


module.exports = { getUser, postUser, deleteUser, updateUser }

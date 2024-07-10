const Joi = require("joi");

let user = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        profile: Joi.string().required(),
    })
}

module.exports = { user }
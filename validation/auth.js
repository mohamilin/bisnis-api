const Joi = require("joi");

const register = {
  body: Joi.object().keys({
    user_id: Joi.string().required(),
    user_name: Joi.string().required(),
    password: Joi.string().required(),
    active: Joi.number(),
    role: Joi.string().optional().valid('user', 'admin')
  }),
};

module.exports = {
  register,
};

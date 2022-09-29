const Joi = require("joi");

const loginSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

module.exports = loginSchema;

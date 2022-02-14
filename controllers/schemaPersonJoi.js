const Joi = require('joi')

const addPerson = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
});

module.exports = {
  addPerson,
};
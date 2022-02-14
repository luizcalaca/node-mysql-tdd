const connection = require('../utils/connection');
const personModel = require('../models/Person')

const getAll = async () => {
    personModel.getAll()
};

const findById = async (id) => {
    personModel.findById(id)
};

 const create = async (firstName, lastName) => {
    personModel.create(firstName, lastName)
 }

module.exports = {
    getAll, findById, create
};
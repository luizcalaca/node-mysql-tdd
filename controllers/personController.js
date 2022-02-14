const connection = require('../utils/connection')
const express = require('express')
const router = express.Router()
const {joiError} = require('../middlewares/error')

const schemasJoi = require('./schemaPersonJoi');
const personServices = require('../services/personServices')

const validateJoi = async (reqInfo) =>
  schemasJoi.addPerson.validateAsync(reqInfo).catch((fail) => joiError(fail));

router.post('/person', async (req, res, next) => {
    const isValid = await validateJoi(req.body);
    if (isValid.error) return next(isValid);

    const {first_name, last_name} = req.body

    await personServices.create(first_name, last_name)
    res.status(201).json({ message: 'Person created with success'})
})

router.get('/person', async (_req, res) => {
    const result = await personServices.getAll()
    res.status(200).json({ result })
})

router.get('/person/:id',async (req, res) => {
    const { id } = req.params
    const result = await personServices.findById(id)
    res.status(200).json(result)
})

router.delete('/person/:id',async (req, res) => {
    const { id } = req.params
    const result = await personServices.deleteById(id)
    res.status(200).json(result)
})

module.exports = router
  
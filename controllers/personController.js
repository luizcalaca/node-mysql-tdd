const Person = require('../models/Person');
const personService = require('../services/personServices')
const express = require('express')
const router = express.Router()
const Joi = require('joi');

router.get('/person', async (_req, res) => {
    const people = await personService.getAll();

    res.status(200).json(people);
});

router.get('/person/:id', async (req, res) => {
  const people = await personService.findById(req.id)

  res.status(200).json(people);
});

router.post('/person', async (req, res, next) => {
    const { first_name, last_name } = req.body;

    const { error } = Joi.object({
        first_name: Joi.string().not().empty().required(),
        last_name: Joi.string().not().empty().required(),
      })
      .validate({ first_name, last_name });
    
    if (error) {
        return next(error);
      }

    await personService.create(first_name, last_name);

    res.status(201).json({ message: 'Person created with success'});
});

module.exports = router
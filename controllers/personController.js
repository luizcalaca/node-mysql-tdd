const personService = require('../services/personServices')
const express = require('express')
const router = express.Router()
const Joi = require('joi');

router.get('/person', async (_req, res) => {
    const people = await personService.getAll();

    if(!people){
      res.status(400).json({ message: 'There are no People'});
    }
    res.status(200).json(people);
});

router.get('/person/:id', async (req, res) => {
  const { id } = req.params
  const { error } = Joi.object({
    id: Joi.string().not().empty().required()
  })
  .validate({ id });

  if (error) {
      return next(error);
  }

  const people = await personService.findById(req.id)

  if(!people){
    res.status(400).json({ message: 'There are no People with this id'});
  }

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
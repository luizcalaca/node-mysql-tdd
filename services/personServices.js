const personModel = require('../models/Person')
const express = require('express')
const router = express.Router()
const Joi = require('joi');

const create = async (firstName, lastName) => {
      const result = await personModel.create(firstName, lastName);
      return result
}

const findById = async (id) => {
  const person = await personModel.findById(id)

  if(!person){
    return { message: 'There are no Person with this id'};
  }

 return person
};

const deleteById = async (id) => {
  const person = await personModel.deleteById(id)

  if(!person){
    return { message: 'There are no Person with this id'};
  }

 return person
};

const getAll = async () =>{
  const result = await personModel.getAll();

  if(!result){
    res.status(400).json({ message: 'There are no People'});
  }

  return result
} 

module.exports = {
  create, findById, getAll, deleteById
}
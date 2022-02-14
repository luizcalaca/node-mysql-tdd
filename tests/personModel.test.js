const { expect } = require('chai');
const sinon = require('sinon');
const personModel = require('../models/Person')
const connection = require('../utils/connection')

const PersonModel = {
    create: () => {}
  };
  
  describe('Insert new Person into Database', () => {
    const payloadPerson = {
      first_name: 'Luiz',
      last_name: 'Calaça',
    }

    before(async () => {
        const execute = [{ insertId: 1 }]; // retorno esperado nesse teste
        sinon.stub(connection, 'execute').resolves(execute);
      });

    after(async () => {
        connection.execute.restore();
    });
  
    describe('When is inserted with success', () => {
      it('return an object', async () => {
        const response = await personModel.create(payloadPerson);
        expect(response).to.be.a('object')
      });
  
      it('The object has a id of inserted tuple', async () => {
        const response = await personModel.create(payloadPerson);
        expect(response).to.have.a.property('id')
      });
  
    });
  });
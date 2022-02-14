const connection = require('../utils/connection');

const getAll = async () => {
    const [people] = await connection.execute(
        'SELECT id, first_name, last_name FROM example.person;',
    );
    return people.map(serialize);
};

const findById = async (id) => {
    const query = 'SELECT first_name, last_name FROM example.person WHERE id = ?'
    const [ personData ] = await connection.execute(query, [id]);

    if (personData.length === 0) return null;

    const { firstName, lastName } = personData.map(serialize)[0];

    return {
        id,
        firstName,
        lastName
    }
};

 const create = async (firstName, lastName) => {
   const [person] = await connection.execute(
     'INSERT INTO example.person (first_name, last_name) VALUES (?, ?)',
     [firstName, lastName]
   );
   return { id: person.id };
 }

 const deleteById = async (id) => {
    const [person] = await connection.execute(
      'DELETE FROM example.person WHERE id = ?',
      [id]
    );
    return { id: person.id };
  }

const serialize = (person) => ({
    id: person.id,
    firstName: person.first_name,
    lastName: person.last_name,
});

module.exports = {
    getAll, findById, create, deleteById
};
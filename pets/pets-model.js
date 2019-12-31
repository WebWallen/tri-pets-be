const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findDogs,
    findCats,
    add,
    update,
    remove
}

function find() {
    return db('pets');
};

function findById(id) {
    return db('pets')
        .where({ id })
        .first();
};

function findDogs() {
    return db('pets')
        .where('species', 'Dog')
};

function findCats() {
    return db('pets')
        .where('species', 'Cat')
};

function add(pet) {
    return db('pets')
        .insert(pet, 'id')
        .then(([id]) => {
            return findById(id);
        });
};

function update(changes, id) {
    return db('pets')
      .where('id', Number(id))
      .update(changes);
  };

  function remove(id) {
      return db('pets')
      .where('id', Number(id))
      .delete();
  };
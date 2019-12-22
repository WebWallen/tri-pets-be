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

function findDogs(petId) {
    return db('pets')
        .join('pets', 'pets.id', 'dogs.pet_id')
        .select('pets.name', 'pets.breed', 'pets.age', 'pets.pet_friendly', 'pets.energy_level', 'pets.shelter_location')
        .where({ pet_id: petId });
};

function findCats(petId) {
    return db('pets')
        .join('pets', 'pets.id', 'cats.pet_id')
        .select('pets.name', 'pets.breed', 'pets.age', 'pets.pet_friendly', 'pets.energy_level', 'pets.shelter_location')
        .where({ pet_id: petId });
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
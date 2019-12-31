
exports.seed = function(knex) {
    return knex('pets').insert([
      {id: 1, name: 'Tank', species: 'Dog', breed: 'Pitbull', age: 4, pet_friendly: 'No', energy_level: 10, shelter_location: 'Petworks'},
      {id: 2, name: 'Spirit', species: 'Cat', breed: 'Maine Coon', age: 9, pet_friendly: 'Yes', energy_level: 2, shelter_location: 'Petworks'},
    ]);
};

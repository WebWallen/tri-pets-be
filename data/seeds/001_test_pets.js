
exports.seed = function(knex) {
    return knex('pets').insert([
      {id: 1, name: 'Tank', species: 'Dog', breed: 'Pitbull', age: 'Midlife', pet_friendly: 'No', energy_level: 'High', shelter_location: 'Petworks'},
      {id: 2, name: 'Spirit', species: 'Cat', breed: 'Maine Coon', age: 'Senior', pet_friendly: 'Yes', energy_level: 'Low', shelter_location: 'Petworks'},
    ]);
};

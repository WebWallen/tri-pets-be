exports.up = function(knex) {
    return knex.schema
      .createTable('pets', tbl => {
        tbl.increments();
        tbl.string('name', 128)
        .notNullable();
        tbl.string('species')
        .notNullable();
        tbl.string('age');
        tbl.string('pet_friendly');
        tbl.string('energy_level');
        tbl.string('shelter_location');
        tbl.string('breed')
        .notNullable();
      })

      .createTable('dogs', tbl => {
        tbl.increments();
        tbl.integer('dog_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('pets')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      })

      .createTable('cats', tbl => {
        tbl.increments();
        tbl.integer('cat_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('pets')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      })
    }

    exports.down = function(knex) {
        return knex.schema
          .dropTableIfExists('cats')
          .dropTableIfExists('dogs')
          .dropTableIfExists('pets')
      };
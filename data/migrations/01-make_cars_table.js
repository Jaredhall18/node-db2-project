exports.up = async function (knex) {
 await knex.schema.createTable('fruits', table => {
  table.increments('car_id')

  table.text('car_vin')
    .unique()
    .notNullable()

  table.text('car_make')
    .notNullable()

  table.text('car_model')
    .notNullable()

  table.decimal('mileage')
    .notNullable()

    table.text('car_title')

    table.text('car_transmission')
 
 })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};

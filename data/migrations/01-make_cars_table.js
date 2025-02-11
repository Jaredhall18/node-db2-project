exports.up = async function (knex) {
 await knex.schema.createTable('cars', table => {
  table.increments('car_id')

  table.text('vin', 17)
    .unique()
    .notNullable()

  table.text('make')
    .notNullable()

  table.text('model')
    .notNullable()

  table.decimal('mileage')
    .notNullable()

    table.text('title')

    table.text('transmission')
 
 })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};

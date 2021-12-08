// STRETCH
const cars = [
    {
        vin:'12345678912345678',
        make: 'tesla',
        model: 'm3',
        mileage: 50000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin:'12345678912345679',
        make: 'toyota',
        model: 'corola',
        mileage: 2000,
        title: 'clean',
        transmission: 'salvage',
    },
    {
        vin:'12345678912345677',
        make: 'ford',
        model: 'focus',
        mileage: 5000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
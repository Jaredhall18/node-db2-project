// STRETCH
const cars = [
    {
        vin:'1111111111111',
        make: 'tesla',
        model: 'm3',
        mileage: 50000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin:'1111111111111',
        make: 'toyota',
        model: 'corola',
        mileage: 2000,
        title: 'clean',
        transmission: 'salvage',
    },
    {
        vin:'1111111111111',
        make: 'ford',
        model: 'focus',
        mileage: 50000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
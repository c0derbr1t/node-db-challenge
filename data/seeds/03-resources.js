
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {
          id: 1,
          name: 'Television',
          description: 'With remote control, and some sort of service'
        },
        {
          id: 2,
          name: 'Snacks',
          description: null
        },
        {
          id: 3,
          name: 'Electricity',
          description: null
        },
        {
          id: 4,
          name: 'Computer/Laptop',
          description: null
        },
        {
          id: 5,
          name: 'Seating',
          description: null
        },
        {
          id: 6,
          name: 'Internet Access',
          description: 'Home or elsewere'
        },
        {
          id: 7,
          name: 'Interview Clothes',
          description: null
        },
        {
          id: 8,
          name: 'Transportation',
          description: 'Car, bus, ride-share, etc.'
        },
        {
          id: 9,
          name: 'Prescribed Medicine',
          description: null
        },
        {
          id: 10,
          name: 'Water',
          description: null
        },
        {
          id: 11,
          name: 'Cup',
          description: null
        }
      ]);
    });
};


exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          name: 'Watch tv',
          description: null,
          completed: false
        },
        {
          id: 2,
          name: 'Get a job',
          description: null,
          completed: false
        },
        {
          id: 3,
          name: 'Take my medicine',
          description: 'daily task to take needed meds',
          completed: true
        }
      ]);
    });
};

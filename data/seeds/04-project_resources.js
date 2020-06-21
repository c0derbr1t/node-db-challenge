
exports.seed = function(knex) {
  return knex('project_resources').truncate()
    .then(function () {
      return knex('project_resources').insert([
        {
          project_id: 1,
          resource_id: 1,
          notes: null
        },
        {  
          project_id: 1,
          resource_id: 2,
          notes: null
        },
        {
          project_id: 1,
          resource_id: 3,
          notes: null
        },
        {
          project_id: 2,
          resource_id: 3,
          notes: null
        },
        {
          project_id: 2,
          resource_id: 4,
          notes: null
        },
        {
          project_id: 1,
          resource_id: 5,
          notes: null
        },
        {
          project_id: 2,
          resource_id: 5,
          notes: null
        },
        {
          project_id: 1,
          resource_id: 6,
          notes: 'Optional'
        },
        {
          project_id: 2,
          resource_id: 6,
          notes: null
        },
        {
          project_id: 2,
          resource_id: 7,
          notes: null
        },
        {
          project_id: 2,
          resource_id: 8,
          notes: null
        },
        {
          project_id: 3,
          resource_id: 9,
          notes: 'Make sure it is YOUR medicine!'
        },
        {
          project_id: 3,
          resource_id: 10,
          notes: null
        },
        {
          project_id: 3,
          resource_id: 11,
          notes: null
        }
      ]);
    });
};

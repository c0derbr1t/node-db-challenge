
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('description', 500);
    tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 300).notNullable();
      tbl.string('notes', 500);
      tbl.boolean('completed').notNullable().defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 500);
  })
  .createTable('project_resources', tbl => {
      tbl.primary(['project_id', 'resource_id']);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('notes', 500);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};

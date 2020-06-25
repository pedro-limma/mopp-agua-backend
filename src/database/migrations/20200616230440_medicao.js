
exports.up = function(knex) {
  return knex.schema.createTable('medicao', function (table) {
    table.increments();
    table.float('media').notNullable();
    table.string('time').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('medicao');
};

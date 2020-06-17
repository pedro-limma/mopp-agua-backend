
exports.up = function(knex) {
  return knex.schema.createTable('medicao', function (table) {
    table.increments();
    table.float('litros').notNullable();
    table.string('minutos').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('medicao');
};

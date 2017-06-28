exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops', function(table) {
      table.increments();
      table.string('name');
      table.string('city');
    })
    .createTable('donuts', function(table) {
      table.increments();
      table.string('name');
      table.string('topping');
      table.integer('price');
    })
    .createTable('shop_donuts', function(table) {
      table.increments();
      table.integer('shop_id').references('id').fromTable('shops');
      table.integer('donut_id').references('id').fromTable('donuts');
    })
    .createTable('employees', function(table) {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('favorite_donut').references('id').fromTable('donuts');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops');
  .dropTable('donuts');
  .dropTable('shop_donuts');
  .dropTable('employees');
};

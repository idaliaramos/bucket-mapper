// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('Adventures', table => {
//     table.increments('id').primary();
//     table
//       .integer('Destination_id')
//       .notNullable()
//       .references('Destination.id')
//       .onDelete('CASCADE')
//       .index();
//     table.string('activity_name').notNullable().defaultTo('activity_name');
//     table.string('location').notNullable().defaultTo('');
//     table.text('url').notNullable().defaultTo('');
//     table.string('description').notNullable().defaultTo('');
//     table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
//   });
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('Adventures');
// };

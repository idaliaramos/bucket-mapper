// exports.up = function(knex) {
//   return knex.schema.createTable('Destination', table => {
//     table.increments('id').primary();
//     table.string('name').notNullable();
//     table.text('url').notNullable().defaultTo('');
//     table
//       .integer('user_id')
//       .notNullable()
//       .references('users.id')
//       .onDelete('CASCADE')
//       .index();
//     table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
//     table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
//   });
// };
//
// exports.down = function(knex) {
//   return knex.schema.dropTable('Destination');
// };

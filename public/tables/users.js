// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('Users', table => {
//     table.increments('id').primary();
//     table.string('first_name').notNullable().defaultTo('');

//     table.string('email').notNullable().unique('email');
//     table.specificType('hashed_password', 'char(200)').notNullable();
//     table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
//     table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
//   });
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('Users');
// };

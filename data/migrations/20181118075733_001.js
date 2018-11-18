
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Tea',(Tea) => {
      Tea.increments
      Tea.string('name', 255)
      Tea.text('description')
      Tea.text('message')
      Tea.boolean('selected')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Tea')
};

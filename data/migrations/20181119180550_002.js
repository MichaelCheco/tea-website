
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Teaware',(Tea) => {
        Tea.increments()
        Tea.string('name', 255)
        Tea.string('price', 255)
        Tea.text('description')
        Tea.text('message')
        Tea.boolean('selected')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Teaware')
  };
  

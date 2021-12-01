exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_disciplinas', (table) => {
        table.increments('id')
        table.string('nome_disciplina')
        table.primary('id')
       
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('tb_disciplinas')
  };
  
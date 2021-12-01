exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_alunos', (table) => {
        table.increments('id')
        table.string('nome_aluno')
        table.primary('id')
       
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('tb_alunos')
  };
  
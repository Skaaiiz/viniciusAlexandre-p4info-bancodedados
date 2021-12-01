
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tb_aluno_disciplina', (table) => {
      table.integer('tb_alunos_id')
      table.integer('tb_disciplinas_id')
      table.string('nota')
      table.integer('periodo')
      table.foreign('tb_alunos_id').references('tb_alunos.id')
      table.foreign('tb_disciplinas_id').references('tb_disciplinas.id')
      table.primary(['tb_alunos_id','tb_disciplinas_id'])
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_aluno_disciplina')
};

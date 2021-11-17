const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database/db_atividade_04.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists tb_alunos (id integer primary key autoincrement , nome_aluno text)', (error) => {
        if (error) console.log(error);
    });
    
    db.run('create table if not exists tb_disciplinas (id integer primary key autoincrement , nome_disciplina text)', (error) => {
        if (error) console.log(error);
    });

    db.run('create table if not exists tb_aluno_disciplina (tb_alunos_id integer, tb_disciplinas_id integer, nota varchar(5), periodo integer, foreign key (tb_alunos_id) references tb_alunos(id), foreign key (tb_disciplinas_id) references tb_disciplinas(id), primary key (tb_alunos_id, tb_disciplinas_id))', (error) => {
        if (error) console.log(error);
    });

});
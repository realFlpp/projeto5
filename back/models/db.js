import Sequelize from 'sequelize';

// CONEXÃO COM O BANCO DE DADOS
const sequelize = new Sequelize('sistemadeguia', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

// TESTE DE CONEXÃO
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

export {
    Sequelize,
    sequelize
};

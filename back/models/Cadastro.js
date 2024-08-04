import { Sequelize, sequelize } from './db.js';

// Definição do Modelo
const Cadastro = sequelize.define('CadastroUsers', {
    Nome: {
        type: Sequelize.STRING
    },
    Email: {
        type: Sequelize.STRING
    },
    Senha: {
        type: Sequelize.STRING
    },
    Confirmar_Senha: {
        type: Sequelize.STRING
    }
});

export default Cadastro;

const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type : Sequelize.STRING,
        allowNull:false
    }
})



//Sincronizando as categorias no banco de dados para criar tabela
//deixei comentado, pois deve ser criado uma vez, 
//Se não deixar comentado ele irá criar tabela toda vez que atualizar o sistema
User.sync({force: false});
module.exports = User;
const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('category',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type : Sequelize.STRING,
        allowNull:false
    }
})
//Sincronizando as categorias no banco de dados para criar tabela
//deixei comentado, pois deve ser criado uma vez, 
//Se não deixar comentado ele irá criar tabela toda vez que atualizar o sistema
//Category.sync({force: true});
module.exports = Category;
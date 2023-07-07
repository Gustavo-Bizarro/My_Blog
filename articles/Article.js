const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/category")

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type : Sequelize.STRING,
        allowNull:false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});
//Uma categoria tem muitos artigos 1 P n Representado pelo (hasMany)
Category.hasMany(Article);
//Um Artigo pertence a uma Categoria" 1 P 1 represntado pelo (belongsTo)
Article.belongsTo(Category);

//sincronizando com o banco de dados e criando a tabela.
//deixei comentado, pois deve ser criado uma vez, 
//Se não deixar comentado ele irá criar tabela toda vez que atualizar o sistema
//Article.sync({Force: true});



module.exports = Article;
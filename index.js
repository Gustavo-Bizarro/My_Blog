const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

//view engine, carregar o ejs
app.set('view engine','ejs');
//arquivos Static
app.use(express.static('public'));

//Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//conexão database

connection
.authenticate()
.then(() => {
    console.log("conexão feita com sucesso!"); 
}).catch((error) => {
    console.log("ERROR na conexão");
})
//para utilizar prefixo nas rotas 
app.use("/",categoriesController);
app.use("/",articlesController);


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3030, () => {
    console.log("O servidor está rodando");
} )
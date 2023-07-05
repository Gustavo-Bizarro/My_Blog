const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//view engine, carregar o ejs
app.set('view engine','ejs');
//arquivos Static
app.use(express.static('public'));

//Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database

connection
.authenticate()
.then(() => {
    console.log("conexão feita com sucesso!"); 
}).catch((error) => {
    console.log("ERROR na conexão");
})


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("O servidor está rodando");
} )
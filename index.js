const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const session = require("express-session");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/category");
const User = require("./users/User");

//view engine, carregar o ejs
app.set('view engine','ejs');

//Sessions
app.use(session({
secret: "coisasAleatorias", 
cookie: { maxAge: 30000000 }
}));

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
});

//para utilizar prefixo nas rotas 
app.use("/",categoriesController);
app.use("/",articlesController);
app.use("/",usersController);


app.get("/", (req, res) => {
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll(). then(categories => {
            res.render("index" , {articles: articles , categories: categories});
        });
   });
    
});
app.get("/:slug", (req ,res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined ){
            Category.findAll(). then(categories => {
                res.render("article" , {article: article , categories: categories});
            });
        }else{
            res.redirect("/")
        }
    }).catch( err => {
        res.redirect("/")
    })
})

app.get("/category/:slug" ,(req ,res) => {
    var sulg = req.params.slug;
    Category.findOne({
        where : {
            slug: sulg
        },
        include: [{model: Article}]
    }).then(category => {
        if(category != undefined){

        category.findAll().then(categories => {
            res.render("index", {articles: category.articles,categories: categories });
        });

        }else{
            res.redirect("/");
        }
}).catch( err => {
    res.redirect("/")
})
})

app.listen(3030, () => {
    console.log("O servidor está rodando");
})
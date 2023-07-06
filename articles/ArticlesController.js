//importando o express e o router (rotas)
const express = require("express");
const router = express.Router();

router.get("/articles",(req,res) =>{
    res.send("ROTAS DE ARTIGOS")
});

router.get("/admin/articles/new",(req,res)=>{
    res.send("ROTA PARA CRIAR UM NOVO ARTIGOS")
});

module.exports = router;
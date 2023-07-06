//importando o express e o router (rotas)
const express = require("express");
const router = express.Router();

router.get("/categories",(req,res) =>{
    res.send("ROTAS DE CATEGORIAS")
});

router.get("/admin/categories/new",(req,res)=>{
    res.send("ROTA PARA CRIAR UMA NOVA CATEGORIA")
});

module.exports = router;
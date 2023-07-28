const express = require("express");
const router = express.Router();
const User = require("./user");

router.get("/admin/user" ,(req , res) =>{
    res.send("LISTAGEM DE USUÁRIOS");
});

router.get("/admin/users/create" ,(req , res) => {
    res.render("admin/users/create");
});

router.post("/users/create" , (req ,res) => {
    var email = req.body.email;
    var password = req.body.password;

    res.json ({email, password});
});

module.exports = router;
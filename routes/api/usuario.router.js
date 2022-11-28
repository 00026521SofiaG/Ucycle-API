const express = require("express");
const router = express.Router();

const usuarioController = require("../../controllers/usuario.controller");

router.post("/", 
usuarioController.create);

router.get("/", (req, res, next) => {

    return res.status(200).json({ message: "Algooooo" });

});

module.exports = router;
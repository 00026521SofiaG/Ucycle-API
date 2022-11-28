const express = require("express");
const router = express.Router();

//importacion de rutas
const usuarioRouter = require("./usuario.router");
const articuloRouter = require("./articulos.router");
const retosRouter = require("./retos.router");
const voluntariadoRouter = require("./voluntariado.router");

//definicion de rutas
router.use("/usuario", usuarioRouter);
router.use("/articulo", articuloRouter);
router.use("/retos",retosRouter);
router.use("/voluntariado",voluntariadoRouter);

module.exports = router;
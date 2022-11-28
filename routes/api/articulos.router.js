const express = require("express");
const router = express.Router();

const articuloController = require("../../controllers/articulo.controller");

const articleValidator = require("../../validators/articulo.validator");
const runValidators = require("../../validators/index.middleware");

router.post("/", 
articleValidator.createArticleValidator,
runValidators,
articuloController.create);

router.get("/", articuloController.findAll);

module.exports = router;
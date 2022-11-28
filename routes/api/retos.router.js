const express = require("express");
const router = express.Router();

const retoController = require("../../controllers/retos.controller");

const retosValidator = require("../../validators/retos.validator");
const runValidator = require("../../validators/index.middleware");

router.post("/", 
retosValidator.createRetosValidator,
runValidator,
retoController.create);

router.get("/", retoController.findAll);

module.exports =router;
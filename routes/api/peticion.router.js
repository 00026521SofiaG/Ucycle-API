const express = require("express");
const router = express.Router();

const peticionController = require("../../controllers/peticiones.controller");

const peticionValidator = require("../../validators/peticion.validator");
const runValidator = require("../../validators/index.middleware");

router.post("/", 
peticionValidator.createPeticionValidator,
runValidator,
peticionController.create);

router.get("/", peticionController.findAll);

module.exports =router;
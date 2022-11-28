const express = require("express");
const router = express.Router();

const voluntariadoController = require("../../controllers/voluntariado.controller");

const voluntariadoValidator = require("../../validators/voluntariado.validator");
const runValidator = require("../../validators/index.middleware");

router.post("/", 
voluntariadoValidator.createVoluntariadoValidator,
runValidator,
voluntariadoController.create);

router.get("/", voluntariadoController.findAll);

module.exports = router;
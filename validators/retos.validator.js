const {body,param} = require("express-validator");
const validators ={};

validators.createRetosValidator = [
    body("titulo_r")
        .notEmpty().withMessage("Title required"),
    body("descripcion_r")
        .notEmpty().withMessage("Description required"),
    body("imagen_r")
        .optional()
        .notEmpty().withMessage("Image is optional")
        .isURL().withMessage("Upload an image with a URL"),
    body("complete")
    .optional().isBoolean()
];

module.exports = validators;
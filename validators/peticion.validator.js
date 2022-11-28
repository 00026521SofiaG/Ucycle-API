const {body,param} = require("express-validator");
const validators ={};

validators.createPeticionValidator = [
    body("titulo_p")
        .notEmpty().withMessage("Title required"),
    body("descripcion_p")
        .notEmpty().withMessage("Description required"),
    body("imagen_p")
        .optional()
        .notEmpty().withMessage("Image is optional")
        .isURL().withMessage("Upload an image with a URL"),
    body("firma")
    .optional().isBoolean()
];

module.exports = validators;
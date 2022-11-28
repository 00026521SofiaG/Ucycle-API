const {body} = require("express-validator");
const validators ={};

validators.createArticleValidator = [
    body("titulo_a")
        .notEmpty().withMessage("Title required"),
    body("descripcion_a")
        .notEmpty().withMessage("Description required"),
    body("image_a")
        .optional()
        .notEmpty().withMessage("Image is optional")
        .isURL().withMessage("Upload an image with a URL")
];

module.exports = validators;
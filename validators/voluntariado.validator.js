const {body} = require("express-validator");
const validators ={};

validators.createVoluntariadoValidator = [
    body("titulo_v")
        .notEmpty().withMessage("Title required"),
    body("descripcion_v")
        .notEmpty().withMessage("Description required"),
    body("imagen_v")
        .optional()
        .notEmpty().withMessage("Image is optional")
        .isURL().withMessage("Upload an image with a URL"),
    body("nombre_v")
        .notEmpty().withMessage("Name required"),
    body("correo_v")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Please enter a valid email"),
    body("carrera_v")
        .notEmpty().withMessage("Carrer is required"),
    body("telefono_v")
        .notEmpty().withMessage("Telephone number is required")
        .isMobilePhone().withMessage("A mobilephone number is required"),
    body("fecha_v") 
    .notEmpty().withMessage("Date is required")
];

module.exports = validators;
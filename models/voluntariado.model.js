const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const voluntariadoSchema = new Schema({
    titulo_v: {
        type: String,
        require: true,
        trim: true
    },
    descripcion_v: {
        type: String,
        require: true,
        trim: true
    },
    imagen_v:{
        type: String,
    },
    nombre_v: {
        type: String,
        require: true,
        trim: true
    }
    ,
    correo_v:{
        type: String,
        require: true,
        trim: true
    },
    carrera_v: {
        type: String,
        require: true,
        trim: true
    },
    telefono_v: {
        type: String,
        require: true,
        trim: true
    }, 
    fecha_v: {
        type: String,
        require: true,
        trim: true
    }
});


module.exports = Mongoose.model("Voluntariado",voluntariadoSchema);
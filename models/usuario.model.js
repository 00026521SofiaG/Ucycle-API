const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

/* const CuponesSchema = new Schema({
    tipo:{ //para el tipo de cupon
        type: String,
        default:null
    },
    numeroCupones:{ //para el numero de cupones
        type: Number,
        default:0
    } //iniciado en 0
}); */

const usuarioSchema = new Schema({
    nombre_u: {   // no es tan necesario, porque lo sacamos de AUTH0
        type: String,
        trim: true
    },
    correo_u: {   // identificador comparado con el de AUTH0
        type: String,
      
        trim: true,
        unique: true
    },
   
    h_sociales: {  // contador de horas
        type: Number
    },
    cupones: {    // contador de cupones
        type: Number
        //type: [CuponesSchema],
    },
    moneda: {   // contador de tokens
        type: Number,
        default: 0
    }

});

module.exports = Mongoose.model("Usuario",usuarioSchema);
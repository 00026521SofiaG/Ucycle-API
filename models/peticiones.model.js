const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const peticionSchema = new Schema({
    titulo_p: {
        type: String,
        require: true,
        trim: true
    },
    descripcion_p: {
        type: String,
        require: true,
        trim: true
    },
    imagen_p:{
        type: String
    },
    firma:{
        type : Boolean,
        default: false
    }
});


module.exports = Mongoose.model("Peticion", peticionSchema);
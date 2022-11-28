const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const retoSchema = new Schema({
    titulo_r: {
        type: String,
        require: true,
        trim: true
    },
    descripcion_r: {
        type: String,
        require: true,
        trim: true
    },
    imagen_r:{
        type: String
    },
    complete:{
        type : Boolean,
        default: false
    }
});


module.exports = Mongoose.model("Retos", retoSchema);
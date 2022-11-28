const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const articuloSchema = new Schema({
    titulo_a: {
        type: String,
        require: true,
        trim: true
    },
    descripcion_a: {
        type: String,
        require: true,
        trim: true
    },
    image_a:{
        type:String
    }
});


module.exports = Mongoose.model("articulo",articuloSchema);
const Usuario = require("../models/usuario.model");
const debug = require("debug")("app:usuario-controller");

const controller = {};

// Usamos un control 

controller.create = async (req, res) => {
    
    const {nombre_u, correo_u, h_sociales, cupones, moneda} = req.body;

    // creando otro creamos el nuevo usuario. 

    const usuario = new Usuario({

        nombre_u: nombre_u, 
        correo_u: correo_u, 
        h_sociales: h_sociales, 
        cupones: cupones,
        moneda: moneda

    })

    // 

    const newUsuario = await usuario.save(); 

    // tvalidacion

    if (! newUsuario) {
        return res.status(409).json({error: "Ocurrio un error al crear el articulo"});
    } 
    
    return res.status(201).json(newUsuario);



}











// ESTO EN TEORIA NO HACE CONFLICTO. 

controller.register = async (req,res) =>{
    try{
        //obtiene los datos del usuario
        const{nombre_u, correo_u, password_u, h_sociales, moneda} = req.body;

        //esto verifica si el username o el email estan libres
        const usuario = await Usuario.findOne({ $or: [{nombre_u: usuario}, {correo_u: correo_u}]});

        if (user){
            return res.status(409).json({ error: "Este usuario ya existe"});
        }

        const newUsuario = new usuario({    
            nombre_u : usuario,
            correo_u : ElementInternals,
            password_u : password
        })

    await newUsuario.save();
    return res.status(201).json({ message: "Usuario creado con exito"})
    } catch (error){
        debug({ error});
        return res.status(500).json({error: "Error al crear usuario"})

    }
}


module.exports = controller;
const peticion = require("../models/peticiones.model");
const { Router } = require("express");

const controller = {};

controller.create = async (req,res) =>{
    const {titulo_p, descripcion_p,imagen_p,firma} = req.body;

    const peticiones = new peticion({
        titulo_p: titulo_p,
        descripcion_p: descripcion_p,
        imagen_p: imagen_p,
        firma: firma
    });

    const newPeticion = await peticiones.save();

    if(!newPeticion){
        return res.status(409).json({error:"Ocurrio un eror al crear la peticion"});
    }
    return res.status(201).json(newPeticion);
}

controller.findAll = async (req, res) => {
    try {
      const peticiones =
        await peticion.find({});
  
      return res.status(200).json({ peticiones });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error interno de servidor" });
    }
  }



module.exports = controller;
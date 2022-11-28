const { Router } = require("express");
const Voluntariado = require("../models/voluntariado.model");

const controller = {};

controller.create = async (req, res) => {
    const{titulo_v,descripcion_v,imagen_v,nombre_v,correo_v,carrera_v,telefono_v} = req.body;

    const voluntariado = new Voluntariado({
        titulo_v: titulo_v,
        descripcion_v: descripcion_v,
        imagen_v:imagen_v,
        nombre_v: nombre_v,
        correo_v:correo_v,
        carrera_v:carrera_v,
        telefono_v:telefono_v
    });

    const newVoluntariado = await voluntariado.save();

    if(!newVoluntariado){
        return res.status(409).json({error: "Ocurrio un error durante la creacion"});
    }
    return res.status(201).json(newVoluntariado);
}


controller.findAll = async (req, res) => {
    try {
      const voluntariado =
        await Voluntariado.find({});
  
      return res.status(200).json({ voluntariado });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error interno de servidor" });
    }
  }




module.exports = controller;
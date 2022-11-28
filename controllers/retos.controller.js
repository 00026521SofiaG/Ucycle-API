const retos = require("../models/retos.model");
const { Router } = require("express");

const controller = {};

controller.create = async (req,res) =>{
    const {titulo_r, descripcion_r,imagen_r,complete} = req.body;

    const reto = new retos({
        titulo_r: titulo_r,
        descripcion_r: descripcion_r,
        imagen_r: imagen_r,
        complete: complete
    });

    const newReto = await reto.save();

    if(!newReto){
        return res.status(409).json({error:"Ocurrio un eror al crear el reto"});
    }
    return res.status(201).json(newReto);
}

controller.findAll = async (req, res) => {
    try {
      const reto =
        await retos.find({});
  
      return res.status(200).json({ reto });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error interno de servidor" });
    }
  }



module.exports = controller;
const { Router } = require("express");
const Articulo = require("../models/articulos.model");

const controller = {};

controller.create = async (req,res) =>{
    const {titulo_a, descripcion_a, image_a} = req.body; 

    const articulo = new Articulo({
        titulo_a: titulo_a,
        descripcion_a: descripcion_a,
        image_a: image_a

    });

    const newArticulo = await articulo.save();

    if (!newArticulo){
        return res.status(409).json({error: "Ocurrio un error al crear el articulo"});
    }
    return res.status(201).json(newArticulo);
}

controller.findAll = async (req, res) => {
    try {
      const articulo =
        await Articulo.find({});
  
      return res.status(200).json({ articulo });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error interno de servidor" });
    }
  }




module.exports = controller;
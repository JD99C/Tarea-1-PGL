const db = require("../models");
const Coches = db.concesionario;
const Op = db.Sequelize.Op;

//Create and save a new Coche
exports.create = (req,res) => {    
    //Validad peticion
    if(!req.body.marca){
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }

    //Create a Coche
    const coche = {
        matricula: req.body.matricula,
        marca: req.body.marca,
        modelo: req.body.modelo
    };

    //Save Coche in DB
    Coches.create(coche)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio algun error al crear los datos"
            });
        });
};

//Retrieve(Recupera) all Coches from DB
exports.findAll = (req, res) => {
    Coches.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algun error ocurrio al cargar los datos"
            });
        });
};

//Find a single Coche with Matricula (ID)
exports.findOne = (req, res) => {
    const id = req.params.id;

    Coches.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar el dato con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al cargar dato con id=" + id
        });
      });

};

//Update a Coche by the Matricula(ID) in the request
exports.update = (req, res) =>{
  const id = req.params.id;

  Coches.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

//Delete a Coche with the specified Matricula(ID) in the request
exports.delete = (req, res) => {

  const id = req.params.id;

  Coches.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dato eliminado correctamente"
        });
      } else {
        res.send({
          message: `No se puede eliminar el dato con id=${id}. Quizas el dato no exista!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se puede borrar el dato con id=" + id
      });
    });
};
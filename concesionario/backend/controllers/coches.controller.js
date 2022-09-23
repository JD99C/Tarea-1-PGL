const db = require("../models");
const Coches = db.concesionario;
const Op = db.Sequelize.Op;

//Create and save a new Coche
exports.create = (req,res) => {    
    //Validad peticion
    if(!req.body.marca){
        res.status(400).send({
            message: "Content can not be empty!"
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
                    err.message || "Some error occurred while creating the Coche."
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
                    err.message || "Some error occurred while retrieving Coches."
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
            message: `Cannot find Coche with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Coche with id=" + id
        });
      });

};

//Update a Coche by the Matricula(ID) in the request
exports.update = (req, res) =>{
};

//Delete a Coche with the specified Matricula(ID) in the request
exports.delete = (req, res) => {
};
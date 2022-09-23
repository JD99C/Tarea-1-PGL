module.exports = app => {
    const coches = require("../controllers/coches.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Bicycle
    router.post("/", coches.create);
  
    // Retrieve all Bicycles
    router.get("/", coches.findAll);
  
    // Retrieve a single Bicycle with id
    router.get("/:id", coches.findOne);
  
    // Update a Bicycle with id
    router.put("/:id", coches.update);
  
    // Delete a Bicycle with id
    router.delete("/:id", coches.delete);
  
    app.use("/api/coches", router);
  }
  
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync({  }).then(() =>{
    console.log("Drop and re-sync db.");
});

//Simple Route
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la aplicacion de un concesionario chiquito :D"});
});

require("./routes/coche.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}.`);
});
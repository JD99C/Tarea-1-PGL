module.exports = (sequelize, Sequelize) => {
    const Coches = sequelize.define("coches" , {
        matricula: {
            type: Sequelize.STRING
        },
        marca: {
            type: Sequelize.STRING
        },
        modelo: {
            type: Sequelize.STRING
        }
    });

    return Coches;
}
module.exports = (sequelize, type) => {
    return sequelize.define('contactos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        direccion: type.STRING,
        celular: type.INTEGER,
        telefono: type.INTEGER
    })
}
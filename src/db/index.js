const Sequelize = require('sequelize');
const db = require("../config/db.js");
const ContactoModel = require('../models/contacto');
const UserModel = require('../models/user');

const connection = new Sequelize(db);

const Contacto = ContactoModel(connection, Sequelize);
const User = UserModel(connection, Sequelize);

connection.sync({ force: false})
.then(()=>{
    console.log("Sincronización lista")
})

module.exports = { Contacto, User }

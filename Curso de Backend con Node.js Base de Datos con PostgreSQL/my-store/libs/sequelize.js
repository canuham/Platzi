const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser); // Encode datos para protegerlos
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // Creamos url de conexion

const sequelize = new Sequelize(URI, {
  dialect: 'postgres', //! Cambiar esto para cambiar el motor de base de datos
  logging: console.log
});

setupModels(sequelize);

module.exports = sequelize;

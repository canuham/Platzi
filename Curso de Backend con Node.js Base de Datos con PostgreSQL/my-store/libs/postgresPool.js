const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser); // Encode datos para protegerlos
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // Creamos url de conexion

const pool = new Pool({ connectionString: URI });

module.exports = pool;

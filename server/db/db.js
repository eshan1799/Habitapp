const Pool = require("pg").Pool
require('dotenv').config()

// const pool = new Pool({ database: 'habitapp'});

const pool = new Pool({ 
    database: process.env.db,
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    port: process.env.port
});

module.exports = pool;
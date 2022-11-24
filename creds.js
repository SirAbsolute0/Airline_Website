// you can also use the online posrgres database: elephantSQL
//https://www.youtube.com/watch?v=BuJj4LCWP_4
//#postgres://username:password@hostname:port/database

const { Pool } = require('pg');

const pool = new Pool({
  host: "",
  user: "",
  password: "",
  database: "",
});

module.exports = pool;


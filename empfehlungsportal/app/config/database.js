const { Pool } = require("pg");


const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  ssl: false,
});


/*
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "zulassungssystem",
  password: "47574",
  port: 5432,
  ssl: false
})
**/

module.exports = pool;

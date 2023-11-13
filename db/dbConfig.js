const pgp = require("pg-promise")();

// get access to the environment variables
require("dotenv").config();

// create configuration object (who am I connecting to?)
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

// Connect to songs_dev db
const db = pgp(cn);

module.exports = db;

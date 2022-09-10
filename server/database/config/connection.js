const { Pool } = require('pg');
require('env2')('.env');

const { DB_URL } = process.env;
if (!DB_URL) {
  throw new Error('invalid db url');
}

const connection = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,

});

module.exports = connection;

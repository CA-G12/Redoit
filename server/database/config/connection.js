const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL, DATABASE_URL, NODE_ENV } = process.env;
let url = '';
let ssl = false;
switch (NODE_ENV) {
  case 'dev':
    url = DB_URL;
    break;
  case 'production':
    url = DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  default:
    throw new Error('invalid db url');
}
const connection = new Pool({
  connectionString: url,
  ssl,

});

module.exports = connection;

const jwt = require('jsonwebtoken');
require('dotenv').config();

const generator = (paylod) => jwt.sign(paylod, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
module.exports = generator;

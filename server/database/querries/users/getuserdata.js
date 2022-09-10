const connection = require('../../config/connection');

const getUserData = (values) => connection.query('select * from users where id = $1', values);

module.exports = getUserData;

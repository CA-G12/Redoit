const connection = require('../../config/connection');

const addPostQuery = (values) => connection.query('INSERT INTO posts(title, body, user_id, up_votes) VALUES($1, $2, $3, $4);', values);

module.exports = addPostQuery;

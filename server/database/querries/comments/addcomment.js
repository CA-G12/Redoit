const connection = require('../../config/connection');

const addCommentQuery = (values) => connection.query('INSERT INTO comments(body, user_id, post_id) VALUES($1, $2, $3);', values);

module.exports = addCommentQuery;

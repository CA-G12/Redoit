const connection = require('../../config/connection');

const getPostsForUserQuery = (values) => connection.query('SELECT * FROM posts where user_id = $1', values);

module.exports = getPostsForUserQuery;

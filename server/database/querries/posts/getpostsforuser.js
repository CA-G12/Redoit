const connection = require('../../config/connection');

const getPostsForUserQuery = (values) => connection.query('SELECT * FROM posts join users on posts.user_id = users.id where user_id = $1 ', values);

module.exports = getPostsForUserQuery;

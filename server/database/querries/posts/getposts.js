const connection = require('../../config/connection');

const getPostsQuery = () => connection.query('SELECT * FROM posts join users on posts.user_id = users.id');

module.exports = getPostsQuery;

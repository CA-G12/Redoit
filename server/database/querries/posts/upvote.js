const connection = require('../../config/connection');

const upVoteQuery = (values) => connection.query('UPDATE posts SET up_votes= up_votes + 1 where id = $1', values);

module.exports = upVoteQuery;

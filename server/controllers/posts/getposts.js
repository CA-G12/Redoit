const getPostsQuery = require('../../database/querries/posts/getposts');

const getPosts = (req, res, next) => {
  getPostsQuery()
    .then((data) => {
      res.json({ posts: data.rows });
    })
    .catch((err) => next(err));
};

module.exports = getPosts;

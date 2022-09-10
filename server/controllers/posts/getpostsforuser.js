const getPostsForUserQuery = require('../../database/querries/posts/getpostsforuser');

const getPostsForUser = (req, res, next) => {
  const { id } = req.params;
  getPostsForUserQuery([id])
    .then((data) => {
      res.json({ posts: data.rows });
    })
    .catch((err) => next(err));
};

module.exports = getPostsForUser;

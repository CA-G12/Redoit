const getProfileForUserQuery = require('../../database/querries/posts/getpostsforuser');

const getProfileForUser = (req, res, next) => {
  const id = req.user_id;
  getProfileForUserQuery([id])
    .then((data) => {
      res.json({ posts: data.rows });
    })
    .catch((err) => next(err));
};

module.exports = getProfileForUser;

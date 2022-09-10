const addPostQuery = require('../../database/querries/posts/addpost');

const addPost = (req, res, next) => {
  const { body, title } = req.body;
  const payload = [title, body, req.user_id, 0];
  addPostQuery(payload)
    .then(res.json({ message: 'Post created Successfully' }))
    .catch((err) => next(err));
};

module.exports = addPost;

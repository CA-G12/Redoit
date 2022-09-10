const deletePostQuery  = require('../../database/querries/posts/deletepost');

const deletePost = (req, res, next) => {
  const { id } = req.params;
  deletePostQuery(id)
    .then(res.json({ message: 'deleted successfully' }))
    .catch((err) => next(err));
};

module.exports = deletePost;

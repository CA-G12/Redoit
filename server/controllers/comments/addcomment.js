const addCommentQuery = require('../../database/querries/comments/addcomment');

const addComment = (req, res, next) => {
  const { body, postId } = req.body;
  const payload = [body, req.user_id, postId];
  addCommentQuery(payload)
    .then(res.json({ message: 'Comment created Successfully' }))
    .catch((err) => next(err));
};

module.exports = addComment;

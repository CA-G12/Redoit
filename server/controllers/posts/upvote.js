const upvotePostQuery = require('../../database/querries/posts/upvote');

const upVotePost = (req, res, next) => {
  const { postId } = req.body;
  const payload = [postId];
  upvotePostQuery(payload)
    .then(res.json({ message: 'Post was upvote Successfully' }))
    .catch((err) => next(err));
};

module.exports = upVotePost;

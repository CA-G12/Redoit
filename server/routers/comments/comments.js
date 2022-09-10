const router = require('express').Router();
const authorize = require('../../middlewars/authorize');
const addComment = require('../../controllers/comments/addcomment');

router.post('/addComment', authorize, addComment);

module.exports = router;

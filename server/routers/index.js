const router = require('express').Router();
const post = require('./posts');
const comment = require('./comments');
const user = require('./users');

router.use('/post', post);
router.use('/comment', comment);
router.use('/user', user);
module.exports = router;

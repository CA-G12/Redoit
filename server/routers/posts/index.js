const router = require('express').Router();
const post = require('./posts');

router.use('/post', post);
module.exports = router;

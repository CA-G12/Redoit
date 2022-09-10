const router = require('express').Router();
const comment = require('./comments');

router.use('/comment', comment);
module.exports = router;

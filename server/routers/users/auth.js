const router = require('express').Router();
const { register } = require('../../controllers/users');
const { login } = require('../../controllers/users');

router.post('/register', register);
router.post('/login', login);
module.exports = router;

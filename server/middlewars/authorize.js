const jwt = require('jsonwebtoken');
require('env2')('.env');

const authorize = (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  if (!token) res.status(403).json({ msg: 'authorization denied' });

  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verify);
    req.user_id = verify.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = authorize;

const bcrypt = require('bcrypt');
const checkuser = require('../../database/querries/signup/checkuser');
const generator = require('../../utils/jwtgenerator');
// const loginSchema = require('../../validation/login');

const login = (req, res) => {
  const { email, password } = req.body;

  // const { error } = loginSchema.validate(req.body);

  const error = null;
  if (!error) {
    checkuser(email).then((data) => {
      console.log(data);
      if (data.rows.length === 0) {
        res.status(400).json({ msg: 'email is not exist' });
      } else {
        bcrypt.compare(password, data.rows[0].user_password).then((result) => {
          if (result) {
            const token = generator({ id: data.rows[0].id });
            res.send({ token });
          } else {
            res.status(400).json({ msg: 'password is not correct' });
          }
        });
      }
    });
  } else {
    res.json({ msg: error.details[0].message, state: 'fail' });
  }
};

module.exports = login;

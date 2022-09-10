const bcrypt = require('bcrypt');
const getuser = require('../../database/querries/signup/checkuser');
const createuser = require('../../database/querries/signup/createuser');
const generator = require('../../utils/jwtgenerator');
const signUpSchema = require('../../validation/signup');

const register = (req, res) => {
  const {
    name, email, password, confirmpassword, logo,
  } = req.body;
  getuser(email).then((data) => {
    if (data.rows.length > 0) {
      return res.status(401).send('already exist ');
    }
    // const { error } = signUpSchema.validate(req.body);
    // if (error) {
    //   return res.send('fail at validation ');
    // }
    return bcrypt.hash(password, 12).then(((result) => createuser(name, result, email, logo)))
      .then((result) => {
        const token = generator({ id: result.rows[0].id });
        res.send({ token });
      });
  });
};

module.exports = register;

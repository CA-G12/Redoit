const connection = require('../../config/connection');

const getuser = (useremail) => connection.query(`Select * from users where user_email = '${useremail}'`);
module.exports = getuser;

const connection = require('../../config/connection');

const insertion = (Name, password, email, logo) => {
  const sql = {
    text: 'INSERT INTO users(user_name,user_password,user_email,user_logo) values ($1, $2, $3, $4) RETURNING *',
    values: [Name, password, email, logo],
  };
  return connection.query(sql);
};
module.exports = insertion;

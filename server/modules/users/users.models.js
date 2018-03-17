const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pcom_bbdd',
});

const userModel = {};

userModel.getUsers = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM users ORDER BY id', (err, rows) => {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
};

module.exports = userModel;

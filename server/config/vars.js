// import .env variables
require('dotenv-safe').config({
  allowEmptyValues: true,
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_dialect: process.env.DB_DIALECT,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_DATABASE,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};

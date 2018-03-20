const Sequelize = require('sequelize');
const glob = require('glob');
const path = require('path');
const config = require('./vars');

const db = {};

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
  host: config.db_host,
  dialect: config.db_dialect,
  port: config.db_port,
  operatorsAliases: false,
});

glob('./server/api/**/*.model.js', (error, files) => {
  files.forEach((file) => {
    const model = sequelize['import'](path.join('../../', file));
    db[model.name] = model;
  });
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

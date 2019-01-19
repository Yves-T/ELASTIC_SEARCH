const Sequelize = require("sequelize");
const config = require("../config/database").database;

// module.exports = new Sequelize(`${config.connectionString}/${config.dbName}`, config.options);
module.exports = new Sequelize({
  database: config.dbName,
  username: config.username,
  password: config.password,
  dialect: config.options.dialect,
  config: config.options,
});

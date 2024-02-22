const Sequelize = require("sequelize");
const sequelize = new Sequelize("praktika1", "root", "123456789Selver", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;

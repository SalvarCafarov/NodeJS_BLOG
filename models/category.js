const sequelize = require("../utils/db");
const Sequelize = require("sequelize");

const Category = sequelize.define("category", {
  categoryId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

let createDefaultRows = async () => {
  await Category.sync({ alter: true });
  const count = await Category.count();
  if (count === 0) {
    Category.bulkCreate([
      {
        name: "javaScript",
      },
      {
        name:"React"
      },
    ]);
  }
};



createDefaultRows();
module.exports = Category;

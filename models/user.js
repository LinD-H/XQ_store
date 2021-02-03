const sequelize = require("./db");
const { DataTypes } = require("sequelize");
//创建一个模型对象
const User = sequelize.define(
  "User",
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,

  }
);

module.exports = User;

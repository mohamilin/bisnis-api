"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      data_user.hasMany(models.data_transaction, {
        as: 'transaction',
        foreignKey: 'user_id'
      })
      // define association here
    }
  }
  data_user.init(
    {
      user_id: { type: DataTypes.STRING, primaryKey: true },
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.TINYINT,
      role: DataTypes.ENUM("user", "admin"),
    },
    {
      sequelize,
      modelName: "data_user",
    }
  );
  return data_user;
};

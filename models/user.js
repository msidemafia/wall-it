'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {underscored: true});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Stock_buy, {as: "Buys"})
    User.hasMany(models.Stock_sell, {as: "Sells"})
  };
  return User;
};
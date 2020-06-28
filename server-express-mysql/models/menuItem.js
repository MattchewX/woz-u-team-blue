"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "menuItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {}
  );
  Task.associate = function(models) {
    // associations can be defined here
  };
  return menuItem;
};

"use strict";
module.exports = (sequelize, DataTypes) => {
  const menuItem = sequelize.define(
    "menuItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      name: DataTypes.STRING
    },
   {}
  );
  
  menuItem.associate = function(models) {
    // associations can be defined here
  };
  return menuItem;
};

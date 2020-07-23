module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "menuItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
     
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4,2),
      description: DataTypes.STRING
    },
   {
     tableName: 'menuItems'
   }
  );
};

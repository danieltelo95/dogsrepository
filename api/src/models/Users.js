const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Users', {
      id: {
         type: DataTypes.UUID,
         defaultValue: Sequelize.UUIDV4,
         allowNull: false,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }

   });
};



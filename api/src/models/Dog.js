const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },

    altura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    peso: {
      type: DataTypes.STRING,
      allowNull: false      
    },

    añosdevida: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
};

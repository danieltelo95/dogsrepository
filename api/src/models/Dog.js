const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
   },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    weight: {
      type: DataTypes.STRING,
      allowNull: false      
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: false
    },
    temperamentPk: {
      type: DataTypes.TEXT,
      allowNull: true
    }

  });
};

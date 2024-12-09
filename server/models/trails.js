'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trails.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    crowd_size: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    off_leash: {
      type: DataTypes.BOOLEAN, 
    },
    rating: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Trails',
    tableName:'trails',
    timestamps: true
  });
  return Trails;
};
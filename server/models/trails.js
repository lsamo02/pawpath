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
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    trail_name: DataTypes.STRING,
    crowd_size: DataTypes.STRING,
    description: DataTypes.STRING,
    off_leash: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trails',
  });
  return Trails;
};
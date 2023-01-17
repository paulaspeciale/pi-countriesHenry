const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    //id por defecto de sequelize
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {max:5, min:1} //entre 1-5
    },
    duration: {
      type: DataTypes.STRING
    },
    season: {
      type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
    },
  });
};
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('Address', {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        country: DataTypes.STRING
    });
}

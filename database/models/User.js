const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: type.STRING
    })
}
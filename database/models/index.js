const sequelize = require('sequelize');
const UserModel = require('./User');


module.exports = [
    (config) => UserModel(config, sequelize)
];



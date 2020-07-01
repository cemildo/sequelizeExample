const UserModel = require('./User');
const AddressModel = require('./Address');

module.exports = [
    (config) => UserModel(config),
    (config) => AddressModel(config)
];



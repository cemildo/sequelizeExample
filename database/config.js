const dotenv = require('dotenv').config();

const development = {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "sqlite",
    storage: './sqlite-dev.db',

};

const test = {
    dialect: "sqlite",
    storage: './sqlite-test.db',
    logging: true
};

const production = {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "sqlite",
    storage: './sqlite-prod.db',
};

module.exports = {
    development,
    test,
    production
}

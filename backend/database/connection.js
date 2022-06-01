const { Sequelize } = require('sequelize');
const { databaseConfig } = require('../config');
const setUpModels = require('./models');

const sequelize = new Sequelize(databaseConfig);

setUpModels(sequelize);

module.exports =  sequelize; 
'use strict';

const { TABLE_NAME, UserSchema } = require("../models/user");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, UserSchema);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable(TABLE_NAME);

  }
};

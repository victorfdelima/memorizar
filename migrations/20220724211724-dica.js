'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('tips', 'dica', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('tips', 'dica')
  }
};

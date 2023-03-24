'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_transactions', {
      trans_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      trans_date: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.STRING(25)
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      qty_order: {
        type: Sequelize.INTEGER
      },
      total_order: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data_transactions');
  }
};
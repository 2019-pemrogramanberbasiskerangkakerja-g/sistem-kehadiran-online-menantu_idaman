'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Absensis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      waktu_mulai: {
        type: Sequelize.DATE
      },
      waktu_selesai: {
        type: Sequelize.DATE
      },
      peserta_masuk: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      id_matkul: {
          type: Sequelize.INTEGER,
          references: {
              model: 'MataKuliahs',
              key: 'id',
              deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }
      },
      pertemuan: {
        type: Sequelize.INTEGER
      },
      ruang: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Absensis');
  }
};
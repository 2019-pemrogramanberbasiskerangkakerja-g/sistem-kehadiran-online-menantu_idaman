'use strict';
module.exports = (sequelize, DataTypes) => {
  const MataKuliah = sequelize.define('MataKuliah', {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    peserta: DataTypes.ARRAY(DataTypes.JSON)
  }, {});
  MataKuliah.associate = function(models) {
    // associations can be defined here
  };
  return MataKuliah;
};
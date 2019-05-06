'use strict';
module.exports = (sequelize, DataTypes) => {
  const MataKuliah = sequelize.define('MataKuliah', {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    id_matkul: DataTypes.STRING,
    peserta: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  MataKuliah.associate = function(models) {
    // associations can be defined here
  };
  return MataKuliah;
};
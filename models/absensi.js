'use strict';
module.exports = (sequelize, DataTypes) => {
  const Absensi = sequelize.define('Absensi', {
    waktu_mulai: DataTypes.DATE,
    waktu_selesai: DataTypes.DATE,
    peserta_masuk: DataTypes.ARRAY(DataTypes.JSON),
    pertemuan: DataTypes.INTEGER
  }, {});
  Absensi.associate = function(models) {
    // associations can be defined here
  };
  return Absensi;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const MataKuliah = sequelize.define('MataKuliah', {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    ruang: DataTypes.STRING,
    id_matkul: DataTypes.STRING,
    peserta: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  MataKuliah.associate = function(models) {
    MataKuliah.hasMany(models.Absensi, {
      foreignKey: 'id_matkul'
    });
  };
  return MataKuliah;
};
const users = require('../models').User;
const matakuliahs = require('../models').MataKuliah;
const absensis = require('../models').Absensi;

module.exports = {
    seed() {
        users
            .create({
                username: '5115100111',
                password: '$2y$10$/EzWN8TvkKs3uaWM/o89Ceod8MKfMXc4qi6aK4Ntk6/B8sCQOvyF2'
            }),
        users
            .create({
                username: '5115100039',
                password: '$2y$10$kcxwEkQ0Q8mDPlnRjr17w.pxWnsDRGx3NjqXu4oHhxHl1hnZnGKta'
            }),

        matakuliahs
            .create({
                nama: 'PBKK',
                kelas: 'G',
                id_matkul: 'IF123',
                peserta: ["5115100111", "5115100039"]
            }),
        matakuliahs
            .create({
                nama: 'PBKK',
                kelas: 'H',
                id_matkul: 'IF123',
                peserta: ["5115100110", "511500112"]
            }),
        matakuliahs
            .create({
                nama: 'TA',
                kelas: 'H',
                id_matkul: 'IF122',
                peserta: ["5115100110", "511500112"]
            }),
        absensis
            .create({
                waktu_mulai: '2019-05-06T03:52:20.964Z',
                waktu_selesai:'2019-05-06T04:52:20.964Z',
                peserta_masuk: [{"username":"5115100110", "waktu_masuk":"2019-05-06T03:53:20.964Z"}, {"username":"5115100112", "waktu_masuk":"2019-05-06T03:55:20.964Z"}],
                id_matkul: 'IF123',
                pertemuan: 1
            }),
            absensis
            .create({
                waktu_mulai: '2019-05-06T03:52:20.964Z',
                waktu_selesai:'2019-05-06T04:52:20.964Z',
                peserta_masuk: [{"username":"5115100110", "waktu_masuk":"2019-05-06T03:53:20.964Z"}, {"username":"5115100112", "waktu_masuk":"2019-05-06T03:55:20.964Z"}],
                id_matkul: 'IF123',
                pertemuan: 2
            })
    }
}
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
                id_matkul: 'IF4605',
                peserta: ["5115100002","5115100009","5115100012","5115100022","5115100026","5115100035","5115100039","5115100050","5115100057","5115100060","5115100064","5115100073","5115100105","5115100108","5115100111","5115100123","5115100132","5115100153","5115100154","5115100156","5115100163","5115100167","5115100168","5115107003","5115107005","5115107006","5115107007","5116100083","5116100120","5116100164"]
            }),
        matakuliahs
            .create({
                nama: 'PBKK',
                kelas: 'H',
                id_matkul: 'IF4605',
                peserta: ["5115100021","5115100045","5115100046","5115100052","5115100078","5115100088","5115100089","5115100101","5115100119","5115100121","5115100146","5115100149","5115100155","5115100164","5115100166","5115100172","5115100174","5116100003","5116100034","5116100036","5116100039","5116100040","5116100047","5116100074","5116100085","5116100133","5116100140","5116100159","5116100162","5116100168","5116100187","5116100191"]
            }),
        matakuliahs
            .create({
                nama: 'TA',
                kelas: 'H',
                id_matkul: 'IF122',
                peserta: ["5115100110", "5115100111"]
            }),
        absensis
            .create({
                waktu_mulai: '2019-05-06T03:52:20.964Z',
                waktu_selesai:'2019-05-06T04:52:20.964Z',
                peserta_masuk: [{"username":"5115100110", "waktu_masuk":"2019-05-06T03:53:20.964Z"}, {"username":"5115100112", "waktu_masuk":"2019-05-06T03:55:20.964Z"}],
                id_matkul: 'IF4605',
                pertemuan: 1
            }),
            absensis
            .create({
                waktu_mulai: '2019-05-06T03:52:20.964Z',
                waktu_selesai:'2019-05-06T04:52:20.964Z',
                peserta_masuk: [{"username":"5115100110", "waktu_masuk":"2019-05-06T03:53:20.964Z"}, {"username":"5115100112", "waktu_masuk":"2019-05-06T03:55:20.964Z"}],
                id_matkul: 'IF4605',
                pertemuan: 2
            })
    }
}
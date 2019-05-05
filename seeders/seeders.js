const users = require('../models').User;
const matakuliahs = require('../models').matakuliah;
const absensis = require('../models').absensi;

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
            })
    }
}
const monngoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017/latihan';
monngoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil konek ke Mongo')
    });
const mongoose = require('mongoose')


const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
     
    }

})

module.exports = mongoose.model('User',userschema)